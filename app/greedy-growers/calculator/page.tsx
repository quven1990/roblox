import { GreedyGrowersCalculator } from "@/components/GreedyGrowersCalculator";
import { JsonLd } from "@/components/JsonLd";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  greedyGrowers,
  greedyGrowersArt,
  greedyGrowersArtAlt,
  greedyGrowersCalculatorJsonLd,
  greedyGrowersCalculatorMetadata,
  greedyGrowersCopy,
} from "@/lib/games/greedy-growers";

export const metadata = greedyGrowersCalculatorMetadata;

export default function GreedyGrowersCalculatorPage() {
  const copy = greedyGrowersCopy.calculator;

  return (
    <SiteShell current="calculator" slug="greedy-growers">
      <JsonLd data={greedyGrowersCalculatorJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${greedyGrowers.name} · Calculator`}
          title={copy.pageH1}
          dek={copy.dek}
          src={greedyGrowersArt.calculator}
          alt={greedyGrowersArtAlt.calculator}
        />
        <article className="wrap article">
          <p>{copy.lead}</p>
          <p>{copy.intro}</p>
          <div className="note warn">
            <p>{copy.trustNote}</p>
          </div>

          <h2 id="tool">{copy.h2}</h2>
          <GreedyGrowersCalculator />

          <h2>{copy.formulasTitle}</h2>
          <ol className="zone-list">
            {copy.formulas.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>
                  <code>{item.formula}</code> — {item.note}
                </span>
              </li>
            ))}
          </ol>

          <h2>{copy.faq.h2}</h2>
          <div className="faq">
            {copy.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <p className="source">Last checked {greedyGrowers.lastChecked}.</p>
          <KitMore slug="greedy-growers" current="calculator" />
        </article>
      </main>
    </SiteShell>
  );
}
