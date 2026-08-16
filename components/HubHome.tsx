import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Flame,
  Gamepad2,
  SearchCheck,
  Sparkles,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { catalog, catalogForJsonLd, latestKit } from "@/lib/games";
import { hubJsonLd } from "@/lib/hub";
import { siteCopy } from "@/lib/site";
import risingData from "@/data/rising/home.json";

const liveUniverseIds = new Set(catalog.map((game) => String(game.universeId)));
const queuedGames = risingData.games.filter(
  (game) => !liveUniverseIds.has(String(game.universeId)),
);
const risingGames = queuedGames.slice(0, 6);

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact" }).format(value);
}

export function HubHome() {
  const latest = latestKit();
  const featured = [...catalog].toReversed();

  return (
    <SiteShell current="hub">
      <JsonLd data={hubJsonLd(catalogForJsonLd())} />
      <main id="content">
        <section className="hub-hero">
          <div className="wrap">
            <div className="hub-hero-copy">
              <p className="kicker">{siteCopy.kicker}</p>
              <h1>{siteCopy.h1}</h1>
              <p>{siteCopy.dek}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#kits">
                  {siteCopy.heroCta}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="kits" className="wrap section-head is-catalog">
          <p className="kicker">{siteCopy.kits.kicker}</p>
          <h2>{siteCopy.kits.h2}</h2>
          <p>{siteCopy.kits.body}</p>
        </section>

        <article className="wrap hub-summary">
          <p>{siteCopy.summary}</p>
        </article>

        <section
          className="wrap featured-grid"
          data-count={String(catalog.length)}
          aria-label="Published Roblox guides"
        >
          {featured.map((game, index) => (
            <article key={game.slug} className="game-card">
              <div className="game-thumb">
                <img
                  src={game.thumb}
                  alt={`${game.name} screenshot`}
                  width={960}
                  height={540}
                  sizes="(min-width: 960px) 50vw, 100vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "low"}
                  decoding={index === 0 ? "sync" : "async"}
                />
              </div>
              <div className="game-card-body">
                <div className="game-card-top">
                  <img
                    className="game-icon"
                    src={game.icon}
                    alt=""
                    width={72}
                    height={72}
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h2>{game.name}</h2>
                    <p className="game-dev">{game.developer}</p>
                  </div>
                  <span className="status">
                    {game.slug === latest.slug ? "New" : game.kicker}
                  </span>
                </div>
                <p className="game-lede">{game.lede}</p>
                <div className="chips">
                  {game.tags.map((tag) => {
                    const href =
                      tag === "Guide"
                        ? game.path
                        : `${game.path}/${tag.toLowerCase()}`;
                    return (
                      <Link key={tag} href={href}>
                        {tag}
                      </Link>
                    );
                  })}
                </div>
                <div className="actions">
                  <Link className="btn btn-primary" href={game.path}>
                    Open guide
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                  <a
                    className="btn btn-ghost"
                    href={game.playUrl}
                    rel="noopener noreferrer"
                  >
                    Play on Roblox
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="wrap hub-stats" aria-label="Upvane publishing model">
          <div>
            <strong>{catalog.length}</strong>
            <span>live kits on this hub</span>
          </div>
          <div>
            <strong>0</strong>
            <span>fake code pages shipped</span>
          </div>
          <div>
            <strong>{risingGames.length}</strong>
            <span>names in the scan, not guides</span>
          </div>
        </section>

        <section id="rising" className="wrap rising-section">
          <div className="section-head inline">
            <div>
              <p className="kicker">{siteCopy.rising.kicker}</p>
              <h2>{siteCopy.rising.h2}</h2>
            </div>
            <p>{siteCopy.rising.body}</p>
          </div>

          <div className="rising-grid">
            {risingGames.map((game, index) => (
              <a
                key={game.universeId}
                className="rising-card"
                href={game.url}
                rel="noopener noreferrer"
              >
                <span className="rank">#{index + 1}</span>
                <div>
                  <h3>{game.name}</h3>
                  <p>
                    {game.genre} by {game.creator}
                  </p>
                </div>
                <dl>
                  <div>
                    <dt>CCU</dt>
                    <dd>{formatNumber(game.playing)}</dd>
                  </div>
                  <div>
                    <dt>Score</dt>
                    <dd>{game.score}</dd>
                  </div>
                  <div>
                    <dt>Age</dt>
                    <dd>{game.ageDays ? `${game.ageDays}d` : "New"}</dd>
                  </div>
                </dl>
              </a>
            ))}
          </div>
        </section>

        <section className="wrap editorial-band">
          <div>
            <SearchCheck size={22} aria-hidden="true" />
            <h2>What gets a guide?</h2>
            <p>
              A game needs enough player demand, searchable mechanics, and real
              in-game details. Codes pages only appear when the game actually
              has a redeem flow.
            </p>
          </div>
          <div>
            <Gamepad2 size={22} aria-hidden="true" />
            <h2>Designed like a hub</h2>
            <p>
              New games can appear on the homepage fast, and only the durable
              ones graduate into full routes with deeper content.
            </p>
          </div>
          <div>
            <Flame size={22} aria-hidden="true" />
            <h2>Heat without clutter</h2>
            <p>
              Short-lived Roblox spikes stay in the queue. Evergreen searches
              get permanent guide pages.
            </p>
          </div>
          <div>
            <Sparkles size={22} aria-hidden="true" />
            <h2>Room to expand</h2>
            <p>
              Pets, indexes, calculators, and event trackers can attach to a
              game hub without rebuilding the whole site.
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
