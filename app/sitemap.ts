import type { MetadataRoute } from "next";
import { stealAnEgg } from "@/lib/games/steal-an-egg";
import { growAChickenFighter } from "@/lib/games/grow-a-chicken-fighter";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(
    `${growAChickenFighter.lastChecked}T00:00:00Z`,
  );

  const stealLast = new Date(`${stealAnEgg.lastChecked}T00:00:00Z`);

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl(stealAnEgg.path),
      lastModified: stealLast,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl(`${stealAnEgg.path}/pets`),
      lastModified: stealLast,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(`${stealAnEgg.path}/eggs`),
      lastModified: stealLast,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(`${stealAnEgg.path}/biomes`),
      lastModified: stealLast,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(`${stealAnEgg.path}/mutations`),
      lastModified: stealLast,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: absoluteUrl(`${stealAnEgg.path}/speed`),
      lastModified: stealLast,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(growAChickenFighter.path),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl(`${growAChickenFighter.path}/codes`),
      lastModified,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: absoluteUrl(`${growAChickenFighter.path}/rewards`),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(`${growAChickenFighter.path}/eggs`),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/terms"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
