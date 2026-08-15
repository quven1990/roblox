import Link from "next/link";
import { stealAnEgg, stealAnEggCopy } from "@/lib/games/steal-an-egg";

export function KitMore() {
  const cards = stealAnEggCopy.wiki.cards;

  return (
    <nav className="kit-more" aria-label="More Steal An Egg pages">
      <Link href={stealAnEgg.path}>Guide</Link>
      {cards.map((card) => (
        <Link key={card.id} href={`${stealAnEgg.path}/${card.id}`}>
          {card.title}
        </Link>
      ))}
    </nav>
  );
}
