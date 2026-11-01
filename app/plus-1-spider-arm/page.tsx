import Link from "next/link";
import { SpiderFaq, SpiderGuide, SpiderNote, SpiderSection, SpiderTable, SpiderWatch } from "@/components/SpiderGuide";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("+1 Spider Arm Beginner Guide: Grip, Wins & First Upgrades | Upvane", "Start +1 Spider Arm with the hold-to-climb control, train for more Grip, claim stage Wins and understand your first armature purchases before Rebirth.", "/plus-1-spider-arm");

export default function Page() {
  return <SpiderGuide page="guide" title="+1 Spider Arm." accent="Climb with a plan." description="Turn your first few climbs into useful progress: more Grip, spendable Wins, and a clear reason for your next upgrade." answer={<p><strong>On PC, hold Space against a wall to climb, train for more arms and Grip, then finish stages for Wins.</strong> Spend Wins on armatures, and check the level reset before Rebirth. If you keep falling, solve the Grip problem before repeating the same route.</p>} links={[{ id: "first-session", label: "Your first session" }, { id: "first-upgrades", label: "Spend early Wins" }, { id: "next-action", label: "Choose the next action" }]}>
    <SpiderSection id="first-session" number="01" title="Get the first loop working.">
      <ol className="sp-steps">
        <li><span>01</span><div><h3>Learn the wall contact, not just the jump.</h3><p>Start with the first stage and approach a climbable wall. On PC, <strong>hold <kbd>Space</kbd></strong> to climb and hang. Keep the wall or ceiling in reach of the armature. A short tap followed by releasing the control is not the hold-to-climb input described by the creator.</p><Link href="/plus-1-spider-arm/climbing-grip">Climbing controls and fall checks →</Link></div></li>
        <li><span>02</span><div><h3>Compare the stage with your Grip.</h3><p>Read the stage’s <strong>Needs Grip</strong> number, then your remaining and maximum Grip on the HUD. Training raises levels and adds arms; the creator says more arms increase speed and Grip. If the same stretch empties your meter, go back to training rather than treating every fall as a timing mistake.</p><SpiderWatch seconds={66}>See Stage 2 and the Grip meter · 1:06</SpiderWatch></div></li>
        <li><span>03</span><div><h3>Finish a stage and collect Wins.</h3><p>The trophy counter is your Wins balance. Follow the stage’s finish/claim prompt and check that this counter changes. The video shows a stage reward returning the player to the lobby. Level XP and Wins have different jobs: one advances training levels, the other buys Wins-priced armatures.</p><SpiderWatch seconds={133}>See a stage claim and lobby return · 2:13</SpiderWatch></div></li>
        <li><span>04</span><div><h3>Check the next armature’s currency and bonus.</h3><p>Inspect the lobby shop pedestal. A Wins price uses the trophy currency; a Robux offer uses a separate purchase. The checked Cobalt panel shows <strong>60 Wins</strong>, <strong>+3 XP per punch and step</strong>, and an <kbd>E</kbd> unlock prompt on PC. That XP line is a training benefit, not an extra stage-Wins payout.</p><SpiderWatch seconds={136}>Read the Cobalt purchase panel · 2:16</SpiderWatch></div></li>
      </ol>
    </SpiderSection>
    <SpiderSection id="first-upgrades" number="02" title="Give your early Wins a specific job.">
      <p>These are the first paid entries in the reported Wins ladder. Check your own pedestal before buying; this is not a claim that you must purchase them at these exact points in a run.</p>
      <SpiderTable label="Early armature prices and training bonuses; horizontally scrollable on small screens"><table><caption>Early armatures — Oct 31 community report; Cobalt also checked on video</caption><thead><tr><th>Armature</th><th>Wins price</th><th>Training XP bonus</th></tr></thead><tbody><tr><td>Hauler</td><td>5 Wins</td><td>+1 per punch and step</td></tr><tr><td>Striker</td><td>25 Wins</td><td>+2 per punch and step</td></tr><tr><td>Cobalt</td><td>60 Wins</td><td>+3 per punch and step</td></tr></tbody></table></SpiderTable>
      <SpiderNote title="Read the label before comparing upgrades"><p>An armature’s training bonus, a training-pad multiplier, a Rebirth XP boost and your current Grip are different readouts. Do not multiply them into a promised level-up time: we have not measured the full formula, and the source run includes temporary boosts.</p></SpiderNote>
    </SpiderSection>
    <SpiderSection id="next-action" number="03" title="What should you do next?">
      <div className="sp-decision-grid"><Link href="/plus-1-spider-arm/climbing-grip"><span className="sp-stage-tag">I KEEP FALLING</span><h3>Check the input and Grip.</h3><p>Separate a missed hold, a long hang and an underprepared stage attempt.</p><span className="sp-inline-cta">Fix the climb →</span></Link><Link href="/plus-1-spider-arm/rebirth"><span className="sp-stage-tag">I CAN REBIRTH</span><h3>Read the reset and boost.</h3><p>Check the reported level gate and what the confirmation panel actually changes.</p><span className="sp-inline-cta">Understand Rebirth →</span></Link></div>
      <p>The official listing describes 13 stages and 12 armatures ending at Genesis. That gives the progression a destination; it does not establish a verified fastest route or the time required to finish it.</p>
    </SpiderSection>
    <SpiderFaq items={[
      { q: "How do I get more arms in +1 Spider Arm?", a: <p>Train to raise your level. The creator links level progression to additional arms, speed and Grip. Check the HUD’s next-arm level instead of assuming every single level uses the same unlock interval.</p> },
      { q: "Why did my Wins not rise when my level increased?", a: <p>The blue level/XP progress and the trophy Wins balance are separate. Finish and claim a stage to earn stage Wins; the training XP bonus on a shop item does not mean extra Wins per stage.</p> },
      { q: "Is this the same as +1 Spider Evolution?", a: <p>This guide is for <strong>+1 Spider Arm by This Time For Sure</strong>, place ID 117734411290994. Use the linked Roblox listing to avoid mixing up mechanics or codes from similarly named games.</p> },
    ]} />
  </SpiderGuide>;
}
