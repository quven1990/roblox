import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import {
  stealAnEgg,
  stealAnEggCopy,
  stealAnEggJsonLd,
} from "@/lib/games/steal-an-egg";

export function StealAnEggHome() {
  const copy = stealAnEggCopy;

  return (
    <SiteShell current="guide">
      <JsonLd data={stealAnEggJsonLd()} />
      <main id="content">
        <header className="page-hero">
          <div className="wrap">
            <div className="page-hero-row">
              <img
                className="game-icon"
                src={stealAnEgg.icon}
                alt=""
                width={72}
                height={72}
              />
              <div>
                <p className="kicker">{stealAnEgg.kicker}</p>
                <h1>{copy.h1}</h1>
                <p className="lede">{copy.dek}</p>
                <div className="actions">
                  <a
                    className="btn btn-primary"
                    href={stealAnEgg.playUrl}
                    rel="noopener noreferrer"
                  >
                    {copy.heroCta}
                  </a>
                  <a className="btn btn-ghost" href="#guide">
                    How a run works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <article className="wrap article">
          <h2>{copy.rightGame.h2}</h2>
          <p>{copy.rightGame.body}</p>
          <div className="note warn">
            <p>{copy.rightGame.brainrot}</p>
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

          <h2 id="codes">{copy.codes.h2}</h2>
          <div className="note">
            <p>
              <strong>No redeem UI.</strong> {copy.codes.body}
            </p>
          </div>

          <h2 id="pets">{copy.pets.h2}</h2>
          <p>{copy.pets.body}</p>
          <p>{copy.pets.official}</p>
          <p style={{ color: "var(--muted)" }}>{copy.pets.community}</p>
          <p>
            <Link href={`${stealAnEgg.path}/pets`}>
              Pets Index — waiting on in-game data →
            </Link>
          </p>

          <h2>{copy.faq.h2}</h2>
          <div className="faq">
            {copy.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                {item.q === "Where is the pet list?" ? (
                  <p>
                    <Link href={`${stealAnEgg.path}/pets`}>
                      {stealAnEgg.path}/pets
                    </Link>{" "}
                    goes live after the Index is logged. Linking a fake King
                    Mammoth tier list is worse than a short wait.
                  </p>
                ) : (
                  <p>{item.a}</p>
                )}
              </details>
            ))}
          </div>

          <h2>{copy.disclaimer.h2}</h2>
          <p>{copy.disclaimer.body}</p>
          <p style={{ color: "var(--muted)", fontSize: 13 }}>
            Last checked {stealAnEgg.lastChecked}.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
