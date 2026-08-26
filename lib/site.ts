import type { Metadata } from "next";

export const SITE_NAME = "Upvane";
export const SITE_ORIGIN = "https://upvane.com";
export const SITE_LOCALE = "en_US";
export const SITE_CONTACT_EMAIL = "contact@upvane.com";
export const SITE_PRIVACY_EMAIL = "privacy@upvane.com";
export const SITE_GA4_ID = "G-H20SYKX847";
export const SITE_CLARITY_ID = "y2tx3qa7f0";
export const SITE_INDEXNOW_KEY = "020c3e7fbd654fe9b601efd4cccb3779";

export function absoluteUrl(pathname = "/"): string {
  if (pathname === "/" || pathname === "") {
    return `${SITE_ORIGIN}/`;
  }
  const prefixed = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const withSlash = prefixed.endsWith("/") ? prefixed : `${prefixed}/`;
  return `${SITE_ORIGIN}${withSlash}`;
}

export function pageMetadata(
  title: string,
  description: string,
  pathname: string,
  extra?: {
    robots?: Metadata["robots"];
    image?: string;
    imageAlt?: string;
  },
): Metadata {
  const url = absoluteUrl(pathname);
  const images = extra?.image
    ? [
        {
          url: extra.image,
          alt: extra.imageAlt,
          width: 1400,
          height: 788,
        },
      ]
    : undefined;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
      ...(images ? { images } : {}),
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title,
      description,
      ...(extra?.image ? { images: [extra.image] } : {}),
    },
    ...(extra?.robots ? { robots: extra.robots } : {}),
  };
}

export const siteCopy = {
  title: "Upvane — Steal An Egg Update #1 and Roblox kits",
  metaDescription:
    "Upvane tracks Steal An Egg Update #1, Cherry Blossom, Sakura Incubator, Bloom mutations, and current Roblox guide kits.",
  kicker: "This week's Roblox kit desk",
  h1: "Steal An Egg Update #1 first, other Roblox kits behind it.",
  dek: "Cherry Blossom, Sakura Incubator, Bloom mutations, pets income, and the live Roblox guide pages worth opening now.",
  summary:
    "Upvane is currently led by Steal An Egg because Update #1 has fresh player questions: Cherry Blossom Egg, Crane unlock, Sakura Incubator, Bloom / Spirit Bloom, and reported pet income. Other Roblox kits stay available when they have useful pages.",
  heroCta: "Open live kits",
  kits: {
    kicker: "Live kits",
    h2: "Current main kit + supporting guides",
    body: "Steal An Egg is the current main kit. Open the title you searched; pages stay live only when they answer real player tasks.",
  },
  rising: {
    kicker: "Scan only",
    h2: "Not a guide yet",
    body: "These names are from the rising scan. They are not Upvane kits. Links go to Roblox, not a walkthrough.",
  },
  nav: {
    games: "Kits",
    unofficial: "Unofficial",
  },
  footer:
    "Upvane is unofficial. Not affiliated with Roblox Corporation or the developers of games covered here.",
} as const;
