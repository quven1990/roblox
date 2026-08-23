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
  fishAnAnimeRngRaritiesJsonLd,
  fishAnAnimeRngRaritiesMetadata,
} from "@/lib/games/fish-an-anime-rng";

export const metadata = fishAnAnimeRngRaritiesMetadata;

export default function FishAnAnimeRngRaritiesPage() {
  const copy = fishAnAnimeRngCopy.rarities;

  return (
    <SiteShell current="rarities" slug="fish-an-anime-rng">
      <JsonLd data={fishAnAnimeRngRaritiesJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${fishAnAnimeRng.name} · Rarities`}
          title={copy.pageH1}
          dek={copy.dek}
          src={fishAnAnimeRngArt.rarities}
          alt={fishAnAnimeRngArtAlt.rarities}
        />
        <article className="wrap article faar-article">
          <KitCrumb
            trail={[
              { href: fishAnAnimeRng.path, label: fishAnAnimeRng.name },
              { label: "Rarities" },
            ]}
          />
          <p className="faar-lead">{copy.lead}</p>
          <p>
            Base income and rebirth context is on the{" "}
            <Link href={fishAnAnimeRng.path}>Fish an Anime RNG wiki</Link>.
          </p>
          <EvidencePanel
            title="Rarities page scope"
            lastChecked={fishAnAnimeRng.lastChecked}
            checked="Fishing labels and tracking — not role tiers or codes."
            verified={[
              "No invented drop percentages.",
              "Cosmic Boxes described as code rewards, not rarity tiers.",
              "Tier list and characters keywords stay on other pages.",
            ]}
            unverified={[
              "Official in-game rarity chart screenshot.",
              "Exact pond-specific loot tables.",
            ]}
          />

          <h2>{copy.explained.h2}</h2>
          <p>{copy.explained.body}</p>

          <h2>{copy.tracking.h2}</h2>
          <p>{copy.tracking.intro}</p>
          <DataTable
            columns={["Check", "What to record", "Why it matters"]}
            rows={copy.tracking.rows.map((row) => [...row])}
          />

          <h2>{copy.session.h2}</h2>
          <ol className="steps">
            {copy.session.steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>

          <h2>{copy.rewards.h2}</h2>
          <p>
            {copy.rewards.body}{" "}
            <Link href={copy.rewards.href}>Fish an Anime RNG codes</Link>.
          </p>

          <div className="faar-crosslinks">
            <Link className="faar-crosslink" href={`${fishAnAnimeRng.path}/characters`}>
              <strong>Fish an Anime RNG characters</strong>
              <span>Placement and collection slots</span>
            </Link>
            <Link className="faar-crosslink" href={`${fishAnAnimeRng.path}/tier-list`}>
              <strong>Fish an Anime RNG tier list</strong>
              <span>Role ranks after income tests</span>
            </Link>
            <Link className="faar-crosslink" href={`${fishAnAnimeRng.path}/codes`}>
              <strong>Fish an Anime RNG codes</strong>
              <span>Cosmic Boxes and potions — not rarity tiers</span>
            </Link>
          </div>

          <FishAnAnimeRngFaq page="rarities" />
          <p className="source">Last checked {fishAnAnimeRng.lastChecked}.</p>
          <KitMore slug="fish-an-anime-rng" current="rarities" />
        </article>
      </main>
    </SiteShell>
  );
}
