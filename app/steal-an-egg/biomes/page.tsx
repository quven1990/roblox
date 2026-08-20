import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { KitCrumb } from "@/components/KitCrumb";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import {
  stealAnEgg,
  stealAnEggArt,
  stealAnEggBiomesJsonLd,
  stealAnEggBiomesMetadata,
  stealAnEggCopy,
  stealAnEggVideos,
} from "@/lib/games/steal-an-egg";

export const metadata = stealAnEggBiomesMetadata;

export default function StealAnEggBiomesPage() {
  const copy = stealAnEggCopy.biomes;
  const map = stealAnEggCopy.map;

  return (
    <SiteShell current="biomes">
      <JsonLd data={stealAnEggBiomesJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${stealAnEgg.name} · Biomes`}
          title={copy.pageH1}
          dek={copy.dek}
          src={stealAnEggArt.biomes}
          alt="Toy diorama of forest, lake, desert, volcano, and cosmic biomes"
        />
        <article className="wrap article">
          <KitCrumb
            trail={[
              { href: stealAnEgg.path, label: stealAnEgg.name },
              { label: "Biomes" },
            ]}
          />
          <p>{copy.lead}</p>
          <h2>{copy.updateTitle}</h2>
          <p>{copy.updateBody}</p>
          <DataTable
            columns={["claim", "status", "evidence"]}
            rows={copy.updateRows.map((row) => [
              row.claim,
              row.status,
              row.evidence,
            ])}
          />
          <p>{map.body}</p>
          <ol className="zone-list">
            {map.zones.map((zone) => (
              <li key={zone.name}>
                <strong>{zone.name}</strong>
                <span>{zone.note}</span>
              </li>
            ))}
          </ol>
          <p className="source">{map.source}</p>
          <h2 id="watch">{copy.videoH2}</h2>
          <YouTubeEmbed
            videoId={stealAnEggVideos.biomes.id}
            title={stealAnEggVideos.biomes.title}
            credit={stealAnEggVideos.biomes.credit}
            caption={copy.videoCaption}
            poster={stealAnEggVideos.biomes.poster}
            watchUrl={stealAnEggVideos.biomes.watchUrl}
          />
          <h2>Names that wiki uses instead</h2>
          <p>{copy.otherNote}</p>
          <DataTable
            columns={["their name", "notes"]}
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
          <KitMore current="biomes" />
        </article>
      </main>
    </SiteShell>
  );
}
