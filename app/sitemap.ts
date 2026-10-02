import type { MetadataRoute } from "next";
import { stealAnEgg, stealAnEggPageLastChecked } from "@/lib/games/steal-an-egg";
import { greedyGrowers } from "@/lib/games/greedy-growers";
import { thaLemon3 } from "@/lib/games/tha-lemon-3";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lemonLast = new Date(`${thaLemon3.lastChecked}T00:00:00Z`);
  const greedyLast = new Date(`${greedyGrowers.lastChecked}T00:00:00Z`);

  const stealLast = {
    guide: new Date(`${stealAnEggPageLastChecked.guide}T00:00:00Z`),
    updates: new Date(`${stealAnEggPageLastChecked.updates}T00:00:00Z`),
    pets: new Date(`${stealAnEggPageLastChecked.pets}T00:00:00Z`),
    eggs: new Date(`${stealAnEggPageLastChecked.eggs}T00:00:00Z`),
    biomes: new Date(`${stealAnEggPageLastChecked.biomes}T00:00:00Z`),
    mutations: new Date(`${stealAnEggPageLastChecked.mutations}T00:00:00Z`),
    speed: new Date(`${stealAnEggPageLastChecked.speed}T00:00:00Z`),
  };

  return [
    {
      url: absoluteUrl("/"),
      lastModified: lemonLast,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl(thaLemon3.path),
      lastModified: lemonLast,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl(`${thaLemon3.path}/money-guide`),
      lastModified: lemonLast,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl(`${thaLemon3.path}/weapons`),
      lastModified: lemonLast,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl(stealAnEgg.path),
      lastModified: stealLast.guide,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl(`${stealAnEgg.path}/updates`),
      lastModified: stealLast.updates,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: absoluteUrl(`${stealAnEgg.path}/pets`),
      lastModified: stealLast.pets,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(`${stealAnEgg.path}/eggs`),
      lastModified: stealLast.eggs,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(`${stealAnEgg.path}/biomes`),
      lastModified: stealLast.biomes,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(`${stealAnEgg.path}/mutations`),
      lastModified: stealLast.mutations,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: absoluteUrl(`${stealAnEgg.path}/speed`),
      lastModified: stealLast.speed,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(greedyGrowers.path),
      lastModified: greedyLast,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl(`${greedyGrowers.path}/codes`),
      lastModified: greedyLast,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: absoluteUrl(`${greedyGrowers.path}/mutations`),
      lastModified: greedyLast,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(`${greedyGrowers.path}/seeds`),
      lastModified: greedyLast,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(`${greedyGrowers.path}/pets`),
      lastModified: greedyLast,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: absoluteUrl(`${greedyGrowers.path}/fertilizer`),
      lastModified: greedyLast,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: absoluteUrl(`${greedyGrowers.path}/calculator`),
      lastModified: greedyLast,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified: greedyLast,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/terms"),
      lastModified: greedyLast,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/editorial-policy"),
      lastModified: greedyLast,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
