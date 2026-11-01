import Link from "next/link";
import { SushiFaq, SushiGuide, SushiNote, SushiSection, SushiWatch } from "@/components/SushiGuide";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Sell a Million Sushi Beginner Guide: Your First Sale | Upvane", "Hire your first fishermen, collect fish, deliver them to the kitchen and collect your sushi earnings. Opening tutorial steps with gameplay video references.", "/sell-a-million-sushi");

export default function Page() {
  return <SushiGuide page="guide" title="Sell a Million Sushi." accent="Make your first sale." description="A practical start for Sell a Million Sushi: move the fish, feed the kitchen, and collect the money you earned." answer={<p><strong>Hire a fisherman, collect the caught fish, then take them to the kitchen’s Deposit Fish area.</strong> Wait for customers to eat and use the separate money collection pad. Catching fish alone does not finish a sale.</p>} links={[{ id: "first-sale", label: "Make your first sale" }, { id: "next-step", label: "What to do next" }]}>
    <SushiSection id="first-sale" number="01" title="Complete one whole service cycle.">
      <p>The opening tutorial gives you a useful route. Follow each handoff once before spending on more workers.</p>
      <ol className="su-steps">
        <li><span>01</span><div><h3>Hire at the waterfront.</h3><p>Find the <strong>Hire 1</strong> pad beside the fishermen. Walk onto it when you can afford the amount shown. Check that a fisherman appears along the water; buying kitchen upgrades is a different action.</p><SushiWatch seconds={5}>See the opening hire area · 0:05</SushiWatch></div></li>
        <li><span>02</span><div><h3>Pick up the fish.</h3><p>Visit the catch area beside the fishermen and collect the fish. Watch the <strong>Fish</strong> counter at the bottom of the screen: the tutorial’s first collection target is three. A working fisherman and fish in your inventory are separate things.</p><SushiWatch seconds={15}>See “Collect fish (2/3)” · 0:15</SushiWatch></div></li>
        <li><span>03</span><div><h3>Take the catch to the kitchen.</h3><p>Return inside and find the <strong>Deposit Fish</strong> area by the central cooking counter. Deliver the fish there. In the opening sequence, the carried Fish count drops to zero and the tutorial moves on to waiting for customers.</p><SushiWatch seconds={20}>Follow the kitchen delivery · 0:20</SushiWatch></div></li>
        <li><span>04</span><div><h3>Let customers eat, then collect.</h3><p>The next prompt is <strong>Wait for customers to eat</strong>. Once the tutorial asks you to collect money, go to the green money collection pad inside the restaurant. Check your cash balance after collecting; money waiting at the pad is not the same as spendable cash.</p><SushiWatch seconds={50}>See the money collection pad · 0:50</SushiWatch></div></li>
      </ol>
      <SushiNote title="If the loop stalls"><p>Start with the last handoff that worked. Fish in the catch area? Collect them. Fish in your inventory? Deliver them. Customer sales finished? Check the money pad. Use the <Link href="/sell-a-million-sushi/not-making-money">state-by-state money checklist</Link> for the next check.</p></SushiNote>
    </SushiSection>
    <SushiSection id="next-step" number="02" title="Then follow the first merge objective.">
      <p>After the first service, the observed tutorial asks you to hire three fishermen in total and then merge them. The first merge turns three Tier 1 fishermen into one Tier 2 fisherman. Our <Link href="/sell-a-million-sushi/merge-fishermen">first merge walkthrough</Link> shows where to go and what result to look for.</p>
      <div className="su-table-wrap"><table><caption>Choose your next action from what you see</caption><thead><tr><th>What you see</th><th>Useful next action</th></tr></thead><tbody><tr><td>“Hire more fishermen (2/3)”</td><td>Collect enough cash for one more hire, then return to the hire pad.</td></tr><tr><td>“Merge 3 fishermen”</td><td>Follow the tutorial arrows to the merge pad by the waterfront.</td></tr><tr><td>Fish piling up while the kitchen waits</td><td>Complete a delivery before buying more catch capacity.</td></tr><tr><td>A kitchen upgrade offering more $/s</td><td>Check fish supply and collection first. A displayed rate is not proof of your actual sustained income.</td></tr></tbody></table></div>
      <p className="su-small">The last two rows are planning advice based on the supply loop. We have not measured an optimal purchase order.</p>
    </SushiSection>
    <SushiFaq items={[
      { q: "Why do I have fish but no money?", a: <p>Fish must reach the kitchen, become sushi for customers, and complete the collection step. Check the kitchen delivery and money pad before hiring again.</p> },
      { q: "Do fishermen deliver the fish for me?", a: <p>The opening video shows the player collecting and carrying fish to the kitchen. Do that manually for your first sale; we have not verified every later automation option.</p> },
      { q: "How long does selling a million sushi take?", a: <p>We do not have a verified normal-play completion time. The video title is not a measured time-to-goal result, and we do not use its later currency purchases as a free-play benchmark.</p> },
    ]} />
  </SushiGuide>;
}
