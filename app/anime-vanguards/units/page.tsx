import Link from "next/link";
import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { KitCrumb } from "@/components/KitCrumb";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  animeVanguards,
  animeVanguardsArt,
  animeVanguardsArtAlt,
  animeVanguardsCopy,
  animeVanguardsUnitsJsonLd,
  animeVanguardsUnitsMetadata,
} from "@/lib/games/anime-vanguards";

export const metadata = animeVanguardsUnitsMetadata;

function obtainCell(obtain: string) {
  if (
    obtain === "Lunar Bridge Dungeon" ||
    obtain === "Worldlines Floor 50" ||
    obtain.startsWith("Arcana")
  ) {
    return (
      <Link href={`${animeVanguards.path}/#update-14-5`}>{obtain}</Link>
    );
  }
  if (obtain === "Season 14 Battlepass") {
    return <Link href={`${animeVanguards.path}/items`}>{obtain}</Link>;
  }
  return obtain;
}

export default function AnimeVanguardsUnitsPage() {
  const copy = animeVanguardsCopy.units;

  return (
    <SiteShell current="units" slug="anime-vanguards">
      <JsonLd data={animeVanguardsUnitsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${animeVanguards.name} · Units`}
          title={copy.pageH1}
          dek={copy.dek}
          src={animeVanguardsArt.units}
          alt={animeVanguardsArtAlt.units}
        />
        <article className="wrap article">
          <KitCrumb
            trail={[
              { href: animeVanguards.path, label: animeVanguards.name },
              { label: "Units" },
            ]}
          />
          <div className="note">
            <p>{copy.answer}</p>
          </div>
          <p>{copy.body}</p>
          <h2>{copy.rarityTitle}</h2>
          <p>{copy.rarityNote}</p>
          <DataTable
            columns={["bucket", "notes"]}
            rows={copy.rarityRows.map((row) => [row.name, row.note])}
          />
          <h2>{copy.patchTitle}</h2>
          <p>{copy.patchNote}</p>
          <DataTable
            columns={["name", "update", "obtain", "where listed"]}
            rows={copy.patchRows.map((row) => [
              row.name,
              row.update,
              obtainCell(row.obtain),
              row.listed,
            ])}
          />
          <div className="note warn">
            <p>{copy.skip}</p>
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
          <p className="source">Last checked {animeVanguards.lastChecked}.</p>
          <KitMore slug="anime-vanguards" current="units" />
        </article>
      </main>
    </SiteShell>
  );
}
