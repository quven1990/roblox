# SERP 实扫 · 5 个正在起量的 codes 词

- 日期：2026-08-15
- 方法：公开搜索结果（非官方 Google API 抓取）。排序 ≈ 搜索引擎/答案摘要前链，**不是付费 rank tracker 的精确 Top 10**。
- 目的：判断「新游 codes」是否还有独立小站缝隙，而不是被 PGG/Fandom 锁死。

## 过闸（计划原文）

| 标准 | 结果 |
|------|------|
| 新游 codes 词里，独立小站能进可见结果 | **通过**（Ken、Anime Expeditions、Wonderland 首日博客） |
| 不是 600 游戏目录才能赢 | **通过**（GaG2 已是 FreshCodes + 专站；新站再堆目录无缝） |
| 首页必须是短名单不是坟场 | **产品约束**，见 PRD |

## 选词（刻意避开 Brookhaven / MM2 / Blox Fruits）

| # | 查询 | 为什么算「起量」 | 发布时间 |
|---|------|------------------|----------|
| 1 | `wonderland roblox codes` | Destructoid 2026-08-14 才加「第一条 code」 | 媒体写 8/14 发布（原定 8/8） |
| 2 | `ken roblox codes` | Beebom/Gamepur 8/6 开页，RoCodes 仍在日更 | ~8 月初 |
| 3 | `anime expeditions roblox codes` | 7 月公测后媒体+wiki 挤入；雷达 8/4 仍推 | 体验页 2025-04-28，爆发在 2026 夏 |
| 4 | `grow a garden 2 codes` | 2026-05-21 上线，现平台 #3–#4 | 12 周已顶流 |
| 5 | `kick a lucky block roblox codes` | 4/7 上线、现 ~56K CCU | **负例：无 redeem** |

## 扫描摘要

### 1. Wonderland codes — 窗口 = 小时到天

可见结果类型：

- 大媒体：Destructoid（8/14 更新，唯一确认 active=`RELEASE26`）
- 错配：`wanderlands.fandom.com`（另一个游戏的 Codes 页）
- 小站/博客：Roonby（8/7，发售前链）、beatcopgame.com（Discord/Trello 聚合，几乎无 codes 表）

缝隙：**媒体一篇就能占位，但 Fandom 会串游；专站若在发售日 24h 内上线，有机会吃「Wonderland codes」而不是错游戏。** FreshCodes 未出现在本次摘要前链。

Hub 策略：当天建 `/games/wonderland/codes`，H1 必须带开发商 **ScaryPlay**，FAQ 排除 Wanderlands。

### 2. Ken codes — 独立聚合站已经能排

可见结果：

| 类型 | 例子 |
|------|------|
| 中媒体 | Gamepur、Beebom（均 8/6） |
| 独立聚合 | **rocodes.gg**、**robloxden.com** |
| 大媒体 PGG/Fandom | 本次摘要未见 |

缝隙：**通过。** 不是只有 Dexerto/PGG。RoCodes 这种轻聚合可以排进可见结果。差异化不在「第 603 个游戏」，而在核验标签（Ken 要入 group + 30 分钟/50 TP，很多页写错）。

Hub 策略：codes 表加 **redeem requirements** 字段，这是薄页面里少有的硬信息。

### 3. Anime Expeditions codes — 月龄后窗口收窄

可见结果：

- 媒体：Radio Times、Beebom
- 社区 wiki：animeexpeditions.miraheze.org
- 聚合：rocodes.gg（自称 35 active，和 Beebom「大量已过期」打架）
- 小媒体：games.gg（7 月还停在「3 条上线码」——新鲜度撒谎样本）

缝隙：**中。** 小站能进，但 codes 对账已经是红海。雷达 8/4 已写「窗口在收窄」。RoCodes 与 Beebom 过期集合不一致 = 纯抄列表会伤 E-E-A-T。

Hub 策略：过了爆发 4 周、若仍要留，必须有 last-checked + 过期归档；更好是补 pity/trait 工具而不是再刷 codes。

### 4. Grow a Garden 2 codes — 失败对照（已经不是新游缝）

可见结果：

- 聚合枢纽：**freshcodes.wiki**（7 源交叉，3 active / 28 expired）
- 专站：growagarden-2.wiki
- 薄内容：allthings.how、irelandbrief.org、pocket-codes.com

缝隙：**不通过（对「新开独立站」）。** 需求还在，但 SERP 已被枢纽+专 wiki 填满。这正是「大站能打、新单站不能打」的证据——也是我们**不要做 600 款目录**的证据：FreshCodes 已经占了这个坑。

Hub 策略：GaG2 类顶流，后发枢纽不要当主力获客词。最多做目录里的一条、靠内链，不指望打首页。

### 5. Kick a Lucky Block codes — 收录闸负例

可见结果几乎全是「**没有 codes / 没有 redeem 功能**」（Guidespot、Game8、Destructoid、SuperCheats、earnaldo）。CCU 仍 ~56K，visits 1.7B。

缝隙：codes 词有量，但**正确结果是零列表**。再做一张假 codes 表会直接进垃圾站。

Hub 策略：**有 redeem UI 才进 `/codes`。** 无 codes 的热游进观察池或工具页，不进 codes 目录。

## SERP 结构对比

| 查询 | 媒体 | 独立小站/聚合 | 专 wiki | 薄复制站 | 小站缝隙 |
|------|------|----------------|---------|----------|----------|
| Wonderland codes | 强（Destructoid） | 弱博客 | 错配 Fandom | 低 | **高（首日）** |
| Ken codes | 中 | **RoCodes / Roblox Den** | 未见 | 低 | **中高** |
| Anime Expeditions codes | 强 | RoCodes / GAMES.GG | Miraheze | 新鲜度翻车 | 中→低 |
| Grow a Garden 2 codes | 中 | **FreshCodes 已占枢纽位** | 专 `.wiki` | 多 | **低** |
| Kick a Lucky Block codes | 强（都说无码） | 同样说无码 | Game8 | 假码风险 | **否决 codes 页** |

## 对「故意不覆盖什么」的结论（对照 FreshCodes）

FreshCodes：603 游戏、8089 codes、按 CCU 排「Popular right now」。

我们**故意不做**：

- 全量 600+ 游戏 A–Z
- 已无 redeem 的游戏的 codes 页
- 顶流红海的 codes 主攻（GaG2 / Blox Fruits / MM2）
- 把过期码继续标 working（Anime Expeditions 已有反面教材）

我们**要做**：Wonderland/Ken 这种 **0–14 天窗口**；要求 last-checked 和入场条件字段。

## 24 小时建页能力（第三条闸）

不是 SERP 证据，是产能证据：

- 已有单游戏 codes 页模板（pickaxe-tycoon / build-a-ring / merge-a-nuke）
- 已有 `roblox-site-radar`（CCU 榜 + 媒体新 codes 页，2026-08-04 推送过 Anime Expeditions / Violence District / Kick a Lucky Block）
- IndexNow 在既有做站技能里是标准动作

**判定：产能上可达到 24h；枢纽上线前必须把「发现 → 建页 → sitemap/IndexNow」收成一条流水线，否则这条闸只是愿望。** 标为 PRD 的 P0 运营合同，而不是已验证 SLA。
