export type GameStatus = "active" | "watch" | "frozen";

export type FeaturedPageLink = {
  label: string;
  /** Path under the game hub, e.g. `/steal-an-egg/mutations` */
  href: string;
};

export type GameToolLink = {
  label: string;
  href: string;
};

export type GameFacts = {
  slug: string;
  name: string;
  developer: string;
  universeId: string;
  placeId: string;
  playUrl: string;
  lastChecked: string;
  hasRedeemUi: boolean;
  path: `/${string}`;
  kitNumber: number;
  kicker: string;
  lede: string;
  /** Hub card chips — prefer featuredPages; tags kept for older kit UIs. */
  tags: readonly string[];
  icon: `/${string}`;
  thumb: `/${string}`;
  /** Incubation status — change in this game’s config file only. */
  status: GameStatus;
  /** 2–4 strongest intent pages for the hub card. */
  featuredPages: readonly FeaturedPageLink[];
  /** Optional tools surfaced on the homepage Tools band. */
  tools?: readonly GameToolLink[];
};
