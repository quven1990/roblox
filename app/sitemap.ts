import type { MetadataRoute } from "next";
import { stealAnEgg } from "@/lib/games/steal-an-egg";
import { growAChickenFighter } from "@/lib/games/grow-a-chicken-fighter";
import { animeVanguards } from "@/lib/games/anime-vanguards";
import { greedyGrowers } from "@/lib/games/greedy-growers";
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
      url: absoluteUrl(animeVanguards.path),
      lastModified: new Date(`${animeVanguards.lastChecked}T00:00:00Z`),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl(`${animeVanguards.path}/codes`),
      lastModified: new Date(`${animeVanguards.lastChecked}T00:00:00Z`),
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: absoluteUrl(`${animeVanguards.path}/items`),
      lastModified: new Date(`${animeVanguards.lastChecked}T00:00:00Z`),
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: absoluteUrl(`${animeVanguards.path}/traits`),
      lastModified: new Date(`${animeVanguards.lastChecked}T00:00:00Z`),
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: absoluteUrl(`${animeVanguards.path}/units`),
      lastModified: new Date(`${animeVanguards.lastChecked}T00:00:00Z`),
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: absoluteUrl(greedyGrowers.path),
      lastModified: new Date(`${greedyGrowers.lastChecked}T00:00:00Z`),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl(`${greedyGrowers.path}/codes`),
      lastModified: new Date(`${greedyGrowers.lastChecked}T00:00:00Z`),
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: absoluteUrl(`${greedyGrowers.path}/mutations`),
      lastModified: new Date(`${greedyGrowers.lastChecked}T00:00:00Z`),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(`${greedyGrowers.path}/seeds`),
      lastModified: new Date(`${greedyGrowers.lastChecked}T00:00:00Z`),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(`${greedyGrowers.path}/pets`),
      lastModified: new Date(`${greedyGrowers.lastChecked}T00:00:00Z`),
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: absoluteUrl(`${greedyGrowers.path}/fertilizer`),
      lastModified: new Date(`${greedyGrowers.lastChecked}T00:00:00Z`),
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: absoluteUrl(`${greedyGrowers.path}/calculator`),
      lastModified: new Date(`${greedyGrowers.lastChecked}T00:00:00Z`),
      changeFrequency: "weekly",
      priority: 0.85,
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
    {
      url: absoluteUrl("/editorial-policy"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
