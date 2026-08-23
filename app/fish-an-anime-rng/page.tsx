import { FishAnAnimeRngHome } from "@/components/FishAnAnimeRngHome";
import { fishAnAnimeRngMetadata } from "@/lib/games/fish-an-anime-rng";

export const metadata = fishAnAnimeRngMetadata;

export default function FishAnAnimeRngPage() {
  return <FishAnAnimeRngHome />;
}
