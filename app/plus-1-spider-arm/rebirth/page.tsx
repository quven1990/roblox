import Link from "next/link";
import { SpiderFaq, SpiderGuide, SpiderNote, SpiderSection, SpiderTable, SpiderWatch } from "@/components/SpiderGuide";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("+1 Spider Arm Rebirth: Level Requirements, Reset & XP Boost | Upvane", "Check the first Rebirth gates in +1 Spider Arm, what happens to your level, and how the XP boost differs from training-pad and temporary multipliers.", "/plus-1-spider-arm/rebirth");

export default function Page() {
  return <SpiderGuide page="rebirth" title="Before you reset." accent="Read the boost." description="What Rebirth changes, which level gates are reported, and why your next training pad may still be locked." answer={<p><strong>The reported first Rebirth gate is level 10. Rebirth resets your level to 1 and increases the XP boost.</strong> The checked second-Rebirth video panel shows level 20 → 1 and XP ×1.5 → ×2. Read both sides of your own confirmation panel before using it.</p>} links={[{ id: "requirements", label: "Level gates & XP" }, { id: "confirm-reset", label: "Check the reset" }, { id: "training-pads", label: "Unlock training pads" }]}>
    <SpiderSection id="requirements" number="01" title="The first five reported Rebirth gates.">
      <p>Bloxron’s Oct 31 observations record the following early gates. Upvane also checked the second row against the visible video panel. Your current panel is the source to use if an update changes a requirement.</p>
      <SpiderTable label="Early Rebirth level gates and XP boosts; horizontally scrollable on small screens"><table><caption>Early Rebirth ladder — community report; Rebirth 2 also checked on video</caption><thead><tr><th>Rebirth</th><th>Required level</th><th>XP boost before → after</th><th>Level after</th></tr></thead><tbody><tr><td>1</td><td>10 reported</td><td>×1 → ×1.5</td><td>1</td></tr><tr><td>2</td><td>20</td><td>×1.5 → ×2</td><td>1</td></tr><tr><td>3</td><td>30 reported</td><td>×2 → ×2.5</td><td>1</td></tr><tr><td>4</td><td>40 reported</td><td>×2.5 → ×3</td><td>1</td></tr><tr><td>5</td><td>50 reported</td><td>×3 → ×3.5</td><td>1</td></tr></tbody></table></SpiderTable>
      <SpiderWatch seconds={155}>Read the second Rebirth panel · 2:35</SpiderWatch>
      <p className="sp-small">The table covers the first five reported gates only. It is not an unlimited-level formula or a measured time-to-Rebirth forecast.</p>
    </SpiderSection>
    <SpiderSection id="confirm-reset" number="02" title="Check these four things before confirming.">
      <ol className="sp-checklist"><li><strong>The Rebirth number.</strong> Your second Rebirth has a different gate from your first. Being back at level 10 does not establish that you meet the level-20 requirement.</li><li><strong>The before and after level.</strong> The checked panel explicitly shows a return to level 1. If you want to keep tackling your current high-Grip stage immediately, consider finishing that attempt before resetting.</li><li><strong>The XP boost.</strong> The second panel changes ×1.5 to ×2. That is an XP-boost label, not a promise of twice your current stage Wins or exactly twice your real leveling speed.</li><li><strong>The action you are selecting.</strong> The video shows a normal Rebirth button and a separate paid Skip Rebirth offer. Check the level gate and read the label instead of assuming the paid button is the only way to proceed.</li></ol>
      <SpiderNote title="A lower level after Rebirth is expected"><p>A level drop that matches the panel’s level-1 result is not by itself lost progress or a bug. The checked evidence establishes the level reset and XP boost. We have not independently audited every retained balance, armature or item, so this guide does not promise that everything else is kept.</p></SpiderNote>
      <p>After the reset, return to available training and compare the new level, arm and Grip readouts before trying the same route again. Use the <Link href="/plus-1-spider-arm/climbing-grip">Grip checks</Link> if a climb that worked before now empties the bar.</p>
    </SpiderSection>
    <SpiderSection id="training-pads" number="03" title="Pad unlocks use Rebirth count.">
      <p>The community report records the free ×2 pad at <strong>2 Rebirths</strong>, ×3 at <strong>4 Rebirths</strong>, and ×6 at <strong>6 Rebirths</strong>. Check the requirement printed above the pad; a higher current level is not the same counter as completed Rebirths.</p>
      <p>Keep three readouts separate when comparing your training: the pad’s multiplier, the Rebirth XP boost, and any temporary boost on the HUD. A shop armature can also advertise extra training XP. We have not verified the full stacking calculation, so we do not multiply these labels into a guaranteed rate.</p>
      <p className="sp-small">Our planning advice: use an available pad, read the next unlock condition, and decide whether another reset serves that condition. We have not measured a universally fastest reset schedule.</p>
    </SpiderSection>
    <SpiderFaq items={[
      { q: "What level do I need for my first Rebirth?", a: <p>The Oct 31 community report gives level 10. The next reported gate is level 20, which matches the second-Rebirth video panel. Check the requirement in your current menu before confirming.</p> },
      { q: "Why am I back at level 1?", a: <p>The normal Rebirth panel explicitly resets your level. Check whether the new XP boost matches the after column, then rebuild the levels and Grip needed for your next stage.</p> },
      { q: "Why is the ×2 training pad still locked?", a: <p>The reported unlock is two completed Rebirths. Check your Rebirth count and the live pad label; reaching level 20 before completing the second reset is a different state.</p> },
      { q: "Does Rebirth double my Wins?", a: <p>The checked panel labels its change as an XP boost. It does not establish a doubled stage-Wins payout. The <Link href="/plus-1-spider-arm">beginner guide</Link> separates level XP, Wins and shop bonuses.</p> },
    ]} />
  </SpiderGuide>;
}
