"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";

export function OnboardingBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Solid base */}
      <div className="absolute inset-0 bg-[var(--colors-background)]" />

      {/* Flickering grid — stronger than home, faded toward edges */}
      <FlickeringGrid
        className="absolute inset-0 z-[2] [mask-image:radial-gradient(ellipse_75%_70%_at_50%_55%,#000_30%,transparent_100%)]"
        color="#F28B82"
        maxOpacity={0.14}
        flickerChance={0.08}
        squareSize={2}
        gridGap={12}
      />

      {/* Soft ellipse glow, off-center to give content room */}
      <div
        className="ellipse-drift absolute z-[1]"
        style={{
          left: "50%",
          top: "55%",
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

      {/* Vignette for stronger contrast on foreground content */}
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
