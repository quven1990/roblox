import type { GameFacts } from "@/lib/games/types";

export const basketballReviewed = "2026-11-06";

export const practicalBasketball = {
  slug: "practical-basketball",
  name: "Practical Basketball",
  developer: "Practical's Games",
  universeId: "7529591378",
  placeId: "80681221431821",
  playUrl: "https://www.roblox.com/games/80681221431821/Practical-Basketball",
  lastChecked: basketballReviewed,
  hasRedeemUi: null,
  path: "/practical-basketball",
  kitNumber: 10,
  kicker: "Unofficial basketball guides",
  lede: "Find your controls, separate a shot from a pump fake, and work out why a finish is not becoming a dunk.",
  tags: ["Start here", "Controls", "Shooting & dunking"],
  icon: "/games/practical-basketball/icon.svg",
  thumb: "/games/practical-basketball/court.svg",
  status: "active",
  featuredPages: [
    { label: "PC, Xbox & PS controls", href: "/practical-basketball/controls" },
    { label: "Shooting & dunking", href: "/practical-basketball/shooting-and-dunking" },
  ],
} as const satisfies GameFacts;

export const basketballNav = [
  { id: "guide", label: "Start here", href: practicalBasketball.path },
  { id: "controls", label: "Controls", href: `${practicalBasketball.path}/controls` },
  { id: "shooting-and-dunking", label: "Shooting & dunks", href: `${practicalBasketball.path}/shooting-and-dunking` },
] as const;

export const basketballPages = [
  { id: "controls", title: "Find the right input", body: "A focused PC, Xbox and PlayStation reference, with the conditions that change a move.", href: basketballNav[1].href },
  { id: "shooting-and-dunking", title: "Fix the next shot or finish", body: "Check the command, approach and release separately before changing your build.", href: basketballNav[2].href },
] as const;

export const basketballSources = {
  controls: "https://allthings.how/practical-basketball-mobile-console-and-pc-controls/",
  beginner: "https://techwiser.com/practical-basketball-beginner-guide/",
  socials: "https://linktr.ee/PracticalBasketball",
} as const;
