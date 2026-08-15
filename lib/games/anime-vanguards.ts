import type { GameFacts } from "@/lib/games/types";
import { SITE_NAME, absoluteUrl, pageMetadata } from "@/lib/site";

export const animeVanguards = {
  slug: "anime-vanguards",
  name: "Anime Vanguards",
  developer: "Kitawari",
  universeId: "5578556129",
  placeId: "16146832113",
  playUrl: "https://www.roblox.com/games/16146832113/Anime-Vanguards-25th-Hour",
  lastChecked: "2026-08-16",
  hasRedeemUi: true,
  path: "/anime-vanguards",
  kitNumber: 3,
  kicker: "Live",
  lede: "Summon units, hold the track, evolve, reroll traits.",
  tags: ["Guide", "Codes", "Traits"],
  icon: "/games/anime-vanguards.png",
  thumb: "/games/anime-vanguards-thumb.png",
} as const satisfies GameFacts;

export const animeVanguardsArt = {
  guide: "/games/art/vanguard-guide.png",
  codes: "/games/art/vanguard-codes.png",
  traits: "/games/art/vanguard-traits.png",
} as const;

export const animeVanguardsArtAlt = {
  guide:
    "Two Anime Vanguards fighters clashing on a ruined battlefield, fire and a blue energy slash in the same frame.",
  codes:
    "A grinning unit diving with a sack of gold coins, Anime Vanguards logo in the corner.",
  traits:
    "A unit wreathed in purple and blue energy with glowing eyes, Anime Vanguards title at the bottom.",
} as const;

const thinPageRobots = { robots: { index: false, follow: true } } as const;

export const animeVanguardsCopy = {
  title: "Anime Vanguards (Roblox) — summon, defend, evolve",
  h1: "Anime Vanguards (Roblox) — summon, defend, evolve",
  dek: "Anime Vanguards is a Roblox tower defense game by Kitawari. Unofficial Upvane kit. Not Anime Last Stand.",
  metaDescription:
    "Unofficial Anime Vanguards guide: summon units, Story mode, codes (official wiki vs media), and traits. Not Anime Last Stand.",
  heroCta: "Play on Roblox",
  nav: {
    guide: "Guide",
    codes: "Codes",
    traits: "Traits",
    play: "Play",
  },
  pages: {
    h2: "Guide pages",
    ghostCta: "Guide pages",
    cards: [
      {
        id: "codes",
        title: "Codes",
        body: "Official wiki TBD vs media NEW. Copy a code. Profile → Codes is still unverified.",
      },
      {
        id: "traits",
        title: "Traits",
        body: "Names other sites list. No Trait Index photo yet, so no pity table.",
      },
    ],
  },
  rightGame: {
    h2: "Right game",
    body: "Anime Vanguards is a Roblox tower defense experience by the Kitawari group. Place 16146832113. The live title suffix rotates with events — 25th Hour on 2026-08-16 — but it is the same universe. Official description: worlds collided; summon units, level them, evolve them, and play multiple modes with friends.",
    notThis:
      "This is not Anime Last Stand, not Anime Adventures, and not a Fandom dump of every unit. Codes below are only for Kitawari’s Anime Vanguards.",
  },
  howARunWorks: {
    h2: "How a first session works",
    steps: [
      "Open Story / Play and learn a short track. The experience page puts summoning units against waves first.",
      "Spend starter currency on a banner summon. We have not photographed gem costs, so skip invented pity numbers here.",
      "Place units on the path and upgrade the ones that actually hit the current wave. Do not dump Trait Rerolls into a unit you will replace tonight.",
      "If you are Level 30, try codes. Media and the official wiki disagree on which strings still work — see the Codes page.",
      "Evolve or trait-reroll only after a unit survives a mode you actually play. Trait Index and the Mandra NPC are not photographed on this kit yet.",
    ],
  },
  systems: {
    h2: "Summon, Story, traits, evolve",
    intro:
      "Loop names from the Roblox description plus what codes articles agree on. Skip floor counts, banner odds, and SS-tier lists.",
    items: [
      {
        name: "Summon",
        note: "Gems buy units from banners. Official text: summon units to fend off enemies. Banner prices not photographed.",
      },
      {
        name: "Story / modes",
        note: "Official text lists multiple game modes with friends. Story is the usual first grind in media guides. We have not mapped every mode.",
      },
      {
        name: "Traits",
        note: "One trait per unit on other wikis. Rerolls come from codes, quests, and shops they mention. Open the in-game Trait Index for live odds.",
      },
      {
        name: "Evolve",
        note: "Official: level up and evolve units. Materials (essences, shards) show up on code rewards. Evolution quests stay off this kit.",
      },
    ],
  },
  codes: {
    h2: "Codes",
    pageH1: "Anime Vanguards codes (Roblox)",
    dek: "Official wiki.vanguards.gg listed three TBD codes on 2026-08-16. August media still tagged older strings NEW. We have not redeemed in-game.",
    body: "Codes typically need Level 30. Fandom and developer notes say they last about two weeks. Media describe Profile on the right, then Codes on the left of that window. We have not photographed the redeem box, so that path stays Unverified. Copy a code below — do not type it into a random shop.",
    tableNote:
      "Official mention means it was on wiki.vanguards.gg’s active table (Availability TBD). Archived by wiki means the official table already moved it out — even if Beebom still says NEW. Unverified means other sites listed it. We do not mark Working until someone redeems it here.",
    copyHint: "Tap a code to copy it. Codes are case-sensitive.",
    rows: [
      {
        code: "1DayDelay",
        status: "Official mention",
        reward: "Official wiki: 200 Trait Rerolls",
        requirement: "Level 30",
        source: "wiki.vanguards.gg Codes, 2026-08-16, Availability TBD",
      },
      {
        code: "25thHour",
        status: "Official mention",
        reward: "Official wiki: 50 Trait Rerolls + 50 Memoria Shards",
        requirement: "Level 30",
        source: "wiki.vanguards.gg Codes, 2026-08-16, Availability TBD",
      },
      {
        code: "LetTheLarpingBegin",
        status: "Official mention",
        reward: "Official wiki: 50 Controller Tokens + 10,000 Gems + 50,000 Gold",
        requirement: "None on the wiki row",
        source: "wiki.vanguards.gg Codes, 2026-08-16, Availability TBD",
      },
      {
        code: "1DayL8",
        status: "Archived by wiki",
        reward: "Beebom still said 500 Trait Rerolls (NEW)",
        requirement: "Level 30",
        source: "Official wiki archive; Beebom August 2026 still NEW",
      },
      {
        code: "HeavyEyes",
        status: "Archived by wiki",
        reward: "Media: 50 Memoria Shards + 50 Extermination Tokens",
        requirement: "Level 30",
        source: "Official wiki archive; Beebom August 2026 still NEW",
      },
      {
        code: "ExecutionPart2",
        status: "Archived by wiki",
        reward: "Media: 50 Trait Rerolls + 20 Copycat Tokens",
        requirement: "Level 30",
        source: "Official wiki archive; Beebom August 2026 still NEW",
      },
      {
        code: "kat",
        status: "Unverified",
        reward: "Beebom: meme code. Empty reward on their list.",
        requirement: "Unknown",
        source: "Beebom, not the official active table",
      },
    ],
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "What Anime Vanguards codes work today?",
          a: "We have not redeemed in-game. The official wiki active table on 2026-08-16 listed 1DayDelay, 25thHour, and LetTheLarpingBegin as TBD. 1DayL8, HeavyEyes, and ExecutionPart2 were already archived there even while some media pages still marked them NEW.",
        },
        {
          q: "Where do I redeem Anime Vanguards codes?",
          a: "Official wiki and several media guides: Profile on the right of the HUD, then Codes on the left of the profile window. Unverified here until we photograph that box. Some roundups skip the Profile click.",
        },
        {
          q: "Why do codes fail?",
          a: "Level 30 is the usual gate. Strings are case-sensitive. Official and Fandom notes say codes often expire after about two weeks. A media NEW tag is not the same as the official active table.",
        },
      ],
    },
  },
  traits: {
    h2: "Traits",
    pageH1: "Anime Vanguards traits — names only so far",
    dek: "No Trait Index screenshot yet. Names below are what the official wiki and media lists agree exist. Odds and pity are not Index.",
    body: "A unit keeps one trait at a time on those wikis. Rerolls happen at a Traits NPC they call Mandra. We have not photographed that NPC or the Trait Index, so percentages stay off this page.",
    indexTitle: "Names from other sites (unverified)",
    indexNote:
      "Copied so you can see the roster other pages argue about. Open the in-game Trait Index if you need live rates.",
    rows: [
      { name: "Monarch", listed: "Official wiki; PGG / Fandom high-end target" },
      { name: "Ethereal", listed: "Official wiki" },
      { name: "Deadeye", listed: "Official wiki" },
      { name: "Solar", listed: "Official wiki" },
      { name: "Blitz", listed: "Official wiki" },
      { name: "Fortune", listed: "Official wiki; often tied to farm units on media lists" },
      { name: "Marksman", listed: "Official wiki" },
      { name: "Scholar", listed: "Official wiki" },
      { name: "Vigor", listed: "Official wiki (I / II / III on those pages)" },
      { name: "Swift", listed: "Official wiki (I / II / III on those pages)" },
      { name: "Range", listed: "Official wiki (I / II / III on those pages)" },
    ],
    skip: "No S-tier from us. No copied pity (1500 / 858 / 400 / 300) until the Index is photographed.",
  },
  faq: {
    h2: "FAQ",
    items: [
      {
        q: "Is Anime Vanguards the same as Anime Last Stand?",
        a: "No. This kit is only Kitawari’s Anime Vanguards (place 16146832113). Anime Last Stand is a different Roblox tower defense.",
      },
      {
        q: "Where do I redeem codes?",
        a: "Media and the official wiki describe Profile → Codes. We have not photographed the box. Most codes need Level 30.",
      },
      {
        q: "Should I follow a unit tier list from Google?",
        a: "Not from us. Public lists already disagree on the same unit’s rank. This kit does not publish S-tier.",
      },
    ],
  },
  disclaimer: {
    h2: "Disclaimer",
    body: "Unofficial. Not affiliated with Roblox Corporation or Kitawari. wiki.vanguards.gg is the developer-supported encyclopedia — this kit is a short unofficial desk, not a clone of their 657 articles.",
  },
  footer:
    "Upvane · unofficial · not affiliated with Roblox Corporation or Kitawari.",
} as const;

export const animeVanguardsNav = [
  {
    id: "guide" as const,
    href: animeVanguards.path,
    label: animeVanguardsCopy.nav.guide,
  },
  {
    id: "codes" as const,
    href: `${animeVanguards.path}/codes`,
    label: animeVanguardsCopy.nav.codes,
  },
  {
    id: "traits" as const,
    href: `${animeVanguards.path}/traits`,
    label: animeVanguardsCopy.nav.traits,
  },
] as const;

export const animeVanguardsCanonical = absoluteUrl(animeVanguards.path);

export const animeVanguardsMetadata = pageMetadata(
  animeVanguardsCopy.title,
  animeVanguardsCopy.metaDescription,
  animeVanguards.path,
);

export const animeVanguardsCodesMetadata = pageMetadata(
  "Anime Vanguards codes (Roblox) — wiki TBD vs media",
  "Anime Vanguards codes: 1DayDelay, 25thHour, LetTheLarpingBegin were on the official wiki active table (TBD). Older media NEW codes were already archived there. Not redeemed in-game.",
  `${animeVanguards.path}/codes`,
);

export const animeVanguardsTraitsMetadata = pageMetadata(
  "Anime Vanguards traits — names only, no pity table",
  "Anime Vanguards trait names collected from the official wiki. No Trait Index screenshot, so odds and pity stay off this page.",
  `${animeVanguards.path}/traits`,
  thinPageRobots,
);

function faqEntities(
  items: readonly { readonly q: string; readonly a: string }[],
) {
  return items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  }));
}

function breadcrumbs(
  crumbs: readonly { readonly name: string; readonly path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE_NAME,
        item: absoluteUrl("/"),
      },
      ...crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
    ],
  };
}

export function animeVanguardsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": animeVanguardsCanonical,
        name: animeVanguardsCopy.title,
        url: animeVanguardsCanonical,
        description: animeVanguardsCopy.metaDescription,
        dateModified: animeVanguards.lastChecked,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: absoluteUrl("/"),
        },
        about: {
          "@type": "VideoGame",
          name: animeVanguards.name,
          url: animeVanguards.playUrl,
          gamePlatform: "Roblox",
          author: {
            "@type": "Organization",
            name: animeVanguards.developer,
          },
          sameAs: animeVanguards.playUrl,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${animeVanguardsCanonical}#faq`,
        mainEntity: faqEntities(animeVanguardsCopy.faq.items),
      },
      breadcrumbs([{ name: animeVanguards.name, path: animeVanguards.path }]),
    ],
  };
}

export function animeVanguardsCodesJsonLd() {
  const url = absoluteUrl(`${animeVanguards.path}/codes`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        name: animeVanguardsCopy.codes.pageH1,
        url,
        description:
          "Anime Vanguards codes: official wiki TBD list versus media NEW tags. Redeem path still unverified.",
        dateModified: animeVanguards.lastChecked,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities(animeVanguardsCopy.codes.faq.items),
      },
      breadcrumbs([
        { name: animeVanguards.name, path: animeVanguards.path },
        { name: "Codes", path: `${animeVanguards.path}/codes` },
      ]),
    ],
  };
}
