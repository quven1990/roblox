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
  title: "Upvane – Roblox Guides, Wikis, Codes & Tools",
  metaDescription:
    "Upvane tracks new and rising Roblox games with practical guides, verified data, calculators, codes, and game-specific tools.",
  kicker: "Roblox guide hub",
  h1: "Roblox Guides for New & Rising Games",
  dek: "Track new and rising Roblox games with practical guides, verified data, progression help, calculators, codes, and game-specific tools.",
  summary:
    "Upvane incubates Roblox game guides in small clusters. Active kits get updates. Watch kits keep proven pages. Frozen kits stay live for search but stop expanding until demand returns.",
  heroCta: "Browse guides",
  sections: {
    recentlyUpdated: {
      kicker: "Fresh checks",
      h2: "Recently updated",
      body: "Ordered by each kit’s lastChecked date in config — not a marketing label.",
    },
    active: {
      kicker: "Incubating",
      h2: "Active games",
      body: "Worth updating now. New pages only when search demand and real data exist.",
      empty: "No active incubation kits right now. Watch and archived guides stay below.",
    },
    watch: {
      kicker: "Holding",
      h2: "Watch list",
      body: "Existing pages stay live. No batch page expansion until Google or player demand shows a signal.",
    },
    tools: {
      kicker: "Interactive",
      h2: "Useful tools",
      body: "Calculators and helpers beat thin article pages when the game has numbers you can use.",
    },
    frozen: {
      kicker: "Archive",
      h2: "Previous Roblox guides",
      body: "Upvane is not expanding these kits right now. URLs stay published for search and returning players.",
    },
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
