import Link from "next/link";
import type { GameSlug } from "@/lib/games";
import {
  animeVanguards,
  animeVanguardsArt,
  animeVanguardsArtAlt,
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

export function KitMore({
  slug = "steal-an-egg",
  current,
}: {
  slug?: GameSlug;
  current?: string;
}) {
  const kit = kitMore[slug];

  if (slug === "anime-vanguards") {
    const pages = [
      {
        id: "guide",
        href: animeVanguards.path,
        title: animeVanguardsCopy.nav.guide,
        body: "First session, Update 14.5, mode menu.",
        src: animeVanguardsArt.guide,
        alt: animeVanguardsArtAlt.guide,
      },
      ...animeVanguardsCopy.pages.cards.map((card) => ({
        id: card.id,
        href: `${animeVanguards.path}/${card.id}`,
        title: card.title,
        body: card.body,
        src: animeVanguardsArt[card.id as keyof typeof animeVanguardsArt],
        alt: animeVanguardsArtAlt[card.id as keyof typeof animeVanguardsArtAlt],
      })),
    ].filter((page) => page.id !== current);

    return (
      <nav className="kit-related" aria-label={`More ${kit.game.name} pages`}>
        <h2 className="kit-related-title">More in this kit</h2>
        <div className="wiki-grid">
          {pages.map((page) => (
            <Link key={page.id} className="wiki-card" href={page.href}>
              <img
                src={page.src}
                alt={page.alt}
                width={640}
                height={360}
                sizes="(max-width: 640px) 100vw, 340px"
              />
              <strong>{page.title}</strong>
              <span>{page.body}</span>
            </Link>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className="kit-more" aria-label={`More ${kit.game.name} pages`}>
      {current !== "guide" ? (
        <Link href={kit.game.path}>Guide</Link>
      ) : null}
      {kit.cards
        .filter((card) => card.id !== current)
        .map((card) => (
          <Link key={card.id} href={`${kit.game.path}/${card.id}`}>
            {card.title}
          </Link>
        ))}
    </nav>
  );
}
