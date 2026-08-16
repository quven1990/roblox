# Upvane

Unofficial Roblox **hub** at [upvane.com](https://upvane.com): a catalog of independent game kits. Live kits: **Steal An Egg**, **Grow a Chicken Fighter**, **Anime Vanguards**, and **Greedy Growers**.

Pushing `master` to GitHub deploys to Cloudflare Pages (`upvane` project). Build is `npm run build`; output directory is `out/`. Production branch is `master`. Custom domains: `upvane.com` and `www.upvane.com`. The Pages alias `upvane.pages.dev` 301s to `upvane.com` via `functions/_middleware.js` (Cloudflare cannot remove `*.pages.dev`).

## Local site (Next.js)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `/` is the Upvane hub. Kits: `/steal-an-egg`, `/grow-a-chicken-fighter`, `/anime-vanguards`, and `/greedy-growers`.

```bash
npm run build
```

Static HTML lands in `out/` (`output: 'export'`). Preview the export with `npm start` (`serve out`).

## Routes

| Path | Notes |
|------|--------|
| `/` | Hub homepage (kits catalog) |
| `/steal-an-egg` | First game kit |
| `/steal-an-egg/pets` | Partial in-game Pet Index |
| `/steal-an-egg/eggs` `/biomes` `/mutations` `/speed` | Game kit pages |
| `/grow-a-chicken-fighter` | Second game kit |
| `/grow-a-chicken-fighter/codes` `/rewards` `/eggs` `/chickens` `/fusion` | GCF kit pages |
| `/anime-vanguards` | Third game kit |
| `/anime-vanguards/codes` `/items` `/traits` `/units` | AV kit pages. Traits/units sourced from official wiki, labeled, not a 200-URL factory |
| `/greedy-growers` | Fourth game kit. Head term lives on the guide only |
| `/greedy-growers/codes` `/mutations` `/seeds` `/pets` `/calculator` | Codes disputed. Mutations/seeds/pets reported. Calculator is manual EV only |
| `/privacy` `/terms` | Unofficial legal pages |

The hub lists live kits only. Codes tables only exist when a redeem box is confirmed. Steal An Egg has no redeem UI as of 2026-08-15. Grow a Chicken Fighter lists WELCOME from the official experience page; extra codes stay unverified until photographed. Anime Vanguards codes follow wiki.vanguards.gg’s active table versus media NEW tags; none are marked working until redeemed in-game. Greedy Growers lists ILOVECATS as disputed only.

## Analytics

Page views use self-hosted Plausible (`plausible.shipsolo.io`), Google Analytics 4 (`G-H20SYKX847`), and Microsoft Clarity (`y2tx3qa7f0`) in `app/layout.tsx`.

Bing IndexNow key file is at `https://upvane.com/020c3e7fbd654fe9b601efd4cccb3779.txt`. After each `master` push, GitHub Actions waits for Cloudflare Pages then submits the live sitemap (`npm run indexnow`).

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
