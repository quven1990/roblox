import { CopyCode } from "@/components/CopyCode";
import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  growAChickenFighter,
  growAChickenFighterArt,
  growAChickenFighterArtAlt,
  growAChickenFighterCodesJsonLd,
  growAChickenFighterCodesMetadata,
  growAChickenFighterCopy,
} from "@/lib/games/grow-a-chicken-fighter";

export const metadata = growAChickenFighterCodesMetadata;

export default function GrowAChickenFighterCodesPage() {
  const copy = growAChickenFighterCopy.codes;

  return (
    <SiteShell current="codes" slug="grow-a-chicken-fighter">
      <JsonLd data={growAChickenFighterCodesJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${growAChickenFighter.name} · Codes`}
          title={copy.pageH1}
          dek={copy.dek}
          src={growAChickenFighterArt.codes}
          alt={growAChickenFighterArtAlt.codes}
        />
        <article className="wrap article">
          <p>{copy.body}</p>
          <p>{copy.tableNote}</p>
          <p className="source">{copy.copyHint}</p>
          <DataTable
            columns={["code", "status", "reward", "source"]}
            rows={copy.rows.map((row) => [
              <CopyCode key={row.code} code={row.code} />,
              row.status,
              row.reward,
              row.source,
            ])}
          />
          <div className="note warn">
            <p>{growAChickenFighterCopy.rewards.notCodes}</p>
          </div>
          <h2>{copy.faq.h2}</h2>
          <div className="faq">
            {copy.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <p className="source">Last checked {growAChickenFighter.lastChecked}.</p>
          <KitMore slug="grow-a-chicken-fighter" />
        </article>
      </main>
    </SiteShell>
  );
}
