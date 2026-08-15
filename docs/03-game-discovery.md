# 如何找 Roblox 上「有潜力」的游戏

潜力 ≠ 新。Roblox 的 Up-and-Coming 全是新游，很多永远变不成 Google 搜索。

对 Upvane 来说，潜力 = **名字已经被很多人拿去搜，而且还在涨**。你们自己的 Build a Ring 也证明了：搜索量跟着 CCU 走，不跟「发布了几天」走。低于大约 **15K 在线**，`{游戏} codes` 通常几乎没量。

身份键永远是 `universeId`。

## 三层漏斗

```text
① 热度信号（已经在火，或正在明显变火）
     ↓
② 排除假新、假增速、不可搜的名字
     ↓
③ 人工：codes / 工具切口 + SERP 缝
```

### ① 自动来源

| 信号 | 来源 | 权重 |
|------|------|------|
| 现在有多少人在玩 + 日均访问 | Roblox games API | **主信号。** CCU ≥15K 且日均访问够高，才可能有搜索。 |
| Top Playing Now | Roblox Charts | 新游冲进总榜前 30 = 真的在爆，不是轮播位。 |
| Top Trending | Roblox Charts | 一周相对增长。当确认「还在涨」。 |
| 7 日增速 | GGAID | 只认基数已经不算小的涨幅。 |
| Up-and-Coming | Roblox Charts | **只是新，弱信号。** 单独出现、CCU 又低 → 丢掉。 |

**先不自动做：** YouTube / TikTok、Google 搜索量（人工闸去看 SERP）。

```bash
python3 scripts/discover_rising.py
```

### ② 机器闸

- 强烈推荐地板：**CCU ≥ 15,000**，并且日均访问 ≥ 80,000（或 CCU ≥ 25,000）
- 年龄 &lt; 90 天。更老的只标复活，不当新窗口
- 40K–180K 且仍新：这是「已经在爆」，不要因为太大就丢掉，改看 SERP 还有没有缝
- 低基数百分比、Beta 几百人、笑话名（1 Billion Ducks、Clean all the leaves）不当推荐
- 黑名单顶流不当冷启动

### ③ 人工闸

机器过了热度，再打开游戏：

1. 有兑换码入口或计算器/图鉴/tier 切口吗？都没有 → 丢掉
2. `{官方名} codes` 媒体是不是已经铺满？铺满 → 不当天收

每天最多认真看 5 个，最多收 1 个。

## 不要用的方法

- 以 Up-and-Coming / Paid Access 当主名单（全是新，搜索量经常是 0）
- 以「龄 20 天 + 5K CCU」当潜力
- 只看 7 日 +1000%
- 只看总榜前 10 的常青游戏
