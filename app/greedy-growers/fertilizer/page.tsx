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
  greedyGrowersFertilizerJsonLd,
  greedyGrowersFertilizerMetadata,
} from "@/lib/games/greedy-growers";

export const metadata = greedyGrowersFertilizerMetadata;

export default function GreedyGrowersFertilizerPage() {
  const copy = greedyGrowersCopy.fertilizer;

  return (
    <SiteShell current="fertilizer" slug="greedy-growers">
      <JsonLd data={greedyGrowersFertilizerJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${greedyGrowers.name} · Fertilizer`}
          title={copy.pageH1}
          dek={copy.dek}
          src={greedyGrowersArt.fertilizer}
          alt={greedyGrowersArtAlt.fertilizer}
        />
        <article className="wrap article">
          <p>{copy.lead}</p>
          <h2>{copy.shortTitle}</h2>
          <p>{copy.shortAnswer}</p>

          <EvidencePanel
            lastChecked={greedyGrowers.lastChecked}
            checked={`${greedyGrowers.name} fertilizer and rebirth claims for Roblox place ${greedyGrowers.placeId}.`}
            verified={[
              "The official game loop confirms seed, grow, harvest, and lightning risk.",
              "A public English-client run shows rebirth after the early harvest loop.",
              "GSC already showed a Greedy Growers fertilizer query landing on this kit before this page existed.",
            ]}
            unverified={[
              "A photographed fertilizer menu with live tier names, prices, and exact effects.",
              "Whether fertilizer changes lightning risk or only changes growth/value routing.",
            ]}
          />

          <h2>{copy.evidenceTitle}</h2>
          <DataTable
            columns={["claim", "status", "basis", "safe action"]}
            rows={copy.evidenceRows.map((row) => [
              row.claim,
              row.status,
              row.basis,
              row.action,
            ])}
          />

          <h2>{copy.routeTitle}</h2>
          <ol className="steps">
            {copy.routeSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>

          <h2>{copy.calculatorTitle}</h2>
          <p>
            {copy.calculatorBody}{" "}
            <Link href={`${greedyGrowers.path}/calculator#tool`}>
              Open the Greedy Growers calculator
            </Link>
            .
          </p>

          <h2>{copy.avoidTitle}</h2>
          <DataTable
            columns={["avoid", "why"]}
            rows={copy.avoidRows.map((row) => [row.label, row.reason])}
          />

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
          <KitMore slug="greedy-growers" current="fertilizer" />
        </article>
      </main>
    </SiteShell>
  );
}
