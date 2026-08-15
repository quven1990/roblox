import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  growAChickenFighter,
  growAChickenFighterArt,
  growAChickenFighterCopy,
  growAChickenFighterRewardsJsonLd,
  growAChickenFighterRewardsMetadata,
} from "@/lib/games/grow-a-chicken-fighter";

export const metadata = growAChickenFighterRewardsMetadata;

export default function GrowAChickenFighterRewardsPage() {
  const copy = growAChickenFighterCopy.rewards;

  return (
    <SiteShell current="rewards" slug="grow-a-chicken-fighter">
      <JsonLd data={growAChickenFighterRewardsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${growAChickenFighter.name} · Rewards`}
          title={copy.pageH1}
          dek={copy.dek}
          src={growAChickenFighterArt.rewards}
          alt="Grow a Chicken Fighter on Roblox"
        />
        <article className="wrap article">
          <p>{copy.intro}</p>
          <div className="note warn">
            <p>{copy.notCodes}</p>
          </div>
          <h2>{copy.howTitle}</h2>
          <ol className="steps">
            {copy.howSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          <h2>{copy.streakTitle}</h2>
          <p>{copy.streakNote}</p>
          <p>{copy.streakWhy}</p>
          <DataTable
            columns={["day", "reward", "when"]}
            rows={copy.streakRows.map((row) => [
              row.day,
              row.reward,
              row.when,
            ])}
          />
          <h2>{copy.playTitle}</h2>
          <p>{copy.playNote}</p>
          <DataTable
            columns={["tile", "reward", "when"]}
            rows={copy.playRows.map((row) => [row.tile, row.reward, row.when])}
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
          <p className="source">{copy.source}</p>
          <p className="source">Last checked {growAChickenFighter.lastChecked}.</p>
          <KitMore slug="grow-a-chicken-fighter" />
        </article>
      </main>
    </SiteShell>
  );
}
