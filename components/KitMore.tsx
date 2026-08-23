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
import {
  greedyGrowers,
  greedyGrowersCopy,
} from "@/lib/games/greedy-growers";
import {
  fishAnAnimeRng,
  fishAnAnimeRngArt,
  fishAnAnimeRngArtAlt,
  fishAnAnimeRngCopy,
} from "@/lib/games/fish-an-anime-rng";
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
  "greedy-growers": {
    game: greedyGrowers,
    cards: greedyGrowersCopy.pages.cards,
  },
  "fish-an-anime-rng": {
    game: fishAnAnimeRng,
    cards: fishAnAnimeRngCopy.pages.cards,
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

  if (slug === "anime-vanguards" || slug === "fish-an-anime-rng") {
    const art =
      slug === "anime-vanguards"
        ? { src: animeVanguardsArt, alt: animeVanguardsArtAlt }
        : { src: fishAnAnimeRngArt, alt: fishAnAnimeRngArtAlt };
    const game = kit.game;
    const guideCopy =
      slug === "anime-vanguards"
        ? animeVanguardsCopy.nav.guide
        : fishAnAnimeRngCopy.nav.guide;
    const guideBody =
      slug === "anime-vanguards"
        ? "First session, Update 14.5, mode menu."
        : "Core loop, rebirth, offline base income.";

    const guideTitle =
      slug === "fish-an-anime-rng"
        ? "Fish an Anime RNG wiki"
        : guideCopy;

    const pages = [
      {
        id: "guide",
        href: game.path,
        title: guideTitle,
        body: guideBody,
        src: art.src.guide,
        alt: art.alt.guide,
      },
      ...kit.cards.map((card) => ({
        id: card.id,
        href: `${game.path}/${card.id}`,
        title:
          "sitelink" in card
            ? (card as { sitelink: string }).sitelink
            : card.title,
        body: card.body,
        src: art.src[card.id as keyof typeof art.src],
        alt: art.alt[card.id as keyof typeof art.alt],
      })),
    ].filter((page) => page.id !== current);

    return (
      <nav className="kit-related" aria-label={`More ${kit.game.name} pages`}>
        <h2 className="kit-related-title">More in this kit</h2>
        <div
          className={
            slug === "fish-an-anime-rng"
              ? "wiki-grid faar-page-grid"
              : "wiki-grid"
          }
        >
          {pages.map((page) => (
            <Link
              key={page.id}
              className={
                slug === "fish-an-anime-rng"
                  ? "wiki-card faar-wiki-card"
                  : "wiki-card"
              }
              href={page.href}
              data-analytics-event="guide_nav"
              data-analytics-game={slug}
              data-analytics-section={page.id}
              data-analytics-location="kit_more"
            >
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
