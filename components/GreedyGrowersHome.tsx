import Link from "next/link";
import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { KitHero } from "@/components/KitHero";
import { SiteShell } from "@/components/SiteShell";
import {
  greedyGrowers,
  greedyGrowersArt,
  greedyGrowersArtAlt,
  greedyGrowersCopy,
  greedyGrowersJsonLd,
} from "@/lib/games/greedy-growers";

export function GreedyGrowersHome() {
  const copy = greedyGrowersCopy;

  return (
    <SiteShell current="guide" slug="greedy-growers">
      <JsonLd data={greedyGrowersJsonLd()} />
      <main id="content">
        <KitHero
          kicker={greedyGrowers.kicker}
          title={copy.h1}
          dek={copy.dek}
          src={greedyGrowersArt.guide}
          alt={greedyGrowersArtAlt.guide}
          icon={greedyGrowers.icon}
          eager
        >
          <div className="actions">
            <a
              className="btn btn-primary"
              href={greedyGrowers.playUrl}
              rel="noopener noreferrer"
            >
              {copy.heroCta}
            </a>
            <a className="btn btn-ghost" href="#pages">
              {copy.pages.ghostCta}
            </a>
          </div>
        </KitHero>

        <article className="wrap article">
          <h2>{copy.rightGame.h2}</h2>
          <p>{copy.rightGame.body}</p>
          <div className="note warn">
            <p>{copy.rightGame.notThis}</p>
          </div>

          <h2 id="pages">{copy.pages.h2}</h2>
          <div className="wiki-grid">
            {copy.pages.cards.map((card) => (
              <Link
                key={card.id}
                className="wiki-card"
                href={`${greedyGrowers.path}/${card.id}`}
              >
                <img
                  src={
                    greedyGrowersArt[card.id as keyof typeof greedyGrowersArt]
                  }
                  alt={
                    greedyGrowersArtAlt[
                      card.id as keyof typeof greedyGrowersArtAlt
                    ]
                  }
                  width={640}
                  height={360}
                  sizes="(max-width: 640px) 100vw, 340px"
                />
                <strong>{card.sitelink}</strong>
                <span>{card.body}</span>
              </Link>
            ))}
          </div>

          <h2 id="guide">{copy.howARunWorks.h2}</h2>
          <p>{copy.howARunWorks.intro}</p>
          <ol className="steps">
            {copy.howARunWorks.steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>

          <h2 id="harvest">{copy.harvest.h2}</h2>
          <p>{copy.harvest.intro}</p>
          <DataTable
            columns={["strategy", "reward", "lightning", "best for"]}
            rows={copy.harvest.rows.map((row) => [
              row.strategy,
              row.reward,
              row.risk,
              row.bestFor,
            ])}
          />
          <p>
            {copy.harvest.after}{" "}
            <Link href={`${greedyGrowers.path}/mutations`}>
              Greedy Growers mutations
            </Link>
            .
          </p>

          <h2 id="unverified">{copy.systems.h2}</h2>
          <p>{copy.systems.intro}</p>
          <ol className="zone-list">
            {copy.systems.items.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.note}</span>
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

          <h2>{copy.disclaimer.h2}</h2>
          <p>{copy.disclaimer.body}</p>
          <p style={{ color: "var(--muted)", fontSize: 13 }}>
            Last checked {greedyGrowers.lastChecked}.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
