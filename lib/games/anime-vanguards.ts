import type { GameFacts } from "@/lib/games/types";
import { SITE_NAME, SITE_ORIGIN, absoluteUrl, pageMetadata } from "@/lib/site";

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
  thumb: "/games/anime-vanguards-thumb.jpg",
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
  dek: "Anime Vanguards is a Roblox tower defense game by Kitawari (place 16146832113). Summon units, hold the track, evolve, reroll traits. Unofficial Upvane kit — not Anime Last Stand.",
  metaDescription:
    "Unofficial Anime Vanguards Roblox guide: Update 14.5 Lunar Bridge, Gauntlets, Codex, codes vs official wiki, traits, and unit obtain paths.",
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
    ghostCta: "Codes",
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
        body: "How the roster works, rarity buckets, and where Update 14.5 units come from.",
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
      "When Story stalls, Update 14.5 names Lunar Bridge Dungeon, Gauntlets, and Worldlines alongside older Challenges, Infinite, Raids, and Boss Rush. We have not photographed those lobbies, so treat the names as a menu, not a walkthrough.",
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
        href: "/anime-vanguards/units",
      },
      {
        name: "Traits + Memoria + Familiars",
        note: "Official wiki: one Trait at a time; Memoria and Familiars further buff kits. This kit has a Traits table plus the five 14.5 exclusive Memoria names. New familiar icons on the 14.5 graphic stay unnamed here — open Codex.",
        href: "/anime-vanguards/traits",
      },
      {
        name: "Codex",
        note: "Update 14.5: in-game index for items, units, and familiars, with search. Prefer Codex or a photographed Index over a third-party dump.",
      },
      {
        name: "Evolve",
        note: "Official: level up and evolve. Green / Rainbow Essence show up on code rows. Full evo quests are a wiki job, not a 200-URL factory on Upvane.",
        href: "/anime-vanguards/items",
      },
    ],
  },
  modes: {
    h2: "Modes other pages name",
    intro:
      "Story through Boss Rush came from wiki labels. Lunar Bridge, Gauntlets, and Worldlines are from Kitawari’s Update 14.5 notes. We have not photographed the Play lobby, so this is a menu, not a farm route.",
    items: [
      { name: "Story", note: "Usual first grind in media beginner guides. Unlocks later menus as you clear acts." },
      { name: "Infinite", note: "Named on official code/unit pages. Survival / wave farm, map not photographed." },
      { name: "Challenges", note: "PGG says Trait Rerolls drop after Story Stage 3 Act 1 unlocks Challenges. Unverified here." },
      { name: "Raids", note: "Code rewards include raid tokens (example: Gambler's Token on an archived row)." },
      { name: "Lunar Bridge Dungeon", href: "/anime-vanguards/units", note: "Update 14.5: 11 floors. Earn Controller Tokens for the dungeon shop. Phantom Thief (Joker) and Apathetic Savior (Door) are listed as dungeon units." },
      { name: "Gauntlets", note: "Update 14.5: 8-player PvP bracket. Timed turns; highest score advances. Replays exist. Not photographed here." },
      { name: "Worldlines", href: "/anime-vanguards/units", note: "Update 14.5 reset: Raging Oni vs Wrath God is unobtainable. Floor 50 reward is Rebel Fighter (Gauntlet)." },
      { name: "Boss Rush", note: "14.0 P2 news: Copycat Boss Rush. Copycat Tokens sit on archived code rows." },
      { name: "Legend Stages", note: "Shows up as a tag on essence rewards. No lobby screenshot." },
    ],
  },
  update145: {
    h2: "Update 14.5 (official notes)",
    intro:
      "Facts from Kitawari’s English Update 14.5 graphic (read 2026-08-16). Rewards and obtain paths only — not floor drop rates, not a soundtrack page, and not a clone of the poster.",
    items: [
      {
        name: "Five new units",
        href: "/anime-vanguards/units",
        note: "Dungeon: Phantom Thief (Joker), Apathetic Savior (Door). Worldlines Floor 50: Rebel Fighter (Gauntlet). Season 14 Battlepass: Star Crusader (Platinum). Arcana login / dungeon: Investigation Leader (Truth).",
      },
      {
        name: "Five exclusive Memorias",
        href: "/anime-vanguards/items",
        note: "Paired to those units on the graphic. Names live on the Items page. Effects were not printed on the poster.",
      },
      {
        name: "Lunar Bridge Dungeon",
        note: "11 floors. Controller Tokens buy the dungeon shop. Preview on the graphic is a green portal — not a map screenshot from this kit.",
      },
      {
        name: "Gauntlets",
        note: "Matchmake with seven other players into a random bracket. Limited turn time; highest score advances. Replays included.",
      },
      {
        name: "Worldlines reset",
        note: "Raging Oni vs Wrath God can no longer be obtained. Rebel Fighter (Gauntlet) replaces that Floor 50 slot.",
      },
      {
        name: "Codex",
        note: "In-game index for items, units, and familiars, with search. Use it when the client and a wiki page disagree.",
      },
      {
        name: "Arcana login",
        note: "Seven-day login. Graphic names Investigation Leader, Trait Rerolls, and Memoria Shards. Daily amounts not printed.",
      },
      {
        name: "Season 14 Battlepass",
        note: "Star Crusader (Platinum), exclusive Memoria Want Some, Trait Rerolls, and Stat Chips.",
      },
      {
        name: "Codes",
        href: "/anime-vanguards/codes",
        note: "Same three strings as the wiki TBD table: 1DayDelay and 25thHour need Level 30; LetTheLarpingBegin has no level lock. Rewards on that graphic were generic — keep wiki stack sizes on the Codes page.",
      },
      {
        name: "QOL (skip the bug list)",
        note: "Soundtrack player, OG tag on original-run units, drag from inventory onto the hotbar, profile banner and store rework. New familiar art is on the graphic; we are not naming them from icons.",
      },
    ],
  },
  codes: {
    h2: "Codes",
    pageH1: "Anime Vanguards codes (Roblox)",
    dek: "Kitawari’s Update 14.5 notes and wiki.vanguards.gg listed the same three TBD strings on 2026-08-16. August media still tagged older strings NEW. Not redeemed here.",
    answer:
      "On 2026-08-16, 1DayDelay and 25thHour (Level 30) plus LetTheLarpingBegin (no level lock) sat on both Kitawari’s Update 14.5 notes and the official wiki TBD table. We have not redeemed them in-game.",
    body: "Codes typically need Level 30. The 14.5 notes and the official wiki both say LetTheLarpingBegin has no level lock. Fandom and developer notes say codes last about two weeks. Media describe Profile on the right, then Codes on the left of that window. We have not photographed the redeem box, so that path stays Unverified. Copy a code below — do not type it into a random shop.",
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
        source: "wiki.vanguards.gg Codes + Kitawari Update 14.5 notes, 2026-08-16, Availability TBD",
      },
      {
        code: "25thHour",
        status: "Official mention",
        reward: "Official wiki: 50 Trait Rerolls + 50 Memoria Shards",
        requirement: "Level 30",
        source: "wiki.vanguards.gg Codes + Kitawari Update 14.5 notes, 2026-08-16, Availability TBD",
      },
      {
        code: "LetTheLarpingBegin",
        status: "Official mention",
        reward: "Official wiki: 50 Controller Tokens + 10,000 Gems + 50,000 Gold",
        requirement: "None (14.5 notes: no level lock)",
        source: "wiki.vanguards.gg Codes + Kitawari Update 14.5 notes, 2026-08-16, Availability TBD",
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
          a: "We have not redeemed in-game. Kitawari’s Update 14.5 notes and the official wiki active table on 2026-08-16 both listed 1DayDelay, 25thHour, and LetTheLarpingBegin. 1DayL8, HeavyEyes, and ExecutionPart2 were already archived on the wiki even while some media pages still marked them NEW.",
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
          q: "What do the current codes give?",
          a: "Wiki rows (not the 14.5 poster): 1DayDelay is 200 Trait Rerolls; 25thHour is 50 Trait Rerolls + 50 Memoria Shards; LetTheLarpingBegin is 50 Controller Tokens + 10,000 Gems + 50,000 Gold. Unpack those currencies on the Items page.",
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
    pageH1: "Anime Vanguards traits (Roblox) — Monarch to Range",
    dek: "Effects and pity copied from wiki.vanguards.gg on 2026-08-16. That wiki is developer-supported. We have not photographed the Trait Index, so this is sourced, not Index.",
    answer:
      "A unit keeps one trait. Spend Trait Rerolls at the Traits NPC (media name: Mandra). On wiki.vanguards.gg, Monarch is 0.1% with pity 1,500. If the in-game Trait Index disagrees, the Index wins.",
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
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "How do Anime Vanguards traits work?",
          a: "Official wiki: one trait per unit. Reroll it with Trait Rerolls at the Traits NPC other sites call Mandra. Evolving or transferring stats does not reset pity according to Fandom — unverified here.",
        },
        {
          q: "What is the Monarch trait rate?",
          a: "wiki.vanguards.gg (read 2026-08-16): 0.1% (1 in 1,000) with pity 1,500. Effect listed: +300% Damage, −10% SPA, +5% Range, 1 placement limit.",
        },
        {
          q: "Is this table the live Trait Index?",
          a: "No. It is copied from the developer-supported wiki. Open Codex or the Trait Index in-game if the numbers differ.",
        },
        {
          q: "Where do Trait Rerolls come from?",
          a: "Current codes dump them (see the Codes page). Challenges and the Season 14 Battlepass also tag them. Spend them here, do not buy them from a random shop.",
        },
      ],
    },
  },
  items: {
    h2: "Items",
    pageH1: "Anime Vanguards items (Roblox) — gems, Memorias, tokens",
    dek: "Currencies from code rewards, official wiki blurbs, and Kitawari’s Update 14.5 notes. Not a shop screenshot.",
    answer:
      "Codes dump Gems, Trait Rerolls, and Memoria Shards. Lunar Bridge spends Controller Tokens on the dungeon shop. Five exclusive Memorias from the 14.5 notes are paired to the new units; their combat effects were not printed on that graphic.",
    intro:
      "Codes dump currencies into your inventory. Exact stack sizes change per code. Shop prices are not photographed. Exclusive Memoria names below come from the 14.5 graphic; effects were not printed there.",
    memoriaTitle: "Update 14.5 exclusive Memorias",
    memoriaNote:
      "Paired names from Kitawari’s Update 14.5 notes (read 2026-08-16). Open Codex or the in-game Index for live effects.",
    memoriaRows: [
      { name: "It's Going Down Now", unit: "Apathetic Savior (Door)" },
      { name: "Life Will Change", unit: "Phantom Thief (Joker)" },
      { name: "Princess Rose", unit: "Rebel Fighter (Gauntlet)" },
      { name: "Want Some", unit: "Star Crusader (Platinum)" },
      { name: "Reach Out To The Truth", unit: "Investigation Leader (Truth)" },
    ],
    currencyTitle: "Currencies and tokens",
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
        usedFor: "Reroll a unit’s substats (wiki/battle-pass tag). Season 14 Battlepass lists them.",
        source: "Archived code rows; Update 14.5 Battlepass line",
      },
      {
        name: "Green Essence / Rainbow Essence",
        usedFor: "Evolve a unit, per official code tags",
        source: "wiki.vanguards.gg Codes",
      },
      {
        name: "Controller Token",
        usedFor: "Lunar Bridge Dungeon shop (Update 14.5: 11 floors; also on the LetTheLarpingBegin row)",
        source: "Kitawari Update 14.5 notes + official codes table",
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
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "What is the difference between Memoria and Memoria Shards?",
          a: "Exclusive Memorias on the 14.5 notes are named items paired to a unit (example: Want Some for Star Crusader). Memoria Shards are the reroll currency for Memoria traits. Shard stacks come from codes; exclusive names are not a drop table we have photographed.",
        },
        {
          q: "What are Controller Tokens for?",
          a: "Update 14.5: Lunar Bridge Dungeon shop. 11 floors. LetTheLarpingBegin also drops 50 Controller Tokens on the official wiki row.",
        },
        {
          q: "Where do Gems and Trait Rerolls come from?",
          a: "Codes are the fast dump (see the Codes page). Gems also buy summon banners. Trait Rerolls are spent on the Traits page NPC.",
        },
        {
          q: "Do you list shop prices?",
          a: "No. This page is labels from codes and the 14.5 graphic, not a photographed shop.",
        },
      ],
    },
  },
  units: {
    h2: "Units",
    pageH1: "Anime Vanguards units (Roblox) — 14.5 obtain paths",
    dek: "How units function, plus Update 14.5 obtain paths from Kitawari’s notes. Not a 200-row encyclopedia and not a tier list.",
    answer:
      "Update 14.5: Phantom Thief (Joker) and Apathetic Savior (Door) from Lunar Bridge Dungeon; Rebel Fighter (Gauntlet) at Worldlines Floor 50; Star Crusader (Platinum) on the Season 14 Battlepass; Investigation Leader (Truth) from Arcana login or Dungeon.",
    body: "Official wiki Unit List: units come from summoning, stages, events, and shops. In a stage they attack on an SPA timer inside Range, unless they are yen/support. Every unit has stats and passives; some have player-fired actives. You inspect owned units in Inventory; obtaining a unit once unlocks it in the Unit Index. Update 14.5 also adds Codex. We have not photographed that Index.",
    rarityTitle: "Rarity buckets the official list uses",
    rarityNote: "Bucket names only. Full names live on wiki.vanguards.gg/Unit_List.",
    rarityRows: [
      { name: "Vanguard", note: "Top listed bucket on the official unit list. Event and banner crossovers sit here." },
      { name: "Secret", note: "Large official bucket; 14.5 Secret names are on the notes below." },
      { name: "Exclusive", note: "Official list bucket, often shop / milestone / collab." },
      { name: "Mythic", note: "Official list bucket; evo forms of Secrets often land here." },
      { name: "Legendary / Epic / Rare", note: "Lower official buckets. Sprintwagon is on the Epic list and media treat it as an early farm unit — unverified here." },
    ],
    patchTitle: "Update 14.5 names and obtain paths",
    patchNote:
      "Obtain paths from Kitawari’s Update 14.5 graphic (read 2026-08-16). Rarity tags from wiki.vanguards.gg. The graphic says Phantom Thief (Joker); older wiki news used Jester — Index wins if they still disagree. 14.0 P2 names stay from wiki news only.",
    patchRows: [
      {
        name: "Apathetic Savior (Door)",
        update: "14.5",
        obtain: "Lunar Bridge Dungeon",
        listed: "Secret on the unit list",
      },
      {
        name: "Phantom Thief (Joker)",
        update: "14.5",
        obtain: "Lunar Bridge Dungeon",
        listed: "Secret on the unit list; wiki news also used Jester",
      },
      {
        name: "Rebel Fighter (Gauntlet)",
        update: "14.5",
        obtain: "Worldlines Floor 50",
        listed: "Secret on the unit list",
      },
      {
        name: "Star Crusader (Platinum)",
        update: "14.5",
        obtain: "Season 14 Battlepass",
        listed: "Exclusive on the unit list",
      },
      {
        name: "Investigation Leader (Truth)",
        update: "14.5",
        obtain: "Arcana 7-day login / Dungeon",
        listed: "Mythic on the unit list",
      },
      {
        name: "Cursed Copycat (Pure)",
        update: "14.0 P2",
        obtain: "Not on the 14.5 graphic",
        listed: "Official news; Secret on the unit list",
      },
      {
        name: "Awakened Sibling (Restricted)",
        update: "14.0 P2",
        obtain: "Not on the 14.5 graphic",
        listed: "Official news; Secret on the unit list",
      },
      {
        name: "Sword Hunter (Void)",
        update: "14.0 P2",
        obtain: "Not on the 14.5 graphic",
        listed: "Official news; Exclusive on the unit list",
      },
      {
        name: "Cursed Gourmet (Full)",
        update: "14.0 P2",
        obtain: "Not on the 14.5 graphic",
        listed: "Official news; Mythic on the unit list",
      },
    ],
    skip: "No S-tier. No 200 cloned unit URLs. For the rest of the roster use the in-game Unit Index or wiki.vanguards.gg.",
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "How do I get the Update 14.5 units?",
          a: "Kitawari’s notes: Phantom Thief (Joker) and Apathetic Savior (Door) from Lunar Bridge Dungeon; Rebel Fighter (Gauntlet) at Worldlines Floor 50; Star Crusader (Platinum) on the Season 14 Battlepass; Investigation Leader (Truth) from the Arcana 7-day login or Dungeon.",
        },
        {
          q: "Is Phantom Thief Joker or Jester?",
          a: "The Update 14.5 graphic says Joker. Older official wiki news used Jester. Trust the in-game Unit Index or Codex if they still disagree.",
        },
        {
          q: "Do you publish an Anime Vanguards tier list?",
          a: "No. Public S-tier lists already disagree on the same unit. This page is obtain paths and roster rules, not ranks.",
        },
        {
          q: "Where is the rest of the roster?",
          a: "In-game Codex / Unit Index, or wiki.vanguards.gg. Upvane does not clone every unit URL.",
        },
      ],
    },
  },
  faq: {
    h2: "FAQ",
    items: [
      {
        q: "What is Anime Vanguards?",
        a: "A Roblox tower defense experience by Kitawari (place 16146832113). Summon units, hold the track, evolve, and reroll traits. The live title suffix rotates with events; 25th Hour was the suffix on 2026-08-16.",
      },
      {
        q: "Is Anime Vanguards the same as Anime Last Stand?",
        a: "No. This kit is only Kitawari’s Anime Vanguards. Anime Last Stand is a different Roblox tower defense.",
      },
      {
        q: "What did Update 14.5 add?",
        a: "Kitawari’s notes: Lunar Bridge Dungeon (11 floors, Controller Tokens), Gauntlets (8-player PvP bracket), Worldlines reset, Codex, Arcana login, Season 14 Battlepass, five units with exclusive Memorias, and the same three codes as the wiki TBD table. Obtain paths sit on the Units page; currencies on Items; strings on Codes.",
      },
      {
        q: "Where should I redeem codes or reroll traits?",
        a: "Codes page for strings and the unverified Profile → Codes path. Traits page for the wiki pity table. This guide does not duplicate those answers.",
      },
      {
        q: "Is this a clone of the official wiki?",
        a: "No. wiki.vanguards.gg is the developer-supported encyclopedia (they claim hundreds of articles). This is a short unofficial desk: first session, 14.5 facts, codes vs media, and a few tables.",
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

function avImage(kind: keyof typeof animeVanguardsArt) {
  return `${SITE_ORIGIN}${animeVanguardsArt[kind]}`;
}

function avMeta(
  title: string,
  description: string,
  pathname: string,
  kind: keyof typeof animeVanguardsArt,
) {
  return pageMetadata(title, description, pathname, {
    image: animeVanguardsArt[kind],
    imageAlt: animeVanguardsArtAlt[kind],
  });
}

export const animeVanguardsMetadata = avMeta(
  animeVanguardsCopy.title,
  animeVanguardsCopy.metaDescription,
  animeVanguards.path,
  "guide",
);

export const animeVanguardsCodesMetadata = avMeta(
  "Anime Vanguards codes (Roblox) — TBD vs media NEW",
  "Anime Vanguards codes: 1DayDelay, 25thHour, LetTheLarpingBegin from Kitawari 14.5 and wiki TBD. Media NEW may already be archived. Not redeemed here.",
  `${animeVanguards.path}/codes`,
  "codes",
);

export const animeVanguardsTraitsMetadata = avMeta(
  "Anime Vanguards traits (Roblox) — Monarch to Range",
  "Anime Vanguards traits: Monarch 0.1% pity 1,500 and the full wiki.vanguards.gg table (read 2026-08-16). Not a photographed Index. No S-tier.",
  `${animeVanguards.path}/traits`,
  "traits",
);

export const animeVanguardsUnitsMetadata = avMeta(
  "Anime Vanguards units (Roblox) — 14.5 obtain paths",
  "Anime Vanguards units: SPA/Range rules plus Update 14.5 obtain paths (Dungeon, Worldlines, Battlepass, login). Not a tier list.",
  `${animeVanguards.path}/units`,
  "units",
);

export const animeVanguardsItemsMetadata = avMeta(
  "Anime Vanguards items (Roblox) — gems, Memorias, tokens",
  "Anime Vanguards items: Gems, Trait Rerolls, Memoria Shards, Controller Tokens, and five Update 14.5 exclusive Memorias. Not a shop screenshot.",
  `${animeVanguards.path}/items`,
  "items",
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
    dateModified: animeVanguards.lastChecked,
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
      name: animeVanguards.name,
      url: animeVanguards.playUrl,
      gamePlatform: "Roblox",
      author: {
        "@type": "Organization",
        name: animeVanguards.developer,
      },
      sameAs: animeVanguards.playUrl,
    },
  };
}

export function animeVanguardsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url: animeVanguardsCanonical,
        name: animeVanguardsCopy.title,
        description: animeVanguardsCopy.metaDescription,
        image: avImage("guide"),
      }),
      {
        "@type": "FAQPage",
        "@id": `${animeVanguardsCanonical}#faq`,
        mainEntity: faqEntities(animeVanguardsCopy.faq.items),
      },
      {
        "@type": "ItemList",
        name: "Anime Vanguards guide pages",
        itemListElement: animeVanguardsCopy.pages.cards.map((card, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: card.title,
          url: absoluteUrl(`${animeVanguards.path}/${card.id}`),
        })),
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
      webPageNode({
        url,
        name: animeVanguardsCopy.codes.pageH1,
        description: String(animeVanguardsCodesMetadata.description ?? ""),
        image: avImage("codes"),
      }),
      {
        "@type": "HowTo",
        name: "How to redeem Anime Vanguards codes",
        description:
          "Path from official wiki and media. Unverified on this kit until photographed.",
        step: animeVanguardsCopy.codes.redeemSteps.map((text, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          text,
        })),
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

export function animeVanguardsTraitsJsonLd() {
  const url = absoluteUrl(`${animeVanguards.path}/traits`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url,
        name: animeVanguardsCopy.traits.pageH1,
        description: String(animeVanguardsTraitsMetadata.description ?? ""),
        image: avImage("traits"),
      }),
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities(animeVanguardsCopy.traits.faq.items),
      },
      breadcrumbs([
        { name: animeVanguards.name, path: animeVanguards.path },
        { name: "Traits", path: `${animeVanguards.path}/traits` },
      ]),
    ],
  };
}

export function animeVanguardsUnitsJsonLd() {
  const url = absoluteUrl(`${animeVanguards.path}/units`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url,
        name: animeVanguardsCopy.units.pageH1,
        description: String(animeVanguardsUnitsMetadata.description ?? ""),
        image: avImage("units"),
      }),
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities(animeVanguardsCopy.units.faq.items),
      },
      breadcrumbs([
        { name: animeVanguards.name, path: animeVanguards.path },
        { name: "Units", path: `${animeVanguards.path}/units` },
      ]),
    ],
  };
}

export function animeVanguardsItemsJsonLd() {
  const url = absoluteUrl(`${animeVanguards.path}/items`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url,
        name: animeVanguardsCopy.items.pageH1,
        description: String(animeVanguardsItemsMetadata.description ?? ""),
        image: avImage("items"),
      }),
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities(animeVanguardsCopy.items.faq.items),
      },
      breadcrumbs([
        { name: animeVanguards.name, path: animeVanguards.path },
        { name: "Items", path: `${animeVanguards.path}/items` },
      ]),
    ],
  };
}
