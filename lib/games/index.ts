import { stealAnEgg } from "@/lib/games/steal-an-egg";
import { growAChickenFighter } from "@/lib/games/grow-a-chicken-fighter";
import { animeVanguards } from "@/lib/games/anime-vanguards";
import { greedyGrowers } from "@/lib/games/greedy-growers";
import { fishAnAnimeRng } from "@/lib/games/fish-an-anime-rng";
import { thaLemon3 } from "@/lib/games/tha-lemon-3";
import type { GameFacts, GameStatus, GameToolLink } from "@/lib/games/types";
import { absoluteUrl } from "@/lib/site";

/** Live kits on the hub. Add a game here when its pages ship. */
export const catalog = [
  thaLemon3,
  stealAnEgg,
  growAChickenFighter,
  animeVanguards,
  greedyGrowers,
  fishAnAnimeRng,
] as const satisfies readonly GameFacts[];

export const games = {
  "tha-lemon-3": thaLemon3,
  "steal-an-egg": stealAnEgg,
  "grow-a-chicken-fighter": growAChickenFighter,
  "anime-vanguards": animeVanguards,
  "greedy-growers": greedyGrowers,
  "fish-an-anime-rng": fishAnAnimeRng,
} as const;

export type GameSlug = keyof typeof games;

export type CatalogGame = (typeof catalog)[number];

export function gamesByStatus(status: GameStatus): CatalogGame[] {
  return catalog.filter((game) => game.status === status);
}

export function catalogTools(): GameToolLink[] {
  return catalog.flatMap((game) => {
    if (!("tools" in game) || !game.tools) {
      return [];
    }
    return [...game.tools];
  });
}

/** Newest lastChecked first — for homepage Recently Updated. */
export function recentlyUpdatedGames(limit = 6): CatalogGame[] {
  return [...catalog]
    .sort((a, b) => b.lastChecked.localeCompare(a.lastChecked))
    .slice(0, limit);
}

export function formatGameChecked(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) {
    return isoDate;
  }
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function statusLabel(status: GameStatus) {
  if (status === "active") {
    return "Active";
  }
  if (status === "watch") {
    return "Watch";
  }
  return "Frozen";
}

/** @deprecated Prefer status-based hub sections. Kept for any legacy callers. */
export function latestKit() {
  return [...catalog].sort((a, b) =>
    b.lastChecked.localeCompare(a.lastChecked),
  )[0]!;
}

export function catalogForJsonLd() {
  return catalog.map((game) => ({
    name: game.name,
    url: absoluteUrl(game.path),
  }));
}
