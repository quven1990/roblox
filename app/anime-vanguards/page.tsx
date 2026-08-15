import { AnimeVanguardsHome } from "@/components/AnimeVanguardsHome";
import { animeVanguardsMetadata } from "@/lib/games/anime-vanguards";

export const metadata = animeVanguardsMetadata;

export default function AnimeVanguardsPage() {
  return <AnimeVanguardsHome />;
}
