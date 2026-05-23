"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { Brain, Compass, Wrench } from "lucide-react";

type Badge = {
  letter: string;
  name: string;
  tint: string;
  useLogo?: boolean;
};

const INNER: Badge[] = [
  { letter: "C", name: "Claude", tint: "linear-gradient(135deg, #C9A04A, #F2D78B)", useLogo: true },
  { letter: "G", name: "GPT-5", tint: "linear-gradient(135deg, #0f6b4b, #10A37F)" },
  { letter: "✦", name: "Gemini", tint: "linear-gradient(135deg, #2563EB, #38BDF8)" },
];

const MIDDLE: Badge[] = [
  { letter: "L", name: "Llama", tint: "linear-gradient(135deg, #1D4ED8, #60A5FA)" },
  { letter: "M", name: "Mistral", tint: "linear-gradient(135deg, #C2410C, #FB923C)" },
  { letter: "X", name: "Grok", tint: "linear-gradient(135deg, #0a0a0a, #404040)" },
  { letter: "P", name: "Perplexity", tint: "linear-gradient(135deg, #155E75, #22D3EE)" },
];

const OUTER: Badge[] = [
  { letter: "Q", name: "Qwen", tint: "linear-gradient(135deg, #831843, #DB2777)" },
  { letter: "D", name: "DeepSeek", tint: "linear-gradient(135deg, #1E40AF, #6366F1)" },
  { letter: "K", name: "Kimi", tint: "linear-gradient(135deg, #166534, #4ADE80)" },
  { letter: "R", name: "Reka", tint: "linear-gradient(135deg, #7C2D12, #F97316)" },
  { letter: "+", name: "32 more", tint: "linear-gradient(135deg, #2a2a2a, #525252)" },
];

function Ring({
  radius,
  badges,
  duration,
  reverse = false,
}: {
  radius: number;
  badges: Badge[];
  duration: number;
  reverse?: boolean;
}) {
  const size = radius * 2;
  return (
    <div
      className="pointer-events-none absolute"
      style={{
        width: size,
        height: size,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Dashed orbit guide */}
      <div className="absolute inset-0 rounded-full border border-dashed border-white/[0.08]" />

      {/* Rotating container */}
      <div
        className={reverse ? "orbit-ring-reverse" : "orbit-ring"}
        style={{ animationDuration: `${duration}s`, width: "100%", height: "100%", position: "relative" }}
      >
        {badges.map((b, i) => {
          const theta = (i / badges.length) * Math.PI * 2;
          const x = radius + radius * Math.sin(theta);
          const y = radius - radius * Math.cos(theta);
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className={reverse ? "orbit-counter-reverse" : "orbit-counter"}
                style={{ animationDuration: `${duration}s` }}
              >
                <div className="flex flex-col items-center gap-1">
                  <span
                    className="flex size-9 items-center justify-center rounded-full border border-white/15 text-[12px] font-bold text-white shadow-[0_4px_14px_rgba(0,0,0,0.55)]"
                    style={{ background: b.tint }}
                  >
                    {b.useLogo ? (
                      <Image
                        src="/assets/logo-claude.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="size-4"
                      />
                    ) : (
                      b.letter
                    )}
                  </span>
                  <span className="whitespace-nowrap text-[10px] font-medium leading-none text-[var(--colors-content-tertiary)]">
                    {b.name}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HermesSigil() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="size-[88px] text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]"
      fill="none"
    >
      {/* Wings */}
      <path
        d="M50 28 C 38 24 26 26 18 32 C 28 30 38 32 50 36 Z"
        fill="currentColor"
        opacity="0.92"
      />
      <path
        d="M50 28 C 62 24 74 26 82 32 C 72 30 62 32 50 36 Z"
        fill="currentColor"
        opacity="0.92"
      />
      {/* Staff */}
      <line
        x1="50"
        y1="34"
        x2="50"
        y2="78"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Intertwined snakes — two curves crossing */}
      <path
        d="M50 40 C 42 46 58 52 50 58 C 42 64 58 70 50 76"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.88"
      />
      <path
        d="M50 40 C 58 46 42 52 50 58 C 58 64 42 70 50 76"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.88"
      />
      {/* Orb on top */}
      <circle cx="50" cy="24" r="3.2" fill="currentColor" />
    </svg>
  );
}

function FeatureRow({
  Icon,
  text,
  delay,
}: {
  Icon: typeof Brain;
  text: string;
  delay: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className="flex items-center gap-1.5 rounded-full border border-[var(--colors-border-secondary)] bg-[var(--colors-fill-primary-variant)]/80 px-2.5 py-1.5 backdrop-blur"
    >
      <Icon
        className="size-3.5 shrink-0 text-[var(--colors-content-tertiary)]"
        strokeWidth={1.5}
      />
      <span
        className="text-[11.5px] font-medium leading-none tracking-[0.2px] text-[var(--colors-content-secondary)]"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        {text}
      </span>
    </motion.li>
  );
}

export function StepHermesModels() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 py-2 sm:gap-4">
      {/* Orbital composition — sized to leave room for wordmark + features below */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="relative size-[460px] max-w-full"
        style={{ aspectRatio: "1 / 1" }}
      >
        {/* Three orbital rings */}
        <Ring radius={108} badges={INNER} duration={60} />
        <Ring radius={158} badges={MIDDLE} duration={90} reverse />
        <Ring radius={215} badges={OUTER} duration={120} />

        {/* Central HERMES portrait disc */}
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Outer aura */}
          <div className="aura-breathe pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(138,63,252,0.55),transparent_70%)] blur-2xl" />

          {/* Disc */}
          <div className="relative flex size-[168px] items-center justify-center overflow-hidden rounded-full border border-[var(--colors-border-brand-hover)] shadow-[0_0_60px_rgba(138,63,252,0.5),inset_0_0_40px_rgba(0,0,0,0.5)]">
            <AnimatedGradientBackground
              Breathing
              startingGap={120}
              breathingRange={10}
              animationSpeed={0.015}
              gradientColors={[
                "#0A0A0A",
                "#3D1A78",
                "#8A3FFC",
                "#A56EFF",
                "#1A1340",
                "#0A0A0A",
                "#0A0A0A",
              ]}
              gradientStops={[20, 35, 55, 70, 82, 92, 100]}
            />

            {/* Runed ring behind sigil */}
            <div className="sigil-spin absolute inset-4 rounded-full border border-dashed border-white/25" />
            <div
              className="sigil-spin absolute inset-7 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.18) 30deg, transparent 60deg, rgba(255,255,255,0.18) 180deg, transparent 210deg)",
                animationDuration: "60s",
              }}
            />

            {/* Sigil */}
            <div className="relative z-[1] scale-90">
              <HermesSigil />
            </div>

            {/* Inner vignette */}
            <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </motion.div>

      {/* HERMES wordmark — below orbital, no overlap with rings */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        className="-mt-1 text-center"
      >
        <div className="font-hero text-[42px] font-bold leading-none tracking-[3px] text-white [text-shadow:0_0_24px_rgba(138,63,252,0.6),0_0_4px_rgba(255,255,255,0.4)]">
          HERMES
        </div>
        <div
          className="mt-1.5 text-[10px] uppercase leading-none tracking-[2.5px] text-[var(--colors-content-tertiary)]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          the always-on agent
        </div>
      </motion.div>

      {/* Feature list — compact pill row */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-1 flex flex-wrap items-center justify-center gap-1.5"
      >
        <FeatureRow
          Icon={Compass}
          text="Plans multi-step work"
          delay={1.05}
        />
        <FeatureRow
          Icon={Wrench}
          text="Calls your tools"
          delay={1.15}
        />
        <FeatureRow
          Icon={Brain}
          text="Self-corrects when blocked"
          delay={1.25}
        />
      </motion.ul>
    </div>
  );
}
