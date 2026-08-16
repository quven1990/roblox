import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  greedyGrowers,
  greedyGrowersArt,
  greedyGrowersArtAlt,
  greedyGrowersCopy,
  greedyGrowersSeedsJsonLd,
  greedyGrowersSeedsMetadata,
} from "@/lib/games/greedy-growers";

export const metadata = greedyGrowersSeedsMetadata;

export default function GreedyGrowersSeedsPage() {
  const copy = greedyGrowersCopy.seeds;

  return (
    <SiteShell current="seeds" slug="greedy-growers">
      <JsonLd data={greedyGrowersSeedsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${greedyGrowers.name} · Seeds`}
          title={copy.pageH1}
          dek={copy.dek}
          src={greedyGrowersArt.seeds}
          alt={greedyGrowersArtAlt.seeds}
        />
        <article className="wrap article">
          <p>
            In <Link href={greedyGrowers.path}>Greedy Growers</Link>, the river
            is step one.{" "}
            <Link href={`${greedyGrowers.path}/mutations`}>
              Greedy Growers mutations
            </Link>{" "}
            can change what a harvest is worth after you plant.
          </p>
          <p>{copy.intro}</p>
          <h2>{copy.conflictTitle}</h2>
          <p>{copy.conflictBody}</p>
          <h2>{copy.tipsTitle}</h2>
          <ol className="zone-list">
            {copy.tips.map((tip) => (
              <li key={tip}>
                <span>{tip}</span>
              </li>
            ))}
          </ol>
          <p>
            Pets that claim to drop extra seeds belong on{" "}
            <Link href={`${greedyGrowers.path}/pets`}>Greedy Growers pets</Link>
            , not on a fake SKU list.
          </p>
          <h2>{copy.faq.h2}</h2>
          <div className="faq">
            {copy.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <p className="source">Last checked {greedyGrowers.lastChecked}.</p>
          <KitMore slug="greedy-growers" current="seeds" />
        </article>
      </main>
    </SiteShell>
  );
}
