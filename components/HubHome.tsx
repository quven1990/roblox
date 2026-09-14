import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Flame,
  Gamepad2,
  SearchCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import {
  catalog,
  catalogForJsonLd,
  catalogTools,
  formatGameChecked,
  gamesByStatus,
  recentlyUpdatedGames,
  statusLabel,
  type CatalogGame,
} from "@/lib/games";
import type { GameStatus } from "@/lib/games/types";
import { hubJsonLd } from "@/lib/hub";
import { siteCopy } from "@/lib/site";
import risingData from "@/data/rising/home.json";

const liveUniverseIds = new Set(catalog.map((game) => String(game.universeId)));
const queuedGames = risingData.games.filter(
  (game) => !liveUniverseIds.has(String(game.universeId)),
);
const risingGames = queuedGames.slice(0, 6);
const tools = catalogTools();

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact" }).format(value);
}

function GameCard({
  game,
  index,
  surface,
}: {
  game: CatalogGame;
  index: number;
  surface: "active" | "watch" | "archive";
}) {
  const status = game.status as GameStatus;
  const openEvent =
    surface === "archive" ? "archive_game_click" : "game_card_click";
  const prioritize = surface !== "archive" && index === 0;

  return (
    <article className="game-card">
      <div className="game-thumb">
        <img
          src={game.thumb}
          alt={`${game.name} screenshot`}
          width={960}
          height={540}
          sizes="(min-width: 960px) 50vw, 100vw"
          loading={prioritize ? "eager" : "lazy"}
          fetchPriority={prioritize ? "high" : "low"}
          decoding={prioritize ? "sync" : "async"}
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
            <h3>{game.name}</h3>
            <p className="game-dev">
              Updated {formatGameChecked(game.lastChecked)}
            </p>
          </div>
          <span className={`status status-${status}`}>{statusLabel(status)}</span>
        </div>
        <p className="game-lede">{game.lede}</p>
        <div className="chips">
          {game.featuredPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              data-analytics-event={openEvent}
              data-analytics-game={game.slug}
              data-analytics-status={status}
              data-analytics-source={`${surface}_chip`}
              data-analytics-surface="chip"
            >
              {page.label}
            </Link>
          ))}
        </div>
        <div className="actions">
          <Link
            className="btn btn-primary"
            href={game.path}
            data-analytics-event={
              surface === "archive" ? "archive_game_click" : "hub_kit_open"
            }
            data-analytics-game={game.slug}
            data-analytics-status={status}
            data-analytics-source={surface}
            data-analytics-surface="guide"
          >
            Open guide
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <a
            className="btn btn-ghost"
            href={game.playUrl}
            rel="noopener noreferrer"
            data-analytics-event="play_roblox"
            data-analytics-game={game.slug}
            data-analytics-location="hub_card"
          >
            Play on Roblox
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function GameSection({
  status,
  surface,
  kicker,
  h2,
  body,
  empty,
}: {
  status: GameStatus;
  surface: "active" | "watch" | "archive";
  kicker: string;
  h2: string;
  body: string;
  empty?: string;
}) {
  const games = gamesByStatus(status);
  const sectionId =
    status === "active" ? "active" : status === "watch" ? "watch" : "archive";

  return (
    <>
      <section id={sectionId} className="wrap section-head is-catalog">
        <p className="kicker">{kicker}</p>
        <h2>{h2}</h2>
        <p>{body}</p>
      </section>
      {games.length === 0 ? (
        empty ? (
          <p className="wrap hub-empty">{empty}</p>
        ) : null
      ) : (
        <section
          className="wrap featured-grid"
          data-count={String(Math.min(games.length, 4))}
          aria-label={h2}
        >
          {games.map((game, index) => (
            <GameCard
              key={game.slug}
              game={game}
              index={index}
              surface={surface}
            />
          ))}
        </section>
      )}
    </>
  );
}

export function HubHome() {
  const recent = recentlyUpdatedGames(5);
  const active = gamesByStatus("active");
  const watch = gamesByStatus("watch");
  const frozen = gamesByStatus("frozen");

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
                <a className="btn btn-primary" href="#recent">
                  {siteCopy.heroCta}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <article className="wrap hub-summary">
          <p>{siteCopy.summary}</p>
        </article>

        <section id="recent" className="wrap section-head is-catalog">
          <p className="kicker">{siteCopy.sections.recentlyUpdated.kicker}</p>
          <h2>{siteCopy.sections.recentlyUpdated.h2}</h2>
          <p>{siteCopy.sections.recentlyUpdated.body}</p>
        </section>

        <section className="wrap recent-list" aria-label="Recently updated kits">
          {recent.map((game) => (
            <Link
              key={game.slug}
              className="recent-row"
              href={game.path}
              data-analytics-event="hub_kit_open"
              data-analytics-game={game.slug}
              data-analytics-status={game.status}
              data-analytics-source="recent"
              data-analytics-surface="recent"
            >
              <span className={`status status-${game.status}`}>
                {statusLabel(game.status)}
              </span>
              <strong>{game.name}</strong>
              <span className="recent-date">
                {formatGameChecked(game.lastChecked)}
              </span>
              <span className="recent-pages">
                {game.featuredPages
                  .slice(0, 3)
                  .map((page) => page.label)
                  .join(" · ")}
              </span>
            </Link>
          ))}
        </section>

        <GameSection
          status="active"
          surface="active"
          kicker={siteCopy.sections.active.kicker}
          h2={siteCopy.sections.active.h2}
          body={siteCopy.sections.active.body}
          empty={siteCopy.sections.active.empty}
        />

        <GameSection
          status="watch"
          surface="watch"
          kicker={siteCopy.sections.watch.kicker}
          h2={siteCopy.sections.watch.h2}
          body={siteCopy.sections.watch.body}
        />

        {tools.length > 0 ? (
          <>
            <section id="tools" className="wrap section-head is-catalog">
              <p className="kicker">{siteCopy.sections.tools.kicker}</p>
              <h2>{siteCopy.sections.tools.h2}</h2>
              <p>{siteCopy.sections.tools.body}</p>
            </section>
            <section className="wrap tools-list" aria-label="Useful tools">
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  className="tool-row"
                  href={tool.href}
                  data-analytics-event="guide_nav"
                  data-analytics-game="greedy-growers"
                  data-analytics-page="calculator"
                  data-analytics-surface="hub_tools"
                >
                  <Wrench size={18} aria-hidden="true" />
                  <span>{tool.label}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              ))}
            </section>
          </>
        ) : null}

        <GameSection
          status="frozen"
          surface="archive"
          kicker={siteCopy.sections.frozen.kicker}
          h2={siteCopy.sections.frozen.h2}
          body={siteCopy.sections.frozen.body}
        />

        <section className="wrap hub-stats" aria-label="Upvane publishing model">
          <div>
            <strong>{active.length}</strong>
            <span>active kits</span>
          </div>
          <div>
            <strong>{watch.length}</strong>
            <span>on watch</span>
          </div>
          <div>
            <strong>{frozen.length}</strong>
            <span>archived (URLs kept)</span>
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
                data-analytics-event="rising_game_click"
                data-analytics-game-name={game.name}
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
            <h2>Small clusters first</h2>
            <p>
              A new Roblox game starts with a hub plus at most two strong-intent
              pages. Expand only after Search Console shows real demand.
            </p>
          </div>
          <div>
            <Gamepad2 size={22} aria-hidden="true" />
            <h2>Answer first, evidence next</h2>
            <p>
              Lead with the player answer, then label Verified,
              Community-reported, Unconfirmed, or Outdated. Never invent codes or
              multipliers.
            </p>
          </div>
          <div>
            <Flame size={22} aria-hidden="true" />
            <h2>Freeze without deleting</h2>
            <p>
              When a spike fades, mark the kit Frozen. Keep URLs indexed. Stop
              writing until a new signal appears.
            </p>
          </div>
          <div>
            <Sparkles size={22} aria-hidden="true" />
            <h2>Tools beat filler</h2>
            <p>
              Calculators, planners, and filters outrank empty wiki lists when the
              game has usable numbers.
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
