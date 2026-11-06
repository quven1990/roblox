import Link from "next/link";
import { BasketballControls } from "@/components/BasketballControls";
import { BasketballFaq, BasketballGuide, BasketballNote, BasketballSection } from "@/components/BasketballGuide";
import { basketballSources } from "@/lib/games/practical-basketball";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Practical Basketball Controls: PC, Xbox & PlayStation | Upvane", "Find reported Practical Basketball shooting, dunking and passing controls. Compare PC, Xbox and PlayStation, and check hold, movement and ball-hand conditions.", "/practical-basketball/controls");

export default function Page() {
  return <BasketballGuide page="controls" title="Practical Basketball controls." accent="Know the input." description="A focused reference for the moves you need first. Read the button and the starting condition together." answer={<p><strong>Hold <kbd>E</kbd> on PC, <kbd>X</kbd> on Xbox, or <kbd>Square</kbd> on PlayStation to shoot; a short tap is a pump fake.</strong> The reported driving-dunk combinations are <kbd>Shift + Space</kbd>, <kbd>RT + Y</kbd> and <kbd>R2 + Triangle</kbd>. These are community-reported bindings; your current game prompts take precedence.</p>} links={[{ id: "shoot-finish", label: "Shoot & finish" }, { id: "passing", label: "Pass to a teammate" }, { id: "dribble", label: "Dribble & input checks" }]}>
    <BasketballSection id="shoot-finish" number="01" title="Shoot, fake or finish.">
      <BasketballControls />
      <p className="pb-small">Reported controls: <a href={basketballSources.controls} rel="noopener noreferrer">AllThingsHow, November 3</a>. We have not independently tested these bindings in the Alpha client.</p>
      <BasketballNote title="Mobile touch is a separate layout"><p>The controller labels here do not certify touchscreen buttons. Use the touch prompts in your current client and its tutorial. We have not verified a complete mobile layout, so we do not map every keyboard combination onto a phone.</p></BasketballNote>
    </BasketballSection>
    <BasketballSection id="passing" number="02" title="Choose a teammate, then the pass.">
      <p>The newer control report lists these <strong>PC</strong> inputs. A number selects the target teammate; repeat the selection or add a modifier to change the pass.</p>
      <div className="pb-table-wrap" tabIndex={0} role="region" aria-label="Reported PC passing inputs"><table><caption>PC passing subset · AllThingsHow, Nov 3</caption><thead><tr><th scope="col">Action</th><th scope="col">Input</th><th scope="col">Check</th></tr></thead><tbody>
        <tr><th scope="row">Overhead pass</th><td><kbd>1, 2, 3 or 4</kbd></td><td>Select the intended teammate.</td></tr>
        <tr><th scope="row">Bounce pass</th><td>Double-tap the teammate number</td><td>Two taps, not a long hold.</td></tr>
        <tr><th scope="row">Chest pass</th><td><kbd>Shift + teammate number</kbd></td><td>Hold the modifier during selection.</td></tr>
        <tr><th scope="row">Set a screen</th><td><kbd>Hold T</kbd></td><td>Different from adding a teammate number for a lob.</td></tr>
      </tbody></table></div>
      <p>For controller passing, use the recipient icons in the current tutorial. This page does not guess the teammate-to-face-button mapping. If a pass goes to the wrong player, check the selected recipient before changing the pass type.</p>
    </BasketballSection>
    <BasketballSection id="dribble" number="03" title="Read the ball hand and the starting state.">
      <p>The earlier TechWiser report lists <kbd>C</kbd> / <kbd>Z</kbd> for hand-dependent crossovers, <kbd>X</kbd> for a stepback and a double-tap of <kbd>X</kbd> for a snatchback. These are a small PC starting set, not every dribble package.</p>
      <ul className="pb-checklist"><li><strong>Check the ball hand.</strong> An input can produce a different move when the ball starts on the other side.</li><li><strong>Separate a tap, a double-tap and a hold.</strong> Do not add a second input until you know what the first one produced.</li><li><strong>Start stationary.</strong> Then test the move while travelling. Movement is another variable, not just decoration.</li><li><strong>Retry in the current tutorial.</strong> Old stress-test bindings may not match an updated client. A failed command is not evidence that buying an upgrade will fix it.</li></ul>
      <p>Already getting the right action, but missing the finish? <Link href="/practical-basketball/shooting-and-dunking">Use the shot and dunk checks →</Link></p>
    </BasketballSection>
    <BasketballFaq items={[
      { q: "Why does E only pump fake?", a: <p>A quick tap is the reported pump-fake command. Hold the input to begin a shot and then release deliberately. First check whether you get the intended animation; timing feedback comes after that.</p> },
      { q: "How do I dunk on Xbox or PS5?", a: <p>The community report lists <kbd>RT + Y</kbd> for a driving dunk on Xbox and <kbd>R2 + Triangle</kbd> on PlayStation. Approach the rim while sprinting. Standing dunk inputs omit the sprint trigger. No minimum attribute rating is verified here.</p> },
      { q: "Are these all the controls?", a: <p>No. This is an essentials reference. Advanced gathers, lobs and post combinations are left out where the available reports conflict or the current client has not been checked.</p> },
    ]} />
  </BasketballGuide>;
}
