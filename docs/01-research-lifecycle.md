# 搜索窗口量化 · 8–10 个 Roblox 游戏

- 项目：`rising-roblox-codes-hub`
- 阶段：`01-research`（生命周期闸）
- 日期：2026-08-15
- 目标市场：US / English
- 关键词工具：`missing_keyword_tool_access`（无 Ahrefs/Semrush/DataForSEO 导出；Google Trends 未拿到可复现 CSV）
- 替代证据：自有站 GSC/Plausible + 公开 CCU（GGAID / Rolimon's / IntelBricks）

## 一句话

单游戏站的问题不是「完全没流量」，而是 **峰值 CCU 到搜索几乎归零，通常只有 4–12 周**；独立新域名往往卡在后半段才开始排名。大站能解决「赶不上」，但解决不了「词本身会死」。

## 过闸

| 闸门 | 结果 | 依据 |
|------|------|------|
| 短生命周期是常态，不是个例 | 通过 | 3 个自有站点品类 + 公开 CCU 衰减 |
| 不是所有热游都短 | 通过（要分流） | 99 Nights / Steal a Brainrot / GaG 系列仍在 Top 10 |
| 可用 CCU 当搜索窗代理 | 降级通过 | 缺 Trends 数值；Build a Ring 的 GSC 与 CCU 同向崩 |

## 样本（10 款）

近似「搜索窗」= 从发布或峰值 CCU → 当前 CCU 掉到峰值的 ~10% 或流量失去商业意义。Codes 搜索通常比 CCU 峰更短、更尖。

| 游戏 | 发布 | 峰值 CCU | 2026-08-15 附近 CCU | 剩余 | 搜索/流量窗 | 类型 |
|------|------|---------|---------------------|------|-------------|------|
| Build A Ring Farm | 2026-04-15 | 190.4K（GGAID） | 1.7K | **0.9%** | 约 8–12 周到可忽略 | 短 |
| Pickaxe Tycoon | 2026-04-25 | 25.6K（Rolimon's，5/30） | 2.7K | **11%** | 峰后 ~11 周掉一个数量级 | 短 |
| Evomon | 2026-03-03 | 106.4K（GGAID） | 12.0K（7d 均 20K） | **11%** | ~5 个月后仍有长尾，但已离开爆发 | 中短 |
| Merge a Nuke | 2026-05-21 | `[待确认]` 无公开峰值 | 27.3K（IntelBricks） | — | 12 周仍在 Top 50，暂算中等存活 | 中 |
| Kick a Lucky Block | 2026-04-07 | ~91K（媒体口径） | 56K | 偏稳 | 有 CCU，**无 codes 功能** | 中，不进 codes 页 |
| Animal Hospital | 2026-05-10 | `[待确认]` | 181K | 仍热 | 3 个月仍 Top 10，**无 codes** | 热，不进 codes 页 |
| Grow a Garden（1） | 2025-03-25 | 平台级 | 35.4K | 长尾 | 需求转去续作 | 长→转移 |
| Grow a Garden 2 | 2026-05-21 | 仍在高位 | 336K（#4） | 仍爆发 | 12 周 1.6B visits | 长/顶流，新站不宜硬刚 |
| Steal a Brainrot | 2025-05-16 | 24h 曾到 1.6M | 205K | 仍 Top 10 | 15 个月 | 长 |
| 99 Nights in the Forest | 2025-03-04 | `[待确认]` | 302K | 仍 Top 5 | 17 个月 | 长 |

来源：GGAID Build a Ring（2026-08-15）、Rolimon's Pickaxe（峰值 2026-05-30）、GGAID Evomon、IntelBricks catalog dump 2026-08-15 09:37 UTC。峰值与「现在」不是同一数据商时已标注。

## 自有站铁证：buildaring.online

站点 2026-05-23 上线（游戏已于 4/15 发布，站点吃的是峰后半段）。

| 周报日期 | 口径 | GSC 点击 / 展示（约 28 天） | Plausible 访客 |
|----------|------|------------------------------|----------------|
| 2026-06-21 | 建站后 ~4 周 | **3079 / 21527**，CTR 14.3% | 1527 |
| 2026-07-11 | 再过 20 天 | **31 / 355**，CTR 8.7% | 234 |

主词 `build a ring farm wiki` 在 6-21 周报：1974 点击、排名 5.0。7-11 周报 Top 查询已换成杂长尾，主词窗口关闭。

同期 CCU：峰值 190.4K → 8 月 1.7K（剩余 0.9%）。**搜索崩和玩家崩是同一件事。** Calculator 在峰值期是真需求（6-21：Calculator Run 2470，访客转化 15.6%），但工具也救不了词死。

7-11 周报近 7 日 GSC：0 点击 / 65 展示。排名还在的页面，展示已经没了。

## 对枢纽意味着什么

1. **4–12 周短窗是默认假设**（tycoon / 合并 / 农场 / 宠物收集克隆）。新独立域名冷启动通常 ≥2–4 周，会系统性错过。
2. **少数会长 12 个月+**（99 Nights、Steal a Brainrot、GaG 系列）。这些不该当「再开一个新域名」的理由，也不该用同一套「本周飙升」首页逻辑去堆。
3. **CCU 热 ≠ codes 可做**：Kick a Lucky Block、Animal Hospital 都热，但没有 redeem UI。纯 codes 枢纽必须一票否决。
4. 自有数据里，**wiki/calculator 意图比 codes 更能撑一段时间**（Build a Ring：codes 几乎没点击，wiki 主词才是量）。第一版可以 codes-first 求速度，但 2 周后仍活着的游戏必须补工具，否则枢纽只是更快死的 FreshCodes 仿盘。

## 证据缺口

- Google Trends 12 个月曲线：未导出，标 `missing_trends_export`
- Merge a Nuke / Animal Hospital / 99 Nights 全时峰值：公开页未给统一数字
- Pickaxe / Evomon / Merge a Nuke 的 GSC 序列：本仓库无周报，不能编造
- 精确 KD/volume：无关键词工具
