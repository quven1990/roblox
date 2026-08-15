import { HubHome } from "@/components/HubHome";
import { hubMetadata } from "@/lib/hub";

export const metadata = hubMetadata;

export default function HomePage() {
  return <HubHome />;
}
