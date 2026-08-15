import type { ReactNode } from "react";
import Link from "next/link";
import { Compass, Play } from "lucide-react";
import { catalog } from "@/lib/games";
import { stealAnEgg, stealAnEggCopy } from "@/lib/games/steal-an-egg";
import { SITE_CONTACT_EMAIL, SITE_NAME, SITE_PRIVACY_EMAIL, siteCopy } from "@/lib/site";

type Current =
  | "hub"
  | "guide"
  | "pets"
  | "eggs"
  | "biomes"
  | "mutations"
  | "speed"
  | "legal";

export function SiteShell({
  children,
  current = "hub",
}: {
  children: ReactNode;
  current?: Current;
}) {
  const onKit =
    current === "guide" ||
    current === "pets" ||
    current === "eggs" ||
    current === "biomes" ||
    current === "mutations" ||
    current === "speed";

  const kitNav = [
    { id: "guide" as const, href: stealAnEgg.path, label: stealAnEggCopy.nav.guide },
    {
      id: "pets" as const,
      href: `${stealAnEgg.path}/pets`,
      label: stealAnEggCopy.nav.pets,
    },
    {
      id: "eggs" as const,
      href: `${stealAnEgg.path}/eggs`,
      label: stealAnEggCopy.nav.eggs,
    },
    {
      id: "biomes" as const,
      href: `${stealAnEgg.path}/biomes`,
      label: stealAnEggCopy.nav.biomes,
    },
    {
      id: "mutations" as const,
      href: `${stealAnEgg.path}/mutations`,
      label: stealAnEggCopy.nav.mutations,
    },
    {
      id: "speed" as const,
      href: `${stealAnEgg.path}/speed`,
      label: stealAnEggCopy.nav.speed,
    },
  ];

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
              {siteCopy.nav.games}
            </Link>
            <Link
              href={stealAnEgg.path}
              className={onKit ? "is-on kit-name" : "kit-name"}
            >
              {stealAnEgg.name}
            </Link>
            <span className="pill">{siteCopy.nav.unofficial}</span>
          </nav>
        </div>
        {onKit ? (
          <div className="subnav">
            <div className="subnav-inner">
              <nav className="subnav-links" aria-label="Steal An Egg">
                {kitNav.map((item) => (
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
                href={stealAnEgg.playUrl}
                rel="noopener noreferrer"
              >
                <Play size={14} aria-hidden="true" />
                {stealAnEggCopy.nav.play}
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
          <p>{onKit ? stealAnEggCopy.footer : siteCopy.footer}</p>
        </div>
      </footer>
    </div>
  );
}
