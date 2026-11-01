import Link from "next/link";
import { SushiFaq, SushiGuide, SushiNote, SushiSection, SushiWatch } from "@/components/SushiGuide";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("How to Merge Fishermen in Sell a Million Sushi | Upvane", "Complete the first three-fisherman merge in Sell a Million Sushi. Find the waterfront merge pad and check the Tier 2 result against the source video.", "/sell-a-million-sushi/merge-fishermen");

export default function Page() {
  return <SushiGuide page="merge-fishermen" title="Merge your first" accent="three fishermen." description="How to finish the first merge objective, find the right pad, and recognize the result." answer={<p><strong>For the first tutorial merge, hire three Tier 1 fishermen and walk onto the merge pad by the waterfront.</strong> The checked video shows “Merge 3 fishermen” at 2:30, followed by one Tier 2 Mackerel fisherman at 2:35.</p>} links={[{ id: "first-merge", label: "Complete the first merge" }, { id: "merge-checks", label: "If you cannot merge" }]}>
    <SushiSection id="first-merge" number="01" title="Follow the opening three-fisherman objective.">
      <ol className="su-steps">
        <li><span>01</span><div><h3>Finish the first money collection.</h3><p>Run fish from the waterfront to the kitchen, wait for customers and collect the earnings. The early tutorial then asks you to <strong>Hire more fishermen</strong>. If you are still on a collection or delivery objective, complete that handoff first.</p><Link href="/sell-a-million-sushi">See the first-sale route →</Link></div></li>
        <li><span>02</span><div><h3>Reach three Tier 1 fishermen.</h3><p>Return to the <strong>Hire 1</strong> pad and use the price currently displayed. In the checked sequence, the objective progresses from <strong>Hire more fishermen (2/3)</strong> to <strong>Merge 3 fishermen</strong>, with three Tier 1 workers visible along the water.</p><SushiWatch seconds={150}>Check the three workers and prompt · 2:30</SushiWatch></div></li>
        <li><span>03</span><div><h3>Use the merge pad, then check the waterfront.</h3><p>Follow the tutorial’s white arrows to the highlighted pad beside the waterfront board. This is separate from the <strong>Hire 1</strong> and <strong>Hire 5</strong> pads. Walk onto the highlighted merge pad. The next checked scene has one fisherman labeled <strong>Mackerel / Tier 2</strong>, replacing the three Tier 1 fishermen.</p><SushiWatch seconds={155}>Compare the Tier 2 result · 2:35</SushiWatch></div></li>
      </ol>
      <SushiNote title="A smaller headcount can be the expected result"><p>For this first merge, three workers become one higher-tier worker. Check the tier label rather than assuming that fewer visible fishermen means you lost progress. This observation does not establish the rules or costs for every later tier.</p></SushiNote>
    </SushiSection>
    <SushiSection id="merge-checks" number="02" title="If the merge does not happen.">
      <p>Use these checks to distinguish an unfinished tutorial step from an unverified later-tier situation.</p>
      <div className="su-table-wrap"><table><caption>First-merge checks</caption><thead><tr><th>Your current state</th><th>What to check</th></tr></thead><tbody><tr><td>The prompt still says “Hire more fishermen (2/3)”</td><td>You have not reached the observed three-worker tutorial target. Collect money and check the current Hire 1 price.</td></tr><tr><td>You are standing on Hire 1 or Hire 5</td><td>Those pads hire workers. Follow the merge objective’s arrows to the separate highlighted pad.</td></tr><tr><td>Only one worker remains, labeled Tier 2</td><td>That matches the first merge result. Check the new tier before trying to repeat the tutorial action.</td></tr><tr><td>You have a mixture of later tiers</td><td>Use your current merge panel or objective. This opening example does not prove that any three workers, or three of every later tier, can merge.</td></tr></tbody></table></div>
      <p>If your three Tier 1 workers and current prompt match the example but the pad does nothing, this source does not establish the cause. We cannot promise that rejoining fixes it or that your progress is safe to reset.</p>
    </SushiSection>
    <SushiFaq items={[
      { q: "How many fishermen do I need for the first merge?", a: <p>The observed opening tutorial explicitly asks for three fishermen and shows three Tier 1 workers before the merge. Use that as the first-merge example, not a complete higher-tier recipe list.</p> },
      { q: "Do I need to drag fishermen together?", a: <p>The checked opening sequence uses a highlighted floor pad. We did not observe dragging workers or selecting them in a merge inventory.</p> },
      { q: "Does merging automatically put fish in the kitchen?", a: <p>The first merge changes the worker tier. It does not demonstrate automatic kitchen delivery. If your restaurant stops earning, check the <Link href="/sell-a-million-sushi/not-making-money">fish-to-cash handoffs</Link>.</p> },
    ]} />
  </SushiGuide>;
}
