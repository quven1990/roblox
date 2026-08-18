import type { GameFacts } from "@/lib/games/types";
import { SITE_NAME, absoluteUrl, pageMetadata } from "@/lib/site";

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
  tags: ["Guide", "Pets", "Eggs", "Biomes"],
  icon: "/games/steal-an-egg.png",
  thumb: "/games/steal-an-egg-thumb.jpg",
} as const satisfies GameFacts;

export const stealAnEggArt = {
  guide: "/games/art/steal-guide.jpg",
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
} as const;

export const stealAnEggCopy = {
  title: "Steal An Egg (Roblox) — steal eggs, hatch pets, train Speed",
  h1: "Steal An Egg (Roblox) — steal eggs, hatch pets, train Speed",
  dek: "Steal An Egg is a Roblox pet / tycoon by and Collect Rare Pets. This unofficial guide is not Steal a Brainrot and not the older game titled Steal a Egg.",
  metaDescription:
    "Unofficial Steal An Egg Roblox guide: pets Index, eggs, biomes, mutations, and Speed. Not Steal a Brainrot.",
  heroCta: "Play on Roblox",
  nav: {
    guide: "Guide",
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
        id: "pets",
        title: "Pets",
        body: "In-game Index: 78 pets. Forest and Lake names photographed.",
      },
      {
        id: "eggs",
        title: "Eggs",
        body: "Nests, player steals, egg reset, moon event, huge / giant sizes.",
      },
      {
        id: "biomes",
        title: "Biomes",
        body: "Forest → Cosmic King. Tiger, Yeti, dino chases on the way.",
      },
      {
        id: "mutations",
        title: "Mutations",
        body: "Gold / silver coats. Huge and giant are egg size, not wiki lore.",
      },
      {
        id: "speed",
        title: "Speed",
        body: "Unlock the treadmill, trails, pen. No fake price table.",
      },
    ],
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
      "Forest and Lake: Pet Index screenshot. Later biomes: gameplay, including a public English-client recording by CoralBlox, last checked 2026-08-16.",
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
    ],
  },
  eggs: {
    h2: "Eggs",
    teaser:
      "Steal from pets, nests, and players. Shop eggs are a different pool. Egg reset and a moon event kick off the scramble — that is the rare-egg race other wikis write about.",
    pageH1: "Steal An Egg all eggs — index, shop, reset",
    dek: "Eggs come from nests, pets, player steals, shop pools, and reset events. This page separates gameplay hatches from unverified wiki egg names.",
    lead:
      "Steal An Egg all eggs checked August 16, 2026: eggs come from biome pets, guarded nests, player steals, shop pools, and reset-event races. The Pet Index is the source of truth; shop names and wiki labels stay separate until photographed.",
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
    ],
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
      ],
    },
  },
  biomes: {
    h2: "Biomes",
    teaser: "Speed unlocks the next zone. Forest and Lake are Index labels; the rest are gameplay names.",
    pageH1: "Steal An Egg biomes",
    dek: "Speed-gated map for Steal An Egg. Other wikis collapse this into First / Desert / Snow / Ocean / Endgame. The list below is longer because it comes from actual runs.",
    videoH2: "Later biomes on video",
    videoCaption:
      "CoralBlox recorded later biomes after Forest and Lake. Treat it as a later-game run, not a Speed table and not a secret recipe.",
    otherNote:
      "steal-an-egg-wiki.wiki collapses the map into First / Desert / Snow / Ocean / Endgame, then other articles invent Sandy Expanse, Frozen Peaks, Volcanic Depths, Sky Gardens, Cave, Tundra, and Crystal Caverns. We keep Forest → Cosmic King from Index + recordings. Desert / snow / volcano overlap in spirit; the extra names are not on our run.",
    otherRows: [
      { name: "First / starting zone", wiki: "Their C-tier starter" },
      { name: "Desert / Sandy Expanse", wiki: "Their Speed tier 1. We do have Desert in gameplay." },
      { name: "Snow / Frozen Peaks / Tundra", wiki: "Three snow names across their pages." },
      { name: "Ocean", wiki: "Their Speed tier 3. Loose overlap with Abyss Ocean." },
      { name: "Volcanic Depths", wiki: "Loose overlap with our Volcano." },
      { name: "Cave / Crystal Caverns", wiki: "Not on our run map." },
      { name: "Sky Gardens", wiki: "Not on our run map." },
      { name: "Endgame", wiki: "Their max-Speed bucket. We name Cosmic King." },
    ],
  },
  mutations: {
    h2: "Mutations & sizes",
    teaser:
      "The official page lists rarer eggs, pet sizes, and mutations. Index tiles use color bands. Gold and silver pets showed up in gameplay as variants, not biomes.",
    pageH1: "Steal An Egg mutations and sizes",
    dek: "What the Index and recordings actually show: gold / silver coats, huge / giant egg size, plus leftover wiki labels.",
    confirmed: [
      "Official description: pets have rarities, sizes, and mutations.",
      "Index tile colors in Forest run white → green → blue → purple → pink → gold. Only white is labeled Common so far.",
      "Gameplay showed gold Chicken, gold gecko / centipede, and silver crocodile — treat gold / silver as a coat, not a zone.",
      "Huge and giant showed up as egg size in a live steal, not as a separate catalog name. A huge Cosmic Gorilla hatched larger than a smaller Cosmic Gorilla.",
      "Legendary appeared on a hatch label (Legendary Golden Cosmic Gecko).",
    ],
    otherTitle: "Labels other wikis use (unverified odds)",
    otherRows: [
      { name: "Shiny", wiki: "Rare recolor / value boost" },
      { name: "Rainbow", wiki: "Event / mutation label" },
      { name: "Crystal", wiki: "King Mammoth article: +35% defense. Unverified." },
      { name: "Divine", wiki: "Endgame variant on one wiki. We only confirmed Divine as a paid trail name." },
    ],
    otherNote:
      "Huge / Giant / Golden are no longer “other wiki only” — those sizes and coats showed in gameplay. Remaining wiki words still disagree (Shiny vs Mutated vs Secret). No drop rates belong here until the Index or a developer post prints them.",
  },
  codes: {
    h2: "Codes",
    body: "There is no confirmed redeem UI and no working code list as of 2026-08-15. Other sites that title a page “redeem free rewards” still say the same thing in the FAQ. If a code box ships later, this page will say so. Do not trust random code dumps.",
  },
  pets: {
    h2: "Pets",
    body: "The in-game Pet Index is the source of truth. It is a collection log: tiles fill after you steal an egg, hatch it, and keep the pet. A photographed Index shows 78 pets total, Forest 4/8, and five named animals. Locked tiles still read ???. Hatch names from YouTube stay off the Index table. Names other wikis rank are listed separately so you can see the gap.",
    whatIndex: {
      h2: "What the Pet Index is",
      body: "Open it in-game. Each slot is one companion. Unlocked tiles show the pet you actually have. Locked tiles stay ??? until that animal is collected. Claim All dumps waiting rewards. Equip Best fills the pen from what you own. Completing a section can pay Index rewards — one Forest snapshot showed +420 Speed and $100, already claimed. Limited eggs appear as Index entries; that recording did not show how to get them. Sizes and mutations sit on the Mutations page, not as invented drop rates.",
    },
    fillFaster: {
      h2: "How to fill the Index faster",
      intro:
        "There is no cheat list. Progress is Speed, delivery, and which eggs you contest.",
      steps: [
        "Train on the base treadmill so later biomes open and you can outrun a steal.",
        "Upgrade the pen so you can keep more pets after they hatch.",
        "Steal from nests, biome animals, and other players’ bases. The tile only fills if the egg makes it home and hatches.",
        "When egg reset or a Secret / Eternal / Cosmic alert fires, leave the treadmill. Bigger eggs in later zones are the usual high-Index contest.",
      ],
      skip:
        "We do not list a Rare / Ultra Rare ladder or “boss pets.” Huge eggs do spawn in the reset scramble — they are a size, not a 3-hour guaranteed clock. Hatch names from YouTube stay off the Index table below.",
    },
    official:
      "Opened Index panel: Chicken is Common and pays $1/s. Index collection rewards can include Speed and coins (one Forest snapshot showed +420 Speed and $100, already claimed).",
    community:
      "Voiceover rarity labels from gameplay (Legendary, Mythic, Secret, Eternal, Cosmic) are a ladder clue only. One hatch label read Legendary Golden Cosmic Gecko. Gold / silver looks like a coat, not a biome.",
    pageH1: "Steal An Egg pets (Index)",
    dek: "Partial Index from an in-game screenshot. 5 of 78 named. steal-an-egg-wiki.wiki names sit below — not in the Index table.",
    tableNote:
      "Names below are the English Index labels: Chicken, Bird, Owl, Raccoon, Frog. Stats only appear if that pet’s detail panel was opened.",
    linkLabel: "Open the partial pets Index →",
    rarityTitle: "Rarity ladder",
    rarityRows: [
      { name: "Common", status: "On Index", note: "Chicken panel says Common." },
      {
        name: "Legendary / Mythic / Secret / Eternal / Cosmic",
        status: "Heard in-game",
        note: "Rare-egg alerts, plus a Legendary hatch label. Not labeled on the Forest Index shot.",
      },
      {
        name: "Divine",
        status: "Shop name",
        note: "A paid Divine Trail exists. Not confirmed as a pet rarity on the Index.",
      },
    ],
    otherTitle: "Pets steal-an-egg-wiki.wiki invented (not on our Index)",
    otherNote:
      "Copied 2026-08-15 from steal-an-egg-wiki.wiki/en/pets and its pet-list / King Mammoth / exclusive / uncommon articles. Their hub says “30+ known pets,” then mostly writes King Mammoth. Homepage names six animals. Later articles invent a different roster. Their own FAQ says exact values are still being verified. Forest on our Index starts Chicken, Bird, Owl, Raccoon — not Meadow Chick. A steal prompt in a recording named King Mammoth on an elephant; that still is not a tile on our photographed Index. We copy the names so you can see the factory. We do not copy income, steal-power, drop rates, or abilities.",
    otherRows: [
      { name: "King Mammoth", wiki: "Homepage S. Other pages also call it Legendary, Mythic, and an event pet." },
      { name: "Shadow Fox", wiki: "Homepage A. Does not appear on their pet-list article." },
      { name: "Ember Drake", wiki: "Homepage A. Pet-list instead names Ember Fox." },
      { name: "Coral Turtle", wiki: "Homepage B." },
      { name: "Meadow Chick", wiki: "Homepage C / starter." },
      { name: "Pebble Pup", wiki: "Homepage C / first hatch." },
      { name: "Shadow Lynx", wiki: "Pet-list: Epic, speed." },
      { name: "Crystal Drake", wiki: "Pet-list: Mythic all-rounder. Exclusive page also lists it." },
      { name: "Ember Fox", wiki: "Pet-list: Rare. Exclusive page: event pet. Not Ember Drake." },
      { name: "Tide Serpent", wiki: "Pet-list: Epic, defense." },
      { name: "Frost Drake", wiki: "King Mammoth article: legendary alternative." },
      { name: "Thunder Roc", wiki: "King Mammoth article: legendary alternative." },
      { name: "Shadow Panther", wiki: "King Mammoth + exclusive pages." },
      { name: "Crystal Golem", wiki: "King Mammoth article: pure income." },
      { name: "Frost Serpent", wiki: "Exclusive-pets article." },
      { name: "Egg Thief", wiki: "Uncommon-pets article." },
      { name: "Nest Raider", wiki: "Uncommon-pets article." },
      { name: "Guard Hound", wiki: "Uncommon-pets article." },
      { name: "Shadow Prowler", wiki: "Uncommon-pets article; they call it the best uncommon earner." },
      { name: "Vault Keeper", wiki: "Uncommon-pets article." },
      { name: "Golden Chick", wiki: "Uncommon-pets article." },
      { name: "Frost Bunny", wiki: "Uncommon-pets article." },
    ],
    wikiRarityTitle: "Rarity names that wiki uses",
    wikiRarityNote:
      "Their pets hub: Common → Rare → Epic → Legendary → Mythic. Other articles add Uncommon. Our photographed Index only labeled Common. Gameplay alerts use Legendary / Mythic / Secret / Eternal / Cosmic. Treat the two ladders as different dictionaries, not two official charts.",
    wikiRarityRows: [
      { name: "Common", wiki: "First hatch, minimal income" },
      { name: "Uncommon", wiki: "On some articles only. Desert / early collection." },
      { name: "Rare", wiki: "Nest eggs / snow biome in their copy" },
      { name: "Epic", wiki: "Mid-game, nest and rare eggs" },
      { name: "Legendary", wiki: "Rare-egg race / endgame" },
      { name: "Mythic", wiki: "Collector chase / rarest eggs" },
    ],
    factoryTitle: "Names on that wiki that are probably the wrong game",
    factoryNote:
      "Their pet-value article slips into Adopt Me language (Neon, Mega Neon, trading hubs). We list those so you do not hunt them here.",
    factoryRows: [
      { name: "Neon Dragon / Mega Neon Dragon", wiki: "Pet-value page" },
      { name: "Galaxy Fox", wiki: "Pet-value page" },
      { name: "Crystal Owl", wiki: "Pet-value page" },
      { name: "Golden Griffin", wiki: "Pet-value page" },
    ],
    otherSkip:
      "Not copied as facts: 1x–32x (or 1x–100x) income multipliers, coins/min tables, steal-power numbers, Stomp Guard, hatch costs, luck potions, a player trading market, “you cannot skip hatch with Robux” (our recordings show Grow All / Instant Grow), and their Cave / Sky Gardens biomes.",
  },
  speed: {
    h2: "Speed",
    teaser:
      "Speed is the gate for later biomes and for surviving a steal. Unlock the treadmill, train on it, then stack trails. We do not publish upgrade prices.",
    pageH1: "Steal An Egg Speed",
    dek: "How Speed works in Steal An Egg: unlock the treadmill, trails, pen, egg reset, and settings. No price ladder — those numbers rot.",
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
        a: "Not as of 2026-08-15.",
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
        a: "A partial Index is on /steal-an-egg/pets: Chicken, Bird, Owl, Raccoon, Frog, 78 total. Hatch names from a 2026 recording sit under that table, marked not-Index.",
      },
      {
        q: "How do I fill the Pet Index?",
        a: "Steal an egg, get it home, hatch it, and keep the pet. Train Speed, upgrade the pen, and contest egg reset / Secret / Eternal / Cosmic alerts. Claim All and Equip Best are in the Index UI. Limited eggs exist in the Index; we do not yet have a drop source.",
      },
      {
        q: "Is there a guaranteed Huge egg every 3 hours?",
        a: "No clock like that showed in our recordings. Huge and giant are egg sizes. They do appear in the egg-reset scramble. Map refresh is still a short cycle (~5 minutes in late-game footage). A moon event also fires; it is not a published loot table.",
      },
      {
        q: "What is the best pet?",
        a: "We do not have a finished Index, so we do not publish an S-tier. Chicken is the only pet with an opened Index income panel ($1/s). One huge Cosmic Gorilla hatch paid on the order of millions per second in a recording — that is one clip, not a ranking. A steal prompt named King Mammoth; it is still not on our photographed Index.",
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

export const stealAnEggNav = [
  {
    id: "guide" as const,
    href: stealAnEgg.path,
    label: stealAnEggCopy.nav.guide,
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

export const stealAnEggPetsMetadata = pageMetadata(
  "Steal An Egg pets (Index) — Chicken, Forest, 78 total",
  "Partial Steal An Egg Pet Index from an in-game screenshot: 78 pets. Forest and Lake names photographed. Chicken is Common at $1/s. Locked slots stay ???.",
  `${stealAnEgg.path}/pets`,
);

export const stealAnEggSpeedMetadata = pageMetadata(
  "Steal An Egg Speed — treadmill, trails, gates",
  "How Speed works in Steal An Egg: unlock the treadmill, trails, pen, egg reset, and settings. No published upgrade price table.",
  `${stealAnEgg.path}/speed`,
);

export const stealAnEggEggsMetadata = pageMetadata(
  "Steal An Egg all eggs — index, shop, reset",
  "Steal An Egg all eggs: nests, player steals, shop pools, egg reset, moon event, huge and giant sizes, and gameplay hatch names.",
  `${stealAnEgg.path}/eggs`,
);

export const stealAnEggBiomesMetadata = pageMetadata(
  "Steal An Egg biomes — Forest to Cosmic King",
  "Steal An Egg biome list from Index photos and gameplay: Forest, Lake, Desert, Jungle, Volcano, Abyss Ocean, Prehistoric, Cosmic King. Speed-gated. No fake unlock ladder.",
  `${stealAnEgg.path}/biomes`,
);

export const stealAnEggMutationsMetadata = pageMetadata(
  "Steal An Egg mutations and sizes",
  "Steal An Egg mutations and pet sizes: gold/silver coats, huge/giant egg size from gameplay, and leftover unverified wiki labels.",
  `${stealAnEgg.path}/mutations`,
);

export function stealAnEggJsonLd() {
  const faq = {
    "@type": "FAQPage",
    "@id": `${stealAnEggCanonical}#faq`,
    mainEntity: stealAnEggCopy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": stealAnEggCanonical,
        name: stealAnEggCopy.title,
        url: stealAnEggCanonical,
        description: stealAnEggCopy.metaDescription,
        dateModified: stealAnEgg.lastChecked,
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
      faq,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE_NAME,
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: stealAnEgg.name,
            item: stealAnEggCanonical,
          },
        ],
      },
    ],
  };
}

export function stealAnEggEggsJsonLd() {
  const url = absoluteUrl(`${stealAnEgg.path}/eggs`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        name: stealAnEggCopy.eggs.pageH1,
        url,
        description: String(stealAnEggEggsMetadata.description ?? ""),
        dateModified: stealAnEgg.lastChecked,
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
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: stealAnEggCopy.eggs.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE_NAME,
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: stealAnEgg.name,
            item: stealAnEggCanonical,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Eggs",
            item: url,
          },
        ],
      },
    ],
  };
}
