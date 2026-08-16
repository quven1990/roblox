import Link from "next/link";
import { EvidencePanel } from "@/components/EvidencePanel";
import { JsonLd } from "@/components/JsonLd";
import { KitHero } from "@/components/KitHero";
import { SiteShell } from "@/components/SiteShell";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import {
  growAChickenFighter,
  growAChickenFighterArt,
  growAChickenFighterArtAlt,
  growAChickenFighterCopy,
  growAChickenFighterJsonLd,
  growAChickenFighterVideos,
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

          <EvidencePanel
            lastChecked={growAChickenFighter.lastChecked}
            checked={`Roblox place ${growAChickenFighter.placeId} by ${growAChickenFighter.developer}.`}
            verified={[
              "The Roblox experience page names hatch eggs, PIT fights, Tower, fusion, rebirth, and offline egg laying.",
              "A public English-client run shows ticket codes, Rewards claim, hatch, fuse, PIT, and early Tower play.",
              "The Rewards page is based on a photographed Daily streak and Play Today window.",
              "The codes page keeps Rewards separate from the redeem path.",
            ]}
            unverified={[
              "Full PIT payout table, Tower floor list, and Rebirth threshold.",
              "Fusion slot rules, prices, and trait transfer details.",
            ]}
          />

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
          <h2 id="watch">{copy.howARunWorks.videoH2}</h2>
          <YouTubeEmbed
            videoId={growAChickenFighterVideos.loop.id}
            title={growAChickenFighterVideos.loop.title}
            credit={growAChickenFighterVideos.loop.credit}
            caption={copy.howARunWorks.videoCaption}
            poster={growAChickenFighterVideos.loop.poster}
            watchUrl={growAChickenFighterVideos.loop.watchUrl}
          />

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
