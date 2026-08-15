import type { ReactNode } from "react";
import Link from "next/link";
import { Compass, Play } from "lucide-react";
import { catalog } from "@/lib/games";
import { stealAnEgg, stealAnEggCopy } from "@/lib/games/steal-an-egg";
import { SITE_NAME, siteCopy } from "@/lib/site";

type Current = "hub" | "guide" | "pets" | "legal";

export function SiteShell({
  children,
  current = "hub",
}: {
  children: ReactNode;
  current?: Current;
}) {
  const onKit = current === "guide" || current === "pets";

  return (
    <div className="shell">
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
            <Link href={stealAnEgg.path} className={onKit ? "is-on" : undefined}>
              {stealAnEgg.name}
            </Link>
            <span className="pill">{siteCopy.nav.unofficial}</span>
          </nav>
        </div>
        {onKit ? (
          <div className="subnav">
            <div className="subnav-inner">
              <Link
                href={`${stealAnEgg.path}#guide`}
                className={current === "guide" ? "is-on" : undefined}
              >
                Guide
              </Link>
              <Link
                href={`${stealAnEgg.path}/pets`}
                className={current === "pets" ? "is-on" : undefined}
              >
                Pets
              </Link>
              <a
                className="play"
                href={stealAnEgg.playUrl}
                rel="noopener noreferrer"
              >
                <Play size={14} aria-hidden="true" />
                Play
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
        </div>
        <div className="wrap" style={{ paddingTop: 16 }}>
          <p>{onKit ? stealAnEggCopy.footer : siteCopy.footer}</p>
        </div>
      </footer>
    </div>
  );
}
