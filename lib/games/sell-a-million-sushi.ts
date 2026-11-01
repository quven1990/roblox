import type { GameFacts } from "@/lib/games/types";

export const sushiReviewed = "2026-11-01";
export const sellAMillionSushi = {
  slug: "sell-a-million-sushi", name: "Sell a Million Sushi", developer: "Popular Marketplace",
  universeId: "10770628276", placeId: "125866884667103",
  playUrl: "https://www.roblox.com/games/125866884667103/Sell-a-Million-Sushi",
  lastChecked: sushiReviewed,
  hasRedeemUi: null,
  path: "/sell-a-million-sushi", kitNumber: 8, kicker: "Unofficial restaurant guide",
  lede: "Get your first sushi sale, merge your first fishermen, and find the missing step when your restaurant stops earning.",
  tags: ["Getting started", "Merge fishermen", "Money troubleshooting"],
  icon: "/games/sell-a-million-sushi/icon.svg", thumb: "/games/sell-a-million-sushi/restaurant.svg", status: "active",
  featuredPages: [
    { label: "Merge fishermen", href: "/sell-a-million-sushi/merge-fishermen" },
    { label: "Restaurant not making money?", href: "/sell-a-million-sushi/not-making-money" },
  ],
} as const satisfies GameFacts;

export const sushiNav = [
  { id: "guide", label: "Start here", href: sellAMillionSushi.path },
  { id: "merge-fishermen", label: "Merge fishermen", href: `${sellAMillionSushi.path}/merge-fishermen` },
  { id: "not-making-money", label: "Money help", href: `${sellAMillionSushi.path}/not-making-money` },
] as const;
export const sushiPages = [
  { id: "merge-fishermen", title: "Make your first Tier 2 fisherman", body: "The three-fisherman tutorial, the merge pad, and what changes after merging.", href: sushiNav[1].href },
  { id: "not-making-money", title: "Find where the money loop stopped", body: "Check caught fish, kitchen delivery, customers and the separate collection pad.", href: sushiNav[2].href },
] as const;
export const sushiVideo = "https://www.youtube.com/watch?v=k5dkj8A5Wj4";
export function sushiVideoAt(seconds: number) { return `${sushiVideo}&t=${seconds}s`; }
