"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  catalog,
  gamesByStatus,
  statusLabel,
  type GameSlug,
} from "@/lib/games";
import type { GameStatus } from "@/lib/games/types";

const STATUS_ORDER: GameStatus[] = ["active", "watch", "frozen"];

export function GamesMenu({ currentSlug }: { currentSlug?: GameSlug }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={`games-menu${open ? " is-open" : ""}`} ref={rootRef}>
      <button
        type="button"
        className="games-menu-trigger"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        Games
        <ChevronDown size={15} aria-hidden="true" />
      </button>
      <div
        id={menuId}
        className="games-menu-panel"
        role="menu"
        hidden={!open}
      >
        <Link
          href="/"
          role="menuitem"
          className="games-menu-hub"
          data-analytics-event="hub_kit_open"
          data-analytics-game="hub"
          data-analytics-surface="games_menu"
          onClick={() => setOpen(false)}
        >
          All kits (Hub)
        </Link>
        {STATUS_ORDER.map((status) => {
          const games = gamesByStatus(status);
          if (games.length === 0) {
            return null;
          }
          return (
            <div key={status} className="games-menu-group">
              <p className="games-menu-label">{statusLabel(status)}</p>
              <ul>
                {games.map((game) => (
                  <li key={game.slug}>
                    <Link
                      href={game.path}
                      role="menuitem"
                      className={
                        currentSlug === game.slug ? "is-current" : undefined
                      }
                      aria-current={
                        currentSlug === game.slug ? "page" : undefined
                      }
                      data-analytics-event="hub_kit_open"
                      data-analytics-game={game.slug}
                      data-analytics-status={game.status}
                      data-analytics-surface="games_menu"
                      onClick={() => setOpen(false)}
                    >
                      <img
                        src={game.icon}
                        alt=""
                        width={28}
                        height={28}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="games-menu-name">{game.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <p className="games-menu-count">{catalog.length} kits</p>
      </div>
    </div>
  );
}
