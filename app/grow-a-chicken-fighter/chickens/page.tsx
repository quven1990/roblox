import { DataTable } from "@/components/DataTable";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  growAChickenFighter,
  growAChickenFighterArt,
  growAChickenFighterChickensMetadata,
  growAChickenFighterCopy,
} from "@/lib/games/grow-a-chicken-fighter";

export const metadata = growAChickenFighterChickensMetadata;

export default function GrowAChickenFighterChickensPage() {
  const copy = growAChickenFighterCopy.chickens;

  return (
    <SiteShell current="chickens" slug="grow-a-chicken-fighter">
      <main id="content">
        <KitHero
          kicker={`${growAChickenFighter.name} · Chickens`}
          title={copy.pageH1}
          dek={copy.dek}
          src={growAChickenFighterArt.chickens}
          alt="Grow a Chicken Fighter Roblox thumbnail"
        />
        <article className="wrap article">
          <p>{copy.body}</p>
          <h2>{copy.hudTitle}</h2>
          <DataTable
            columns={["name", "where we saw it", "notes"]}
            rows={copy.hudRows.map((row) => [row.name, row.where, row.notes])}
          />
          <h2>{copy.otherTitle}</h2>
          <p>{copy.otherNote}</p>
          <DataTable
            columns={["name on other sites", "where they wrote it"]}
            rows={copy.otherRows.map((row) => [row.name, row.wiki])}
          />
          <div className="note warn">
            <p>{copy.otherSkip}</p>
          </div>
          <p className="source">Last checked {growAChickenFighter.lastChecked}.</p>
          <KitMore slug="grow-a-chicken-fighter" />
        </article>
      </main>
    </SiteShell>
  );
}
