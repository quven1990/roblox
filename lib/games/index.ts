import { stealAnEgg } from "@/lib/games/steal-an-egg";
import { growAChickenFighter } from "@/lib/games/grow-a-chicken-fighter";
import { animeVanguards } from "@/lib/games/anime-vanguards";
import { absoluteUrl } from "@/lib/site";

/** Live kits on the hub. Add a game here when its pages ship. Newest last. */
export const catalog = [
  stealAnEgg,
  growAChickenFighter,
  animeVanguards,
] as const;

export const games = {
  "steal-an-egg": stealAnEgg,
  "grow-a-chicken-fighter": growAChickenFighter,
  "anime-vanguards": animeVanguards,
} as const;

export type GameSlug = keyof typeof games;

export function latestKit() {
  return catalog[catalog.length - 1];
}

export function catalogForJsonLd() {
  return catalog.map((game) => ({
    name: game.name,
    url: absoluteUrl(game.path),
  }));
}
