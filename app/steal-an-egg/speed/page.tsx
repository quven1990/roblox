import { EvidencePanel } from "@/components/EvidencePanel";
import { KitHero } from "@/components/KitHero";
import { KitMore } from "@/components/KitMore";
import { SiteShell } from "@/components/SiteShell";
import {
  stealAnEgg,
  stealAnEggArt,
  stealAnEggCopy,
  stealAnEggSpeedMetadata,
} from "@/lib/games/steal-an-egg";

export const metadata = stealAnEggSpeedMetadata;

export default function StealAnEggSpeedPage() {
  const copy = stealAnEggCopy.speed;

  return (
    <SiteShell current="speed">
      <main id="content">
        <KitHero
          kicker={`${stealAnEgg.name} · Speed`}
          title={copy.pageH1}
          dek={copy.dek}
          src={stealAnEggArt.speed}
          alt="A toy runner on a yellow treadmill"
        />
        <article className="wrap article">
          <p>
            Steal An Egg Speed checked August 16, 2026: treadmill training,
            trails, pen upgrades, paid multipliers, egg reset, and settings are
            visible in gameplay. This page avoids a live price ladder because
            those numbers can rot quickly.
          </p>
          <EvidencePanel
            lastChecked={stealAnEgg.lastChecked}
            checked={`${stealAnEgg.name} Speed systems for Roblox place ${stealAnEgg.placeId}.`}
            verified={[
              "Treadmill, trails, pen upgrades, paid multipliers, egg reset, and settings are visible in public English-client gameplay.",
              "Speed gates exist and can reach very high numbers in later biomes.",
              "The page intentionally avoids a live price ladder because shop and upgrade numbers can rot quickly.",
            ]}
            unverified={[
              "Exact Recommended Speed for every biome in the current client.",
              "Complete treadmill, trail, pen, and Robux pack price tables.",
            ]}
          />
          {copy.sections.map((section) => (
            <section key={section.h3}>
              <h2>{section.h3}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <div className="note">
            <p>{copy.willNot}</p>
          </div>
          <p className="source">Last checked {stealAnEgg.lastChecked}.</p>
          <KitMore current="speed" />
        </article>
      </main>
    </SiteShell>
  );
}
