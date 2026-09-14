import type { GameSlug } from "@/lib/games";

export const ANALYTICS_EVENTS = [
  "play_roblox",
  "copy_code",
  "video_play",
  "video_youtube",
  "hub_kit_open",
  "guide_nav",
  "calculator_use",
  "rising_game_click",
  "game_card_click",
  "archive_game_click",
] as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[number];

export type AnalyticsProps = Record<
  string,
  string | number | boolean | undefined | null
>;

/** Known live kit slugs — used to validate path-derived game context. */
export const ANALYTICS_GAME_SLUGS = [
  "steal-an-egg",
  "grow-a-chicken-fighter",
  "anime-vanguards",
  "greedy-growers",
  "fish-an-anime-rng",
] as const satisfies readonly GameSlug[];

export type AnalyticsGameSlug = (typeof ANALYTICS_GAME_SLUGS)[number];

const DATASET_PROP_MAP: Record<string, string> = {
  analyticsGame: "game",
  analyticsLocation: "location",
  analyticsPage: "page",
  analyticsSection: "section",
  analyticsSurface: "surface",
  analyticsVideoId: "video_id",
  analyticsCode: "code",
  analyticsGameName: "game_name",
  analyticsStatus: "status",
  analyticsSource: "source",
};

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> },
    ) => void;
  }
}

export function isAnalyticsEvent(value: string): value is AnalyticsEvent {
  return (ANALYTICS_EVENTS as readonly string[]).includes(value);
}

export function isAnalyticsGameSlug(value: string): value is AnalyticsGameSlug {
  return (ANALYTICS_GAME_SLUGS as readonly string[]).includes(value);
}

/** Derive kit slug + subpage from the URL. Hub routes return game=hub. */
export function analyticsContextFromPath(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0] ?? "hub";

  if (isAnalyticsGameSlug(first)) {
    return {
      game: first,
      page: parts[1] ?? "guide",
    };
  }

  return {
    game: "hub",
    page: first === "hub" || parts.length === 0 ? "home" : first,
  };
}

/** Every custom event carries game + page; explicit props win (e.g. hub → kit clicks). */
export function mergeAnalyticsProps(
  pathname: string,
  props?: AnalyticsProps,
): AnalyticsProps {
  const context = analyticsContextFromPath(pathname);
  return {
    game: context.game,
    page: context.page,
    ...props,
  };
}

export function trackEvent(
  event: AnalyticsEvent,
  props?: AnalyticsProps,
  pathname?: string,
) {
  if (typeof window === "undefined") {
    return;
  }

  const plausible = window.plausible;
  if (!plausible) {
    return;
  }

  const path = pathname ?? window.location.pathname;
  const merged = mergeAnalyticsProps(path, props);
  const clean: Record<string, string> = {};

  for (const [key, value] of Object.entries(merged)) {
    if (value === undefined || value === null || value === "") {
      continue;
    }
    clean[key] = String(value);
  }

  plausible(
    event,
    Object.keys(clean).length > 0 ? { props: clean } : undefined,
  );
}

export function trackFromElement(
  element: HTMLElement,
  pathname?: string,
) {
  const event = element.dataset.analyticsEvent;
  if (!event || !isAnalyticsEvent(event)) {
    return;
  }

  const props: AnalyticsProps = {};
  for (const [datasetKey, propKey] of Object.entries(DATASET_PROP_MAP)) {
    const value = element.dataset[datasetKey as keyof DOMStringMap];
    if (value) {
      props[propKey] = value;
    }
  }

  trackEvent(event, props, pathname);
}
