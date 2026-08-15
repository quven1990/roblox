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
  tags: ["Guide", "Codes", "Traits", "Units", "Items"],
  icon: "/games/anime-vanguards.png",
  thumb: "/games/anime-vanguards-thumb.png",
} as const satisfies GameFacts;

export const animeVanguardsArt = {
  guide: "/games/art/vanguard-guide.png",
  codes: "/games/art/vanguard-codes.png",
  traits: "/games/art/vanguard-traits.png",
  units: "/games/art/vanguard-units.png",
  items: "/games/art/vanguard-items.png",
} as const;

export const animeVanguardsArtAlt = {
  guide:
    "Two Anime Vanguards fighters clashing on a ruined battlefield, fire and a blue energy slash in the same frame.",
  codes:
    "A grinning unit diving with a sack of gold coins, Anime Vanguards logo in the corner.",
  traits:
    "A unit wreathed in purple and blue energy with glowing eyes, Anime Vanguards title at the bottom.",
  units:
    "A dark armored swordsman facing a black wolf under an orange eclipse, Anime Vanguards logo in the corner.",
  items:
    "Two blocky anime fighters colliding, pink-coat unit versus a gold-fist punch.",
} as const;

export const animeVanguardsCopy = {
  title: "Anime Vanguards (Roblox) — summon, defend, evolve",
  h1: "Anime Vanguards (Roblox) — summon, defend, evolve",
  dek: "Anime Vanguards is a Roblox tower defense game by Kitawari. Unofficial Upvane kit. Not Anime Last Stand.",
  metaDescription:
    "Unofficial Anime Vanguards guide: Story loop, codes versus the official wiki, traits, items, and Update 14.5 unit names. Not Anime Last Stand.",
  heroCta: "Play on Roblox",
  nav: {
    guide: "Guide",
    codes: "Codes",
    traits: "Traits",
    units: "Units",
    items: "Items",
    play: "Play",
  },
  pages: {
    h2: "Guide pages",
    ghostCta: "Guide pages",
    cards: [
      {
        id: "codes",
        title: "Codes",
        body: "Official wiki TBD vs media NEW. Copy a code. Profile → Codes still unverified.",
      },
      {
        id: "items",
        title: "Items",
        body: "Gems, Trait Rerolls, Memoria Shards, and the event tokens codes drop.",
      },
      {
        id: "traits",
        title: "Traits",
        body: "Wiki-listed effects and pity. Not photographed on this kit yet.",
      },
      {
        id: "units",
        title: "Units",
        body: "How the roster works, rarity buckets, and the 14.5 names from official wiki news.",
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
      "Open Play and start Story on the first track you can finish. Official text is summon units versus waves — that is the loop, not a raid skip.",
      "Spend Gems on a summon banner only after you have a farm or starter DPS that can clear the current act. Banner prices are not photographed here.",
      "Place attackers where the track bends; keep a yen / farm unit if the wiki Epic list name Sprintwagon is actually in your inventory. Do not trait-reroll a unit you will sell tonight.",
      "Clear enough Story to hit Level 30, then redeem codes. Most strings on the official table require Level 30. Path: Profile (right) → Codes — still unverified until photographed.",
      "Reroll traits at the Traits NPC other sites call Mandra. One trait per unit on the official wiki. Open the in-game Trait Index for live pity.",
      "Evolve only the unit that is still clearing your hardest mode. Essences and shards come from codes, stages, and shops the official wiki tags — questlines stay on that encyclopedia.",
      "When Story stalls, media and the official wiki point to Challenges, Infinite, Raids, Dungeons, or Boss Rush. We have not photographed those lobbies, so treat the names as a menu, not a walkthrough.",
    ],
  },
  systems: {
    h2: "Summon, Story, traits, evolve",
    intro:
      "Loop names from the Roblox description, the official wiki unit intro, and code reward labels. Skip banner odds and SS-tier.",
    items: [
      {
        name: "Summon",
        note: "Gems buy units from banners. Official: summon units to fend off enemies. Some units also drop from stages, events, and shops on the official roster page.",
      },
      {
        name: "Combat stats",
        note: "Official wiki: units attack on an SPA timer inside a Range cone. Some generate yen instead of damaging. Passives are always on; actives are player-fired. Not photographed here.",
      },
      {
        name: "Traits + Memoria + Familiars",
        note: "Official wiki: one Trait at a time; Memoria and Familiars further buff kits. This kit has a Traits table. Familiars stay on the official encyclopedia.",
      },
      {
        name: "Evolve",
        note: "Official: level up and evolve. Green / Rainbow Essence show up on code rows. Full evo quests are a wiki job, not a 200-URL factory on Upvane.",
      },
    ],
  },
  modes: {
    h2: "Modes other pages name",
    intro:
      "These labels showed up on wiki.vanguards.gg code rows and unit copy. We have not photographed the Play lobby, so this is a menu, not a farm route.",
    items: [
      { name: "Story", note: "Usual first grind in media beginner guides. Unlocks later menus as you clear acts." },
      { name: "Infinite", note: "Named on official code/unit pages. Survival / wave farm, map not photographed." },
      { name: "Challenges", note: "PGG says Trait Rerolls drop after Story Stage 3 Act 1 unlocks Challenges. Unverified here." },
      { name: "Raids", note: "Code rewards include raid tokens (example: Gambler's Token on an archived row)." },
      { name: "Dungeons", note: "25th Hour news: a Dungeon for the new units. Controller Token is tagged Dungeons on the official codes table." },
      { name: "Boss Rush", note: "14.0 P2 news: Copycat Boss Rush. Copycat Tokens sit on archived code rows." },
      { name: "Legend Stages", note: "Shows up as a tag on essence rewards. No lobby screenshot." },
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
    redeemTitle: "How to redeem (unverified)",
    redeemSteps: [
      "Launch Anime Vanguards on Roblox (place 16146832113).",
      "Open Profile on the right side of the HUD — official wiki and Destructoid include this click; some roundups skip it.",
      "Open Codes on the left edge of that profile window.",
      "Paste a case-sensitive string and confirm Redeem. Need Level 30 for most current-table codes.",
    ],
    archiveTitle: "Official wiki recently archived (Update 14.0)",
    archiveNote:
      "Still showing as live on some August media pages. The official codes table already filed them. Do not treat this as a Working list.",
    archiveRows: [
      {
        code: "PowerOfLove",
        reward: "50 Trait Rerolls + 50 Memoria Shards",
        requirement: "Level 30",
      },
      {
        code: "EEPart1",
        reward: "50 Trait Rerolls + 5,000 Gems + 50 Gambler's Tokens",
        requirement: "Level 30",
      },
      {
        code: "BPSoon",
        reward: "50 Memoria Shards + 50 Green Essence",
        requirement: "Level 30",
      },
      {
        code: "WhoopsieDaisy",
        reward: "100 Memoria Shards",
        requirement: "Level 30",
      },
      {
        code: "LateBP",
        reward: "100 Trait Rerolls",
        requirement: "Level 30",
      },
      {
        code: "LagGone",
        reward: "1,000 Trait Rerolls + summer event currencies on the wiki row",
        requirement: "Level 30",
      },
    ],
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
        {
          q: "Is this the same box as Gamepass gifts?",
          a: "PGG describes a yellow Gamepass Coupons button inside the same Codes window. Unverified here. Promo codes and paid gift codes are not the same list.",
        },
      ],
    },
  },
  traits: {
    h2: "Traits",
    pageH1: "Anime Vanguards traits — Monarch to Range",
    dek: "Effects and pity copied from wiki.vanguards.gg on 2026-08-16. That wiki is developer-supported. We have not photographed the Trait Index, so this is sourced, not Index.",
    body: "Official wiki: a unit keeps one trait at a time; reroll with Trait Rerolls at the Traits NPC (media name: Mandra). Mythic traits have per-unit pity on those pages. Evolving or transferring stats does not reset pity according to Fandom — also unverified here.",
    indexTitle: "Wiki-listed trait table",
    indexNote:
      "Rates and numbers are from wiki.vanguards.gg/Traits (read 2026-08-16). Open the in-game Trait Index if the panel disagrees.",
    rows: [
      {
        name: "Monarch",
        rate: "0.1% (1 in 1,000), pity 1,500",
        effect: "+300% Damage, −10% SPA, +5% Range, 1 placement limit",
      },
      {
        name: "Ethereal",
        rate: "0.175% (1 in 571), pity 858",
        effect: "+20% Damage, −20% SPA, +5% Range. Wiki note: 3+ placement units can out-DPS Monarch; cost/passives often still favor Monarch",
      },
      {
        name: "Deadeye",
        rate: "0.375%, pity 400",
        effect: "+45% critical rate, +50% critical damage",
      },
      {
        name: "Solar",
        rate: "0.5%, pity 300",
        effect: "+10% Damage, −5% SPA, +25% Range",
      },
      {
        name: "Blitz",
        rate: "1.85% (1 in 54)",
        effect: "−20% SPA",
      },
      {
        name: "Fortune",
        rate: "2.5% (1 in 40)",
        effect: "+20% income, or −10% cost on non-farm units",
      },
      {
        name: "Marksman",
        rate: "6.5%",
        effect: "+30% Range",
      },
      {
        name: "Scholar",
        rate: "10%",
        effect: "+50% EXP",
      },
      {
        name: "Vigor I / II / III",
        rate: "26% combined",
        effect: "+5% / +10% / +15% Damage",
      },
      {
        name: "Swift I / II / III",
        rate: "26% combined",
        effect: "−5% / −7.5% / −12.5% SPA",
      },
      {
        name: "Range I / II / III",
        rate: "26% combined",
        effect: "+5% / +10% / +15% Range",
      },
    ],
    skip: "No S-tier from us. If the in-game Index disagrees with this table, the Index wins. We will replace wiki numbers when we photograph the panel.",
  },
  items: {
    h2: "Items",
    pageH1: "Anime Vanguards items — gems, rerolls, shards",
    dek: "Currencies that show up on code rewards and official wiki item blurbs. Not a shop screenshot.",
    intro:
      "Codes dump these into your inventory. Exact stack sizes change per code. Shop prices are not photographed.",
    rows: [
      {
        name: "Gems",
        usedFor: "Summon banners (official code blurb: obtain special units)",
        source: "wiki.vanguards.gg Codes item text",
      },
      {
        name: "Gold",
        usedFor: "Buy or craft several items, per official blurb",
        source: "wiki.vanguards.gg Codes",
      },
      {
        name: "Trait Reroll",
        usedFor: "Reroll the single trait on a unit at the Traits NPC",
        source: "Official traits page + code rows",
      },
      {
        name: "Memoria Shard",
        usedFor: "Reroll Memoria traits (wiki: crystalized memoria essence)",
        source: "wiki.vanguards.gg Codes",
      },
      {
        name: "Stat Chip",
        usedFor: "Reroll a unit’s substats (wiki/battle-pass tag)",
        source: "Archived code rows; Daily Challenge / Battle Pass tags",
      },
      {
        name: "Green Essence / Rainbow Essence",
        usedFor: "Evolve a unit, per official code tags",
        source: "wiki.vanguards.gg Codes",
      },
      {
        name: "Controller Token",
        usedFor: "Lunar Bridge Dungeon currency on the 25th Hour code row",
        source: "LetTheLarpingBegin official row",
      },
      {
        name: "Extermination Token",
        usedFor: "Extermination Event dungeon currency",
        source: "HeavyEyes archived official row",
      },
      {
        name: "Copycat Token",
        usedFor: "Copycat Boss Rush shop",
        source: "ExecutionPart2 archived official row",
      },
      {
        name: "Gambler's Token",
        usedFor: "Sorcerer Battlefield raid shop",
        source: "EEPart1 archived official row",
      },
    ],
  },
  units: {
    h2: "Units",
    pageH1: "Anime Vanguards units — how the roster works",
    dek: "One page on how units function and which names the official wiki posted for Update 14.5 / 14.0 P2. Not a 200-row encyclopedia and not a tier list.",
    body: "Official wiki Unit List: units come from summoning, stages, events, and shops. In a stage they attack on an SPA timer inside Range, unless they are yen/support. Every unit has stats and passives; some have player-fired actives. You inspect owned units in Inventory; obtaining a unit once unlocks it in the Unit Index. We have not photographed that Index.",
    rarityTitle: "Rarity buckets the official list uses",
    rarityNote: "Bucket names only. Full names live on wiki.vanguards.gg/Unit_List.",
    rarityRows: [
      { name: "Vanguard", note: "Top listed bucket on the official unit list. Event and banner crossovers sit here." },
      { name: "Secret", note: "Large official bucket; 14.5 Secret names are on the news post below." },
      { name: "Exclusive", note: "Official list bucket, often shop / milestone / collab." },
      { name: "Mythic", note: "Official list bucket; evo forms of Secrets often land here." },
      { name: "Legendary / Epic / Rare", note: "Lower official buckets. Sprintwagon is on the Epic list and media treat it as an early farm unit — unverified here." },
    ],
    patchTitle: "Names from official wiki news (not a live Index)",
    patchNote:
      "Copied from wiki.vanguards.gg homepage news for Update 14.5 (August 10, 2026) and 14.0 P2 (July 27, 2026). If the Unit Index disagrees, the Index wins.",
    patchRows: [
      { name: "Apathetic Savior (Door)", update: "14.5", listed: "Official news; Secret on the unit list" },
      { name: "Phantom Thief (Jester)", update: "14.5", listed: "Official news; Secret on the unit list" },
      { name: "Rebel Fighter (Gauntlet)", update: "14.5", listed: "Official news; Secret on the unit list" },
      { name: "Star Crusader (Platinum)", update: "14.5", listed: "Official news; Exclusive on the unit list" },
      { name: "Investigation Leader (Truth)", update: "14.5", listed: "Official news; Mythic on the unit list" },
      { name: "Cursed Copycat (Pure)", update: "14.0 P2", listed: "Official news; Secret on the unit list" },
      { name: "Awakened Sibling (Restricted)", update: "14.0 P2", listed: "Official news; Secret on the unit list" },
      { name: "Sword Hunter (Void)", update: "14.0 P2", listed: "Official news; Exclusive on the unit list" },
      { name: "Cursed Gourmet (Full)", update: "14.0 P2", listed: "Official news; Mythic on the unit list" },
    ],
    skip: "No S-tier. No 200 cloned unit URLs. For the rest of the roster use the in-game Unit Index or wiki.vanguards.gg.",
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
      {
        q: "Where do Trait Rerolls go?",
        a: "Official wiki: spend them at the Traits NPC to reroll the single trait on a unit. Media call that NPC Mandra. Pity numbers on this site are copied from wiki.vanguards.gg, not from a photographed Index.",
      },
      {
        q: "What did Update 14.5 add?",
        a: "Official wiki news (August 10, 2026): Apathetic Savior (Door), Phantom Thief (Jester), Rebel Fighter (Gauntlet), Star Crusader (Platinum), Investigation Leader (Truth), plus new Memoria and Vanguard Familiars. Full stats stay on that wiki or the in-game Index.",
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
    id: "items" as const,
    href: `${animeVanguards.path}/items`,
    label: animeVanguardsCopy.nav.items,
  },
  {
    id: "traits" as const,
    href: `${animeVanguards.path}/traits`,
    label: animeVanguardsCopy.nav.traits,
  },
  {
    id: "units" as const,
    href: `${animeVanguards.path}/units`,
    label: animeVanguardsCopy.nav.units,
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
  "Anime Vanguards traits — Monarch to Range",
  "Anime Vanguards traits with wiki.vanguards.gg rates and effects (read 2026-08-16). Not a photographed Trait Index. No S-tier.",
  `${animeVanguards.path}/traits`,
);

export const animeVanguardsUnitsMetadata = pageMetadata(
  "Anime Vanguards units — roster rules and 14.5 names",
  "How Anime Vanguards units work (SPA, Range, Index) plus Update 14.5 / 14.0 P2 names from official wiki news. Not a tier list.",
  `${animeVanguards.path}/units`,
);

export const animeVanguardsItemsMetadata = pageMetadata(
  "Anime Vanguards items — gems, rerolls, shards",
  "Anime Vanguards currencies from official code blurbs: Gems, Gold, Trait Rerolls, Memoria Shards, dungeon tokens. Not a shop screenshot.",
  `${animeVanguards.path}/items`,
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
