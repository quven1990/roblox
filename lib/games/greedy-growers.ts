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
  tags: ["Guide", "Codes", "Mutations", "Seeds", "Fertilizer", "Pets", "Calculator"],
  icon: "/games/greedy-growers-rbx.png",
  thumb: "/games/greedy-growers-rbx-thumb.jpg",
} as const satisfies GameFacts;

export const greedyGrowersArt = {
  guide: "/games/art/greedy-guide-rbx.jpg",
  codes: "/games/art/greedy-codes-rbx.jpg",
  mutations: "/games/art/greedy-mutations-rbx.jpg",
  seeds: "/games/art/greedy-seeds-rbx.jpg",
  pets: "/games/art/greedy-pets-rbx.jpg",
    calculator: "/games/art/greedy-guide-rbx.jpg",
  fertilizer: "/games/art/greedy-guide-rbx.jpg",
} as const;

export const greedyGrowersVideos = {
  loop: {
    id: "GkaJB8wyJEU",
    watchUrl: "https://www.youtube.com/watch?v=GkaJB8wyJEU",
    title: "Greedy Growers harvest loop — public English-client run",
    credit: "ItsChalls",
    poster: greedyGrowersArt.guide,
  },
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
  calculator:
    "Official Roblox thumbnail: Diamond Tree labeled SECRET versus a lightning-struck tree at $0 — used as the calculator hero.",
  fertilizer:
    "Official Roblox thumbnail: Diamond Tree labeled SECRET versus a lightning-struck tree at $0 — used for the fertilizer and rebirth guide.",
} as const;

export const greedyGrowersCopy = {
  title: "Greedy Growers (Roblox) — harvest before lightning",
  h1: "Greedy Growers (Roblox) — harvest before lightning",
  dek: "Greedy Growers is a Roblox game by banjo greedy lady. How to play Greedy Growers: buy a seed from the river, plant it, let the tree grow, harvest before lightning. This unofficial kit is not Grow a Garden.",
  metaDescription:
    "Unofficial Greedy Growers Roblox guide: river seeds, harvest before lightning, reported mutations. Not Grow a Garden.",
  heroCta: "Play on Roblox",
  nav: {
    guide: "Guide",
    codes: "Codes",
    mutations: "Mutations",
    seeds: "Seeds",
    pets: "Pets",
    fertilizer: "Fertilizer",
    calculator: "Calculator",
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
      {
        id: "fertilizer",
        title: "Fertilizer",
        sitelink: "Greedy Growers fertilizer",
        body: "Reported rebirth unlocks, fruit-income route, and EV cautions. No fake price ladder.",
      },
      {
        id: "calculator",
        title: "Calculator",
        sitelink: "Greedy Growers calculator",
        body: "Manual EV tool: seed cost, harvest, mutation, pet bonus, lightning risk.",
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
    videoH2: "Watch a public run",
    videoCaption:
      "ItsChalls recorded an English-client first harvest: river seed, plant, sell, harvest timing versus lightning, then a rebirth. This is unofficial gameplay, not a Roblox or developer video. Seed names from the clip stay off the Seeds page. The title mentions codes; the clip does not show a redeem box.",
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
    pageH1: "Greedy Growers codes — ILOVECATS status",
    dek: "No working code is confirmed on this kit. ILOVECATS stays Disputed: some lists report 100 Tickets, while other code lists show no active codes.",
    lead: "Greedy Growers codes checked against public August 2026 lists: ILOVECATS is Disputed, not Working here. Some sites report 100 Tickets, while other code lists show no active codes.",
    body: "Public pages put the box in Settings (top-left cog). We have not photographed that window. Do not paste codes into a third-party form.",
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
    pageH1: "Greedy Growers mutations list — Dewy to Cosmic",
    dek: "All six reported mutations in one table: Dewy, Shocked, Radioactive, Charged, Golden, and Cosmic. Weather and lightning rules stay reported until photographed.",
    lead: "Greedy Growers mutations checked August 16, 2026: public tables report Dewy, Shocked, Radioactive, Charged, Golden, and Cosmic. Multipliers below are reported, not photographed in a sell panel.",
    intro:
      "Public articles list six mutations. Weather rows last a few minutes on those pages. Lightning rows need the strike close to harvest. We have not photographed a sell panel, so every multiplier below is reported.",
    answerTitle: "Quick answers for mutation searches",
    answers: [
      {
        q: "All mutations",
        a: "Reported list: Dewy, Shocked, Radioactive, Charged, Golden, and Cosmic.",
      },
      {
        q: "Lightning mutations",
        a: "Shocked and Charged are the lightning-timing rows. Public guides split them around a higher growth line.",
      },
      {
        q: "Weather mutations",
        a: "Dewy, Radioactive, Golden, and Cosmic are reported from Misty, Acid Rain, Rainbow, and Meteor Shower weather.",
      },
      {
        q: "Best multiplier",
        a: "Cosmic is the highest reported multiplier at 100x, but this kit still labels it Reported.",
      },
    ],
    categoriesTitle: "Lightning vs weather mutations",
    categories: [
      {
        group: "Lightning",
        includes: "Shocked, Charged",
        trigger: "Reported when lightning hits near harvest timing",
        use: "Use the calculator when you are deciding whether to harvest early or chase a higher multiplier.",
      },
      {
        group: "Weather",
        includes: "Dewy, Radioactive, Golden, Cosmic",
        trigger: "Reported from Misty, Acid Rain, Rainbow, and Meteor Shower weather",
        use: "Treat these as value multipliers only after you see the same label on your seed, plant, or fruit.",
      },
    ],
    evTitle: "Use mutation values in the harvest calculator",
    evBody:
      "For EV, enter the reported mutation multiplier as a multiplier only after you see that mutation in your run. Leave it at 1 for unknown stacks, unverified pets, or fertilizer claims. Lightning risk belongs in the failure-rate box, not in the mutation multiplier.",
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
        {
          q: "Can Greedy Growers mutations stack?",
          a: "Public guides say stacks can happen, but the exact stack formula is not confirmed here. Use one observed multiplier in the calculator instead of adding reported percentages.",
        },
      ],
    },
  },
  seeds: {
    h2: "Seeds",
    pageH1: "Greedy Growers seeds list — river stock conflicts",
    dek: "Seeds are bought from the river and planted on a plot. Public seed names disagree, so this page explains what is verified before it prints a price table.",
    lead: "Greedy Growers seeds checked August 16, 2026: the verified loop is river seed, plant, grow, harvest. Starfruit Tree and Diamond Tree appear in official thumbnails, but the live river stock, prices, and full seed list are not photographed here.",
    intro:
      "Official text only confirms: buy a seed from the river, plant it, grow, harvest. The official Roblox thumbnails name Starfruit Tree and Diamond Tree as SECRET. That is marketing art on the experience page, not a river SKU list or a price table.",
    answerTitle: "Quick answers for seed searches",
    answers: [
      {
        q: "Where to buy seeds",
        a: "The official description puts seeds at the river. Buy there, plant on your plot, then harvest before lightning.",
      },
      {
        q: "Full seed list",
        a: "Not verified. Public lists disagree, and this kit has no photographed river stock with live names and prices.",
      },
      {
        q: "Starfruit Tree / Diamond Tree",
        a: "Those names are visible in official Roblox thumbnails as SECRET examples, not as confirmed river-shop SKUs.",
      },
      {
        q: "Best seed",
        a: "Use a seed you can replace after lightning. A copied S-tier is weaker than your own seed cost, harvest value, and failure rate.",
      },
    ],
    evidenceTitle: "Seed evidence matrix",
    evidenceRows: [
      {
        claim: "River is the seed source",
        status: "Verified",
        basis: "Official Roblox description says to buy a seed from the river, plant it, and harvest.",
        action: "Use this as the route, but not as a price table.",
      },
      {
        claim: "Starfruit Tree and Diamond Tree exist as names",
        status: "Verified as thumbnails",
        basis: "Official Roblox thumbnails label Starfruit Tree and Diamond Tree as SECRET examples.",
        action: "Treat them as target leads until a live river or sell panel screenshot confirms details.",
      },
      {
        claim: "Oak/Pine/Apple or Basic/Strawberry/Corn/Grape ladders",
        status: "Conflicting reports",
        basis: "Public guides use different seed dictionaries.",
        action: "Do not merge them into one fake Index.",
      },
      {
        claim: "Seed prices and rarities",
        status: "Not verified",
        basis: "No photographed river stock on this kit.",
        action: "Record live price, growth time, harvest, mutation, and lightning result before ranking.",
      },
    ],
    conflictTitle: "Why there is no price table yet",
    conflictBody:
      "One public table uses Oak, Pine, Apple, and a long rarity ladder with huge late prices. Another money guide uses Basic Seed, Strawberry, Corn, and Grape. Official thumbnails add Starfruit Tree and Diamond Tree. Until we photograph the river belt, none of those lists is an Index here.",
    routeTitle: "Safe seed route",
    routeSteps: [
      "Buy a seed you can replace if lightning hits.",
      "Do not spend the whole reserve on one river roll.",
      "Treat mutation value separately from the seed's base price.",
      "If you test fertilizer or pets, change only one variable per run.",
      "Use the calculator with your own seed cost, harvest value, growth time, and lightning failure rate.",
    ],
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "Is there a Greedy Growers seed list?",
          a: "Not a verified full list on this kit. Public guides disagree, and we do not have a photographed river stock table yet.",
        },
        {
          q: "Where do I buy Greedy Growers seeds?",
          a: "The official description says the river. Plant on your plot after you buy.",
        },
        {
          q: "Are Starfruit Tree and Diamond Tree real seeds?",
          a: "They are real names on official Roblox thumbnails. This page does not treat them as confirmed river-shop SKUs or prices.",
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
    pageH1: "Greedy Growers pets, wiki claims, and tier list status",
    dek: "Pets Update searches are real, but named rosters and S-tier lists need pet-card screenshots before they become Index here.",
    lead: "Greedy Growers pets checked August 16, 2026: public guides describe Pet Shop eggs, three equip slots, and passive buckets. This kit has no photographed pet cards yet, so pet names, hatch odds, and tier lists stay unverified.",
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
    wikiTitle: "Wiki, Index, and tier list status",
    wikiRows: [
      {
        search: "Greedy Growers wiki",
        answer: "Use this page as a verification desk, not a copied wiki. It separates the pet system from unverified rosters.",
        status: "Useful, not complete",
      },
      {
        search: "Greedy Growers pet Index",
        answer: "No in-game pet Index or pet-card screenshot has been captured on this kit.",
        status: "Missing evidence",
      },
      {
        search: "Greedy Growers 18 pets",
        answer: "Public pages say 18, but this kit has not counted them in-game.",
        status: "Reported",
      },
      {
        search: "Greedy Growers pets tier list",
        answer: "No tier list is published until ability text, rarity, obtain path, and current hatch source are photographed.",
        status: "Held back",
      },
    ],
    abilityTitle: "How to judge a pet before a tier list exists",
    abilityRows: [
      {
        bucket: "Growth speed",
        whatToRecord: "Ability text, percent or time saved, and whether it changes one plot or all plots.",
        whyItMatters: "Shorter growth can reduce lightning exposure.",
      },
      {
        bucket: "Weather / mutation help",
        whatToRecord: "Exact wording and whether it changes mutation chance or only event timing.",
        whyItMatters: "Mutation value belongs in EV only after the label appears in your run.",
      },
      {
        bucket: "Extra seeds",
        whatToRecord: "Seed name, source, and whether the pet gives a seed directly or improves a roll.",
        whyItMatters: "This affects reserve management more than raw harvest value.",
      },
      {
        bucket: "Lightning protection",
        whatToRecord: "Whether it blocks strikes, reduces odds, or only repairs loss.",
        whyItMatters: "Lightning risk should stay in the calculator until protection is measured.",
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
          q: "Is there a Greedy Growers pets wiki?",
          a: "This page acts as a verification desk for pet claims. It does not copy a full wiki roster without in-game pet-card evidence.",
        },
        {
          q: "How do I get Greedy Growers pets?",
          a: "Public guides say Pet Shop eggs with tickets. Unverified here. Do not copy Grow a Garden egg lists.",
        },
        {
          q: "What are the best Greedy Growers pets?",
          a: "We do not publish a pet tier list without ability screenshots.",
        },
        {
          q: "What should I screenshot for a pet to become Index?",
          a: "Capture the English-client pet card with name, rarity, ability text, obtain path, and any equip or hatch context.",
        },
      ],
    },
  },
  calculator: {
    h2: "Calculator",
    pageH1: "Greedy Growers calculator (Roblox) — harvest EV",
    dek: "Manual expected-value tool. Enter your seed cost, harvest, mutation, pet bonus, and lightning failure rate. No fake seed database and no default pet presets.",
    lead: "Greedy Growers calculator: enter seed cost, harvest value, mutation multiplier, pet bonus, and lightning failure chance to estimate EV from your own run. It does not invent live prices or pet presets.",
    intro:
      "This is editorial math from the inputs you type. It does not know official seed prices, lightning odds, or pet ability values. Leave multipliers at 1 until you measure them.",
    trustNote:
      "Sample defaults are only for learning the form. Replace them with one seed, one timing window, and one pet you actually tested.",
    formulasTitle: "Formulas",
    formulas: [
      {
        name: "Base profit",
        formula: "base harvest − seed cost",
        note: "Clean run before pet, mutation, and risk.",
      },
      {
        name: "Pet value",
        formula: "base harvest × (1 + pet bonus %)",
        note: "Pet bonus starts at 0 until you measure one.",
      },
      {
        name: "Adjusted value",
        formula: "pet value × mutation × fertilizer × rebirth",
        note: "Use 1 for any multiplier you have not measured.",
      },
      {
        name: "Lightning EV",
        formula: "(adjusted value × success rate) − seed cost",
        note: "Success rate is 1 − lightning failure %.",
      },
      {
        name: "Profit per minute",
        formula: "(EV ÷ growth minutes) × plots",
        note: "Compare routes with different wait times.",
      },
      {
        name: "Break-even harvest",
        formula: "seed cost ÷ (success rate × multipliers)",
        note: "Base harvest needed before the run stops losing value.",
      },
    ],
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "Does the Greedy Growers calculator use official numbers?",
          a: "No. It only uses the numbers you enter. Official sources confirm the harvest loop and lightning risk, not exact failure rates or pet presets.",
        },
        {
          q: "Are there default pet multipliers?",
          a: "No. Pet ability values are not verified here, so the pet bonus starts at 0.",
        },
        {
          q: "What is lightning-adjusted expected value?",
          a: "Adjusted harvest value times success rate, minus seed cost. It estimates average profit per attempt after lightning losses.",
        },
        {
          q: "Can this pick the best pet or seed?",
          a: "It can judge the one seed and one pet you entered. It does not rank all pets or seeds.",
        },
      ],
    },
  },
  fertilizer: {
    h2: "Fertilizer",
    pageH1: "Greedy Growers fertilizer and rebirth route",
    dek: "Fertilizer is a reported progression layer after rebirth. This guide explains what public runs show, what remains unverified, and when to test it in the calculator.",
    lead:
      "Greedy Growers fertilizer checked August 16, 2026: public gameplay and money-route guides report fertilizer after rebirth, with Basic Fertilizer as the safest early test. Exact live costs, growth effects, and higher-tier values are not verified here.",
    shortTitle: "Quick answer",
    shortAnswer:
      "Use fertilizer only when you can afford the seed, the fertilizer, and one failed lightning run. Treat fertilizer as a way to shorten exposure or improve fruit income, not as proof that a long hold is safe.",
    evidenceTitle: "What the sources support",
    evidenceRows: [
      {
        claim: "Rebirth unlocks fertilizer progression",
        status: "Reported",
        basis: "A public English-client run reaches rebirth; money guides report Basic Fertilizer after the first rebirth and higher tiers later.",
        action: "Do not publish exact tier costs until the fertilizer menu is photographed on this kit.",
      },
      {
        claim: "Fertilizer belongs to money routing",
        status: "Reported",
        basis: "External money-route pages discuss fertilizer together with harvest timing, fruit income, and rebirth.",
        action: "Use it as a route decision, not as a standalone best-item rank.",
      },
      {
        claim: "Fertilizer removes lightning risk",
        status: "Not verified",
        basis: "The official Roblox description still centers lightning risk; no source proves fertilizer cancels strikes.",
        action: "Keep lightning failure chance in the calculator.",
      },
    ],
    routeTitle: "Safe fertilizer route",
    routeSteps: [
      "Build a reserve with early harvests before you test fertilizer.",
      "Use a cheap seed first, because losing a fertilized expensive seed can erase the session.",
      "Record seed cost, fertilizer cost, harvest value, growth minutes, and whether lightning hit.",
      "Enter those numbers in the calculator instead of trusting a copied profit table.",
      "Only move to higher tiers when a full failed attempt would not stop your next run.",
    ],
    calculatorTitle: "How to test fertilizer EV",
    calculatorBody:
      "In the calculator, put fertilizer into the fertilizer multiplier only if you measured a clean before/after result. If you only know that fertilizer was applied, leave the multiplier at 1 and record the shorter growth time instead.",
    avoidTitle: "What this page avoids",
    avoidRows: [
      {
        label: "Fake tier ladder",
        reason: "Public pages disagree and can rot after updates.",
      },
      {
        label: "Guaranteed profit claims",
        reason: "Lightning can still wipe the run unless a current source proves otherwise.",
      },
      {
        label: "Script automation advice",
        reason: "Auto-fertilizer scripts can burn coins and are outside this fair-play guide.",
      },
    ],
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "What does fertilizer do in Greedy Growers?",
          a: "Public guides treat fertilizer as a progression tool for faster or better money routes after rebirth. Exact live effects are not verified here.",
        },
        {
          q: "When should I use fertilizer?",
          a: "Use it after you can afford the seed, fertilizer, and one failed lightning run. Test on cheap seeds before expensive holds.",
        },
        {
          q: "Does fertilizer stop lightning?",
          a: "Not confirmed. The official loop still warns that lightning can strike, so keep lightning risk in your EV calculation.",
        },
        {
          q: "Should fertilizer get its own tier list?",
          a: "Not yet. This kit has no photographed fertilizer menu with current costs and effects.",
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
  {
    id: "fertilizer" as const,
    href: `${greedyGrowers.path}/fertilizer`,
    label: greedyGrowersCopy.nav.fertilizer,
  },
  {
    id: "calculator" as const,
    href: `${greedyGrowers.path}/calculator`,
    label: greedyGrowersCopy.nav.calculator,
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
  "Greedy Growers codes: ILOVECATS status is Disputed, not confirmed Working here. Some lists report 100 Tickets; others show no active codes.",
  `${greedyGrowers.path}/codes`,
  "codes",
);

export const greedyGrowersMutationsMetadata = ggMeta(
  greedyGrowersCopy.mutations.pageH1,
  "Greedy Growers mutations list: Dewy, Shocked, Radioactive, Charged, Golden, Cosmic, with reported lightning and weather rules.",
  `${greedyGrowers.path}/mutations`,
  "mutations",
);

export const greedyGrowersSeedsMetadata = ggMeta(
  greedyGrowersCopy.seeds.pageH1,
  "Greedy Growers seeds list: river loop, Starfruit and Diamond thumbnail evidence, conflicting public seed names, and no fake live price table.",
  `${greedyGrowers.path}/seeds`,
  "seeds",
);

export const greedyGrowersPetsMetadata = ggMeta(
  greedyGrowersCopy.pets.pageH1,
  "Greedy Growers pets wiki desk: reported Pet Shop eggs, three slots, 18-pet claims, and why no tier list is published without pet-card screenshots.",
  `${greedyGrowers.path}/pets`,
  "pets",
);

export const greedyGrowersCalculatorMetadata = ggMeta(
  greedyGrowersCopy.calculator.pageH1,
  "Greedy Growers calculator: manual EV for seed cost, harvest, mutation, pet bonus, and lightning risk. No fake seed database or pet presets.",
  `${greedyGrowers.path}/calculator`,
  "calculator",
);

export const greedyGrowersFertilizerMetadata = ggMeta(
  greedyGrowersCopy.fertilizer.pageH1,
  "Greedy Growers fertilizer guide: reported rebirth unlocks, safe route testing, calculator inputs, and what is still unverified.",
  `${greedyGrowers.path}/fertilizer`,
  "fertilizer",
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

export function greedyGrowersCalculatorJsonLd() {
  const url = absoluteUrl(`${greedyGrowers.path}/calculator`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url,
        name: greedyGrowersCopy.calculator.pageH1,
        description: String(greedyGrowersCalculatorMetadata.description ?? ""),
        image: ggImage("calculator"),
      }),
      {
        "@type": "SoftwareApplication",
        name: "Greedy Growers expected value calculator",
        applicationCategory: "GameApplication",
        operatingSystem: "Web",
        description: greedyGrowersCopy.calculator.dek,
        url,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities(greedyGrowersCopy.calculator.faq.items),
      },
      breadcrumbs([
        { name: greedyGrowers.name, path: greedyGrowers.path },
        { name: "Calculator", path: `${greedyGrowers.path}/calculator` },
      ]),
    ],
  };
}

export function greedyGrowersFertilizerJsonLd() {
  const url = absoluteUrl(`${greedyGrowers.path}/fertilizer`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        url,
        name: greedyGrowersCopy.fertilizer.pageH1,
        description: String(greedyGrowersFertilizerMetadata.description ?? ""),
        image: ggImage("fertilizer"),
      }),
      {
        "@type": "HowTo",
        name: "How to test fertilizer safely in Greedy Growers",
        description: greedyGrowersCopy.fertilizer.shortAnswer,
        step: greedyGrowersCopy.fertilizer.routeSteps.map((text, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          text,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities(greedyGrowersCopy.fertilizer.faq.items),
      },
      breadcrumbs([
        { name: greedyGrowers.name, path: greedyGrowers.path },
        { name: "Fertilizer", path: `${greedyGrowers.path}/fertilizer` },
      ]),
    ],
  };
}
