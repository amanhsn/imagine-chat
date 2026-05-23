"use client";

import { motion } from "framer-motion";

export function ProgressDots({
  total,
  current,
}: {
  total: number;
  current: number;
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => {
        const active = i === current;
        return (
          <motion.span
            key={i}
            animate={{
              width: active ? 22 : 6,
              backgroundColor: active
                ? "var(--colors-fill-brand)"
                : "rgba(255,255,255,0.25)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="h-[6px] rounded-full"
          />
        );
      })}
    </div>
  );
}
