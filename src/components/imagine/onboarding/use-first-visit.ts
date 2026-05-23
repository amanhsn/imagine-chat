"use client";

import { useEffect, useState } from "react";

// Dev/iteration mode: open the onboarding on every page load.
// Flip ALWAYS_SHOW to false to re-enable the first-visit-only persistence.
const ALWAYS_SHOW = true;
const STORAGE_KEY = "imagineOnboardingSeen";

export function useFirstVisit() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ALWAYS_SHOW) {
      setOpen(true);
      setReady(true);
      return;
    }
    try {
      const seen = window.localStorage.getItem(STORAGE_KEY);
      setOpen(seen !== "1");
    } catch {
      setOpen(false);
    }
    setReady(true);
  }, []);

  const dismiss = () => {
    if (!ALWAYS_SHOW) {
      try {
        window.localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore — best effort
      }
    }
    setOpen(false);
  };

  return { open, ready, dismiss };
}
