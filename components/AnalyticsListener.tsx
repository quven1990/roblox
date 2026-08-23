"use client";

import { useEffect } from "react";
import { trackFromElement } from "@/lib/analytics";

export function AnalyticsListener() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const tracked = target.closest("[data-analytics-event]");
      if (tracked instanceof HTMLElement) {
        trackFromElement(tracked, window.location.pathname);
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
