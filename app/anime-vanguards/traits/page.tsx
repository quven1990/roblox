import { DataTable } from "@/components/DataTable";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  animeVanguards,
  animeVanguardsArt,
  animeVanguardsArtAlt,
  animeVanguardsCopy,
  animeVanguardsTraitsMetadata,
} from "@/lib/games/anime-vanguards";

export const metadata = animeVanguardsTraitsMetadata;

export default function AnimeVanguardsTraitsPage() {
  const copy = animeVanguardsCopy.traits;

  return (
    <SiteShell current="traits" slug="anime-vanguards">
      <main id="content">
        <KitHero
          kicker={`${animeVanguards.name} · Traits`}
          title={copy.pageH1}
          dek={copy.dek}
          src={animeVanguardsArt.traits}
          alt={animeVanguardsArtAlt.traits}
        />
        <article className="wrap article">
          <p>{copy.body}</p>
          <h2>{copy.indexTitle}</h2>
          <p>{copy.indexNote}</p>
          <DataTable
            columns={["name on other sites", "where they wrote it"]}
            rows={copy.rows.map((row) => [row.name, row.listed])}
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
