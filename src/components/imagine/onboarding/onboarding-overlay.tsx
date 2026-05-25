"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useFirstVisit } from "./use-first-visit";
import { OnboardingBackdrop } from "./onboarding-backdrop";
import { OnboardingShell } from "./onboarding-shell";
import { GlassFilter } from "@/components/ui/liquid-glass";
import { SceneIntro } from "./steps/scene-intro";
import { StepUseCases } from "./steps/step-use-cases";
import { StepSkills } from "./steps/step-skills";
import { StepConnectors } from "./steps/step-connectors";
import { StepMultimodal } from "./steps/step-multimodal";

type SceneMeta = {
  chromeless?: boolean;
  glowOrigin?: "center" | "top-right";
  headline?: string;
  sub?: string;
  ctaLabel?: string;
  Scene: React.ComponentType<{ onContinue: () => void }>;
};

const SCENES: SceneMeta[] = [
  {
    chromeless: true,
    glowOrigin: "center",
    Scene: SceneIntro,
  },
  {
    glowOrigin: "top-right",
    headline: "Skip the production house.",
    sub: "Films, brands, music, motion — pitched in a sentence.",
    ctaLabel: "Continue",
    Scene: StepUseCases,
  },
  {
    glowOrigin: "top-right",
    headline: "Pick a style. It picks up yours.",
    sub: "A library of skills that learn your taste, prompt by prompt.",
    ctaLabel: "Continue",
    Scene: StepSkills,
  },
  {
    glowOrigin: "top-right",
    headline: "Lives where your work already does.",
    sub: "Pulls from Notion. Pushes to Figma. Lands in Slack.",
    ctaLabel: "Continue",
    Scene: StepConnectors,
  },
  {
    glowOrigin: "center",
    headline: "One brief. Any format you need.",
    sub: "Audio, video, image — generated together, from a single sentence.",
    ctaLabel: "Get started",
    Scene: StepMultimodal,
  },
];

const TOTAL_SCENES = SCENES.length;
const DOT_COUNT = TOTAL_SCENES - 1; // intro excluded

export function OnboardingOverlay() {
  const { open, ready, dismiss } = useFirstVisit();
  const [scene, setScene] = useState(0);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  const next = useCallback(() => {
    setScene((s) => (s < TOTAL_SCENES - 1 ? s + 1 : s));
  }, []);

  const prev = useCallback(() => {
    setScene((s) => (s > 0 ? s - 1 : s));
  }, []);

  const complete = useCallback(() => {
    dismiss();
  }, [dismiss]);

  const onContinue = useCallback(() => {
    if (scene === TOTAL_SCENES - 1) {
      complete();
    } else {
      next();
    }
  }, [scene, complete, next]);

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

  const meta = SCENES[scene]!;
  const Scene = meta.Scene;
  // Intro is scene 0 → dotIndex = -1 (no highlight). Steps 1..4 → dotIndex 0..3
  const dotIndex = scene === 0 ? -1 : scene - 1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="onboarding-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          data-theme={theme}
          className="fixed inset-0 z-[100] overflow-hidden bg-[var(--colors-background)] text-[var(--colors-content-primary)]"
        >
          <GlassFilter />
          <OnboardingBackdrop origin={meta.glowOrigin ?? "center"} />

          <div className="relative z-[1] flex h-full w-full flex-col">
            <OnboardingShell
              scene={scene}
              dotCount={DOT_COUNT}
              dotIndex={dotIndex}
              headline={meta.headline}
              sub={meta.sub}
              ctaLabel={meta.ctaLabel}
              onContinue={onContinue}
              onSkip={complete}
              chromeless={meta.chromeless}
              theme={theme}
              onToggleTheme={toggleTheme}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={scene}
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
