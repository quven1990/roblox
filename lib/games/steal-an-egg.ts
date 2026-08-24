import type { GameFacts } from "@/lib/games/types";
import { SITE_NAME, absoluteUrl, pageMetadata } from "@/lib/site";

export const stealAnEgg = {
  slug: "steal-an-egg",
  name: "Steal An Egg",
  developer: "and Collect Rare Pets",
  universeId: "10563114921",
  placeId: "107778070777162",
  playUrl: "https://www.roblox.com/games/107778070777162/Steal-An-Egg",
  lastChecked: "2026-08-25",
  hasRedeemUi: false,
  path: "/steal-an-egg",
  kitNumber: 1,
  kicker: "Live",
  lede: "Steal eggs, hatch pets, train Speed.",
  tags: ["Guide", "Pets", "Eggs", "Biomes"],
  icon: "/games/steal-an-egg.png",
  thumb: "/games/steal-an-egg-thumb.jpg",
} as const satisfies GameFacts;

export const stealAnEggPageLastChecked = {
  guide: "2026-08-25",
  updates: "2026-08-25",
  pets: "2026-08-25",
  eggs: "2026-08-25",
  biomes: "2026-08-25",
  mutations: "2026-08-25",
  speed: "2026-08-15",
} as const;

export const stealAnEggArt = {
  guide: "/games/art/steal-guide.jpg",
  updates: "/games/art/steal-guide.jpg",
  pets: "/games/art/steal-pets.jpg",
  eggs: "/games/art/steal-eggs.jpg",
  biomes: "/games/art/steal-biomes.jpg",
  mutations: "/games/art/steal-mutations.jpg",
  speed: "/games/art/steal-speed.jpg",
} as const;

export const stealAnEggVideos = {
  loop: {
    id: "RZDYOCvfavg",
    watchUrl: "https://www.youtube.com/watch?v=RZDYOCvfavg",
    title: "Steal An Egg loop — public English-client run",
    credit: "BasicBlox",
    poster: stealAnEggArt.guide,
  },
  biomes: {
    id: "xRhk-dUBInc",
    watchUrl: "https://www.youtube.com/watch?v=xRhk-dUBInc",
    title: "Later Steal An Egg biomes — public English-client run",
    credit: "CoralBlox",
    poster: stealAnEggArt.biomes,
  },
  eggs: {
    id: "8akAXNIICa4",
    watchUrl: "https://www.youtube.com/watch?v=8akAXNIICa4",
    title: "Steal An Egg eternal egg steal — public English-client run",
    credit: "BasicBlox",
    poster: stealAnEggArt.eggs,
  },
  speed: {
    id: "er3piu10fAg",
    watchUrl: "https://www.youtube.com/watch?v=er3piu10fAg",
    title: "Steal An Egg Speed tips — public English-client run",
    credit: "SpaceQT",
    poster: stealAnEggArt.speed,
  },
} as const;

export const stealAnEggCopy = {
  title: "Steal An Egg Update #1 — Cherry Blossom biome live",
  h1: "Steal An Egg (Roblox) — steal eggs, hatch pets, train Speed",
  dek: "Steal An Egg is a Roblox pet / tycoon by and Collect Rare Pets. This unofficial guide is not Steal a Brainrot and not the older game titled Steal a Egg.",
  metaDescription:
    "Unofficial Steal An Egg Roblox guide: Update #1 Cherry Blossom biome, Bloom mutations, Sakura Incubator, eggs, biomes, pets, and Speed.",
  heroCta: "Play on Roblox",
  update1: {
    h2: "Update #1 — Cherry Blossom live notes",
    lead:
      "Steal An Egg Update #1 is treated as live on this kit as of 2026-08-25. Official Roblox event title was “ADMIN ABUSE!? + New Zone - Steal An Egg.” Post-launch notes name Cherry Blossom Biome, eight new pets, Sakura Incubator, Bloom / Spirit Bloom mutations, and The Great Bloom event. Income, Speed gates, and mutation odds are still not published here.",
    eventUrl: "https://www.roblox.com/events/4073678192131572359",
    eventLabel: "Open the Roblox event page",
    sourceNote:
      "Cherry Blossom names and unlock steps come from reported Update #1 live notes (2026-08-25). They are not Index screenshots on this kit yet. Speed gate numbers and $/s for the new pets stay blank until published or photographed.",
    rows: [
      {
        item: "Cherry Blossom Biome",
        status: "Reported live",
        detail:
          "New biome from Update #1 notes. Speed gate and Recommended Speed are not verified on this kit.",
      },
      {
        item: "Eight new pets",
        status: "Reported live",
        detail:
          "Crane (Epic), Salamander (Legendary), Red Panda (Mythic), Snow Owl (Cosmic), Koi (Cosmic), Stag (Secret), Oni Tiger (Eternal), Kitsune (Divine). Income/second not published here.",
      },
      {
        item: "Sakura Incubator",
        status: "Reported live",
        detail:
          "Notes: hatch a Crane from a Cherry Blossom Egg, bring it to the ancient Sakura tree, restore the tree to unlock Bloom mutations.",
      },
      {
        item: "Bloom / Spirit Bloom",
        status: "Reported live",
        detail:
          "Two new mutations from the Sakura unlock path. Spirit Bloom is described as an extremely rare variant. Odds and multipliers are blank here.",
      },
      {
        item: "The Great Bloom",
        status: "Reported live",
        detail:
          "Notes: every 30 minutes the biome fills with Sakura Crystal Trees. Break them, deposit Sakura Crystals into the incubator to mutate eggs.",
      },
      {
        item: "Dragon Admin Abuse",
        status: "Announced separately",
        detail:
          "Still named on the Roblox event list. Not mixed into the Cherry Blossom unlock path on this kit until mechanics are confirmed in-game.",
      },
    ],
  },
  nav: {
    guide: "Guide",
    updates: "Updates",
    pets: "Pets",
    eggs: "Eggs",
    biomes: "Biomes",
    mutations: "Mutations",
    speed: "Speed",
    play: "Play",
  },
  wiki: {
    h2: "Guide pages",
    cards: [
      {
        id: "updates",
        title: "Updates",
        body: "Update #1 Cherry Blossom: biome, Sakura Incubator, Bloom mutations, Great Bloom.",
      },
      {
        id: "pets",
        title: "Pets",
        body: "Pets list with rarity, biome, and income per second — including Cherry Blossom roster.",
      },
      {
        id: "eggs",
        title: "Eggs",
        body: "Nests, steals, reset, Cherry Blossom Egg / Sakura Crystal mutate path.",
      },
      {
        id: "biomes",
        title: "Biomes",
        body: "Forest → Cosmic King, plus Cherry Blossom from Update #1 notes.",
      },
      {
        id: "mutations",
        title: "Mutations",
        body: "Gold / silver coats, huge / giant sizes, Bloom and Spirit Bloom.",
      },
      {
        id: "speed",
        title: "Speed",
        body: "Unlock the treadmill, trails, pen. No fake price table.",
      },
    ],
  },
  updates: {
    pageH1: "Steal An Egg updates — Cherry Blossom Update #1",
    dek: "Update #1 live notes: Cherry Blossom Biome, eight new pets, Sakura Incubator, Bloom / Spirit Bloom, The Great Bloom every 30 minutes.",
    lead: "Steal An Egg Update #1 is treated as live on this kit (checked 2026-08-25). Post-launch notes name Cherry Blossom Biome and the Sakura unlock path. Roblox event title remains “ADMIN ABUSE!? + New Zone - Steal An Egg.” Income and Speed gates for the new content stay blank until photographed.",
    howTitle: "How to read this page",
    howBody:
      "Event titles prove scheduling. Live notes name biome, pets, mutations, and event cadence. This kit still waits on Index tiles or in-game screenshots before publishing $/s, gate numbers, or mutation odds.",
    sakuraTitle: "Sakura Incubator unlock (reported)",
    sakuraSteps: [
      "Hatch a Crane pet from a Cherry Blossom Egg.",
      "Bring the Crane to the ancient Sakura tree in the Cherry Blossom Biome.",
      "Restore the tree to unlock Bloom and Spirit Bloom mutations.",
    ],
    bloomTitle: "The Great Bloom (reported)",
    bloomBody:
      "Notes say The Great Bloom starts about every 30 minutes. Sakura Crystal Trees fill the Cherry Blossom Biome — break them, collect Sakura Crystals, and deposit crystals into the incubator to mutate eggs. Exact crystal costs and mutation odds are not published here.",
    notTitle: "What is still blank on purpose",
    notItems: [
      "Recommended Speed for Cherry Blossom and any other gate numbers.",
      "Income/second for Crane through Kitsune until a published table or Index panel exists.",
      "Bloom / Spirit Bloom odds or sell multipliers.",
      "Dragon Admin Abuse spawn rules, rewards, and duration (still separate from Cherry Blossom notes).",
    ],
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "Is Steal An Egg Update #1 live?",
          a: "Yes on this kit’s 2026-08-25 check. Notes name Cherry Blossom Biome, new pets, Sakura Incubator, Bloom mutations, and The Great Bloom.",
        },
        {
          q: "What is the new biome called?",
          a: "Cherry Blossom Biome. Speed gate details are not verified here yet.",
        },
        {
          q: "What are the new mutations?",
          a: "Bloom and Spirit Bloom. Notes say Spirit Bloom is an extremely rare variant. Odds stay blank.",
        },
        {
          q: "Does Update #1 add codes?",
          a: "No redeem UI or working code list is confirmed. The event page is not treated as a codes announcement.",
        },
      ],
    },
  },
  rightGame: {
    h2: "Right game",
    body: "Steal An Egg is a 7-player pet / tycoon loop: you steal eggs, hatch them into pets, and the pets make money. Train on the treadmill to raise Speed, upgrade the base, and steal from other players. Official description also lists rarer eggs, pet sizes, and mutations.",
    brainrot:
      "If you landed here looking for Steal a Brainrot codes, that is a different game. This shop can still sell brainrot-named eggs — those pets belong here, not to Brainrot.",
  },
  howARunWorks: {
    h2: "How a run works",
    videoH2: "Watch a public run",
    videoCaption:
      "BasicBlox recorded the steal, hatch, treadmill, and chase loop on an English client. This is unofficial gameplay, not a Roblox or developer video.",
    steps: [
      "Pick a nest or biome pet you can finish. Learn the way home before you grab the egg.",
      "Steal the egg. Carrying it is worthless until it sits in your base.",
      "Escape the biome chase, bats, traps, and other players. A failed run is a reset.",
      "Hatch on a timer (Grow All / Instant Grow can skip it). Pets pay you in $/s.",
      "Unlock and train the treadmill, buy trails, and upgrade the pen so later biomes open.",
      "When egg reset hits, contest the scramble. Late game, skip tiny eggs and take bodies about 2–3× your character — bigger eggs hatch bigger pets, and the chase is faster.",
    ],
  },
  stealing: {
    h2: "Nests, guards, and the return trip",
    body: "Eggs live on biome pets and in guarded nests. Other players will steal a carried egg from you. The steal only pays if you deliver it to your pen. Scout the exit, grab, run, hatch.",
    tools: [
      {
        name: "Bat",
        note: "Smack a carrier to contest the egg. Range is short; missing is common.",
      },
      {
        name: "Traps",
        note: "Placeable. Do not stand in your own. One clip missed the target entirely.",
      },
      {
        name: "Copy prompt",
        note: "One steal prompt named a Huge Gorilla egg as a copy, and the owner kept the pet. That is not the same as yanking an egg someone is carrying.",
      },
      {
        name: "Egg size",
        note: "Bigger eggs make a faster chase. Dropping a small egg to bait the guard is a real clip, not a published mechanic page.",
      },
    ],
  },
  map: {
    h2: "Map and Speed gates",
    body: "Zones sit behind Speed. Forest and Lake are on the in-game Index. Later names come from gameplay, not from Index labels. Recommended Speed on each gate will move with updates, so we are not publishing a number ladder.",
    source:
      "Forest and Lake: Pet Index screenshot. Later biomes: gameplay, including a public English-client recording by CoralBlox. Cherry Blossom: Update #1 live notes checked 2026-08-25.",
    zones: [
      { name: "Forest", note: "Index biome. Eight pet slots. Tutorial chicken lives here." },
      { name: "Lake", note: "Index biome. Frog is the first visible slot." },
      { name: "Desert", note: "Gameplay. Early Speed gate." },
      { name: "Jungle", note: "Gameplay. Tiger chase." },
      {
        name: "Yeti / ice pocket",
        note: "Gameplay. Called the snow area; Yeti chase. Official gate label not photographed.",
      },
      { name: "Volcano", note: "Gameplay. Scorpion-scale chase in one recording." },
      { name: "Abyss Ocean", note: "Gameplay. Whale-scale eggs." },
      { name: "Prehistoric", note: "Gameplay. T-Rex / dino chase. Huge eggs are a fight." },
      {
        name: "Cosmic King / final cosmic",
        note: "Gameplay. Last Speed wall. One recording showed Recommended Speed on the order of 700 million.",
      },
      {
        name: "Cherry Blossom",
        note: "Update #1 notes. New biome with Crane → Kitsune pets, Sakura Incubator, and The Great Bloom. Speed gate not verified here.",
      },
    ],
  },
  eggs: {
    h2: "Eggs",
    teaser:
      "Steal from pets, nests, and players. Shop eggs are a different pool. Egg reset and a moon event kick off the scramble — that is the rare-egg race other wikis write about.",
    pageH1: "Steal An Egg all eggs — nests, shop, reset",
    dek: "Eggs come from nests, biome pets, player steals, shop pools, and reset races. Huge and giant are sizes. Update #1 adds Cherry Blossom Egg / Sakura Crystal mutate path from live notes.",
    lead:
      "Eggs come from nests, biome pets, player steals, shop pools, and reset races. Huge and giant are sizes, not separate catalog names. Update #1 live notes name Cherry Blossom Eggs (for the Crane unlock) and Sakura Crystal deposits that mutate eggs during The Great Bloom. Dragon Admin Abuse still has no confirmed egg name here.",
    updateTitle: "Update #1 — Cherry Blossom eggs",
    updateBody:
      "Reported from Update #1 notes: hatch a Crane from a Cherry Blossom Egg, then use The Great Bloom (~every 30 minutes) to break Sakura Crystal Trees and deposit crystals into the Sakura Incubator to mutate eggs. Crystal costs and mutation odds stay blank. Dragon Admin Abuse remains a separate announced event without a verified egg name on this kit.",
    indexTitle: "All eggs vs Pet Index vs shop",
    indexAnswers: [
      {
        name: "All eggs",
        note: "Use this page for the full evidence desk: biome/nest eggs, player steals, shop eggs, reset rares, huge and giant sizes, and gameplay hatch names.",
      },
      {
        name: "Pet Index",
        note: "The Index confirms collected pets, not every egg source. Forest and Lake names are photographed elsewhere on this kit.",
      },
      {
        name: "Shop eggs",
        note: "Shop eggs are a separate pool until their hatch appears in the Index or in clear gameplay footage.",
      },
    ],
    matrixTitle: "All eggs evidence matrix",
    matrixRows: [
      {
        source: "Biome pets and guarded nests",
        what: "Steal prompt can name the egg or target pet before you run it home.",
        index: "Counts only after the hatch fills a Pet Index tile.",
        action: "Train Speed first, then contest larger biome eggs.",
      },
      {
        source: "Other players",
        what: "A carried egg can be taken from a player if you catch them.",
        index: "Same as any hatch: the tile matters, not where you stole it.",
        action: "Upgrade pen space before chasing expensive steals.",
      },
      {
        source: "Shop pools",
        what: "Shop eggs can use brainrot-style names and coin prices.",
        index: "Unverified until the resulting pet appears in the Index or clear footage.",
        action: "Do not mix shop SKU names into the Index table.",
      },
      {
        source: "Reset and moon-event races",
        what: "Secret, Eternal, Cosmic, huge, or giant eggs can become the lobby scramble.",
        index: "The hatch result is what should be recorded.",
        action: "Leave the treadmill when the alert fires.",
      },
      {
        source: "Cherry Blossom / Sakura path",
        what: "Update #1 notes: Cherry Blossom Egg → Crane unlock; Great Bloom crystals mutate eggs in the incubator.",
        index: "Crane–Kitsune pets are on the pets roster as reported; Index tiles not photographed here yet.",
        action: "Treat crystal costs and Bloom odds as unknown until the UI prints them.",
      },
      {
        source: "Dragon Admin Abuse",
        what: "Still named on the Roblox event list as a separate Update #1 piece.",
        index: "No Dragon Egg name is verified on this kit.",
        action: "Do not invent a Dragon Egg row from the event title alone.",
      },
    ],
    sources: [
      {
        name: "Biome / nest eggs",
        note: "Stolen from pets and guarded nests. A steal prompt can name what you will get (one clip said Huge Gorilla / King Mammoth). Hatch at base.",
      },
      {
        name: "Player steals",
        note: "Take a carried egg off another player. Same hatch rules if you keep it. One other prompt treated a take as a copy so the owner kept the pet.",
      },
      {
        name: "Shop eggs",
        note: "Bought separately, including brainrot-named stock. Not Index rows until they appear in Pet Index.",
      },
      {
        name: "Announced rares",
        note: "UI can flash Secret / Eternal / Cosmic plus the biome. Leave the treadmill and contest those.",
      },
      {
        name: "Cherry Blossom / Sakura",
        note: "Update #1 notes: Cherry Blossom Eggs for Crane, plus Sakura Crystals from The Great Bloom deposited into the incubator to mutate eggs.",
      },
    ],
    videoH2: "Watch a steal on video",
    videoCaption:
      "BasicBlox contests an Eternal egg steal, chase, and hatch on an English client. Unofficial gameplay — not a published odds table and not a guarantee every rare call matches this clip.",
    race:
      "The UI can say egg reset. Late-game footage still matches a short cycle (about five minutes). A moon event also fired in the same session and was a bust if you were slow. Treat the clock as a rhythm, not a published timer — especially not a guaranteed Huge egg every 3 hours.",
    size:
      "Huge and giant are how big the egg is, not a separate wiki catalog. Bigger eggs take longer to hatch (one huge take sat on an 11-minute timer; another grow-all showed about 6 minutes). The chase is faster on the big ones. A huge Cosmic Gorilla came out larger than a smaller Cosmic Gorilla from the same kind of egg.",
    hatch:
      "Eggs hatch on a timer. Grow All and Instant Grow can skip it. The tutorial chicken hatched in about 3 seconds. Bigger eggs take minutes. Egg size tracks pet size — skip tinies once you can finish a 2–3× body.",
    hatchedTitle: "Hatches from gameplay (not on our Index photo)",
    hatchedNote:
      "Spoken or on-screen during a 2026 recording. Useful as a name list. Not Index tiles, not incomes, not a rarity table.",
    hatchedRows: [
      { name: "King Mammoth", seen: "Steal prompt", notes: "Prompt on an elephant. Not on the photographed Index." },
      { name: "Cosmic Gorilla", seen: "Hatch", notes: "Normal and a much larger huge version. One huge hatch showed about $4.6M/s." },
      { name: "Legendary Golden Cosmic Gecko", seen: "Hatch", notes: "Legendary + gold + Cosmic on one label." },
      { name: "Golden Centipede", seen: "Hatch", notes: "Gold coat." },
      { name: "Bronto", seen: "Hatch", notes: "Voice called it bronto / bronco." },
      { name: "Silver Crocodile", seen: "Hatch", notes: "Silver coat." },
      { name: "Sand Spider", seen: "Hatch", notes: "Hatch name." },
      { name: "Saber-tooth tiger", seen: "Hatch", notes: "Shop/brainrot pool can still mix in." },
      { name: "Flaming Bull", seen: "Hatch", notes: "Hatch name." },
      { name: "Yeti", seen: "Chase + hatch", notes: "Snow pocket. Name from gameplay, not Index photo." },
      { name: "Limited eggs", seen: "Index UI", notes: "Visible in Index. How to get them was not shown." },
    ],
    otherTitle: "Egg names on other wikis (unverified)",
    otherNote:
      "steal-an-egg-wiki.wiki homepage lists Starter / Nest / Golden / Mythic / Rainbow. Their exclusive-pets article adds shop-style egg SKUs with coin prices. None of those labels are on the Index we photographed.",
    otherRows: [
      { name: "Starter Egg", wiki: "Homepage: Common, first hatch" },
      { name: "Nest Egg", wiki: "Homepage: Rare, nests and pets" },
      { name: "Golden Egg", wiki: "Homepage: Epic, rare spawns" },
      { name: "Mythic Egg", wiki: "Homepage: five-minute race" },
      { name: "Rainbow Egg", wiki: "Homepage: Legendary, events / deep biomes" },
      { name: "Basic Egg", wiki: "Exclusive-pets article. Unverified shop SKU." },
      { name: "Uncommon Egg", wiki: "Uncommon-pets article hatch pool." },
      { name: "Rare Egg / Epic Egg", wiki: "Article hatch pools. Not Index rows." },
      { name: "Event Egg", wiki: "Exclusive-pets: limited window. Unverified." },
      { name: "Guardian Egg", wiki: "Exclusive-pets: boss spawn. Unverified." },
      { name: "Mutation Egg", wiki: "Exclusive-pets: guaranteed mutation. Unverified." },
    ],
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "What counts as all eggs in Steal An Egg?",
          a: "All eggs includes biome and nest eggs, player steals, shop eggs, reset-event rares, and huge or giant versions. The Pet Index confirms hatches, not every egg source.",
        },
        {
          q: "Are shop eggs part of the Pet Index?",
          a: "Not automatically. A shop egg belongs in the Index only after its hatch is visible as a collected pet or a clear gameplay label.",
        },
        {
          q: "Is there a guaranteed huge egg timer?",
          a: "No guaranteed timer is published here. Gameplay shows short reset rhythms and event scrambles, but not a guaranteed huge egg every fixed number of hours.",
        },
        {
          q: "Does Update #1 add a Dragon Egg?",
          a: "Not confirmed. Dragon Admin Abuse is still named on the Roblox event list, but this page does not invent a Dragon Egg. Cherry Blossom Eggs are named in Update #1 live notes for the Crane unlock.",
        },
        {
          q: "What is a Cherry Blossom Egg?",
          a: "Update #1 notes: hatch a Crane from a Cherry Blossom Egg to start the Sakura Incubator unlock. Exact nest locations and odds are not photographed here.",
        },
      ],
    },
  },
  biomes: {
    h2: "Biomes",
    teaser:
      "Speed unlocks the next zone. Forest and Lake are Index labels. Cherry Blossom is named in Update #1 live notes.",
    pageH1: "Steal An Egg biomes — Forest to Cherry Blossom",
    dek: "Map: Forest, Lake, Desert, Jungle, Yeti/ice, Volcano, Abyss Ocean, Prehistoric, Cosmic King, plus Cherry Blossom from Update #1 notes. Speed gates still unpublished.",
    lead:
      "Steal An Egg biomes: Forest, Lake, Desert, Jungle, Yeti/ice pocket, Volcano, Abyss Ocean, Prehistoric, Cosmic King, and Cherry Blossom (Update #1 notes, checked 2026-08-25). Zones sit behind Speed. Cherry Blossom Speed gate is not verified on this kit.",
    updateTitle: "Update #1 — Cherry Blossom status",
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "How many biomes does Steal An Egg have?",
          a: "This kit lists Forest through Cosmic King from Index photos and gameplay, plus Cherry Blossom from Update #1 live notes.",
        },
        {
          q: "Is there a Speed number for each gate?",
          a: "No live Recommended Speed ladder is published here. Gates exist and get steep in later biomes; exact numbers rot quickly.",
        },
        {
          q: "What is the Cherry Blossom Biome?",
          a: "Update #1’s new zone. Notes list eight pets from Crane to Kitsune, a Sakura Incubator unlock, and The Great Bloom event. Speed gate details stay blank here.",
        },
      ],
    },
    updateBody:
      "Update #1 live notes name Cherry Blossom Biome. It is on the map list below as a reported zone. Speed gate, egg nest layout, and Index tiles for the eight pets are not photographed on this kit yet.",
    updateRows: [
      {
        claim: "New zone name",
        status: "Reported live",
        evidence: "Update #1 notes: Cherry Blossom Biome.",
      },
      {
        claim: "Eight biome pets + rarities",
        status: "Reported live",
        evidence:
          "Crane Epic → Kitsune Divine in the notes. Income/second blank on the pets page.",
      },
      {
        claim: "Speed gate and route",
        status: "Not verified",
        evidence: "No Recommended Speed screenshot for Cherry Blossom on this kit yet.",
      },
      {
        claim: "Sakura Incubator + Great Bloom",
        status: "Reported live",
        evidence:
          "Notes: Crane unlock path; Great Bloom about every 30 minutes with Sakura Crystal Trees.",
      },
    ],
    videoH2: "Later biomes on video",
    videoCaption:
      "CoralBlox recorded later biomes after Forest and Lake. Treat it as a later-game run, not a Speed table and not a Cherry Blossom walkthrough.",
    otherNote:
      "steal-an-egg-wiki.wiki collapses the map into First / Desert / Snow / Ocean / Endgame, then other articles invent Sandy Expanse, Frozen Peaks, Volcanic Depths, Sky Gardens, Cave, Tundra, and Crystal Caverns. We keep Forest → Cosmic King from Index + recordings, plus Cherry Blossom from Update #1 notes.",
    otherRows: [
      { name: "First / starting zone", wiki: "Their C-tier starter" },
      { name: "Desert / Sandy Expanse", wiki: "Their Speed tier 1. We do have Desert in gameplay." },
      { name: "Snow / Frozen Peaks / Tundra", wiki: "Three snow names across their pages." },
      { name: "Ocean", wiki: "Their Speed tier 3. Loose overlap with Abyss Ocean." },
      { name: "Volcanic Depths", wiki: "Loose overlap with our Volcano." },
      { name: "Cave / Crystal Caverns", wiki: "Not on our run map." },
      { name: "Sky Gardens", wiki: "Not on our run map." },
      { name: "Endgame", wiki: "Their max-Speed bucket. We name Cosmic King." },
      { name: "Cherry Blossom", wiki: "Update #1 notes on this kit — not from that wiki collapse." },
    ],
  },
  mutations: {
    h2: "Mutations & sizes",
    teaser:
      "Official description lists rarities, sizes, and mutations. Gameplay shows gold and silver coats. Update #1 notes add Bloom and Spirit Bloom via the Sakura Incubator.",
    pageH1: "Steal An Egg mutations — gold, silver, Bloom, Spirit Bloom",
    dek: "Gold and silver coats, huge and giant egg sizes, Legendary hatch labels, plus Bloom and Spirit Bloom from Update #1 Cherry Blossom notes. Odds and multipliers stay blank.",
    lead:
      "Steal An Egg mutations checked August 25, 2026: gameplay still shows gold and silver variants, huge and giant egg sizes, and Legendary hatch labels. Update #1 live notes add Bloom Mutation and Spirit Bloom Mutation (described as extremely rare) after unlocking the Sakura Incubator. No odds or sell multipliers are published here.",
    updateTitle: "Update #1 — Bloom mutations",
    updateBody:
      "Reported unlock: hatch a Crane from a Cherry Blossom Egg, bring it to the ancient Sakura tree, restore the tree to unlock Bloom and Spirit Bloom. During The Great Bloom (~every 30 minutes), deposit Sakura Crystals into the incubator to mutate eggs. Crystal costs, odds, and value multipliers stay blank until the UI prints them.",
    matrixTitle: "Mutation vs size vs rarity",
    matrixRows: [
      {
        label: "Gold / Golden",
        category: "Mutation or coat",
        evidence: "Gameplay showed gold Chicken plus gold gecko / centipede hatches.",
        status: "Seen in gameplay",
      },
      {
        label: "Silver",
        category: "Mutation or coat",
        evidence: "Gameplay showed a silver crocodile hatch.",
        status: "Seen in gameplay",
      },
      {
        label: "Huge / Giant",
        category: "Egg size",
        evidence: "Large carried eggs appeared in live steals; a huge Cosmic Gorilla hatched larger than a smaller one.",
        status: "Seen in gameplay",
      },
      {
        label: "Legendary",
        category: "Rarity label",
        evidence: "One hatch label read Legendary Golden Cosmic Gecko.",
        status: "Seen in gameplay",
      },
      {
        label: "Bloom",
        category: "Update #1 mutation",
        evidence: "Update #1 notes: unlocked after restoring the Sakura tree with a Crane.",
        status: "Reported live",
      },
      {
        label: "Spirit Bloom",
        category: "Update #1 mutation",
        evidence: "Update #1 notes: extremely rare Bloom variant. Odds blank here.",
        status: "Reported live",
      },
      {
        label: "Shiny / Rainbow / Crystal",
        category: "Other-wiki labels",
        evidence: "External wiki pages use these words, but this kit has not seen them on a hatch or Index panel.",
        status: "Unverified",
      },
    ],
    confirmed: [
      "Official description: pets have rarities, sizes, and mutations.",
      "Index tile colors in Forest run white → green → blue → purple → pink → gold. Only white is labeled Common so far.",
      "Gameplay showed gold Chicken, gold gecko / centipede, and silver crocodile — treat gold / silver as a coat, not a zone.",
      "Huge and giant showed up as egg size in a live steal, not as a separate catalog name.",
      "Legendary appeared on a hatch label (Legendary Golden Cosmic Gecko).",
      "Update #1 notes name Bloom and Spirit Bloom after the Sakura Incubator unlock — not Index-verified on this kit yet.",
    ],
    actionTitle: "What to record before trusting a mutation claim",
    actions: [
      "Screenshot the hatch label and the pet card together when possible.",
      "For Bloom / Spirit Bloom, record whether the label appears on the egg, the incubator UI, or the hatched pet.",
      "Do not copy drop odds unless the game UI or a developer-owned source prints them.",
      "Keep huge and giant under egg size until a separate mutation panel says otherwise.",
    ],
    otherTitle: "Labels other wikis use (unverified odds)",
    otherRows: [
      { name: "Shiny", wiki: "Rare recolor / value boost" },
      { name: "Rainbow", wiki: "Event / mutation label" },
      { name: "Crystal", wiki: "King Mammoth article: +35% defense. Unverified." },
      {
        name: "Divine (trail vs pet)",
        wiki: "Paid Divine Trail exists. Kitsune is listed as Divine rarity in Update #1 notes — different claim.",
      },
    ],
    otherNote:
      "Huge / Giant / Golden are no longer “other wiki only.” Bloom / Spirit Bloom come from Update #1 notes. Remaining wiki words still disagree. No drop rates belong here until the Index or a developer post prints them.",
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "What mutations are confirmed in Steal An Egg?",
          a: "Gold or Golden and Silver variants are seen in gameplay. Bloom and Spirit Bloom are named in Update #1 live notes via the Sakura Incubator path.",
        },
        {
          q: "Are Huge and Giant mutations?",
          a: "This kit treats Huge and Giant as egg sizes because gameplay shows them on carried eggs and hatch size, not as a separate mutation catalog.",
        },
        {
          q: "What are the mutation odds in Steal An Egg?",
          a: "No odds are published here — including Bloom / Spirit Bloom.",
        },
        {
          q: "What is Bloom and Spirit Bloom?",
          a: "Update #1 mutations unlocked after hatching a Crane, restoring the Sakura tree, then using The Great Bloom crystal path. Spirit Bloom is described as extremely rare. Multipliers stay blank.",
        },
        {
          q: "Are Shiny, Rainbow, or Crystal confirmed?",
          a: "Not on this kit. Other wiki pages use those labels, but they stay unverified until they appear in-game or in a developer-owned source.",
        },
      ],
    },
  },
  codes: {
    h2: "Codes",
    body: "There is no confirmed redeem UI and no working code list as of 2026-08-15. Other sites that title a page “redeem free rewards” still say the same thing in the FAQ. If a code box ships later, this page will say so. Do not trust random code dumps.",
  },
  pets: {
    h2: "Pets",
    body: "Full Steal An Egg pets list with rarity, biome, and income per second — from Forest starters through Cosmic and limited Brainrot eggs.",
    fillFaster: {
      h2: "How to collect pets faster",
      intro:
        "There is no cheat list. Progress is Speed, delivery, and which eggs you contest.",
      steps: [
        "Train on the base treadmill so later biomes open and you can outrun a steal.",
        "Upgrade the pen so you can keep more pets after they hatch.",
        "Steal from nests, biome animals, and other players’ bases. The pet only sticks if the egg makes it home and hatches.",
        "When egg reset or a Secret / Eternal / Cosmic alert fires, leave the treadmill. Bigger eggs in later zones are the usual high-value contests.",
      ],
      skip:
        "We do not publish an S-tier ranking. Huge eggs in the reset scramble are a size, not a timer. Blank income cells stay blank — we do not invent pay rates.",
    },
    pageH1: "Steal An Egg pets list — rarity, biome, income",
    dek: "Every listed egg pet with rarity, biome, and income per second. Forest starters through Cosmic, Cherry Blossom (Update #1 notes), and limited Brainrot eggs.",
    lead:
      "Steal An Egg pets hatch from eggs and pay coins every second. This list covers the published roster with rarity, biome, and income/second — Chicken at $1/s up through high earners like Cerberus at $8M/s — plus eight Cherry Blossom pets from Update #1 notes with rarity filled and income blank. Snow is the cold / Yeti area; Cosmic is Cosmic King; Cherry Blossom is Update #1; Brainrot covers limited eggs.",
    tableNote:
      "Income is per second (/s). Some later pets — including all Cherry Blossom rows — still have no published income; those cells are — on purpose, not omitted by mistake.",
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "How many pets are in Steal An Egg?",
          a: "Public lists put the older roster around 78 egg pets across Forest through Cosmic, plus limited Brainrot eggs. This page also adds eight Cherry Blossom pets from Update #1 notes.",
        },
        {
          q: "Why are some income cells blank?",
          a: "Those pets do not have a published income/second figure yet. Cherry Blossom pets stay — until a published table or Index panel exists.",
        },
        {
          q: "What does income/second mean?",
          a: "Equipped pets generate coins over time. Examples on this list: Chicken $1/s, Fox $180/s, King Mammoth $400K/s, Cerberus $8M/s.",
        },
        {
          q: "What pets are in Cherry Blossom?",
          a: "Update #1 notes: Crane (Epic), Salamander (Legendary), Red Panda (Mythic), Snow Owl (Cosmic), Koi (Cosmic), Stag (Secret), Oni Tiger (Eternal), Kitsune (Divine).",
        },
      ],
    },
    linkLabel: "Open the Steal An Egg pets list →",
    rosterTitle: "All eggs and pets",
    rosterNote:
      "Roster columns: Egg/Pet, Rarity, Biome, Income/Second. Older rows cross-checked 2026-08-21 against Beebom. Cherry Blossom rows added 2026-08-25 from Update #1 live notes (rarity only; income blank). Spelling quirks (Centapede, Tob Tobi Tob Tob, Tralaledon) stay as published.",
    rosterSkip:
      "Not listed: steal-power, drop rates, ability text, S-tier rankings, or made-up income for blank cells.",
    rarityTitle: "Rarity words on the list",
    rarityRows: [
      { name: "Common → Epic", status: "On the list", note: "Early biomes use Common, Uncommon, Rare, Epic." },
      {
        name: "Legendary / Mythic / Secret / Cosmic",
        status: "On the list + heard in-game",
        note: "Later biomes and rare-egg alerts use these labels.",
      },
      {
        name: "Eternal",
        status: "On the list (Update #1)",
        note: "Oni Tiger is listed as Eternal in Cherry Blossom notes.",
      },
      {
        name: "Divine",
        status: "Pet rarity + shop trail",
        note: "Kitsune is listed as Divine in Update #1 notes. A paid Divine Trail also exists — do not mix the two claims.",
      },
    ],
    indexTitle: "Index spot-check (optional)",
    indexNote:
      "Opening the in-game Index detail panel showed Chicken as Common at $1/s — same as the Chicken row above. Other Index tiles were not opened for stats in that snapshot.",
    factoryTitle: "Names from an older fan wiki that look like the wrong game",
    factoryNote:
      "steal-an-egg-wiki.wiki pet-value copy slips into Adopt Me language (Neon, Mega Neon). Listed so you do not hunt them here.",
    factoryRows: [
      { name: "Neon Dragon / Mega Neon Dragon", wiki: "Pet-value page" },
      { name: "Galaxy Fox", wiki: "Pet-value page" },
      { name: "Crystal Owl", wiki: "Pet-value page" },
      { name: "Golden Griffin", wiki: "Pet-value page" },
    ],
    otherSkip:
      "Also not copied as facts: invented 1x–32x income ladders, steal-power numbers, Stomp Guard, hatch costs, luck potions, a player trading market, and Cave / Sky Gardens biomes from older fan pages.",
  },
  speed: {
    h2: "Speed",
    teaser:
      "Speed is the gate for later biomes and for surviving a steal. Unlock the treadmill, train on it, then stack trails. We do not publish upgrade prices.",
    pageH1: "Steal An Egg Speed",
    dek: "How Speed works in Steal An Egg: unlock the treadmill, trails, pen, egg reset, and settings. No price ladder — those numbers rot.",
    lead:
      "Speed unlocks later biomes and keeps a steal alive. Train on the treadmill, stack trails, upgrade the pen, then leave for egg reset. No live price ladder — those numbers rot.",
    videoH2: "Watch Speed training on video",
    videoCaption:
      "SpaceQT walks through treadmill training, trails, pen upgrades, and leaving for egg reset on an English client. Unofficial tips — not a live price ladder or a verified gate table.",
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "How do I raise Speed in Steal An Egg?",
          a: "Unlock the base treadmill and train on it. Trails and paid multipliers can stack on top. Exact shop prices are not published here.",
        },
        {
          q: "Why does Speed matter?",
          a: "Later biomes sit behind Speed gates, and you need Speed to finish a steal before a chase or another player takes the egg.",
        },
      ],
    },
    sections: [
      {
        h3: "Treadmill",
        body: "The treadmill is an unlock, not a freebie on every new base. Train Speed there. Movement Speed is how you reach later biomes and how you keep an egg after a steal. The treadmill can play short videos (with comments) while you run. Settings can shut the video off; one clip still struggled to leave the overlay.",
      },
      {
        h3: "Trails",
        body: "A Trail shop sells Speed multipliers on top of treadmill Speed. Footage showed ×7, ×10, and ×14 trails, plus a paid Divine Trail. Treat those as examples, not a live shop list. We are not listing Robux bundles.",
      },
      {
        h3: "Pen",
        body: "Upgrade the pet pen to equip more pets. The pen can fill — unequip low earners or buy more slots. Index has Equip Best. One paid run upgraded around 1 million coins early and 1 billion later. Late-game upgrades sit much higher. We will not publish a step-by-step cost table.",
      },
      {
        h3: "Paid multipliers",
        body: "Passes can include 2× Speed, 2× money, and 2× growth. Robux Speed packs exist. We do not publish live Robux prices.",
      },
      {
        h3: "Resets and raids",
        body: "The UI can say egg reset. Eggs refresh on a short cycle (about five minutes in late-game footage). A moon event also fired in the same session. When a Secret / Eternal / Cosmic egg is called, or a huge egg lands in the scramble, leave the treadmill.",
      },
      {
        h3: "Settings that matter",
        body: "Settings can disable treadmill videos, disable music, hide other players’ pets, and include a slow mode. Hiding pets helps with lag in busy servers. Slow mode is a control, not a Speed upgrade.",
      },
    ],
    willNot:
      "We will not publish treadmill upgrade prices, Robux pack prices, exact Recommended Speed per biome, or exploit lists. One recording showed a Recommended Speed gate on the order of 17 million, then about 700 million on the last cosmic wall, and a treadmill upgrade that added +80 Speed per step. Use that only as “it gets steep.”",
  },
  faq: {
    h2: "FAQ",
    items: [
      {
        q: "Is this Steal a Brainrot?",
        a: "No. Different developer, different units. Brainrot has a redeem panel. This game currently does not. Shop eggs here can still use brainrot-style names.",
      },
      {
        q: "Are there Steal An Egg codes?",
        a: "Not as of 2026-08-20. Update #1 has an official Roblox event page, but that is not a redeem-code announcement.",
      },
      {
        q: "When is Steal An Egg Update #1?",
        a: "Treated as live on this kit as of 2026-08-25. Notes name Cherry Blossom Biome, eight new pets, Sakura Incubator, Bloom / Spirit Bloom, and The Great Bloom. See /steal-an-egg/updates.",
      },
      {
        q: "How do you make money?",
        a: "Pets generate coins in $/s. Chicken, the first opened Index pet, pays $1/s. One huge Cosmic Gorilla hatch paid on the order of millions per second in a recording — that is one clip. Hatch, keep high earners, and expect carried eggs to get stolen.",
      },
      {
        q: "What Speed do I need?",
        a: "Enough to pass the Recommended Speed on the next biome. One recording showed a gate on the order of 17 million, then about 700 million on the last cosmic wall. Copying a YouTuber’s exact number is a bad plan — they also bought Speed packs.",
      },
      {
        q: "Where is the pet list?",
        a: "On /steal-an-egg/pets: rarity, biome, and income/second for the published roster. Blank income means no published figure yet.",
      },
      {
        q: "How do I collect pets?",
        a: "Steal an egg, get it home, hatch it, and keep the pet. Train Speed, upgrade the pen, and contest egg reset / Secret / Eternal / Cosmic alerts. Claim All and Equip Best are in the Index UI. Limited / Brainrot eggs are on the same pets list.",
      },
      {
        q: "Is there a guaranteed Huge egg every 3 hours?",
        a: "No clock like that showed in our recordings. Huge and giant are egg sizes. They do appear in the egg-reset scramble. Map refresh is still a short cycle (~5 minutes in late-game footage). A moon event also fires; it is not a published loot table.",
      },
      {
        q: "What is the best pet?",
        a: "We do not publish an S-tier. Use the income/second column on the pets page for published pay rates. Blank cells mean no figure is published yet.",
      },
      {
        q: "Is there rebirth?",
        a: "Other wikis have a Rebirth / 5th Rebirth guide. We have not seen a rebirth UI in the Index screenshot or in the recordings we used. No rebirth page until that UI exists.",
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

export const stealAnEggIndex = {
  total: 78,
  photographedUnlocked: 5,
  forestSeen: 4,
  forestTotal: 8,
  lakeSeen: 1,
  source: "In-game Pet Index screenshot, 2026-08-15.",
  rows: [
    {
      name: "Chicken",
      biome: "Forest",
      rarity: "Common",
      income: "$1/s",
      notes: "Detail panel opened.",
    },
    {
      name: "Bird",
      biome: "Forest",
      rarity: "—",
      income: "—",
      notes: "Name visible. Stats not opened.",
    },
    {
      name: "Owl",
      biome: "Forest",
      rarity: "—",
      income: "—",
      notes: "Name visible. Stats not opened.",
    },
    {
      name: "Raccoon",
      biome: "Forest",
      rarity: "—",
      income: "—",
      notes: "Name visible. Stats not opened.",
    },
    {
      name: "Frog",
      biome: "Lake",
      rarity: "—",
      income: "—",
      notes: "First Lake slot. Stats not opened.",
    },
  ],
} as const;

/** Beebom all-eggs table: Egg/Pet, Rarity, Biome, Income/Second. Blank cells stay —. */
export const stealAnEggPetsRoster = [
  { name: "Chicken", biome: "Forest", rarity: "Common", income: "$1/s" },
  { name: "Dog", biome: "Forest", rarity: "Common", income: "$2/s" },
  { name: "Bird", biome: "Forest", rarity: "Uncommon", income: "$8/s" },
  { name: "Owl", biome: "Forest", rarity: "Rare", income: "$35/s" },
  { name: "Raccoon", biome: "Forest", rarity: "Rare", income: "$45/s" },
  { name: "Fox", biome: "Forest", rarity: "Epic", income: "$180/s" },
  { name: "Brr Brr Patapim", biome: "Forest", rarity: "Legendary", income: "$1.8K/s" },
  { name: "Frog", biome: "Lake", rarity: "Common", income: "$3/s" },
  { name: "Duckling", biome: "Lake", rarity: "—", income: "—" },
  { name: "Catfish", biome: "Lake", rarity: "Uncommon", income: "$12/s" },
  { name: "Turtle", biome: "Lake", rarity: "Rare", income: "$60/s" },
  { name: "Trulimero Trulicina", biome: "Lake", rarity: "Epic", income: "$260/s" },
  { name: "Swan", biome: "Lake", rarity: "—", income: "—" },
  { name: "Axolotl", biome: "Lake", rarity: "—", income: "—" },
  { name: "Leviathan", biome: "Lake", rarity: "—", income: "—" },
  { name: "Jerboa", biome: "Desert", rarity: "Common", income: "$6/s" },
  { name: "Fennec", biome: "Desert", rarity: "—", income: "—" },
  { name: "Camel", biome: "Desert", rarity: "Rare", income: "$75/s" },
  { name: "Tob Tobi Tob Tob", biome: "Desert", rarity: "—", income: "—" },
  { name: "Snake", biome: "Desert", rarity: "—", income: "—" },
  { name: "Scorpion", biome: "Desert", rarity: "—", income: "—" },
  { name: "Sand Spider", biome: "Desert", rarity: "Mythic", income: "$16K/s" },
  { name: "Royal Sphinx", biome: "Desert", rarity: "—", income: "—" },
  { name: "Toucan", biome: "Jungle", rarity: "Rare", income: "$110/s" },
  { name: "Chimpanzee", biome: "Jungle", rarity: "Rare", income: "$90/s" },
  { name: "Crocodile", biome: "Jungle", rarity: "Epic", income: "$420/s" },
  { name: "Gorilla", biome: "Jungle", rarity: "Legendary", income: "$4.8K/s" },
  { name: "Orangutini Ananassini", biome: "Jungle", rarity: "Legendary", income: "$5.5K/s" },
  { name: "Spider", biome: "Jungle", rarity: "Mythic", income: "$22K/s" },
  { name: "Tiger", biome: "Jungle", rarity: "—", income: "—" },
  { name: "King Snake", biome: "Jungle", rarity: "—", income: "—" },
  { name: "Penguin", biome: "Snow", rarity: "—", income: "—" },
  { name: "Walrus", biome: "Snow", rarity: "Epic", income: "$600/s" },
  { name: "Polar Bear", biome: "Snow", rarity: "Legendary", income: "$7K/s" },
  { name: "Sabertooth Tiger", biome: "Snow", rarity: "Mythic", income: "$35K/s" },
  { name: "Mammoth", biome: "Snow", rarity: "Mythic", income: "$42K/s" },
  { name: "King Mammoth", biome: "Snow", rarity: "Cosmic", income: "$400K/s" },
  { name: "Yeti", biome: "Snow", rarity: "—", income: "—" },
  { name: "Ice Dragon", biome: "Snow", rarity: "—", income: "—" },
  { name: "Lava Gecko", biome: "Volcano", rarity: "—", income: "—" },
  { name: "Lava Frog", biome: "Volcano", rarity: "Epic", income: "$850/s" },
  { name: "Flaming Bull", biome: "Volcano", rarity: "Legendary", income: "$9.5K/s" },
  { name: "Lava Iguana", biome: "Volcano", rarity: "Legendary", income: "$11K/s" },
  { name: "Chillin Chilli", biome: "Volcano", rarity: "Mythic", income: "$55K/s" },
  { name: "Cerberus", biome: "Volcano", rarity: "Secret", income: "$8M/s" },
  { name: "Phoenix", biome: "Volcano", rarity: "—", income: "—" },
  { name: "Lava Dragon", biome: "Volcano", rarity: "—", income: "—" },
  { name: "Parrotfish", biome: "Abyss Ocean", rarity: "Rare", income: "$220/s" },
  { name: "Swordfish", biome: "Abyss Ocean", rarity: "Epic", income: "$1.1K/s" },
  { name: "Shark", biome: "Abyss Ocean", rarity: "Legendary", income: "$15K/s" },
  { name: "Orca", biome: "Abyss Ocean", rarity: "Mythic", income: "$80K/s" },
  { name: "Whale Shark", biome: "Abyss Ocean", rarity: "Cosmic", income: "$700K/s" },
  { name: "Beluga Whale", biome: "Abyss Ocean", rarity: "Cosmic", income: "$850K/s" },
  { name: "Kraken", biome: "Abyss Ocean", rarity: "—", income: "—" },
  { name: "El Maja", biome: "Abyss Ocean", rarity: "—", income: "—" },
  { name: "Dodo", biome: "Prehistoric", rarity: "—", income: "—" },
  { name: "Pterodactyl", biome: "Prehistoric", rarity: "—", income: "—" },
  { name: "Ankylosaurus", biome: "Prehistoric", rarity: "Mythic", income: "$120K/s" },
  { name: "Triceratops", biome: "Prehistoric", rarity: "—", income: "—" },
  { name: "Bronto", biome: "Prehistoric", rarity: "Cosmic", income: "$1.5M/s" },
  { name: "Tralaledon", biome: "Prehistoric", rarity: "—", income: "—" },
  { name: "TRex", biome: "Prehistoric", rarity: "—", income: "—" },
  { name: "Mosasaurus", biome: "Prehistoric", rarity: "—", income: "—" },
  { name: "Centapede", biome: "Cosmic", rarity: "—", income: "—" },
  { name: "Cosmic Gecko", biome: "Cosmic", rarity: "—", income: "—" },
  { name: "Cosmic Gorilla", biome: "Cosmic", rarity: "—", income: "—" },
  { name: "La Vacca Saturno Saturnita", biome: "Cosmic", rarity: "—", income: "—" },
  { name: "Cosmic Dragon", biome: "Cosmic", rarity: "—", income: "—" },
  { name: "Cosmic Skeleton Boss", biome: "Cosmic", rarity: "—", income: "—" },
  { name: "Eternal Lunar Dragon", biome: "Cosmic", rarity: "—", income: "—" },
  { name: "Unicorn", biome: "Cosmic", rarity: "—", income: "—" },
  { name: "Crane", biome: "Cherry Blossom", rarity: "Epic", income: "—" },
  { name: "Salamander", biome: "Cherry Blossom", rarity: "Legendary", income: "—" },
  { name: "Red Panda", biome: "Cherry Blossom", rarity: "Mythic", income: "—" },
  { name: "Snow Owl", biome: "Cherry Blossom", rarity: "Cosmic", income: "—" },
  { name: "Koi", biome: "Cherry Blossom", rarity: "Cosmic", income: "—" },
  { name: "Stag", biome: "Cherry Blossom", rarity: "Secret", income: "—" },
  { name: "Oni Tiger", biome: "Cherry Blossom", rarity: "Eternal", income: "—" },
  { name: "Kitsune", biome: "Cherry Blossom", rarity: "Divine", income: "—" },
  { name: "Tung Tung Sahur", biome: "Brainrot", rarity: "—", income: "—" },
  { name: "Bananita Dolphinita", biome: "Brainrot", rarity: "—", income: "—" },
  { name: "Belula Beluga", biome: "Brainrot", rarity: "—", income: "—" },
  { name: "Mangolini Parrochini", biome: "Brainrot", rarity: "—", income: "—" },
  { name: "Bomboclat Crocolat", biome: "Brainrot", rarity: "—", income: "—" },
  { name: "Strawberry Elephant", biome: "Brainrot", rarity: "—", income: "—" },
] as const;


export const stealAnEggNav = [
  {
    id: "guide" as const,
    href: stealAnEgg.path,
    label: stealAnEggCopy.nav.guide,
  },
  {
    id: "updates" as const,
    href: `${stealAnEgg.path}/updates`,
    label: stealAnEggCopy.nav.updates,
  },
  {
    id: "pets" as const,
    href: `${stealAnEgg.path}/pets`,
    label: stealAnEggCopy.nav.pets,
  },
  {
    id: "eggs" as const,
    href: `${stealAnEgg.path}/eggs`,
    label: stealAnEggCopy.nav.eggs,
  },
  {
    id: "biomes" as const,
    href: `${stealAnEgg.path}/biomes`,
    label: stealAnEggCopy.nav.biomes,
  },
  {
    id: "mutations" as const,
    href: `${stealAnEgg.path}/mutations`,
    label: stealAnEggCopy.nav.mutations,
  },
  {
    id: "speed" as const,
    href: `${stealAnEgg.path}/speed`,
    label: stealAnEggCopy.nav.speed,
  },
] as const;

export const stealAnEggCanonical = absoluteUrl(stealAnEgg.path);

export const stealAnEggMetadata = pageMetadata(
  stealAnEggCopy.title,
  stealAnEggCopy.metaDescription,
  stealAnEgg.path,
);

export const stealAnEggUpdatesMetadata = pageMetadata(
  stealAnEggCopy.updates.pageH1,
  "Steal An Egg Update #1: Cherry Blossom Biome, eight new pets, Sakura Incubator, Bloom / Spirit Bloom, The Great Bloom. Speed gates and $/s still blank.",
  `${stealAnEgg.path}/updates`,
);

export const stealAnEggPetsMetadata = pageMetadata(
  stealAnEggCopy.pets.pageH1,
  "Steal An Egg pets list with rarity, biome, and income/second — plus Cherry Blossom roster from Update #1 notes. Blank income means no published figure yet.",
  `${stealAnEgg.path}/pets`,
);

export const stealAnEggSpeedMetadata = pageMetadata(
  "Steal An Egg Speed — treadmill, trails, gates",
  "Speed unlocks later biomes and keeps a steal alive: treadmill, trails, pen, egg reset, settings. No live price ladder.",
  `${stealAnEgg.path}/speed`,
);

export const stealAnEggEggsMetadata = pageMetadata(
  stealAnEggCopy.eggs.pageH1,
  "Eggs from nests, biome pets, steals, shop, reset races. Update #1: Cherry Blossom Egg and Sakura Crystal mutate path from live notes.",
  `${stealAnEgg.path}/eggs`,
);

export const stealAnEggBiomesMetadata = pageMetadata(
  stealAnEggCopy.biomes.pageH1,
  "Steal An Egg biomes: Forest through Cosmic King, plus Cherry Blossom from Update #1 notes. Speed gates unpublished.",
  `${stealAnEgg.path}/biomes`,
);

export const stealAnEggMutationsMetadata = pageMetadata(
  stealAnEggCopy.mutations.pageH1,
  "Steal An Egg mutations: gold and silver coats, huge and giant sizes, Bloom and Spirit Bloom from Update #1 Sakura Incubator notes.",
  `${stealAnEgg.path}/mutations`,
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

function stealPageGraph({
  path,
  name,
  description,
  dateModified,
  faqItems,
  extra,
}: {
  path: string;
  name: string;
  description: string;
  dateModified: string;
  faqItems?: readonly { readonly q: string; readonly a: string }[];
  extra?: readonly Record<string, unknown>[];
}) {
  const url = absoluteUrl(path);
  const crumbLabel =
    path === stealAnEgg.path
      ? null
      : path.split("/").filter(Boolean).slice(-1)[0];
  const crumbName =
    crumbLabel === "updates"
      ? "Updates"
      : crumbLabel === "pets"
        ? "Pets"
        : crumbLabel === "eggs"
          ? "Eggs"
          : crumbLabel === "biomes"
            ? "Biomes"
            : crumbLabel === "mutations"
              ? "Mutations"
              : crumbLabel === "speed"
                ? "Speed"
                : name;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": url,
      name,
      url,
      description,
      dateModified,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: absoluteUrl("/"),
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
    },
  ];

  if (faqItems?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqEntities(faqItems),
    });
  }

  if (extra?.length) {
    graph.push(...extra);
  }

  graph.push(
    path === stealAnEgg.path
      ? breadcrumbs([{ name: stealAnEgg.name, path: stealAnEgg.path }])
      : breadcrumbs([
          { name: stealAnEgg.name, path: stealAnEgg.path },
          { name: crumbName, path },
        ]),
  );

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function stealAnEggJsonLd() {
  return stealPageGraph({
    path: stealAnEgg.path,
    name: stealAnEggCopy.title,
    description: stealAnEggCopy.metaDescription,
    dateModified: stealAnEggPageLastChecked.guide,
    faqItems: stealAnEggCopy.faq.items,
    extra: [
      {
        "@type": "Event",
        "@id": `${stealAnEggCanonical}#update-1-event`,
        name: "Steal An Egg Update #1",
        url: stealAnEggCopy.update1.eventUrl,
        startDate: "2026-08-22T23:00:00+08:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        description: stealAnEggCopy.update1.lead,
        location: {
          "@type": "VirtualLocation",
          url: stealAnEggCopy.update1.eventUrl,
        },
        about: {
          "@type": "VideoGame",
          name: stealAnEgg.name,
          url: stealAnEgg.playUrl,
          gamePlatform: "Roblox",
        },
      },
    ],
  });
}

export function stealAnEggUpdatesJsonLd() {
  return stealPageGraph({
    path: `${stealAnEgg.path}/updates`,
    name: stealAnEggCopy.updates.pageH1,
    description: String(stealAnEggUpdatesMetadata.description ?? ""),
    dateModified: stealAnEggPageLastChecked.updates,
    faqItems: stealAnEggCopy.updates.faq.items,
    extra: [
      {
        "@type": "Event",
        "@id": `${absoluteUrl(`${stealAnEgg.path}/updates`)}#update-1-event`,
        name: "Steal An Egg Update #1",
        url: stealAnEggCopy.update1.eventUrl,
        startDate: "2026-08-22T23:00:00+08:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        description: stealAnEggCopy.update1.lead,
        location: {
          "@type": "VirtualLocation",
          url: stealAnEggCopy.update1.eventUrl,
        },
        about: {
          "@type": "VideoGame",
          name: stealAnEgg.name,
          url: stealAnEgg.playUrl,
          gamePlatform: "Roblox",
        },
      },
    ],
  });
}

export function stealAnEggEggsJsonLd() {
  return stealPageGraph({
    path: `${stealAnEgg.path}/eggs`,
    name: stealAnEggCopy.eggs.pageH1,
    description: String(stealAnEggEggsMetadata.description ?? ""),
    dateModified: stealAnEggPageLastChecked.eggs,
    faqItems: stealAnEggCopy.eggs.faq.items,
  });
}

export function stealAnEggPetsJsonLd() {
  return stealPageGraph({
    path: `${stealAnEgg.path}/pets`,
    name: stealAnEggCopy.pets.pageH1,
    description: String(stealAnEggPetsMetadata.description ?? ""),
    dateModified: stealAnEggPageLastChecked.pets,
    faqItems: stealAnEggCopy.pets.faq.items,
  });
}

export function stealAnEggBiomesJsonLd() {
  return stealPageGraph({
    path: `${stealAnEgg.path}/biomes`,
    name: stealAnEggCopy.biomes.pageH1,
    description: String(stealAnEggBiomesMetadata.description ?? ""),
    dateModified: stealAnEggPageLastChecked.biomes,
    faqItems: stealAnEggCopy.biomes.faq.items,
  });
}

export function stealAnEggMutationsJsonLd() {
  return stealPageGraph({
    path: `${stealAnEgg.path}/mutations`,
    name: stealAnEggCopy.mutations.pageH1,
    description: String(stealAnEggMutationsMetadata.description ?? ""),
    dateModified: stealAnEggPageLastChecked.mutations,
    faqItems: stealAnEggCopy.mutations.faq.items,
  });
}

export function stealAnEggSpeedJsonLd() {
  return stealPageGraph({
    path: `${stealAnEgg.path}/speed`,
    name: stealAnEggCopy.speed.pageH1,
    description: String(stealAnEggSpeedMetadata.description ?? ""),
    dateModified: stealAnEggPageLastChecked.speed,
    faqItems: stealAnEggCopy.speed.faq.items,
  });
}
