import { CopyCode } from "@/components/CopyCode";
import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  animeVanguards,
  animeVanguardsArt,
  animeVanguardsArtAlt,
  animeVanguardsCodesJsonLd,
  animeVanguardsCodesMetadata,
  animeVanguardsCopy,
} from "@/lib/games/anime-vanguards";

export const metadata = animeVanguardsCodesMetadata;

export default function AnimeVanguardsCodesPage() {
  const copy = animeVanguardsCopy.codes;

  return (
    <SiteShell current="codes" slug="anime-vanguards">
      <JsonLd data={animeVanguardsCodesJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${animeVanguards.name} · Codes`}
          title={copy.pageH1}
          dek={copy.dek}
          src={animeVanguardsArt.codes}
          alt={animeVanguardsArtAlt.codes}
        />
        <article className="wrap article">
          <p>{copy.body}</p>
          <p>{copy.tableNote}</p>
          <p className="source">{copy.copyHint}</p>
          <DataTable
            columns={["code", "status", "reward", "requirement", "source"]}
            rows={copy.rows.map((row) => [
              <CopyCode key={row.code} code={row.code} />,
              row.status,
              row.reward,
              row.requirement,
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
          <h2>{copy.archiveTitle}</h2>
          <p>{copy.archiveNote}</p>
          <DataTable
            columns={["code", "reward", "requirement"]}
            rows={copy.archiveRows.map((row) => [
              <CopyCode key={row.code} code={row.code} />,
              row.reward,
              row.requirement,
            ])}
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
          <p className="source">Last checked {animeVanguards.lastChecked}.</p>
          <KitMore slug="anime-vanguards" />
        </article>
      </main>
    </SiteShell>
  );
}
