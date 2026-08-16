import Link from "next/link";
import { CopyCode } from "@/components/CopyCode";
import { DataTable } from "@/components/DataTable";
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
          <p>
            In <Link href={greedyGrowers.path}>Greedy Growers</Link>, codes are a
            side path. The harvest loop lives on the guide. A code does not
            change lightning rules.
          </p>
          <p>{copy.body}</p>
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
