import { SITE_NAME, absoluteUrl, pageMetadata, siteCopy } from "@/lib/site";

export const hubCanonical = absoluteUrl("/");
export const hubMetadata = pageMetadata(
  siteCopy.title,
  siteCopy.metaDescription,
  "/",
);

export function hubJsonLd(gameUrls: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: hubCanonical,
    description: siteCopy.metaDescription,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: hubCanonical,
    },
    hasPart: gameUrls.map((game) => ({
      "@type": "WebPage",
      name: game.name,
      url: game.url,
    })),
  };
}
