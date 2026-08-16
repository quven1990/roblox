import Link from "next/link";
import { EvidencePanel } from "@/components/EvidencePanel";
import { JsonLd } from "@/components/JsonLd";
import { KitCrumb } from "@/components/KitCrumb";
import { KitHero } from "@/components/KitHero";
import { SiteShell } from "@/components/SiteShell";
import {
  animeVanguards,
  animeVanguardsArt,
  animeVanguardsArtAlt,
  animeVanguardsCopy,
  animeVanguardsJsonLd,
} from "@/lib/games/anime-vanguards";

function ZoneList({
  items,
}: {
  items: readonly { name: string; note: string; href?: string }[];
}) {
  return (
    <ol className="zone-list">
      {items.map((item) => (
        <li key={item.name}>
          <strong>
            {item.href ? <Link href={item.href}>{item.name}</Link> : item.name}
          </strong>
          <span>{item.note}</span>
        </li>
      ))}
    </ol>
  );
}

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
            <Link className="btn btn-ghost" href={`${animeVanguards.path}/codes`}>
              {copy.pages.ghostCta}
            </Link>
          </div>
        </KitHero>

        <article className="wrap article">
          <KitCrumb trail={[{ label: animeVanguards.name }]} />
          <h2>{copy.rightGame.h2}</h2>
          <p>{copy.rightGame.body}</p>
          <div className="note warn">
            <p>{copy.rightGame.notThis}</p>
          </div>

          <EvidencePanel
            lastChecked={animeVanguards.lastChecked}
            checked={`Roblox place ${animeVanguards.placeId} by ${animeVanguards.developer}.`}
            verified={[
              "The Roblox page confirms the Kitawari game and core tower defense loop.",
              "Update 14.5 details are separated from older mode and unit notes.",
              "Codes are compared against Kitawari notes and the official wiki table when available.",
              "Unit, item, and trait pages label official wiki facts separately from unphotographed client details.",
            ]}
            unverified={[
              "Profile to Codes redeem path is still unphotographed on this kit.",
              "Live lobby screenshots for Story, Infinite, Gauntlets, and Worldlines.",
            ]}
          />

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
          <ZoneList items={copy.systems.items} />

          <h2 id="update-14-5">{copy.update145.h2}</h2>
          <p>{copy.update145.intro}</p>
          <ZoneList items={copy.update145.items} />
          <p>
            <Link href={`${animeVanguards.path}/units`}>
              {copy.units.pageH1} →
            </Link>
            {" · "}
            <Link href={`${animeVanguards.path}/items`}>
              {copy.items.pageH1} →
            </Link>
            {" · "}
            <Link href={`${animeVanguards.path}/codes`}>
              {copy.codes.pageH1} →
            </Link>
          </p>

          <h2 id="modes">{copy.modes.h2}</h2>
          <p>{copy.modes.intro}</p>
          <ZoneList items={copy.modes.items} />

          <h2 id="codes">{copy.codes.h2}</h2>
          <div className="note">
            <p>{copy.codes.body}</p>
          </div>
          <p>
            <Link href={`${animeVanguards.path}/codes`}>
              {copy.codes.pageH1} →
            </Link>
          </p>

          <h2 id="items">{copy.items.h2}</h2>
          <p>{copy.items.intro}</p>
          <p>
            <Link href={`${animeVanguards.path}/items`}>
              {copy.items.pageH1} →
            </Link>
          </p>

          <h2 id="traits">{copy.traits.h2}</h2>
          <p>{copy.traits.body}</p>
          <p>
            <Link href={`${animeVanguards.path}/traits`}>
              {copy.traits.pageH1} →
            </Link>
          </p>

          <h2 id="units">{copy.units.h2}</h2>
          <p>{copy.units.body}</p>
          <p>
            <Link href={`${animeVanguards.path}/units`}>
              {copy.units.pageH1} →
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
