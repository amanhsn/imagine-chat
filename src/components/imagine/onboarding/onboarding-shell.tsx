"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { MonitorFrame } from "./monitor-frame";
import { ProgressDots } from "./progress-dots";

type ShellProps = {
  /** 0-indexed scene number, including intro at 0 */
  scene: number;
  /** Total dot count (excludes intro) */
  dotCount: number;
  /** Currently active dot index (0-based) or -1 to suppress highlight */
  dotIndex: number;
  headline?: string;
  sub?: string;
  ctaLabel?: string;
  onContinue: () => void;
  onSkip: () => void;
  /** When true, the scene is rendered full-bleed without any top/bottom chrome */
  chromeless?: boolean;
  children: ReactNode;
};

export function OnboardingShell({
  scene,
  dotCount,
  dotIndex,
  headline,
  sub,
  ctaLabel,
  onContinue,
  onSkip,
  chromeless = false,
  children,
}: ShellProps) {
  return (
    <MonitorFrame>
      {chromeless ? (
        <main className="relative z-[10] flex h-full w-full flex-1 items-center justify-center overflow-hidden">
          {children}
        </main>
      ) : (
        <>
          {/* Top bar */}
          <header className="relative z-[20] flex shrink-0 items-center justify-between px-5 pt-4">
            <div className="flex items-center gap-2">
              <span className="flex size-5 items-center justify-center">
                <Image
                  src="/assets/logo-imagine.svg"
                  alt="Imagine"
                  width={18}
                  height={18}
                  priority
                />
              </span>
              <span
                className="text-[13px] font-semibold leading-none tracking-[-0.1px] text-[var(--colors-content-primary)]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Imagine
              </span>
              <span
                className="text-[13px] leading-none text-[var(--colors-content-tertiary)]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Personal computer
              </span>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-1">
              <ProgressDots total={dotCount} current={dotIndex} />
            </div>

            <button
              type="button"
              onClick={onSkip}
              className="btn-stroke btn-stroke-ghost inline-flex h-7 cursor-pointer items-center rounded-full border border-[var(--colors-border-primary)] bg-transparent px-3 text-[12px] font-medium leading-none tracking-[0.1px] text-[var(--colors-content-secondary)] transition-colors hover:bg-[var(--colors-fill-secondary)] hover:text-[var(--colors-content-primary)]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Skip
            </button>
          </header>

          {/* Scene viewport */}
          <main className="relative z-[10] flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden px-6 pt-4">
            <div className="mx-auto flex h-full w-full max-w-[1120px] items-center justify-center">
              {children}
            </div>
          </main>

          {/* Caption + CTA */}
          <div className="relative z-[10] flex shrink-0 flex-col items-center gap-4 px-6 pb-6 pt-2">
            <motion.div
              key={`${scene}-caption`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25,
              }}
              className="flex flex-col items-center gap-3 text-center"
            >
              {headline && (
                <h2 className="font-hero text-[24px] font-bold leading-tight tracking-[-0.5px] text-[var(--colors-content-primary)] sm:text-[28px]">
                  {headline}
                </h2>
              )}
              {sub && (
                <p
                  className="max-w-[520px] text-[16px] leading-[1.45] tracking-[0.1px] text-[var(--colors-content-tertiary)]"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {sub}
                </p>
              )}
            </motion.div>

            <motion.button
              key={`${scene}-cta`}
              type="button"
              onClick={onContinue}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.35,
              }}
              className="btn-stroke group relative inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[var(--colors-content-primary)] px-5 text-[13px] font-medium leading-5 tracking-[0.32px] text-[var(--colors-background)] shadow-[0_10px_28px_rgba(255,255,255,0.12)] transition-transform hover:-translate-y-px"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              {ctaLabel ?? "Continue"}
              <ArrowRight className="size-[14px]" strokeWidth={2.5} />
            </motion.button>
          </div>
        </>
      )}
    </MonitorFrame>
  );
}
