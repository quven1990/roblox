import Link from "next/link";
import { DataTable } from "@/components/DataTable";
import { EvidencePanel } from "@/components/EvidencePanel";
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
          <p>{copy.lead}</p>
          <p>{copy.intro}</p>
          <EvidencePanel
            lastChecked={greedyGrowers.lastChecked}
            checked={`${greedyGrowers.name} mutations for Roblox place ${greedyGrowers.placeId}.`}
            verified={[
              "The official game loop supports harvest timing, which is where mutation risk belongs.",
              "Each row below is labeled Reported rather than confirmed when it comes from public mutation tables.",
              "The page keeps seed stock names separate from mutation claims.",
            ]}
            unverified={[
              "Sell-panel screenshots for each multiplier.",
              "Whether mutations stack, how they stack, and exact weather purchase rules.",
            ]}
          />
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
