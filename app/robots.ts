import type { MetadataRoute } from "next";
import { stealAnEgg } from "@/lib/games/steal-an-egg";
import { SITE_ORIGIN } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [`${stealAnEgg.path}/pets`],
    },
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
