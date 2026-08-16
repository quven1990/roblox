import Link from "next/link";
import { EvidencePanel } from "@/components/EvidencePanel";
import { JsonLd } from "@/components/JsonLd";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  greedyGrowers,
  greedyGrowersArt,
  greedyGrowersArtAlt,
  greedyGrowersCopy,
  greedyGrowersPetsJsonLd,
  greedyGrowersPetsMetadata,
} from "@/lib/games/greedy-growers";

export const metadata = greedyGrowersPetsMetadata;

export default function GreedyGrowersPetsPage() {
  const copy = greedyGrowersCopy.pets;

  return (
    <SiteShell current="pets" slug="greedy-growers">
      <JsonLd data={greedyGrowersPetsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${greedyGrowers.name} · Pets`}
          title={copy.pageH1}
          dek={copy.dek}
          src={greedyGrowersArt.pets}
          alt={greedyGrowersArtAlt.pets}
        />
        <article className="wrap article">
          <p>{copy.lead}</p>
          <p>{copy.intro}</p>
          <EvidencePanel
            lastChecked={greedyGrowers.lastChecked}
            checked={`${greedyGrowers.name} pets for Roblox place ${greedyGrowers.placeId}.`}
            verified={[
              "Pets are treated as part of the harvest loop, not as Grow a Garden carryover data.",
              "Public guides describe Pet Shop eggs, equip slots, and passive buckets.",
              "No named roster is copied because this kit has not photographed in-game pet cards.",
            ]}
            unverified={[
              "The full pet roster, rarity ladder, and exact ability text.",
              "Pet Shop egg prices, hatch odds, and unlock requirements.",
            ]}
          />
          <h2>{copy.structureTitle}</h2>
          <ol className="zone-list">
            {copy.structure.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.note}</span>
              </li>
            ))}
          </ol>
          <div className="note warn">
            <p>{copy.rosterNote}</p>
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
          <p className="source">Last checked {greedyGrowers.lastChecked}.</p>
          <KitMore slug="greedy-growers" current="pets" />
        </article>
      </main>
    </SiteShell>
  );
}
