import { GeneratingScene } from "@/components/imagine/generating-scene";

export default function ScenePage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[var(--colors-background)] p-6">
      {/* Mirrors the director-view canvas frame (rounded dark surface) */}
      <div className="aspect-[952/608] w-full max-w-[952px]">
        <GeneratingScene />
      </div>
    </main>
  );
}
