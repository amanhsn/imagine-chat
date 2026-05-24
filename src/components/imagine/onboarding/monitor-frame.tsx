"use client";

import { ReactNode } from "react";

/**
 * Full-viewport "computer screen" treatment with glass depth.
 * The outer wrapper provides margin + drop shadow so the screen feels like a
 * real physical surface; the inner screen carries scan-lines, vignette, corner
 * glares, and a hairline glass border.
 */
export function MonitorFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden p-3 sm:p-5">
      <div
        className="relative h-full w-full overflow-hidden rounded-[26px] bg-[var(--colors-background)]"
        style={{
          boxShadow: [
            // Bright top edge highlight — glass catches light
            "inset 0 1px 0 rgba(255,255,255,0.09)",
            // Hairline glass rim
            "inset 0 0 0 1px rgba(255,255,255,0.05)",
            // Soft inner shading (depth)
            "inset 0 0 80px 12px rgba(0,0,0,0.45)",
            // Outer drop shadow — screen floats on the desk
            "0 50px 140px rgba(0,0,0,0.7)",
            // Subtle brand bloom outside the bezel
            "0 0 80px rgba(138,63,252,0.06)",
          ].join(", "),
        }}
      >
        {/* The screen content */}
        <div className="relative z-[1] flex h-full w-full flex-col">
          {children}
        </div>

        {/* ── Edge-glass treatments (above content) ── */}

        {/* Scan-line texture */}
        <div
          className="pointer-events-none absolute inset-0 z-[20] opacity-[0.05]"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.6) 2px 3px)",
          }}
        />

        {/* CRT vignette */}
        <div
          className="pointer-events-none absolute inset-0 z-[21]"
          style={{
            background:
              "radial-gradient(ellipse 110% 95% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Top-left phosphor glare */}
        <div
          className="pointer-events-none absolute inset-0 z-[22]"
          style={{
            background:
              "radial-gradient(ellipse 55% 38% at 12% 6%, rgba(255,255,255,0.09), transparent 60%)",
          }}
        />

        {/* Top-right glare (softer) */}
        <div
          className="pointer-events-none absolute inset-0 z-[22]"
          style={{
            background:
              "radial-gradient(ellipse 40% 28% at 88% 8%, rgba(255,255,255,0.05), transparent 60%)",
          }}
        />

        {/* Bottom-left depth shadow */}
        <div
          className="pointer-events-none absolute inset-0 z-[22]"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 4% 98%, rgba(0,0,0,0.6), transparent 60%)",
          }}
        />

        {/* Bottom-right depth shadow */}
        <div
          className="pointer-events-none absolute inset-0 z-[22]"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 96% 98%, rgba(0,0,0,0.6), transparent 60%)",
          }}
        />

        {/* Top-edge sheen — a thin diagonal highlight that suggests glass */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[23] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.18) 30%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.1) 70%, transparent)",
          }}
        />
      </div>
    </div>
  );
}
