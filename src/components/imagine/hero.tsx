import {
  Plus,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  CornerDownRight,
} from "lucide-react";
import Image from "next/image";
import { TypewriterHero } from "./typewriter-hero";

function PresetRow({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex h-10 w-full cursor-pointer items-center gap-[6px] rounded-lg px-3 py-2 transition-colors hover:bg-white/[0.03]"
    >
      <span className="flex size-8 items-center justify-center rounded-full p-[7px]">
        <CornerDownRight
          className="size-[18px] text-[var(--colors-content-tertiary)]"
          strokeWidth={1.5}
        />
      </span>
      <span className="text-left text-[14px] leading-5 tracking-[0.42px] text-[var(--colors-content-tertiary)]">
        {children}
      </span>
    </button>
  );
}

function Tab({
  active,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={`flex shrink-0 cursor-pointer items-center gap-[6px] rounded-[12px] px-3 py-[6px] text-[14px] font-medium leading-5 tracking-[0.42px] transition-colors ${
        active
          ? "bg-[var(--colors-fill-secondary)] text-[var(--colors-content-primary)]"
          : "border border-[var(--colors-border-secondary)] text-[var(--colors-content-secondary)] hover:bg-[var(--colors-fill-secondary)]"
      }`}
    >
      {children}
    </button>
  );
}

export function Hero() {
  return (
    <main className="flex w-full flex-1 flex-col items-center px-4 pb-8 pt-2">
      <div className="flex w-full max-w-[760px] flex-1 flex-col items-center justify-center py-6">
        <div className="flex w-full flex-col items-center gap-6 sm:gap-8">
          {/* Greeting */}
          <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <div className="relative h-[96px] w-[84px] shrink-0 overflow-hidden sm:h-[128px] sm:w-[112px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 size-full object-contain"
              >
                <source src="/video/bg.webm" type="video/webm" />
              </video>
            </div>

            <TypewriterHero />
          </div>

          {/* Prompt + filters/presets */}
          <div className="flex w-full flex-col items-start gap-4">
            {/* Prompt box */}
            <div className="flex w-full flex-col items-start overflow-hidden rounded-[20px] border border-[var(--colors-border-primary)] bg-[var(--colors-fill-primary-variant)] px-4 py-3 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)]">
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full items-center overflow-hidden py-1 pr-3">
                  <p className="txt-shimmer text-[14px] leading-5 tracking-[0.28px] sm:whitespace-nowrap">
                    Create an image with subtle parallax, slow Ken Burns drift
                    on background
                  </p>
                </div>

                <div className="flex w-full items-center gap-4">
                  <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* + (attach) */}
                      <button
                        type="button"
                        className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-[var(--colors-fill-secondary)] p-[7px] transition-colors hover:bg-[#2a2a2a]"
                      >
                        <Plus
                          className="size-[18px] text-[var(--colors-content-primary)]"
                          strokeWidth={1.5}
                        />
                      </button>

                      {/* Model selector */}
                      <button
                        type="button"
                        className="flex h-8 cursor-pointer items-center justify-center rounded-full px-[10px] py-[6px] transition-colors hover:bg-[var(--colors-fill-secondary)]"
                      >
                        <span className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px]">
                            <Image
                              src="/assets/logo-claude.svg"
                              alt=""
                              width={16}
                              height={16}
                              className="size-4"
                            />
                            <span className="text-[14px] font-medium leading-5 tracking-[0.42px] text-[var(--colors-content-primary)]">
                              Claude
                            </span>
                          </span>
                          <ChevronDown
                            className="size-4 text-[var(--colors-content-primary)]"
                            strokeWidth={1.5}
                          />
                        </span>
                      </button>
                    </div>

                    {/* Ask run */}
                    <button
                      type="button"
                      className="flex h-8 cursor-pointer items-center justify-center rounded-full px-[10px] py-[6px] transition-colors hover:bg-[var(--colors-fill-secondary)]"
                    >
                      <span className="flex items-center gap-[6px]">
                        <span className="text-[14px] font-medium leading-5 tracking-[0.42px] text-[var(--colors-content-primary)]">
                          Ask run
                        </span>
                        <ChevronUp
                          className="size-4 text-[var(--colors-content-primary)]"
                          strokeWidth={1.5}
                        />
                      </span>
                    </button>
                  </div>

                  {/* Send */}
                  <button
                    type="button"
                    className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-[var(--colors-fill-brand)] p-[7px] transition-colors hover:bg-[var(--colors-fill-brand-hover)]"
                  >
                    <ArrowUp
                      className="size-[18px] text-white"
                      strokeWidth={2}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs + presets */}
            <div className="flex w-full flex-col items-start gap-4">
              <div className="-mx-4 flex w-[calc(100%+2rem)] items-start gap-2 overflow-x-auto px-4 sm:mx-0 sm:w-full sm:overflow-visible sm:px-3 [&::-webkit-scrollbar]:hidden">
                <Tab active>Featured</Tab>
                <Tab>Viral Video Formats</Tab>
                <Tab>Video Special Effects</Tab>
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <PresetRow>Design autumn forest with falling leaves</PresetRow>
                <PresetRow>Sketch mountain landscape at sunrise</PresetRow>
                <PresetRow>Create abstract cityscape with neon lights</PresetRow>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
