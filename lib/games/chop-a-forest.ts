import type { GameFacts } from "@/lib/games/types";
import { absoluteUrl, pageMetadata, SITE_NAME } from "@/lib/site";

/** Source review date, not a claim of an Upvane client playtest. */
export const chopReviewed = "2026-10-25";
export const chopAForest = {
  slug: "chop-a-forest",
  name: "Chop A Forest",
  developer: "WCT Capital",
  universeId: "10767386157",
  placeId: "103363457515322",
  playUrl: "https://www.roblox.com/games/103363457515322/Chop-A-Forest",
  lastChecked: chopReviewed,
  hasRedeemUi: false,
  path: "/chop-a-forest",
  kitNumber: 7,
  kicker: "Unofficial field guide",
  lede: "Spend your first coins well, solve locked gates, and cut down the trips between trees and the sell pad.",
  tags: ["Beginner guide", "Zones & bosses", "Tools & upgrades"],
  icon: "/games/chop-a-forest/icon.svg",
  thumb: "/games/chop-a-forest/forest.svg",
  status: "active",
  tools: [{ label: "Chop A Forest Purchase Planner", href: "/chop-a-forest/tools#planner" }],
  featuredPages: [
    { label: "Zones & bosses", href: "/chop-a-forest/zones" },
    { label: "Tools & upgrades", href: "/chop-a-forest/tools" },
  ],
} as const satisfies GameFacts;

export const chopNav = [
  { id: "guide", label: "Start here", href: "/chop-a-forest" },
  { id: "zones", label: "Zones & bosses", href: "/chop-a-forest/zones" },
  { id: "tools", label: "Tools", href: "/chop-a-forest/tools" },
] as const;

export const chopPages = [
  { id: "zones", title: "Get through the next gate", body: "Chapter 1 zone order, Old Barkback, and a checklist for a locked Birch Grove.", href: "/chop-a-forest/zones" },
  { id: "tools", title: "Make your next purchase count", body: "Coin prices, carrying capacity, truck loading, and when a faster tool will actually help.", href: "/chop-a-forest/tools" },
] as const;

export const chopSources = {
  badges: { label: "Roblox: creator’s badge requirements", href: "https://badges.roblox.com/v1/universes/10767386157/badges?limit=100&sortOrder=Asc", note: "Fetched Oct 25: forest cash-out, desert detonator and separate timed-clear requirements." },
  passes: { label: "Roblox: current game pass listing", href: "https://apis.roblox.com/game-passes/v1/universes/10767386157/game-passes?pageSize=100&passView=Full", note: "Fetched Oct 25: Forever tool names and creator descriptions. A pass description does not confirm in-run coin prices." },
  official: { label: "WCT Capital’s Roblox listing", href: chopAForest.playUrl, note: "Game identity, chop–sell–upgrade loop, and the solo/friend save statement. Reviewed Oct 25." },
  birch: { label: "MMORocks: unlocking Birch Grove", href: "https://mmorocks.com/games/chop-a-forest/how-to-unlock-birch-grove/", note: "Their Oct 18 playtest: first gate, supply crate and boss sequence. Community observation, not our playtest." },
  boss: { label: "MMORocks: Old Barkback", href: "https://mmorocks.com/games/chop-a-forest/old-barkback-boss/", note: "Their Oct 18 boss observations, including range and recovery." },
  backpack: { label: "MMORocks: backpack upgrades", href: "https://mmorocks.com/games/chop-a-forest/backpack-upgrades/", note: "Their Oct 17–18 bag capacity and purchase observations." },
  trucks: { label: "MMORocks: truck tiers & loading", href: "https://mmorocks.com/games/chop-a-forest/trucks/", note: "Their Oct 17–18 Garage observations; speed and late-tier currency conflicts remain unresolved." },
  saw: { label: "MMORocks: chainsaw heat & trials", href: "https://mmorocks.com/games/chop-a-forest/chainsaw/", note: "Their Oct 18–19 observations. We do not infer cooldown seconds or damage from them." },
  route: { label: "AllThingsHow: Chapter 1 route & purchases", href: "https://allthings.how/chop-a-forest-guide-how-to-get-coins-fast-roblox/", note: "Oct 19 walkthrough. Used for the eight-area route and coin-tool leads; some boss and shop details differ from other reports." },
} as const;
export type ChopSourceKey = keyof typeof chopSources;

export const chapterOneZones = [
  { name: "Oak Wood", note: "Start here. Old Barkback is the reported gate boss before Birch Grove.", kind: "oak" },
  { name: "Birch Grove", note: "The Pale Stag is the reported boss. Check the area’s own clearance counter.", kind: "birch" },
  { name: "Pine Wood", note: "Third area in the reported Chapter 1 route.", kind: "pine" },
  { name: "Evergreens", note: "Fourth area in that route; keep using your current gate objective.", kind: "evergreen" },
  { name: "Cherry Grove", note: "Fifth area in that route.", kind: "cherry" },
  { name: "Autumn Wood", note: "Sixth area in that route.", kind: "autumn" },
  { name: "Fir Giants", note: "Seventh area in that route.", kind: "fir" },
  { name: "Golden Aspens", note: "Final area in the reported forest route; look for the end-of-run objective.", kind: "gold" },
] as const;

export const chopPurchaseRows = [
  { name: "Axe", price: "150 coins", capacity: "—", use: "First cutting upgrade", note: "Buy at the Tool Shop; a practical first target before spending heavily on fists.", sources: ["route", "saw"] },
  { name: "First Backpack", price: "175 coins", capacity: "15 logs reported", use: "Fewer walking trips", note: "Use the stand by the sell pad. Some older reports show 10; read the capacity on your current panel.", sources: ["backpack"] },
  { name: "Rusty Runabout", price: "500 coins", capacity: "50 logs reported", use: "Move batches to sell", note: "First coin truck. Purchase, then choose SPAWN in the Garage.", sources: ["trucks"] },
  { name: "Next Backpack tier", price: "750 coins", capacity: "25 logs reported", use: "Fewer pickup-to-truck transfers", note: "A bag upgrade and a truck solve different parts of your route.", sources: ["backpack"] },
  { name: "Farmhand Pickup", price: "2,800 coins", capacity: "75 logs reported", use: "Larger truck batches", note: "A later transport option; no universal buy order is assumed.", sources: ["trucks"] },
  { name: "Timber Flatbed", price: "6,500 coins", capacity: "100 logs reported", use: "More load per drive", note: "Only helps if transport is still your bottleneck.", sources: ["trucks"] },
] as const;

export const chopMetadata = pageMetadata(
  "Chop A Forest Guide: First Purchases & Progression | Upvane",
  "Start Chop A Forest with a useful coin buy order, solve your first locked gate, and choose between faster cutting and fewer hauling trips. Dated source notes included.",
  chopAForest.path,
);
export const chopZonesMetadata = pageMetadata(
  "Chop A Forest Zones & Bosses: Unlock Birch Grove | Upvane",
  "Find the reported Chapter 1 zone order, clear the Old Barkback gate, and troubleshoot a forest stuck at 99% or a still-locked Birch Grove.",
  `${chopAForest.path}/zones`,
);
export const chopToolsMetadata = pageMetadata(
  "Chop A Forest Tools, Backpacks & Truck Buy Order | Upvane",
  "Compare reported coin costs and carry limits for early Chop A Forest upgrades. Learn truck loading, chainsaw heat, and which bottleneck to fix first.",
  `${chopAForest.path}/tools`,
);

export function chopJsonLd(page: "guide" | "zones" | "tools", title: string) {
  const path = page === "guide" ? chopAForest.path : `${chopAForest.path}/${page}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: title, url: absoluteUrl(path), inLanguage: "en", datePublished: chopReviewed, dateModified: chopReviewed, author: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl() }, publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl() }, about: { "@type": "VideoGame", name: chopAForest.name, url: chopAForest.playUrl } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: chopAForest.name, item: absoluteUrl(chopAForest.path) },
        ...(page === "guide" ? [] : [{ "@type": "ListItem", position: 3, name: page === "zones" ? "Zones & bosses" : "Tools & upgrades", item: absoluteUrl(path) }]),
      ] },
    ],
  };
}
