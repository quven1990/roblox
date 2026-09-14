import type { GameFacts } from "@/lib/games/types";
import { SITE_NAME, absoluteUrl, pageMetadata } from "@/lib/site";

/**
 * THA LEMON 3 kit — maps to the live 223Z STUDIOS experience.
 *
 * Roblox API checked 2026-09-15: listing title is still "THA BRONX 3",
 * creator group "223Z STUDIOS", place 128899661081075.
 * Distinct from older Tha Bronx (RP) listings. Do not import payout or
 * gun tables from third-party Bronx wikis until photographed here.
 */
export const thaLemon3 = {
  slug: "tha-lemon-3",
  name: "THA LEMON 3",
  developer: "223Z STUDIOS",
  universeId: "10737656087",
  placeId: "128899661081075",
  playUrl: "https://www.roblox.com/games/128899661081075/THA-LEMON-3",
  lastChecked: "2026-09-15",
  hasRedeemUi: false,
  path: "/tha-lemon-3",
  kitNumber: 6,
  kicker: "Active",
  lede: "Open-world Roblox guide expanding around money, weapons, and gameplay systems.",
  tags: ["Guide", "Money-Guide", "Weapons"],
  icon: "/games/tha-lemon-3.png",
  thumb: "/games/tha-lemon-3-thumb.jpg",
  status: "active",
  featuredPages: [
    { label: "Main Guide", href: "/tha-lemon-3" },
    { label: "Money Guide", href: "/tha-lemon-3/money-guide" },
    { label: "Weapons", href: "/tha-lemon-3/weapons" },
  ],
} as const satisfies GameFacts;

export const thaLemon3Art = {
  guide: "/games/art/tha-lemon-guide.jpg",
  "money-guide": "/games/art/tha-lemon-money.jpg",
  weapons: "/games/art/tha-lemon-weapons.jpg",
} as const;

export const thaLemon3ArtAlt = {
  guide:
    "Official Roblox thumbnail for the 223Z STUDIOS open-world experience tracked on this kit as THA LEMON 3.",
  "money-guide":
    "Official Roblox thumbnail used for the THA LEMON 3 money guide page.",
  weapons:
    "Official Roblox thumbnail used for the THA LEMON 3 weapons page.",
} as const;

export const thaLemon3Identity = {
  listingNameNow: "THA BRONX 3",
  groupId: "688726519",
  olderRpNote:
    "A separate older Roblox listing titled THA BRONX 3 has been associated with Tha Bronx (RP). This kit only covers the 223Z STUDIOS experience (place 128899661081075).",
  officialTags: [
    "Money",
    "Grind",
    "Shooting",
    "Fighting",
    "Switches",
    "Open World",
    "Cars",
    "RolePlay",
    "Action",
  ] as const,
  genreL1: "Action",
  genreL2: "Open World Action",
} as const;

export const thaLemon3Nav = [
  { id: "guide" as const, href: thaLemon3.path, label: "Guide" },
  {
    id: "money-guide" as const,
    href: `${thaLemon3.path}/money-guide`,
    label: "Money",
  },
  {
    id: "weapons" as const,
    href: `${thaLemon3.path}/weapons`,
    label: "Weapons",
  },
] as const;

export const thaLemon3Copy = {
  title: "THA LEMON 3 Roblox Guide – Money, Weapons & Gameplay",
  h1: "THA LEMON 3 Roblox Guide",
  dek: "Practical guide for the 223Z STUDIOS open-world Roblox experience: money grind, weapons/switches combat, and verified listing facts.",
  metaDescription:
    "A practical THA LEMON 3 Roblox guide covering money, weapons, progression, core systems, and currently verified gameplay information from 223Z STUDIOS.",
  heroCta: "Play on Roblox",
  nav: {
    guide: "Guide",
    money: "Money",
    weapons: "Weapons",
    play: "Play",
  },
  identityWarn:
    "Important: This guide covers THA LEMON 3 / the live 223Z STUDIOS experience (place 128899661081075). Do not confuse it with separate older THA BRONX 3 listings associated with Tha Bronx (RP).",
  listingNote: `On Roblox, the live listing title for this place currently reads “${thaLemon3Identity.listingNameNow}” under 223Z STUDIOS. Upvane tracks it as THA LEMON 3 for this kit.`,
  quickAnswer:
    "THA LEMON 3 is the Upvane kit for the 223Z STUDIOS open-world Action experience focused on money grinding, switches/gun combat, vehicles, and roleplay tags on the official Roblox page.",
  whatFirst: {
    h2: "What to do first",
    items: [
      "Confirm you joined place 128899661081075 by 223Z STUDIOS — not an older Bronx RP copy.",
      "Open the Money Guide before chasing unverified payout lists from other sites.",
      "Treat weapon prices as unconfirmed until you see them in the live shop UI.",
      "Use in-game labels over community spreadsheets when numbers disagree.",
    ],
  },
  systems: {
    h2: "Core systems (from the official listing)",
    body: "These systems are named on the current Roblox experience page. Exact shops, payouts, and maps stay off this hub until photographed.",
    rows: [
      {
        system: "Money / Grind",
        detail: "Official tags include Money and Grind.",
        status: "Verified (listing)",
      },
      {
        system: "Weapons / Switches",
        detail: "Official tags include Shooting, Fighting, and Switches.",
        status: "Verified (listing)",
      },
      {
        system: "Cars / open world",
        detail: "Official tags include Cars and Open World; genre is Open World Action.",
        status: "Verified (listing)",
      },
      {
        system: "Jobs / heists / robbery payouts",
        detail: "Not photographed on this kit yet.",
        status: "Unconfirmed",
      },
    ],
  },
  pages: {
    h2: "Guide pages",
    ghostCta: "Guide pages",
    cards: [
      {
        id: "money-guide",
        title: "Money Guide",
        body: "How money works on this listing, what is verified, and what payouts stay blank.",
      },
      {
        id: "weapons",
        title: "Weapons",
        body: "Switches/guns systems confirmed on the listing — without invented shop prices.",
      },
    ],
  },
  faq: {
    h2: "FAQ",
    items: [
      {
        q: "Is THA LEMON 3 the same as THA BRONX 3?",
        a: "On Roblox today, the 223Z STUDIOS place this kit covers is still titled THA BRONX 3. Upvane uses THA LEMON 3 as the kit name for that 223Z experience. It is not the same as older Tha Bronx (RP) listings.",
      },
      {
        q: "Who makes this game?",
        a: "223Z STUDIOS (Roblox group). Owner account on the group page is MeetDaKillaz.",
      },
      {
        q: "Are there codes?",
        a: "This kit does not ship a codes page yet. No redeem flow has been verified here.",
      },
      {
        q: "Where should I start?",
        a: "Read the Money Guide, then Weapons. Ignore exact cash or gun tables copied from other Bronx sites until this kit verifies them in-game.",
      },
    ],
  },
  money: {
    title: "How to Get Money in THA LEMON 3 – Money Methods & Progression",
    pageH1: "How to Get Money in THA LEMON 3",
    dek: "Official listing confirms Money and Grind. Exact job/heist payouts stay unlabeled until photographed on place 128899661081075.",
    metaDescription:
      "How to get money in THA LEMON 3 (223Z STUDIOS): verified Money/Grind systems, method status table, and what payouts remain unconfirmed.",
    lead: "The main money signal on the official Roblox page is a Money + Grind loop inside an open-world Action experience. Exact methods and dollar amounts are not verified on this kit yet.",
    methodsH2: "Best known money methods (status first)",
    methodsIntro:
      "Answer first: grind cash through in-game money activities shown in the live UI. Do not paste payout numbers from older Bronx guides.",
    rows: [
      {
        method: "In-game Money / Grind activities",
        risk: "Varies by activity",
        requirement: "Join the 223Z place",
        reward: "Exact payout not verified yet",
        status: "Verified (listing tags)",
      },
      {
        method: "Open-world cash routes",
        risk: "PvP / resets possible",
        requirement: "Map knowledge in live session",
        reward: "Exact payout not verified yet",
        status: "Community-expected · Unconfirmed numbers",
      },
      {
        method: "Named jobs / heists / robberies",
        risk: "Unknown until UI is photographed",
        requirement: "Unconfirmed",
        reward: "Exact payout not verified yet",
        status: "Unconfirmed",
      },
    ],
    earlyH2: "Best early-game approach",
    earlyBody:
      "Start with whatever low-risk money activity the live UI shows first. Bank or store value the way the game UI teaches you. Skip third-party “$X per minute” charts until they match a screenshot from this place.",
    laterH2: "Best later-game approach",
    laterBody:
      "Once you can move the map safely, stack higher-risk money routes only after you understand inventory/reset risk in this build. Cars are tagged on the listing, but vehicle prices stay blank here.",
    tipsH2: "Money tips",
    tips: [
      "Match the creator name to 223Z STUDIOS before grinding.",
      "Prefer UI labels over wiki tables when amounts disagree.",
      "Community reports vary — treat dollar figures as Unconfirmed until photographed.",
      "Buying expensive weapons early can stall progression if prices are high; verify shops first.",
    ],
    avoidH2: "What to avoid",
    avoid: [
      "Copying job payouts from THA BRONX 3 wikis without checking this place’s UI.",
      "Trusting “working codes” lists — no codes page is verified on this kit.",
      "Spending all starting cash on an unverified gun before you know shop prices.",
    ],
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "What is the best money method in THA LEMON 3?",
          a: "This kit cannot rank a single best method yet. Official tags confirm Money and Grind; exact jobs/heists remain Unconfirmed without in-game photos.",
        },
        {
          q: "How much do jobs pay?",
          a: "Exact payout has not been verified yet on place 128899661081075.",
        },
        {
          q: "Are heists in the game?",
          a: "Heists are not confirmed on this kit. Only Money/Grind tags are verified from the listing.",
        },
        {
          q: "Can I use old Bronx money guides?",
          a: "Not as verified data. Older Tha Bronx (RP) content and third-party tables may not match this 223Z STUDIOS build.",
        },
      ],
    },
  },
  weapons: {
    title: "THA LEMON 3 Weapons – Guns & Verified Weapon Info",
    pageH1: "THA LEMON 3 Weapons",
    dek: "Tracks weapons systems confirmed for the 223Z STUDIOS experience. Shop names, prices, and locations stay blank until photographed.",
    metaDescription:
      "THA LEMON 3 weapons guide: verified Shooting/Fighting/Switches tags from 223Z STUDIOS, plus honest Unconfirmed status for gun prices and locations.",
    lead: "This page tracks weapons confirmed for THA LEMON 3 by 223Z STUDIOS. Official tags confirm guns/switches combat. Named inventory rows are not invented here.",
    listH2: "Weapon list",
    listIntro:
      "First version ships systems, not a fake 40-gun spreadsheet. Add named guns only after live UI evidence.",
    rows: [
      {
        weapon: "Switches / firearms (category)",
        type: "Guns",
        price: "Exact price has not been verified yet",
        how: "Buy or pick up through live in-game weapon sources (UI not photographed yet)",
        status: "Verified category (listing tags)",
      },
      {
        weapon: "Named shop guns",
        type: "Unlisted",
        price: "Exact price has not been verified yet",
        how: "Not photographed on this kit",
        status: "Unconfirmed",
      },
      {
        weapon: "Gamepass-only weapons",
        type: "Pass / cash unclear",
        price: "Exact price has not been verified yet",
        how: "Check the live Roblox experience page passes before buying",
        status: "Unconfirmed",
      },
    ],
    whereH2: "Where to get weapons",
    whereBody:
      "Gun shop locations for this place are Unconfirmed on Upvane. Explore marked shops in a live session and screenshot the price board before trusting any community list.",
    tipsH2: "Weapon buying tips",
    tips: [
      "Confirm you are on place 128899661081075 before spending.",
      "Carry only what the live inventory UI allows — backpack rules are Unconfirmed here.",
      "Do not import Gunstop / Drake-bag style advice from other Bronx guides as verified facts.",
      "If community prices conflict, keep Status = Unconfirmed.",
    ],
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "What is the best gun in THA LEMON 3?",
          a: "Not ranked on this kit yet. No in-game DPS or price table has been verified.",
        },
        {
          q: "Where do I buy guns?",
          a: "Exact shop locations are Unconfirmed. Use live map markers and photograph prices for future updates.",
        },
        {
          q: "Are switches in the game?",
          a: "Switches appear in the official Roblox tags for this experience. Treat that as a category confirmation, not a shop menu.",
        },
        {
          q: "Why is the weapon list short?",
          a: "Upvane prefers a short verified list over dozens of copied names from other sites.",
        },
      ],
    },
  },
  footer:
    "Upvane · unofficial · not affiliated with Roblox Corporation or 223Z STUDIOS.",
} as const;

export const thaLemon3Canonical = absoluteUrl(thaLemon3.path);
export const thaLemon3MoneyCanonical = absoluteUrl(
  `${thaLemon3.path}/money-guide`,
);
export const thaLemon3WeaponsCanonical = absoluteUrl(
  `${thaLemon3.path}/weapons`,
);

export const thaLemon3Metadata = pageMetadata(
  thaLemon3Copy.title,
  thaLemon3Copy.metaDescription,
  thaLemon3.path,
  { image: thaLemon3Art.guide, imageAlt: thaLemon3ArtAlt.guide },
);

export const thaLemon3MoneyMetadata = pageMetadata(
  thaLemon3Copy.money.title,
  thaLemon3Copy.money.metaDescription,
  `${thaLemon3.path}/money-guide`,
  {
    image: thaLemon3Art["money-guide"],
    imageAlt: thaLemon3ArtAlt["money-guide"],
  },
);

export const thaLemon3WeaponsMetadata = pageMetadata(
  thaLemon3Copy.weapons.title,
  thaLemon3Copy.weapons.metaDescription,
  `${thaLemon3.path}/weapons`,
  { image: thaLemon3Art.weapons, imageAlt: thaLemon3ArtAlt.weapons },
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

function pageGraph(args: {
  url: string;
  name: string;
  description: string;
  faq: readonly { readonly q: string; readonly a: string }[];
  crumbs: readonly { readonly name: string; readonly path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": args.url,
        name: args.name,
        url: args.url,
        description: args.description,
        dateModified: thaLemon3.lastChecked,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: absoluteUrl("/"),
        },
        about: {
          "@type": "VideoGame",
          name: thaLemon3.name,
          alternateName: thaLemon3Identity.listingNameNow,
          url: thaLemon3.playUrl,
          gamePlatform: "Roblox",
          author: {
            "@type": "Organization",
            name: thaLemon3.developer,
          },
          sameAs: thaLemon3.playUrl,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqEntities(args.faq),
      },
      breadcrumbs(args.crumbs),
    ],
  };
}

export function thaLemon3JsonLd() {
  return pageGraph({
    url: thaLemon3Canonical,
    name: thaLemon3Copy.title,
    description: thaLemon3Copy.metaDescription,
    faq: thaLemon3Copy.faq.items,
    crumbs: [{ name: thaLemon3.name, path: thaLemon3.path }],
  });
}

export function thaLemon3MoneyJsonLd() {
  return pageGraph({
    url: thaLemon3MoneyCanonical,
    name: thaLemon3Copy.money.title,
    description: thaLemon3Copy.money.metaDescription,
    faq: thaLemon3Copy.money.faq.items,
    crumbs: [
      { name: thaLemon3.name, path: thaLemon3.path },
      { name: "Money Guide", path: `${thaLemon3.path}/money-guide` },
    ],
  });
}

export function thaLemon3WeaponsJsonLd() {
  return pageGraph({
    url: thaLemon3WeaponsCanonical,
    name: thaLemon3Copy.weapons.title,
    description: thaLemon3Copy.weapons.metaDescription,
    faq: thaLemon3Copy.weapons.faq.items,
    crumbs: [
      { name: thaLemon3.name, path: thaLemon3.path },
      { name: "Weapons", path: `${thaLemon3.path}/weapons` },
    ],
  });
}
