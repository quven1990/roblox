# Chop A Forest claim and asset ledger — 2026-10-25

## Method

Sources were read on 2026-10-25. Public official API responses are archived alongside this file with source URLs and retrieval timestamps. Upvane did not run a Roblox client playtest, inspect private game code, or verify gameplay by borrowing another site's screenshots. Community reports keep their Oct 17–19 observation dates even though this new guide's source review date is Oct 25. No published CCU, dynamic player count, invented tier list, estimated odds, new coupon list or unmeasured earnings claim.

## Claim coverage

| Claim | Evidence | Treatment in public guide |
| --- | --- | --- |
| Correct game is WCT Capital, place 103363457515322, universe 10767386157 | `game-source.json`; creator listing | Official identity; no affiliation implied |
| Chop, collect, sell, upgrade; solo/friend runs save | Creator listing and game API description | Confirmed description; no promise about all public runs or purchase persistence |
| Chapter 1 route: Oak Wood, Birch Grove, Pine Wood, Evergreens, Cherry Grove, Autumn Wood, Fir Giants, Golden Aspens | AllThingsHow Oct 19 walkthrough, route source in `lib/games/chop-a-forest.ts` | Community-reported Chapter 1 order; no fabricated later boss names or thresholds |
| Oak Wood 100% wakes Old Barkback; defeat leads to Birch Grove; The Pale Stag in Birch Grove | MMORocks dedicated Birch guide, observed Oct 18 | Community-reported; current live objective prevails |
| Supply crate / coin rifle / fight at range / revive or recovery | MMORocks dedicated Birch and Boss guides, observed Oct 18 | Dated walkthrough, no fabricated HP/attack patterns or slot numbers |
| Acorn Egg held interaction, PETS → EGGS | Dedicated Birch guide | Reported interaction; no invented pet stats or drop odds |
| Axe 150; backpack 175/15, next tier 750/25 | AllThingsHow and dedicated bag report | Reported, editable planner defaults; capacity conflicts disclosed |
| Starter coin trucks: 500/50, 2,800/75, 6,500/100 | Dedicated Garage guide, observed Oct 17–18 | Reported; omit conflicting speeds, late-tier currencies and profit forecasts |
| Buy vs SPAWN, load vs drive vs sell, collect dropped coins | Dedicated Garage guide, cross-check AllThingsHow selling section | Dated player task instructions |
| Held saw action, overheating, timer trial vs ownership | Dedicated chainsaw guide Oct 18–19; pass listing | Community behavior report; no measured DPS/cooldown claims |
| Chainsaw Forever grants tool in every run | `passes-source.json`, current creator description | Official wording paraphrased; does not imply coin-shop availability |
| Forest: clear all trees and cash out; Desert: clear all cacti and activate detonator | `badges-source.json` | Official distinct requirements, prevent Chapter 1/2 confusion |
| Forest timed goals under 3h / 2h / 90m | Official badge requirements | Existing targets, not completion-time guarantees |
| Choose cutting vs carrying upgrade according to observed delay | Original Upvane reasoning | Clearly advice, not a measured strategy ranking |
| Editable saving target | Arithmetic on the user-entered balance and price | Not live prices, optimization or earnings model; ownership checkboxes are manual |

## Source conflicts deliberately kept visible

- Some general guides suggest clearing trees directly unlocks gates; the dedicated Boss playtest documents an intervening fight. Published as a version-aware check, not resolved by inventing a universal mechanic.
- First bag 10 vs 15. Dedicated bag source uses 15. Current panel decides.
- Different early-truck speeds. Omitted; do not infer a linear curve.
- Coin Chainsaw vs paid pass. Coin offer is not a verified target in the planner.
- Dynamic event API includes past events with `active` status. Therefore no inference that a date window alone proves current in-game event availability. No event countdown published.

## Original assets

| Pages | Asset | Origin | License / rights basis | Gameplay screenshot? |
| --- | --- | --- | --- | --- |
| Homepage card; Chop A Forest hero | `public/games/chop-a-forest/forest.svg` | Original SVG authored for Upvane in this change; only geometric hills, trees, cabin and decorative trail | Repository-native original artwork; no third-party game/Wiki image incorporated | No. Public caption explicitly says illustration, not gameplay; not a usable map |
| Homepage/menu/metadata game identity | `public/games/chop-a-forest/icon.svg` | Original stylized tree authored for this change | Repository-native original vector | No |
| Interface icons | lucide-react, existing project dependency | Existing Lucide library | Existing package license; no new icon provider | No |
| Typography | Existing Outfit, Georgia/system serif | Existing bundled font pipeline and system fonts | No added web font or remote runtime request | No |

No official Roblox logo/badge, game screenshot, third-party Wiki artwork or YouTube iframe added. No new tracking service, named analytics event, login, upload, localStorage or server write endpoint. The two tools use React state; existing Clarity may observe rendered inputs, so public wording does not promise invisibility to the existing analytics providers.

## Content differentiation

Three task pages, not a full Wiki dump. Hub uses a real bottleneck selector, zones page explains the missing Boss step and separate chapter finish actions, tools page compares the collection/transport bottleneck with an editable target planner. All three place the answer before FAQ, related content and source notes. No empty links or placeholder sections.
