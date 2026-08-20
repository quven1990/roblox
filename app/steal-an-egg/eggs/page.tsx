import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { KitCrumb } from "@/components/KitCrumb";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  stealAnEgg,
  stealAnEggArt,
  stealAnEggCopy,
  stealAnEggEggsJsonLd,
  stealAnEggEggsMetadata,
  stealAnEggPageLastChecked,
} from "@/lib/games/steal-an-egg";

export const metadata = stealAnEggEggsMetadata;

export default function StealAnEggEggsPage() {
  const copy = stealAnEggCopy.eggs;

  return (
    <SiteShell current="eggs">
      <JsonLd data={stealAnEggEggsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${stealAnEgg.name} · Eggs`}
          title={copy.pageH1}
          dek={copy.dek}
          src={stealAnEggArt.eggs}
          alt="A nest of oversized toy eggs"
        />
        <article className="wrap article">
          <KitCrumb
            trail={[
              { href: stealAnEgg.path, label: stealAnEgg.name },
              { label: "Eggs" },
            ]}
          />
          <p>{copy.lead}</p>
          <h2>{copy.updateTitle}</h2>
          <p>{copy.updateBody}</p>
          <h2>{copy.indexTitle}</h2>
          <ol className="zone-list">
            {copy.indexAnswers.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.note}</span>
              </li>
            ))}
          </ol>
          <h2>{copy.matrixTitle}</h2>
          <DataTable
            columns={["source", "what it means", "Index rule", "best action"]}
            rows={copy.matrixRows.map((row) => [
              row.source,
              row.what,
              row.index,
              row.action,
            ])}
          />
          <h2>Where eggs come from</h2>
          <ol className="zone-list">
            {copy.sources.map((source) => (
              <li key={source.name}>
                <strong>{source.name}</strong>
                <span>{source.note}</span>
              </li>
            ))}
          </ol>
          <h2>The reset scramble</h2>
          <p>{copy.race}</p>
          <h2>Huge and giant</h2>
          <p>{copy.size}</p>
          <h2>Hatching</h2>
          <p>{copy.hatch}</p>
          <h2>{copy.hatchedTitle}</h2>
          <p>{copy.hatchedNote}</p>
          <DataTable
            columns={["name", "how we saw it", "notes"]}
            rows={copy.hatchedRows.map((row) => [
              row.name,
              row.seen,
              row.notes,
            ])}
          />
          <h2>{copy.otherTitle}</h2>
          <p>{copy.otherNote}</p>
          <DataTable
            columns={["name on other wikis", "how they rank it"]}
            rows={copy.otherRows.map((row) => [row.name, row.wiki])}
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
          <p className="source">
            Last checked {stealAnEggPageLastChecked.eggs}.
          </p>
          <KitMore current="eggs" />
        </article>
      </main>
    </SiteShell>
  );
}
