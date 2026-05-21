"use client";

import { ChevronDown, Clock, Play, Plus, Share2 } from "lucide-react";

function PlayerPill() {
  return (
    <div className="flex items-center justify-center gap-[6px] overflow-hidden rounded-full bg-[#ededed] py-[6px] pl-[6px] pr-3">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0f0f0f] p-[6px]">
        <Play
          className="size-4 fill-white text-white"
          strokeWidth={1.5}
        />
      </div>
      <div className="flex items-center gap-[6px] whitespace-nowrap text-center text-[14px] font-medium leading-5 tracking-[0.42px] text-white">
        <span className="text-[#0f0f0f]">00:00</span>
        <span className="text-[#0f0f0f]">/</span>
        <span className="text-[#0f0f0f]">00:60</span>
      </div>
    </div>
  );
}

function ZoomControls() {
  return (
    <div className="flex flex-1 items-start gap-2">
      <div className="flex flex-1 items-center justify-center overflow-hidden py-[6px]">
        <div className="flex flex-1 items-center rounded-full">
          <div className="h-[6px] flex-1 rounded-l-full bg-[#0f0f0f]" />
          <div className="size-4 rounded-full border-2 border-[#e0e0e0] bg-[#0f0f0f] shadow-[0px_2.5px_5px_0px_rgba(176,175,175,0.16)]" />
          <div className="h-[6px] flex-1 rounded-r-full bg-[#e0e0e0]" />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="flex max-w-[200px] items-center overflow-hidden rounded-[10px] p-1">
          <p className="truncate text-[14px] font-medium leading-5 tracking-[0.42px] text-white">
            100%
          </p>
        </div>
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-[10px] p-[6px]"
        >
          <ChevronDown className="size-4 text-white" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

function ExportButton() {
  return (
    <button
      type="button"
      className="flex h-10 items-center justify-center rounded-[16px] border border-[#e0e0e0] px-3 py-[10px]"
    >
      <div className="flex items-center gap-2">
        <Share2 className="size-[18px] text-white" strokeWidth={1.5} />
        <span className="whitespace-nowrap text-center text-[16px] font-medium leading-5 tracking-[0.32px] text-white">
          Export
        </span>
      </div>
    </button>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1 rounded-[6px] bg-black/40 px-1 backdrop-blur-[6px]">
      <span className="whitespace-nowrap text-[11px] font-medium leading-4 tracking-[0.33px] text-white">
        {children}
      </span>
    </div>
  );
}

function SceneSelectorCard() {
  return (
    <div
      className="flex w-[304.8px] shrink-0 flex-col items-start gap-2 overflow-hidden rounded-[16px] border border-black/50 p-2"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.2) 100%), linear-gradient(90deg, #f7f7f7 0%, #f7f7f7 100%)",
      }}
    >
      <div className="flex w-full items-start gap-2">
        <Badge>Scene 1</Badge>
        <div className="flex flex-1 items-center justify-end gap-1">
          <Badge>Auto</Badge>
          <div className="flex items-center gap-1 rounded-[6px] bg-black/40 px-1 backdrop-blur-[6px]">
            <Clock className="size-3 text-white" strokeWidth={1.5} />
            <span className="whitespace-nowrap text-[11px] font-medium leading-4 tracking-[0.33px] text-white">
              6s
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-1 p-1">
        <p className="flex-1 truncate text-[12px] leading-4 tracking-[0.24px] text-[#0f0f0f]">
          A Cat runs around in the city in an..
        </p>
      </div>
    </div>
  );
}

function AddIconButton() {
  return (
    <div className="flex items-start self-stretch">
      <div className="flex h-full items-center">
        <button
          type="button"
          className="flex h-full w-10 items-center justify-center rounded-[16px] bg-[#e0e0e0] p-[10px]"
        >
          <Plus className="size-5 text-[#0f0f0f]" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

function ShotFrame() {
  return (
    <div className="flex items-center gap-2 self-stretch">
      <div className="flex h-[72px] w-[256.8px] items-center justify-center gap-[6px] overflow-hidden rounded-[20px] bg-[#ededed] px-2 py-1">
        <div className="h-6 w-1 rounded-[32px] bg-[#d1d1d1]" />
        <div className="relative flex h-full flex-1 flex-col items-center gap-2 overflow-hidden rounded-[12px] bg-[#e0e0e0]">
          <div className="flex w-full flex-col items-start whitespace-nowrap p-[6px]">
            <div className="flex h-4 w-full items-center overflow-hidden text-[11px] leading-4 tracking-[0.33px] text-[rgba(15,15,15,0.5)]">
              <span className="truncate">Shot 1</span>
            </div>
            <div className="flex w-full items-start text-[12px] font-medium leading-4 tracking-[0.36px]">
              <p className="flex-1 truncate text-[#0f0f0f]">Auto</p>
              <p className="shrink-0 truncate text-[#525252]">5s</p>
            </div>
          </div>
          {/* Cyan waveform curve */}
          <svg
            viewBox="0 0 240 30"
            className="absolute -bottom-[10px] left-0 right-0 h-[38px] w-full"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="shot-wave-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(78, 198, 224, 0.45)" />
                <stop offset="100%" stopColor="rgba(78, 198, 224, 0)" />
              </linearGradient>
            </defs>
            <path
              d="M0 25 C 40 25, 65 6, 120 5 C 175 4, 200 25, 240 25 L 240 30 L 0 30 Z"
              fill="url(#shot-wave-fill)"
            />
            <path
              d="M0 25 C 40 25, 65 6, 120 5 C 175 4, 200 25, 240 25"
              fill="none"
              stroke="#4ec6e0"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="h-6 w-1 rounded-[32px] bg-[#d1d1d1]" />
      </div>
      <AddIconButton />
    </div>
  );
}

function SeekHead() {
  return (
    <div className="pointer-events-none absolute -left-[10px] -top-2 flex flex-col items-center">
      <div
        className="-mb-2 size-5"
        aria-hidden
        style={{
          backgroundColor: "#ef4444",
          clipPath: "polygon(50% 100%, 0 0, 100% 0)",
        }}
      />
      <div className="h-[148px] w-[1.5px] bg-[#ef4444]" />
    </div>
  );
}

export function TimelineComponents() {
  return (
    <div className="relative flex w-full flex-col items-start gap-6 overflow-hidden rounded-[16px] border border-[#e0e0e0] bg-[rgba(23,23,23,0.9)] px-4 pb-5 pt-4 shadow-[0px_4px_8px_0px_rgba(176,175,175,0.2)]">
      {/* Top row */}
      <div className="relative flex w-full items-center justify-center gap-[87.5px]">
        <PlayerPill />
        <div className="absolute left-[63.36%] right-0 top-0 flex items-center gap-2">
          <ZoomControls />
          <ExportButton />
        </div>
      </div>

      {/* Shots area */}
      <div className="relative flex w-full flex-col items-start gap-3 px-1">
        <SeekHead />
        <div className="flex w-full items-center gap-2 overflow-hidden">
          <SceneSelectorCard />
          <AddIconButton />
        </div>
        <div className="flex w-full items-start gap-0">
          <ShotFrame />
        </div>
      </div>
    </div>
  );
}
