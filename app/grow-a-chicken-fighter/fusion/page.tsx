import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  growAChickenFighter,
  growAChickenFighterArt,
  growAChickenFighterCopy,
  growAChickenFighterFusionMetadata,
} from "@/lib/games/grow-a-chicken-fighter";

export const metadata = growAChickenFighterFusionMetadata;

export default function GrowAChickenFighterFusionPage() {
  const copy = growAChickenFighterCopy.fusion;

  return (
    <SiteShell current="fusion" slug="grow-a-chicken-fighter">
      <main id="content">
        <KitHero
          kicker={`${growAChickenFighter.name} · Fusion`}
          title={copy.pageH1}
          dek={copy.dek}
          src={growAChickenFighterArt.fusion}
          alt="Grow a Chicken Fighter Roblox thumbnail"
        />
        <article className="wrap article">
          <p>{copy.body}</p>
          <p>{copy.official}</p>
          <p className="source">Last checked {growAChickenFighter.lastChecked}.</p>
          <KitMore slug="grow-a-chicken-fighter" />
        </article>
      </main>
    </SiteShell>
  );
}
