import type { Metadata } from "next";
import { SITE_NAME, SITE_ORIGIN, siteCopy } from "@/lib/site";

export const hubCanonical = `${SITE_ORIGIN}/`;

export const hubMetadata: Metadata = {
  title: siteCopy.title,
  description: siteCopy.metaDescription,
  alternates: { canonical: hubCanonical },
  openGraph: {
    title: siteCopy.title,
    description: siteCopy.metaDescription,
    url: hubCanonical,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteCopy.title,
    description: siteCopy.metaDescription,
  },
};

export function hubJsonLd(gameUrls: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_ORIGIN,
    description: siteCopy.metaDescription,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    hasPart: gameUrls.map((game) => ({
      "@type": "WebPage",
      name: game.name,
      url: game.url,
    })),
  };
}
