# 游戏卡 · Steal An Egg

挂在枢纽 PRD 下，不是独立站 PRD。universeId 是主键。

- 官方名：`Steal An Egg`
- slug：`steal-an-egg`
- universeId：`10563114921`
- place：https://www.roblox.com/games/107778070777162/Steal-An-Egg
- 开发组：and Collect Rare Pets
- 收录日：2026-08-15
- 热度（当日扫描）：约 171K CCU · 日均访问 ~140 万 · 龄 21 天
- 目标市场：US / English

## 闸门结论

| 闸 | 结果 | 证据 |
|----|------|------|
| 热度 | 通过 | 总榜前排、21 天新、搜索名已被媒体用 |
| 兑换码入口 | **否决** | SuperCheats 2026-08-14：尚无 redemption function；FreshCodes / RoCodes **没有**本游戏 codes 页（只有 Steal a Brainrot / Grow An Egg 等同名近亲） |
| 不公平工具 | 通过（切口在，数据未齐） | 官方说明：偷蛋、孵化、宠物、体型、mutation、跑步机速度、基地升级。脚本侧甚至有 Index / Mutation Filter，说明游戏内有图鉴结构 |
| 搜索意图 | 有，但容易串词 | `{steal an egg codes}` 已有结果；同时被 Brainrot / Steal a Pet / 另一个 *Steal a Egg* 污染 |
| 冷启动主词 | 不当 codes 主战役 | 无 redeem 仍出 codes 表 = 违反枢纽 PRD |

**本游戏不建 indexed `/games/steal-an-egg/codes`。** 需要时在枢纽页写一行 `No redeem feature (checked 2026-08-14)`，不要做空表。

## 这一款做什么

MVP 页面（过闸后才开发）：

| URL | index | 主词 | 用户任务 |
|-----|-------|------|----------|
| `/games/steal-an-egg` | yes | steal an egg roblox | 确认不是 Brainrot；看怎么玩；去图鉴 |
| `/games/steal-an-egg/pets` | yes，**有公开表之后才开** | steal an egg pets / mutations | 查稀有度、mutation、值不值被偷 |

首页卡片主按钮写 **Pets / Mutations**，不写 Codes。

## NOT-DO（这一款）

- 不做 codes 表、不抄 Brainrot 的码
- 不碰 script / executor / auto steal
- 不编造宠物倍率。没有公开可验证表之前，图鉴页不发布
- 不把「Steal a Egg」「Steal a Brainrot」「Steal a Pet」混进同一 slug

## 数据合同（待填）

来源只能是：游戏内可见 UI、官方群/Discord 公告、开发者帖。禁止导出别人的 wiki 库。

当前 `[BLOCKED]`：mutation 名称与倍率、宠物稀有度阶、蛋种类还没有第一手公开表。

解锁方式：进游戏拍 Index / mutation 列表，或找到官方文档后再写 `data/games/steal-an-egg.json`。

## 串词风险

- Steal a Brainrot：顶流，有码，禁止任何交叉内链当同一游戏
- RobloxGo 上的 *Steal a Egg*（别的 universe）
- Steal a Pet Fandom

H1 必须带完整官方名 `Steal An Egg`。

## 下游

- 下一刀：拿到公开可验证的宠物/mutation 表，才能 SEO-Copy Freeze
- 现在可以写的：枢纽壳文案（无数字）+ 首页卡片
- 生产部署仍等 DNS
