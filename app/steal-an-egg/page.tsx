import { StealAnEggHome } from "@/components/StealAnEggHome";
import { stealAnEggMetadata } from "@/lib/games/steal-an-egg";

export const metadata = stealAnEggMetadata;

export default function StealAnEggPage() {
  return <StealAnEggHome />;
}
