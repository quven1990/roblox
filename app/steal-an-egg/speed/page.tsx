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
