import Link from "next/link";
import { DataTable } from "@/components/DataTable";
import { EvidencePanel } from "@/components/EvidencePanel";
import { JsonLd } from "@/components/JsonLd";
import { KitCrumb } from "@/components/KitCrumb";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  thaLemon3,
  thaLemon3Art,
  thaLemon3ArtAlt,
  thaLemon3Copy,
  thaLemon3Identity,
  thaLemon3JsonLd,
} from "@/lib/games/tha-lemon-3";

export function ThaLemon3Home() {
  const copy = thaLemon3Copy;

  return (
    <SiteShell current="guide" slug="tha-lemon-3">
      <JsonLd data={thaLemon3JsonLd()} />
      <main id="content">
        <KitHero
          kicker={thaLemon3.kicker}
          title={copy.h1}
          dek={copy.dek}
          src={thaLemon3Art.guide}
          alt={thaLemon3ArtAlt.guide}
          icon={thaLemon3.icon}
          eager
        >
          <div className="actions">
            <a
              className="btn btn-primary"
              href={thaLemon3.playUrl}
              rel="noopener noreferrer"
              data-analytics-event="play_roblox"
              data-analytics-game={thaLemon3.slug}
              data-analytics-location="hero"
            >
              {copy.heroCta}
            </a>
            <a className="btn btn-ghost" href="#pages">
              {copy.pages.ghostCta}
            </a>
          </div>
        </KitHero>

        <article className="wrap article">
          <KitCrumb
            trail={[{ label: thaLemon3.name }]}
          />

          <p>{copy.quickAnswer}</p>

          <div className="note warn">
            <p>{copy.identityWarn}</p>
          </div>
          <p>{copy.listingNote}</p>

          <h2>Game identity</h2>
          <DataTable
            columns={["field", "value"]}
            rows={[
              ["Developer", thaLemon3.developer],
              ["Roblox place", thaLemon3.placeId],
              ["Universe", thaLemon3.universeId],
              ["Listing title now", thaLemon3Identity.listingNameNow],
              ["Genre", `${thaLemon3Identity.genreL1} · ${thaLemon3Identity.genreL2}`],
              ["Last checked", thaLemon3.lastChecked],
            ]}
          />
          <p className="source">{thaLemon3Identity.olderRpNote}</p>

          <EvidencePanel
            lastChecked={thaLemon3.lastChecked}
            checked={`Roblox place ${thaLemon3.placeId} by ${thaLemon3.developer}.`}
            verified={[
              "Creator group is 223Z STUDIOS on the live Games API.",
              `Official tags include: ${thaLemon3Identity.officialTags.join(", ")}.`,
              "Genre is listed as Action / Open World Action.",
              "This kit points only at place 128899661081075.",
            ]}
            unverified={[
              "Exact job, heist, and robbery payout tables.",
              "Named gun shop inventories and prices.",
              "Whether a codes redeem UI exists.",
            ]}
          />

          <h2>{copy.whatFirst.h2}</h2>
          <ul>
            {copy.whatFirst.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 id="pages">{copy.pages.h2}</h2>
          <div className="wiki-grid">
            {copy.pages.cards.map((card) => (
              <Link
                key={card.id}
                className="wiki-card"
                href={`${thaLemon3.path}/${card.id}`}
                data-analytics-event="guide_nav"
                data-analytics-game={thaLemon3.slug}
                data-analytics-section={card.id}
              >
                <img
                  src={
                    thaLemon3Art[card.id as keyof typeof thaLemon3Art]
                  }
                  alt={
                    thaLemon3ArtAlt[card.id as keyof typeof thaLemon3ArtAlt]
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

          <h2>{copy.systems.h2}</h2>
          <p>{copy.systems.body}</p>
          <DataTable
            columns={["system", "detail", "status"]}
            rows={copy.systems.rows.map((row) => [
              row.system,
              row.detail,
              row.status,
            ])}
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

          <p className="source">Last checked {thaLemon3.lastChecked}.</p>
          <KitMore slug="tha-lemon-3" current="guide" />
        </article>
      </main>
    </SiteShell>
  );
}
