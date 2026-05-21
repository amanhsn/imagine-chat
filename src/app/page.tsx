import { SideNav } from "@/components/imagine/side-nav";
import { TopNav } from "@/components/imagine/top-nav";
import { Hero } from "@/components/imagine/hero";
import { PageBackdrop } from "@/components/imagine/background-video";

export default function Page() {
  return (
    <div className="relative isolate flex min-h-screen w-full items-start bg-[var(--colors-background)]">
      <SideNav />
      <div className="relative z-[3] flex min-h-screen min-w-0 flex-1 flex-col items-start">
        <TopNav />
        <div className="relative flex w-full flex-1 flex-col items-center">
          <Hero />
        </div>
      </div>
      <PageBackdrop />
    </div>
  );
}
