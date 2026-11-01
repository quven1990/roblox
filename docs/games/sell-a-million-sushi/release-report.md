# 发布验收 — Sell a Million Sushi / 2026-11-01

已上线：
- https://upvane.com/sell-a-million-sushi/ — 首次售出，雇佣→收鱼→厨房交付→顾客→收款。
- https://upvane.com/sell-a-million-sushi/merge-fishermen/ — 首次三个 Tier 1 合并及失败状态检查。
- https://upvane.com/sell-a-million-sushi/not-making-money/ — 收入卡点的状态、动作和观察结果。

内容按搜索诉求组织。关键词为用户任务假设，未宣称有搜索量、KD或GSC需求证明。视频来源 RORO PLAYZ / k5dkj8A5Wj4 的相关帧已实际查看，时间点公开附在页面与来源账本；未复制视频封面或生成假实机图。

## 发布与搜索通知
- 生产代码提交：42eef77。
- Cloudflare Pages：success，部署87247cf5-bf27-4730-ab70-e0c25480d51e。
- 正式域名首页及三个新增页，1440/390 共8次浏览器检查：200、canonical正确、无溢出/坏图/页面异常。
- 正式 sitemap 29条，三个新增页均已包含；旧页日期保留。
- GSC sitemap提交：204；读取验证200，isPending=true。API仍显示此前26条统计，未把它描述成已处理29条或已收录。通知结果见gsc-submission.json。
- IndexNow：200 / 29 URLs，见indexnow-submission.txt。

## 测试
构建、TypeScript、diff检查全部通过。24组本地响应式布局、58条站内路径和手机任务点击通过；FAQ、页内锚点、法律链接、schema、robots及sitemap通过。横向表格支持键盘焦点和滚动，Sushi手机导航完整显示，答案位于插画之前。独立复核最终GO，无遗留P0/P1。详见qa/acceptance.md、qa/results.json、qa/independent-review.md、qa/production.json。

## 尚需核验
Upvane尚未独立进入客户端亲测；高级合并规则、离线收益、最高等级、精确效率和最快升级顺序未知，未填造。新页查询需求及索引/流量表现需等待真实数据。旧素材权属、运营主体及保存期限等历史待确认事项维持原记录；本轮不新增数据收集和第三方服务。

## 修改文件
- `app/globals.css`
- `app/sell-a-million-sushi/layout.tsx`
- `app/sell-a-million-sushi/merge-fishermen/page.tsx`
- `app/sell-a-million-sushi/not-making-money/page.tsx`
- `app/sell-a-million-sushi/page.tsx`
- `app/sell-a-million-sushi/sushi.css`
- `app/sitemap.ts`
- `components/HubHome.tsx`
- `components/KitMore.tsx`
- `components/SiteShell.tsx`
- `components/SushiGuide.tsx`
- `docs/asset-source-inventory.md`
- `docs/games/sell-a-million-sushi/project-control.md`
- `docs/games/sell-a-million-sushi/qa/acceptance.md`
- `docs/games/sell-a-million-sushi/qa/independent-review.md`
- `docs/games/sell-a-million-sushi/qa/results.json`
- `lib/analytics.ts`
- `lib/games/index.ts`
- `lib/games/sell-a-million-sushi.ts`
- `lib/games/types.ts`
- `public/games/sell-a-million-sushi/icon.svg`
- `public/games/sell-a-million-sushi/restaurant.svg`
- `docs/games/sell-a-million-sushi/qa/*.png`：桌面/手机本地及生产验收截图（Upvane页面，不是游戏截图）。
- 本报告、GSC/IndexNow回执及`qa/production.json`为发布后证据，仅文档归档，不再触发生产构建。
