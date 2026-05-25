"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Moon } from "lucide-react";
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
  theme?: "dark" | "light";
  onToggleTheme?: () => void;
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
  theme = "dark",
  onToggleTheme,
  children,
}: ShellProps) {
  return (
    <MonitorFrame>
      {chromeless ? (
        <>
          {/* Always-visible theme toggle on chromeless scenes (intro) */}
          {onToggleTheme && (
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
              className="absolute right-4 top-4 z-[30] flex size-7 cursor-pointer items-center justify-center rounded-full border border-[var(--colors-border-primary)] bg-transparent text-[var(--colors-content-secondary)] transition-colors hover:bg-[var(--colors-fill-secondary)] hover:text-[var(--colors-content-primary)] sm:right-5 sm:top-5"
            >
              {theme === "light" ? (
                <Moon className="size-3.5" strokeWidth={1.7} />
              ) : (
                <Sun className="size-3.5" strokeWidth={1.7} />
              )}
            </button>
          )}
          <main className="relative z-[10] flex h-full w-full flex-1 items-center justify-center overflow-hidden">
            {children}
          </main>
        </>
      ) : (
        <>
          {/* Top bar */}
          <header className="relative z-[20] flex shrink-0 items-center justify-between px-3 pt-3 sm:px-5 sm:pt-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
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
                className="hidden text-[13px] leading-none text-[var(--colors-content-tertiary)] sm:inline"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Personal computer
              </span>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-1">
              <ProgressDots total={dotCount} current={dotIndex} />
            </div>

            <div className="flex items-center gap-1.5">
              {onToggleTheme && (
                <button
                  type="button"
                  onClick={onToggleTheme}
                  aria-label={
                    theme === "light"
                      ? "Switch to dark mode"
                      : "Switch to light mode"
                  }
                  className="flex size-7 cursor-pointer items-center justify-center rounded-full border border-[var(--colors-border-primary)] bg-transparent text-[var(--colors-content-secondary)] transition-colors hover:bg-[var(--colors-fill-secondary)] hover:text-[var(--colors-content-primary)]"
                >
                  {theme === "light" ? (
                    <Moon className="size-3.5" strokeWidth={1.7} />
                  ) : (
                    <Sun className="size-3.5" strokeWidth={1.7} />
                  )}
                </button>
              )}
              <button
                type="button"
                onClick={onSkip}
                className="btn-stroke btn-stroke-ghost inline-flex h-7 cursor-pointer items-center rounded-full border border-[var(--colors-border-primary)] bg-transparent px-3 text-[12px] font-medium leading-none tracking-[0.1px] text-[var(--colors-content-secondary)] transition-colors hover:bg-[var(--colors-fill-secondary)] hover:text-[var(--colors-content-primary)]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Skip
              </button>
            </div>
          </header>

          {/* Scene viewport */}
          <main className="relative z-[10] flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden px-3 pt-3 sm:px-6 sm:pt-4">
            <div className="mx-auto flex h-full w-full max-w-[1120px] items-center justify-center">
              {children}
            </div>
          </main>

          {/* Caption + CTA */}
          <div className="relative z-[10] flex shrink-0 flex-col items-center gap-3 px-4 pb-4 pt-2 sm:gap-4 sm:px-6 sm:pb-6">
            <motion.div
              key={`${scene}-caption`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25,
              }}
              className="flex flex-col items-center gap-2 text-center sm:gap-3"
            >
              {headline && (
                <h2 className="font-hero text-[18px] font-bold leading-tight tracking-[-0.4px] text-[var(--colors-content-primary)] sm:text-[24px] md:text-[28px]">
                  {headline}
                </h2>
              )}
              {sub && (
                <p
                  className="max-w-[520px] text-[13px] leading-[1.45] tracking-[0.1px] text-[var(--colors-content-tertiary)] sm:text-[16px]"
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
