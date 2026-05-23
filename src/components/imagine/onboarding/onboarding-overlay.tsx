"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useFirstVisit } from "./use-first-visit";
import { OnboardingBackdrop } from "./onboarding-backdrop";
import { OnboardingShell } from "./onboarding-shell";
import { StepUseCases } from "./steps/step-use-cases";
import { StepSystem } from "./steps/step-system";
import { StepHermesModels } from "./steps/step-hermes-models";
import { StepCreate } from "./steps/step-create";

const TOTAL = 4;

type StepMeta = {
  headline: string;
  sub: string;
  ctaLabel: string;
  Scene: React.ComponentType<{ onContinue: () => void }>;
};

const STEPS: StepMeta[] = [
  {
    headline: "Imagine builds anything",
    sub: "Apps, films, brands, music — described in one chat.",
    ctaLabel: "Continue",
    Scene: StepUseCases,
  },
  {
    headline: "The system behind every chat",
    sub: "Skills, connectors, and memory that grow with you.",
    ctaLabel: "Continue",
    Scene: StepSystem,
  },
  {
    headline: "Meet HERMES",
    sub: "Your agent — on every frontier model.",
    ctaLabel: "Continue",
    Scene: StepHermesModels,
  },
  {
    headline: "Create images, music, and voice",
    sub: "from a single prompt, in a single chat.",
    ctaLabel: "Get started",
    Scene: StepCreate,
  },
];

export function OnboardingOverlay() {
  const { open, ready, dismiss } = useFirstVisit();
  const [step, setStep] = useState(0);

  const next = useCallback(() => {
    setStep((s) => (s < TOTAL - 1 ? s + 1 : s));
  }, []);

  const prev = useCallback(() => {
    setStep((s) => (s > 0 ? s - 1 : s));
  }, []);

  const complete = useCallback(() => {
    dismiss();
  }, [dismiss]);

  const onContinue = useCallback(() => {
    if (step === TOTAL - 1) {
      complete();
    } else {
      next();
    }
  }, [step, complete, next]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        complete();
      } else if (e.key === "Enter") {
        e.preventDefault();
        onContinue();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, complete, next, prev, onContinue]);

  if (!ready) return null;

  const meta = STEPS[step]!;
  const Scene = meta.Scene;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="onboarding-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] overflow-hidden"
        >
          <OnboardingBackdrop />

          <div className="relative z-[1] flex h-full w-full flex-col">
            <OnboardingShell
              step={step}
              total={TOTAL}
              headline={meta.headline}
              sub={meta.sub}
              ctaLabel={meta.ctaLabel}
              onContinue={onContinue}
              onSkip={complete}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex h-full w-full items-center justify-center"
                >
                  <Scene onContinue={onContinue} />
                </motion.div>
              </AnimatePresence>
            </OnboardingShell>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
