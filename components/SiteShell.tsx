import type { ReactNode } from "react";
import Link from "next/link";
import { Compass, Play } from "lucide-react";
import { catalog, type GameSlug } from "@/lib/games";
import {
  animeVanguards,
  animeVanguardsCopy,
  animeVanguardsNav,
} from "@/lib/games/anime-vanguards";
import {
  growAChickenFighter,
  growAChickenFighterCopy,
  growAChickenFighterNav,
} from "@/lib/games/grow-a-chicken-fighter";
import { stealAnEgg, stealAnEggCopy, stealAnEggNav } from "@/lib/games/steal-an-egg";
import { SITE_CONTACT_EMAIL, SITE_NAME, SITE_PRIVACY_EMAIL, siteCopy } from "@/lib/site";

export type KitSection =
  | "guide"
  | "pets"
  | "eggs"
  | "biomes"
  | "mutations"
  | "speed"
  | "codes"
  | "rewards"
  | "chickens"
  | "fusion"
  | "traits"
  | "units"
  | "items";

type Current = "hub" | "legal" | KitSection;

function kitChrome(slug: GameSlug) {
  const bySlug = {
    "steal-an-egg": {
      game: stealAnEgg,
      nav: stealAnEggNav,
      footer: stealAnEggCopy.footer,
      playLabel: stealAnEggCopy.nav.play,
    },
    "grow-a-chicken-fighter": {
      game: growAChickenFighter,
      nav: growAChickenFighterNav,
      footer: growAChickenFighterCopy.footer,
      playLabel: growAChickenFighterCopy.nav.play,
    },
    "anime-vanguards": {
      game: animeVanguards,
      nav: animeVanguardsNav,
      footer: animeVanguardsCopy.footer,
      playLabel: animeVanguardsCopy.nav.play,
    },
  } as const;

  return bySlug[slug];
}

export function SiteShell({
  children,
  current = "hub",
  slug,
}: {
  children: ReactNode;
  current?: Current;
  slug?: GameSlug;
}) {
  const kitSlug: GameSlug | undefined =
    current === "hub" || current === "legal" ? undefined : (slug ?? "steal-an-egg");
  const kit = kitSlug ? kitChrome(kitSlug) : null;
  const onKit = Boolean(kit);

  return (
    <div className={onKit ? "shell is-kit" : "shell"}>
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <Compass size={19} />
            </span>
            <span>
              <span className="brand-name">{SITE_NAME}</span>
              <span className="brand-sub">Roblox trend desk</span>
            </span>
          </Link>
          <nav className="top-nav" aria-label="Site">
            <Link href="/" className={current === "hub" ? "is-on" : undefined}>
              <span className="nav-wide">{siteCopy.nav.games}</span>
              <span className="nav-narrow">Hub</span>
            </Link>
            {catalog.map((game) => (
              <Link
                key={game.slug}
                href={game.path}
                className={
                  kitSlug === game.slug
                    ? "is-on kit-name is-current"
                    : "kit-name is-other"
                }
              >
                {game.name}
              </Link>
            ))}
            <span className="pill">{siteCopy.nav.unofficial}</span>
          </nav>
        </div>
        {kit ? (
          <div className="subnav">
            <div className="subnav-inner">
              <nav className="subnav-links" aria-label={kit.game.name}>
                {kit.nav.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={current === item.id ? "is-on" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <a
                className="play"
                href={kit.game.playUrl}
                rel="noopener noreferrer"
              >
                <Play size={14} aria-hidden="true" />
                {kit.playLabel}
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <div className="main">{children}</div>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <p className="brand-name">{SITE_NAME}</p>
            <p>
              Roblox trend scanning plus focused guide hubs. Codes only when a
              redeem box exists.
            </p>
          </div>
          <div>
            <h2>Games</h2>
            <ul>
              {catalog.map((game) => (
                <li key={game.slug}>
                  <Link href={game.path}>{game.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Legal</h2>
            <ul>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${SITE_CONTACT_EMAIL}`}>
                  General · {SITE_CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_PRIVACY_EMAIL}`}>
                  Privacy · {SITE_PRIVACY_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap" style={{ paddingTop: 16 }}>
          <p>{kit ? kit.footer : siteCopy.footer}</p>
        </div>
      </footer>
    </div>
  );
}
