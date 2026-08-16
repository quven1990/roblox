import { GreedyGrowersHome } from "@/components/GreedyGrowersHome";
import { greedyGrowersMetadata } from "@/lib/games/greedy-growers";

export const metadata = greedyGrowersMetadata;

export default function GreedyGrowersPage() {
  return <GreedyGrowersHome />;
}
