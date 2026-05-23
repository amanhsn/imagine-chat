"use client";

import { motion } from "framer-motion";

/**
 * Minimal stepper — 4 short hairlines at the bottom of the screen. Active is
 * filled brand purple with a soft glow; inactive is muted white.
 */
export function ProgressBar({
  total,
  current,
}: {
  total: number;
  current: number;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => {
        const active = i === current;
        const past = i < current;
        return (
          <motion.span
            key={i}
            initial={false}
            animate={{
              width: active ? 22 : 14,
              backgroundColor: active
                ? "var(--colors-fill-brand)"
                : past
                  ? "rgba(255,255,255,0.32)"
                  : "rgba(255,255,255,0.12)",
              boxShadow: active
                ? "0 0 10px rgba(138,63,252,0.55)"
                : "0 0 0 rgba(0,0,0,0)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="h-[2px] rounded-full"
          />
        );
      })}
    </div>
  );
}
