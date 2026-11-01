import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import { ChopArticle, ChopFaq, ChopHero, ChopLayout, ChopNote, ChopRelated, ChopSection, ChopSources, SourceLink } from "@/components/chop-a-forest/ChopLayout";
export const metadata = pageMetadata("Chop A Forest: How to Get, Hatch & Equip Pets | Upvane", "Get the reported Acorn Egg pickup steps, find PETS > EGGS, equip the hatch, and troubleshoot an egg or pet that seems missing. No invented drop rates.", "/chop-a-forest/pets");
export default function PetsPage() {
  return <ChopLayout page="pets" title="How to get, hatch and equip pets in Chop A Forest">
    <ChopHero page="pets" title="Chop A Forest pets." accent="Pick up, hatch, equip." description="Chop A Forest’s reported Acorn Egg route, from a drop on the ground to a hatch that is actually equipped." />
    <div className="cf-wrap cf-answer-bar"><span className="cf-eyebrow">QUICK ANSWER</span><p>The reported route is <strong>Old Barkback → collect the Acorn Egg → PETS → EGGS → hatch → PETS → equip</strong>. Picking an egg up, opening it and equipping its pet are three separate actions.</p><a href="#missing">Something missing? →</a></div>
    <ChopArticle links={[{ id: "get-egg", label: "Get and pick up the egg" }, { id: "hatch", label: "Hatch and equip" }, { id: "missing", label: "Find a missing egg or pet" }, { id: "choose", label: "Read the actual bonus" }, { id: "faq", label: "Questions" }, { id: "sources", label: "Sources" }]}>
      <ChopSection id="get-egg" number="01" title="Start with the documented Boss route.">
        <p className="cf-lead">The October community playtest describes an Acorn Egg after defeating Old Barkback. That is a concrete first route to follow; it does not prove every Boss always drops an egg or that you can farm the same reward indefinitely.</p>
        <p>Reach the fight by completing Oak Wood’s clearance objective. If you have not unlocked it, follow the <Link href="/chop-a-forest/zones#old-barkback">Old Barkback walkthrough</Link> rather than wandering for an egg before the Boss appears.</p>
        <ChopNote tone="green" title="A quick tap may be the whole problem"><p>The documented PC pickup uses a held <strong>F</strong> interaction, about a second, beside the Acorn Egg. Stay close and finish the hold. Follow the displayed interaction on other devices; a mobile button mapping was not verified in this review. <SourceLink source="birch" /></p></ChopNote>
        <p>Before walking away, check the Eggs inventory. Seeing an egg on the ground does not prove you collected it. If the inventory is unchanged, return to the drop while it is still present.</p>
      </ChopSection>
      <ChopSection id="hatch" number="02" title="Hatching is not the same as equipping.">
        <ol className="cf-checklist">
          <li><span>01</span><div><h3>Open PETS, then choose EGGS.</h3><p>The playtest uses the paw button or PC key P. Select an egg you own and use its open action. If Eggs is empty, troubleshoot the pickup first.</p></div></li>
          <li><span>02</span><div><h3>Find the new hatch on the PETS tab.</h3><p>The egg and pet lists are separate. Once the hatch becomes a pet, search the pet list instead of expecting it to remain an unopened egg.</p></div></li>
          <li><span>03</span><div><h3>Equip and inspect the active team.</h3><p>The report documents EQUIP BEST and three active slots. Read the equipped counter in your version and check the displayed team bonus. A pet in storage is not the same as one in the active team.</p></div></li>
        </ol>
        <p className="cf-caption">Menu, equip control and slot count: Oct 18–19 community observation. Current UI takes precedence. <SourceLink source="petSteps" /></p>
      </ChopSection>
      <ChopSection id="missing" number="03" title="Find the step that did not finish.">
        <div className="cf-table-wrap"><table className="cf-table"><caption>Egg and pet troubleshooting</caption><thead><tr><th scope="col">What you see</th><th scope="col">Check</th><th scope="col">Next action</th></tr></thead><tbody>
          <tr><th scope="row">Egg on ground, empty Eggs tab</th><td>Pickup</td><td>Complete the held interaction, then inspect Eggs again.</td></tr>
          <tr><th scope="row">Egg no longer in Eggs</th><td>Hatch</td><td>If you just opened it, inspect the Pets tab for the result.</td></tr>
          <tr><th scope="row">Pet in storage, empty active slot</th><td>Equip</td><td>Use the current equip action, then check the equipped counter.</td></tr>
          <tr><th scope="row">New pet, unclear benefit</th><td>Bonus</td><td>Read its effect and team display. Do not infer damage, auto-chopping or a sell bonus from appearance.</td></tr>
        </tbody></table></div>
        <p className="cf-caption">This checklist is Upvane’s interpretation of the documented menu flow, not evidence that every missing-pet report has the same cause.</p>
      </ChopSection>
      <ChopSection id="choose" number="04" title="Choose from the effect, not the rarity label.">
        <p>The creator’s public pass descriptions mention rare pets from eggs, but they do not publish a complete roster, hatch probability or comparable pet stats. Those descriptions cannot support a universal tier list. <SourceLink source="passes" /></p>
        <p>When comparing two pets, note the exact effect, percentage, equipped state and team bonus before switching. Keep the rest of the team unchanged. If the result is unclear, keep your notes rather than treating one lucky wood sale as proof.</p>
        <ChopNote title="Paid egg and free Boss drop are different offers"><p>The dated guide describes the Molten Egg as a shop purchase and the Acorn Egg as a Boss drop. Read the currency on the current offer. No paid hatch is needed to follow the reported Acorn Egg route, and buying one does not fix a missed ground pickup. <SourceLink source="petSteps" /></p></ChopNote>
      </ChopSection>
      <ChopFaq items={[
        { q: "How do I pick up the Acorn Egg?", a: <p>Approach the reported Boss drop and complete its held interaction. The documented PC control is hold F; a quick tap may not complete collection. Check Eggs before leaving.</p> },
        { q: "Why is my hatched pet not helping?", a: <p>First check whether it is equipped, not just stored. Then read its actual effect. We have not tested every bonus or established how they stack.</p> },
        { q: "What is the best pet in Chop A Forest?", a: <p>This review has no controlled roster comparison. Use the current equip and bonus displays; we do not invent an S-tier ranking from pet names or an advertised luck pass.</p> },
      ]} />
      <ChopRelated current="pets" /><ChopSources reviewed="November 1, 2026" sources={["official", "petSteps", "birch", "passes"]} />
    </ChopArticle>
  </ChopLayout>;
}
