"use client";

import { useEffect, useState } from "react";

const GREETING = "Hello, Saad";

const PROMPTS = [
  "What are we creating today?",
  "What are we dreaming up today?",
  "What are we building today?",
  "What story shall we tell today?",
  "What world are we making today?",
  "What shall we imagine today?",
  "What will we bring to life today?",
  "What scene shall we craft today?",
  "What vision are we shaping today?",
  "What spark shall we chase today?",
  "What are we designing today?",
  "What shall we make magical today?",
  "What are we conjuring today?",
  "What journey are we starting today?",
  "What's coming alive today?",
] as const;

const TYPE_MS = 55;
const ERASE_MS = 28;
const HOLD_AFTER_TYPE_MS = 2200;
const PAUSE_BETWEEN_LINES_MS = 450;
const START_DELAY_MS = 200;

function pickNext(currentIndex: number) {
  if (PROMPTS.length <= 1) return 0;
  let next = Math.floor(Math.random() * PROMPTS.length);
  while (next === currentIndex) {
    next = Math.floor(Math.random() * PROMPTS.length);
  }
  return next;
}

export function TypewriterHero() {
  const [greeting, setGreeting] = useState("");
  const [prompt, setPrompt] = useState("");
  const [phase, setPhase] = useState<
    "idle" | "typing-greeting" | "typing-prompt" | "holding" | "erasing"
  >("idle");
  const [promptIndex, setPromptIndex] = useState<number>(() =>
    Math.floor(Math.random() * PROMPTS.length),
  );

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (fn: () => void, ms: number) => {
      timers.push(setTimeout(fn, ms));
    };

    // Step 1: type greeting once
    const typeGreeting = () => {
      setPhase("typing-greeting");
      let i = 0;
      const tick = () => {
        if (cancelled) return;
        i += 1;
        setGreeting(GREETING.slice(0, i));
        if (i < GREETING.length) at(tick, TYPE_MS);
        else at(startPromptCycle, PAUSE_BETWEEN_LINES_MS);
      };
      at(tick, TYPE_MS);
    };

    const startPromptCycle = () => {
      typePrompt(promptIndex);
    };

    const typePrompt = (index: number) => {
      if (cancelled) return;
      setPhase("typing-prompt");
      const target = PROMPTS[index];
      let i = 0;
      const tick = () => {
        if (cancelled) return;
        i += 1;
        setPrompt(target.slice(0, i));
        if (i < target.length) at(tick, TYPE_MS);
        else at(() => holdThenErase(index), HOLD_AFTER_TYPE_MS);
      };
      at(tick, TYPE_MS);
    };

    const holdThenErase = (index: number) => {
      if (cancelled) return;
      setPhase("holding");
      const target = PROMPTS[index];
      let i = target.length;
      const tick = () => {
        if (cancelled) return;
        i -= 1;
        setPhase("erasing");
        setPrompt(target.slice(0, i));
        if (i > 0) at(tick, ERASE_MS);
        else {
          const next = pickNext(index);
          setPromptIndex(next);
          at(() => typePrompt(next), 250);
        }
      };
      at(tick, ERASE_MS);
    };

    at(typeGreeting, START_DELAY_MS);

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
    // run-once loop driver
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showGreetingCaret = phase === "typing-greeting";
  const showPromptCaret =
    phase === "typing-prompt" ||
    phase === "holding" ||
    phase === "erasing";

  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-2 sm:items-start">
      <div className="flex w-full items-center justify-center sm:pl-2">
        <h1 className="font-hero flex-1 text-center text-[24px] font-normal leading-8 tracking-[-1.5px] text-[var(--colors-content-primary)] sm:text-left sm:text-[32px] sm:leading-10 sm:tracking-[-2.56px]">
          <span>{greeting}</span>
          {showGreetingCaret && (
            <span className="typewriter-caret" aria-hidden="true" />
          )}
          {greeting === "" && <span className="opacity-0">&nbsp;</span>}
        </h1>
      </div>
      <div className="flex w-full items-center justify-center sm:pl-2">
        <h2 className="font-hero flex-1 text-center text-[24px] font-normal leading-8 tracking-[-1.5px] text-[var(--colors-content-primary)] sm:text-left sm:text-[32px] sm:leading-10 sm:tracking-[-2.56px]">
          <span>{prompt}</span>
          {showPromptCaret && (
            <span className="typewriter-caret" aria-hidden="true" />
          )}
          {prompt === "" && <span className="opacity-0">&nbsp;</span>}
        </h2>
      </div>
    </div>
  );
}
