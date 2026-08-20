import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { KitCrumb } from "@/components/KitCrumb";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  stealAnEgg,
  stealAnEggArt,
  stealAnEggCopy,
  stealAnEggIndex,
  stealAnEggPetsJsonLd,
  stealAnEggPetsMetadata,
  stealAnEggReportedPets,
} from "@/lib/games/steal-an-egg";

export const metadata = stealAnEggPetsMetadata;

const indexColumns = ["name", "biome", "rarity", "income", "notes"] as const;
const reportedColumns = [
  "name",
  "biome",
  "rarity (reported)",
  "income (reported)",
  "sources",
  "notes",
] as const;

export default function StealAnEggPetsPage() {
  const copy = stealAnEggCopy.pets;
  const index = stealAnEggIndex;

  return (
    <SiteShell current="pets">
      <JsonLd data={stealAnEggPetsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${stealAnEgg.name} · Index`}
          title={copy.pageH1}
          dek={copy.dek}
          src={stealAnEggArt.pets}
          alt="Toy chicken, bird, owl, raccoon, and frog"
        />
        <article className="wrap article">
          <KitCrumb
            trail={[
              { href: stealAnEgg.path, label: stealAnEgg.name },
              { label: "Pets" },
            ]}
          />
          <p>{copy.lead}</p>
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
              {index.source} Last checked {stealAnEggPageLastCheckedLabel()}.
            </p>
          </div>
          <DataTable
            columns={indexColumns}
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
          <h2>{copy.reportedTitle}</h2>
          <p>{copy.reportedNote}</p>
          <div className="note warn">
            <p>{copy.reportedSkip}</p>
          </div>
          <DataTable
            columns={reportedColumns}
            rows={stealAnEggReportedPets.map((row) => [
              row.name,
              row.biome,
              row.rarity,
              row.income,
              row.sources,
              row.note,
            ])}
          />
          <h2>{copy.wikiRarityTitle}</h2>
          <p>{copy.wikiRarityNote}</p>
          <DataTable
            columns={["label", "how it shows up"]}
            rows={copy.wikiRarityRows.map((row) => [row.name, row.wiki])}
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
          <h2>{copy.faq.h2}</h2>
          <div className="faq">
            {copy.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <KitMore current="pets" />
        </article>
      </main>
    </SiteShell>
  );
}

function stealAnEggPageLastCheckedLabel() {
  // Local import avoided in JSX; use the pets page date from the game module.
  return require("@/lib/games/steal-an-egg").stealAnEggPageLastChecked.pets as string;
}
