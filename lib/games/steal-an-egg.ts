import type { GameFacts } from "@/lib/games/types";
import { SITE_NAME, absoluteUrl, pageMetadata } from "@/lib/site";

export const stealAnEgg = {
  slug: "steal-an-egg",
  name: "Steal An Egg",
  developer: "and Collect Rare Pets",
  universeId: "10563114921",
  placeId: "107778070777162",
  playUrl: "https://www.roblox.com/games/107778070777162/Steal-An-Egg",
  lastChecked: "2026-08-30",
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
  guide: "2026-08-30",
  updates: "2026-08-30",
  pets: "2026-08-30",
  eggs: "2026-08-30",
  biomes: "2026-08-30",
  mutations: "2026-08-30",
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
  title: "Steal An Egg Update #2 — Titan Temple, Monster Egg, Hungry Frog",
  h1: "Steal An Egg (Roblox) — steal eggs, hatch pets, train Speed",
  dek: "Steal An Egg is a Roblox pet / tycoon by and Collect Rare Pets. This unofficial guide is not Steal a Brainrot and not the older game titled Steal a Egg.",
  metaDescription:
    "Unofficial Steal An Egg Roblox guide: Update #2 Titan Temple, Monster Egg, Hungry Frog, Monstrous mutation, pets, eggs, biomes, and Speed.",
  heroCta: "Play on Roblox",
  update2: {
    h2: "Update #2 — Titan Temple, Monster Egg, Hungry Frog",
    lead:
      "Steal An Egg Update #2 is treated as live on this kit as of 2026-08-30 from developer live notes titled “UPDATE #2 IS NOW LIVE - MONSTERS ARE HERE!” Notes name Titan Temple biome, eight new animals, a Robux-store Monster Egg, Hungry Frog parasite event, Monster Chests, and a limited-time Monstrous Mutation. Income, Speed gates, Mecha odds, and chest drop rates stay blank until this kit photographs them.",
    eventUrl: stealAnEgg.playUrl,
    eventLabel: "Open Steal An Egg on Roblox",
    sourceNote:
      "Source: developer Update #2 live notes checked 2026-08-30, plus the public Roblox experience page. Names and event steps are treated as reported live. This kit has not Index-photographed Titan Temple pets, Monster Egg hatches, Mecha variants, or Monstrous multipliers yet.",
    rows: [
      {
        item: "Titan Temple Biome",
        status: "Reported live",
        detail:
          "New biome from Update #2 notes with eight named animals. Speed gate and nest layout are not verified on this kit.",
      },
      {
        item: "Eight new animals",
        status: "Reported roster",
        detail:
          "Spideron, Crustacia, Bladehide, Mantaris, Rhinotaur, Mutant Shark, Gorilla King, Nightflame. Rarities from Legendary through Divine. Income/second not published here yet.",
      },
      {
        item: "Monster Egg",
        status: "Reported live (Robux Store)",
        detail:
          "Notes: available in the Robux Store; hatches 6 new monsters; every monster has a rare Mecha variant. Exact SKU price and the six monster names are not listed in the note we used.",
      },
      {
        item: "Hungry Frog event",
        status: "Reported live",
        detail:
          "Find an infected egg, bring it to base, feed its parasite to the Hungry Frog. Feed 5 parasites to earn a Monster Chest.",
      },
      {
        item: "Monstrous Mutation",
        status: "Reported limited-time",
        detail:
          "Monster Chests have a rare chance of the limited-time Monstrous Mutation for monsters from Titan Temple. Odds and multipliers are not published here.",
      },
      {
        item: "Mecha variant",
        status: "Reported rare variant",
        detail:
          "Every Monster Egg monster can hatch a rare Mecha variant. Not the same claim as Monstrous Mutation from Monster Chests.",
      },
    ],
  },
  update1: {
    h2: "Update #1 — Cherry Blossom, Sakura, mutations",
    lead:
      "Steal An Egg Update #1 is treated as live on this kit as of 2026-08-25. The official Roblox event title was “ADMIN ABUSE!? + New Zone - Steal An Egg.” Reported post-launch guides name the player route as Cherry Blossom Egg → Crane → Sakura Incubator → Great Bloom crystals → Bloom / Spirit Bloom mutation. Rates, crystal thresholds, and some income figures are still marked reported instead of verified.",
    eventUrl: "https://www.roblox.com/events/4073678192131572359",
    eventLabel: "Open the Roblox event page",
    sourceNote:
      "Roblox confirms the event shell. Cherry Blossom names, Sakura Incubator steps, pet income, and Bloom odds come from public post-launch guides checked 2026-08-25 to 2026-08-27. They are marked reported or community-reported until this kit has its own Index screenshots.",
    rows: [
      {
        item: "Cherry Blossom Biome",
        status: "Reported live",
        detail:
          "New biome from Update #1 notes. Speed gate and Recommended Speed are not verified on this kit.",
      },
      {
        item: "Eight new pets",
        status: "Reported roster",
        detail:
          "Crane, Salamander, Red Panda, Snowy Owl, Koi, Stag, Oni Tiger, Kitsune. Public rosters disagree on timing and completeness, so the pets page marks these as reported.",
      },
      {
        item: "Sakura Incubator",
        status: "Reported live",
        detail:
          "Notes: hatch a Crane from a Cherry Blossom Egg, bring it to the ancient Sakura tree, restore the tree to unlock Bloom mutations.",
      },
      {
        item: "Bloom / Spirit Bloom",
        status: "Community-reported rates",
        detail:
          "Two new mutations from the Sakura unlock path. Some guides report Bloom at 97.5% and Spirit Bloom at 2.5%; multipliers are not verified here.",
      },
      {
        item: "The Great Bloom",
        status: "Reported cadence",
        detail:
          "Reported about every 30 minutes for a short crystal-farming window. Use it to fill the Sakura Incubator and mutate eggs.",
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
        body: "Update #2 Titan Temple: Monster Egg, Hungry Frog, Monstrous mutation.",
      },
      {
        id: "pets",
        title: "Pets",
        body: "Pets list with rarity, biome, and income — including Titan Temple roster.",
      },
      {
        id: "eggs",
        title: "Eggs",
        body: "Nests, steals, Monster Egg, infected eggs, Hungry Frog chests.",
      },
      {
        id: "biomes",
        title: "Biomes",
        body: "Forest → Cosmic King, Cherry Blossom, plus Titan Temple from Update #2.",
      },
      {
        id: "mutations",
        title: "Mutations",
        body: "Gold / silver, Bloom / Spirit Bloom, Monstrous, Mecha variants.",
      },
      {
        id: "speed",
        title: "Speed",
        body: "Unlock the treadmill, trails, pen. No fake price table.",
      },
    ],
  },
  updates: {
    pageH1: "Steal An Egg Update #2 — Titan Temple, Monster Egg, Hungry Frog",
    dek: "Player route for Update #2: Titan Temple biome, Monster Egg, Hungry Frog parasites, Monster Chests, Monstrous mutation, and Mecha variants.",
    lead: "If you are searching what to do in Steal An Egg Update #2, the live notes say: explore Titan Temple for eight new animals, buy Monster Eggs from the Robux Store for six monsters (with rare Mecha variants), and run the Hungry Frog event — infected egg → feed parasites → Monster Chest → rare Monstrous Mutation on Titan Temple monsters. Names come from developer notes checked 2026-08-30; odds and incomes stay blank here.",
    quickTitle: "Fast answer for players",
    quickRows: [
      {
        question: "What changed in Update #2?",
        answer:
          "Titan Temple biome, eight new animals, Monster Egg (Robux Store), Hungry Frog parasite event, Monster Chests, Monstrous Mutation, and Mecha variants.",
      },
      {
        question: "What do I do first?",
        answer:
          "Reach Titan Temple when your Speed allows, then decide between biome steals and Robux Monster Eggs. For the event loop: find an infected egg, bring it home, feed the parasite to the Hungry Frog five times for a Monster Chest.",
      },
      {
        question: "What is still not verified?",
        answer:
          "Index screenshots for Titan Temple pets, the six Monster Egg monster names, Mecha / Monstrous odds, chest rates, and any Speed gate numbers.",
      },
    ],
    howTitle: "How to read this page",
    howBody:
      "Update #2 live notes name the biome, pets, store egg, and Hungry Frog loop. Update #1 Cherry Blossom / Sakura content stays below as still-live prior content. This kit waits on Index tiles or in-game screenshots before publishing $/s, gate numbers, or mutation odds.",
    frogTitle: "Hungry Frog event (reported)",
    frogSteps: [
      "Find an infected egg — notes say parasites attach to eggs across the world.",
      "Bring the infected egg back to your base.",
      "Feed its parasite to the Hungry Frog.",
      "Feed 5 parasites to earn a Monster Chest. Chests can rarely grant the limited-time Monstrous Mutation for Titan Temple monsters.",
    ],
    monsterTitle: "Monster Egg + Mecha (reported)",
    monsterBody:
      "Notes place the Monster Egg in the Robux Store. It hatches 6 new monsters, and every monster has a rare Mecha variant. Exact Robux price, the six names, and Mecha odds are not printed in the note used here.",
    sakuraTitle: "Still live from Update #1 — Sakura Incubator (reported)",
    sakuraSteps: [
      "Hatch a Crane pet from a Cherry Blossom Egg.",
      "Use the Crane at the ancient Sakura tree / Sakura Incubator in the Cherry Blossom Biome. Guides disagree on whether to call this offer or sacrifice, so check the live prompt.",
      "Farm Sakura Crystals during The Great Bloom and deposit them into the incubator to roll Bloom or Spirit Bloom on eggs.",
    ],
    bloomTitle: "The Great Bloom (reported, Update #1)",
    bloomBody:
      "Notes say The Great Bloom starts about every 30 minutes. Sakura Crystal Trees fill the Cherry Blossom Biome — break them, collect Sakura Crystals, and deposit crystals into the incubator to mutate eggs. Exact crystal costs and mutation odds are not published here.",
    notTitle: "What is still blank on purpose",
    notItems: [
      "Recommended Speed for Titan Temple, Cherry Blossom, and any other gate numbers.",
      "Official Index screenshots for Spideron through Nightflame, and for Monster Egg hatches.",
      "Mecha variant odds, Monstrous Mutation multipliers, and Monster Chest drop rates.",
      "Official Bloom / Spirit Bloom sell multipliers (Update #1 path still reported).",
    ],
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "Is Steal An Egg Update #2 live?",
          a: "Yes on this kit’s 2026-08-30 check of the developer live notes. They name Titan Temple, Monster Egg, Hungry Frog, Monster Chests, Monstrous Mutation, and Mecha variants.",
        },
        {
          q: "What is the new biome called?",
          a: "Titan Temple. Speed gate details are not verified here yet. Cherry Blossom from Update #1 remains on the map as a reported zone.",
        },
        {
          q: "What is the Monster Egg?",
          a: "A Robux Store egg from Update #2 notes. It hatches 6 new monsters, each with a rare Mecha variant. This kit does not invent the six names or the store price.",
        },
        {
          q: "How does the Hungry Frog event work?",
          a: "Find an infected egg, bring it to your base, feed the parasite to the Hungry Frog. Feed 5 parasites for a Monster Chest. Chests can rarely grant Monstrous Mutation for Titan Temple monsters.",
        },
        {
          q: "What is Monstrous Mutation vs Mecha?",
          a: "Monstrous is a limited-time mutation tied to Monster Chests for Titan Temple monsters. Mecha is a rare hatch variant for Monster Egg monsters. Different claims — do not mix them.",
        },
        {
          q: "Does Update #2 add codes?",
          a: "No redeem UI or working code list is confirmed. The live notes are not treated as a codes announcement.",
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
      "Forest and Lake: Pet Index screenshot. Later biomes: gameplay, including a public English-client recording by CoralBlox. Cherry Blossom: Update #1 live notes checked 2026-08-25. Titan Temple: Update #2 live notes checked 2026-08-30.",
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
        note: "Update #1 notes. Crane → Kitsune pets, Sakura Incubator, and The Great Bloom. Speed gate not verified here.",
      },
      {
        name: "Titan Temple",
        note: "Update #2 notes. Spideron → Nightflame pets, Monster Egg / Hungry Frog loops nearby in the update package. Speed gate not verified here.",
      },
    ],
  },
  eggs: {
    h2: "Eggs",
    teaser:
      "Steal from pets, nests, and players. Shop eggs are a different pool. Egg reset and a moon event kick off the scramble — that is the rare-egg race other wikis write about.",
    pageH1: "Steal An Egg Monster Egg — Hungry Frog and Titan Temple",
    dek: "Monster Egg, Hungry Frog infected eggs, Monster Chests, nests, shop pools, reset races, and which claims are reported vs Index-verified.",
    lead:
      "Eggs come from nests, biome pets, player steals, shop pools, and reset races. Huge and giant are sizes, not separate catalog names. Update #2 live notes add a Robux-store Monster Egg (6 monsters + rare Mecha variants) and infected eggs for the Hungry Frog → Monster Chest loop. Update #1 Cherry Blossom Eggs / Sakura Crystals remain on the path below. Dragon Admin Abuse still has no confirmed egg name here.",
    updateTitle: "Update #2 — Monster Egg and Hungry Frog",
    updateBody:
      "Reported from Update #2 notes: Monster Eggs sit in the Robux Store and hatch 6 new monsters (each with a rare Mecha variant). Separately, parasites attach to eggs worldwide — bring an infected egg home, feed the parasite to the Hungry Frog, and feed 5 parasites for a Monster Chest that can rarely grant Monstrous Mutation for Titan Temple monsters. Store price, the six monster names, and drop rates stay blank.",
    frogTitle: "Hungry Frog loop (reported)",
    frogRows: [
      {
        step: "Find an infected egg",
        evidence: "Update #2 notes: parasites attach themselves to eggs across the world.",
        status: "Reported",
      },
      {
        step: "Bring it to base",
        evidence: "Same delivery rule as any steal — the egg has to reach your pen.",
        status: "Reported",
      },
      {
        step: "Feed the parasite to Hungry Frog",
        evidence: "Notes name the Hungry Frog as the parasite sink.",
        status: "Reported",
      },
      {
        step: "Feed 5 parasites → Monster Chest",
        evidence:
          "Chest can rarely contain limited-time Monstrous Mutation for Titan Temple monsters.",
        status: "Reported / odds unknown",
      },
    ],
    indexTitle: "All eggs vs Pet Index vs shop",
    indexAnswers: [
      {
        name: "Monster Egg",
        note: "Reported Update #2 Robux Store egg. Hatches 6 monsters with rare Mecha variants. Names and price not listed in the note used here.",
      },
      {
        name: "Infected egg",
        note: "Not a separate catalog SKU — an egg with a parasite for the Hungry Frog event.",
      },
      {
        name: "Monster Chest",
        note: "Event reward after feeding 5 parasites. Can rarely grant Monstrous Mutation for Titan Temple monsters.",
      },
      {
        name: "Cherry Blossom Egg",
        note: "Reported Update #1 egg used to hatch Crane. First step in the Sakura Incubator unlock path.",
      },
      {
        name: "Sakura Incubator",
        note: "Not an egg itself. Mutation machine that consumes Sakura Crystals to roll Bloom / Spirit Bloom.",
      },
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
        note: "Shop eggs are a separate pool until their hatch appears in the Index or in clear gameplay footage. Monster Egg is the Robux Store add from Update #2.",
      },
    ],
    craneTitle: "Still live — Crane unlock path (Update #1, reported)",
    craneRows: [
      {
        step: "Reach Cherry Blossom",
        evidence: "Public guides report Cherry Blossom as the Update #1 zone behind late-game Speed.",
        status: "Reported",
      },
      {
        step: "Hatch Cherry Blossom Egg",
        evidence: "Reported source for Crane, the Epic pet used by the Sakura tree / incubator prompt.",
        status: "Reported",
      },
      {
        step: "Use Crane at Sakura Incubator",
        evidence:
          "Guides agree Crane unlocks the Sakura Incubator, but wording differs on offer vs sacrifice.",
        status: "Reported / prompt needed",
      },
      {
        step: "Farm Sakura Crystals",
        evidence: "The Great Bloom cadence is reported around every 30 minutes for a short window.",
        status: "Community-reported cadence",
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
        source: "Monster Egg (Robux Store)",
        what: "Update #2 notes: 6 monsters + rare Mecha variants.",
        index: "Monster and Mecha tiles not photographed on this kit yet.",
        action: "Treat price and Mecha odds as unknown until the store UI prints them.",
      },
      {
        source: "Hungry Frog / infected eggs",
        what: "Update #2 notes: parasites on eggs → Hungry Frog → Monster Chest → rare Monstrous Mutation.",
        index: "Chest reward odds and Monstrous multipliers not verified here.",
        action: "Follow the live prompt; do not invent parasite locations.",
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
        name: "Monster Egg",
        note: "Update #2 Robux Store egg: 6 monsters, rare Mecha variants. Price and names blank here.",
      },
      {
        name: "Infected eggs / Hungry Frog",
        note: "Update #2 event loop: parasite → Hungry Frog → 5 feeds → Monster Chest → rare Monstrous Mutation for Titan Temple monsters.",
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
          a: "All eggs includes biome and nest eggs, player steals, shop eggs, Robux Monster Eggs, infected eggs for Hungry Frog, reset-event rares, and huge or giant versions. The Pet Index confirms hatches, not every egg source.",
        },
        {
          q: "Are shop eggs part of the Pet Index?",
          a: "Not automatically. A shop egg belongs in the Index only after its hatch is visible as a collected pet or a clear gameplay label. Monster Egg is a Robux Store add from Update #2 notes.",
        },
        {
          q: "Is there a guaranteed huge egg timer?",
          a: "No guaranteed timer is published here. Gameplay shows short reset rhythms and event scrambles, but not a guaranteed huge egg every fixed number of hours.",
        },
        {
          q: "What is a Monster Egg?",
          a: "Update #2 notes: a Robux Store egg that hatches 6 new monsters, each with a rare Mecha variant. Exact names and price are not printed in the note used here.",
        },
        {
          q: "What is an infected egg / Hungry Frog?",
          a: "Update #2 event: parasites attach to eggs. Bring an infected egg to base, feed the parasite to the Hungry Frog, feed 5 for a Monster Chest. Chests can rarely grant Monstrous Mutation for Titan Temple monsters.",
        },
        {
          q: "Does Update #1 add a Dragon Egg?",
          a: "Not confirmed. Dragon Admin Abuse is still named on the Roblox event list, but this page does not invent a Dragon Egg. Cherry Blossom Eggs are named in Update #1 live notes for the Crane unlock.",
        },
        {
          q: "What is a Cherry Blossom Egg?",
          a: "Update #1 notes: hatch a Crane from a Cherry Blossom Egg to start the Sakura Incubator unlock. Exact nest locations and odds are not photographed here.",
        },
        {
          q: "Does Crane unlock the Sakura Incubator?",
          a: "Reported, yes. Multiple post-launch guides say Crane is required for the Sakura Incubator, but this kit still wants an in-game prompt screenshot before marking the exact offer/sacrifice wording verified.",
        },
      ],
    },
  },
  biomes: {
    h2: "Biomes",
    teaser:
      "Speed unlocks the next zone. Forest and Lake are Index labels. Cherry Blossom and Titan Temple come from Update #1 / #2 live notes.",
    pageH1: "Steal An Egg biomes — Forest to Titan Temple",
    dek: "Map: Forest through Cosmic King, Cherry Blossom (Update #1), and Titan Temple (Update #2). Speed gates still unpublished.",
    lead:
      "Steal An Egg biomes: Forest, Lake, Desert, Jungle, Yeti/ice pocket, Volcano, Abyss Ocean, Prehistoric, Cosmic King, Cherry Blossom (Update #1), and Titan Temple (Update #2 notes, checked 2026-08-30). Zones sit behind Speed. Titan Temple and Cherry Blossom Speed gates are not verified on this kit.",
    updateTitle: "Update #2 — Titan Temple status",
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "How many biomes does Steal An Egg have?",
          a: "This kit lists Forest through Cosmic King from Index photos and gameplay, plus Cherry Blossom from Update #1 and Titan Temple from Update #2 live notes.",
        },
        {
          q: "Is there a Speed number for each gate?",
          a: "No live Recommended Speed ladder is published here. Gates exist and get steep in later biomes; exact numbers rot quickly.",
        },
        {
          q: "What is the Titan Temple Biome?",
          a: "Update #2’s new zone. Notes list eight pets from Spideron to Nightflame, plus Monster Egg / Hungry Frog content in the same update package. Speed gate details stay blank here.",
        },
        {
          q: "What is the Cherry Blossom Biome?",
          a: "Update #1’s zone. Notes list eight pets from Crane to Kitsune, a Sakura Incubator unlock, and The Great Bloom event. Speed gate details stay blank here.",
        },
      ],
    },
    updateBody:
      "Update #2 live notes name Titan Temple. It is on the map list below as a reported zone. Speed gate, egg nest layout, and Index tiles for the eight pets are not photographed on this kit yet. Cherry Blossom from Update #1 stays on the list as reported.",
    updateRows: [
      {
        claim: "New zone name",
        status: "Reported live",
        evidence: "Update #2 notes: Titan Temple Biome.",
      },
      {
        claim: "Eight biome pets + rarities",
        status: "Reported live",
        evidence:
          "Spideron Legendary → Nightflame Divine in the notes. Income/second blank until a usable roster source prints figures.",
      },
      {
        claim: "Speed gate and route",
        status: "Not verified",
        evidence: "No Recommended Speed screenshot for Titan Temple on this kit yet.",
      },
      {
        claim: "Monster Egg + Hungry Frog package",
        status: "Reported live",
        evidence:
          "Same Update #2 notes: Robux Monster Egg, infected eggs, Hungry Frog, Monster Chests, Monstrous Mutation.",
      },
    ],
    videoH2: "Later biomes on video",
    videoCaption:
      "CoralBlox recorded later biomes after Forest and Lake. Treat it as a later-game run, not a Speed table and not a Titan Temple walkthrough.",
    otherNote:
      "steal-an-egg-wiki.wiki collapses the map into First / Desert / Snow / Ocean / Endgame, then other articles invent Sandy Expanse, Frozen Peaks, Volcanic Depths, Sky Gardens, Cave, Tundra, and Crystal Caverns. We keep Forest → Cosmic King from Index + recordings, plus Cherry Blossom and Titan Temple from live notes.",
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
      { name: "Titan Temple", wiki: "Update #2 notes on this kit — not from that wiki collapse." },
    ],
  },
  mutations: {
    h2: "Mutations & sizes",
    teaser:
      "Official description lists rarities, sizes, and mutations. Gameplay shows gold and silver coats. Update #2 adds Monstrous / Mecha; Update #1 adds Bloom / Spirit Bloom.",
    pageH1: "Steal An Egg mutations — Monstrous, Mecha, Bloom",
    dek: "Monstrous mutation, Mecha variants, Bloom / Spirit Bloom, gold / silver coats, huge / giant sizes, and which claims are verified vs reported.",
    lead:
      "Steal An Egg mutations checked August 30, 2026: gameplay still shows gold and silver variants, huge and giant egg sizes, and Legendary hatch labels. Update #2 live notes add a limited-time Monstrous Mutation (Monster Chests / Titan Temple monsters) and rare Mecha variants on Monster Egg hatches. Update #1 still names Bloom and Spirit Bloom via the Sakura Incubator. No odds or sell multipliers are published here.",
    updateTitle: "Update #2 — Monstrous and Mecha",
    updateBody:
      "Reported from Update #2 notes: feed Hungry Frog parasites for Monster Chests that can rarely grant Monstrous Mutation for Titan Temple monsters. Separately, every Monster Egg monster has a rare Mecha variant. Odds and multipliers stay blank until the UI prints them.",
    sakuraTitle: "Player searches → status",
    sakuraRows: [
      {
        query: "monstrous mutation",
        answer:
          "Limited-time Update #2 mutation for Titan Temple monsters; rare drop from Monster Chests after the Hungry Frog loop.",
        status: "Reported",
      },
      {
        query: "mecha mutation / mecha variant",
        answer:
          "Notes call Mecha a rare variant of Monster Egg monsters — not the same as Monstrous Mutation from chests.",
        status: "Reported",
      },
      {
        query: "bloom mutation",
        answer:
          "Reported common Sakura Incubator outcome after charging eggs with Sakura Crystals (Update #1).",
        status: "Reported",
      },
      {
        query: "spirit bloom mutation",
        answer:
          "Reported rare Sakura Incubator outcome; some community guides list 2.5%, but this kit does not mark that official.",
        status: "Community-reported odds",
      },
      {
        query: "sakura mutation",
        answer:
          "Players usually mean the Bloom family from the Sakura Incubator, not a separate confirmed mutation named Sakura.",
        status: "Query clarification",
      },
      {
        query: "sakura incubator",
        answer:
          "Reported Update #1 machine unlocked with Crane and powered by Sakura Crystals from The Great Bloom.",
        status: "Reported",
      },
      {
        query: "hungry frog",
        answer:
          "Update #2 parasite sink: infected egg → feed frog → 5 parasites → Monster Chest.",
        status: "Reported",
      },
    ],
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
        label: "Monstrous",
        category: "Update #2 mutation",
        evidence:
          "Reported limited-time mutation for Titan Temple monsters from Monster Chests after Hungry Frog feeds.",
        status: "Reported live",
      },
      {
        label: "Mecha",
        category: "Update #2 hatch variant",
        evidence: "Reported rare variant on Monster Egg monsters from the Robux Store.",
        status: "Reported live",
      },
      {
        label: "Bloom",
        category: "Update #1 mutation",
        evidence: "Reported Update #1 route: Crane unlock plus Sakura Crystal deposits in the incubator.",
        status: "Reported live",
      },
      {
        label: "Spirit Bloom",
        category: "Update #1 mutation",
        evidence: "Reported rare Bloom-family outcome. Some guides report 2.5%; official multiplier not verified.",
        status: "Community-reported odds",
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
      "Update #2 notes name Monstrous Mutation and Mecha variants — not Index-verified on this kit yet.",
      "Update #1 notes name Bloom and Spirit Bloom after the Sakura Incubator unlock — not Index-verified on this kit yet.",
    ],
    actionTitle: "What to record before trusting a mutation claim",
    actions: [
      "Screenshot the hatch label and the pet card together when possible.",
      "For Monstrous, record whether the label comes from a Monster Chest, the frog UI, or the hatched Titan Temple monster.",
      "For Mecha, record the Monster Egg hatch card — do not mix it with Monstrous Mutation.",
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
        wiki: "Paid Divine Trail exists. Kitsune / Nightflame are listed as Divine rarity in update notes — different claim.",
      },
    ],
    otherNote:
      "Huge / Giant / Golden are no longer “other wiki only.” Monstrous / Mecha come from Update #2 notes; Bloom / Spirit Bloom from Update #1. Remaining wiki words still disagree. No drop rates belong here until the Index or a developer post prints them.",
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "What mutations are confirmed in Steal An Egg?",
          a: "Gold or Golden and Silver variants are seen in gameplay. Monstrous and Mecha are named in Update #2 live notes. Bloom and Spirit Bloom are named in Update #1 notes via the Sakura Incubator path.",
        },
        {
          q: "What is Monstrous Mutation?",
          a: "Update #2 limited-time mutation for Titan Temple monsters. Notes say Monster Chests from the Hungry Frog loop have a rare chance to grant it. Odds and multipliers stay blank here.",
        },
        {
          q: "What is Mecha?",
          a: "Update #2 notes: every Monster Egg monster has a rare Mecha variant. That is a hatch variant claim, not the same as Monstrous Mutation from chests.",
        },
        {
          q: "Are Huge and Giant mutations?",
          a: "This kit treats Huge and Giant as egg sizes because gameplay shows them on carried eggs and hatch size, not as a separate mutation catalog.",
        },
        {
          q: "What are the mutation odds in Steal An Egg?",
          a: "For Monstrous, Mecha, Bloom, and Spirit Bloom, this kit keeps odds labeled reported until the live UI or a developer-owned source prints the numbers.",
        },
        {
          q: "Is Sakura a mutation in Steal An Egg?",
          a: "Not as a separate confirmed mutation on this kit. Sakura usually refers to the Sakura Incubator route that rolls Bloom or Spirit Bloom.",
        },
        {
          q: "What is Bloom and Spirit Bloom?",
          a: "Update #1 mutations unlocked after hatching a Crane, using the Sakura tree / incubator, then using The Great Bloom crystal path. Spirit Bloom is described as the rare outcome. Multipliers stay blank.",
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
    body: "Full Steal An Egg pets list with rarity, biome, reported income per second, and separate Index status — from Forest starters through Titan Temple and limited Brainrot eggs.",
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
        "Rank by income you can actually hatch. Huge eggs in the reset scramble are a size, not a timer. Blank income cells stay blank when no usable roster source has published a figure.",
    },
    pageH1: "Steal An Egg pets list — Titan Temple and income roster",
    dek: "Reported income roster plus Index status: Forest through Cosmic, Cherry Blossom, Titan Temple Update #2 pets, and limited Brainrot eggs.",
    lead:
      "Steal An Egg pets hatch from eggs and pay coins every second. This page separates reported income from public guides and the smaller Index status this kit has photographed. Update #2 adds Titan Temple pets (Spideron through Nightflame) with blank income until a usable roster source prints figures. Cherry Blossom and Cosmic high earners stay on the list as reported.",
    tableNote:
      "Income is per second (/s). Values from public roster guides are reported, not developer API data. A blank cell means no usable roster source was found for that pet.",
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "How many pets are in Steal An Egg?",
          a: "Beebom’s older all-eggs table lists 78 rows, while newer post-update guides listed about 86 after Cherry Blossom. Update #2 adds eight Titan Temple names on this kit. Monster Egg’s six monsters are named as a count only until the live note lists them.",
        },
        {
          q: "Why are some income cells blank?",
          a: "Those pets do not have a usable public income/second figure yet, or sources are too thin to rely on. Titan Temple incomes stay blank on purpose until a roster source prints them.",
        },
        {
          q: "What does income/second mean?",
          a: "Equipped pets generate coins over time. Examples on this list: Chicken $1/s, Fox $180/s, King Mammoth $400K/s, Cerberus $8M/s.",
        },
        {
          q: "What pets are in Titan Temple?",
          a: "Reported Update #2 pets: Spideron, Crustacia, Bladehide, Mantaris, Rhinotaur, Mutant Shark, Gorilla King, and Nightflame. Income cells stay blank until a usable roster source publishes figures.",
        },
        {
          q: "What pets are in Cherry Blossom?",
          a: "Reported Cherry Blossom pets: Crane, Salamander, Red Panda, Snowy Owl, Koi, Stag, Oni Tiger, and Kitsune. Their incomes are reported from public roster pages, not from this kit’s own Index photo yet.",
        },
      ],
    },
    linkLabel: "Open the Steal An Egg pets list ->",
    rosterTitle: "Reported income roster + Index status",
    rosterNote:
      "Roster columns: Egg/Pet, Rarity, Biome, Income/Second. Early and mid-game rows were cross-checked against Beebom; later income came from post-update public roster pages. Titan Temple rows are names + rarities from Update #2 notes only (income blank). Spelling quirks (Centapede, Tob Tobi Tob Tob, Tralaledon) stay as published.",
    rosterSkip:
      "Not listed: steal-power, drop rates, ability text, fake S-tier rankings, Mecha odds, or exact Bloom / Monstrous multipliers.",
    sourceTitle: "Source status",
    sourceRows: [
      {
        source: "This kit's Index photo",
        use: "Confirms Chicken detail panel and a small set of early visible names.",
        status: "Verified on this kit",
      },
      {
        source: "Beebom all-eggs table",
        use: "Confirms many early/mid roster names and income values; its Cherry Blossom rows were still TBA.",
        status: "Reported roster",
      },
      {
        source: "AllThings / Eldorado / other post-update rosters",
        use: "Fill later Cosmic, Prehistoric, top earners, and Cherry Blossom income where public roster pages give usable figures.",
        status: "Reported income",
      },
      {
        source: "Update #2 live notes",
        use: "Names Titan Temple pets and rarities. Does not print income/second.",
        status: "Reported names only",
      },
    ],
    rarityTitle: "Rarity words on the list",
    rarityRows: [
      { name: "Common → Epic", status: "On the list", note: "Early biomes use Common, Uncommon, Rare, Epic." },
      {
        name: "Legendary / Mythic / Secret / Cosmic",
        status: "On the list + heard in-game",
        note: "Later biomes and rare-egg alerts use these labels. Titan Temple starts at Legendary.",
      },
      {
        name: "Eternal",
        status: "On the list (Update #1 / #2)",
        note: "Oni Tiger (Cherry Blossom) and Gorilla King (Titan Temple) are listed as Eternal in update notes.",
      },
      {
        name: "Divine",
        status: "Pet rarity + shop trail",
        note: "Kitsune and Nightflame are listed as Divine in update notes. A paid Divine Trail also exists — do not mix the two claims.",
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

/** Public roster tables: Egg/Pet, Rarity, Biome, Income/Second. Blank cells stay —. */
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
  { name: "Ice Dragon", biome: "Snow", rarity: "Eternal", income: "$65M/s" },
  { name: "Lava Gecko", biome: "Volcano", rarity: "—", income: "—" },
  { name: "Lava Frog", biome: "Volcano", rarity: "Epic", income: "$850/s" },
  { name: "Flaming Bull", biome: "Volcano", rarity: "Legendary", income: "$9.5K/s" },
  { name: "Lava Iguana", biome: "Volcano", rarity: "Legendary", income: "$11K/s" },
  { name: "Chillin Chilli", biome: "Volcano", rarity: "Mythic", income: "$55K/s" },
  { name: "Cerberus", biome: "Volcano", rarity: "Secret", income: "$8M/s" },
  { name: "Phoenix", biome: "Volcano", rarity: "Eternal", income: "$85M/s" },
  { name: "Lava Dragon", biome: "Volcano", rarity: "Eternal", income: "$100M/s" },
  { name: "Parrotfish", biome: "Abyss Ocean", rarity: "Rare", income: "$220/s" },
  { name: "Swordfish", biome: "Abyss Ocean", rarity: "Epic", income: "$1.1K/s" },
  { name: "Shark", biome: "Abyss Ocean", rarity: "Legendary", income: "$15K/s" },
  { name: "Orca", biome: "Abyss Ocean", rarity: "Mythic", income: "$80K/s" },
  { name: "Whale Shark", biome: "Abyss Ocean", rarity: "Cosmic", income: "$700K/s" },
  { name: "Beluga Whale", biome: "Abyss Ocean", rarity: "Cosmic", income: "$850K/s" },
  { name: "Kraken", biome: "Abyss Ocean", rarity: "—", income: "—" },
  { name: "El Maja", biome: "Abyss Ocean", rarity: "Eternal", income: "$130M/s" },
  { name: "Dodo", biome: "Prehistoric", rarity: "Rare", income: "$280/s" },
  { name: "Pterodactyl", biome: "Prehistoric", rarity: "Legendary", income: "$22K/s" },
  { name: "Ankylosaurus", biome: "Prehistoric", rarity: "Mythic", income: "$120K/s" },
  { name: "Triceratops", biome: "Prehistoric", rarity: "Cosmic", income: "$1.2M/s" },
  { name: "Bronto", biome: "Prehistoric", rarity: "Cosmic", income: "$1.5M/s" },
  { name: "Tralaledon", biome: "Prehistoric", rarity: "Secret", income: "$32M/s" },
  { name: "TRex", biome: "Prehistoric", rarity: "Secret", income: "$25M/s" },
  { name: "Mosasaurus", biome: "Prehistoric", rarity: "Eternal", income: "$180M/s" },
  { name: "Centapede", biome: "Cosmic", rarity: "Epic", income: "$1.5K/s" },
  { name: "Cosmic Gecko", biome: "Cosmic", rarity: "Legendary", income: "$30K/s" },
  { name: "Cosmic Gorilla", biome: "Cosmic", rarity: "Mythic", income: "$180K/s" },
  { name: "La Vacca Saturno Saturnita", biome: "Cosmic", rarity: "Cosmic", income: "$2.2M/s" },
  { name: "Cosmic Dragon", biome: "Cosmic", rarity: "Secret", income: "$60M/s" },
  { name: "Cosmic Skeleton Boss", biome: "Cosmic", rarity: "Secret", income: "$45M/s" },
  { name: "Eternal Lunar Dragon", biome: "Cosmic", rarity: "Eternal", income: "$250M/s" },
  { name: "Unicorn", biome: "Cosmic", rarity: "Divine", income: "$1B/s" },
  { name: "Crane", biome: "Cherry Blossom", rarity: "Epic", income: "$4K/s" },
  { name: "Salamander", biome: "Cherry Blossom", rarity: "Legendary", income: "$74K/s" },
  { name: "Red Panda", biome: "Cherry Blossom", rarity: "Mythic", income: "$450K/s" },
  { name: "Snowy Owl", biome: "Cherry Blossom", rarity: "Cosmic", income: "$7.5M/s" },
  { name: "Koi", biome: "Cherry Blossom", rarity: "Cosmic", income: "$12M/s" },
  { name: "Stag", biome: "Cherry Blossom", rarity: "Secret", income: "$145M/s" },
  { name: "Oni Tiger", biome: "Cherry Blossom", rarity: "Eternal", income: "$600M/s" },
  { name: "Kitsune", biome: "Cherry Blossom", rarity: "Divine", income: "$1.8B/s" },
  { name: "Spideron", biome: "Titan Temple", rarity: "Legendary", income: "—" },
  { name: "Crustacia", biome: "Titan Temple", rarity: "Legendary", income: "—" },
  { name: "Bladehide", biome: "Titan Temple", rarity: "Mythic", income: "—" },
  { name: "Mantaris", biome: "Titan Temple", rarity: "Cosmic", income: "—" },
  { name: "Rhinotaur", biome: "Titan Temple", rarity: "Cosmic", income: "—" },
  { name: "Mutant Shark", biome: "Titan Temple", rarity: "Secret", income: "—" },
  { name: "Gorilla King", biome: "Titan Temple", rarity: "Eternal", income: "—" },
  { name: "Nightflame", biome: "Titan Temple", rarity: "Divine", income: "—" },
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
  "Steal An Egg Update #2 route: Titan Temple, Monster Egg, Hungry Frog, Monster Chests, Monstrous mutation, Mecha variants.",
  `${stealAnEgg.path}/updates`,
);

export const stealAnEggPetsMetadata = pageMetadata(
  stealAnEggCopy.pets.pageH1,
  "Steal An Egg pets list: reported income per second, Titan Temple roster, Cherry Blossom pets, and separate Index status.",
  `${stealAnEgg.path}/pets`,
);

export const stealAnEggSpeedMetadata = pageMetadata(
  "Steal An Egg Speed — treadmill, trails, gates",
  "Speed unlocks later biomes and keeps a steal alive: treadmill, trails, pen, egg reset, settings. No live price ladder.",
  `${stealAnEgg.path}/speed`,
);

export const stealAnEggEggsMetadata = pageMetadata(
  stealAnEggCopy.eggs.pageH1,
  "Steal An Egg Monster Egg guide: Hungry Frog, infected eggs, Monster Chests, Mecha variants, nests, and reset races.",
  `${stealAnEgg.path}/eggs`,
);

export const stealAnEggBiomesMetadata = pageMetadata(
  stealAnEggCopy.biomes.pageH1,
  "Steal An Egg biomes: Forest through Cosmic King, Cherry Blossom, and Titan Temple from Update #2 notes. Speed gates unpublished.",
  `${stealAnEgg.path}/biomes`,
);

export const stealAnEggMutationsMetadata = pageMetadata(
  stealAnEggCopy.mutations.pageH1,
  "Steal An Egg mutations guide: Monstrous mutation, Mecha variants, Bloom / Spirit Bloom, gold/silver, huge/giant, and status.",
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
        "@id": `${stealAnEggCanonical}#update-2-event`,
        name: "Steal An Egg Update #2",
        url: stealAnEggCopy.update2.eventUrl,
        startDate: "2026-08-30",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        description: stealAnEggCopy.update2.lead,
        location: {
          "@type": "VirtualLocation",
          url: stealAnEggCopy.update2.eventUrl,
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
        "@id": `${absoluteUrl(`${stealAnEgg.path}/updates`)}#update-2-event`,
        name: "Steal An Egg Update #2",
        url: stealAnEggCopy.update2.eventUrl,
        startDate: "2026-08-30",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        description: stealAnEggCopy.update2.lead,
        location: {
          "@type": "VirtualLocation",
          url: stealAnEggCopy.update2.eventUrl,
        },
        about: {
          "@type": "VideoGame",
          name: stealAnEgg.name,
          url: stealAnEgg.playUrl,
          gamePlatform: "Roblox",
        },
      },
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
