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
  stealAnEggPageLastChecked,
  stealAnEggPetsJsonLd,
  stealAnEggPetsMetadata,
  stealAnEggPetsRoster,
} from "@/lib/games/steal-an-egg";

export const metadata = stealAnEggPetsMetadata;

const rosterColumns = [
  "egg / pet",
  "rarity",
  "biome",
  "income / second",
] as const;

export default function StealAnEggPetsPage() {
  const copy = stealAnEggCopy.pets;
  const index = stealAnEggIndex;
  const withIncome = stealAnEggPetsRoster.filter((row) => row.income !== "—")
    .length;

  return (
    <SiteShell current="pets">
      <JsonLd data={stealAnEggPetsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${stealAnEgg.name} · Pets`}
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
            Roster rows: {stealAnEggPetsRoster.length}. Beebom income filled:{" "}
            {withIncome}. Blank income cells:{" "}
            {stealAnEggPetsRoster.length - withIncome} (empty on Beebom too).
            Last checked {stealAnEggPageLastChecked.pets}.
          </p>
          <h2>{copy.rosterTitle}</h2>
          <p>{copy.rosterNote}</p>
          <p>{copy.tableNote}</p>
          <div className="note warn">
            <p>{copy.rosterSkip}</p>
          </div>
          <DataTable
            columns={rosterColumns}
            rows={stealAnEggPetsRoster.map((row) => [
              row.name,
              row.rarity,
              row.biome,
              row.income,
            ])}
          />
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
          <h2>{copy.indexTitle}</h2>
          <p>{copy.indexNote}</p>
          <p className="source">{index.source}</p>
          <DataTable
            columns={["name", "biome", "rarity", "income", "notes"]}
            rows={index.rows.map((row) => [
              row.name,
              row.biome,
              row.rarity,
              row.income,
              row.notes,
            ])}
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
