import type { GameFacts } from "@/lib/games/types";

export const spiderReviewed = "2026-11-01";
export const plus1SpiderArm = {
  slug: "plus-1-spider-arm", name: "+1 Spider Arm", developer: "This Time For Sure",
  universeId: "10771997908", placeId: "117734411290994",
  playUrl: "https://www.roblox.com/games/117734411290994/1-Spider-Arm",
  lastChecked: spiderReviewed, hasRedeemUi: null, path: "/plus-1-spider-arm", kitNumber: 9,
  kicker: "Unofficial climbing guide",
  lede: "Get a better first climb, find out why Grip runs out, and understand the level reset before your next Rebirth.",
  tags: ["Getting started", "Climbing & Grip", "Rebirth"],
  icon: "/games/plus-1-spider-arm/icon.svg", thumb: "/games/plus-1-spider-arm/rooftops.svg", status: "active",
  featuredPages: [
    { label: "Climbing & Grip", href: "/plus-1-spider-arm/climbing-grip" },
    { label: "Rebirth requirements", href: "/plus-1-spider-arm/rebirth" },
  ],
} as const satisfies GameFacts;

export const spiderNav = [
  { id: "guide", label: "Start here", href: plus1SpiderArm.path },
  { id: "climbing-grip", label: "Climbing & Grip", href: `${plus1SpiderArm.path}/climbing-grip` },
  { id: "rebirth", label: "Rebirth", href: `${plus1SpiderArm.path}/rebirth` },
] as const;
export const spiderPages = [
  { id: "climbing-grip", title: "Stop losing your grip", body: "The hold-to-climb control, stage Grip checks, and a useful diagnosis for repeated falls.", href: spiderNav[1].href },
  { id: "rebirth", title: "Read the reset before you Rebirth", body: "Reported level gates, XP boosts and training-pad unlocks, with their evidence limits.", href: spiderNav[2].href },
] as const;
export const spiderVideo = "https://www.youtube.com/watch?v=aI7qoVmn0dc";
export function spiderVideoAt(seconds: number) { return `${spiderVideo}&t=${seconds}s`; }
