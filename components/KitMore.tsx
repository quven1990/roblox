import Link from "next/link";
import type { GameSlug } from "@/lib/games";
import {
  growAChickenFighter,
  growAChickenFighterCopy,
} from "@/lib/games/grow-a-chicken-fighter";
import { stealAnEgg, stealAnEggCopy } from "@/lib/games/steal-an-egg";

export function KitMore({ slug = "steal-an-egg" }: { slug?: GameSlug }) {
  const game = slug === "grow-a-chicken-fighter" ? growAChickenFighter : stealAnEgg;
  const cards =
    slug === "grow-a-chicken-fighter"
      ? growAChickenFighterCopy.pages.cards
      : stealAnEggCopy.wiki.cards;

  return (
    <nav className="kit-more" aria-label={`More ${game.name} pages`}>
      <Link href={game.path}>Guide</Link>
      {cards.map((card) => (
        <Link key={card.id} href={`${game.path}/${card.id}`}>
          {card.title}
        </Link>
      ))}
    </nav>
  );
}
