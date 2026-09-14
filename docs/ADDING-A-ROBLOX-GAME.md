# Adding a Roblox game to Upvane

Upvane is a **new-game SEO incubation hub**. Do not ship a full wiki on day one.

## Default rule

A new game starts with **at most 3 pages**:

1. `/game/` — hub summary + links
2. `/game/[strong-intent-1]/`
3. `/game/[strong-intent-2]/` (optional)

Never default to Codes + Pets + Tier List + FAQ + Beginner + Updates all at once.

## Page choice (not a fixed template)

Pick intents from the game’s real mechanics:

1. Concrete system / mechanic (mutations, fusion, traits, …)
2. Problem players need solved now
3. Fresh update content with real data
4. Database pages only when numbers exist
5. Codes **only** when redeem demand is real

## Steps

1. Add a game config under `lib/games/<slug>.ts` with:
   - `slug`, `name`, `status`, `lede`, `lastChecked`
   - `featuredPages` (2–4 hub links)
   - optional `tools`
2. Export it from `lib/games/index.ts` (`catalog` + `games`).
3. Create `/app/<slug>/page.tsx` hub only.
4. Add at most two strong-intent child routes.
5. Set `status: "active"` while incubating.
6. Wire metadata via `pageMetadata` (self-canonical HTTPS).
7. Confirm the route is covered by `app/sitemap.ts` patterns already used by other kits.
8. `npm run build`
9. Deploy / push `master`
10. Wait for GSC impressions before expanding

## Expand only when

- GSC starts producing impressions on the hub or child page
- A query shows a **distinct** intent not already answered
- There is enough **real** game data to answer it

Do **not** hard-code impression thresholds in code. Expansion is an editorial call.

## Status values

Change status in the game config only (`lib/games/<slug>.ts`):

| Status | Meaning |
|--------|---------|
| `active` | Worth updating; may add tested pages |
| `watch` | Keep URLs; no batch expansion |
| `frozen` | Stop expansion; keep URLs indexed |

Frozen ≠ delete. Frozen ≠ noindex. Frozen ≠ 301.

## Content rule

**Answer first, evidence second.** Label rows as Verified / Community-reported / Unconfirmed / Outdated. Never invent codes, multipliers, drop rates, or update dates.

## Expanding after GSC signals

If Search Console later shows distinct demand for cars, heists, jobs, or codes on an Active kit, add **one** page for that intent — only when real data exists. Do not pre-build those URLs.

## Analytics

Hub cards should keep firing `hub_kit_open` / `game_card_click` / `archive_game_click` via `data-analytics-*` attributes. Register new event names with `scripts/register-shipsolo-goals.mjs` when you add them.
