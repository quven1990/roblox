import Link from "next/link";
import { CopyCode } from "@/components/CopyCode";
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
  greedyGrowersCodesJsonLd,
  greedyGrowersCodesMetadata,
  greedyGrowersCopy,
} from "@/lib/games/greedy-growers";

export const metadata = greedyGrowersCodesMetadata;

export default function GreedyGrowersCodesPage() {
  const copy = greedyGrowersCopy.codes;

  return (
    <SiteShell current="codes" slug="greedy-growers">
      <JsonLd data={greedyGrowersCodesJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${greedyGrowers.name} · Codes`}
          title={copy.pageH1}
          dek={copy.dek}
          src={greedyGrowersArt.codes}
          alt={greedyGrowersArtAlt.codes}
        />
        <article className="wrap article">
          <p>{copy.lead}</p>
          <p>
            Codes do not change lightning; the harvest loop lives on the{" "}
            <Link href={greedyGrowers.path}>Greedy Growers guide</Link>.{" "}
            {copy.body}
          </p>
          <EvidencePanel
            title="Codes verification"
            lastChecked={greedyGrowers.lastChecked}
            checked={`${greedyGrowers.name} codes for Roblox place ${greedyGrowers.placeId}.`}
            verified={[
              "Public trackers disagree on ILOVECATS, so it is marked Disputed rather than Working.",
              "The table includes source context instead of presenting a copied active list.",
              "The guide explains that codes do not change the harvest and lightning loop.",
            ]}
            unverified={[
              "A photographed Settings code box on this kit.",
              "A successful redeem for ILOVECATS or any other current string.",
            ]}
          />
          <p>{copy.tableNote}</p>
          <p className="source">{copy.copyHint}</p>
          <DataTable
            columns={["code", "status", "reward", "source"]}
            rows={copy.rows.map((row) => [
              <CopyCode key={row.code} code={row.code} />,
              row.status,
              row.reward,
              row.source,
            ])}
          />
          <h2>{copy.redeemTitle}</h2>
          <ol className="steps">
            {copy.redeemSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
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
          <KitMore slug="greedy-growers" current="codes" />
        </article>
      </main>
    </SiteShell>
  );
}
