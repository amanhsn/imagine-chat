"use client";

import { useEffect, useState } from "react";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { ModifiedClassicLoader } from "@/components/ui/loader";
import { ChevronDown, Maximize2 } from "lucide-react";

const LOADING_TIPS = [
  "Use descriptive verbs like “gliding,” “sweeping,” or “tumbling” for richer motion.",
  "Mention the time of day to anchor natural lighting cues.",
  "Specify a lens — 35mm feels intimate, 85mm feels cinematic.",
  "Add a reference image to lock the scene’s aesthetic.",
  "Describe the camera move: dolly, crane, handheld, or static.",
  "Name the mood — “tense,” “tender,” “dreamlike” — to steer the score.",
];

function RotatingTip() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % LOADING_TIPS.length);
        setVisible(true);
      }, 400);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex max-w-[420px] flex-col items-center gap-1 px-6 text-center">
      <span className="text-[11px] font-medium uppercase leading-4 tracking-[0.18em] text-white/50">
        Generating
      </span>
      <p
        className={`min-h-[40px] text-balance text-[15px] font-medium leading-5 tracking-[0.1px] text-white/85 transition-opacity duration-400 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        aria-live="polite"
      >
        {LOADING_TIPS[index]}
      </p>
    </div>
  );
}

function TopTab({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      type="button"
      className="flex h-8 shrink-0 items-center justify-center px-3"
    >
      <span
        className={`whitespace-nowrap text-center text-[14px] font-medium leading-5 tracking-[0.42px] ${
          active ? "text-white" : "text-white/50"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

function CanvasControls() {
  return (
    <div className="flex w-full items-center justify-between">
      {/* Segmented control */}
      <div className="flex items-center rounded-[12px] bg-[var(--colors-fill-secondary)] p-[3px]">
        <div className="rounded-[10px] bg-[#2e2e2e] px-[10px] py-1">
          <span className="text-[12px] font-medium leading-4 tracking-[0.36px] text-white">
            Create
          </span>
        </div>
        <div className="px-[10px] py-1">
          <span className="text-[12px] font-medium leading-4 tracking-[0.36px] text-white/50">
            Learn
          </span>
        </div>
        <div className="px-[10px] py-1">
          <span className="text-[12px] font-medium leading-4 tracking-[0.36px] text-white/50">
            References
          </span>
        </div>
        <div className="px-[10px] py-1">
          <span className="text-[12px] font-medium leading-4 tracking-[0.36px] text-white/50">
            Inspirations
          </span>
        </div>
      </div>

      {/* Right side: zoom slider + nav + Assets */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-[8px] bg-[var(--colors-fill-secondary)] px-2 py-1">
          <Maximize2 className="size-[14px] text-white" strokeWidth={1.5} />
          <div className="flex w-[120px] items-center">
            <div className="h-[3px] flex-1 rounded-full bg-white/15">
              <div className="h-full w-2/3 rounded-full bg-white" />
            </div>
            <div className="ml-[-6px] size-3 rounded-full border-2 border-white bg-[#0f0f0f]" />
          </div>
        </div>
        <button
          type="button"
          className="flex h-8 items-center gap-1 rounded-[10px] border border-[#2e2e2e] px-3"
        >
          <span className="text-[12px] font-medium leading-4 tracking-[0.36px] text-white">
            Assets
          </span>
          <ChevronDown className="size-[14px] text-white" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

export function DirectorCanvas() {
  return (
    <div className="flex w-full flex-col gap-3">
      <CanvasControls />

      {/* Canvas frame — the loading state */}
      <div className="relative aspect-[952/608] w-full overflow-hidden rounded-[16px] border border-[var(--colors-border-secondary)] bg-[var(--colors-background)]">
        {/* AnimatedGradientBackground — muted painterly palette anchored on
            user-selected sage (#3D9970) and slate-blue (#54A1C0) */}
        <AnimatedGradientBackground
          Breathing
          startingGap={135}
          breathingRange={6}
          animationSpeed={0.02}
          gradientColors={[
            "#0A0A0A",
            "#0F2A2E",
            "#3D9970",
            "#54A1C0",
            "#7A8C6A",
            "#C68B5C",
          ]}
          gradientStops={[30, 45, 62, 78, 92, 100]}
        />

        {/* Subtle inset vignette to soften the frame edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[16px]"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.04), inset 0 0 80px 0 rgba(0,0,0,0.25)",
          }}
        />

        {/* Center: spinner + rotating tip */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5">
          <ModifiedClassicLoader />
          <RotatingTip />
        </div>
      </div>
    </div>
  );
}
