import Link from "next/link";
import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { KitCrumb } from "@/components/KitCrumb";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  stealAnEgg,
  stealAnEggArt,
  stealAnEggCopy,
  stealAnEggPageLastChecked,
  stealAnEggUpdatesJsonLd,
  stealAnEggUpdatesMetadata,
} from "@/lib/games/steal-an-egg";

export const metadata = stealAnEggUpdatesMetadata;

export default function StealAnEggUpdatesPage() {
  const copy = stealAnEggCopy.updates;
  const update = stealAnEggCopy.update1;

  return (
    <SiteShell current="updates">
      <JsonLd data={stealAnEggUpdatesJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${stealAnEgg.name} · Updates`}
          title={copy.pageH1}
          dek={copy.dek}
          src={stealAnEggArt.updates}
          alt="A toy chicken running with a stolen egg"
        />
        <article className="wrap article">
          <KitCrumb
            trail={[
              { href: stealAnEgg.path, label: stealAnEgg.name },
              { label: "Updates" },
            ]}
          />
          <p>{copy.lead}</p>
          <h2>{update.h2}</h2>
          <DataTable
            columns={["item", "status", "detail"]}
            rows={update.rows.map((row) => [row.item, row.status, row.detail])}
          />
          <p>
            <a href={update.eventUrl} rel="noopener noreferrer">
              {update.eventLabel} →
            </a>
          </p>
          <h2>{copy.howTitle}</h2>
          <p>{copy.howBody}</p>
          <h2>{copy.notTitle}</h2>
          <ul>
            {copy.notItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>Recheck after launch</h2>
          <p>
            After Update #1 goes live, confirm changes on{" "}
            <Link href={`${stealAnEgg.path}/biomes`}>biomes</Link>,{" "}
            <Link href={`${stealAnEgg.path}/mutations`}>mutations</Link>,{" "}
            <Link href={`${stealAnEgg.path}/eggs`}>eggs</Link>, and{" "}
            <Link href={`${stealAnEgg.path}/pets`}>pets</Link> before trusting a
            pre-launch name.
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
          <p className="source">
            Last checked {stealAnEggPageLastChecked.updates}.
          </p>
          <KitMore current="updates" />
        </article>
      </main>
    </SiteShell>
  );
}
