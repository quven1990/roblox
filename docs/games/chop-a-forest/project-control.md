# Chop A Forest — release control

User authorization: build one game section with useful content and attractive UI; verify and deploy directly (2026-10-25, Asia/Shanghai). No additional game sections, tracking services or external search-engine submission.

## Scope and route contract
- `/chop-a-forest/`: beginner decisions, first purchases, local interactive bottleneck finder.
- `/chop-a-forest/zones/`: Chapter 1 route, first boss and locked-gate troubleshooting; Chapter 2 clearly separated.
- `/chop-a-forest/tools/`: coin purchase references, storage versus transport choices, honest source conflicts.
- Integrate homepage, Games menu, footer, existing analytics game context, sitemap. Preserve existing routes.

## Design rationale
Considered: dark game dashboard (too dense for reading); screenshot-heavy magazine (no owned screenshots available); illustrated field guide (chosen: content-led, distinctive, responsive, owned vector assets).
Warm ivory paper, deep evergreen, moss and amber; Outfit with a restrained Georgia accent. Original SVG forest illustration explicitly labeled as illustration, never a gameplay screenshot or traversable game map. Desktop asymmetrical hero, article with useful side navigation; mobile single-column cards and readable tables. No new font service.

## Gates
- Research / claim ledger: complete; see `evidence-ledger.md`. Official description/API for identity/core loop. Dated independent guides for version-sensitive observations. No claim of Upvane playtesting.
- Content and route implementation: complete; all 3 intended routes implemented, no new empty pages.
- Desktop/mobile UI and interaction QA: PASS; 16 page/viewport combinations, 1440/768/390/360px. See `qa/results.json`.
- Independent content/code QA: GO; separate reviewer, three P2 suggestions fixed and independently rechecked. See `qa/independent-review.md`.
- Build / typecheck / links / metadata: PASS; `npm run build` (32 static tasks), `npx tsc --noEmit`, `git diff --check`, 50 internal paths, no broken links/target fragments/page errors. Canonical and sitemap entries checked.
- Production: existing GitHub master → Cloudflare Pages; use [skip actions] to avoid IndexNow. User has already authorized deployment.


## Acceptance details
- Real mobile journeys: homepage → game; Games menu; all 3 game subnav links visible; bottleneck choice → correct article anchor; FAQ opens.
- Planner: 0 coins → 150 short; 100 coins → 50 short; own Axe → 75 short of bag; change bag price to 200 → 100 short; 250 coins → affordable; all owned → completion; negative budget → validation; reset → defaults.
- Third-party browser requests were blocked for QA to avoid testing analytics with live submissions. No third-party scripts or provider settings changed.
- Metadata: one H1 per page, production HTTPS canonical, Article/Breadcrumb schema, correct source dates. Existing content dates remain unchanged.
- Assets: 2 original SVG files; no third-party game or Wiki image download. See claim/asset ledger.
- Build and interaction evidence apply to the final implementation. Production confirmation is performed after pushing the same source revision.
