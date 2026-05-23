"use client";

import { motion } from "framer-motion";
import { ArrowDown, ImageIcon, Music2, Mic } from "lucide-react";
import { ReactNode } from "react";

function Panel({
  delay,
  caption,
  Icon,
  children,
}: {
  delay: number;
  caption: string;
  Icon: typeof ImageIcon;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className="flex flex-col items-stretch gap-3"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-[var(--colors-border-secondary)] bg-[#0c0c0c] shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
        {children}
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="flex size-6 items-center justify-center rounded-full bg-[var(--colors-fill-secondary)] text-[var(--colors-content-secondary)]">
          <Icon className="size-3.5" strokeWidth={1.5} />
        </span>
        <span className="text-[12.5px] font-medium tracking-[0.2px] text-[var(--colors-content-secondary)]">
          {caption}
        </span>
      </div>
    </motion.div>
  );
}

function ImagePreview() {
  return (
    <div className="relative h-full w-full">
      {/* Generated image (placeholder gradient + radial highlights to look "art-y") */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2a0f4a 0%, #5b1f87 30%, #8b3fc7 55%, #d18558 80%, #f5b074 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,165,80,0.45),transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />

      {/* Scan reveal sweep */}
      <div className="scan-reveal absolute inset-x-0 top-0 h-[40%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.18) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.18) 60%, transparent 100%)",
          mixBlendMode: "plus-lighter",
        }}
      />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_12px_rgba(0,0,0,0.45)]" />
    </div>
  );
}

function MusicPreview() {
  const bars = Array.from({ length: 24 });
  return (
    <div className="relative flex h-full w-full flex-col justify-between p-6">
      {/* Bar visualizer */}
      <div className="flex flex-1 items-end justify-center gap-1.5">
        {bars.map((_, i) => {
          const h = 28 + ((i * 23) % 70);
          const delay = (i * 0.07) % 1.4;
          return (
            <div
              key={i}
              className="bar-pulse w-[3px] rounded-full bg-gradient-to-t from-[#a56eff] via-[#c994ff] to-[#f3e8ff]"
              style={{
                height: `${h}%`,
                animationDelay: `-${delay}s`,
              }}
            />
          );
        })}
      </div>
      {/* Progress line */}
      <div className="mt-4 flex items-center gap-2 px-1">
        <div className="size-1.5 rounded-full bg-[var(--colors-fill-brand)] shadow-[0_0_8px_var(--colors-fill-brand)]" />
        <div className="relative h-px flex-1 bg-white/15">
          <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[var(--colors-fill-brand)] to-transparent" />
        </div>
        <span
          className="text-[10px] tracking-[0.4px] text-[var(--colors-content-tertiary)]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          0:13 / 0:30
        </span>
      </div>
      {/* Soft brand glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_60%,rgba(138,63,252,0.18),transparent_60%)]" />
    </div>
  );
}

function VoicePreview() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-6">
      {/* Animated waveform */}
      <svg viewBox="0 0 200 60" className="w-full" fill="none">
        <defs>
          <linearGradient id="wave-grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#a56eff" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#a56eff" stopOpacity="1" />
            <stop offset="100%" stopColor="#a56eff" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <motion.path
          stroke="url(#wave-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ d: "M0 30 Q 20 30 40 30 T 80 30 T 120 30 T 160 30 T 200 30" }}
          animate={{
            d: [
              "M0 30 Q 20 14 40 30 T 80 26 T 120 32 T 160 18 T 200 30",
              "M0 30 Q 20 42 40 30 T 80 38 T 120 22 T 160 44 T 200 30",
              "M0 30 Q 20 18 40 30 T 80 28 T 120 36 T 160 24 T 200 30",
              "M0 30 Q 20 14 40 30 T 80 26 T 120 32 T 160 18 T 200 30",
            ],
          }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          stroke="url(#wave-grad)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.45"
          initial={{ d: "M0 30 Q 20 30 40 30 T 80 30 T 120 30 T 160 30 T 200 30" }}
          animate={{
            d: [
              "M0 30 Q 20 22 40 30 T 80 36 T 120 24 T 160 34 T 200 30",
              "M0 30 Q 20 38 40 30 T 80 24 T 120 36 T 160 26 T 200 30",
              "M0 30 Q 20 22 40 30 T 80 36 T 120 24 T 160 34 T 200 30",
            ],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Caption inside the panel showing transcript */}
      <div className="absolute inset-x-6 bottom-5 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur">
        <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-[#a56eff]" />
        <span
          className="truncate text-[10.5px] tracking-[0.2px] text-[var(--colors-content-secondary)]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          "wake up to a better brew…"
        </span>
      </div>

      {/* Soft brand glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(138,63,252,0.18),transparent_60%)]" />
    </div>
  );
}

export function StepCreate() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 py-2">
      {/* Prompt chip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="flex items-center gap-2 rounded-full border border-[var(--colors-border-secondary)] bg-[var(--colors-fill-primary-variant)] px-3.5 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
      >
        <span className="size-1.5 rounded-full bg-[var(--colors-fill-brand)] shadow-[0_0_8px_var(--colors-fill-brand)]" />
        <span
          className="text-[12px] tracking-[0.2px] text-[var(--colors-content-secondary)]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          "a 30-second ad for a coffee brand"
        </span>
      </motion.div>

      {/* Branching arrows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="relative h-10 w-full max-w-[760px]"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 760 40"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="rgba(255,255,255,0.18)" strokeWidth="1">
            <path d="M380 0 Q 380 18 130 38" />
            <path d="M380 0 L 380 40" />
            <path d="M380 0 Q 380 18 630 38" />
          </g>
        </svg>
        <div className="absolute -bottom-1 left-[14%] -translate-x-1/2 rounded-full bg-[var(--colors-fill-secondary)] p-1">
          <ArrowDown
            className="size-3 text-[var(--colors-content-secondary)]"
            strokeWidth={1.5}
          />
        </div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-[var(--colors-fill-secondary)] p-1">
          <ArrowDown
            className="size-3 text-[var(--colors-content-secondary)]"
            strokeWidth={1.5}
          />
        </div>
        <div className="absolute -bottom-1 left-[86%] -translate-x-1/2 rounded-full bg-[var(--colors-fill-secondary)] p-1">
          <ArrowDown
            className="size-3 text-[var(--colors-content-secondary)]"
            strokeWidth={1.5}
          />
        </div>
      </motion.div>

      {/* Three panels */}
      <div className="grid w-full max-w-[760px] grid-cols-1 gap-5 sm:grid-cols-3">
        <Panel delay={0.4} caption="Image" Icon={ImageIcon}>
          <ImagePreview />
        </Panel>
        <Panel delay={0.55} caption="Music" Icon={Music2}>
          <MusicPreview />
        </Panel>
        <Panel delay={0.7} caption="Voice" Icon={Mic}>
          <VoicePreview />
        </Panel>
      </div>
    </div>
  );
}
