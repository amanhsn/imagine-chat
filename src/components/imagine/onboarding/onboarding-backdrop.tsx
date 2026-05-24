"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";

type GlowOrigin = "center" | "top-right";

const GLOW_POS: Record<GlowOrigin, { left: string; top: string }> = {
  center: { left: "50%", top: "55%" },
  "top-right": { left: "82%", top: "18%" },
};

export function OnboardingBackdrop({
  origin = "center",
}: {
  origin?: GlowOrigin;
}) {
  const pos = GLOW_POS[origin];
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Solid base */}
      <div className="absolute inset-0 bg-[var(--colors-background)]" />

      {/* Flickering grid — coral accent */}
      <FlickeringGrid
        className="absolute inset-0 z-[2] [mask-image:radial-gradient(ellipse_75%_70%_at_50%_55%,#000_30%,transparent_100%)]"
        color="#F28B82"
        maxOpacity={0.14}
        flickerChance={0.08}
        squareSize={2}
        gridGap={12}
      />

      {/* Peach aurora glow */}
      <div
        className="ellipse-drift absolute z-[1] transition-[left,top] duration-700 ease-out"
        style={{
          left: pos.left,
          top: pos.top,
          width: "720px",
          height: "720px",
        }}
      >
        <div
          className="absolute"
          style={{
            inset: "-97.09%",
            backgroundImage: "url('/assets/ellipse-glow.svg')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            opacity: 0.85,
          }}
        />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
