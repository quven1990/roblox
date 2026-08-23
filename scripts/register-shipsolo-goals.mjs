#!/usr/bin/env node

const ANALYTICS_EVENTS = [
  "play_roblox",
  "copy_code",
  "video_play",
  "video_youtube",
  "hub_kit_open",
  "guide_nav",
  "calculator_use",
  "rising_game_click",
];

const API_BASE = "https://shipsolo.io/api/v1";
const DOMAIN = process.env.SHIPSOLO_SITE_DOMAIN ?? "upvane.com";
const API_KEY = process.env.SHIPSOLO_API_KEY;

if (!API_KEY) {
  console.error("Missing SHIPSOLO_API_KEY.");
  process.exit(1);
}

async function registerGoal(eventName) {
  const response = await fetch(`${API_BASE}/sites/${DOMAIN}/goals`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ event_name: eventName }),
  });

  const body = await response.text();
  if (!response.ok) {
    throw new Error(`${eventName}: ${response.status} ${body}`);
  }

  console.log(`registered ${eventName}`);
}

for (const eventName of ANALYTICS_EVENTS) {
  await registerGoal(eventName);
}

console.log(`Done. ${ANALYTICS_EVENTS.length} goals registered for ${DOMAIN}.`);
