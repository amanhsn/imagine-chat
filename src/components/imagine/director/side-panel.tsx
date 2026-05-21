"use client";

import {
  AtSign,
  ChevronDown,
  ChevronUp,
  Clock,
  Diamond,
  Frame as FrameIcon,
  Image as ImageIcon,
  Info,
  MapPin,
  Plus,
  User,
  Glasses,
} from "lucide-react";

type SidePanelTab = "Image" | "Create video" | "Edit video" | "Extend";

function Tab({ label, active }: { label: SidePanelTab; active?: boolean }) {
  return (
    <div className="flex h-10 shrink-0 flex-col items-center justify-center">
      <div className="flex h-full items-center justify-center px-1">
        <span
          className={`whitespace-nowrap text-center text-[14px] font-medium leading-5 tracking-[0.42px] ${
            active ? "text-white" : "text-white/50"
          }`}
        >
          {label}
        </span>
      </div>
      {active ? (
        <div className="h-[2px] w-full rounded-full bg-white" />
      ) : null}
    </div>
  );
}

function PresetsBanner() {
  return (
    <div className="relative flex h-[120px] w-full shrink-0 flex-col items-end justify-end overflow-hidden rounded-[16px] border border-[#3d3d3d] p-2">
      <div
        aria-hidden
        className="absolute inset-0 rounded-[16px]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #4a5d3a 0%, #2f3a26 60%, #1b2218 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-[rgba(67,67,67,0)] to-[rgba(0,0,0,0.5)]"
      />
      <div className="relative z-10 flex w-full flex-col items-start gap-2 pl-1">
        <div className="flex w-full items-end gap-[10px]">
          <div className="flex flex-1 flex-col items-start py-1">
            <p className="w-full text-[14px] leading-5 tracking-[0.42px] text-white">
              Create video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SegmentedControl() {
  return (
    <div className="flex w-full shrink-0 items-center justify-center gap-1 overflow-hidden rounded-[12px] bg-[var(--colors-fill-secondary)] p-[3px]">
      <div className="flex h-[26px] flex-1 items-center justify-center gap-1 rounded-[10px] bg-[#2e2e2e] px-[10px] py-1">
        <FrameIcon className="size-[14px] text-white" strokeWidth={1.5} />
        <span className="whitespace-nowrap text-center text-[12px] font-medium leading-4 tracking-[0.36px] text-white">
          Frames
        </span>
      </div>
      <div className="flex h-[26px] flex-1 items-center justify-center gap-1 rounded-[10px] px-[10px] py-1">
        <AtSign className="size-[14px] text-white/50" strokeWidth={1.5} />
        <span className="whitespace-nowrap text-center text-[12px] font-medium leading-4 tracking-[0.36px] text-white/50">
          References
        </span>
      </div>
    </div>
  );
}

function UploadCard({
  label,
  disabled,
}: {
  label: string;
  disabled?: boolean;
}) {
  return (
    <div
      className={`flex h-[124px] shrink-0 flex-1 flex-col items-center justify-center gap-1 overflow-hidden rounded-[16px] border-[1.5px] border-dashed p-4 ${
        disabled
          ? "border-[rgba(46,46,46,0.3)] bg-[rgba(33,33,33,0.3)]"
          : "border-[#2e2e2e] bg-[var(--colors-fill-secondary)]"
      }`}
    >
      <div className="flex w-full flex-col items-center gap-2 px-2">
        <div className={`flex items-start ${disabled ? "opacity-30" : ""}`}>
          <div className="relative flex size-8 flex-col items-center justify-center rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] border border-[#3d3d3d] bg-[var(--colors-fill-secondary)] shadow-[inset_0px_0px_4px_0px_rgba(0,0,0,0.15)]">
            <ImageIcon className="size-[18px] text-white" strokeWidth={1.5} />
          </div>
        </div>
        <p
          className={`w-full text-center text-[14px] font-medium leading-5 tracking-[0.42px] ${
            disabled ? "text-[rgba(189,189,189,0.3)]" : "text-[#bdbdbd]"
          }`}
        >
          {label}
        </p>
        <div className="flex items-center gap-[6px]">
          <span
            className={`whitespace-nowrap text-center text-[11px] leading-4 tracking-[0.33px] ${
              disabled ? "text-white/30" : "text-white/50"
            }`}
          >
            or
          </span>
          <button
            type="button"
            className={`flex h-6 items-center justify-center rounded-[10px] border px-2 py-[6px] ${
              disabled
                ? "cursor-not-allowed border-[rgba(46,46,46,0.3)]"
                : "border-[#2e2e2e]"
            }`}
            disabled={disabled}
          >
            <span
              className={`whitespace-nowrap text-center text-[11px] font-medium leading-4 tracking-[0.33px] ${
                disabled ? "text-[rgba(189,189,189,0.3)]" : "text-[#bdbdbd]"
              }`}
            >
              Select
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function MultiShotToggle() {
  return (
    <div className="flex w-full shrink-0 items-center gap-[10px] rounded-[16px] border border-[#2e2e2e] p-3">
      <div className="flex flex-1 items-center gap-1">
        <p className="whitespace-nowrap text-[14px] leading-5 tracking-[0.42px] text-white">
          Multi-shot
        </p>
        <Info className="size-4 text-white/60" strokeWidth={1.5} />
      </div>
      <button
        type="button"
        className="flex h-5 w-10 items-center rounded-[14px] bg-[#2e2e2e] px-[2px]"
      >
        <div className="size-4 rounded-[8.889px] bg-[var(--colors-fill-primary-variant)]" />
      </button>
    </div>
  );
}

function PromptArea() {
  return (
    <div className="flex h-40 w-full shrink-0 flex-col items-start gap-2 rounded-[16px] border border-[#2e2e2e] bg-[var(--colors-fill-secondary)] p-3">
      <div className="relative flex w-full max-h-[200px] flex-1 flex-col items-start gap-1">
        <p className="w-full text-[14px] font-medium leading-5 tracking-[0.42px] text-white">
          Prompt
        </p>
        <p className="w-full flex-1 text-[14px] leading-5 tracking-[0.28px] text-white/50">
          Describe the scene...
        </p>
      </div>
      <div className="flex w-full items-center gap-2">
        <div className="flex flex-1 items-center gap-2">
          <button
            type="button"
            className="flex h-7 items-center justify-center gap-1 rounded-[10px] border border-[#2e2e2e] px-2 py-[6px]"
          >
            <Plus className="size-[14px] text-white" strokeWidth={1.5} />
            <span className="whitespace-nowrap text-center text-[12px] font-medium leading-4 tracking-[0.36px] text-white">
              Add media
            </span>
          </button>
          <button
            type="button"
            className="flex h-7 items-center justify-center gap-1 rounded-[10px] border border-[#2e2e2e] px-2 py-[6px]"
          >
            <AtSign className="size-[14px] text-white" strokeWidth={1.5} />
            <span className="whitespace-nowrap text-center text-[12px] font-medium leading-4 tracking-[0.36px] text-white">
              Elements
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function PillButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex h-8 shrink-0 flex-1 items-center justify-center gap-[6px] rounded-[12px] bg-[#2e2e2e] px-[10px] py-[6px]">
      {icon}
      <span className="whitespace-nowrap text-center text-[14px] font-medium leading-5 tracking-[0.42px] text-white">
        {label}
      </span>
    </div>
  );
}

function ListItem({
  thumb,
  meta,
  value,
}: {
  thumb: React.ReactNode;
  meta: string;
  value: string;
}) {
  return (
    <div className="flex h-[52px] w-full shrink-0 items-center rounded-[12px] border border-[#2e2e2e] bg-[var(--colors-fill-secondary)]">
      <div className="flex flex-1 items-center gap-1 self-stretch p-2">
        <div className="relative aspect-square h-full shrink-0 overflow-hidden rounded-[8px] border border-[#2e2e2e]">
          {thumb}
        </div>
        <div className="flex flex-1 flex-col items-start pl-1">
          <div className="flex h-4 w-full items-center overflow-hidden text-[12px] leading-4 tracking-[0.24px] text-white/50">
            <span className="truncate">{meta}</span>
          </div>
          <p className="h-5 w-full truncate text-[14px] leading-5 tracking-[0.42px] text-white">
            {value}
          </p>
        </div>
      </div>
      <div className="h-full w-px self-stretch bg-[#2e2e2e]" />
      <div className="flex flex-col items-center justify-between self-stretch">
        <div className="flex flex-1 items-center justify-center px-2">
          <ChevronUp className="size-3 text-white/70" strokeWidth={1.5} />
        </div>
        <div className="h-px w-full bg-[#2e2e2e]" />
        <div className="flex flex-1 items-center justify-center px-2">
          <ChevronDown className="size-3 text-white/70" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

function Speedramp() {
  return (
    <div className="flex w-full shrink-0 flex-col items-start rounded-[16px] border border-[#2e2e2e] bg-[var(--colors-fill-secondary)] pb-2">
      <div className="flex w-full items-center justify-between px-3 py-2">
        <div className="flex flex-1 items-center gap-1">
          <p className="whitespace-nowrap text-[14px] leading-5 tracking-[0.42px] text-white">
            Speedramp
          </p>
          <Info className="size-4 text-white/60" strokeWidth={1.5} />
        </div>
        <button
          type="button"
          className="flex h-7 items-center justify-center gap-1 rounded-[10px] border border-[#2e2e2e] px-2 py-[6px]"
        >
          <span className="whitespace-nowrap text-center text-[12px] font-medium leading-4 tracking-[0.36px] text-white">
            Linear
          </span>
          <ChevronDown className="size-[14px] text-white" strokeWidth={1.5} />
        </button>
      </div>
      <div className="h-px w-full bg-[#2e2e2e]" />
      {/* Waveform-style ramp curve */}
      <div className="relative h-[74px] w-full px-3">
        <svg
          viewBox="0 0 304 60"
          className="h-full w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient
              id="speedramp-fill"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="rgba(78, 198, 224, 0.35)" />
              <stop offset="100%" stopColor="rgba(78, 198, 224, 0)" />
            </linearGradient>
          </defs>
          <path
            d="M0 50 C 50 50, 80 18, 152 14 C 224 10, 254 50, 304 50 L 304 60 L 0 60 Z"
            fill="url(#speedramp-fill)"
          />
          <path
            d="M0 50 C 50 50, 80 18, 152 14 C 224 10, 254 50, 304 50"
            fill="none"
            stroke="#4ec6e0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function InputCard({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex h-[104px] shrink-0 flex-1 flex-col items-center justify-center gap-2 overflow-hidden rounded-[16px] border border-[#2e2e2e] p-2">
      <div className="flex size-20 flex-col items-center justify-center gap-[6px] overflow-hidden rounded-[8px] border border-[var(--colors-border-primary)] bg-[var(--colors-fill-secondary)]">
        {icon}
        <span className="truncate text-center text-[12px] leading-4 tracking-[0.24px] text-white/50">
          {label}
        </span>
      </div>
    </div>
  );
}

function GenerateButton() {
  return (
    <button
      type="button"
      className="relative flex h-12 w-full items-center justify-center gap-2 rounded-[18px] px-6 pb-1"
      style={{
        background:
          "radial-gradient(80% 100% at 50% 50%, #8a3ffc 0%, #8a3ffc 60%, #a46afe 80%, #be95ff 100%)",
        boxShadow:
          "0px 12px 12px rgba(138, 63, 252, 0.15), 0px 6px 6px rgba(138, 63, 252, 0.15), inset 0px -4px 0px #491d8b",
      }}
    >
      <span className="text-[18px] font-medium leading-normal tracking-[0.18px] text-white">
        Generate
      </span>
    </button>
  );
}

export function CreateVideoSidePanel() {
  return (
    <div className="flex items-center pb-4 pl-2 pt-2">
      <div className="flex h-[916px] w-[360px] flex-col items-start overflow-hidden rounded-[24px] border border-[var(--colors-border-primary)] bg-[rgba(23,23,23,0.9)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.16)]">
        {/* Tabs */}
        <div className="flex w-full shrink-0 items-center justify-center gap-3 border-b border-[#2e2e2e] px-4 pt-4">
          <div className="flex flex-1 items-center self-stretch">
            <div className="flex h-full flex-1 items-center gap-3 pt-1">
              <Tab label="Image" />
              <Tab label="Create video" active />
              <Tab label="Edit video" />
              <Tab label="Extend" />
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex w-full flex-1 flex-col items-center gap-4 overflow-y-auto p-4 [&::-webkit-scrollbar]:hidden">
          <PresetsBanner />
          <SegmentedControl />
          <div className="flex w-full shrink-0 items-stretch justify-center gap-2">
            <UploadCard label="Start Frame" />
            <UploadCard label="End Frame" disabled />
          </div>
          <div className="flex w-full shrink-0 flex-col items-start gap-[6px]">
            <MultiShotToggle />
            <PromptArea />
          </div>
          <div className="flex w-full shrink-0 items-center gap-[5px]">
            <PillButton
              icon={<Clock className="size-4 text-white" strokeWidth={1.5} />}
              label="5s"
            />
            <PillButton
              icon={
                <div className="flex size-4 items-center justify-center">
                  <div className="h-[7px] w-[13px] rounded-[2px] border border-white" />
                </div>
              }
              label="16:9"
            />
            <PillButton
              icon={<Diamond className="size-4 text-white" strokeWidth={1.5} />}
              label="4K"
            />
          </div>
          <ListItem
            thumb={
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#5b3df0] to-[#241b6b] text-base">
                🎭
              </div>
            }
            meta="Genre"
            value="Comedy"
          />
          <ListItem
            thumb={
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#3a5d7a] to-[#1b2a3a] text-base">
                🎥
              </div>
            }
            meta="Movement"
            value="Auto"
          />
          <Speedramp />
          <div className="flex w-full shrink-0 flex-col items-start gap-2">
            <div className="flex items-center gap-0">
              <p className="whitespace-nowrap text-[12px] leading-4 tracking-[0.24px] text-white">
                Add input
              </p>
            </div>
            <div className="flex w-full items-start gap-2">
              <InputCard
                icon={
                  <User className="size-[18px] text-white/60" strokeWidth={1.5} />
                }
                label="Character"
              />
              <InputCard
                icon={
                  <MapPin className="size-[18px] text-white/60" strokeWidth={1.5} />
                }
                label="Location"
              />
              <InputCard
                icon={
                  <Glasses
                    className="size-[18px] text-white/60"
                    strokeWidth={1.5}
                  />
                }
                label="Props"
              />
            </div>
          </div>
        </div>

        {/* Footer (Generate) */}
        <div className="flex w-full shrink-0 flex-col items-center gap-2 px-4 pb-4 pt-3">
          <GenerateButton />
          <p className="w-full text-center text-[11px] leading-4 tracking-[0.33px] text-[rgba(212,187,255,0.5)]">
            Exclusive ImagineArt Early Access - Longer Wait Times
          </p>
        </div>
      </div>
    </div>
  );
}
