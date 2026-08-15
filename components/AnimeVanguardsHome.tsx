import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { KitHero } from "@/components/KitHero";
import { SiteShell } from "@/components/SiteShell";
import {
  animeVanguards,
  animeVanguardsArt,
  animeVanguardsArtAlt,
  animeVanguardsCopy,
  animeVanguardsJsonLd,
} from "@/lib/games/anime-vanguards";

export function AnimeVanguardsHome() {
  const copy = animeVanguardsCopy;

  return (
    <SiteShell current="guide" slug="anime-vanguards">
      <JsonLd data={animeVanguardsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={animeVanguards.kicker}
          title={copy.h1}
          dek={copy.dek}
          src={animeVanguardsArt.guide}
          alt={animeVanguardsArtAlt.guide}
          icon={animeVanguards.icon}
          eager
        >
          <div className="actions">
            <a
              className="btn btn-primary"
              href={animeVanguards.playUrl}
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
                href={`${animeVanguards.path}/${card.id}`}
              >
                <img
                  src={
                    animeVanguardsArt[
                      card.id as keyof typeof animeVanguardsArt
                    ]
                  }
                  alt={
                    animeVanguardsArtAlt[
                      card.id as keyof typeof animeVanguardsArtAlt
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

          <h2 id="codes">{copy.codes.h2}</h2>
          <div className="note">
            <p>{copy.codes.body}</p>
          </div>
          <p>
            <Link href={`${animeVanguards.path}/codes`}>
              {copy.codes.pageH1} →
            </Link>
          </p>

          <h2 id="traits">{copy.traits.h2}</h2>
          <p>{copy.traits.body}</p>
          <p>
            <Link href={`${animeVanguards.path}/traits`}>
              {copy.traits.pageH1} →
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
            Last checked {animeVanguards.lastChecked}.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
