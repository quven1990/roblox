import Link from "next/link";
import { BasketballShotCheck } from "@/components/BasketballControls";
import { BasketballFaq, BasketballGuide, BasketballNote, BasketballSection } from "@/components/BasketballGuide";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Practical Basketball: How to Shoot, Dunk & Check Failed Finishes | Upvane", "Check Practical Basketball shot and dunk inputs, distinguish a pump fake from a held shot, and use a repeatable practice routine without guessing build thresholds.", "/practical-basketball/shooting-and-dunking");

export default function Page() {
  return <BasketballGuide page="shooting-and-dunking" title="Practical Basketball shooting & dunking." accent="Read your attempt." description="A missed shot and a move that never starts need different fixes. Work out which problem you have before changing your build." answer={<p><strong>First get the intended action, then judge the release.</strong> A short tap of the shot input produces a reported pump fake; holding starts the shot. A driving dunk uses a different command with sprint while approaching the rim. No verified timing duration or universal dunk-rating threshold is available here.</p>} links={[{ id: "diagnose", label: "Choose your symptom" }, { id: "practice", label: "A repeatable shot test" }, { id: "finish", label: "Check a dunk attempt" }]}>
    <BasketballSection id="diagnose" number="01" title="What is actually going wrong?">
      <p>Pick the result you see. This check suggests the next variable to inspect; it does not inspect your game, account or build.</p>
      <BasketballShotCheck />
    </BasketballSection>
    <BasketballSection id="practice" number="02" title="Build a release you can read.">
      <ol className="pb-steps"><li><span>01</span><div><h3>Keep the first test simple.</h3><p>In an available shooting lesson or practice area, choose one open spot and start still. Use the same character, distance and input device. Do not mix running shots with stationary attempts while trying to isolate a release.</p></div></li><li><span>02</span><div><h3>Hold, observe, release.</h3><p>Use the reported shot command: <kbd>E</kbd>, <kbd>X</kbd> or <kbd>Square</kbd> for PC, Xbox or PlayStation. Read the feedback your current version actually displays. If it reports early or late, use that cue to adjust the next attempt; no fixed millisecond hold is established by these sources.</p></div></li><li><span>03</span><div><h3>Record a short set.</h3><p>Try five attempts as an editorial practice suggestion. For each, note the starting spot, whether you moved, the release feedback and the outcome. A make with changing conditions does not isolate what worked. Do not turn this tiny sample into a promised percentage.</p></div></li><li><span>04</span><div><h3>Add one difficulty at a time.</h3><p>Once the action and release feel repeatable, try movement, then a different distance or defensive pressure separately. If the result changes, return to the earlier condition before replacing your whole build.</p></div></li></ol>
      <BasketballNote title="Do not confuse input delay with a late release"><p>If an action starts much later than your input, compare the same command in practice and in a match. Note the mode, device, visible network information and exact symptom. This does not identify whether the cause is the game, device or connection; a timing adjustment alone may not resolve it.</p></BasketballNote>
    </BasketballSection>
    <BasketballSection id="finish" number="03" title="Check the dunk before the rating.">
      <div className="pb-finish-pair"><div><span className="pb-eyebrow">STANDING ATTEMPT</span><h3>Near the basket.</h3><p>The reported standing-dunk inputs are hold <kbd>Space</kbd>, <kbd>Y</kbd> or <kbd>Triangle</kbd>. Test this separately from a moving drive.</p></div><div><span className="pb-eyebrow">DRIVING ATTEMPT</span><h3>Approach with sprint.</h3><p>The reported combinations are <kbd>Shift + Space</kbd>, <kbd>RT + Y</kbd> or <kbd>R2 + Triangle</kbd>. The approach to the rim is part of the attempt.</p></div></div>
      <p>If you get a layup instead, first check whether you used the shot/layup button rather than the dunk button. If no dunk starts, check your position and any current requirement shown by the client. If a dunk animation starts but fails, that is a different problem from the wrong command.</p>
      <p>Do not buy attributes solely to reach a number quoted without a visible current requirement. This guide has not verified a contact-dunk threshold, an animation unlock or guaranteed finishing odds. <Link href="/practical-basketball/controls">Compare the platform controls →</Link></p>
    </BasketballSection>
    <BasketballFaq items={[
      { q: "How long should I hold the shoot button?", a: <p>No universal duration is verified here. Use the current game’s release feedback and a repeatable practice setup. Copying a fixed hold time from a different character, version or connection is not a reliable measurement.</p> },
      { q: "Does the dunk button guarantee a dunk?", a: <p>No. A documented command describes the input, not every condition the game checks. Approach, starting state, current requirements and the situation can differ. Read the client’s feedback rather than assuming a missing rating.</p> },
      { q: "Can Upvane check my shot timing automatically?", a: <p>No. The symptom selector only shows written checks. It does not connect to Roblox, measure input timing, read a character or save a practice record.</p> },
    ]} />
  </BasketballGuide>;
}
