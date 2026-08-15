# Upvane

Unofficial Roblox **hub** at [upvane.com](https://upvane.com): a catalog of independent game kits. First live kit: **Steal An Egg** by and Collect Rare Pets.

This repository is **not** a live production deploy. DNS and production hosting stay blocked until a human confirms.

## Local site (Next.js)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `/` is the Upvane hub. Steal An Egg lives at `/steal-an-egg`.

```bash
npm run build
```

Static HTML lands in `out/` (`output: 'export'`). Preview the export with `npm start` (`serve out`).

## Routes

| Path | Notes |
|------|--------|
| `/` | Hub homepage (kits catalog) |
| `/steal-an-egg` | First game kit |
| `/steal-an-egg/pets` | **noindex** placeholder until Index data exists |
| `/privacy` `/terms` | Short unofficial legal pages |

The hub lists live kits only. There is no fake 600-game dump, no Rising chart, and no codes table for games without a redeem UI. Steal An Egg has no redeem UI as of 2026-08-15.

## Analytics

Page views use self-hosted Plausible (`plausible.shipsolo.io`, `data-domain="upvane.com"`) in `app/layout.tsx`. No GA / Clarity / Bing IDs.

## Docs / research

| File | What |
|------|------|
| [docs/01-research-lifecycle.md](docs/01-research-lifecycle.md) | 10-game search/CCU window |
| [docs/01-serp-rising-games.md](docs/01-serp-rising-games.md) | 5 rising `{game} codes` SERPs |
| [docs/01-keyword-opportunity-report.md](docs/01-keyword-opportunity-report.md) | A_NOW / skip pools |
| [docs/02-prd-hub-mvp.md](docs/02-prd-hub-mvp.md) | Product, gates, routes, NOT-DO |
| [docs/03-game-discovery.md](docs/03-game-discovery.md) | How to find games with potential |
| [docs/games/steal-an-egg.md](docs/games/steal-an-egg.md) | First game card: toolkit, no `/codes` |
| [docs/games/steal-an-egg-copy.md](docs/games/steal-an-egg-copy.md) | Frozen en-US copy |
| [docs/handoff-research.md](docs/handoff-research.md) | Research handoff |
| [docs/handoff-prd.md](docs/handoff-prd.md) | PRD handoff |

Find rising games (do not use the raw CCU top chart):

```bash
python3 scripts/discover_rising.py
```

Output: `data/rising/latest.md`.
