import { DataTable } from "@/components/DataTable";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  stealAnEgg,
  stealAnEggArt,
  stealAnEggCopy,
  stealAnEggMutationsMetadata,
} from "@/lib/games/steal-an-egg";

export const metadata = stealAnEggMutationsMetadata;

export default function StealAnEggMutationsPage() {
  const copy = stealAnEggCopy.mutations;

  return (
    <SiteShell current="mutations">
      <main id="content">
        <KitHero
          kicker={`${stealAnEgg.name} · Mutations`}
          title={copy.pageH1}
          dek={copy.dek}
          src={stealAnEggArt.mutations}
          alt="White, gold, and silver toy chickens"
        />
        <article className="wrap article">
          <h2>What we can confirm</h2>
          <ul className="plain-list">
            {copy.confirmed.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <h2>{copy.otherTitle}</h2>
          <p>{copy.otherNote}</p>
          <DataTable
            columns={["label", "other wikis"]}
            rows={copy.otherRows.map((row) => [row.name, row.wiki])}
          />
          <p className="source">Last checked {stealAnEgg.lastChecked}.</p>
          <KitMore current="mutations" />
        </article>
      </main>
    </SiteShell>
  );
}
