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
  thaLemon3WeaponsJsonLd,
  thaLemon3WeaponsMetadata,
} from "@/lib/games/tha-lemon-3";

export const metadata = thaLemon3WeaponsMetadata;

export default function ThaLemon3WeaponsPage() {
  const copy = thaLemon3Copy.weapons;

  return (
    <SiteShell current="weapons" slug="tha-lemon-3">
      <JsonLd data={thaLemon3WeaponsJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${thaLemon3.name} · Weapons`}
          title={copy.pageH1}
          dek={copy.dek}
          src={thaLemon3Art.weapons}
          alt={thaLemon3ArtAlt.weapons}
        />
        <article className="wrap article">
          <KitCrumb
            trail={[
              { href: thaLemon3.path, label: thaLemon3.name },
              { label: "Weapons" },
            ]}
          />

          <p>{copy.lead}</p>
          <div className="note warn">
            <p>{thaLemon3Copy.identityWarn}</p>
          </div>

          <EvidencePanel
            title="Weapons verification"
            lastChecked={thaLemon3.lastChecked}
            checked={`${thaLemon3.name} weapons for Roblox place ${thaLemon3.placeId}.`}
            verified={[
              "Official Roblox tags include Shooting, Fighting, and Switches.",
              "Combat is part of the listed Action / Open World Action genre.",
            ]}
            unverified={[
              "Named gun models and shop boards.",
              "Exact cash prices and pass-only weapons.",
              "Map markers for every gun store.",
            ]}
          />

          <h2>{copy.listH2}</h2>
          <p>{copy.listIntro}</p>
          <DataTable
            columns={["weapon", "type", "price", "how to get", "status"]}
            rows={copy.rows.map((row) => [
              row.weapon,
              row.type,
              row.price,
              row.how,
              row.status,
            ])}
          />

          <h2>{copy.whereH2}</h2>
          <p>{copy.whereBody}</p>

          <h2>{copy.tipsH2}</h2>
          <ul>
            {copy.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>

          <h2>{copy.faq.h2}</h2>
          <div className="faq">
            {copy.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>

          <p>
            Related:{" "}
            <Link
              href={thaLemon3.path}
              data-analytics-event="guide_nav"
              data-analytics-game={thaLemon3.slug}
              data-analytics-section="guide"
            >
              THA LEMON 3 guide
            </Link>
            {" · "}
            <Link
              href={`${thaLemon3.path}/money-guide`}
              data-analytics-event="guide_nav"
              data-analytics-game={thaLemon3.slug}
              data-analytics-section="money-guide"
            >
              Money Guide
            </Link>
          </p>

          <p className="source">Last checked {thaLemon3.lastChecked}.</p>
          <KitMore slug="tha-lemon-3" current="weapons" />
        </article>
      </main>
    </SiteShell>
  );
}
