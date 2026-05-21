import { Plus, Search, Smartphone, PanelLeftClose } from "lucide-react";
import Image from "next/image";

function IconButton({
  children,
  size = 32,
  innerRadius = "rounded-[12px]",
  variant = "ghost",
}: {
  children: React.ReactNode;
  size?: 32 | 40;
  innerRadius?: string;
  variant?: "ghost" | "filled";
}) {
  const dim = size === 40 ? "w-10 h-10" : "w-8 h-8";
  const padding = size === 40 ? "p-[10px]" : "p-[7px]";
  const bg = variant === "filled" ? "bg-[var(--colors-fill-secondary)]" : "";
  return (
    <button
      type="button"
      className={`flex cursor-pointer items-center justify-center ${dim} ${padding} ${innerRadius} ${bg} transition-colors hover:bg-[var(--colors-fill-secondary)]`}
    >
      {children}
    </button>
  );
}

export function SideNav() {
  return (
    <aside className="hidden min-h-screen shrink-0 flex-col items-start gap-0 self-stretch border-r border-[var(--colors-border-primary)] bg-[var(--colors-background)] p-[12px] sm:flex">
      <div className="flex flex-1 flex-col items-center justify-between">
        <div className="flex flex-col items-center gap-[12px]">
          <div className="flex size-10 items-center justify-center p-[8px]">
            <Image
              src="/assets/logo-imagine.svg"
              alt="Imagine"
              width={20}
              height={20}
              priority
            />
          </div>
          <div className="h-px w-4 rounded-full bg-[var(--colors-fill-secondary)]" />
          <div className="flex flex-col items-center gap-[12px]">
            <IconButton size={40} innerRadius="rounded-[16px]">
              <Plus
                className="size-5 text-[var(--colors-content-primary)]"
                strokeWidth={1.5}
              />
            </IconButton>
            <IconButton size={40} innerRadius="rounded-[16px]">
              <Search
                className="size-5 text-[var(--colors-content-primary)]"
                strokeWidth={1.5}
              />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <IconButton>
            <Smartphone
              className="size-[18px] text-[var(--colors-content-secondary)]"
              strokeWidth={1.5}
            />
          </IconButton>
          <IconButton>
            <PanelLeftClose
              className="size-[18px] text-[var(--colors-content-secondary)]"
              strokeWidth={1.5}
            />
          </IconButton>
        </div>
      </div>
    </aside>
  );
}
