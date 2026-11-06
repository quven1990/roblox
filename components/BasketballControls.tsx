"use client";

import { useState } from "react";

const devices = ["PC", "Xbox", "PlayStation", "Compare all"] as const;
type Device = (typeof devices)[number];
const rows = [
  { action: "Shoot", pc: "Hold E, then release", xbox: "Hold X, then release", ps: "Hold Square, then release", condition: "Start stationary when learning the release." },
  { action: "Pump fake", pc: "Tap E", xbox: "Tap X", ps: "Tap Square", condition: "A brief tap differs from holding the shot." },
  { action: "Sprint", pc: "Hold Shift", xbox: "Hold RT", ps: "Hold R2", condition: "Adding sprint can change a moving finish." },
  { action: "Standing dunk", pc: "Hold Space", xbox: "Hold Y", ps: "Hold Triangle", condition: "Near the basket. Input alone does not guarantee a dunk." },
  { action: "Driving dunk", pc: "Shift + hold Space", xbox: "RT + Y", ps: "R2 + Triangle", condition: "Approach the rim while sprinting; follow finish feedback." },
] as const;

export function BasketballControls() {
  const [device, setDevice] = useState<Device>("PC");
  return <div className="pb-controls">
    <div className="pb-device-picker" role="group" aria-label="Input device">{devices.map(d => <button key={d} type="button" aria-pressed={device === d} onClick={() => setDevice(d)}>{d}</button>)}</div>
    <p className="pb-control-context" aria-live="polite">{device === "Compare all" ? "Compare keyboard and controller inputs. + means hold together." : `${device} reference. + means hold together; a tap and a hold are different actions.`}</p>
    <div className="pb-table-wrap" tabIndex={0} role="region" aria-label="Reported shooting and finishing controls; scroll horizontally to compare platforms"><table><caption>Selected reported inputs · AllThingsHow, Nov 3 · current game prompts take precedence</caption><thead><tr><th scope="col">Action</th><th scope="col" hidden={device !== "PC" && device !== "Compare all"}>PC</th><th scope="col" hidden={device !== "Xbox" && device !== "Compare all"}>Xbox</th><th scope="col" hidden={device !== "PlayStation" && device !== "Compare all"}>PlayStation</th><th scope="col">When to use it</th></tr></thead><tbody>{rows.map(r => <tr key={r.action}><th scope="row">{r.action}</th><td hidden={device !== "PC" && device !== "Compare all"}><kbd>{r.pc}</kbd></td><td hidden={device !== "Xbox" && device !== "Compare all"}><kbd>{r.xbox}</kbd></td><td hidden={device !== "PlayStation" && device !== "Compare all"}><kbd>{r.ps}</kbd></td><td>{r.condition}</td></tr>)}</tbody></table></div>
  </div>;
}

const checks = {
  fake: { label: "I only pump fake", title: "Check tap versus hold first.", body: "A short tap is the reported pump-fake command. Keep the shot input held to begin the shot, then release deliberately. Retry from a stationary, open position so movement does not add another variable.", next: "Look for: a full shooting animation instead of a brief fake." },
  layup: { label: "I get a layup, not a dunk", title: "Check the finish command.", body: "The shot/layup input and dunk input are different. On PC they are E and Space; Xbox uses X and Y; PlayStation uses Square and Triangle. For the reported driving dunk, add the sprint modifier while approaching the rim. That still does not prove your build meets every finish condition.", next: "Look for: whether the attempted action changes before judging its timing." },
  miss: { label: "The shot starts, but misses", title: "Separate release feedback from shot difficulty.", body: "Use the same open spot and stationary start for a small set of attempts. Record the release feedback the game actually displays. If you change distance, movement and release on every attempt, you cannot tell which change helped. Then add one variable back at a time.", next: "Look for: a repeatable release cue, not one lucky make." },
  dunk: { label: "The dunk will not start", title: "Check approach before guessing a rating.", body: "Try the correct dunk input near the rim in the finishing lesson or an available practice area. Test the standing attempt separately from a sprinting approach. Read any current requirement or failed-action message. If the same input works in practice but not during a contested drive, those are different attempt conditions.", next: "Look for: the current client’s explanation; no universal dunk threshold is verified here." },
} as const;

export function BasketballShotCheck() {
  const [issue, setIssue] = useState<keyof typeof checks>("fake");
  const result = checks[issue];
  return <div className="pb-diagnosis"><label htmlFor="pb-shot-issue">What happens on your attempt?</label><select id="pb-shot-issue" value={issue} onChange={e => setIssue(e.target.value as keyof typeof checks)}>{Object.entries(checks).map(([value,c]) => <option key={value} value={value}>{c.label}</option>)}</select><div className="pb-diagnosis-result" aria-live="polite"><h3>{result.title}</h3><p>{result.body}</p><strong>{result.next}</strong></div></div>;
}
