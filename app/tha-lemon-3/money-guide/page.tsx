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
  thaLemon3MoneyJsonLd,
  thaLemon3MoneyMetadata,
} from "@/lib/games/tha-lemon-3";

export const metadata = thaLemon3MoneyMetadata;

export default function ThaLemon3MoneyGuidePage() {
  const copy = thaLemon3Copy.money;

  return (
    <SiteShell current="money-guide" slug="tha-lemon-3">
      <JsonLd data={thaLemon3MoneyJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${thaLemon3.name} · Money`}
          title={copy.pageH1}
          dek={copy.dek}
          src={thaLemon3Art["money-guide"]}
          alt={thaLemon3ArtAlt["money-guide"]}
        />
        <article className="wrap article">
          <KitCrumb
            trail={[
              { href: thaLemon3.path, label: thaLemon3.name },
              { label: "Money Guide" },
            ]}
          />

          <p>{copy.lead}</p>
          <div className="note warn">
            <p>{thaLemon3Copy.identityWarn}</p>
          </div>

          <EvidencePanel
            title="Money verification"
            lastChecked={thaLemon3.lastChecked}
            checked={`${thaLemon3.name} money systems for Roblox place ${thaLemon3.placeId}.`}
            verified={[
              "Official Roblox tags include Money and Grind.",
              "Genre is Open World Action on the Games API.",
            ]}
            unverified={[
              "Exact job names and payouts.",
              "Heist / robbery reward tables.",
              "Any dollar amount copied from third-party Bronx sites.",
            ]}
          />

          <h2>{copy.methodsH2}</h2>
          <p>{copy.methodsIntro}</p>
          <DataTable
            columns={[
              "method",
              "risk",
              "requirement",
              "reward",
              "status",
            ]}
            rows={copy.rows.map((row) => [
              row.method,
              row.risk,
              row.requirement,
              row.reward,
              row.status,
            ])}
          />

          <h2>{copy.earlyH2}</h2>
          <p>{copy.earlyBody}</p>

          <h2>{copy.laterH2}</h2>
          <p>{copy.laterBody}</p>

          <h2>{copy.tipsH2}</h2>
          <ul>
            {copy.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>

          <h2>{copy.avoidH2}</h2>
          <ul>
            {copy.avoid.map((item) => (
              <li key={item}>{item}</li>
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
              href={`${thaLemon3.path}/weapons`}
              data-analytics-event="guide_nav"
              data-analytics-game={thaLemon3.slug}
              data-analytics-section="weapons"
            >
              Weapons
            </Link>
          </p>

          <p className="source">Last checked {thaLemon3.lastChecked}.</p>
          <KitMore slug="tha-lemon-3" current="money-guide" />
        </article>
      </main>
    </SiteShell>
  );
}
