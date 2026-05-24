import {
  Folders,
  ChevronDown,
  Search,
  Sparkles,
  MessageSquare,
  Bell,
} from "lucide-react";
import Image from "next/image";

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[12px] p-[7px] transition-colors hover:bg-[var(--colors-fill-secondary)]"
    >
      {children}
    </button>
  );
}

export function TopNav() {
  return (
    <header className="flex h-16 w-full shrink-0 items-start gap-2 px-4 pb-1 pt-4">
      {/* Left cluster */}
      <div className="flex min-w-0 items-center justify-center gap-2">
        {/* All creations dropdown (disabled state) */}
        <button
          type="button"
          disabled
          className="hidden h-8 cursor-not-allowed items-center justify-center rounded-[12px] bg-[var(--colors-fill-secondary-disabled)] px-[10px] py-[6px] md:flex"
        >
          <span className="flex items-center gap-[6px]">
            <span className="flex items-center gap-[6px]">
              <Folders
                className="size-4 text-[var(--colors-content-primary-disabled)]"
                strokeWidth={1.5}
              />
              <span className="text-[14px] font-medium leading-5 tracking-[0.42px] text-[var(--colors-content-primary-disabled)]">
                All creations
              </span>
            </span>
            <ChevronDown
              className="size-4 text-[var(--colors-content-primary-disabled)]"
              strokeWidth={1.5}
            />
          </span>
        </button>

        {/* vertical separator */}
        <span className="hidden h-4 w-px rounded-full bg-[var(--colors-fill-secondary)] md:block" />

        {/* File name input */}
        <div className="flex max-w-[200px] items-center overflow-hidden rounded-[10px] px-2 py-1">
          <p className="max-w-[122px] truncate text-[14px] font-medium leading-5 tracking-[0.42px] text-[var(--colors-content-primary)]">
            Untitled Personal Computer
          </p>
        </div>
      </div>

      {/* Right cluster */}
      <div className="flex flex-1 items-center justify-end gap-2 pl-2 pr-1">
        <div className="flex items-center gap-2 pl-2">
          <IconButton>
            <Search
              className="size-[18px] text-[var(--colors-content-primary)]"
              strokeWidth={1.5}
            />
          </IconButton>

          {/* Upgrade */}
          <button
            type="button"
            className="flex h-8 cursor-pointer items-center justify-center rounded-[12px] bg-[var(--colors-fill-brand-secondary)] px-[10px] py-[6px] transition-colors hover:bg-[rgba(105,41,196,0.45)]"
          >
            <span className="flex items-center gap-[6px]">
              <Sparkles
                className="size-4 text-[var(--colors-border-brand-hover)]"
                strokeWidth={1.5}
                fill="currentColor"
              />
              <span className="text-[14px] font-medium leading-5 tracking-[0.42px] text-[var(--colors-border-brand-hover)]">
                Upgrade
              </span>
            </span>
          </button>

          {/* Personal team selector */}
          <button
            type="button"
            className="hidden h-8 cursor-pointer items-center justify-center rounded-[12px] border border-[var(--colors-border-secondary)] px-[10px] py-[6px] transition-colors hover:bg-[var(--colors-fill-secondary)] md:flex"
          >
            <span className="flex items-center gap-[6px]">
              <span className="flex items-center gap-[6px]">
                <span className="size-4 overflow-hidden rounded-[4px]">
                  <Image
                    src="/assets/team-personal.png"
                    alt=""
                    width={16}
                    height={16}
                    className="size-full rounded-[70px] object-cover"
                  />
                </span>
                <span className="text-[14px] font-medium leading-5 tracking-[0.42px] text-[var(--colors-content-primary)]">
                  Personal
                </span>
              </span>
              <ChevronDown
                className="size-4 text-[var(--colors-content-primary)]"
                strokeWidth={1.5}
              />
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:contents">
          <IconButton>
            <MessageSquare
              className="size-[18px] text-[var(--colors-content-primary)]"
              strokeWidth={1.5}
            />
          </IconButton>
          <IconButton>
            <span className="relative inline-flex">
              <Bell
                className="size-[18px] text-[var(--colors-content-primary)]"
                strokeWidth={1.5}
              />
              <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-[var(--colors-fill-brand)] ring-2 ring-[var(--colors-background)]" />
            </span>
          </IconButton>
          </span>
          <div className="h-8 w-8 overflow-hidden rounded-full border border-[var(--colors-border-primary)]">
            <Image
              src="/assets/avatar.png"
              alt="User avatar"
              width={32}
              height={32}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
