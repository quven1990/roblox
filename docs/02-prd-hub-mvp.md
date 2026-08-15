# PRD v1 · Rising Roblox Codes Hub

## 1. 基本信息

- 项目：`rising-roblox-codes-hub`
- 域名：[`upvane.com`](https://upvane.com)（品牌词 **Upvane**；**不**硬蹭 `roblox` 商标）
- 当前阶段：`02-product`
- 执行人/Agent：moce
- 日期：2026-08-15
- 状态：`[DONE]`（闸门已过；域名已买。生产部署仍等 DNS 指向托管后再开）
- 目标市场：US / English
- 站点类型：混合站（目录 + 轻内容 codes + 预留工具），**不是百科**

## 2. 上游输入

- [01-research-lifecycle.md](./01-research-lifecycle.md)
- [01-serp-rising-games.md](./01-serp-rising-games.md)
- [01-keyword-opportunity-report.md](./01-keyword-opportunity-report.md)
- 决策：用户选 codes-first、盖尽量多热游戏；评估后收窄为 **rising-only codes hub**

### 关键假设

- `{new game} codes` 的有效窗经常只有 **3–14 天爆发 + 4–12 周衰退**（CCU 代理 + Build a Ring GSC）
- 独立新域名赶不上短窗；同一主题域名上的新子页可以
- 同一模板 600 页会触发薄内容风险；短名单 + 退出闸是质量合同
- 广告是 v0 商业化（codes 页竞品均有广告）；不在 MVP 做订阅

### 缺失信息

- 域名已购：`upvane.com`（DNS 未指向托管前，生产部署仍 BLOCKED）
- 无付费关键词 volume/KD
- 枢纽 24h 建页 SLA 尚未在新域上实测
- 旧单站哪些仍有外链可日后合并：`[待确认]`

## 3. 本阶段结论

- 结论一句话：做一个 **Rising Games codes 枢纽**——只收录正在起量且真有 redeem 的游戏，24h 内可索引，死游归档 noindex；**不做全量 Wiki，不做 FreshCodes 600 游戏克隆。**
- 证据：短窗量化通过；5 词 SERP 里独立小站可进可见结果；顶流 codes 已被枢纽占满；无 redeem 热游必须否决。
- 风险：薄模板、codes 新鲜度撒谎、新域冷启动、Roblox 商标/UGC。

## 4. 定位

### 一句话定位

Unofficial codes hub for **rising** Roblox games. We publish a game the day the search shows up, label how we checked it, and archive it when the wave is over.

### ICP（主 ICP = 1）

1. **主：爆发期玩家** — 刚进新游，要立刻复制 codes。痛点急、广告可转、Google `{game} codes` 可触达。
2. **回访核码玩家** — 更新日后回来看 last-checked。需要日期戳，否则流失到 RoCodes/媒体。
3. **工具玩家（v1.1）** — 活过 14 天还在玩，要 calculator/tier。不是 MVP 获客，是留存与抗薄内容。

### 替代方案

- FreshCodes / RoCodes：全量或半全量目录，反应快但同质
- Beebom / Destructoid / PGG：权威高，对新冷门游不一定当天写
- 自有单游戏域名：深度好，域名和游戏一起死
- Fandom/Miraheze：百科，赶不上 codes 窗

### 差异化

1. **只做 rising**，首页是 8–20 条短名单，不是 600 卡片
2. **诚实状态**：working / unconfirmed / expired / no-redeem-feature
3. **redeem requirements** 字段（Ken 类：group、时长、等级）
4. 活过 14 天预留工具槽，避免永远停留在复制列表

### NOT-DO（MVP 硬边界）

- 不做 Fandom 式全量 wiki（物品、地图、角色页工厂）
- 不做「收录所有热游」或对标 603 游戏
- 不给无 redeem UI 的游戏做 codes 表（Kick a Lucky Block、Animal Hospital 现状）
- 不上线仍标 working 的过期码
- 不碰 Free Robux / 生成器 / 密码
- 不把所有旧单站 301 进大站
- 不把顶流红海（GaG2、Blox Fruits、MM2、Brookhaven）当冷启动主词
- 域名不硬蹭 Roblox 商标

## 5. 收录 / 留下 / 退出闸

### 进入（同时满足热度；然后按类型分流）

**公共热度（先过这个）：**

- CCU ≥ 15,000，或 7 日明显上升且 CCU ≥ 5,000，或发售 14 天内且已有 1 条可核代码
- 非黑名单顶流当冷启动主词（GaG2 / MM2 / Brookhaven / Blox Fruits / Adopt Me）

**再分流：**

1. **有 Redeem UI** → 可建 `/games/{slug}/codes`。还要有搜索意图（媒体 codes 文或 `{game} codes` 已有结果）。
2. **无 Redeem UI** → **禁止 codes 表**。若有图鉴/计算器/tier 切口，可只建枢纽 + 那一个工具页（例：Steal An Egg）。
3. 无 Redeem **且** 无工具切口 → 不收录。

### 留下（每周）

- 仍有 working 或 7 日内新码，**或** CCU 未连续 7 日低于进入阈值的 50%
- last-checked 不超过 24h（首页/飙升榜游戏）或 72h（其余在录）

### 退出 → Archive

触发任一条：

- CCU < 5,000 且 14 天无新码且 7 日 CCU 下降
- 连续 21 天无 working codes 且玩家继续掉
- 被证明为错误游戏/串词（Wonderland vs Wanderlands）

退出动作：

- URL 保留，加 `noindex,follow`（或 canonical 到 `/codes` 目录说明已归档）
- 状态改为 `archived`，codes 全部迁入 expired
- 移出首页与 `/codes` 默认列表
- **禁止删 URL**（避免 404 抖动）

## 6. 页面矩阵 / Route Contract

所有公开页默认 `index`，除非标明。H1 必须含游戏官方名 + unofficial 语境（站点页脚统一 disclaimer）。

| URL | index | 主词 | H1 意向 | 用户任务 | Schema | 内链 | 素材/数据 |
|-----|-------|------|---------|----------|--------|------|-----------|
| `/` | yes | rising roblox codes（品牌+目录） | 本周正在起量的游戏 | 30s 内点进正在爆发的 codes 页 | WebSite + ItemList | → 飙升游戏 `/games/{slug}/codes` | CCU、新码数、进入日期 |
| `/codes` | yes | roblox codes list（次要，不硬刚 FreshCodes） | 当前在录游戏 | 浏览/筛选在录游戏 | ItemList | 每张卡片 → 游戏 codes | 状态、last-checked |
| `/games/{slug}` | yes | `{game} wiki` 轻枢纽 | 游戏名 + unofficial hub | 搞清这是哪款游戏、去 codes/工具 | WebPage + VideoGame | codes、日后 tools、官方 Roblox 页 | slug、universeId、开发商、CCU |
| `/games/{slug}/codes` | yes | `{game} codes` **主钱页** | `{Game} codes (Month Year)` | 复制 working codes、看过期、看 redeem 限制 | FAQPage + ItemList | 回游戏枢纽、同批 rising 游戏 | codes[]、status、requirements、source_label、checked_at |
| `/games/{slug}/tier-list` | no 直到游戏存活 ≥14 天 | `{game} tier list` | — | — | — | — | **MVP 不建路由** |
| `/games/{slug}/calculator` | no 直到有可验证公式 | `{game} calculator` | — | — | — | — | **MVP 不建路由** |
| `/about` | yes | 品牌 | 我们怎么核码 | 信任 | AboutPage | /how-we-verify | 编辑政策 |
| `/how-we-verify` | yes | 信任/E-E-A-T | 核验规则 | 看懂 official/cross-checked/unconfirmed | WebPage | 页脚 | 状态定义 |
| `/privacy` `/terms` | yes | 合规 | 法律页 | 合规 | — | — | unofficial、无附属 Roblox |
| 归档 codes 页 | **noindex** | — | Archived | 不被坟场稀释 | — | 回 /codes | 原 URL 301 禁止 |

### 首页 IA

1. Hero：一句话定位 + 最后全站核验时间
2. **Rising now**（8–20 张，按进入日期/CCU 增速，不按历史 visits）
3. Fresh drops（7 日内新码）
4. 3 条核验规则（不写 800 字）
5. 页脚：unofficial、How we verify、Privacy/Terms

禁止：首页渲染 600 游戏网格。

## 7. Codes 页 competitive minimum

一页必须有，否则算出品失败：

- Working 表：code / reward / added_on / last_checked / copy
- Expired 表（可折叠）
- Status 只允许：`official` | `cross-checked` | `unconfirmed` | `expired` | `disputed`（**禁止**无证据写 `tested in-game`）
- Redeem steps（该游戏真实 UI，禁止套模板「点齿轮」若游戏没有）
- Requirements（group / playtime / level），没有则明确 `None`
- `How we checked` 一句话 + 链到 `/how-we-verify`
- 官方来源链：Roblox 体验页、Discord/Group（若公开）
- 相关 rising 游戏 3 条内链
- Disclaimer：Unofficial, not affiliated with Roblox Corporation or the game owner

## 8. 数据合同（frontend-consumable）

```json
{
  "game": {
    "slug": "ken",
    "name": "Ken",
    "developer": "MS: KEN",
    "universeId": "",
    "releasedOn": "2026-08-01",
    "hasRedeemUi": true,
    "status": "live | archived | watch",
    "enteredAt": "2026-08-06",
    "ccu": 0,
    "ccuUpdatedAt": "ISO-8601"
  },
  "codes": [
    {
      "code": "SHUTDOWNFOR",
      "reward": "2 Clan Rerolls and 8 Eye Color Rerolls",
      "status": "cross-checked",
      "requirements": ["Join MS: KEN group", "30 minutes playtime"],
      "firstSeenAt": "2026-08-06",
      "lastCheckedAt": "2026-08-15T00:00:00Z",
      "sourceLabel": "public media + aggregator overlap"
    }
  ]
}
```

种子：上线当天至少 3 个 **live** 游戏（优先 Wonderland 型新游 + Ken 型有限制字段的游）。禁止用 GaG2 当首页唯一英雄。

## 9. 运营管道（护城河）

```text
发现（雷达：GGAID/Zing CCU + 媒体 14 天新 codes 文）
  → 闸门（redeem + 热度 + 非红海主攻）
    → 1h 内建 /games/{slug} + /codes（同一模板）
      → sitemap lastmod + IndexNow
        → 日更对账（官方源优先，媒体/聚合交叉；冲突标 disputed）
          → 周审退出闸 → archive+noindex
```

P0 SLA（上线后第一周必须能量）：

- **发现到可抓 URL ≤ 24h**
- 飙升榜游戏 last-checked ≤ 24h

## 10. 域名与老站

- **枢纽域名：`upvane.com`（已购）。** 不要先 301 mergeanuke / pickaxe-tycoon / buildaring / evomon。
- 仍有外链或仍有 GSC 点击的单站：保留。游戏若活过 6–12 个月再评估合并或继续独立。
- 死站：不并入；外链特别强的再个案 301。

## 11. 商业化与合规

- v0：广告（AdSense 或等价）。CTA 不是 Play 转化，是停留与翻页。
- 合规：unofficial、无 Roblox 附属、无生成器、隐私/条款/cookie。IP：只用公开可验证事实（codes 字符串、官方描述），不导出私有 wiki 库。
- 素材：Roblox 官方缩略图需遵守平台条款；不确定则用文字+emoji 或缺省几何，不刮官方 HUD。

## 12. 真实用户任务（PM Gate）

P0：

1. 从首页 2 次点击内到达一个 Rising 游戏的 working codes，并一键复制。
2. 打开 Ken 类页面能看到 **redeem 限制**，不会按错误步骤浪费时间。
3. 打开 Kick-a-Lucky-Block 型游戏时，**看不到假 codes 表**（未收录或明确 no-redeem）。
4. 归档游戏不出现在首页 rising 模块。
5. 移动端 codes 表可复制，不挡 CTA。

P1：

6. How we verify 能解释为什么某码是 unconfirmed。
7. 新游戏 URL 提交后 sitemap 含该 URL。

## 13. 交付物

- 本 PRD
- Route Contract（§6）
- Data Contract（§8）
- 下游交接摘要：`handoff-prd.md`

## 14. 验收清单

- [x] 必须有 NOT-DO
- [x] 必须有首页 IA
- [x] 必须有 SEO 页面矩阵
- [x] 必须有下游交接摘要
- [x] 收录/退出闸可执行
- [x] 不做全量 wiki

## 15. visual_style_brief

- 深色、快、像工具仪表盘，不像 Fandom 长文
- 首页 = 短名单；codes 页 = 表优先，首屏就要 Copy
- 状态用文字标签（Working / Unconfirmed / Archived），不用装饰性表情图标当唯一状态
- 移动优先：复制按钮拇指可点

## 16. 下游交接

- 给下游 Skill：定价（广告默认）、合规、文案（SEO-Copy Freeze）、设计、前后端
- 下游必须读取：本 PRD §4–8、生命周期与 SERP 两篇研究
- 下游不能改动：rising-only、禁止 600 卡片首页、禁止无 redeem 做 codes 表、禁止全量 wiki MVP
- DNS 未指向托管前，**生产部署 BLOCKED**；文案/设计/路由可先行
