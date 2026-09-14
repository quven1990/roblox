# Upvane

Unofficial Roblox **new-game guide hub** at [upvane.com](https://upvane.com). Kits use **Active / Watch / Frozen** status in `lib/games/*` so the homepage incubates rising titles without deleting old URLs.

Live kits: **Steal An Egg**, **Greedy Growers**, **Fish an Anime RNG**, **Grow a Chicken Fighter**, **Anime Vanguards**.

Pushing `master` to GitHub deploys to Cloudflare Pages (`upvane` project). Build is `npm run build`; output directory is `out/`. Production branch is `master`. Custom domains: `upvane.com` and `www.upvane.com`. The Pages alias `upvane.pages.dev` 301s to `upvane.com` via `functions/_middleware.js` (Cloudflare cannot remove `*.pages.dev`).

## Local site (Next.js)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `/` is the Upvane hub.

```bash
npm run build
```

Static HTML lands in `out/` (`output: 'export'`). Preview the export with `npm start` (`serve out`).

## Adding a game

See [docs/ADDING-A-ROBLOX-GAME.md](docs/ADDING-A-ROBLOX-GAME.md): max **3 pages** at launch, then expand only after GSC signals.

## Routes

| Path | Notes |
|------|--------|
| `/` | Hub homepage (Active / Watch / Frozen + tools) |
| `/steal-an-egg` | Kit (Watch) |
| `/steal-an-egg/pets` | Partial in-game Pet Index |
| `/steal-an-egg/eggs` `/biomes` `/mutations` `/speed` `/updates` | Game kit pages |
| `/grow-a-chicken-fighter` | Kit (Frozen) |
| `/grow-a-chicken-fighter/codes` `/rewards` `/eggs` `/chickens` `/fusion` | GCF kit pages |
| `/anime-vanguards` | Kit (Frozen) |
| `/anime-vanguards/codes` `/items` `/traits` `/units` | AV kit pages |
| `/greedy-growers` | Kit (Watch) |
| `/greedy-growers/codes` `/mutations` `/seeds` `/pets` `/calculator` | Codes disputed. Mutations/seeds/pets reported. Calculator is manual EV only |
| `/fish-an-anime-rng` | Kit (Watch) |
| `/privacy` `/terms` | Unofficial legal pages |

Codes tables only exist when a redeem box is confirmed. Steal An Egg has no redeem UI as of 2026-08-15. Greedy Growers lists ILOVECATS as disputed only.

## Analytics

Page views use self-hosted Plausible (`plausible.shipsolo.io`), Google Analytics 4 (`G-H20SYKX847`), and Microsoft Clarity (`y2tx3qa7f0`) in `app/layout.tsx`. Custom events include `hub_kit_open`, `game_card_click`, `archive_game_click`, `guide_nav`, `calculator_use`, `play_roblox`.

Bing IndexNow key file is at `https://upvane.com/020c3e7fbd654fe9b601efd4cccb3779.txt`. After each `master` push, GitHub Actions waits for Cloudflare Pages then submits the live sitemap (`npm run indexnow`).

## Docs / research

| File | What |
|------|------|
| [docs/ADDING-A-ROBLOX-GAME.md](docs/ADDING-A-ROBLOX-GAME.md) | Incubation flow + expand gates |
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
