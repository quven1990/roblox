import Link from "next/link";
import { DataTable } from "@/components/DataTable";
import { EvidencePanel } from "@/components/EvidencePanel";
import { JsonLd } from "@/components/JsonLd";
import { FishAnAnimeRngFaq } from "@/components/FishAnAnimeRngFaq";
import { KitCrumb } from "@/components/KitCrumb";
import { KitHero } from "@/components/KitHero";
import { SiteShell } from "@/components/SiteShell";
import {
  fishAnAnimeRng,
  fishAnAnimeRngArt,
  fishAnAnimeRngArtAlt,
  fishAnAnimeRngCopy,
  fishAnAnimeRngJsonLd,
} from "@/lib/games/fish-an-anime-rng";

export function FishAnAnimeRngHome() {
  const copy = fishAnAnimeRngCopy;
  const sitelinkByPath = Object.fromEntries(
    copy.pages.cards.map((card) => [
      `${fishAnAnimeRng.path}/${card.id}`,
      card.sitelink,
    ]),
  ) as Record<string, string>;

  return (
    <SiteShell current="guide" slug="fish-an-anime-rng">
      <JsonLd data={fishAnAnimeRngJsonLd()} />
      <main id="content">
        <KitHero
          kicker={fishAnAnimeRng.kicker}
          title={copy.h1}
          dek={copy.dek}
          src={fishAnAnimeRngArt.guide}
          alt={fishAnAnimeRngArtAlt.guide}
          icon={fishAnAnimeRng.icon}
          eager
        >
          <div className="actions">
            <a
              className="btn btn-primary"
              href={fishAnAnimeRng.playUrl}
              rel="noopener noreferrer"
            >
              {copy.heroCta}
            </a>
            <a className="btn btn-ghost" href="#pages">
              {copy.pages.ghostCta}
            </a>
          </div>
        </KitHero>

        <article className="wrap article faar-article">
          <KitCrumb trail={[{ label: fishAnAnimeRng.name }]} />
          <h2>{copy.rightGame.h2}</h2>
          <p>{copy.rightGame.body}</p>
          <div className="note warn">
            <p>{copy.rightGame.notThis}</p>
          </div>

          <EvidencePanel
            lastChecked={fishAnAnimeRng.lastChecked}
            checked={`Roblox place ${fishAnAnimeRng.placeId} by ${fishAnAnimeRng.developer}.`}
            verified={[
              "Beebom (August 20, 2026) confirms the fish → base → cash → upgrade loop and Store redeem path after tutorial.",
              "Each guide topic has its own page: codes, tier list, characters, rarities — so pages do not compete in search.",
              "Tier list ranks roles, not invented character stats.",
            ]}
            unverified={[
              "Photographed rebirth requirement panel and full in-game rarity chart.",
              "Which redeem menu label your client shows (Store vs Settings).",
            ]}
          />

          <h2 id="pages">{copy.pages.h2}</h2>
          <div className="wiki-grid faar-page-grid">
            {copy.pages.cards.map((card) => (
              <Link
                key={card.id}
                className="wiki-card faar-wiki-card"
                href={`${fishAnAnimeRng.path}/${card.id}`}
              >
                <img
                  src={
                    fishAnAnimeRngArt[
                      card.id as keyof typeof fishAnAnimeRngArt
                    ]
                  }
                  alt={
                    fishAnAnimeRngArtAlt[
                      card.id as keyof typeof fishAnAnimeRngArtAlt
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

          <h2>{copy.howItWorks.h2}</h2>
          <p>{copy.howItWorks.intro}</p>
          <ol className="steps">
            {copy.howItWorks.steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>

          <h2>{copy.systems.h2}</h2>
          <p>{copy.systems.intro}</p>
          <div className="faar-system-grid">
            {copy.systems.items.map((item) => (
              <Link key={item.name} className="faar-system-card" href={item.href}>
                <strong>{sitelinkByPath[item.href] ?? item.name}</strong>
                <span>{item.note}</span>
              </Link>
            ))}
          </div>

          <h2>{copy.upgrades.h2}</h2>
          <p>{copy.upgrades.intro}</p>
          <DataTable
            columns={["Track", "Priority", "Benefit", "Timing"]}
            rows={copy.upgrades.rows.map((row) => [...row])}
          />

          <h2>{copy.rebirth.h2}</h2>
          <p>{copy.rebirth.body}</p>

          <h2>{copy.offline.h2}</h2>
          <p>{copy.offline.body}</p>

          <FishAnAnimeRngFaq page="guide" />

          <h2>{copy.disclaimer.h2}</h2>
          <p>{copy.disclaimer.body}</p>
          <p className="source">Last checked {fishAnAnimeRng.lastChecked}.</p>
        </article>
      </main>
    </SiteShell>
  );
}
