# Upvane

Research (2026-08-15) and MVP PRD for a **rising-only** Roblox games toolkit hub.

Live domain: [upvane.com](https://upvane.com)

Repo: `git@github.com:quven1990/roblox.git`

First game in intake: [Steal An Egg](docs/games/steal-an-egg.md) — toolkit only, no codes table.

## Docs

| File | What |
|------|------|
| [docs/01-research-lifecycle.md](docs/01-research-lifecycle.md) | 10-game search/CCU window |
| [docs/01-serp-rising-games.md](docs/01-serp-rising-games.md) | 5 rising `{game} codes` SERPs |
| [docs/01-keyword-opportunity-report.md](docs/01-keyword-opportunity-report.md) | A_NOW / skip pools |
| [docs/02-prd-hub-mvp.md](docs/02-prd-hub-mvp.md) | Product, gates, routes, NOT-DO |
| [docs/03-game-discovery.md](docs/03-game-discovery.md) | 如何找有潜力的游戏 |
| [docs/games/steal-an-egg.md](docs/games/steal-an-egg.md) | First game card: toolkit, no `/codes` |
| [docs/handoff-research.md](docs/handoff-research.md) | Research handoff |
| [docs/handoff-prd.md](docs/handoff-prd.md) | PRD handoff |

Find rising games (do not use the raw CCU top chart):

```bash
python3 scripts/discover_rising.py
```

Output: `data/rising/latest.md`. Production deploy is blocked until DNS points at hosting. SEO-copy freeze can start in parallel.
