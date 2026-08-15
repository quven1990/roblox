import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import {
  stealAnEgg,
  stealAnEggCopy,
  stealAnEggPetsMetadata,
} from "@/lib/games/steal-an-egg";

export const metadata = stealAnEggPetsMetadata;

export default function StealAnEggPetsPage() {
  const copy = stealAnEggCopy.pets;
  const columns = [
    "name",
    "rarity",
    "income",
    "size/mutation notes",
    "last-checked",
  ] as const;

  return (
    <SiteShell current="pets">
      <main id="content" className="wrap legal">
        <p className="kicker">{stealAnEgg.name} · Index</p>
        <h1>{copy.pageH1}</h1>
        <p className="meta">{copy.placeholder}</p>
        <p className="meta">{copy.tableNote}</p>
        <div className="note">
          <p>
            The in-game Index is the source of truth. Community wiki names are
            unverified until they appear there. Last checked{" "}
            {stealAnEgg.lastChecked}.
          </p>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={columns.length}>
                  No Index rows yet. We will not invent names.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <Link href={stealAnEgg.path}>← Back to the Steal An Egg guide</Link>
        </p>
      </main>
    </SiteShell>
  );
}
