import Link from "next/link";
import { DataTable } from "@/components/DataTable";
import { EvidencePanel } from "@/components/EvidencePanel";
import { JsonLd } from "@/components/JsonLd";
import { FishAnAnimeRngFaq } from "@/components/FishAnAnimeRngFaq";
import { KitCrumb } from "@/components/KitCrumb";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  fishAnAnimeRng,
  fishAnAnimeRngArt,
  fishAnAnimeRngArtAlt,
  fishAnAnimeRngCopy,
  fishAnAnimeRngTierListJsonLd,
  fishAnAnimeRngTierListMetadata,
} from "@/lib/games/fish-an-anime-rng";

export const metadata = fishAnAnimeRngTierListMetadata;

const tierClass: Record<string, string> = {
  S: "faar-tier-s",
  A: "faar-tier-a",
  B: "faar-tier-b",
  C: "faar-tier-c",
  D: "faar-tier-d",
};

export default function FishAnAnimeRngTierListPage() {
  const copy = fishAnAnimeRngCopy.tierList;

  return (
    <SiteShell current="tier-list" slug="fish-an-anime-rng">
      <JsonLd data={fishAnAnimeRngTierListJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${fishAnAnimeRng.name} · Tier list`}
          title={copy.pageH1}
          dek={copy.dek}
          src={fishAnAnimeRngArt["tier-list"]}
          alt={fishAnAnimeRngArtAlt["tier-list"]}
        />
        <article className="wrap article faar-article">
          <KitCrumb
            trail={[
              { href: fishAnAnimeRng.path, label: fishAnAnimeRng.name },
              { label: "Tier list" },
            ]}
          />
          <p className="faar-lead">{copy.lead}</p>
          <p>
            Core loop and rebirth notes live on the{" "}
            <Link href={fishAnAnimeRng.path}>Fish an Anime RNG wiki</Link>.
          </p>
          <div className="note">
            <p>{copy.principle}</p>
          </div>
          <EvidencePanel
            title="Tier list scope"
            lastChecked={fishAnAnimeRng.lastChecked}
            checked="Role-based tiers aligned to public wiki framing (August 2026)."
            verified={[
              "No invented character names or numeric DPS.",
              "Characters and rarities keywords live on separate URLs.",
              "S–D labels describe income roles, not official in-game tiers.",
            ]}
            unverified={[
              "Photographed unit stat panel for any single catch.",
              "Developer-published balance patch notes.",
            ]}
          />

          <h2>Tier profiles</h2>
          <div className="faar-tier-grid">
            {copy.tiers.map((row) => (
              <div
                key={row.tier}
                className={`faar-tier-card ${tierClass[row.tier] ?? ""}`}
              >
                <span className="faar-tier-badge">{row.tier}</span>
                <strong>{row.label}</strong>
                <p>{row.profile}</p>
                <dl>
                  <div>
                    <dt>Best use</dt>
                    <dd>{row.use}</dd>
                  </div>
                  <div>
                    <dt>Priority</dt>
                    <dd>{row.priority}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <h2>{copy.factors.h2}</h2>
          <p>{copy.factors.intro}</p>
          <DataTable
            columns={["Factor", "What to check", "Why it matters"]}
            rows={copy.factors.rows.map((row) => [...row])}
          />

          <h2>{copy.stages.h2}</h2>
          <div className="faar-stage-list">
            {copy.stages.items.map((item) => (
              <div key={item.stage} className="faar-stage-card">
                <strong>{item.stage}</strong>
                <span className="faar-stage-priority">{item.priority}</span>
                <p>{item.approach}</p>
              </div>
            ))}
          </div>

          <p>
            Collection notes live on the{" "}
            <Link href={`${fishAnAnimeRng.path}/characters`}>
              Fish an Anime RNG characters
            </Link>{" "}
            page. Fishing labels live on{" "}
            <Link href={`${fishAnAnimeRng.path}/rarities`}>
              Fish an Anime RNG rarities
            </Link>
            . Codes stay on{" "}
            <Link href={`${fishAnAnimeRng.path}/codes`}>
              Fish an Anime RNG codes
            </Link>
            .
          </p>

          <FishAnAnimeRngFaq page="tier-list" />
          <p className="source">Last checked {fishAnAnimeRng.lastChecked}.</p>
          <KitMore slug="fish-an-anime-rng" current="tier-list" />
        </article>
      </main>
    </SiteShell>
  );
}
