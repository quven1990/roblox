import type { GameFacts } from "@/lib/games/types";
import { SITE_NAME, SITE_ORIGIN, absoluteUrl, pageMetadata } from "@/lib/site";

export const fishAnAnimeRng = {
  slug: "fish-an-anime-rng",
  name: "Fish an Anime RNG",
  developer: "-チート-",
  universeId: "9582986239",
  placeId: "74729868188364",
  playUrl: "https://www.roblox.com/games/74729868188364/Fish-an-Anime-RNG",
  lastChecked: "2026-08-23",
  hasRedeemUi: true,
  path: "/fish-an-anime-rng",
  kitNumber: 5,
  kicker: "Watch",
  lede: "Click ponds, fish anime characters, place them in your base for cash.",
  tags: ["Guide", "Codes", "Tier-List", "Characters", "Rarities"],
  status: "watch",
  featuredPages: [
    { label: "Characters", href: "/fish-an-anime-rng/characters" },
    { label: "Tier list", href: "/fish-an-anime-rng/tier-list" },
    { label: "Codes", href: "/fish-an-anime-rng/codes" },
    { label: "Rarities", href: "/fish-an-anime-rng/rarities" },
  ],
  icon: "/games/fish-an-anime-rng-rbx.png",
  thumb: "/games/fish-an-anime-rng-rbx-thumb.jpg",
} as const satisfies GameFacts;

export const fishAnAnimeRngArt = {
  guide: "/games/art/faar-guide.jpg",
  codes: "/games/art/faar-codes.jpg",
  "tier-list": "/games/art/faar-tier-list.jpg",
  characters: "/games/art/faar-characters.jpg",
  rarities: "/games/art/faar-rarities.jpg",
} as const;

export const fishAnAnimeRngArtAlt = {
  guide:
    "Official Roblox thumbnail for Fish an Anime RNG: anime-style fishing RNG tycoon pond scene.",
  codes:
    "Official Roblox thumbnail for Fish an Anime RNG — used on the codes redeem page.",
  "tier-list":
    "Official Roblox thumbnail for Fish an Anime RNG — used on the role-based tier list page.",
  characters:
    "Official Roblox thumbnail for Fish an Anime RNG — used on the characters collection page.",
  rarities:
    "Official Roblox thumbnail for Fish an Anime RNG — used on the fishing rarities page.",
} as const;

export const fishAnAnimeRngVideos = {
  loop: {
    id: "fAaPdGDRQA4",
    watchUrl: "https://www.youtube.com/watch?v=fAaPdGDRQA4",
    title: "Fish an Anime RNG loop — public English-client run",
    credit: "RyuEzzy",
    poster: fishAnAnimeRngArt.guide,
  },
  redeem: {
    id: "8aNdOE0qFIo",
    watchUrl: "https://www.youtube.com/watch?v=8aNdOE0qFIo",
    title: "Fish an Anime RNG codes — redeem after tutorial",
    credit: "ItsChalls",
    poster: fishAnAnimeRngArt.codes,
  },
} as const;

export const fishAnAnimeRngCopy = {
  title: "Fish an Anime RNG Wiki (Roblox) — fish, base cash, rebirth",
  h1: "Fish an Anime RNG Wiki (Roblox) — fish, base cash, rebirth",
  dek: "Fish an Anime RNG is a Roblox anime fishing RNG tycoon by -チート- (place 74729868188364). Click ponds to fish anime characters, place them in your base to earn cash (including offline), spend on upgrades and potions, and rebirth for long-term progression. Unofficial Upvane wiki — not a code dump or copied tier roster.",
  metaDescription:
    "Fish an Anime RNG wiki: fish ponds, base cash, rebirth, and offline income. Separate pages for codes, tier list, characters, and rarities.",
  heroCta: "Play on Roblox",
  nav: {
    guide: "Wiki",
    codes: "Codes",
    tierList: "Tier list",
    characters: "Characters",
    rarities: "Rarities",
    play: "Play",
  },
  pages: {
    h2: "Fish an Anime RNG guide pages",
    ghostCta: "Guide pages",
    cards: [
      {
        id: "codes",
        title: "Codes",
        sitelink: "Fish an Anime RNG codes",
        body: "Cosmic Boxes and potions from public lists. Beebom vs GameRant rewards marked when they disagree.",
      },
      {
        id: "tier-list",
        title: "Tier list",
        sitelink: "Fish an Anime RNG tier list",
        body: "Role-based S–D framework for income cores and specialists — not a fake character roster.",
      },
      {
        id: "characters",
        title: "Characters",
        sitelink: "Fish an Anime RNG characters",
        body: "How anime catches work, base placement, collection notes — ranks live on the tier list page.",
      },
      {
        id: "rarities",
        title: "Rarities",
        sitelink: "Fish an Anime RNG rarities",
        body: "Fishing rarity labels, tracking journal, and income tests — separate from role tiers.",
      },
    ],
  },
  rightGame: {
    h2: "What Fish an Anime RNG is",
    body: "Fish an Anime RNG is a Roblox experience by the -チート- group (universe 9582986239, place 74729868188364). Public descriptions match an anime fishing RNG tycoon: click ponds to fish anime-inspired characters, place catches in a base to generate cash, unlock skillful upgrades and potions, rebirth for longer-term bonuses, and keep earning while offline.",
    notThis:
      "This is not Fish It!, not Anime Vanguards, and not a Fandom clone with hundreds of invented unit stats. Each search topic has its own page so codes, tier list, characters, and rarities do not compete for the same keyword.",
  },
  howItWorks: {
    h2: "How the core loop works",
    intro:
      "Steps from the Roblox description, Beebom’s August 2026 codes article, and public wiki-style guides. Exact UI labels may change after updates.",
    videoH2: "Watch a public run",
    videoCaption:
      "RyuEzzy recorded gameplay in Fish an Anime RNG: pond fishing, catches, and base placement. Unofficial gameplay — not Roblox or -チート-. Does not verify code rewards or rebirth numbers.",
    steps: [
      "Launch Fish an Anime RNG on Roblox and finish the short opening tutorial. Beebom reports the Store menu (left icon) stays locked until the tutorial is done.",
      "Click the pond to fish. Each catch is an anime-style character you can keep for collection or base income.",
      "Place strong earners in limited base slots. Cash builds passively, including while you are offline according to public guides.",
      "Spend cash on reported upgrade tracks — Fishing Power, cash generation, luck, and base efficiency show up in competitor guides as priority names, not photographed prices here.",
      "Use potions and Cosmic Boxes during active sessions. Codes on the dedicated codes page list reported rewards; do not assume every boost changes fishing rarity odds.",
      "Rebirth when the in-game requirement is met and your current run has finished useful farming. Reset rules and bonus names are not photographed on this kit yet.",
    ],
  },
  systems: {
    h2: "Systems on this wiki",
    intro:
      "The hub covers progression. Deep tables live on child pages so search snippets stay focused.",
    items: [
      {
        name: "Codes",
        note: "Cosmic Boxes, Golden Potions, and Double Power Potions from milestone strings. Status and reward conflicts are sourced, not guessed.",
        href: "/fish-an-anime-rng/codes",
      },
      {
        name: "Tier list",
        note: "S–D role profiles (income core, flexible earner, specialist) without unsupported character names.",
        href: "/fish-an-anime-rng/tier-list",
      },
      {
        name: "Characters",
        note: "Collection, placement, duplicates, and base slot rules. No S-tier column here.",
        href: "/fish-an-anime-rng/characters",
      },
      {
        name: "Rarities",
        note: "Fishing rarity labels, personal tracking, and income tests — not the same page as role tiers.",
        href: "/fish-an-anime-rng/rarities",
      },
    ],
  },
  upgrades: {
    h2: "Reported upgrade priorities",
    intro:
      "Competitor wikis rank Fishing Power and cash generation first, then luck once income is stable. Treat this as a menu of named tracks, not verified prices.",
    rows: [
      ["Fishing Power", "Very high", "Reach stronger ponds and catches faster", "Early and mid progression"],
      ["Cash generation", "Very high", "Reinvest into the next upgrade sooner", "Whenever income slows"],
      ["Luck", "High", "Pursue rarer catches after basics are stable", "After first income core"],
      ["Base efficiency", "High", "Better use of limited slots", "When collection quality rises"],
      ["Boost synergy", "Situational", "Stack potions during active fishing", "Not right before logging off"],
    ],
  },
  rebirth: {
    h2: "Rebirth (reported)",
    body: "Public guides describe rebirth as resetting part of a run for longer-term bonuses. Rebirth when the requirement shown in-game is met and you have finished farming you still need from the current cycle. Exact reset losses and bonus names are not photographed here.",
  },
  offline: {
    h2: "Base income and offline earnings",
    body: "Characters placed in your base generate cash over time. Public wiki copy states offline earnings continue while away — log back in to collect and reinvest. Which characters belong in permanent slots is covered on the characters and tier list pages, not here.",
  },
  faq: {
    h2: "Fish an Anime RNG wiki FAQ",
    items: [
      {
        q: "Where are Fish an Anime RNG codes?",
        a: "On the codes page only. This wiki hub links there instead of duplicating the full table so search results stay clean.",
      },
      {
        q: "Do you publish a Fish an Anime RNG tier list with every character name?",
        a: "No. Public sources do not provide a verified full stat database. The tier list page ranks unit roles (income core, flexible earner, specialist) instead of inventing names.",
      },
      {
        q: "What is the difference between characters and rarities pages?",
        a: "Characters covers collection, placement, and base slots. Rarities covers fishing labels, tracking catches, and income tests. Tier rankings stay on the tier list page.",
      },
      {
        q: "How do I redeem codes?",
        a: "Beebom (August 20, 2026): finish the tutorial, open Store on the left, enter the code at the bottom, Submit. GameRant names Settings instead — both paths stay reported until photographed.",
      },
    ],
  },
  disclaimer: {
    h2: "Disclaimer",
    body: "Unofficial. Not affiliated with Roblox Corporation or -チート-. Kit images are the official Roblox experience thumbnails and icon for this place, resized for the page.",
  },
  footer:
    "Upvane · unofficial · not affiliated with Roblox Corporation or -チート-.",
  codes: {
    pageH1: "Fish an Anime RNG codes (August 2026)",
    dek: "Fish an Anime RNG codes redeem Cosmic Boxes, Golden Potions, and Double Power Potions after the tutorial. Beebom (August 20, 2026) is the primary source; GameRant disagrees on some rewards.",
    lead: "Fish an Anime RNG codes are milestone strings for Cosmic Boxes and potions. Copy a code, finish the tutorial, redeem in Store (Beebom) or Settings (GameRant — reported). This page owns the codes keyword — tier list, characters, and rarities live elsewhere.",
    body: "Public lists updated around August 20, 2026. Beebom marks 500MEMBERS, DREAMSPACE, and FAA expired. GameRant (August 19, 2026) still listed several of those as five Cosmic Boxes — we mark reward conflicts instead of calling every row Working.",
    tableNote:
      "Status meanings: Reported working = Beebom August 20 list. Expired = Beebom expired section. Disputed = sources disagree on reward or active status.",
    copyHint: "Click a code to copy. Paste exactly — strings are case-sensitive.",
    redeemTitle: "How to redeem Fish an Anime RNG codes",
    redeemSteps: [
      "Launch Fish an Anime RNG on Roblox.",
      "Finish the short opening tutorial so menus unlock.",
      "Open Store on the left (Beebom) — or Settings if that is what your client shows (GameRant).",
      "Type the code in the text box at the bottom of the redeem window.",
      "Press Submit. If a new code fails, try a newer server and recheck spelling.",
    ],
    redeemVideoH2: "Watch code redemption",
    redeemVideoCaption:
      "ItsChalls walks through reported Fish an Anime RNG codes and the in-game redeem flow. Unofficial gameplay — not Beebom or the developer. Reward text on this page follows Beebom (August 20, 2026); the clip may show older strings.",
    rows: [
      {
        code: "1000MEMBERS",
        status: "Reported working",
        reward: "5× Cosmic Box",
        source: "Beebom · Aug 20, 2026",
      },
      {
        code: "2kCCU",
        status: "Reported working",
        reward: "5× Cosmic Box",
        source: "Beebom · Aug 20, 2026",
      },
      {
        code: "1kLIKES",
        status: "Disputed reward",
        reward: "1 Golden Potion (Beebom) · 5× Cosmic Box (GameRant)",
        source: "Beebom vs GameRant",
      },
      {
        code: "ANGELIA",
        status: "Disputed reward",
        reward: "1 Golden Potion (Beebom) · 5× Cosmic Box (GameRant)",
        source: "Beebom vs GameRant",
      },
      {
        code: "EXODIA",
        status: "Reported working",
        reward: "1 Double Power Potion",
        source: "Beebom · Aug 20, 2026",
      },
      {
        code: "500MEMBERS",
        status: "Expired",
        reward: "—",
        source: "Beebom expired · Aug 20, 2026",
      },
      {
        code: "DREAMSPACE",
        status: "Expired",
        reward: "—",
        source: "Beebom expired · Aug 20, 2026",
      },
      {
        code: "FAA",
        status: "Expired",
        reward: "—",
        source: "Beebom expired · Aug 20, 2026",
      },
    ],
    faq: {
      h2: "Codes FAQ",
      items: [
        {
          q: "Why is my Fish an Anime RNG code invalid?",
          a: "Check capitalization, complete the tutorial, and join a newer server. Expired milestone codes will not return.",
        },
        {
          q: "Do codes change fishing rarity?",
          a: "They drop boxes and potions that may help progression. Rarity labels and odds are on the rarities page, not here.",
        },
        {
          q: "Where is the tier list?",
          a: "On the tier list page. This codes page does not rank characters so the two URLs do not compete in search.",
        },
      ],
    },
  },
  tierList: {
    pageH1: "Fish an Anime RNG tier list — unit roles ranked",
    dek: "Fish an Anime RNG tier list ranks unit roles by income, upgrade synergy, and base flexibility — not unsupported character names. Use it after you understand characters and rarities.",
    lead: "Fish an Anime RNG tier list answers which type of catch helps your base next. Public data does not ship a complete stat sheet, so tiers describe roles: income core, flexible earner, specialist, temporary filler, and test-only placements.",
    principle:
      "Prioritize the profile that reaches your next upgrade sooner — not simply the flashiest rarity label.",
    tiers: [
      {
        tier: "S",
        label: "Income core",
        profile: "Reliable high-income producer",
        use: "Anchor base cash flow",
        priority: "Highest",
      },
      {
        tier: "A",
        label: "Flexible earner",
        profile: "Strong across several layouts",
        use: "Main progression layer",
        priority: "Very high",
      },
      {
        tier: "B",
        label: "Specialist",
        profile: "Strong under specific conditions",
        use: "Support a planned layout",
        priority: "Medium",
      },
      {
        tier: "C",
        label: "Temporary",
        profile: "Low output or high setup cost",
        use: "Hold a slot until replaced",
        priority: "Low",
      },
      {
        tier: "D",
        label: "Test only",
        profile: "Unclear or inefficient profile",
        use: "Short experiments",
        priority: "Lowest",
      },
    ],
    factors: {
      h2: "How to rank a catch",
      intro: "Compare candidates against the unit they would replace, not an empty slot.",
      rows: [
        ["Cash output", "Dependable income after placement", "Unlocks upgrades faster"],
        ["Upgrade synergy", "Still useful after spending on base", "Avoids constant churn"],
        ["Placement value", "Fits limited slots efficiently", "Protects layout space"],
        ["Investment cost", "Cash and time to set up", "Matters most early"],
        ["Flexibility", "Works in more than one layout", "Survives rebirth resets"],
        ["Consistency", "Performance across sessions", "Reduces RNG swings"],
      ],
    },
    stages: {
      h2: "Tier list by progression stage",
      items: [
        {
          stage: "Starting base",
          priority: "S-tier income core",
          approach: "One dependable earner before chasing rare labels.",
        },
        {
          stage: "First upgrades",
          priority: "Cash efficiency",
          approach: "Replace C-tier placeholders gradually.",
        },
        {
          stage: "Developed base",
          priority: "Synergy and space",
          approach: "Add A-tier flexible support.",
        },
        {
          stage: "Specialist build",
          priority: "Layout optimization",
          approach: "Deploy B-tier profiles with a written goal.",
        },
      ],
    },
    faq: {
      h2: "Tier list FAQ",
      items: [
        {
          q: "Where is the character roster?",
          a: "On the characters page. This tier list stays role-based until verified stats are photographed.",
        },
        {
          q: "Is rarity the same as tier?",
          a: "No. Rarity labels live on the rarities page. A rare catch can still be C-tier if income is weak.",
        },
        {
          q: "Do codes belong on this page?",
          a: "No. Redeem strings are only on the codes page.",
        },
      ],
    },
  },
  characters: {
    pageH1: "Fish an Anime RNG characters — collection and base placement",
    dek: "Fish an Anime RNG characters are anime-inspired catches from ponds. This page covers collection, duplicates, base slots, and income tests — not tier ranks or code rewards.",
    lead: "Fish an Anime RNG characters come from the fishing RNG loop: each catch can join your collection, fill a base slot, or sit in reserve. We do not publish a copied name roster without in-game Index screenshots.",
    collection: {
      h2: "What counts as a character",
      body: "Public copy describes anime-style units obtained by fishing. Treat each catch as having three possible values: collection completion, passive cash when placed, and upgrade timing (does it pay for the next improvement?). Rankings belong on the tier list page; rarity labels belong on the rarities page.",
    },
    placement: {
      h2: "Base placement rules (reported)",
      items: [
        "Base slots are limited — public guides recommend filling them with best earners first.",
        "Compare a new catch with whoever it would replace, not with an empty slot you might need later.",
        "Duplicates may still matter for collection goals even when income gain is flat.",
        "Offline earnings depend on who stays placed when you log out — recheck after major upgrades.",
      ],
    },
    journal: {
      h2: "Character journal (verify in-game)",
      intro: "Track what the client actually shows instead of copying fan charts.",
      columns: ["Field", "What to write", "Why"],
      rows: [
        ["Character label", "Name or silhouette note from the catch UI", "Tells duplicates apart"],
        ["Visible rarity", "Exact text the game prints", "Feeds the rarities page journal"],
        ["Base income", "Cash change after placement", "Practical value for upgrades"],
        ["Slot status", "Placed, reserve, or sold", "Shows collection gaps"],
        ["Session date", "When you tested", "Catches balance patches"],
      ],
    },
    faq: {
      h2: "Characters FAQ",
      items: [
        {
          q: "Where is the Fish an Anime RNG tier list?",
          a: "On the tier list page. Characters here avoids S/A/B columns so search snippets stay distinct.",
        },
        {
          q: "How do rarities relate to characters?",
          a: "Rarity is a label on a catch. The rarities page explains tracking and income tests.",
        },
        {
          q: "Can I get characters from codes?",
          a: "Codes grant boxes and potions, not direct character drops. See the codes page for strings.",
        },
      ],
    },
  },
  rarities: {
    pageH1: "Fish an Anime RNG rarities — fishing rarity guide",
    dek: "Fish an Anime RNG rarities connect fishing labels to collection value and base income. Record in-game text and placement results — we do not publish unverified drop percentages.",
    lead: "Fish an Anime RNG rarities describe how uncommon a catch looks in the RNG collection system. Without a photographed official chart, judge rarity through visible labels, cash after placement, and upgrade timing — not copied tier lists.",
    explained: {
      h2: "Fishing rarity vs base value",
      body: "Collection rarity (how hard a catch seems to get) and economic value (how much cash it adds) can diverge. A flashy label still deserves an income test before it replaces a dependable earner. Role tiers stay on the tier list page; character slot rules stay on the characters page.",
    },
    tracking: {
      h2: "Rarity tracking table",
      intro: "Build a personal log from verified UI text only.",
      rows: [
        ["In-game label", "Exact rarity or quality string", "Avoids fan-chart guesswork"],
        ["Character identity", "Name or visual note", "Organizes collection"],
        ["Base income", "Cash after placement", "Shows practical progression value"],
        ["Upgrade impact", "Next upgrade unlocked?", "Links rarity to account growth"],
        ["Repeat catches", "Duplicate or new?", "Separates collection from income"],
      ],
    },
    session: {
      h2: "Fishing session checklist",
      steps: [
        "Finish the tutorial before comparing rarity notes with code rewards.",
        "Record each new catch's visible label before spending potions.",
        "Place candidates and observe cash across similar session lengths.",
        "Open Cosmic Boxes during planned progression — not as a rarity tier.",
        "Update notes after balance patches or new pond unlocks.",
      ],
    },
    rewards: {
      h2: "Cosmic Boxes and potions (not rarity tiers)",
      body: "Beebom lists Cosmic Boxes from 1000MEMBERS and 2kCCU, Golden Potions from 1kLIKES and ANGELIA, and Double Power from EXODIA. These are progression boosts reported on the codes page — they are not official fishing rarity names.",
      href: "/fish-an-anime-rng/codes",
    },
    faq: {
      h2: "Rarities FAQ",
      items: [
        {
          q: "What are the official Fish an Anime RNG rarity tiers?",
          a: "We have not photographed a complete in-game chart. Record labels your client displays and compare income.",
        },
        {
          q: "Is this the tier list page?",
          a: "No. Tier list ranks unit roles. Rarities covers fishing labels and tracking.",
        },
        {
          q: "Should I chase rarity or income first?",
          a: "Early progression favors dependable cash. Use the tier list framework once income is stable.",
        },
      ],
    },
  },
} as const;

export const fishAnAnimeRngNav = [
  {
    id: "guide" as const,
    href: fishAnAnimeRng.path,
    label: fishAnAnimeRngCopy.nav.guide,
  },
  {
    id: "codes" as const,
    href: `${fishAnAnimeRng.path}/codes`,
    label: fishAnAnimeRngCopy.nav.codes,
  },
  {
    id: "tier-list" as const,
    href: `${fishAnAnimeRng.path}/tier-list`,
    label: fishAnAnimeRngCopy.nav.tierList,
  },
  {
    id: "characters" as const,
    href: `${fishAnAnimeRng.path}/characters`,
    label: fishAnAnimeRngCopy.nav.characters,
  },
  {
    id: "rarities" as const,
    href: `${fishAnAnimeRng.path}/rarities`,
    label: fishAnAnimeRngCopy.nav.rarities,
  },
] as const;

export const fishAnAnimeRngCanonical = absoluteUrl(fishAnAnimeRng.path);

function faarImage(kind: keyof typeof fishAnAnimeRngArt) {
  return `${SITE_ORIGIN}${fishAnAnimeRngArt[kind]}`;
}

function faarMeta(
  title: string,
  description: string,
  pathname: string,
  kind: keyof typeof fishAnAnimeRngArt,
) {
  return pageMetadata(title, description, pathname, {
    image: fishAnAnimeRngArt[kind],
    imageAlt: fishAnAnimeRngArtAlt[kind],
  });
}

export const fishAnAnimeRngMetadata = faarMeta(
  fishAnAnimeRngCopy.title,
  fishAnAnimeRngCopy.metaDescription,
  fishAnAnimeRng.path,
  "guide",
);

export const fishAnAnimeRngCodesMetadata = faarMeta(
  fishAnAnimeRngCopy.codes.pageH1,
  "Fish an Anime RNG codes (August 2026): Cosmic Boxes and potions. Beebom Aug 20 primary; disputed rewards flagged. Redeem in Store after tutorial.",
  `${fishAnAnimeRng.path}/codes`,
  "codes",
);

export const fishAnAnimeRngTierListMetadata = faarMeta(
  fishAnAnimeRngCopy.tierList.pageH1,
  "Fish an Anime RNG tier list: S–D unit roles (income core, flexible earner, specialist). Role ranks only — no invented character names.",
  `${fishAnAnimeRng.path}/tier-list`,
  "tier-list",
);

export const fishAnAnimeRngCharactersMetadata = faarMeta(
  fishAnAnimeRngCopy.characters.pageH1,
  "Fish an Anime RNG characters: pond catches, base slots, duplicates, and income tests. Tier list and rarities on separate pages.",
  `${fishAnAnimeRng.path}/characters`,
  "characters",
);

export const fishAnAnimeRngRaritiesMetadata = faarMeta(
  fishAnAnimeRngCopy.rarities.pageH1,
  "Fish an Anime RNG rarities: in-game fishing labels, tracking journal, income vs collection. No fake drop rates; tier list on another page.",
  `${fishAnAnimeRng.path}/rarities`,
  "rarities",
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
    dateModified: fishAnAnimeRng.lastChecked,
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
      name: fishAnAnimeRng.name,
      url: fishAnAnimeRng.playUrl,
      gamePlatform: "Roblox",
      author: {
        "@type": "Organization",
        name: fishAnAnimeRng.developer,
      },
      sameAs: fishAnAnimeRng.playUrl,
    },
  };
}

export function fishAnAnimeRngJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url: fishAnAnimeRngCanonical,
        name: fishAnAnimeRngCopy.title,
        description: fishAnAnimeRngCopy.metaDescription,
        image: faarImage("guide"),
      }),
      {
        "@type": "HowTo",
        name: "How to play Fish an Anime RNG",
        description: fishAnAnimeRngCopy.howItWorks.intro,
        step: fishAnAnimeRngCopy.howItWorks.steps.map((text, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          text,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${fishAnAnimeRngCanonical}#faq`,
        mainEntity: faqEntities(fishAnAnimeRngCopy.faq.items),
      },
      {
        "@type": "ItemList",
        name: "Fish an Anime RNG guide pages",
        itemListElement: fishAnAnimeRngCopy.pages.cards.map((card, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: card.sitelink,
          url: absoluteUrl(`${fishAnAnimeRng.path}/${card.id}`),
        })),
      },
      breadcrumbs([{ name: fishAnAnimeRng.name, path: fishAnAnimeRng.path }]),
    ],
  };
}

export function fishAnAnimeRngCodesJsonLd() {
  const url = absoluteUrl(`${fishAnAnimeRng.path}/codes`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url,
        name: fishAnAnimeRngCopy.codes.pageH1,
        description: String(fishAnAnimeRngCodesMetadata.description ?? ""),
        image: faarImage("codes"),
      }),
      {
        "@type": "HowTo",
        name: "How to redeem Fish an Anime RNG codes",
        step: fishAnAnimeRngCopy.codes.redeemSteps.map((text, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          text,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqEntities(fishAnAnimeRngCopy.codes.faq.items),
      },
      breadcrumbs([
        { name: fishAnAnimeRng.name, path: fishAnAnimeRng.path },
        { name: "Codes", path: `${fishAnAnimeRng.path}/codes` },
      ]),
    ],
  };
}

export function fishAnAnimeRngTierListJsonLd() {
  const url = absoluteUrl(`${fishAnAnimeRng.path}/tier-list`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url,
        name: fishAnAnimeRngCopy.tierList.pageH1,
        description: String(fishAnAnimeRngTierListMetadata.description ?? ""),
        image: faarImage("tier-list"),
      }),
      {
        "@type": "FAQPage",
        mainEntity: faqEntities(fishAnAnimeRngCopy.tierList.faq.items),
      },
      breadcrumbs([
        { name: fishAnAnimeRng.name, path: fishAnAnimeRng.path },
        { name: "Tier list", path: `${fishAnAnimeRng.path}/tier-list` },
      ]),
    ],
  };
}

export function fishAnAnimeRngCharactersJsonLd() {
  const url = absoluteUrl(`${fishAnAnimeRng.path}/characters`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url,
        name: fishAnAnimeRngCopy.characters.pageH1,
        description: String(fishAnAnimeRngCharactersMetadata.description ?? ""),
        image: faarImage("characters"),
      }),
      {
        "@type": "FAQPage",
        mainEntity: faqEntities(fishAnAnimeRngCopy.characters.faq.items),
      },
      breadcrumbs([
        { name: fishAnAnimeRng.name, path: fishAnAnimeRng.path },
        { name: "Characters", path: `${fishAnAnimeRng.path}/characters` },
      ]),
    ],
  };
}

export function fishAnAnimeRngRaritiesJsonLd() {
  const url = absoluteUrl(`${fishAnAnimeRng.path}/rarities`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url,
        name: fishAnAnimeRngCopy.rarities.pageH1,
        description: String(fishAnAnimeRngRaritiesMetadata.description ?? ""),
        image: faarImage("rarities"),
      }),
      {
        "@type": "FAQPage",
        mainEntity: faqEntities(fishAnAnimeRngCopy.rarities.faq.items),
      },
      breadcrumbs([
        { name: fishAnAnimeRng.name, path: fishAnAnimeRng.path },
        { name: "Rarities", path: `${fishAnAnimeRng.path}/rarities` },
      ]),
    ],
  };
}
