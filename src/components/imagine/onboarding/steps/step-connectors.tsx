"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Share2 } from "lucide-react";
import { DarkGlass } from "@/components/ui/liquid-glass";

type Chip = {
  label: string;
  sub?: string;
  logo: string;
  /** Position as percentages of the stage. */
  top: string;
  left: string;
  /** Drift animation delay (s). */
  delay?: number;
};

const CHIPS: Chip[] = [
  {
    label: "Figma",
    logo: "/assets/connectors/figma.svg",
    top: "20%",
    left: "50%",
    delay: 0.2,
  },
  {
    label: "Notion",
    logo: "/assets/connectors/notion.svg",
    top: "30%",
    left: "20%",
    delay: 0.6,
  },
  {
    label: "Adobe Creative Cloud",
    logo: "/assets/connectors/adobe-cc.svg",
    top: "32%",
    left: "78%",
    delay: 1.1,
  },
  {
    label: "Drive",
    logo: "/assets/connectors/drive.svg",
    top: "56%",
    left: "12%",
    delay: 0.9,
  },
  {
    label: "Chat with Imagine",
    sub: "on Chatly",
    logo: "/assets/connectors/chatly.svg",
    top: "56%",
    left: "82%",
    delay: 0.4,
  },
  {
    label: "Slack",
    logo: "/assets/connectors/slack.svg",
    top: "80%",
    left: "40%",
    delay: 1.4,
  },
  {
    label: "Discord",
    logo: "/assets/connectors/discord.svg",
    top: "82%",
    left: "62%",
    delay: 0.7,
  },
];

function ChipEl({ chip, index }: { chip: Chip; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.25 + index * 0.06,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ top: chip.top, left: chip.left }}
    >
      <div
        className="float-drift"
        style={{ animationDelay: `-${chip.delay ?? 0}s` }}
      >
        <DarkGlass
          className="rounded-full"
          tint="rgba(255,255,255,0.04)"
          blur={20}
        >
          <div className="flex items-center gap-1.5 px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
            <span className="relative flex size-4 shrink-0 items-center justify-center overflow-hidden rounded-full sm:size-5">
              <Image
                src={chip.logo}
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className="text-[10px] font-medium text-[var(--colors-content-primary)] sm:text-[12px]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {chip.label}
              </span>
              {chip.sub && (
                <span
                  className="mt-0.5 text-[8px] text-[var(--colors-content-tertiary)] sm:text-[9px]"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {chip.sub}
                </span>
              )}
            </span>
          </div>
        </DarkGlass>
      </div>
    </motion.div>
  );
}

export function StepConnectors() {
  return (
    <div className="relative h-full w-full max-w-[820px]">
      {/* Connector lines (decorative) */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 460"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="line-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        {[
          { x: 400, y: 90 },
          { x: 160, y: 138 },
          { x: 624, y: 147 },
          { x: 96, y: 258 },
          { x: 656, y: 258 },
          { x: 320, y: 368 },
          { x: 496, y: 377 },
        ].map((p, i) => (
          <motion.line
            key={i}
            x1={p.x}
            y1={p.y}
            x2={400}
            y2={230}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.45 + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </svg>

      {/* Central hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <span className="aura-breathe absolute left-1/2 top-1/2 -z-[1] size-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,139,130,0.22),transparent_70%)]" />
        <DarkGlass className="rounded-full" tint="rgba(255,255,255,0.04)" blur={20}>
          <div className="flex size-10 items-center justify-center sm:size-14">
            <Share2
              className="size-4 text-[var(--colors-content-primary)] sm:size-5"
              strokeWidth={1.6}
            />
          </div>
        </DarkGlass>
      </motion.div>

      {/* Chips */}
      {CHIPS.map((c, i) => (
        <ChipEl key={c.label} chip={c} index={i} />
      ))}
    </div>
  );
}
