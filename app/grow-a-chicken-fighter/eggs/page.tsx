import { DataTable } from "@/components/DataTable";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  growAChickenFighter,
  growAChickenFighterArt,
  growAChickenFighterCopy,
  growAChickenFighterEggsMetadata,
} from "@/lib/games/grow-a-chicken-fighter";

export const metadata = growAChickenFighterEggsMetadata;

export default function GrowAChickenFighterEggsPage() {
  const copy = growAChickenFighterCopy.eggs;

  return (
    <SiteShell current="eggs" slug="grow-a-chicken-fighter">
      <main id="content">
        <KitHero
          kicker={`${growAChickenFighter.name} · Eggs`}
          title={copy.pageH1}
          dek={copy.dek}
          src={growAChickenFighterArt.eggs}
          alt="Grow a Chicken Fighter on Roblox"
        />
        <article className="wrap article">
          <p>{copy.teaser}</p>
          <h2>{copy.indexTitle}</h2>
          <DataTable
            columns={["name", "where we saw it", "notes"]}
            rows={copy.indexRows.map((row) => [
              row.name,
              row.where,
              row.notes,
            ])}
          />
          <h2>{copy.otherTitle}</h2>
          <p>{copy.otherNote}</p>
          <DataTable
            columns={["name on other sites", "how they use it"]}
            rows={copy.otherRows.map((row) => [row.name, row.wiki])}
          />
          <p className="source">
            {growAChickenFighterCopy.rewards.source} Last checked{" "}
            {growAChickenFighter.lastChecked}.
          </p>
          <KitMore slug="grow-a-chicken-fighter" />
        </article>
      </main>
    </SiteShell>
  );
}
