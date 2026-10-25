"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Axe, Backpack, LockKeyhole } from "lucide-react";

const options = [
  { id: "cut", label: "Trees take too long", icon: Axe, heading: "Fix cutting before adding storage.", body: "If your bag is usually empty while you chip away at a trunk, more slots will not help yet. Start with the coin Axe; once you own it, compare its upgrade panel before saving for another vehicle.", action: "Compare cutting upgrades", href: "/chop-a-forest/tools#cutting" },
  { id: "carry", label: "I keep walking to sell", icon: Backpack, heading: "Make each trip carry more.", body: "If logs pile up while you walk back and forth, check the first Backpack or the starter truck. Already own a truck? Park it by the trees and load it before making another trip to the chipper.", action: "See storage and truck choices", href: "/chop-a-forest/tools#hauling" },
  { id: "gate", label: "The next gate is locked", icon: LockKeyhole, heading: "Read the gate, not your coin balance.", body: "More money does not clear an unfinished area. Check for trees left first. At 100%, look for an active boss: the reported Oak Wood route requires Old Barkback to be defeated before Birch Grove opens.", action: "Work through the gate checklist", href: "/chop-a-forest/zones#locked-gate" },
] as const;

export function BottleneckFinder() {
  const [selected, setSelected] = useState<(typeof options)[number]["id"]>("cut");
  const result = options.find(option => option.id === selected)!;
  return <div className="cf-finder"><div className="cf-finder-options" role="group" aria-label="What is slowing down your run?">{options.map(option => <button type="button" key={option.id} aria-pressed={selected === option.id} onClick={() => setSelected(option.id)}><option.icon size={19} aria-hidden="true" /><span>{option.label}</span><ArrowRight size={15} aria-hidden="true" /></button>)}</div><div className="cf-finder-result" aria-live="polite" aria-atomic="true"><p className="cf-eyebrow">YOUR NEXT MOVE</p><h3>{result.heading}</h3><p>{result.body}</p><Link href={result.href}>{result.action}<ArrowRight size={16} aria-hidden="true" /></Link></div></div>;
}
