"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Film,
  AudioLines,
  Sparkles,
  Clapperboard,
} from "lucide-react";
import { ReactNode } from "react";

function Card({
  icon,
  title,
  sub,
  children,
  className = "",
  delay = 0,
}: {
  icon: ReactNode;
  title: string;
  sub: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.15 + delay,
      }}
      className={`group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-[var(--colors-border-secondary)] bg-[var(--colors-fill-primary-variant)]/85 p-4 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-[var(--colors-fill-secondary)] text-[var(--colors-content-secondary)]">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-[13.5px] font-semibold leading-tight tracking-[-0.1px] text-[var(--colors-content-primary)]">
            {title}
          </h3>
          <p className="mt-1 text-[12px] leading-[1.45] text-[var(--colors-content-tertiary)]">
            {sub}
          </p>
        </div>
      </div>
      <div className="relative mt-auto h-[110px] w-full overflow-hidden rounded-xl border border-[var(--colors-border-primary)] bg-[#0c0c0c]">
        {children}
      </div>
    </motion.div>
  );
}

function DocPreview() {
  return (
    <div className="flex h-full w-full flex-col gap-1.5 p-3">
      <div className="h-2 w-1/3 rounded-full bg-white/15" />
      <div className="txt-shimmer h-2 w-3/4 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
      <div className="mt-1 h-1.5 w-full rounded-full bg-white/[0.06]" />
      <div className="h-1.5 w-[92%] rounded-full bg-white/[0.06]" />
      <div className="h-1.5 w-[85%] rounded-full bg-white/[0.06]" />
      <div className="h-1.5 w-[78%] rounded-full bg-white/[0.06]" />
      <div className="mt-1 h-1.5 w-1/2 rounded-full bg-white/[0.06]" />
    </div>
  );
}

function FilmPreview() {
  return (
    <div className="relative h-full w-full">
      <div className="scene-loader-glow-a absolute inset-0" />
      <div className="scene-loader-glow-b absolute inset-0" />
      <div className="scene-loader-scan absolute inset-x-0 top-0" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="scene-loader-spinner size-6 text-white/85"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="2"
          />
          <path
            d="M21 12a9 9 0 0 0-9-9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="scene-loader-vignette absolute inset-0 rounded-xl" />
    </div>
  );
}

function MusicPreview() {
  // 14 vertical bars with staggered animation delays
  const bars = Array.from({ length: 14 });
  return (
    <div className="relative flex h-full w-full items-end justify-center gap-[3px] px-3 pb-3 pt-4">
      {bars.map((_, i) => {
        const h = 22 + ((i * 13) % 70);
        const delay = (i * 0.09) % 1.4;
        return (
          <div
            key={i}
            className="bar-pulse w-[3px] rounded-full bg-gradient-to-t from-[#a56eff] to-[#e9d5ff]"
            style={{
              height: `${h}%`,
              animationDelay: `-${delay}s`,
            }}
          />
        );
      })}
      <div className="absolute inset-x-3 bottom-2 h-px bg-white/10" />
    </div>
  );
}

function BrandPreview() {
  const tiles = [
    "linear-gradient(135deg, #2A1A6E 0%, #8A3FFC 100%)",
    "linear-gradient(135deg, #6B1D3E 0%, #FF80AB 100%)",
    "linear-gradient(135deg, #0E3B5C 0%, #2979FF 100%)",
    "linear-gradient(135deg, #1F5C2D 0%, #00E676 100%)",
  ];
  return (
    <div className="grid h-full w-full grid-cols-4 gap-1.5 p-2.5">
      {tiles.map((bg, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-md"
          style={{ background: bg }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.35),transparent_60%)]" />
        </div>
      ))}
    </div>
  );
}

function DirectorPreview() {
  return (
    <div className="flex h-full w-full flex-col gap-1.5 p-2.5">
      <div className="relative flex-1 overflow-hidden rounded-md bg-gradient-to-br from-[#1a1340] via-[#3b1d6b] to-[#6928c4]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="absolute bottom-2 left-2 size-2 rounded-full bg-[var(--colors-fill-brand)] shadow-[0_0_12px_var(--colors-fill-brand)]" />
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`h-3 flex-1 rounded-[3px] ${
              i < 3
                ? "bg-[var(--colors-fill-brand)]/70"
                : "bg-white/[0.08]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function StepUseCases() {
  return (
    <div className="grid h-full w-full max-w-[920px] grid-cols-1 gap-3 py-2 sm:gap-4 sm:py-4 md:grid-cols-6 md:grid-rows-2">
      {/* Top row: 3 cards */}
      <Card
        icon={<FileText className="size-4" strokeWidth={1.5} />}
        title="Research anything. Ship a doc."
        sub="From research to a published PDF or HTML brief."
        className="md:col-span-2"
        delay={0}
      >
        <DocPreview />
      </Card>

      <Card
        icon={<Film className="size-4" strokeWidth={1.5} />}
        title="Turn an idea into a film."
        sub="Script, cast, scenes, music, edits — done."
        className="md:col-span-2"
        delay={0.08}
      >
        <FilmPreview />
      </Card>

      <Card
        icon={<AudioLines className="size-4" strokeWidth={1.5} />}
        title="Generate music and voice."
        sub="Original soundtracks and voiceovers in one pass."
        className="md:col-span-2"
        delay={0.16}
      >
        <MusicPreview />
      </Card>

      {/* Bottom row: 2 wider cards */}
      <Card
        icon={<Sparkles className="size-4" strokeWidth={1.5} />}
        title="Brand at unfair scale."
        sub="100 UGC and ad variants per product, in minutes."
        className="md:col-span-3"
        delay={0.24}
      >
        <BrandPreview />
      </Card>

      <Card
        icon={<Clapperboard className="size-4" strokeWidth={1.5} />}
        title="Direct your own scene."
        sub="Storyboard, edit, and export — no team required."
        className="md:col-span-3"
        delay={0.32}
      >
        <DirectorPreview />
      </Card>
    </div>
  );
}
