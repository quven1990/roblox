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
  tags: readonly string[];
  icon: `/${string}`;
  thumb: `/${string}`;
};
