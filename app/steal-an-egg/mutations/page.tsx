import { DataTable } from "@/components/DataTable";
import { EvidencePanel } from "@/components/EvidencePanel";
import { JsonLd } from "@/components/JsonLd";
import { KitCrumb } from "@/components/KitCrumb";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  stealAnEgg,
  stealAnEggArt,
  stealAnEggCopy,
  stealAnEggMutationsJsonLd,
  stealAnEggMutationsMetadata,
  stealAnEggPageLastChecked,
} from "@/lib/games/steal-an-egg";

export const metadata = stealAnEggMutationsMetadata;

export default function StealAnEggMutationsPage() {
  const copy = stealAnEggCopy.mutations;

  return (
    <SiteShell current="mutations">
      <JsonLd data={stealAnEggMutationsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${stealAnEgg.name} · Mutations`}
          title={copy.pageH1}
          dek={copy.dek}
          src={stealAnEggArt.mutations}
          alt="White, gold, and silver toy chickens"
        />
        <article className="wrap article">
          <KitCrumb
            trail={[
              { href: stealAnEgg.path, label: stealAnEgg.name },
              { label: "Mutations" },
            ]}
          />
          <p>{copy.lead}</p>
          <h2>{copy.updateTitle}</h2>
          <p>{copy.updateBody}</p>
          <h2>{copy.sakuraTitle}</h2>
          <DataTable
            columns={["player search", "answer", "status"]}
            rows={copy.sakuraRows.map((row) => [
              row.query,
              row.answer,
              row.status,
            ])}
          />
          <EvidencePanel
            lastChecked={stealAnEggPageLastChecked.mutations}
            checked={`${stealAnEgg.name} mutations and sizes for Roblox place ${stealAnEgg.placeId}.`}
            verified={[
              "Official description says pets have rarities, sizes, and mutations.",
              "Gameplay shows gold and silver variants, huge/giant egg sizes, and a Legendary hatch label.",
              "Update #2 live notes name Monstrous Mutation (Monster Chests) and Mecha variants (Monster Egg) — reported, not Index-photographed.",
              "Update #1 live notes name Bloom and Spirit Bloom after the Sakura Incubator unlock (reported, not Index-photographed).",
              "The table below separates other-wiki labels from gameplay and reported update names.",
            ]}
            unverified={[
              "Published mutation odds, sell multipliers, or a full official mutation Index.",
              "Mecha / Monstrous / Bloom / Spirit Bloom rates and whether wiki-only labels such as Shiny or Rainbow are live.",
            ]}
          />
          <h2>{copy.matrixTitle}</h2>
          <DataTable
            columns={["label", "category", "evidence", "status"]}
            rows={copy.matrixRows.map((row) => [
              row.label,
              row.category,
              row.evidence,
              row.status,
            ])}
          />
          <h2>What we can confirm</h2>
          <ul className="plain-list">
            {copy.confirmed.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <h2>{copy.actionTitle}</h2>
          <ol className="zone-list">
            {copy.actions.map((step) => (
              <li key={step}>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <h2>{copy.otherTitle}</h2>
          <p>{copy.otherNote}</p>
          <DataTable
            columns={["label", "other wikis"]}
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
          <p className="source">
            Last checked {stealAnEggPageLastChecked.mutations}.
          </p>
          <KitMore current="mutations" />
        </article>
      </main>
    </SiteShell>
  );
}
