import { DataTable } from "@/components/DataTable";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  animeVanguards,
  animeVanguardsArt,
  animeVanguardsArtAlt,
  animeVanguardsCopy,
  animeVanguardsItemsMetadata,
} from "@/lib/games/anime-vanguards";

export const metadata = animeVanguardsItemsMetadata;

export default function AnimeVanguardsItemsPage() {
  const copy = animeVanguardsCopy.items;

  return (
    <SiteShell current="items" slug="anime-vanguards">
      <main id="content">
        <KitHero
          kicker={`${animeVanguards.name} · Items`}
          title={copy.pageH1}
          dek={copy.dek}
          src={animeVanguardsArt.items}
          alt={animeVanguardsArtAlt.items}
        />
        <article className="wrap article">
          <p>{copy.intro}</p>
          <DataTable
            columns={["item", "what official pages say it does", "source"]}
            rows={copy.rows.map((row) => [row.name, row.usedFor, row.source])}
          />
          <p className="source">Last checked {animeVanguards.lastChecked}.</p>
          <KitMore slug="anime-vanguards" />
        </article>
      </main>
    </SiteShell>
  );
}
