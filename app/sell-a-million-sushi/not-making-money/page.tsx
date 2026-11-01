import Link from "next/link";
import { SushiFaq, SushiGuide, SushiNote, SushiSection, SushiWatch } from "@/components/SushiGuide";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("Sell a Million Sushi Not Making Money? Check These Steps | Upvane", "Fish caught but no sushi income? Check fish pickup, Deposit Fish, customer meals and the separate money collection pad in Sell a Million Sushi.", "/sell-a-million-sushi/not-making-money");

export default function Page() {
  return <SushiGuide page="not-making-money" title="Restaurant not" accent="making money?" description="Find the missing handoff before you spend on another upgrade. Start with what is actually happening in your restaurant." answer={<p><strong>Check delivery and collection first: caught fish must go to Deposit Fish, and customer earnings must be collected at the money pad.</strong> A fisherman working outside does not by itself confirm that the kitchen has fish or that cash has reached your balance.</p>} links={[{ id: "diagnose", label: "Match your screen" }, { id: "one-cycle", label: "Check one complete cycle" }, { id: "before-upgrading", label: "Before buying upgrades" }]}>
    <SushiSection id="diagnose" number="01" title="Match the symptom to the next handoff.">
      <p>The source video shows a chain of separate actions. These checks follow that chain; they are a diagnosis route, not a list of confirmed game bugs.</p>
      <div className="su-table-wrap" tabIndex={0} role="region" aria-label="Fish-to-cash troubleshooting table; scroll horizontally on small screens"><table><caption>Where did your fish-to-cash loop stop?</caption><thead><tr><th>What you can see</th><th>Try this next</th><th>Look for this result</th></tr></thead><tbody>
        <tr><td>No fisherman at the waterfront</td><td>Find Hire 1 and compare the pad price with your spendable cash.</td><td>A worker appears along the water.</td></tr>
        <tr><td>A worker is fishing; your Fish count is zero</td><td>Visit the catch area and pick up available fish.</td><td>The carried Fish counter increases.</td></tr>
        <tr><td>You are carrying fish; the chef has no supply</td><td>Go inside to the Deposit Fish area by the central counter.</td><td>The carried count falls as fish are delivered; the opening tutorial advances.</td></tr>
        <tr><td>“Wait for customers to eat” is still on screen</td><td>Allow the customer step to finish. Do not treat arriving at the kitchen as an instant cash payout.</td><td>The tutorial asks you to collect money.</td></tr>
        <tr><td>The collection pad shows money; your cash balance is unchanged</td><td>Walk onto the green money collection pad inside.</td><td>Check the spendable balance after collecting.</td></tr>
        <tr><td>You upgraded the kitchen but income still feels slow</td><td>Check whether fish are actually reaching it, then check uncollected earnings.</td><td>Identify whether the delay is supply, customer completion or collection.</td></tr>
      </tbody></table></div>
      <SushiWatch seconds={20}>Watch delivery → customers → collection · from 0:20</SushiWatch>
    </SushiSection>
    <SushiSection id="one-cycle" number="02" title="Check one complete cycle before changing anything.">
      <ol className="su-checklist"><li><strong>Note your cash balance.</strong> Use spendable cash, not the amount displayed at a purchase pad.</li><li><strong>Collect a batch and watch the Fish counter.</strong> If it never rises, you have not confirmed the pickup step.</li><li><strong>Deliver at Deposit Fish.</strong> In the opening example, the carried count drops to zero and the customer objective follows.</li><li><strong>Wait for the customer step, then visit the money pad.</strong> Compare cash before and after collecting without making another purchase in between.</li></ol>
      <p>This isolates the missing step without needing an assumed cash-per-second rate. If fish have been delivered and customer earnings are waiting, buying more fishermen does not complete the collection action for you.</p>
      <SushiNote title="If none of these states matches"><p>We have not verified every stall condition or a universal restart fix. Record the current objective, carried Fish count, collection-pad amount and cash balance before reporting the issue through the developer’s available support channel. Do not reset progress based on an unverified fix.</p></SushiNote>
    </SushiSection>
    <SushiSection id="before-upgrading" number="03" title="Buy for the part that is falling behind.">
      <p><strong>If caught fish are waiting outside:</strong> make a delivery first. More workers will not remove the carrying step shown in the opening tutorial.</p><p><strong>If your fish delivery is keeping up:</strong> inspect the kitchen’s current upgrade label and price. The video shows kitchen rate upgrades, but we have not measured their payback or established a fastest buy order.</p><p><strong>If the tutorial asks you to merge:</strong> follow the <Link href="/sell-a-million-sushi/merge-fishermen">first three-fisherman merge</Link>. A higher worker tier is a separate change from delivering fish or collecting revenue.</p><p className="su-small">These are planning checks inferred from the observed workflow. They are not measured earnings guarantees.</p>
    </SushiSection>
    <SushiFaq items={[
      { q: "Why is my Fish counter zero when fishermen are working?", a: <p>The carried Fish counter and the fishermen’s caught fish are separate. Check the pickup area. A zero count after delivery can also be expected; use the current objective and kitchen state to distinguish the two.</p> },
      { q: "Why does the chef wait even though I hired fishermen?", a: <p>The opening loop includes a manual delivery. If you are carrying fish or they remain outside, take a batch to Deposit Fish and check whether the customer step starts.</p> },
      { q: "Does the game earn money while I am offline?", a: <p>Offline income is not verified by the checked opening footage or listing. We do not assume that leaving the game will continue the delivery and collection steps.</p> },
      { q: "Do I need a script or paid automation to make the first sale?", a: <p>The opening sequence demonstrates manual collection and delivery. Follow the <Link href="/sell-a-million-sushi">first-sale steps</Link>; our guide does not rely on third-party scripts or an automation purchase.</p> },
    ]} />
  </SushiGuide>;
}
