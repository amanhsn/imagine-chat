"use client";

import { motion } from "framer-motion";
import {
  ImageIcon,
  AudioLines,
  Video,
  Play,
  ArrowUp,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { ReactNode, useRef, useState } from "react";
import { DarkGlass } from "@/components/ui/liquid-glass";

function ModCard({
  icon,
  label,
  delay,
  children,
  edgeToEdge = false,
}: {
  icon: ReactNode;
  label: string;
  delay: number;
  children: ReactNode;
  edgeToEdge?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className="flex flex-col items-center gap-3"
    >
      <DarkGlass className="rounded-[16px]" blur={20}>
        <div
          className={`relative h-[130px] w-[150px] overflow-hidden sm:h-[160px] sm:w-[200px] md:h-[180px] md:w-[240px] ${
            edgeToEdge ? "" : "p-3 sm:p-4"
          }`}
        >
          {children}
        </div>
      </DarkGlass>

      <span
        className="inline-flex items-center gap-1.5 text-[12px] text-[var(--colors-content-secondary)]"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        <span className="text-[var(--colors-content-tertiary)]">{icon}</span>
        {label}
      </span>
    </motion.div>
  );
}

function AudioMod() {
  const bars = Array.from({ length: 28 });
  return (
    <div className="flex h-full w-full flex-col justify-between">
      {/* Waveform */}
      <div className="flex flex-1 items-center justify-center gap-[2px]">
        {bars.map((_, i) => {
          const h = 18 + ((i * 17 + 11) % 62);
          const delay = (i * 0.07) % 1.4;
          return (
            <span
              key={i}
              className="bar-pulse w-[2px] rounded-full bg-gradient-to-t from-[#a56eff] to-[#e9d5ff]"
              style={{ height: `${h}%`, animationDelay: `-${delay}s` }}
            />
          );
        })}
      </div>
      {/* Transport row */}
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          aria-label="Previous"
          className="flex size-5 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <SkipBack className="size-2.5" strokeWidth={2} fill="currentColor" />
        </button>
        <button
          type="button"
          aria-label="Play"
          className="flex size-6 items-center justify-center rounded-full bg-white text-black shadow-[0_2px_8px_rgba(255,255,255,0.18)] transition-transform hover:scale-105"
        >
          <Play className="size-[10px]" strokeWidth={2.5} fill="currentColor" />
        </button>
        <button
          type="button"
          aria-label="Next"
          className="flex size-5 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <SkipForward
            className="size-2.5"
            strokeWidth={2}
            fill="currentColor"
          />
        </button>
      </div>
      {/* Scrubber row */}
      <div className="mt-1.5 flex items-center gap-2">
        <span
          className="text-[8px] tabular-nums text-[var(--colors-content-tertiary)]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          0:13
        </span>
        <div className="relative h-px flex-1 bg-white/15">
          <div className="absolute inset-y-0 left-0 w-[43%] bg-white/70" />
          <span className="absolute left-[43%] top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
        </div>
        <span
          className="text-[8px] tabular-nums text-[var(--colors-content-tertiary)]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          0:30
        </span>
        <Volume2
          className="size-3 text-[var(--colors-content-tertiary)]"
          strokeWidth={1.6}
        />
      </div>
    </div>
  );
}

function VideoMod() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/hero-bg.png"
        className="absolute inset-0 size-full object-cover"
      >
        <source src="/video/bg.webm" type="video/webm" />
      </video>

      {/* Brand tint */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Mute toggle, top-right */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute right-1.5 top-1.5 z-[1] flex size-[22px] cursor-pointer items-center justify-center rounded-full bg-black/55 text-white/90 backdrop-blur transition-colors hover:bg-black/70 hover:text-white"
      >
        {muted ? (
          <VolumeX className="size-3" strokeWidth={1.7} />
        ) : (
          <Volume2 className="size-3" strokeWidth={1.7} />
        )}
      </button>

      {/* Bottom playback bar */}
      <div className="absolute inset-x-2 bottom-2 z-[1] flex items-center gap-1.5 rounded-full bg-black/55 px-2 py-1 backdrop-blur">
        <span className="flex size-3.5 items-center justify-center rounded-[3px] bg-white text-black">
          <Play className="size-[7px]" strokeWidth={2.5} fill="currentColor" />
        </span>
        <div className="relative h-px flex-1 bg-white/25">
          <div className="absolute inset-y-0 left-0 w-[36%] bg-white" />
          <span className="absolute left-[36%] top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        </div>
        <span
          className="text-[8px] tabular-nums text-white/85"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          0:11 / 0:30
        </span>
      </div>
    </div>
  );
}

function ImageMod() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://i.pinimg.com/736x/9c/f2/8b/9cf28b4df4e06e0ca34fbe87f25734b6.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
        draggable={false}
      />
      {/* gentle scan-reveal sweep */}
      <div className="scan-reveal pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
    </div>
  );
}

export function StepMultimodal({ onContinue }: { onContinue: () => void }) {
  const PROMPT_TEXT = "a 30-second ad for a coffee brand";

  const handleSend = () => {
    try {
      window.localStorage.setItem("pendingOnboardPrompt", PROMPT_TEXT);
    } catch {
      // best-effort
    }
    onContinue();
  };

  return (
    <div className="flex h-full w-full max-w-[920px] flex-col items-center justify-center px-2 sm:px-0">
      {/* Prompt pill with send button on the right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <DarkGlass className="rounded-full" blur={20}>
          <div className="flex items-center gap-3 py-2 pl-5 pr-1.5">
            <span
              className="text-[12px] text-[var(--colors-content-primary)] sm:text-[13px] md:text-[14px]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              &ldquo;{PROMPT_TEXT}&rdquo;
            </span>
            <button
              type="button"
              onClick={handleSend}
              aria-label="Send prompt and continue"
              className="flex size-8 cursor-pointer items-center justify-center rounded-full text-white shadow-[0_6px_18px_rgba(201,106,71,0.35)] transition-transform hover:-translate-y-px"
              style={{ backgroundColor: "#C96A47" }}
            >
              <ArrowUp className="size-4" strokeWidth={2.5} />
            </button>
          </div>
        </DarkGlass>
      </motion.div>

      {/* Branching arrows — sits between pill and cards as a flex sibling */}
      <svg
        className="pointer-events-none my-2 h-[60px] w-[480px] max-w-full sm:my-3 sm:h-[76px] sm:w-[620px] md:h-[88px] md:w-[760px]"
        viewBox="0 0 760 88"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          {/*
            Vertical gradient applied in user space so every path (vertical or
            bent) renders the same flow. One bright band, period = 44px,
            tiled with spreadMethod="repeat" so an animated 44px translate is
            seamless across loop boundaries.
          */}
          <linearGradient
            id="flow-stroke"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2="44"
            spreadMethod="repeat"
          >
            <stop
              offset="0"
              stopColor="currentColor"
              stopOpacity="0.18"
            />
            <stop
              offset="0.5"
              stopColor="currentColor"
              stopOpacity="0.85"
            />
            <stop
              offset="1"
              stopColor="currentColor"
              stopOpacity="0.18"
            />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="0 -44"
              to="0 0"
              dur="2.6s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
        {[{ x: 120 }, { x: 380 }, { x: 640 }].map((p, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.35 + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <path
              d={
                i === 1
                  ? `M 380 0 L 380 78`
                  : `M 380 0 L 380 32 L ${p.x} 32 L ${p.x} 78`
              }
              fill="none"
              stroke="url(#flow-stroke)"
              strokeWidth={1.25}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Arrowhead */}
            <path
              d={`M ${p.x - 4} 73 L ${p.x} 80 L ${p.x + 4} 73`}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.32"
              strokeWidth={1.25}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </motion.g>
        ))}
      </svg>

      <div className="flex items-start gap-3 sm:gap-5 md:gap-8">
        <ModCard
          icon={<AudioLines className="size-3.5" strokeWidth={1.6} />}
          label="Audio"
          delay={0.5}
        >
          <AudioMod />
        </ModCard>
        <ModCard
          icon={<Video className="size-3.5" strokeWidth={1.6} />}
          label="Video"
          delay={0.6}
          edgeToEdge
        >
          <VideoMod />
        </ModCard>
        <ModCard
          icon={<ImageIcon className="size-3.5" strokeWidth={1.6} />}
          label="Image"
          delay={0.7}
          edgeToEdge
        >
          <ImageMod />
        </ModCard>
      </div>
    </div>
  );
}
