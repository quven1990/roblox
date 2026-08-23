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
  fishAnAnimeRngCharactersJsonLd,
  fishAnAnimeRngCharactersMetadata,
  fishAnAnimeRngCopy,
} from "@/lib/games/fish-an-anime-rng";

export const metadata = fishAnAnimeRngCharactersMetadata;

export default function FishAnAnimeRngCharactersPage() {
  const copy = fishAnAnimeRngCopy.characters;

  return (
    <SiteShell current="characters" slug="fish-an-anime-rng">
      <JsonLd data={fishAnAnimeRngCharactersJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${fishAnAnimeRng.name} · Characters`}
          title={copy.pageH1}
          dek={copy.dek}
          src={fishAnAnimeRngArt.characters}
          alt={fishAnAnimeRngArtAlt.characters}
        />
        <article className="wrap article faar-article">
          <KitCrumb
            trail={[
              { href: fishAnAnimeRng.path, label: fishAnAnimeRng.name },
              { label: "Characters" },
            ]}
          />
          <p className="faar-lead">{copy.lead}</p>
          <p>
            How fishing and upgrades work is on the{" "}
            <Link href={fishAnAnimeRng.path}>Fish an Anime RNG wiki</Link>.
          </p>
          <EvidencePanel
            title="Characters page scope"
            lastChecked={fishAnAnimeRng.lastChecked}
            checked="Collection and placement — not tier ranks or code strings."
            verified={[
              "Public copy describes anime catches from pond fishing placed for base cash.",
              "Journal template uses in-game labels only.",
              "Tier list and rarities keywords route to other URLs.",
            ]}
            unverified={[
              "Photographed character Index with full roster.",
              "Exact base slot count and sell rules.",
            ]}
          />

          <h2>{copy.collection.h2}</h2>
          <p>{copy.collection.body}</p>

          <h2>{copy.placement.h2}</h2>
          <ul className="plain-list faar-check-list">
            {copy.placement.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>{copy.journal.h2}</h2>
          <p>{copy.journal.intro}</p>
          <DataTable
            columns={[...copy.journal.columns]}
            rows={copy.journal.rows.map((row) => [...row])}
          />

          <div className="faar-crosslinks">
            <Link className="faar-crosslink" href={`${fishAnAnimeRng.path}/tier-list`}>
              <strong>Fish an Anime RNG tier list</strong>
              <span>Role ranks when comparing replacements</span>
            </Link>
            <Link className="faar-crosslink" href={`${fishAnAnimeRng.path}/rarities`}>
              <strong>Fish an Anime RNG rarities</strong>
              <span>Visible labels and income tests</span>
            </Link>
            <Link className="faar-crosslink" href={`${fishAnAnimeRng.path}/codes`}>
              <strong>Fish an Anime RNG codes</strong>
              <span>Boxes and potions — not character drops</span>
            </Link>
          </div>

          <FishAnAnimeRngFaq page="characters" />
          <p className="source">Last checked {fishAnAnimeRng.lastChecked}.</p>
          <KitMore slug="fish-an-anime-rng" current="characters" />
        </article>
      </main>
    </SiteShell>
  );
}
