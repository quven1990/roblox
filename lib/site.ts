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
  extra?: Pick<Metadata, "robots">,
): Metadata {
  const url = absoluteUrl(pathname);
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
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    ...(extra?.robots ? { robots: extra.robots } : {}),
  };
}

export const siteCopy = {
  title: "Upvane — unofficial Roblox game guides",
  metaDescription:
    "Unofficial Upvane hub for rising Roblox games: focused guides, pet indexes, and Play links. Not affiliated with Roblox.",
  kicker: "Roblox trend desk",
  h1: "Find the Roblox games getting hot right now.",
  dek: "Upvane is a fast Roblox game hub: one homepage for fresh discoveries, then focused guide pages for the games that are actually worth building around.",
  nav: {
    games: "Trend desk",
    unofficial: "Unofficial",
  },
  footer:
    "Upvane is unofficial. Not affiliated with Roblox Corporation or the developers of games covered here.",
} as const;
