# Upvane GSC review and search-intent decisions — 2026-11-01

Source: live Search Console API using existing project credentials, property `sc-domain:upvane.com`, web search, all countries/devices, `dataState=final`. GSC dates are Pacific Time. Latest available final date: 2026-10-30. Requests and returned rows: `gsc.json`; URL Inspection and sitemap status: `indexing.json`. Scripts contain no embedded credential values.

## Measured result

- Oct 24–30: 0 clicks / 3 property-level impressions. Oct 17–23: 0 / 0. The earlier zero baseline is not a meaningful percentage-growth comparison.
- New Chop A Forest routes, Oct 25–30: 0 clicks / 0 impressions returned with a page filter. No evidence of organic traction yet; only six GSC reporting days since release.
- Oct 3–30 query and query+page results contain no visible rows. This is missing visible query evidence, not proof that no one searches for these tasks. Privacy thresholds/aggregation can hide low-volume queries.
- Last7 page breakdown contains 14 page impressions across five URLs; property impressions are 3. These are different GSC aggregation units and must not be summed/interchanged as search totals. A removed historical URL appears in GSC history; it is not recreated or treated as current inventory.
- URL Inspection reports the three Chop URLs as unknown to Google. This is an index-status observation, not a live crawl failure diagnosis or evidence of a manual penalty. The existing Steal An Egg pets page is Submitted and indexed.
- Sitemap endpoint reports last downloaded Oct 30, 0 warnings, 0 errors, 24 submitted. Its indexed=0 summary conflicts with the sampled pets inspection; do not claim every site page is unindexed. No technical cause for the new URL status is established.

## Decision

Do not scale based on three impressions or claim to have found GSC-proven long-tail queries. Preserve existing pages and rankings. Add only two explicit, provisional intent experiments supported by publicly discoverable task-specific guides. Improve crawl paths with related links and retain a complete published sitemap. Do not promise indexing or traffic.

| Search phrasing (hypothesis, NOT GSC observed) | Desired outcome | Action | Avoided overlap |
| --- | --- | --- | --- |
| how to get gems in chop a forest; group reward not working; what gem perk to buy first | find an eligible free reward, resolve claim state, avoid wasting early Gems | `/chop-a-forest/gems/` | coin purchase/hauling remains on Tools |
| how to pick up acorn egg chop a forest; how to hatch eggs; how to equip pets | complete pickup, locate hatch result, activate the pet | `/chop-a-forest/pets/` | Boss fight remains on Zones, linked rather than reprinted |
| how to unlock birch grove; chop a forest backpack upgrade | gate solution / purchase decision | retain existing Zones/Tools | no new near-duplicate URLs |

Public-source checks Nov 1: MMORocks Gems report (Oct18–19), AllThingsHow free-Gem report (Oct14), MMORocks pet report (Oct18–19), plus prior archived official pass descriptions. The search results establish relevant existing coverage and source availability, not keyword volume or easy ranking. No volume/KD fabricated. The Gem payout and Mutation Luck conflicts remain disclosed. No third-party pictures or fake gameplay used.

## Recheck criteria

After Google reports crawls/index status and complete reporting days, compare these exact paths and query clusters. Improve the matching page for overlapping queries. Consider another URL only for a distinct task with enough evidence, not a keyword spelling variant. IndexNow acceptance and sitemap submission are not indexing confirmation.
