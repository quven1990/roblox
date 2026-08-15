import type { Metadata } from "next";
import type { GameFacts } from "@/lib/games/types";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const stealAnEgg = {
  slug: "steal-an-egg",
  name: "Steal An Egg",
  developer: "and Collect Rare Pets",
  universeId: "10563114921",
  placeId: "107778070777162",
  playUrl: "https://www.roblox.com/games/107778070777162/Steal-An-Egg",
  lastChecked: "2026-08-15",
  hasRedeemUi: false,
  path: "/steal-an-egg",
  kitNumber: 1,
  kicker: "Live",
  lede: "Steal eggs, hatch pets, train Speed.",
  tags: ["Guide", "Pets", "No codes"],
  icon: "/games/steal-an-egg.png",
  thumb: "/games/steal-an-egg-thumb.png",
} as const satisfies GameFacts;

export const stealAnEggCopy = {
  title: "Steal An Egg Wiki — Pets, Eggs, Speed (Unofficial)",
  h1: "Steal An Egg (Roblox) — steal eggs, hatch pets, train Speed",
  dek: "Unofficial guide for Steal An Egg by and Collect Rare Pets. This is not Steal a Brainrot and not the older game titled Steal a Egg.",
  metaDescription:
    "Unofficial Steal An Egg guide for Roblox. Steal eggs, hatch pets, train Speed. Not Steal a Brainrot. No fake codes.",
  heroCta: "Play on Roblox",
  nav: {
    guide: "Guide",
    pets: "Pets (Index pending)",
    play: "Play",
  },
  rightGame: {
    h2: "Right game",
    body: "Steal An Egg is a 7-player pet / tycoon loop: you steal eggs, hatch them into pets, and the pets make money. Train on the treadmill to raise Speed, upgrade the base, and steal from other players. Official description also lists rarer eggs, pet sizes, and mutations.",
    brainrot: "If you landed here looking for Steal a Brainrot codes, that is a different game.",
  },
  howARunWorks: {
    h2: "How a run works",
    steps: [
      "Steal an egg from a pet, a nest, or another player.",
      "Get it back to your base. The steal only counts if you keep it.",
      "Hatch the egg. Pets pay you over time.",
      "Spend coins on the treadmill and base so you can reach better eggs.",
      "Repeat. Steal mutated or high-size pets when you see them — they travel with the pet.",
    ],
  },
  codes: {
    h2: "Codes",
    body: "There is no confirmed redeem UI and no working code list as of 2026-08-15. Other sites that title a page “redeem free rewards” still say the same thing in the FAQ. If a code box ships later, this page will say so. Do not trust random code dumps.",
  },
  pets: {
    h2: "Pets and mutations",
    body: "The in-game Index is the source of truth. We will publish a sortable pets table when we have photographed that Index. Until then we will not invent income numbers or mascot names.",
    official:
      "Officially confirmed: eggs hatch into pets; pets have rarities, sizes, and mutations; pets earn money; Speed on the treadmill opens more of the map.",
    community:
      "Community wikis disagree on variant names (one says Shiny / Golden / Huge / Giant; another says Huge / Mutated / Secret / Eternal / Divine). Treat those lists as unverified.",
    pageH1: "Steal An Egg pets (Index)",
    placeholder:
      "This page is a placeholder until the in-game Index is logged. We will not invent pet names or income numbers, and we will not publish unverified wiki names.",
    tableNote:
      "Table columns when live: name · rarity · income · size/mutation notes · last-checked.",
  },
  faq: {
    h2: "FAQ",
    items: [
      {
        q: "Is this Steal a Brainrot?",
        a: "No. Different developer, different units. Brainrot has a redeem panel. This game currently does not.",
      },
      {
        q: "Are there Steal An Egg codes?",
        a: "Not as of 2026-08-15.",
      },
      {
        q: "How do you make money?",
        a: "Pets generate coins. Hatch, keep high earners, sell or lose the rest when you steal.",
      },
      {
        q: "What does the treadmill do?",
        a: "It raises Speed. Faster movement is how you reach more eggs and get out of a steal.",
      },
      {
        q: "Where is the pet list?",
        a: "The pets Index goes live after the Index is logged. Linking a fake King Mammoth tier list is worse than a short wait.",
      },
    ],
  },
  disclaimer: {
    h2: "Disclaimer",
    body: "Unofficial. Not affiliated with Roblox Corporation or and Collect Rare Pets.",
  },
  footer:
    "Upvane · unofficial · not affiliated with Roblox Corporation or and Collect Rare Pets.",
} as const;

export const stealAnEggCanonical = `${SITE_ORIGIN}${stealAnEgg.path}`;

export const stealAnEggMetadata: Metadata = {
  title: stealAnEggCopy.title,
  description: stealAnEggCopy.metaDescription,
  alternates: { canonical: stealAnEggCanonical },
  openGraph: {
    title: stealAnEggCopy.title,
    description: stealAnEggCopy.metaDescription,
    url: stealAnEggCanonical,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: stealAnEggCopy.title,
    description: stealAnEggCopy.metaDescription,
  },
};

export const stealAnEggPetsMetadata: Metadata = {
  title: "Steal An Egg pets (Index) — Upvane",
  description:
    "Placeholder for the Steal An Egg in-game Index. We will not invent pet names or income numbers.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_ORIGIN}${stealAnEgg.path}/pets` },
};

export function stealAnEggJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: stealAnEggCopy.title,
    url: stealAnEggCanonical,
    description: stealAnEggCopy.metaDescription,
    dateModified: stealAnEgg.lastChecked,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    about: {
      "@type": "VideoGame",
      name: stealAnEgg.name,
      url: stealAnEgg.playUrl,
      gamePlatform: "Roblox",
      author: {
        "@type": "Organization",
        name: stealAnEgg.developer,
      },
      sameAs: stealAnEgg.playUrl,
    },
  };
}
