import Link from "next/link";
import type { GameSlug } from "@/lib/games";
import {
  animeVanguards,
  animeVanguardsCopy,
} from "@/lib/games/anime-vanguards";
import {
  growAChickenFighter,
  growAChickenFighterCopy,
} from "@/lib/games/grow-a-chicken-fighter";
import { stealAnEgg, stealAnEggCopy } from "@/lib/games/steal-an-egg";

const kitMore = {
  "steal-an-egg": {
    game: stealAnEgg,
    cards: stealAnEggCopy.wiki.cards,
  },
  "grow-a-chicken-fighter": {
    game: growAChickenFighter,
    cards: growAChickenFighterCopy.pages.cards,
  },
  "anime-vanguards": {
    game: animeVanguards,
    cards: animeVanguardsCopy.pages.cards,
  },
} as const;

export function KitMore({ slug = "steal-an-egg" }: { slug?: GameSlug }) {
  const kit = kitMore[slug];

  return (
    <nav className="kit-more" aria-label={`More ${kit.game.name} pages`}>
      <Link href={kit.game.path}>Guide</Link>
      {kit.cards.map((card) => (
        <Link key={card.id} href={`${kit.game.path}/${card.id}`}>
          {card.title}
        </Link>
      ))}
    </nav>
  );
}
