import type { GameFacts } from "@/lib/games/types";
import { SITE_NAME, absoluteUrl, pageMetadata } from "@/lib/site";

export const growAChickenFighter = {
  slug: "grow-a-chicken-fighter",
  name: "Grow a Chicken Fighter",
  developer: "Sergio Verse Games",
  universeId: "10338952197",
  placeId: "94640181989498",
  playUrl:
    "https://www.roblox.com/games/94640181989498/Grow-a-Chicken-Fighter",
  lastChecked: "2026-08-16",
  hasRedeemUi: true,
  path: "/grow-a-chicken-fighter",
  kitNumber: 2,
  kicker: "Live",
  lede: "Hatch, fight in the PIT, climb the Tower, fuse, rebirth.",
  tags: ["Guide", "Codes", "Rewards", "Eggs"],
  icon: "/games/grow-a-chicken-fighter.png",
  thumb: "/games/grow-a-chicken-fighter-thumb.jpg",
} as const satisfies GameFacts;

export const growAChickenFighterArt = {
  guide: "/games/art/chicken-guide.png",
  rewards: "/games/art/chicken-rewards.png",
  eggs: "/games/art/chicken-eggs.png",
  codes: "/games/art/chicken-codes.png",
  chickens: "/games/art/chicken-chickens.png",
  fusion: "/games/art/chicken-fusion.png",
} as const;

export const growAChickenFighterVideos = {
  loop: {
    id: "FPjeRjRSaMA",
    watchUrl: "https://www.youtube.com/watch?v=FPjeRjRSaMA",
    title: "Grow a Chicken Fighter loop — public English-client run",
    credit: "ItsChalls",
    poster: growAChickenFighterArt.guide,
  },
} as const;

export const growAChickenFighterArtAlt = {
  guide:
    "A small LVL 1 chicken looking up a colorful Tower toward a crowned LVL 999 chicken.",
  rewards:
    "Level 1 starter farm next to a Level 999 hammock piled with gold and a powered chicken.",
  eggs: "A powered chicken chasing a player who is carrying a stack of scrap across the farm.",
  codes: "A Roblox avatar pointing forward next to a lightning-charged chicken.",
  chickens: "A small labeled YOU chicken facing a much larger labeled BOSS chicken.",
  fusion:
    "Two aura-charged chickens clashing in a fenced dirt PIT while players cheer.",
} as const;

const thinPageRobots = { robots: { index: false, follow: true } } as const;

export const growAChickenFighterCopy = {
  title: "Grow a Chicken Fighter (Roblox) — hatch, PIT, Tower",
  h1: "Grow a Chicken Fighter (Roblox) — hatch, PIT, Tower",
  dek: "Grow a Chicken Fighter is a Roblox hatch-and-fight tycoon by Sergio Verse Games. Unofficial Upvane kit. Not Grow a Garden and not Steal An Egg.",
  metaDescription:
    "Unofficial Grow a Chicken Fighter guide: hatch, PIT, Tower, fusion, rebirth, and photographed Daily Rewards. Not Grow a Garden.",
  heroCta: "Play on Roblox",
  nav: {
    guide: "Guide",
    codes: "Codes",
    rewards: "Rewards",
    eggs: "Eggs",
    chickens: "Chickens",
    fusion: "Fusion",
    play: "Play",
  },
  pages: {
    h2: "Guide pages",
    ghostCta: "Guide pages",
    cards: [
      {
        id: "rewards",
        title: "Rewards",
        body: "Photographed Daily streak and Play Today. The one panel we have as Index.",
      },
      {
        id: "eggs",
        title: "Eggs",
        body: "Royal Egg, VOID EGG, and Fortune Egg on the Rewards tiles.",
      },
      {
        id: "codes",
        title: "Codes",
        body: "Experience page lists WELCOME. Rewards is not the codes box.",
      },
      {
        id: "chickens",
        title: "Chickens",
        body: "Golden Goose on the HUD. No Index screenshot yet.",
      },
      {
        id: "fusion",
        title: "Fusion",
        body: "Official loop: fuse two chickens into a mutated fighter.",
      },
    ],
  },
  rightGame: {
    h2: "Right game",
    body: "Grow a Chicken Fighter is a Roblox experience by Sergio Verse Games. The Roblox group on the experience page is also named Grow a Chicken Fighter. Official description: hatch eggs, send chickens to the PIT, climb the Tower, fuse two chickens into a mutated fighter, rebirth for faster earnings, and use special abilities. Chickens keep laying eggs while you are offline.",
    notThis:
      "This is not Grow a Garden, not Steal An Egg, not a Chicken Farm tycoon, and not an Adopt Me chicken list. Codes and egg names below are for this game only.",
  },
  howARunWorks: {
    h2: "How a first session works",
    videoH2: "Watch a public run",
    videoCaption:
      "ItsChalls recorded an English-client first session: ticket codes, Rewards claim, hatch, fuse, PIT, and an early Tower climb. This is unofficial gameplay, not a Roblox or developer video. Hatch names from the clip stay off the Index.",
    steps: [
      "Hatch an egg and put a chicken to work. The experience page says they keep laying while you are offline, so leave a worker running when you quit.",
      "Send a fighter to the PIT. That cash is what the official loop spends on the next upgrade or egg. We have not photographed PIT payouts.",
      "Open Rewards in the same session. Claim Daily Day 1 and the Play Today Now tile so the streak clock starts. Missing tomorrow resets the consecutive record on our screenshot.",
      "Stay in the session for the later Play Today tiles. In the photo those were 15 minutes, 1 hour, and 3 hours. The 3-hour tile is a Royal Egg.",
      "Climb the Tower when the current team can clear the next boss. If a floor stalls, farm PIT cash and fuse a spare before you retry. Floor list not photographed.",
      "Fuse two chickens into a mutated fighter only when you have a replaceable extra. Keep the one still winning PIT or Tower fights. Costs and lock slots are not photographed.",
      "Rebirth when the official loop says later runs pay faster. We do not have a photographed Rebirth threshold, so do not treat other sites’ number as ours.",
    ],
  },
  systems: {
    h2: "Hatch, PIT, Tower, fuse, rebirth",
    intro:
      "These names come from the Roblox experience description, not from a photographed HUD. Treat them as the loop order. Skip invented fees, drop rates, or floor counts.",
    items: [
      {
        name: "Hatch / offline eggs",
        note: "Eggs become fighters. Official text: chickens keep laying while you are offline. That is the overnight loop — we have not photographed nest output.",
      },
      {
        name: "PIT",
        note: "Send chickens to fight for cash, then spend that cash on the next upgrade or egg. Payout table not photographed.",
      },
      {
        name: "Tower",
        note: "Boss floors on the official loop. Retry after farm and fuse if a floor stalls. We do not list floors we have not seen.",
      },
      {
        name: "Fusion",
        note: "Official: fuse two chickens into a mutated fighter. Use a spare. Slot locks, trait transfer, and prices stay off this page until we photograph them.",
      },
      {
        name: "Rebirth",
        note: "Official: later runs pay faster after rebirth. Threshold and loss/keep rules are not photographed.",
      },
      {
        name: "Rewards",
        note: "Photographed Daily streak plus Play Today. That panel is login and session time. It is not the codes box.",
      },
    ],
  },
  rewards: {
    h2: "Rewards panel",
    pageH1: "Grow a Chicken Fighter Rewards — Daily streak and Play Today",
    dek: "Photographed in-game Rewards window. Daily tab open. Tasks and Community tabs were not opened. This is not the codes box.",
    intro:
      "The panel title is Rewards. Tabs: Daily (open in the photo), Tasks, and Community. Tasks and Community each showed a 1 badge. We did not open those tabs. This is the only Grow a Chicken Fighter panel we have photographed as Index.",
    howTitle: "How to use Rewards",
    howSteps: [
      "Open Rewards in-game. Daily was the tab showing in our screenshot.",
      "Claim the ready Daily tile the same calendar day. The footer warns: come back tomorrow or the consecutive record resets.",
      "Play Today tracked session time in that screenshot, not a second calendar. Later tiles showed running clocks (10:25, 55:25, 2:55).",
      "Do not paste promo codes into this window. Use the codes control after the tutorial — ticket vs Settings is still unverified.",
    ],
    streakWhy:
      "Days 3, 6, and 7 are the eggs: Royal Egg, VOID EGG, Fortune Egg. Cash and multipliers sit on the other days. If the streak resets, the panel starts again at Day 1 (+50).",
    teaserRows: [
      {
        when: "Daily Day 3",
        reward: "Royal Egg",
      },
      {
        when: "Daily Day 6",
        reward: "VOID EGG",
      },
      {
        when: "Daily Day 7",
        reward: "Fortune Egg",
      },
      {
        when: "Play Today 3 hours",
        reward: "Royal Egg",
      },
    ],
    streakTitle: "Daily streak",
    streakNote:
      "Seven tiles. The photo is Day 1 of 7. On-screen warning: come back tomorrow or the consecutive record resets.",
    streakRows: [
      {
        day: "Day 1",
        reward: "+50 (cash bag)",
        when: "Claim — available in the photo",
      },
      {
        day: "Day 2",
        reward: "x2 CORN for 20 minutes",
        when: "Tomorrow",
      },
      {
        day: "Day 3",
        reward: "Royal Egg",
        when: "In 2 days",
      },
      {
        day: "Day 4",
        reward: "+50 (cash bag)",
        when: "In 3 days",
      },
      {
        day: "Day 5",
        reward: "x2 MONEY for 45 minutes",
        when: "In 4 days",
      },
      {
        day: "Day 6",
        reward: "VOID EGG",
        when: "In 5 days",
      },
      {
        day: "Day 7",
        reward: "Fortune Egg, crown on the tile",
        when: "In 6 days",
      },
    ],
    playTitle: "Play Today",
    playNote:
      "Four session tiles. Timers on the later tiles were running in the photo (10:25, 55:25, 2:55). Treat those clocks as that session, not a published permanent table.",
    playRows: [
      {
        tile: "Now",
        reward: "+50 (cash bag)",
        when: "Claim",
      },
      {
        tile: "15 minutes",
        reward: "+50 (cash bag)",
        when: "Session timer in photo",
      },
      {
        tile: "1 hour",
        reward: "x2 MONEY for 30 minutes",
        when: "Session timer in photo",
      },
      {
        tile: "3 hours",
        reward: "Royal Egg",
        when: "Session timer in photo",
      },
    ],
    source: "In-game Rewards screenshot, Daily tab, 2026-08-16.",
    notCodes:
      "This Rewards window is daily login plus playtime. It is not a codes / ticket screen. Do not paste promo codes here.",
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "Is the Rewards panel where I redeem codes?",
          a: "No. The photographed Rewards window is Daily streak and Play Today. Promo codes go in a separate codes control that we have not photographed.",
        },
        {
          q: "Does missing a day reset the streak?",
          a: "The Daily footer on our screenshot says come back tomorrow or the consecutive record clears. The photo was Day 1 of 7.",
        },
        {
          q: "Which Rewards tiles give eggs?",
          a: "Daily Day 3 Royal Egg, Day 6 VOID EGG, Day 7 Fortune Egg. Play Today 3-hour tile is also a Royal Egg. Hatch pools for those eggs were not on the screenshot.",
        },
        {
          q: "Are Play Today timers a permanent table?",
          a: "No. The 10:25, 55:25, and 2:55 clocks were running in that session photo. Use the labels Now / 15 minutes / 1 hour / 3 hours, not those countdown numbers as a published schedule.",
        },
      ],
    },
  },
  codes: {
    h2: "Codes",
    pageH1: "Grow a Chicken Fighter codes (Roblox)",
    dek: "The Roblox experience page advertises CODE: WELCOME. Other lists disagree on rewards and extra codes. The photographed Rewards panel is not the redeem UI.",
    body: "Official description includes CODE: WELCOME and says to follow the group for codes. Media describe a ticket control after the tutorial. A competing wiki says Settings → Ranking. One public English-client recording used a ticket next to Settings. We have not photographed the redeem box, so those two paths stay unverified. Copy a code below, then paste it in-game — not into Rewards.",
    tableNote:
      "Official mention means we saw it on the experience page. Unverified means other sites listed it. Expired stays empty until a code fails in-game. We do not mark 40KCCU as working just because fan sites do.",
    copyHint: "Tap a code to copy it.",
    rows: [
      {
        code: "WELCOME",
        status: "Official mention",
        reward: "Listed on the experience page. Media disagree on 1 vs 2 Nest Eggs.",
        source: "Roblox experience description, 2026-08-16",
      },
      {
        code: "LETMECOOK",
        status: "Unverified",
        reward: "Media: Cash + Thunder Egg + 2× Money. Not in our screenshot.",
        source: "Destructoid / Dexerto / GameRant, not in-game",
      },
      {
        code: "SERGIOVERSE",
        status: "Unverified",
        reward: "Media: Cash + Scratch Egg + 2× Corn. Casing also disputed.",
        source: "Media lists, not in-game",
      },
      {
        code: "40KCCU",
        status: "Unverified",
        reward: "Some fan sites say a Blazing Egg. Big media lists omitted it.",
        source: "Fan sites, not in-game",
      },
      {
        code: "EGGSCELLENT",
        status: "Unverified",
        reward: "One fan wiki listed 50 Cash. Not in the Rewards photo.",
        source: "Fan wiki, not in-game",
      },
    ],
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "What Grow a Chicken Fighter codes work today?",
          a: "WELCOME is advertised on the official Roblox experience page. LETMECOOK, SERGIOVERSE, 40KCCU, and EGGSCELLENT stay Unverified here until we redeem them in-game.",
        },
        {
          q: "Where do I redeem Grow a Chicken Fighter codes?",
          a: "We have not photographed the redeem box. Media describe a ticket after the tutorial. A competing wiki says Settings → Ranking. The Rewards panel is the wrong window.",
        },
        {
          q: "Is 40KCCU a working code?",
          a: "Not on our list as working. Fan sites listed it; several larger media codes roundups omitted it. Status stays Unverified.",
        },
      ],
    },
  },
  eggs: {
    h2: "Eggs",
    pageH1: "Grow a Chicken Fighter eggs — Royal, VOID, Fortune",
    dek: "Egg names photographed on the Rewards panel. Hatch pools and drop rates are not on that screenshot.",
    teaser:
      "Three egg tiles are readable on Rewards: Royal Egg, VOID EGG, and Fortune Egg. We do not have an Egg Index photo, so those three are the Index row. Media Nest / Thunder / Scratch eggs stay unverified.",
    indexTitle: "Photographed egg tiles",
    indexRows: [
      {
        name: "Royal Egg",
        where: "Daily streak Day 3; Play Today 3-hour tile",
        notes: "Purple patterned egg on the Rewards screenshot.",
      },
      {
        name: "VOID EGG",
        where: "Daily streak Day 6",
        notes: "English label on the tile. Dark spiky egg.",
      },
      {
        name: "Fortune Egg",
        where: "Daily streak Day 7",
        notes: "Crown on the tile. Gold egg art.",
      },
    ],
    otherTitle: "Names from other sites (unverified)",
    otherNote:
      "These showed up on codes articles and fan wikis. They are not on our Rewards screenshot. Do not treat them as Index.",
    otherRows: [
      { name: "Nest Egg", wiki: "Often tied to WELCOME. Reward count conflicts." },
      { name: "Thunder Egg", wiki: "Often tied to LETMECOOK." },
      { name: "Scratch Egg", wiki: "Often tied to SERGIOVERSE." },
      { name: "Blazing Egg", wiki: "Tied to 40KCCU on some fan sites." },
    ],
  },
  chickens: {
    h2: "Chickens",
    pageH1: "Grow a Chicken Fighter chickens — HUD only so far",
    dek: "No Pet Index screenshot yet. The Rewards session HUD showed Golden Goose.",
    body: "Until someone photographs the in-game chicken Index, this page does not publish a 19-name tier list.",
    hudTitle: "Photographed HUD",
    hudRows: [
      {
        name: "Golden Goose",
        where: "Top-of-screen companion / unit with a 1:24 timer in the Rewards screenshot",
        notes: "Name visible. Stats and Index row not opened.",
      },
    ],
    otherTitle: "Fan-wiki / Pocket Tactics names (unverified)",
    otherNote:
      "Astro Chick vs Astro Chicken already conflict. Pocket Tactics listed Astro Chick in both S and A. None of these were on our Rewards photo.",
    otherRows: [
      { name: "Astro Chick / Astro Chicken", wiki: "Pocket Tactics S/A; fan sites" },
      { name: "Founder Rooster", wiki: "Pocket Tactics A" },
      { name: "Viking Chicken", wiki: "Pocket Tactics A" },
      { name: "Agent Cluck", wiki: "Pocket Tactics A" },
      { name: "Commando Rooster", wiki: "Pocket Tactics B" },
      { name: "Tsunami Hen", wiki: "Pocket Tactics B" },
      { name: "Basic Chicken", wiki: "growachickenfighter.codes starter" },
    ],
    otherSkip:
      "No S-tier from us. Open the in-game Index if you need the live roster.",
  },
  fusion: {
    h2: "Fusion",
    pageH1: "Grow a Chicken Fighter fusion — mutated fighters",
    dek: "Official description: fuse two chickens into a mutated monster. No fusion-cost screenshot yet.",
    body: "The experience page lists Fuse as a core loop next to PIT, Tower, and Rebirth. We have not photographed lock slots, trait transfer, or prices. Skip inventing percentages.",
    official:
      "Use Fusion when you have a spare chicken you can replace. Keep the fighter that still wins PIT or Tower fights.",
  },
  faq: {
    h2: "FAQ",
    items: [
      {
        q: "Is Grow a Chicken Fighter the same as Grow a Garden?",
        a: "No. This kit is only for Grow a Chicken Fighter by Sergio Verse Games (place 94640181989498). It is also not a Chicken Farm tycoon.",
      },
      {
        q: "Where do I redeem codes?",
        a: "The experience page advertises CODE: WELCOME. We photographed Rewards, which is daily login and playtime, not the codes box. Use the in-game codes control after the tutorial — ticket vs Settings is still unverified.",
      },
      {
        q: "Does missing a day reset Rewards?",
        a: "The Daily streak footer on our screenshot says come back tomorrow or the consecutive record clears. Day 1 of 7 was showing.",
      },
      {
        q: "What eggs are real?",
        a: "On the photographed Rewards tiles: Royal Egg, VOID EGG, and Fortune Egg. Other egg SKUs from codes articles stay unverified.",
      },
      {
        q: "Do chickens lay eggs while I am offline?",
        a: "Yes according to the official experience description. We have not photographed nest output or an offline timer.",
      },
    ],
  },
  disclaimer: {
    h2: "Disclaimer",
    body: "Unofficial. Not affiliated with Roblox Corporation or Sergio Verse Games.",
  },
  footer:
    "Upvane · unofficial · not affiliated with Roblox Corporation or Sergio Verse Games.",
} as const;

export const growAChickenFighterNav = [
  {
    id: "guide" as const,
    href: growAChickenFighter.path,
    label: growAChickenFighterCopy.nav.guide,
  },
  {
    id: "codes" as const,
    href: `${growAChickenFighter.path}/codes`,
    label: growAChickenFighterCopy.nav.codes,
  },
  {
    id: "rewards" as const,
    href: `${growAChickenFighter.path}/rewards`,
    label: growAChickenFighterCopy.nav.rewards,
  },
  {
    id: "eggs" as const,
    href: `${growAChickenFighter.path}/eggs`,
    label: growAChickenFighterCopy.nav.eggs,
  },
  {
    id: "chickens" as const,
    href: `${growAChickenFighter.path}/chickens`,
    label: growAChickenFighterCopy.nav.chickens,
  },
  {
    id: "fusion" as const,
    href: `${growAChickenFighter.path}/fusion`,
    label: growAChickenFighterCopy.nav.fusion,
  },
] as const;

export const growAChickenFighterCanonical = absoluteUrl(
  growAChickenFighter.path,
);

export const growAChickenFighterMetadata = pageMetadata(
  growAChickenFighterCopy.title,
  growAChickenFighterCopy.metaDescription,
  growAChickenFighter.path,
);

export const growAChickenFighterCodesMetadata = pageMetadata(
  "Grow a Chicken Fighter codes (Roblox) — WELCOME",
  "WELCOME is listed on the Grow a Chicken Fighter experience page. Other codes stay unverified. Photographed Rewards is not the redeem box.",
  `${growAChickenFighter.path}/codes`,
);

export const growAChickenFighterRewardsMetadata = pageMetadata(
  "Grow a Chicken Fighter Rewards — Daily streak and Play Today",
  "Photographed Grow a Chicken Fighter Rewards panel: 7-day streak, Play Today timers, Royal Egg, VOID EGG, Fortune Egg. Not the codes UI.",
  `${growAChickenFighter.path}/rewards`,
);

export const growAChickenFighterEggsMetadata = pageMetadata(
  "Grow a Chicken Fighter eggs — Royal, VOID, Fortune",
  "Egg names from a Grow a Chicken Fighter Rewards screenshot: Royal Egg, VOID EGG, Fortune Egg. No hatch-rate table.",
  `${growAChickenFighter.path}/eggs`,
);

export const growAChickenFighterChickensMetadata = pageMetadata(
  "Grow a Chicken Fighter chickens — Golden Goose HUD",
  "Grow a Chicken Fighter chickens: Golden Goose photographed on the HUD. No Index screenshot, no copied tier list.",
  `${growAChickenFighter.path}/chickens`,
  thinPageRobots,
);

export const growAChickenFighterFusionMetadata = pageMetadata(
  "Grow a Chicken Fighter fusion — mutated fighters",
  "Grow a Chicken Fighter fusion from the official loop: combine two chickens into a mutated fighter. No cost screenshot yet.",
  `${growAChickenFighter.path}/fusion`,
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

export function growAChickenFighterJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": growAChickenFighterCanonical,
        name: growAChickenFighterCopy.title,
        url: growAChickenFighterCanonical,
        description: growAChickenFighterCopy.metaDescription,
        dateModified: growAChickenFighter.lastChecked,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: absoluteUrl("/"),
        },
        about: {
          "@type": "VideoGame",
          name: growAChickenFighter.name,
          url: growAChickenFighter.playUrl,
          gamePlatform: "Roblox",
          author: {
            "@type": "Organization",
            name: growAChickenFighter.developer,
          },
          sameAs: growAChickenFighter.playUrl,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${growAChickenFighterCanonical}#faq`,
        mainEntity: faqEntities(growAChickenFighterCopy.faq.items),
      },
      breadcrumbs([
        { name: growAChickenFighter.name, path: growAChickenFighter.path },
      ]),
    ],
  };
}

export function growAChickenFighterCodesJsonLd() {
  const url = absoluteUrl(`${growAChickenFighter.path}/codes`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        name: growAChickenFighterCopy.codes.pageH1,
        url,
        description: growAChickenFighterCodesMetadata.description,
        dateModified: growAChickenFighter.lastChecked,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities(growAChickenFighterCopy.codes.faq.items),
      },
      breadcrumbs([
        { name: growAChickenFighter.name, path: growAChickenFighter.path },
        { name: "Codes", path: `${growAChickenFighter.path}/codes` },
      ]),
    ],
  };
}

export function growAChickenFighterRewardsJsonLd() {
  const url = absoluteUrl(`${growAChickenFighter.path}/rewards`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        name: growAChickenFighterCopy.rewards.pageH1,
        url,
        description: growAChickenFighterRewardsMetadata.description,
        dateModified: growAChickenFighter.lastChecked,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities(growAChickenFighterCopy.rewards.faq.items),
      },
      breadcrumbs([
        { name: growAChickenFighter.name, path: growAChickenFighter.path },
        { name: "Rewards", path: `${growAChickenFighter.path}/rewards` },
      ]),
    ],
  };
}
