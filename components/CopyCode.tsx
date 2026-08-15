"use client";

import { useState } from "react";

export function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Keep the code visible so it can still be selected.
    }
  }

  return (
    <button
      type="button"
      className="copy-code"
      onClick={onCopy}
      aria-label={`Copy code ${code}`}
    >
      <span className="copy-code-value">{code}</span>
      <span className="copy-code-hint">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
