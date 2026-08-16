import Link from "next/link";
import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  greedyGrowers,
  greedyGrowersArt,
  greedyGrowersArtAlt,
  greedyGrowersCopy,
  greedyGrowersMutationsJsonLd,
  greedyGrowersMutationsMetadata,
} from "@/lib/games/greedy-growers";

export const metadata = greedyGrowersMutationsMetadata;

export default function GreedyGrowersMutationsPage() {
  const copy = greedyGrowersCopy.mutations;

  return (
    <SiteShell current="mutations" slug="greedy-growers">
      <JsonLd data={greedyGrowersMutationsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${greedyGrowers.name} · Mutations`}
          title={copy.pageH1}
          dek={copy.dek}
          src={greedyGrowersArt.mutations}
          alt={greedyGrowersArtAlt.mutations}
        />
        <article className="wrap article">
          <p>
            In <Link href={greedyGrowers.path}>Greedy Growers</Link>, mutations
            sit on top of the harvest loop.{" "}
            <Link href={`${greedyGrowers.path}/seeds`}>
              Greedy Growers seeds
            </Link>{" "}
            is where stock names live.
          </p>
          <p>{copy.intro}</p>
          <DataTable
            columns={["mutation", "how (reported)", "multiplier", "status"]}
            rows={copy.rows.map((row) => [
              row.name,
              row.how,
              row.multiplier,
              row.status,
            ])}
          />
          <p>{copy.stackNote}</p>
          <p>
            Shocked and Charged are harvest-timing questions. Return to{" "}
            <Link href={greedyGrowers.path}>Greedy Growers</Link> for early vs
            late harvest.
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
          <KitMore slug="greedy-growers" current="mutations" />
        </article>
      </main>
    </SiteShell>
  );
}
