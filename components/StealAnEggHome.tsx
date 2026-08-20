import Link from "next/link";
import { EvidencePanel } from "@/components/EvidencePanel";
import { JsonLd } from "@/components/JsonLd";
import { KitCrumb } from "@/components/KitCrumb";
import { KitHero } from "@/components/KitHero";
import { SiteShell } from "@/components/SiteShell";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import {
  stealAnEgg,
  stealAnEggArt,
  stealAnEggCopy,
  stealAnEggJsonLd,
  stealAnEggPageLastChecked,
  stealAnEggVideos,
} from "@/lib/games/steal-an-egg";

export function StealAnEggHome() {
  const copy = stealAnEggCopy;

  return (
    <SiteShell current="guide">
      <JsonLd data={stealAnEggJsonLd()} />
      <main id="content">
        <KitHero
          kicker={stealAnEgg.kicker}
          title={copy.h1}
          dek={copy.dek}
          src={stealAnEggArt.guide}
          alt="A toy chicken running with a stolen egg"
          icon={stealAnEgg.icon}
          eager
        >
          <div className="actions">
            <a
              className="btn btn-primary"
              href={stealAnEgg.playUrl}
              rel="noopener noreferrer"
            >
              {copy.heroCta}
            </a>
            <a className="btn btn-ghost" href="#wiki">
              Guide pages
            </a>
          </div>
        </KitHero>

        <article className="wrap article">
          <KitCrumb trail={[{ label: stealAnEgg.name }]} />
          <h2>{copy.rightGame.h2}</h2>
          <p>{copy.rightGame.body}</p>
          <div className="note warn">
            <p>{copy.rightGame.brainrot}</p>
          </div>

          <h2>{copy.update1.h2}</h2>
          <p>{copy.update1.lead}</p>
          <ol className="zone-list">
            {copy.update1.rows.map((row) => (
              <li key={row.item}>
                <strong>
                  {row.item} · {row.status}
                </strong>
                <span>{row.detail}</span>
              </li>
            ))}
          </ol>
          <p>
            <Link href={`${stealAnEgg.path}/updates`}>
              Full Update #1 status page →
            </Link>
          </p>
          <p>
            <a href={copy.update1.eventUrl} rel="noopener noreferrer">
              {copy.update1.eventLabel} →
            </a>
          </p>

          <EvidencePanel
            lastChecked={stealAnEggPageLastChecked.guide}
            checked={`Roblox place ${stealAnEgg.placeId} by ${stealAnEgg.developer}.`}
            verified={[
              "The core loop is egg steal, hatch at base, pet income, Speed training, and biome gates.",
              "Forest and Lake pet Index details come from an in-game screenshot.",
              "Later biomes are labeled from public English-client gameplay, not invented tier names.",
              "The official Roblox event page title says ADMIN ABUSE!? + New Zone - Steal An Egg for Update #1.",
              "No redeem UI is confirmed for this kit, so there is no Steal An Egg codes page.",
            ]}
            unverified={[
              "Full later-biome Index rows and exact Speed gate numbers.",
              "Published odds for huge, giant, gold, silver, and rare egg outcomes.",
              "Update #1 new zone name, new mutation name, Dragon event mechanics, and rewards before launch.",
            ]}
          />

          <h2 id="wiki">{copy.wiki.h2}</h2>
          <div className="wiki-grid">
            {copy.wiki.cards.map((card) => (
              <Link
                key={card.id}
                className="wiki-card"
                href={`${stealAnEgg.path}/${card.id}`}
              >
                <img
                  src={stealAnEggArt[card.id]}
                  alt=""
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
            videoId={stealAnEggVideos.loop.id}
            title={stealAnEggVideos.loop.title}
            credit={stealAnEggVideos.loop.credit}
            caption={copy.howARunWorks.videoCaption}
            poster={stealAnEggVideos.loop.poster}
            watchUrl={stealAnEggVideos.loop.watchUrl}
          />

          <h2 id="stealing">{copy.stealing.h2}</h2>
          <p>{copy.stealing.body}</p>
          <ol className="zone-list">
            {copy.stealing.tools.map((tool) => (
              <li key={tool.name}>
                <strong>{tool.name}</strong>
                <span>{tool.note}</span>
              </li>
            ))}
          </ol>

          <h2 id="map">{copy.map.h2}</h2>
          <p>{copy.map.body}</p>
          <p>
            Full biome list:{" "}
            <Link href={`${stealAnEgg.path}/biomes`}>/steal-an-egg/biomes</Link>
          </p>

          <h2 id="eggs">{copy.eggs.h2}</h2>
          <p>{copy.eggs.teaser}</p>
          <p>
            <Link href={`${stealAnEgg.path}/eggs`}>{copy.eggs.pageH1} →</Link>
          </p>

          <h2 id="codes">{copy.codes.h2}</h2>
          <div className="note">
            <p>
              <strong>No redeem UI.</strong> {copy.codes.body}
            </p>
          </div>

          <h2 id="pets">{copy.pets.h2}</h2>
          <p>{copy.pets.body}</p>
          <p>
            <Link href={`${stealAnEgg.path}/pets`}>{copy.pets.linkLabel}</Link>
          </p>

          <h2 id="speed">{copy.speed.h2}</h2>
          <p>{copy.speed.teaser}</p>
          <p>
            <Link href={`${stealAnEgg.path}/speed`}>
              Steal An Egg Speed page →
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
            Last checked {stealAnEggPageLastChecked.guide}.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
