import { SideNav } from "@/components/imagine/side-nav";
import { TopNav } from "@/components/imagine/top-nav";
import { CreateVideoSidePanel } from "@/components/imagine/director/side-panel";
import { DirectorCanvas } from "@/components/imagine/director/canvas";
import { TimelineComponents } from "@/components/imagine/director/timeline";

export default function DirectorPage() {
  return (
    <div className="relative isolate flex min-h-screen w-full items-start bg-[var(--colors-background)]">
      <SideNav />
      <div className="relative z-[3] flex min-h-screen min-w-0 flex-1 flex-col items-start">
        <TopNav />
        <div className="flex w-full flex-1 items-start">
          {/* Side panel column (368 wide in Figma) */}
          <div className="w-[368px] shrink-0">
            <CreateVideoSidePanel />
          </div>

          {/* Director view column */}
          <div className="flex min-w-0 flex-1 flex-col gap-2 px-4 pb-6 pt-2">
            <DirectorCanvas />
            <TimelineComponents />
          </div>
        </div>
      </div>
    </div>
  );
}
