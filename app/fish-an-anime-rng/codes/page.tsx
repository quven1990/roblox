import Link from "next/link";
import { CopyCode } from "@/components/CopyCode";
import { DataTable } from "@/components/DataTable";
import { EvidencePanel } from "@/components/EvidencePanel";
import { JsonLd } from "@/components/JsonLd";
import { FishAnAnimeRngFaq } from "@/components/FishAnAnimeRngFaq";
import { KitCrumb } from "@/components/KitCrumb";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  fishAnAnimeRng,
  fishAnAnimeRngArt,
  fishAnAnimeRngArtAlt,
  fishAnAnimeRngCodesJsonLd,
  fishAnAnimeRngCodesMetadata,
  fishAnAnimeRngCopy,
} from "@/lib/games/fish-an-anime-rng";

export const metadata = fishAnAnimeRngCodesMetadata;

export default function FishAnAnimeRngCodesPage() {
  const copy = fishAnAnimeRngCopy.codes;

  return (
    <SiteShell current="codes" slug="fish-an-anime-rng">
      <JsonLd data={fishAnAnimeRngCodesJsonLd()} />
      <main id="content">
        <KitHero
          kicker={`${fishAnAnimeRng.name} · Codes`}
          title={copy.pageH1}
          dek={copy.dek}
          src={fishAnAnimeRngArt.codes}
          alt={fishAnAnimeRngArtAlt.codes}
        />
        <article className="wrap article faar-article">
          <KitCrumb
            trail={[
              { href: fishAnAnimeRng.path, label: fishAnAnimeRng.name },
              { label: "Codes" },
            ]}
          />
          <p className="faar-lead">{copy.lead}</p>
          <p>
            The wiki hub covers the loop —{" "}
            <Link href={fishAnAnimeRng.path}>Fish an Anime RNG wiki</Link>.{" "}
            {copy.body}
          </p>
          <EvidencePanel
            title="Codes verification"
            lastChecked={fishAnAnimeRng.lastChecked}
            checked={`${fishAnAnimeRng.name} codes for Roblox place ${fishAnAnimeRng.placeId}.`}
            verified={[
              "Beebom August 20, 2026 lists five active strings with Cosmic Box or potion rewards.",
              "Disputed rows flag GameRant reward disagreements instead of marking everything Working.",
              "Expired milestone codes stay in-table so old bookmarks do not look current.",
            ]}
            unverified={[
              "A photographed redeem box on this kit.",
              "Live server acceptance for every disputed string.",
            ]}
          />
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
          <h2>{copy.redeemTitle}</h2>
          <ol className="steps">
            {copy.redeemSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          <FishAnAnimeRngFaq page="codes" />
          <p className="source">Last checked {fishAnAnimeRng.lastChecked}.</p>
          <KitMore slug="fish-an-anime-rng" current="codes" />
        </article>
      </main>
    </SiteShell>
  );
}
