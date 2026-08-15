#!/usr/bin/env python3
"""Find rising Roblox games for Upvane.

Rank by breakout signals, not raw CCU. Identity is universeId, never the name.
"""
from __future__ import annotations

import json
import re
import ssl
import sys
import time
import uuid
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen

UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
)
CTX = ssl.create_default_context()
ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "data" / "rising"
SNAP_DIR = OUT_DIR / "snapshots"
CJK = re.compile(r"[\u4e00-\u9fff]+")


def strip_cjk(value: str) -> str:
    return CJK.sub("", value).strip()

# Thresholds live in one place (do not scatter).
T = {
    "denom_floor": 50,          # % growth uses max(old, this)
    "fake_old_ccu": 50,         # old CCU below this: % is noise
    "low_ccu_hard": 100,        # momentum *= 0.25
    "low_ccu_mid": 300,         # *= 0.5
    "low_ccu_soft": 1000,       # *= 0.8
    "strong_ccu": 15000,        # below this, Google branded search is usually empty
    "try_ccu": 12000,
    "watch_ccu": 8000,
    "early_ccu_min": 80,
    "resurgent_age": 90,
    "new_in_top_playing_age": 60,
    "late_ccu": 220000,         # only then "already too late"
    "hot_ccu": 40000,           # already on fire; check SERP, don't ignore
    "min_visits_per_day": 80000,
    "snapshot_min_hours": 20,   # only then treat prev CCU as ~24h
}

BLACKLIST = [
    "grow a garden 2",
    "brookhaven",
    "murder mystery 2",
    "blox fruits",
    "adopt me",
    "pet simulator 99",
    "steal a brainrot",
    "rivals",
    "99 nights in the forest",
    "dress to impress",
    "the strongest battlegrounds",
]
THIN_RE = re.compile(
    r"obby|escape|keyboard|bingo|hug tower|rollercoaster|troll|"
    r"roleplay|\brp\b|wash the|fling things|catalog avatar",
    re.I,
)
DEPTH_RE = re.compile(
    r"\bcode[s]?\b|redeem|weapon|item|boss|npc|quest|class|race|trait|"
    r"skill|pet|trad(?:e|ing)|craft|drop rate|map|location|build|"
    r"upgrade|currenc|recipe|achievement|merge|hatch|unit|raid|"
    r"evolve|tycoon|tower defense|\btd\b|summon|gacha|bestiary|"
    r"calculator|rebirth|mutation|inventory",
    re.I,
)
EARLY_RE = re.compile(
    r"early access|early testing|\balpha\b|\bbeta\b|pre-alpha|\bdemo\b|\bea\b",
    re.I,
)
# These names get playtime on Roblox but almost no "{name} codes" searches.
JOKE_RE = re.compile(
    r"1 billion|billion ducks|clean all the leaves|endless games|no ads|"
    r"unbox asmr|crunchy asmr|cut grass|hug tower|catch 1 billion",
    re.I,
)
# Clones of templates that already produce Google queries.
TEMPLATE_RE = re.compile(
    r"\bsteal\b|grow a |merge |tower defense|\btd\b|tycoon|hatch|"
    r"brainrot|anomaly|evolution|backrooms|bestiary|pets?\b",
    re.I,
)


def now_utc() -> datetime:
    return datetime.now(timezone.utc)


def get_json(url: str) -> dict:
    last_err = None
    for attempt in range(3):
        try:
            req = Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
            with urlopen(req, context=CTX, timeout=25) as resp:
                return json.load(resp)
        except Exception as err:  # noqa: BLE001 — degrade, don't crash the scan
            last_err = err
            time.sleep(0.8 * (attempt + 1))
    raise last_err


def safe_explore(sort_id: str) -> list[dict]:
    try:
        return explore(sort_id)
    except Exception as err:  # noqa: BLE001
        print(f"warn: skip {sort_id}: {err}", file=sys.stderr)
        return []


def safe_ggaid() -> list[dict]:
    try:
        return ggaid_trending()
    except Exception as err:  # noqa: BLE001
        print(f"warn: skip ggaid: {err}", file=sys.stderr)
        return []


def session_id() -> str:
    return str(uuid.uuid4())


def explore(sort_id: str) -> list[dict]:
    sid = session_id()
    url = (
        "https://apis.roblox.com/explore-api/v1/get-sort-content?"
        + urlencode({"sessionId": sid, "sortId": sort_id})
    )
    data = get_json(url)
    out = []
    for i, g in enumerate(data.get("games") or [], 1):
        out.append(
            {
                "universeId": int(g["universeId"]),
                "placeId": int(g.get("rootPlaceId") or 0),
                "name": g.get("name") or "",
                "playing": int(g.get("playerCount") or 0),
                "genre": g.get("genreL1") or "",
                "up": int(g.get("totalUpVotes") or 0),
                "down": int(g.get("totalDownVotes") or 0),
                "rank": i,
            }
        )
    return out


def ggaid_trending() -> list[dict]:
    data = get_json("https://www.ggaid.com/api/games/trending")
    out = []
    for g in data.get("data") or []:
        try:
            uid = int(g["id"])
        except (TypeError, ValueError, KeyError):
            continue
        out.append(
            {
                "universeId": uid,
                "name": g.get("name") or "",
                "playing": int(float(g.get("currentPlaying") or 0)),
                "pastPlaying": int(float(g.get("pastPlaying") or 0)),
                "change7d": g.get("change7d") or "",
                "creator": g.get("creatorName") or "",
            }
        )
    return out


def game_details(ids: list[int]) -> dict[int, dict]:
    details: dict[int, dict] = {}
    for i in range(0, len(ids), 50):
        chunk = ids[i : i + 50]
        url = "https://games.roblox.com/v1/games?" + urlencode(
            {"universeIds": ",".join(str(x) for x in chunk)}
        )
        try:
            data = get_json(url)
        except Exception as err:  # noqa: BLE001
            print(f"warn: skip details chunk: {err}", file=sys.stderr)
            continue
        for g in data.get("data") or []:
            created = g.get("created") or ""
            updated = g.get("updated") or ""
            age_days = parse_age_days(created)
            details[int(g["id"])] = {
                "name": g.get("name") or "",
                "playing": int(g.get("playing") or 0),
                "visits": int(g.get("visits") or 0),
                "favorited": int(g.get("favoritedCount") or 0),
                "created": created,
                "updated": updated,
                "ageDays": age_days,
                "updatedHoursAgo": parse_hours_ago(updated),
                "placeId": int(g.get("rootPlaceId") or 0),
                "creator": (g.get("creator") or {}).get("name") or "",
                "genre": g.get("genre_l2") or g.get("genre_l1") or "",
                "description": g.get("description") or "",
                "url": "https://www.roblox.com" + (g.get("canonicalUrlPath") or ""),
            }
    return details


def parse_age_days(iso: str) -> int | None:
    if not iso:
        return None
    try:
        dt = datetime.fromisoformat(iso.replace("Z", "+00:00"))
        return max(0, int((now_utc() - dt).total_seconds() // 86400))
    except ValueError:
        return None


def parse_hours_ago(iso: str) -> float | None:
    if not iso:
        return None
    try:
        dt = datetime.fromisoformat(iso.replace("Z", "+00:00"))
        return max(0.0, (now_utc() - dt).total_seconds() / 3600)
    except ValueError:
        return None


def is_blacklisted(name: str) -> bool:
    n = name.lower()
    return any(b in n for b in BLACKLIST)


def growth_pct(current: int, old: int | None) -> float | None:
    if old is None:
        return None
    return (current - old) / max(old, T["denom_floor"])


def load_prev_snapshot() -> dict:
    files = sorted(SNAP_DIR.glob("*.json"))
    if not files:
        latest = OUT_DIR / "latest.json"
        if latest.exists():
            return json.loads(latest.read_text(encoding="utf-8"))
        return {}
    return json.loads(files[-1].read_text(encoding="utf-8"))


def prev_ccu_map(prev: dict) -> tuple[dict[int, int], float | None]:
    games = prev.get("games") or []
    stamp = prev.get("generatedAt") or ""
    hours = None
    if stamp:
        try:
            dt = datetime.fromisoformat(stamp.replace("Z", "+00:00"))
            hours = (now_utc() - dt).total_seconds() / 3600
        except ValueError:
            hours = None
    return {int(g["universeId"]): int(g.get("playing") or 0) for g in games}, hours


def merge_candidates() -> list[dict]:
    prev = load_prev_snapshot()
    prev_ccu, prev_hours = prev_ccu_map(prev)
    use_24h = prev_hours is not None and prev_hours >= T["snapshot_min_hours"]

    coming = safe_explore("up-and-coming")
    trending = safe_explore("top-trending")
    playing_now = safe_explore("top-playing-now")
    paid = safe_explore("top-paid-access")
    ggaid = safe_ggaid()
    by_id: dict[int, dict] = {}

    def bump(uid: int, source: str, extra: dict | None = None):
        row = by_id.setdefault(
            uid,
            {
                "universeId": uid,
                "sources": set(),
                "ranks": {},
                "name": (extra or {}).get("name") or "",
            },
        )
        row["sources"].add(source)
        if extra:
            if extra.get("rank"):
                row["ranks"][source] = extra["rank"]
            if extra.get("name"):
                row["name"] = extra["name"]
            if extra.get("playing"):
                row["playing"] = extra["playing"]
            if extra.get("pastPlaying") is not None:
                row["pastPlaying"] = extra["pastPlaying"]
            if extra.get("change7d"):
                row["change7d"] = extra["change7d"]
            if extra.get("placeId"):
                row["placeId"] = extra["placeId"]
            if extra.get("genre"):
                row["genre"] = extra["genre"]
            if extra.get("up") is not None:
                row["up"] = extra["up"]
            if extra.get("down") is not None:
                row["down"] = extra["down"]
            if extra.get("creator"):
                row["creator"] = extra["creator"]

    for g in coming:
        bump(g["universeId"], "up-and-coming", g)
    for g in trending:
        bump(g["universeId"], "top-trending", g)
    for g in ggaid:
        bump(g["universeId"], "ggaid-7d", g)
    for g in paid:
        bump(g["universeId"], "top-paid-access", g)
    for g in playing_now:
        uid = g["universeId"]
        if uid in by_id:
            bump(uid, "top-playing-now", g)
        else:
            # Keep only in case it is a young breakout; drop later if old.
            bump(uid, "top-playing-now", g)

    details = game_details(list(by_id))
    rows = []
    for uid, row in by_id.items():
        info = details.get(uid, {})
        name = info.get("name") or row.get("name") or ""
        playing = int(info.get("playing") or row.get("playing") or 0)
        age = info.get("ageDays")
        desc = info.get("description") or ""
        hay = f"{name} {info.get('genre','')} {desc}"
        sources = sorted(row["sources"])
        only_playing = sources == ["top-playing-now"]
        only_paid = sources == ["top-paid-access"]
        if only_playing and (age is None or age > T["new_in_top_playing_age"]):
            continue
        early = bool(EARLY_RE.search(hay))
        if only_paid and not early and (age is None or age > T["resurgent_age"]):
            continue

        past_7d = row.get("pastPlaying")
        g7 = growth_pct(playing, past_7d if isinstance(past_7d, int) else None)
        g24 = growth_pct(playing, prev_ccu.get(uid)) if use_24h else None

        rec = {
            "universeId": uid,
            "placeId": info.get("placeId") or row.get("placeId") or 0,
            "name": name,
            "playing": playing,
            "visits": info.get("visits") or 0,
            "favorited": info.get("favorited") or 0,
            "ageDays": age,
            "created": info.get("created") or "",
            "updatedHoursAgo": info.get("updatedHoursAgo"),
            "genre": info.get("genre") or row.get("genre") or "",
            "creator": info.get("creator") or row.get("creator") or "",
            "url": info.get("url") or "",
            "sources": sources,
            "ranks": row.get("ranks") or {},
            "change7d": row.get("change7d") or "",
            "pastPlaying": past_7d,
            "growth7d": g7,
            "growth24h": g24,
            "likeRatio": like_ratio(row.get("up"), row.get("down")),
            "blacklisted": is_blacklisted(name),
            "thin": bool(THIN_RE.search(hay)),
            "jokeName": bool(JOKE_RE.search(name)),
            "templateHit": bool(TEMPLATE_RE.search(hay)),
            "earlyAccess": early,
            "depthHits": len(set(DEPTH_RE.findall(hay))),
        }
        rec["visitsPerDay"] = int(rec["visits"] / max(age or 1, 1))
        rec["hasDepthHint"] = rec["depthHits"] >= 2
        rec["lowBase"] = is_low_base(rec)
        rec["updateSpike"] = is_update_spike(rec)
        rec["score"] = score(rec)
        rec["reasons"], rec["risks"] = reasons_risks(rec)
        rec["bucket"] = bucket(rec)
        rows.append(rec)
    rows.sort(key=lambda r: (-r["score"], -r["playing"]))
    return rows


def like_ratio(up, down) -> float | None:
    try:
        up_i = int(up or 0)
        down_i = int(down or 0)
    except (TypeError, ValueError):
        return None
    tot = up_i + down_i
    if tot < 50:
        return None
    return up_i / tot


def is_low_base(r: dict) -> bool:
    past = r.get("pastPlaying")
    if isinstance(past, int) and past < T["fake_old_ccu"] and r["playing"] < 8000:
        return True
    if r["playing"] < T["low_ccu_hard"]:
        return True
    return False


def is_update_spike(r: dict) -> bool:
    age = r["ageDays"]
    hours = r.get("updatedHoursAgo")
    if age is None or hours is None:
        return False
    return age > T["resurgent_age"] and hours <= 48 and r["playing"] >= T["try_ccu"]


def heat_points(r: dict) -> int:
    """0-40. Search volume on Google roughly follows playtime, not chart novelty."""
    pts = 0
    ccu = r["playing"]
    age = r["ageDays"] if r["ageDays"] is not None else 999
    if 25000 <= ccu <= 80000:
        pts += 22
    elif 15000 <= ccu < 25000:
        pts += 16
    elif 80000 < ccu <= 180000 and age <= 60:
        pts += 20  # already exploding; codes search is live
    elif 12000 <= ccu < 15000:
        pts += 8
    elif 80000 < ccu:
        pts += 6
    vpd = r.get("visitsPerDay") or 0
    if vpd >= 800000:
        pts += 14
    elif vpd >= 300000:
        pts += 10
    elif vpd >= 120000:
        pts += 6
    elif vpd >= 80000:
        pts += 3
    if r.get("templateHit"):
        pts += 6
    if r.get("jokeName"):
        pts -= 14
    return max(0, min(40, pts))


def momentum_points(r: dict) -> int:
    """0-20 from real growth. Sitting on two carousels is not momentum."""
    pts = 0
    g24 = r.get("growth24h")
    g7 = r.get("growth7d")
    if g24 is not None:
        if g24 >= 3:
            pts += 10
        elif g24 >= 1.5:
            pts += 7
        elif g24 >= 0.5:
            pts += 4
        elif g24 >= 0.2:
            pts += 2
    if g7 is not None:
        past = r.get("pastPlaying")
        if isinstance(past, int) and past < T["fake_old_ccu"]:
            pts += 0
        elif g7 >= 1.5:
            pts += 8
        elif g7 >= 0.5:
            pts += 5
        elif g7 >= 0.2:
            pts += 2
    if pts == 0 and r["playing"] >= T["strong_ccu"]:
        if "top-playing-now" in r["sources"] and "top-trending" in r["sources"]:
            pts += 6
        elif "ggaid-7d" in r["sources"] and not r["lowBase"]:
            pts += 5
        elif "top-trending" in r["sources"]:
            pts += 3
    ccu = r["playing"]
    if ccu < T["low_ccu_hard"]:
        pts = int(pts * 0.25)
    elif ccu < T["low_ccu_mid"]:
        pts = int(pts * 0.5)
    elif ccu < T["low_ccu_soft"]:
        pts = int(pts * 0.8)
    return min(20, pts)


def chart_points(r: dict) -> int:
    """0-12. Trending rank matters; Up-and-Coming is only a weak freshness tag."""
    pts = 0
    tr = (r.get("ranks") or {}).get("top-trending")
    if tr:
        if tr <= 10:
            pts += 8
        elif tr <= 25:
            pts += 6
        elif tr <= 50:
            pts += 3
    play_rank = (r.get("ranks") or {}).get("top-playing-now")
    age = r["ageDays"] if r["ageDays"] is not None else 999
    if play_rank and play_rank <= 30 and age <= 60 and r["playing"] >= T["strong_ccu"]:
        pts += 4
    if "up-and-coming" in r["sources"] and r["playing"] >= T["strong_ccu"]:
        pts += 2
    return min(12, pts)


def freshness_points(age: int | None) -> int:
    """Tie-breaker only. New + tiny != potential."""
    if age is None:
        return 0
    if age <= 21:
        return 6
    if age <= 45:
        return 4
    if age <= 75:
        return 2
    return 0


def engagement_points(r: dict) -> int:
    pts = 0
    ratio = r.get("likeRatio")
    if ratio is None:
        return 0
    if ratio >= 0.95:
        pts += 5
    elif ratio >= 0.90:
        pts += 4
    elif ratio >= 0.85:
        pts += 3
    elif ratio >= 0.80:
        pts += 2
    fav, visits = r.get("favorited") or 0, r.get("visits") or 0
    if visits >= 10000 and fav / visits >= 0.004:
        pts += 3
    elif visits >= 10000 and fav / visits >= 0.002:
        pts += 2
    return min(10, pts)


def score(r: dict) -> int:
    if r["blacklisted"]:
        return 0
    s = 0
    s += heat_points(r)
    s += momentum_points(r)
    s += chart_points(r)
    s += freshness_points(r["ageDays"])
    s += engagement_points(r)
    s += min(8, r["depthHits"])
    if r["thin"] or r.get("jokeName"):
        s -= 12
    return max(0, min(100, s))


def reasons_risks(r: dict) -> tuple[list[str], list[str]]:
    reasons, risks = [], []
    tr = (r.get("ranks") or {}).get("top-trending")
    uc = (r.get("ranks") or {}).get("up-and-coming")
    if tr:
        reasons.append(f"Global Trending #{tr}")
    if uc:
        reasons.append(f"Up-and-Coming #{uc}")
    if r.get("growth7d") is not None and not r["lowBase"]:
        reasons.append(f"7d CCU {r['growth7d']:+.0%}")
    if r.get("growth24h") is not None:
        reasons.append(f"~24h CCU {r['growth24h']:+.0%}")
    if r["ageDays"] is not None and r["ageDays"] <= 14:
        reasons.append(f"新游 {r['ageDays']}d")
    if r["earlyAccess"]:
        reasons.append("Early Access / Beta")
    vpd = r.get("visitsPerDay") or 0
    if vpd >= 200000:
        reasons.append(f"日均访问 {vpd:,}")
    if r.get("templateHit"):
        reasons.append("热门模板克隆")
    if r["playing"] >= T["hot_ccu"] and (r["ageDays"] or 999) <= 60:
        reasons.append("已经在爆")
    if r["hasDepthHint"]:
        reasons.append(f"机制线索 {r['depthHits']} 项")
    if r["lowBase"]:
        risks.append("低基数假增速")
    if r.get("jokeName"):
        risks.append("名字很难变成搜索词")
    if r["thin"]:
        risks.append("玩法可能很薄")
    if r["ageDays"] is None:
        risks.append("没有可靠发售日期")
    elif r["ageDays"] > T["resurgent_age"]:
        risks.append("年龄 >90 天，不是新游窗口")
    if r["updateSpike"]:
        risks.append("可能是老游更新尖峰")
    if r["playing"] > 80000:
        risks.append("CCU 已偏晚，先看 SERP 还有没有缝")
    if len(r["sources"]) == 1:
        risks.append("只有一个来源")
    return reasons, risks


def bucket(r: dict) -> str:
    if r["blacklisted"]:
        return "skip"
    age = r["ageDays"]
    if age is not None and age > T["resurgent_age"]:
        if r["playing"] >= T["try_ccu"] and "top-trending" in r["sources"]:
            return "resurgent"
        return "skip"
    if r["thin"] or r.get("jokeName"):
        if r["playing"] >= T["hot_ccu"] and (age or 999) <= 45:
            return "watch"  # hot meme; unlikely codes/wiki, don't promote
        return "skip"
    if r["earlyAccess"] and r["playing"] < T["strong_ccu"]:
        return "early"
    hot_new = r["playing"] >= T["hot_ccu"] and (age or 999) <= 60
    searchable = r["playing"] >= T["strong_ccu"] and (
        (r.get("visitsPerDay") or 0) >= T["min_visits_per_day"] or r["playing"] >= 25000
    )
    if r["score"] >= 48 and searchable and not r["lowBase"]:
        return "strong"
    if r["score"] >= 40 and r["playing"] >= T["try_ccu"] and not r["lowBase"] and searchable:
        return "try"
    if hot_new:
        return "try"
    if r["playing"] >= T["watch_ccu"] or r["earlyAccess"]:
        return "watch"
    return "skip"


def fmt_pct(v: float | None) -> str:
    if v is None:
        return "N/A"
    return f"{v:+.0%}"


def write_report(rows: list[dict]) -> Path:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    SNAP_DIR.mkdir(parents=True, exist_ok=True)
    stamp = now_utc().strftime("%Y-%m-%dT%H:%MZ")
    day = now_utc().strftime("%Y-%m-%d")
    serializable = []
    for g in rows:
        item = dict(g)
        item["growth7d"] = None if g["growth7d"] is None else round(g["growth7d"], 4)
        item["growth24h"] = None if g["growth24h"] is None else round(g["growth24h"], 4)
        serializable.append(item)
    payload = {"generatedAt": stamp, "games": serializable, "thresholds": T}
    (OUT_DIR / f"{day}.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (OUT_DIR / "latest.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    home = {
        "generatedAt": stamp,
        "games": [
            {
                "universeId": g["universeId"],
                "placeId": g["placeId"],
                "name": strip_cjk(str(g.get("name") or "")),
                "playing": g["playing"],
                "score": g["score"],
                "ageDays": g["ageDays"],
                "genre": strip_cjk(str(g.get("genre") or "")),
                "creator": strip_cjk(str(g.get("creator") or "")),
                "url": g["url"],
            }
            for g in serializable
            if strip_cjk(str(g.get("name") or ""))
        ],
    }
    (OUT_DIR / "home.json").write_text(
        json.dumps(home, ensure_ascii=True, indent=2), encoding="utf-8"
    )
    snap_path = SNAP_DIR / f"{now_utc().strftime('%Y-%m-%dT%H%M')}Z.json"
    snap_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")

    labels = {
        "strong": "强烈推荐（先开游戏看 codes / 工具切口）",
        "try": "可做",
        "early": "提前池（Beta / Paid，不当天建页）",
        "resurgent": "老游复活（不要当成新窗口）",
        "watch": "观察",
    }

    def lines(bucket_name: str, limit: int = 10) -> list[str]:
        chunk = [g for g in rows if g["bucket"] == bucket_name]
        out = []
        for i, g in enumerate(chunk[:limit], 1):
            age = f"{g['ageDays']}d" if g["ageDays"] is not None else "?"
            src = ", ".join(g["sources"])
            why = "；".join(g["reasons"][:4]) or "—"
            risk = "；".join(g["risks"][:3])
            out.append(
                f"### {i}. {g['name']} · {g['score']}/100\n"
                f"- CCU {g['playing']:,} · 日均访问 {(g.get('visitsPerDay') or 0):,} · 龄 {age} · {g['genre'] or 'n/a'}\n"
                f"- 7d {fmt_pct(g['growth7d'])} · ~24h {fmt_pct(g['growth24h'])} · {src}\n"
                f"- 原因：{why}\n"
                + (f"- 风险：{risk}\n" if risk else "")
                + f"- {g['url']}\n\n"
            )
        return out or ["（无）\n"]

    counts = {k: sum(1 for g in rows if g["bucket"] == k) for k in labels}
    md = [
        f"# Upvane 上升游戏扫描 · {day}\n",
        f"生成 {stamp} UTC。按**已经能搜到的热度**排队：CCU + 日均访问，新只是加分。低于约 15K CCU 不当强烈推荐。\n",
    ]
    for key, title in labels.items():
        md.append(f"## {title}\n")
        md.extend(lines(key))
    md += [
        "## 今日扫描统计\n",
        f"- 合并候选 {len(rows)} 个（universeId 去重）\n",
        f"- strong {counts['strong']} / try {counts['try']} / early {counts['early']} / "
        f"resurgent {counts['resurgent']} / watch {counts['watch']} / "
        f"skip {sum(1 for g in rows if g['bucket']=='skip')}\n",
        "人工每天最多看 5 个 strong/try，最多收录 1 个。CCU <15K 或日均访问太低 = 搜索量通常不够，只进观察。early 不建页。resurgent 不当新窗口。\n",
    ]
    path = OUT_DIR / f"{day}.md"
    text = "".join(md)
    path.write_text(text, encoding="utf-8")
    (OUT_DIR / "latest.md").write_text(text, encoding="utf-8")
    return path


def main() -> int:
    rows = merge_candidates()
    path = write_report(rows)
    print(path)
    for b in ("strong", "try", "early", "resurgent"):
        chunk = [g for g in rows if g["bucket"] == b]
        print(f"{b}={len(chunk)}")
        for g in chunk[:6]:
            print(f"  {g['score']:3d}  {g['playing']:7,d}  {g['name']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
