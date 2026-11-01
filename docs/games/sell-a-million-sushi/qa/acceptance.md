# Public-page acceptance — 2026-11-01

- `npm run build`: PASS, 37 static outputs including metadata routes.
- `npx tsc --noEmit`: PASS.
- `git diff --check`: PASS.
- Browser layout matrix: home, three Sushi pages, Chop hub and Steal An Egg pets × 1440/768/390/360 widths: PASS (24).
- One H1, canonical equality, image loading, no document horizontal overflow or client page exceptions: PASS.
- Sushi Article/Breadcrumb schemas, dated publication/modification, no iframe, sitemap routes: PASS.
- Mobile task: home card → guide → first steps → merge nav → FAQ → related money page → diagnosis anchor → keyboard scroll in focused table → Games menu → Chop → Privacy: PASS.
- 58 unique internal linked paths: all HTTP success; Sushi fragments resolve. Sitemap: 29 distinct page URLs, robots advertises correct sitemap.
- New mobile nav fits; direct answer appears before illustrative diagram. Table region has a keyboard focus outline, label and ArrowRight scrolling.
- External requests blocked in isolated browser QA; no analytics test visits were sent. Existing analytics provider configuration is unchanged; no live conversion result is claimed.
- Existing public legal pages and main guide paths still reachable. There are no authenticated features in this release.
- Independent read-only review: GO, no P0/P1; low-impact table/nav feedback fixed and rechecked.

Screenshots here are screenshots of the Upvane website under test, not Roblox gameplay assets. Source facts and open human checks are in ../project-control.md.
