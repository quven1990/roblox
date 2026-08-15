import { stealAnEgg } from "@/lib/games/steal-an-egg";
import { growAChickenFighter } from "@/lib/games/grow-a-chicken-fighter";
import { absoluteUrl } from "@/lib/site";

/** Live kits on the hub. Add a game here when its pages ship. */
export const catalog = [stealAnEgg, growAChickenFighter] as const;

export const games = {
  "steal-an-egg": stealAnEgg,
  "grow-a-chicken-fighter": growAChickenFighter,
} as const;

export type GameSlug = keyof typeof games;

export function catalogForJsonLd() {
  return catalog.map((game) => ({
    name: game.name,
    url: absoluteUrl(game.path),
  }));
}
