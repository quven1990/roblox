# Practical Basketball 发布报告 — 2026-11-06

已发布到 Upvane，生产代码提交 be1dda37b8721878e0f1e88c65872d45ad1e00c3；Cloudflare Pages 项目 upvane，master 分支，部署 1c1d7336-7baf-47d6-9cab-4a5e5f320d40，状态 success。生产页面与源码对应同一代码提交。

## 页面与用户任务

- https://upvane.com/practical-basketball/ — 新手第一轮练习、正确游戏入口、选 build 前的角色规划。
- https://upvane.com/practical-basketball/controls/ — PC / Xbox / PlayStation 操作速查、设备切换与全平台比较、基础传球与运球条件。
- https://upvane.com/practical-basketball/shooting-and-dunking/ — 假动作、变上篮、出手未进、扣篮未触发四种检查路径，及可重复的练习记录建议。

首页采用一个 Practical Basketball 主卡片加六个已有游戏卡片；导航、页脚、相关内容、Article/Breadcrumb schema、canonical、现有分析上下文和 sitemap 均已接入。三个页面限定不同任务，未增空的 codes、builds、tier-list 等栏目。

## 内容和素材边界

Roblox 主来源核对正确 Practical’s Games / Place80681221431821 / Universe7529591378；排除了搜索结果中来自其他创作者的同名入口。官方身份、Alpha 状态与社区 reported 按键分开标注，旧版教学报告注明日期。未能观看或取得可核验内容的 YouTube 视频未冒充亲测依据，也未提供失效的视频入口。无虚构 build 阈值、最佳命中率、奖励、金币成本或实测时间。

UI 使用现有 Upvane 品牌和字体，深绿/暖纸/橙色编辑式页面，原创 SVG 球场插画明确非实机、非游戏地图。未搬运第三方 Wiki 配图、官方 Logo 或视频封面。未新增广告、追踪服务、登录、评论、上传或数据存储。素材清单已补充，历史许可和运营主体待确认事项保留。

## 验收

- npm run build：PASS，43静态输出；npx tsc --noEmit、git diff --check：PASS。
- 本地42组布局：7路径 × 1440/1024/768/390/360/320；33条站内路径/fragment；无坏图、横向溢出、错误canonical或客户端异常。
- 设备切换/全平台对比、表格键盘横滚、FAQ、四种诊断态、首页→专区→内页→游戏菜单→旧专区→隐私页：PASS。手机答案先于插画。
- 独立只读复核最终GO，无未关闭P0/P1或必要P2；桌面/手机实际截图已目视检查。
- 生产8组布局与相同交互：PASS；30条链接检查成功；新3页HTTP200、自引用canonical、1个H1，无X-Robots-Tag noindex；代码最终来源说明已在正式HTML确认。
- 所有浏览器QA使用隔离context并阻断第三方请求，未向分析平台发送验收访问或转化。网页验收不等于游戏客户端亲测。

## sitemap 与搜索引擎通知

- https://upvane.com/sitemap.xml 当前35条唯一URL，含新3页；仅新内容及实际改动的首页更新lastModified，其他文章日期未自动刷新。
- GSC提交时间UTC 2026-11-06T13:44:49.989Z：PUT 204 / GET 200，isPending=true，warnings=0，errors=0。当前返回的submitted32与旧lastDownloaded仍是上一轮数据，Google尚待处理新版35条sitemap；没有宣称Google已抓取或收录新页。
- IndexNow200，通知35URLs。提交成功不等于已收录、已有曝光或有效流量。
- 原有Nov8一次性收录复查保留；其任务动态读取站点sitemap，新3页可随完整清单检查。

## 尚需人工/后续证据

Alpha客户端实际操作、开发者当前Discord按键消息、触屏布局、最新教学菜单/奖励、build和扣篮阈值仍待核验；页面已限定表述。没有足够GSC长尾词或搜索量数据，新增页面的获客效果应在收录后另行判断。

## 修改文件

生产代码及首轮验收资料（详见release-manifest.json）：

- README.md
- app/globals.css
- app/practical-basketball/basketball.css
- app/practical-basketball/controls/page.tsx
- app/practical-basketball/layout.tsx
- app/practical-basketball/page.tsx
- app/practical-basketball/shooting-and-dunking/page.tsx
- app/sitemap.ts
- components/BasketballControls.tsx
- components/BasketballGuide.tsx
- components/HubHome.tsx
- components/KitMore.tsx
- components/SiteShell.tsx
- docs/asset-source-inventory.md
- docs/games/practical-basketball/game-source.json
- docs/games/practical-basketball/project-control.md
- docs/games/practical-basketball/qa/acceptance.md
- docs/games/practical-basketball/qa/check.mjs
- docs/games/practical-basketball/qa/controls-1440.png
- docs/games/practical-basketball/qa/controls-390.png
- docs/games/practical-basketball/qa/guide-desktop-top.png
- docs/games/practical-basketball/qa/guide-mobile-top.png
- docs/games/practical-basketball/qa/home-1440.png
- docs/games/practical-basketball/qa/home-390.png
- docs/games/practical-basketball/qa/independent-review.md
- docs/games/practical-basketball/qa/menu-mobile.png
- docs/games/practical-basketball/qa/practical-basketball-1440.png
- docs/games/practical-basketball/qa/practical-basketball-390.png
- docs/games/practical-basketball/qa/results.json
- docs/games/practical-basketball/qa/shooting-and-dunking-1440.png
- docs/games/practical-basketball/qa/shooting-and-dunking-390.png
- docs/games/practical-basketball/rejected-lookalike-source.json
- lib/analytics.ts
- lib/games/index.ts
- lib/games/practical-basketball.ts
- public/games/practical-basketball/court.svg
- public/games/practical-basketball/icon.svg

发布后归档：本报告、release-manifest.json、deployment.json、gsc-submission.json、indexnow-submission.txt、submit-sitemap.mjs、check-deployment.mjs、qa/production.json、qa/live-seo.json、qa/live-*.png，以及project-control/acceptance/独立复核更新。回执另行提交并跳过重复生产构建。此前本地analytics复盘目录不在本次发布提交中。
