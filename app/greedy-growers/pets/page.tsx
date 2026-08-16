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
  greedyGrowersPetsJsonLd,
  greedyGrowersPetsMetadata,
} from "@/lib/games/greedy-growers";

export const metadata = greedyGrowersPetsMetadata;

export default function GreedyGrowersPetsPage() {
  const copy = greedyGrowersCopy.pets;

  return (
    <SiteShell current="pets" slug="greedy-growers">
      <JsonLd data={greedyGrowersPetsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${greedyGrowers.name} · Pets`}
          title={copy.pageH1}
          dek={copy.dek}
          src={greedyGrowersArt.pets}
          alt={greedyGrowersArtAlt.pets}
        />
        <article className="wrap article">
          <p>
            In <Link href={greedyGrowers.path}>Greedy Growers</Link>, pets sit on
            top of the harvest loop. A useful pet should change{" "}
            <Link href={`${greedyGrowers.path}/seeds`}>
              Greedy Growers seeds
            </Link>{" "}
            or{" "}
            <Link href={`${greedyGrowers.path}/mutations`}>
              Greedy Growers mutations
            </Link>
            .
          </p>
          <p>{copy.intro}</p>
          <h2>{copy.structureTitle}</h2>
          <ol className="zone-list">
            {copy.structure.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.note}</span>
              </li>
            ))}
          </ol>
          <div className="note warn">
            <p>{copy.rosterNote}</p>
          </div>
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
          <KitMore slug="greedy-growers" current="pets" />
        </article>
      </main>
    </SiteShell>
  );
}
