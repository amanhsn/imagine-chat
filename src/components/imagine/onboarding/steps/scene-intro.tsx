"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function SceneIntro({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Aurora glow — fades in after the wordmark settles */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(242,139,130,0.22), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-[1] flex flex-col items-center gap-4">
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] font-medium uppercase tracking-[3px] text-[var(--colors-content-tertiary)]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Welcome to
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex items-center gap-2.5"
        >
          <span className="relative flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full sm:size-9">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="size-full object-cover"
            >
              <source src="/video/personal-computer.webm" type="video/webm" />
            </video>
          </span>
          <span
            className="text-[18px] font-semibold leading-none tracking-[-0.3px] text-[var(--colors-content-primary)] sm:text-[22px] md:text-[24px]"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Personal Computer
          </span>
        </motion.div>

        <motion.button
          type="button"
          onClick={onContinue}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          className="btn-stroke group mt-3 inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[var(--colors-content-primary)] px-5 text-[13px] font-medium tracking-[0.32px] text-[var(--colors-background)] shadow-[0_10px_28px_rgba(255,255,255,0.12)] transition-transform hover:-translate-y-px"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Continue
          <ChevronRight className="size-[14px]" strokeWidth={2.5} />
        </motion.button>
      </div>
    </div>
  );
}
