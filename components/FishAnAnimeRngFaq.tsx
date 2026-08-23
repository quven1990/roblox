import type { ReactNode } from "react";
import Link from "next/link";
import { fishAnAnimeRng, fishAnAnimeRngCopy } from "@/lib/games/fish-an-anime-rng";

type FaqPage = "guide" | "codes" | "tier-list" | "characters" | "rarities";

const path = fishAnAnimeRng.path;

function faqAnswersFor(page: FaqPage): Record<string, ReactNode> {
  const codes = (
    <Link href={`${path}/codes`}>Fish an Anime RNG codes</Link>
  );
  const tierList = (
    <Link href={`${path}/tier-list`}>Fish an Anime RNG tier list</Link>
  );
  const characters = (
    <Link href={`${path}/characters`}>Fish an Anime RNG characters</Link>
  );
  const rarities = (
    <Link href={`${path}/rarities`}>Fish an Anime RNG rarities</Link>
  );
  const wiki = <Link href={path}>Fish an Anime RNG wiki</Link>;

  const byPage: Record<FaqPage, Record<string, ReactNode>> = {
    guide: {
      "Where are Fish an Anime RNG codes?": (
        <>
          On the {codes} page only. This {wiki} hub links there instead of
          duplicating the full table so search results stay clean.
        </>
      ),
      "Do you publish a Fish an Anime RNG tier list with every character name?": (
        <>
          No. Public sources do not provide a verified full stat database. The{" "}
          {tierList} page ranks unit roles (income core, flexible earner,
          specialist) instead of inventing names.
        </>
      ),
      "What is the difference between characters and rarities pages?": (
        <>
          {characters} covers collection, placement, and base slots. {rarities}{" "}
          covers fishing labels, tracking catches, and income tests. Tier
          rankings stay on the {tierList} page.
        </>
      ),
      "How do I redeem codes?": (
        <>
          Beebom (August 20, 2026): finish the tutorial, open Store on the left,
          enter the code at the bottom, Submit. GameRant names Settings instead
          — both paths stay reported until photographed. Full strings live on the{" "}
          {codes} page.
        </>
      ),
    },
    codes: {
      "Do codes change fishing rarity?": (
        <>
          They drop boxes and potions that may help progression. Rarity labels
          and odds are on the {rarities} page, not here.
        </>
      ),
      "Where is the tier list?": (
        <>
          On the {tierList} page. This codes page does not rank characters so
          the two URLs do not compete in search.
        </>
      ),
    },
    "tier-list": {
      "Where is the character roster?": (
        <>
          On the {characters} page. This tier list stays role-based until
          verified stats are photographed.
        </>
      ),
      "Is rarity the same as tier?": (
        <>
          No. Rarity labels live on the {rarities} page. A rare catch can still
          be C-tier if income is weak.
        </>
      ),
      "Do codes belong on this page?": (
        <>
          No. Redeem strings are only on the {codes} page.
        </>
      ),
    },
    characters: {
      "Where is the Fish an Anime RNG tier list?": (
        <>
          On the {tierList} page. Characters here avoids S/A/B columns so
          search snippets stay distinct.
        </>
      ),
      "How do rarities relate to characters?": (
        <>
          Rarity is a label on a catch. The {rarities} page explains tracking
          and income tests.
        </>
      ),
      "Can I get characters from codes?": (
        <>
          Codes grant boxes and potions, not direct character drops. See the{" "}
          {codes} page for strings.
        </>
      ),
    },
    rarities: {
      "Is this the tier list page?": (
        <>
          No. {tierList} ranks unit roles. Rarities covers fishing labels and
          tracking.
        </>
      ),
      "Should I chase rarity or income first?": (
        <>
          Early progression favors dependable cash. Use the {tierList} framework
          once income is stable.
        </>
      ),
    },
  };

  return byPage[page];
}

function faqCopyFor(page: FaqPage) {
  switch (page) {
    case "guide":
      return fishAnAnimeRngCopy.faq;
    case "codes":
      return fishAnAnimeRngCopy.codes.faq;
    case "tier-list":
      return fishAnAnimeRngCopy.tierList.faq;
    case "characters":
      return fishAnAnimeRngCopy.characters.faq;
    case "rarities":
      return fishAnAnimeRngCopy.rarities.faq;
  }
}

export function FishAnAnimeRngFaq({ page }: { page: FaqPage }) {
  const copy = faqCopyFor(page);
  const answers = faqAnswersFor(page);

  return (
    <>
      <h2>{copy.h2}</h2>
      <div className="faq">
        {copy.items.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{answers[item.q] ?? item.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
