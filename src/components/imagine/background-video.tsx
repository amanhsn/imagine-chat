"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";

export function PageBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Animated flickering grid — full-bleed, faded toward edges */}
      <FlickeringGrid
        className="absolute inset-0 z-[2] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_60%,#000_35%,transparent_100%)]"
        color="#F28B82"
        maxOpacity={0.12}
        flickerChance={0.08}
        squareSize={2}
        gridGap={12}
      />
      {/* Ellipse-15 glow — centered, bleeding out behind the prompt box */}
      <div
        className="ellipse-drift absolute z-[1]"
        style={{
          left: "50%",
          top: "50%",
          width: "515px",
          height: "515px",
        }}
      >
        <div
          className="absolute"
          style={{
            inset: "-97.09%",
            backgroundImage: "url('/assets/ellipse-glow.svg')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
}
