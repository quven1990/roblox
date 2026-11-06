import Link from "next/link";
import { BasketballFaq, BasketballGuide, BasketballNote, BasketballSection } from "@/components/BasketballGuide";
import { pageMetadata } from "@/lib/site";
import { practicalBasketball } from "@/lib/games/practical-basketball";

export const metadata = pageMetadata("Practical Basketball Beginner Guide: Controls & First Practice | Upvane", "Start Practical Basketball with the correct Roblox experience, a focused practice order, basic controls and a role checklist before committing to a build.", "/practical-basketball");

export default function Page() {
  return <BasketballGuide page="guide" title="Practical Basketball." accent="Find your rhythm." description="A useful first session starts with a few reliable actions. Learn the input, read the attempt, then take it into a game." answer={<p><strong>Start in Practical’s Games’ Alpha, learn one shot, one finish and one pass, then add dribbling.</strong> On PC, the reported starting inputs are hold <kbd>E</kbd> to shoot, <kbd>Shift + Space</kbd> for a driving dunk, and <kbd>1–4</kbd> to select a teammate for a pass. Use the current tutorial to check each action.</p>} links={[{ id: "first-session", label: "Your first session" }, { id: "pick-a-role", label: "Before choosing a build" }, { id: "next-step", label: "Find your next step" }]}>
    <BasketballSection id="first-session" number="01" title="Make the first session useful.">
      <ol className="pb-steps">
        <li><span>01</span><div><h3>Open the right experience.</h3><p>Use <a href={practicalBasketball.playUrl} rel="noopener noreferrer">Practical Basketball by Practical’s Games</a>, place <strong>80681221431821</strong>. The listing is labelled Alpha. Other experiences use similar names; compare the creator as well as the title before following a guide or spending currency.</p></div></li>
        <li><span>02</span><div><h3>Learn a complete possession.</h3><p>Look for <strong>Learn Practical Basketball</strong> or the current tutorial area. An earlier report lists Shooting, Passing, Dribbling, Finishing, Defense and Post lessons. Begin with the shot and pass, then a close finish. If the menu has changed, follow the current labels rather than an old lobby path.</p></div></li>
        <li><span>03</span><div><h3>Repeat a small, readable test.</h3><p>Our suggested drill: take five stationary attempts from one open spot and note the release feedback. Then test a close finish and a pass. The number five is a practice suggestion, not a reward threshold. Change one action at a time so a miss teaches you something.</p><Link href="/practical-basketball/shooting-and-dunking">Diagnose a shot or dunk →</Link></div></li>
        <li><span>04</span><div><h3>Add one way to create space.</h3><p>On PC, reports associate <kbd>C</kbd> and <kbd>Z</kbd> with hand-dependent dribbles, and <kbd>X</kbd> with a stepback. Read which hand holds the ball before repeating an input. Practice a single move into a pass or shot before trying a long combination.</p><Link href="/practical-basketball/controls">Open the controls reference →</Link></div></li>
      </ol>
    </BasketballSection>
    <BasketballSection id="pick-a-role" number="02" title="Pick a job before a build.">
      <p>Use these questions to decide what you want to do on most possessions. This is a role-planning checklist, not a ranking of the game’s positions or a verified attribute recipe.</p>
      <div className="pb-role-grid"><div><span className="pb-eyebrow">CREATE</span><h3>Handle and pass.</h3><p>Do you enjoy bringing the ball up, reading help defense and finding an open teammate? Test whether you can pass reliably before copying a dribble-heavy build.</p></div><div><span className="pb-eyebrow">CONNECT</span><h3>Move without the ball.</h3><p>Would you rather find open space, receive a pass and take a prepared shot? Practice a catch-and-shoot possession as well as attempts off a dribble.</p></div><div><span className="pb-eyebrow">WORK INSIDE</span><h3>Finish near the rim.</h3><p>Do you prefer close finishes and interior play? Check the actual builder’s trade-offs and current move requirements before following someone else’s height or rating choices.</p></div></div>
      <BasketballNote title="Read the current builder before committing"><p>Record the body settings, attribute caps, price and confirmation text you actually see. A video’s finished character does not show that every suggested point fits your current budget. We have not verified a universal best build, respec rules or exact dunk requirements.</p></BasketballNote>
    </BasketballSection>
    <BasketballSection id="next-step" number="03" title="Solve the thing stopping you now.">
      <div className="pb-route-cards"><Link href="/practical-basketball/controls"><span className="pb-eyebrow">WHICH BUTTON?</span><h3>Keep the essentials close.</h3><p>Compare PC, Xbox and PlayStation shooting and finishing inputs, then learn basic passing.</p><span className="pb-text-link">Find your controls →</span></Link><Link href="/practical-basketball/shooting-and-dunking"><span className="pb-eyebrow">WRONG ACTION OR A MISS?</span><h3>Check the attempt in order.</h3><p>A pump fake, a layup instead of a dunk, and a missed release call for different checks.</p><span className="pb-text-link">Work through a finish →</span></Link></div>
    </BasketballSection>
    <BasketballFaq items={[
      { q: "Which Practical Basketball game is this guide for?", a: <p>The Alpha by <strong>Practical’s Games</strong>, Roblox place 80681221431821 and universe 7529591378. The creator and numeric place ID distinguish it from similarly named listings.</p> },
      { q: "What should I practice first?", a: <p>Our recommendation is a stationary shot, a close finish and a pass. Repeat a small test with consistent conditions before adding movement, range or a long dribble sequence.</p> },
      { q: "Should I copy a best-build video straight away?", a: <p>First check its game version, visible builder screen and intended role. A creator’s successful run is one example, not proof of the best build for your team, device or current attribute budget.</p> },
    ]} />
  </BasketballGuide>;
}
