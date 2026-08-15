import { stealAnEgg } from "@/lib/games/steal-an-egg";
import { SITE_ORIGIN } from "@/lib/site";

/** Live kits on the hub. Add a game here when its pages ship. */
export const catalog = [stealAnEgg] as const;

export const games = {
  "steal-an-egg": stealAnEgg,
} as const;

export type GameSlug = keyof typeof games;

export function catalogForJsonLd() {
  return catalog.map((game) => ({
    name: game.name,
    url: `${SITE_ORIGIN}${game.path}`,
  }));
}
