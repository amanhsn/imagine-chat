"use client";

import { ReactNode } from "react";

/**
 * Full-screen "computer screen" treatment. No window chrome — just edge-glass
 * depth (corner glares, vignette, scan-lines, soft inset highlight) so the
 * whole viewport reads like an old CRT/monitor surface.
 */
export function MonitorFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[var(--colors-background)]">
      {/* The screen content */}
      <div className="relative z-[1] flex h-full w-full flex-col">
        {children}
      </div>

      {/* ── Edge-glass depth treatments (above content, pointer-events: none) ── */}

      {/* Scan-line texture */}
      <div
        className="pointer-events-none absolute inset-0 z-[20] opacity-[0.05]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.6) 2px 3px)",
        }}
      />

      {/* CRT vignette — darker at edges */}
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
            "radial-gradient(ellipse 50% 35% at 12% 6%, rgba(255,255,255,0.07), transparent 60%)",
        }}
      />

      {/* Top-right phosphor glare */}
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
            "radial-gradient(ellipse 60% 40% at 4% 98%, rgba(0,0,0,0.55), transparent 60%)",
        }}
      />

      {/* Bottom-right depth shadow */}
      <div
        className="pointer-events-none absolute inset-0 z-[22]"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 96% 98%, rgba(0,0,0,0.55), transparent 60%)",
        }}
      />

      {/* Inner edge highlight — hairline */}
      <div
        className="pointer-events-none absolute inset-0 z-[23]"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.05), inset 0 0 60px 6px rgba(0,0,0,0.35)",
        }}
      />
    </div>
  );
}
