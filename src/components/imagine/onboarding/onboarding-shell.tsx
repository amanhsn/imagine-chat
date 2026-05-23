"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { MonitorFrame } from "./monitor-frame";
import { ProgressBar } from "./progress-bar";

type ShellProps = {
  step: number;
  total: number;
  headline: string;
  sub: string;
  ctaLabel: string;
  onContinue: () => void;
  onSkip: () => void;
  ctaSlot?: ReactNode;
  children: ReactNode;
};

export function OnboardingShell({
  step,
  total,
  headline,
  sub,
  ctaLabel,
  onContinue,
  onSkip,
  ctaSlot,
  children,
}: ShellProps) {
  return (
    <MonitorFrame>
      {/* Floating Skip — unobtrusive top-right */}
      <button
        type="button"
        onClick={onSkip}
        aria-label="Skip onboarding"
        className="absolute right-5 top-5 z-[30] flex size-7 cursor-pointer items-center justify-center rounded-full text-[var(--colors-content-tertiary)] transition-colors hover:bg-white/[0.06] hover:text-[var(--colors-content-primary)]"
      >
        <X className="size-4" strokeWidth={1.5} />
      </button>

      {/* Scene viewport */}
      <main className="relative z-[10] flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden px-6 pt-10">
        <div className="mx-auto flex h-full w-full max-w-[1120px] items-center justify-center">
          {children}
        </div>
      </main>

      {/* Caption + CTA */}
      <div className="relative z-[10] flex shrink-0 flex-col items-center gap-4 px-6 pb-5 pt-1">
        <motion.div
          key={`${step}-caption`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="flex flex-col items-center gap-0.5 text-center"
        >
          <h2 className="font-hero text-[22px] font-bold leading-tight tracking-[-0.5px] text-[var(--colors-content-primary)] sm:text-[26px]">
            {headline}
          </h2>
          <p
            className="max-w-[460px] text-[13px] leading-5 tracking-[0.2px] text-[var(--colors-content-tertiary)]"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {sub}
          </p>
        </motion.div>

        {ctaSlot ? (
          ctaSlot
        ) : (
          <motion.button
            key={`${step}-cta`}
            type="button"
            onClick={onContinue}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="group relative inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[var(--colors-fill-brand)] px-5 text-[13px] font-medium leading-5 tracking-[0.32px] text-white shadow-[0_8px_28px_rgba(138,63,252,0.45)] transition-colors hover:bg-[var(--colors-fill-brand-hover)]"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {ctaLabel}
            <ArrowRight className="size-[14px]" strokeWidth={2} />
          </motion.button>
        )}

        {/* Subtle stepper, bottom-center, no labels */}
        <div className="mt-1 flex items-center justify-center">
          <ProgressBar total={total} current={step} />
        </div>
      </div>
    </MonitorFrame>
  );
}
