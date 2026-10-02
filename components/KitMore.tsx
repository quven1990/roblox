import Link from "next/link";
import type { GameSlug } from "@/lib/games";
import {
  greedyGrowers,
  greedyGrowersCopy,
} from "@/lib/games/greedy-growers";
import {
  thaLemon3,
  thaLemon3Copy,
} from "@/lib/games/tha-lemon-3";
import { stealAnEgg, stealAnEggCopy } from "@/lib/games/steal-an-egg";

const kitMore = {
  "tha-lemon-3": {
    game: thaLemon3,
    cards: thaLemon3Copy.pages.cards,
  },
  "steal-an-egg": {
    game: stealAnEgg,
    cards: stealAnEggCopy.wiki.cards,
  },
  "greedy-growers": {
    game: greedyGrowers,
    cards: greedyGrowersCopy.pages.cards,
  },
} as const;

export function KitMore({
  slug = "steal-an-egg",
  current,
}: {
  slug?: GameSlug;
  current?: string;
}) {
  const kit = kitMore[slug];

  return (
    <nav className="kit-more" aria-label={`More ${kit.game.name} pages`}>
      {current !== "guide" ? (
        <Link
          href={kit.game.path}
          data-analytics-event="guide_nav"
          data-analytics-game={slug}
          data-analytics-section="guide"
          data-analytics-location="kit_more"
        >
          Guide
        </Link>
      ) : null}
      {kit.cards
        .filter((card) => card.id !== current)
        .map((card) => (
          <Link
            key={card.id}
            href={`${kit.game.path}/${card.id}`}
            data-analytics-event="guide_nav"
            data-analytics-game={slug}
            data-analytics-section={card.id}
            data-analytics-location="kit_more"
          >
            {card.title}
          </Link>
        ))}
    </nav>
  );
}
