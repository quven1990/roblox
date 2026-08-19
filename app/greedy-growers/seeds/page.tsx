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
          <p>{copy.lead}</p>
          <p>{copy.intro}</p>
          <EvidencePanel
            lastChecked={greedyGrowers.lastChecked}
            checked={`${greedyGrowers.name} seeds for Roblox place ${greedyGrowers.placeId}.`}
            verified={[
              "The official Roblox page confirms the river seed, plant, grow, and harvest loop.",
              "Official thumbnails name Starfruit Tree and Diamond Tree as SECRET marketing examples.",
              "Public seed lists conflict, so this page explains the conflict instead of publishing a fake price table.",
            ]}
            unverified={[
              "A photographed river seed belt with live names, prices, and rarities.",
              "Whether public Oak/Pine/Apple or Basic/Strawberry/Corn/Grape lists match the current client.",
            ]}
          />
          <h2>{copy.answerTitle}</h2>
          <DataTable
            columns={["query", "answer"]}
            rows={copy.answers.map((row) => [row.q, row.a])}
          />
          <h2>{copy.evidenceTitle}</h2>
          <DataTable
            columns={["claim", "status", "basis", "action"]}
            rows={copy.evidenceRows.map((row) => [
              row.claim,
              row.status,
              row.basis,
              row.action,
            ])}
          />
          <h2>{copy.conflictTitle}</h2>
          <p>{copy.conflictBody}</p>
          <h2>{copy.routeTitle}</h2>
          <ol className="zone-list">
            {copy.routeSteps.map((step) => (
              <li key={step}>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p>
            Pets that claim to drop extra seeds belong on{" "}
            <Link href={`${greedyGrowers.path}/pets`}>Greedy Growers pets</Link>
            , and measured run math belongs in the{" "}
            <Link href={`${greedyGrowers.path}/calculator`}>
              Greedy Growers calculator
            </Link>
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
