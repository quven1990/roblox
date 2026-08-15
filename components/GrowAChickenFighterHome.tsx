import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { KitHero } from "@/components/KitHero";
import { SiteShell } from "@/components/SiteShell";
import {
  growAChickenFighter,
  growAChickenFighterArt,
  growAChickenFighterArtAlt,
  growAChickenFighterCopy,
  growAChickenFighterJsonLd,
} from "@/lib/games/grow-a-chicken-fighter";

export function GrowAChickenFighterHome() {
  const copy = growAChickenFighterCopy;

  return (
    <SiteShell current="guide" slug="grow-a-chicken-fighter">
      <JsonLd data={growAChickenFighterJsonLd()} />
      <main id="content">
        <KitHero
          kicker={growAChickenFighter.kicker}
          title={copy.h1}
          dek={copy.dek}
          src={growAChickenFighterArt.guide}
          alt={growAChickenFighterArtAlt.guide}
          icon={growAChickenFighter.icon}
          eager
        >
          <div className="actions">
            <a
              className="btn btn-primary"
              href={growAChickenFighter.playUrl}
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
                href={`${growAChickenFighter.path}/${card.id}`}
              >
                <img
                  src={
                    growAChickenFighterArt[
                      card.id as keyof typeof growAChickenFighterArt
                    ]
                  }
                  alt={
                    growAChickenFighterArtAlt[
                      card.id as keyof typeof growAChickenFighterArtAlt
                    ]
                  }
                  width={640}
                  height={360}
                  sizes="(max-width: 640px) 100vw, 340px"
                />
                <strong>{card.title}</strong>
                <span>{card.body}</span>
              </Link>
            ))}
          </div>

          <h2 id="guide">{copy.howARunWorks.h2}</h2>
          <ol className="steps">
            {copy.howARunWorks.steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>

          <h2 id="systems">{copy.systems.h2}</h2>
          <p>{copy.systems.intro}</p>
          <ol className="zone-list">
            {copy.systems.items.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.note}</span>
              </li>
            ))}
          </ol>

          <h2 id="rewards">{copy.rewards.h2}</h2>
          <p>{copy.rewards.streakWhy}</p>
          <ol className="zone-list">
            {copy.rewards.teaserRows.map((row) => (
              <li key={row.when}>
                <strong>{row.when}</strong>
                <span>{row.reward}</span>
              </li>
            ))}
          </ol>
          <p>
            <Link href={`${growAChickenFighter.path}/rewards`}>
              Full Daily streak and Play Today tables →
            </Link>
          </p>

          <h2 id="codes">{copy.codes.h2}</h2>
          <div className="note">
            <p>{copy.codes.body}</p>
          </div>
          <p>
            <Link href={`${growAChickenFighter.path}/codes`}>
              {copy.codes.pageH1} →
            </Link>
          </p>

          <h2 id="eggs">{copy.eggs.h2}</h2>
          <p>{copy.eggs.teaser}</p>
          <p>
            <Link href={`${growAChickenFighter.path}/eggs`}>
              {copy.eggs.pageH1} →
            </Link>
          </p>

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
            Last checked {growAChickenFighter.lastChecked}.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
