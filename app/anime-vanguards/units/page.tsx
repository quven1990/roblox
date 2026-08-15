import { DataTable } from "@/components/DataTable";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  animeVanguards,
  animeVanguardsArt,
  animeVanguardsArtAlt,
  animeVanguardsCopy,
  animeVanguardsUnitsMetadata,
} from "@/lib/games/anime-vanguards";

export const metadata = animeVanguardsUnitsMetadata;

export default function AnimeVanguardsUnitsPage() {
  const copy = animeVanguardsCopy.units;

  return (
    <SiteShell current="units" slug="anime-vanguards">
      <main id="content">
        <KitHero
          kicker={`${animeVanguards.name} · Units`}
          title={copy.pageH1}
          dek={copy.dek}
          src={animeVanguardsArt.units}
          alt={animeVanguardsArtAlt.units}
        />
        <article className="wrap article">
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
            columns={["name", "update", "where listed"]}
            rows={copy.patchRows.map((row) => [
              row.name,
              row.update,
              row.listed,
            ])}
          />
          <div className="note warn">
            <p>{copy.skip}</p>
          </div>
          <p className="source">Last checked {animeVanguards.lastChecked}.</p>
          <KitMore slug="anime-vanguards" />
        </article>
      </main>
    </SiteShell>
  );
}
