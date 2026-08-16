import type { GameFacts } from "@/lib/games/types";
import { SITE_NAME, SITE_ORIGIN, absoluteUrl, pageMetadata } from "@/lib/site";

export const greedyGrowers = {
  slug: "greedy-growers",
  name: "Greedy Growers",
  developer: "banjo greedy lady",
  universeId: "10440833423",
  placeId: "74102906764176",
  playUrl: "https://www.roblox.com/games/74102906764176/Greedy-Growers",
  lastChecked: "2026-08-16",
  hasRedeemUi: true,
  path: "/greedy-growers",
  kitNumber: 4,
  kicker: "Unofficial",
  lede: "Buy a seed from the river, plant it, harvest before lightning.",
  tags: ["Guide", "Codes", "Mutations", "Seeds", "Pets"],
  icon: "/games/greedy-growers-rbx.png",
  thumb: "/games/greedy-growers-rbx-thumb.jpg",
} as const satisfies GameFacts;

export const greedyGrowersArt = {
  guide: "/games/art/greedy-guide-rbx.jpg",
  codes: "/games/art/greedy-codes-rbx.jpg",
  mutations: "/games/art/greedy-mutations-rbx.jpg",
  seeds: "/games/art/greedy-seeds-rbx.jpg",
  pets: "/games/art/greedy-pets-rbx.jpg",
} as const;

export const greedyGrowersArtAlt = {
  guide:
    "Official Roblox thumbnail: Diamond Tree labeled SECRET earning millions per second, versus a lightning-struck tree at $0.",
  codes:
    "Official Roblox thumbnail: Starfruit Tree labeled SECRET versus a lightning-struck tree at $0.",
  mutations:
    "Official Roblox thumbnail: a Diamond Tree labeled SECRET while a storm cloud strikes another tree with lightning.",
  seeds:
    "Official Roblox thumbnail: a Starfruit Tree labeled SECRET next to a player holding an axe, with lightning in the same shot.",
  pets:
    "Official Roblox thumbnail from the experience page. The Roblox gallery has no pet screenshot, so this page reuses the harvest still.",
} as const;

export const greedyGrowersCopy = {
  title: "Greedy Growers (Roblox) — harvest before lightning",
  h1: "Greedy Growers (Roblox) — harvest before lightning",
  dek: "Greedy Growers is a Roblox game by banjo greedy lady. How to play Greedy Growers: buy a seed from the river, plant it, let the tree grow, harvest before lightning. This unofficial kit is not Grow a Garden.",
  metaDescription:
    "Unofficial Greedy Growers Roblox guide: river seeds, harvest before lightning, disputed codes, reported mutations, and a Pets Update desk. Not Grow a Garden.",
  heroCta: "Play on Roblox",
  nav: {
    guide: "Guide",
    codes: "Codes",
    mutations: "Mutations",
    seeds: "Seeds",
    pets: "Pets",
    play: "Play",
  },
  pages: {
    h2: "Guide pages",
    ghostCta: "Guide pages",
    cards: [
      {
        id: "codes",
        title: "Codes",
        sitelink: "Greedy Growers codes",
        body: "Settings redeem path. ILOVECATS is disputed — not marked working here.",
      },
      {
        id: "mutations",
        title: "Mutations",
        sitelink: "Greedy Growers mutations",
        body: "Lightning and weather names from public tables. Multipliers stay reported.",
      },
      {
        id: "seeds",
        title: "Seeds",
        sitelink: "Greedy Growers seeds",
        body: "River stock. Public names already disagree, so this is not an Index.",
      },
      {
        id: "pets",
        title: "Pets",
        sitelink: "Greedy Growers pets",
        body: "Pets Update desk: eggs and slots as reported. No named roster without a photo.",
      },
    ],
  },
  rightGame: {
    h2: "What Greedy Growers is",
    body: "Greedy Growers is a Roblox experience by the group banjo greedy lady (place 74102906764176). Official description: plant seeds and watch trees grow — but lightning can strike at any moment. Buy a seed from the river, plant it in your plot, watch the tree grow, harvest before lightning strikes.",
    notThis:
      "This kit is only Greedy Growers. It is not Grow a Garden and not Grow a Garden 2. Mutation names, seed SKUs, and pet lists from those games do not work here.",
  },
  howARunWorks: {
    h2: "How a first harvest works",
    intro:
      "This order follows the official Roblox description. Extra systems (watering, extra plots, rebirth, pets) stay labeled until we photograph them.",
    steps: [
      "Open Greedy Growers from the official Roblox page so you have the right creator group.",
      "Buy one seed from the river that you can afford to lose if lightning hits.",
      "Plant it on a plot. Public beginner guides say keep one plot empty if you have extras — unverified here until photographed.",
      "Watch the tree. Value only counts after you harvest. Waiting longer can pay more and also exposes more of the run.",
      "Harvest early for the first loops. Build a reserve, then take longer waits.",
      "Reinvest into the next river seed. Do not park every coin on one giant tree.",
    ],
  },
  harvest: {
    h2: "When to harvest",
    intro:
      "The lever in Greedy Growers is harvest timing versus lightning. This comparison is the public beginner pattern. Exact strike odds are not published here.",
    rows: [
      {
        strategy: "Early harvest",
        reward: "Lower",
        risk: "Lower",
        bestFor: "First loops, recovery, building a reserve",
      },
      {
        strategy: "Balanced harvest",
        reward: "Medium",
        risk: "Medium",
        bestFor: "Normal runs once you can replace one lost seed",
      },
      {
        strategy: "Late harvest",
        reward: "Higher",
        risk: "Higher",
        bestFor: "Players with spare coins who can lose the tree",
      },
    ],
    after:
      "Lightning mutations sit on this same timing decision. Details live on",
  },
  systems: {
    h2: "What we have not photographed",
    intro:
      "These show up in public guides. Treat them as leads, not Index facts, until an English-client screenshot exists on this kit.",
    items: [
      {
        name: "Watering",
        note: "One progression article says click the tree to grow faster, and later buy auto-water. Unverified.",
      },
      {
        name: "Extra plots",
        note: "Same article cites a second plot around 1,000 tickets. Unverified.",
      },
      {
        name: "Rebirth / fertilizer",
        note: "Some money guides mention a reset and fertilizer. Unverified. Not a nav page.",
      },
      {
        name: "Weather shop",
        note: "Public mutation tables say weather can roll randomly or be bought with Robux. Unverified.",
      },
    ],
  },
  codes: {
    h2: "Codes",
    pageH1: "Greedy Growers codes (Roblox)",
    dek: "Public trackers disagree. ILOVECATS is reported as 100 Tickets on some lists and missing on others. Not marked working on this page.",
    lead: "In Greedy Growers, codes are a side path. The harvest loop lives on the Greedy Growers guide. A code does not change lightning rules.",
    body: "Media and aggregators describe a code box inside Settings (the cog, usually top-left). We have not photographed that window, so the path stays unverified. Do not paste codes into a third-party form.",
    tableNote:
      "Disputed means large lists disagree. Official mention would require the Roblox experience page or a creator-owned channel. Working requires a redeem on this kit. Expired stays empty until a string fails in-game.",
    copyHint: "Tap a code to copy it, then try it only in-game.",
    rows: [
      {
        code: "ILOVECATS",
        status: "Disputed",
        reward: "Reported 100 Tickets. Dexerto, Beebom, and GameRant still showed no active codes in their last visible checks.",
        source: "Destructoid / Pro Game Guides vs Dexerto / Beebom / GameRant, 2026-08-16",
      },
    ],
    redeemTitle: "How to redeem (unverified path)",
    redeemSteps: [
      "Launch Greedy Growers from the official Roblox page.",
      "Open Settings (cog). Public codes pages put the box there.",
      "Paste the string exactly. Public notes say codes are case-sensitive.",
      "Submit. If nothing lands, treat the string as failed or expired — not working.",
    ],
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "Are there working Greedy Growers codes today?",
          a: "Not on this kit. ILOVECATS is disputed. We do not mark it working without a redeem here.",
        },
        {
          q: "Where do I redeem Greedy Growers codes?",
          a: "Public pages say Settings → code box. We have not photographed it. Do not use a login page or script.",
        },
        {
          q: "Is ILOVECATS a working code?",
          a: "Disputed. Some August roundups list 100 Tickets. Dexerto, Beebom, and GameRant still listed none. Status stays Disputed.",
        },
      ],
    },
  },
  mutations: {
    h2: "Mutations",
    pageH1: "Greedy Growers mutations (Roblox) — lightning and weather",
    dek: "Reported names from public Update 1.2 tables. Multipliers are not Index. Shocked and Charged depend on harvest timing.",
    lead: "In Greedy Growers, mutations sit on top of the harvest loop on the Greedy Growers guide. River stock names live on Greedy Growers seeds.",
    intro:
      "Public articles list six mutations. Weather rows last a few minutes on those pages. Lightning rows need the strike close to harvest. We have not photographed a sell panel, so every multiplier below is reported.",
    rows: [
      {
        name: "Dewy",
        how: "Reported during Misty weather",
        multiplier: "Reported 2x",
        status: "Reported",
      },
      {
        name: "Shocked",
        how: "Reported when lightning hits near harvest and growth stays under a published 25x line",
        multiplier: "Reported 2.5x",
        status: "Reported",
      },
      {
        name: "Radioactive",
        how: "Reported during Acid Rain",
        multiplier: "Reported 5x",
        status: "Reported",
      },
      {
        name: "Charged",
        how: "Reported when lightning hits near harvest after growth goes past that 25x line",
        multiplier: "Reported 7.5x",
        status: "Reported",
      },
      {
        name: "Golden",
        how: "Reported during Rainbow weather",
        multiplier: "Reported 25x",
        status: "Reported",
      },
      {
        name: "Cosmic",
        how: "Reported during Meteor Shower",
        multiplier: "Reported 100x",
        status: "Reported",
      },
    ],
    stackNote:
      "Some public pages say a plant can hold more than one mutation. They also say the stack formula is not spelled out in-game. Do not add the percentages together as fact.",
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "What are Greedy Growers mutations?",
          a: "Public tables name six: Dewy, Shocked, Radioactive, Charged, Golden, and Cosmic. This kit has not photographed sell-panel multipliers.",
        },
        {
          q: "How do I get Shocked or Charged?",
          a: "Public guides tie both to lightning near harvest, with Charged after a higher growth line. Timing still belongs on the Greedy Growers harvest loop.",
        },
        {
          q: "What is the best mutation?",
          a: "We do not publish a best-mutation rank. Cosmic is the top reported multiplier, unverified here.",
        },
      ],
    },
  },
  seeds: {
    h2: "Seeds",
    pageH1: "Greedy Growers seeds (Roblox) — river rarities",
    dek: "Seeds are bought from the river and planted on a plot. Public name lists already disagree, so this page is not an Index.",
    lead: "In Greedy Growers, the river is step one of the Greedy Growers guide. Mutations can change what a seed is worth after you plant it.",
    intro:
      "Official text only confirms: buy a seed from the river, plant it, grow, harvest. The official Roblox thumbnails name Starfruit Tree and Diamond Tree as SECRET. That is marketing art on the experience page, not a river SKU list or a price table.",
    conflictTitle: "Why there is no price table yet",
    conflictBody:
      "One public table uses Oak, Pine, Apple, and a long rarity ladder with huge late prices. Another money guide uses Basic Seed, Strawberry, Corn, and Grape. Official thumbnails add Starfruit Tree and Diamond Tree. Until we photograph the river belt, none of those lists is an Index here.",
    tipsTitle: "What you can do without a SKU list",
    tips: [
      "Buy a seed you can replace if lightning hits.",
      "Do not spend the whole reserve on one river roll.",
      "Treat mutation value separately from the seed's base price.",
    ],
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "Where do I buy Greedy Growers seeds?",
          a: "The official description says the river. Plant on your plot after you buy.",
        },
        {
          q: "What is the best Greedy Growers seed?",
          a: "We do not publish a best-seed or S-tier list. Public names disagree. The seed you can replace after a strike is the safe early pick.",
        },
        {
          q: "Do mutations change seed value?",
          a: "Public mutation tables say yes. Keep base price and mutation claims separate until a sell panel is photographed.",
        },
      ],
    },
  },
  pets: {
    h2: "Pets",
    pageH1: "Greedy Growers pets (Roblox)",
    dek: "Pets Update is real as a public topic (August 2026). Named rosters on other sites are not Index here.",
    lead: "In Greedy Growers, pets are optional on top of the Greedy Growers guide. A pet claim should change seeds, mutations, or lightning risk — or it is flavor.",
    intro:
      "Public pet articles describe a Pet Shop, eggs bought with tickets, and three equip slots. We have not photographed that shop, so names such as Dog, Cat, Robin, or Turtle stay off our roster.",
    structureTitle: "What public guides describe",
    structure: [
      {
        name: "Pet Shop eggs",
        note: "Reported: five egg tiers, tickets, hatch on a plot. Unverified.",
      },
      {
        name: "Equip slots",
        note: "Reported: three slots. Unverified.",
      },
      {
        name: "Passives",
        note: "Reported buckets: growth speed, weather mutations, extra seeds, lightning protection. Unverified per pet.",
      },
    ],
    rosterNote:
      "We do not print an 18-row name table copied from another site. Send an English-client pet card (name, rarity, ability text, obtain path) before a row becomes Index.",
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "How many Greedy Growers pets are there?",
          a: "Public pages say 18. This kit has not counted an in-game Index.",
        },
        {
          q: "How do I get Greedy Growers pets?",
          a: "Public guides say Pet Shop eggs with tickets. Unverified here. Do not copy Grow a Garden egg lists.",
        },
        {
          q: "What are the best Greedy Growers pets?",
          a: "We do not publish a pet tier list without ability screenshots.",
        },
      ],
    },
  },
  faq: {
    h2: "FAQ",
    items: [
      {
        q: "What is Greedy Growers?",
        a: "A Roblox game by banjo greedy lady. Buy a seed from the river, plant it, let the tree grow, harvest before lightning. Place 74102906764176.",
      },
      {
        q: "How do I play Greedy Growers?",
        a: "Buy a seed from the river, plant it on a plot, watch the tree grow, harvest before lightning. First loops should harvest early so you can replace a strike.",
      },
      {
        q: "Is Greedy Growers the same as Grow a Garden?",
        a: "No. Grow a Garden and Grow a Garden 2 are different experiences. Seed names, mutation names, and pets do not carry over.",
      },
      {
        q: "When should I harvest in Greedy Growers?",
        a: "Harvest early while you learn. Wait longer only when you can replace the seed if lightning hits. Exact strike odds are not on this page.",
      },
    ],
  },
  disclaimer: {
    h2: "Disclaimer",
    body: "Unofficial. Not affiliated with Roblox Corporation or banjo greedy lady. Kit images are the official Roblox experience thumbnails and icon for this place, resized for the page. They are not our screenshots.",
  },
  footer:
    "Upvane · unofficial · not affiliated with Roblox Corporation or banjo greedy lady.",
} as const;

export const greedyGrowersNav = [
  {
    id: "guide" as const,
    href: greedyGrowers.path,
    label: greedyGrowersCopy.nav.guide,
  },
  {
    id: "codes" as const,
    href: `${greedyGrowers.path}/codes`,
    label: greedyGrowersCopy.nav.codes,
  },
  {
    id: "mutations" as const,
    href: `${greedyGrowers.path}/mutations`,
    label: greedyGrowersCopy.nav.mutations,
  },
  {
    id: "seeds" as const,
    href: `${greedyGrowers.path}/seeds`,
    label: greedyGrowersCopy.nav.seeds,
  },
  {
    id: "pets" as const,
    href: `${greedyGrowers.path}/pets`,
    label: greedyGrowersCopy.nav.pets,
  },
] as const;

export const greedyGrowersCanonical = absoluteUrl(greedyGrowers.path);

function ggImage(kind: keyof typeof greedyGrowersArt) {
  return `${SITE_ORIGIN}${greedyGrowersArt[kind]}`;
}

function ggMeta(
  title: string,
  description: string,
  pathname: string,
  kind: keyof typeof greedyGrowersArt,
) {
  return pageMetadata(title, description, pathname, {
    image: greedyGrowersArt[kind],
    imageAlt: greedyGrowersArtAlt[kind],
  });
}

export const greedyGrowersMetadata = ggMeta(
  greedyGrowersCopy.title,
  greedyGrowersCopy.metaDescription,
  greedyGrowers.path,
  "guide",
);

export const greedyGrowersCodesMetadata = ggMeta(
  greedyGrowersCopy.codes.pageH1,
  "Greedy Growers codes: ILOVECATS is disputed (100 Tickets vs empty media lists). Settings redeem path unverified. Not marked working.",
  `${greedyGrowers.path}/codes`,
  "codes",
);

export const greedyGrowersMutationsMetadata = ggMeta(
  greedyGrowersCopy.mutations.pageH1,
  "Greedy Growers mutations: Dewy, Shocked, Radioactive, Charged, Golden, Cosmic as reported public names. Multipliers not photographed.",
  `${greedyGrowers.path}/mutations`,
  "mutations",
);

export const greedyGrowersSeedsMetadata = ggMeta(
  greedyGrowersCopy.seeds.pageH1,
  "Greedy Growers seeds: buy from the river, plant on a plot. Public SKU lists disagree (Oak vs Strawberry). No Index price table.",
  `${greedyGrowers.path}/seeds`,
  "seeds",
);

export const greedyGrowersPetsMetadata = ggMeta(
  greedyGrowersCopy.pets.pageH1,
  "Greedy Growers pets: Pets Update desk. Public guides cite 18 pets and three slots. No named roster without an in-game photo.",
  `${greedyGrowers.path}/pets`,
  "pets",
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

function webPageNode({
  url,
  name,
  description,
  image,
}: {
  url: string;
  name: string;
  description: string;
  image: string;
}) {
  return {
    "@type": "WebPage",
    "@id": url,
    name,
    url,
    description,
    inLanguage: "en-US",
    dateModified: greedyGrowers.lastChecked,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: image,
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    about: {
      "@type": "VideoGame",
      name: greedyGrowers.name,
      url: greedyGrowers.playUrl,
      gamePlatform: "Roblox",
      author: {
        "@type": "Organization",
        name: greedyGrowers.developer,
      },
      sameAs: greedyGrowers.playUrl,
    },
  };
}

export function greedyGrowersJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url: greedyGrowersCanonical,
        name: greedyGrowersCopy.title,
        description: greedyGrowersCopy.metaDescription,
        image: ggImage("guide"),
      }),
      {
        "@type": "HowTo",
        name: "How to finish a first harvest in Greedy Growers",
        description: greedyGrowersCopy.howARunWorks.intro,
        step: greedyGrowersCopy.howARunWorks.steps.map((text, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          text,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${greedyGrowersCanonical}#faq`,
        mainEntity: faqEntities(greedyGrowersCopy.faq.items),
      },
      {
        "@type": "ItemList",
        name: "Greedy Growers guide pages",
        itemListElement: greedyGrowersCopy.pages.cards.map((card, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: card.sitelink,
          url: absoluteUrl(`${greedyGrowers.path}/${card.id}`),
        })),
      },
      breadcrumbs([{ name: greedyGrowers.name, path: greedyGrowers.path }]),
    ],
  };
}

export function greedyGrowersCodesJsonLd() {
  const url = absoluteUrl(`${greedyGrowers.path}/codes`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url,
        name: greedyGrowersCopy.codes.pageH1,
        description: String(greedyGrowersCodesMetadata.description ?? ""),
        image: ggImage("codes"),
      }),
      {
        "@type": "HowTo",
        name: "How to redeem Greedy Growers codes",
        description:
          "Settings path from public codes pages. Unverified on this kit until photographed.",
        step: greedyGrowersCopy.codes.redeemSteps.map((text, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          text,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities(greedyGrowersCopy.codes.faq.items),
      },
      breadcrumbs([
        { name: greedyGrowers.name, path: greedyGrowers.path },
        { name: "Codes", path: `${greedyGrowers.path}/codes` },
      ]),
    ],
  };
}

export function greedyGrowersMutationsJsonLd() {
  const url = absoluteUrl(`${greedyGrowers.path}/mutations`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url,
        name: greedyGrowersCopy.mutations.pageH1,
        description: String(greedyGrowersMutationsMetadata.description ?? ""),
        image: ggImage("mutations"),
      }),
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities(greedyGrowersCopy.mutations.faq.items),
      },
      breadcrumbs([
        { name: greedyGrowers.name, path: greedyGrowers.path },
        { name: "Mutations", path: `${greedyGrowers.path}/mutations` },
      ]),
    ],
  };
}

export function greedyGrowersSeedsJsonLd() {
  const url = absoluteUrl(`${greedyGrowers.path}/seeds`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url,
        name: greedyGrowersCopy.seeds.pageH1,
        description: String(greedyGrowersSeedsMetadata.description ?? ""),
        image: ggImage("seeds"),
      }),
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities(greedyGrowersCopy.seeds.faq.items),
      },
      breadcrumbs([
        { name: greedyGrowers.name, path: greedyGrowers.path },
        { name: "Seeds", path: `${greedyGrowers.path}/seeds` },
      ]),
    ],
  };
}

export function greedyGrowersPetsJsonLd() {
  const url = absoluteUrl(`${greedyGrowers.path}/pets`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url,
        name: greedyGrowersCopy.pets.pageH1,
        description: String(greedyGrowersPetsMetadata.description ?? ""),
        image: ggImage("pets"),
      }),
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities(greedyGrowersCopy.pets.faq.items),
      },
      breadcrumbs([
        { name: greedyGrowers.name, path: greedyGrowers.path },
        { name: "Pets", path: `${greedyGrowers.path}/pets` },
      ]),
    ],
  };
}
