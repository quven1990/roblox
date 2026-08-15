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
  animeVanguardsTraitsJsonLd,
  animeVanguardsTraitsMetadata,
} from "@/lib/games/anime-vanguards";

export const metadata = animeVanguardsTraitsMetadata;

export default function AnimeVanguardsTraitsPage() {
  const copy = animeVanguardsCopy.traits;

  return (
    <SiteShell current="traits" slug="anime-vanguards">
      <JsonLd data={animeVanguardsTraitsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${animeVanguards.name} · Traits`}
          title={copy.pageH1}
          dek={copy.dek}
          src={animeVanguardsArt.traits}
          alt={animeVanguardsArtAlt.traits}
        />
        <article className="wrap article">
          <KitCrumb
            trail={[
              { href: animeVanguards.path, label: animeVanguards.name },
              { label: "Traits" },
            ]}
          />
          <div className="note">
            <p>{copy.answer}</p>
          </div>
          <p>{copy.body}</p>
          <h2>{copy.indexTitle}</h2>
          <p>{copy.indexNote}</p>
          <DataTable
            columns={["trait", "wiki rate / pity", "wiki effect"]}
            rows={copy.rows.map((row) => [row.name, row.rate, row.effect])}
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
          <KitMore slug="anime-vanguards" current="traits" />
        </article>
      </main>
    </SiteShell>
  );
}
