import { DataTable } from "@/components/DataTable";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  stealAnEgg,
  stealAnEggArt,
  stealAnEggCopy,
  stealAnEggIndex,
  stealAnEggPetsMetadata,
} from "@/lib/games/steal-an-egg";

export const metadata = stealAnEggPetsMetadata;

const columns = ["name", "biome", "rarity", "income", "notes"] as const;

export default function StealAnEggPetsPage() {
  const copy = stealAnEggCopy.pets;
  const index = stealAnEggIndex;

  return (
    <SiteShell current="pets">
      <main id="content">
        <KitHero
          kicker={`${stealAnEgg.name} · Index`}
          title={copy.pageH1}
          dek={copy.dek}
          src={stealAnEggArt.pets}
          alt="Toy chicken, bird, owl, raccoon, and frog"
        />
        <article className="wrap article">
          <p className="index-stats">
            Unlocked in this snapshot: {index.photographedUnlocked}/{index.total}
            . Forest {index.forestSeen}/{index.forestTotal}. Lake at least{" "}
            {index.lakeSeen} named.
          </p>
          <h2>{copy.whatIndex.h2}</h2>
          <p>{copy.whatIndex.body}</p>
          <h2>{copy.fillFaster.h2}</h2>
          <p>{copy.fillFaster.intro}</p>
          <ol className="steps">
            {copy.fillFaster.steps.map((step, stepIndex) => (
              <li key={step}>
                <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          <div className="note">
            <p>{copy.fillFaster.skip}</p>
          </div>
          <p>{copy.tableNote}</p>
          <div className="note">
            <p>
              {index.source} Last checked {stealAnEgg.lastChecked}.
            </p>
          </div>
          <DataTable
            columns={columns}
            rows={index.rows.map((row) => [
              row.name,
              row.biome,
              row.rarity,
              row.income,
              row.notes,
            ])}
          />
          <p className="source">
            Forest still has four locked ??? tiles. Later biomes are not in this
            screenshot.
          </p>
          <p>{copy.official}</p>
          <h2>{copy.rarityTitle}</h2>
          <DataTable
            columns={["label", "status", "notes"]}
            rows={copy.rarityRows.map((row) => [
              row.name,
              row.status,
              row.note,
            ])}
          />
          <h2>{stealAnEggCopy.eggs.hatchedTitle}</h2>
          <p>{stealAnEggCopy.eggs.hatchedNote}</p>
          <DataTable
            columns={["name", "how we saw it", "notes"]}
            rows={stealAnEggCopy.eggs.hatchedRows.map((row) => [
              row.name,
              row.seen,
              row.notes,
            ])}
          />
          <h2>{copy.wikiRarityTitle}</h2>
          <p>{copy.wikiRarityNote}</p>
          <DataTable
            columns={["their label", "how they use it"]}
            rows={copy.wikiRarityRows.map((row) => [row.name, row.wiki])}
          />
          <h2>{copy.otherTitle}</h2>
          <p>{copy.otherNote}</p>
          <DataTable
            columns={["name on that wiki", "what they call it"]}
            rows={copy.otherRows.map((row) => [row.name, row.wiki])}
          />
          <h2>{copy.factoryTitle}</h2>
          <p>{copy.factoryNote}</p>
          <DataTable
            columns={["name", "where they wrote it"]}
            rows={copy.factoryRows.map((row) => [row.name, row.wiki])}
          />
          <div className="note warn">
            <p>{copy.otherSkip}</p>
          </div>
          <KitMore />
        </article>
      </main>
    </SiteShell>
  );
}
