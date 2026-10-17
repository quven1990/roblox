# Upvane 首页、模板与基础合规呈现调整

本轮仅本地修改和验证，不新增游戏、文章、追踪、广告、账号或上传，不提交外部服务，不部署。游戏配置、运营状态、rising 扫描记录和历史文档保留。原 URL、canonical、站点地图及 robots 规则未调整。内容 lastChecked 保持原记录；法律页的 Policy reviewed 是本次实际政策编辑日期，不代表重新验证游戏事实。

## 入口与模板定位

| 范围 | 文件 |
| --- | --- |
| 首页 | `app/page.tsx` → `components/HubHome.tsx`；metadata 在 `lib/hub.ts` / `lib/site.ts` |
| 公共导航、页脚 | `components/SiteShell.tsx` / `components/GamesMenu.tsx` |
| 游戏专区 | `components/StealAnEggHome.tsx`、`GreedyGrowersHome.tsx`、`ThaLemon3Home.tsx`；数据在 `lib/games/*.ts` |
| 文章模板 | `app/<game>/<page>/page.tsx`，复用 `KitHero`、`DataTable`、`KitMore`、`EvidencePanel` |
| 法律页 | `app/privacy/page.tsx`、`app/terms/page.tsx`、`app/editorial-policy/page.tsx` |

## 实际第三方与数据入口清单

| 服务/入口 | 代码证据 | 当前行为与核验边界 |
| --- | --- | --- |
| Plausible | `app/layout.tsx` | 全站 defer 加载 `https://plausible.shipsolo.io/js/script.js`，data-domain 为 upvane.com。托管脚本内容、服务端数据处理和 cookie 行为未在本次联网验证；不以产品名称保证实际设置。 |
| 自定义统计事件 | `lib/analytics.ts`、`AnalyticsListener.tsx`、`CopyCode.tsx`、计算器、视频组件 | 在 Plausible API 可用时发送导航、Roblox 跳转、视频播放/跳转、复制代码、计算器使用等事件。属性可含 game/page/location/section/surface/video_id/code/status/source 等；未新增事件或服务。实际远端接收情况未验证。 |
| GA4 | `DeferredAnalytics.tsx`、`lib/site.ts` | measurement ID G-H20SYKX847；首次 pointerdown/keydown/touchstart/scroll 或 30 秒后加载 googletagmanager.com/gtag/js，设置 beacon。未设置 consent gate。可能使用 cookie；Google 后台保留期、广告关联及数据设置待确认。 |
| Microsoft Clarity | 同上 | project y2tx3qa7f0；同样延迟加载 clarity.ms/tag。会话记录、cookie、遮罩规则及具体保留期需核对后台；不保证“匿名化”。 |
| YouTube | `YouTubeEmbed.tsx`、两个游戏的视频配置 | 共 5 个视频，点击后加载 youtube-nocookie.com iframe；初始封面为本地文件。作者/ID 见素材清单。iframe 指定 autoplay、playsinline 等权限和参数；视频可播放性与第三方数据行为未在线验证。 |
| 字体 | `app/layout.tsx` | next/font/google 在构建时下载 Outfit，浏览器从本站静态输出读取字体。 |
| 邮件联系 | `SiteShell.tsx`、法律页、Editorial Policy | mailto 联系和隐私邮箱；站点内无邮件提交 API。实际邮箱可达性、邮件服务商、用途/保留期及运营主体待确认。 |
| 计算器 | `GreedyGrowersCalculator.tsx` | 15 个输入在 React 内存本地计算；form preventDefault，无上传/保存 API。现有 Clarity 可能观察输入交互，其遮罩需人工确认。计算器事件仅配置 game，未主动上传整个字段对象。 |
| 静态托管 | `next.config.ts`、`functions/_middleware.js`、`public/_headers` | output export；Cloudflare Pages 中间件仅处理生产别名域名跳转，未见用户数据库写入。托管请求日志及账号端设置无法从仓库确认。 |
| 发布/研究脚本 | `scripts/indexnow.mjs`、`register-shipsolo-goals.mjs`、`discover_rising.py`、`.env.example` | 本地维护工具，不是浏览器数据采集入口；本轮未执行外部提交或统计目标注册，不读取/披露本地秘密值。 |

在 app/components/lib/functions、依赖及配置中未发现广告代码、登录、评论、用户上传、支付、应用数据库或 localStorage/sessionStorage/document.cookie 写入。此结论限仓库实现；不能证明托管后台没有额外注入。保留 GA4、Clarity、邮箱、托管和 YouTube 的隐私披露。

## 修改内容与文件清单

- `components/HubHome.tsx`：介绍 → 现有游戏 → 有内容的攻略/资料入口 → 计算器 → 非官方说明。移除状态分组、空栏目、rising 候选、分数、孵化与扩页条件；不引用 rising 数据。THA LEMON 3 仅展示专区概览入口，不把尚缺具体机制数据的 Money / Weapons 页面包装成已完成攻略；原页面仍存在且内链保留。
- `lib/site.ts`：指定 Title、H1、Description，更新介绍及导航文案，增加公共非官方声明；旧运营文案配置保留但不再用于前台首页。
- `components/GamesMenu.tsx`：按现有目录展示游戏，取消 Active / Watch / Frozen 分组，保留交互和原链接。
- `components/SiteShell.tsx`：保留 Upvane 罗盘品牌；统一页脚声明和站点描述。
- `components/StealAnEggHome.tsx`：直接介绍/答案 → 更新内容与步骤 → FAQ → 相关页面 → 来源/版本。保留事实、争议、缺失数值和原来源日期，专区 kicker 改为非官方说明。
- `app/steal-an-egg/pets/page.tsx`：保留主表前的必要不确定性说明；主表/收集步骤 → FAQ → 相关内容 → 来源状态与原始检查日期。未改 roster 数值。
- `components/ThaLemon3Home.tsx`：取消公开 Active kicker；后台 status 不变。
- `app/privacy/page.tsx`：保留已有真实统计披露，补充交互事件，取消无法证明的匿名回放/邮箱删除期限/日志用途保证，标明主体、用途和期限等待确认。
- `app/terms/page.tsx`：统一非官方关系声明，保留准确性及素材归属说明，不宣称素材均已获授权。
- `app/editorial-policy/page.tsx`：修正首页展示 rising 扫描的过时描述。
- `docs/asset-source-inventory.md`：逐文件列出 20 张现有游戏图片，另列站点图标、字体和 5 个视频的来源证据、许可及人工确认事项。
- `docs/review-evidence/`：桌面/手机截图、浏览器验收 JSON。
- 本报告：范围、代码审计、验收与人工问题记录。

## 验收

- `npm run build`：完整静态构建；首次受沙箱 DNS 限制无法下载 Google Fonts，联网重试成功。最终版本重跑通过，29 个静态生成任务完成。
- `npx tsc --noEmit` 和 `git diff --check`：执行类型及补丁检查。项目没有单独 lint/test script；Next 构建包含其内置检查阶段。
- Chromium：1440×900 桌面和 390×900 手机，首页、Steal An Egg 专区及 pets 页面共 6 组截图。无文档级横向溢出、无坏图、无 pageerror；手机沿用现有逐行卡片表格，pets 全表较长但标签和值均可读。
- Games 菜单展开/关闭、页脚与法律页链接、所有静态页面输出的本站绝对路径链接均检查；HTTP 错误列表见 `review-evidence/qa.json`。原 canonical 与内容检查日期保留。
- 计算器用默认种子成本 100、收获 160 验证基础利润 60；收获改成 200 后基础利润应为 100。
- 浏览器 QA 阻断第三方请求，避免测试上报。未验证线上统计接收、托管设置、邮箱投递或 YouTube 远端播放；未将这些项标记为通过。

## 仍需人工处理

1. 逐文件补原始素材 URL、作者、许可/条款依据和截图原件；现有来源描述不等于使用许可。不要用第三方 Wiki 图片补空缺。
2. 确认运营主体、两个邮箱实际可用性、邮件服务商及保存期限。
3. 确认 Plausible 实际脚本及服务端、GA4 与 Clarity 的用途/保留期/cookie/遮罩/共享设置；复核当前无 consent gate 的配置是否适合运营地区与受众。本轮未擅自新增追踪或同意弹窗。
4. 核对托管日志用途、保存期限、后台注入，以及 Google/微软后台广告关联设置；仓库未见广告代码不等于后台设置已审计。
5. 核对历史 Index 截图原件、YouTube 视频与作者信息、THA LEMON 3 的名称对应关系；本轮没有更新这些游戏事实或伪造亲测。

本轮代码调整完成，基础合规运营信息仍需人工核实；不据此宣称网站已获授权或完全合法。
