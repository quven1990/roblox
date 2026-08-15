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
  animeVanguardsItemsJsonLd,
  animeVanguardsItemsMetadata,
} from "@/lib/games/anime-vanguards";

export const metadata = animeVanguardsItemsMetadata;

export default function AnimeVanguardsItemsPage() {
  const copy = animeVanguardsCopy.items;

  return (
    <SiteShell current="items" slug="anime-vanguards">
      <JsonLd data={animeVanguardsItemsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${animeVanguards.name} · Items`}
          title={copy.pageH1}
          dek={copy.dek}
          src={animeVanguardsArt.items}
          alt={animeVanguardsArtAlt.items}
        />
        <article className="wrap article">
          <KitCrumb
            trail={[
              { href: animeVanguards.path, label: animeVanguards.name },
              { label: "Items" },
            ]}
          />
          <div className="note">
            <p>{copy.answer}</p>
          </div>
          <p>{copy.intro}</p>
          <h2>{copy.memoriaTitle}</h2>
          <p>{copy.memoriaNote}</p>
          <DataTable
            columns={["memoria", "exclusive to"]}
            rows={copy.memoriaRows.map((row) => [
              row.name,
              <Link key={row.unit} href={`${animeVanguards.path}/units`}>
                {row.unit}
              </Link>,
            ])}
          />
          <h2>{copy.currencyTitle}</h2>
          <DataTable
            columns={["item", "what official pages say it does", "source"]}
            rows={copy.rows.map((row) => [row.name, row.usedFor, row.source])}
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
          <KitMore slug="anime-vanguards" current="items" />
        </article>
      </main>
    </SiteShell>
  );
}
