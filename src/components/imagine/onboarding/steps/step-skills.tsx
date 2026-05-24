"use client";

import { motion } from "framer-motion";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const FEATURED: CardStackItem[] = [
  {
    id: 1,
    title: "Cinematic Pose",
    description: "Strike a director's frame in any scene.",
    imageSrc:
      "https://i.pinimg.com/736x/e7/cf/cb/e7cfcbd7a8af10b8839c8d9a3d8eb4ce.jpg",
  },
  {
    id: 2,
    title: "Studio Portrait",
    description: "Editorial lighting, real-skin micro-detail.",
    imageSrc:
      "https://i.pinimg.com/736x/f4/b0/00/f4b000a6880f7e8d0c677812d789e001.jpg",
  },
  {
    id: 3,
    title: "Aerial Drone",
    description: "Hero shots without a flight permit.",
    imageSrc:
      "https://i.pinimg.com/1200x/ae/cf/d7/aecfd72b2439914647ec06d19cb182b5.jpg",
  },
  {
    id: 4,
    title: "Macro Texture",
    description: "Closer than a lens can focus.",
    imageSrc:
      "https://i.pinimg.com/736x/5d/f7/69/5df7696c4f24b7961c8c72748a355ff8.jpg",
  },
  {
    id: 5,
    title: "Editorial Brand",
    description: "Magazine spreads from a single prompt.",
    imageSrc:
      "https://i.pinimg.com/736x/9c/f2/8b/9cf28b4df4e06e0ca34fbe87f25734b6.jpg",
  },
];

const CATEGORIES = [
  "Creative & marketing",
  "Content creation",
  "Data & Analytics",
  "Document processing",
];

// 18 grid skills = 3 full rows of 6. Images cycle through the featured set.
const GRID_IMAGES = FEATURED.map((f) => f.imageSrc!);
const SKILLS = Array.from({ length: 18 }, (_, i) => ({
  imageSrc: GRID_IMAGES[i % GRID_IMAGES.length]!,
}));
const NEW_INDICES = new Set([0, 4, 9]);

function SkillCard({
  imageSrc,
  index,
}: {
  imageSrc: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.05 + (index % 6) * 0.025 + Math.floor(index / 6) * 0.07,
      }}
      whileHover={{
        y: -4,
        scale: 1.05,
        transition: { type: "spring", stiffness: 320, damping: 22 },
      }}
      className="group relative h-[76px] cursor-pointer overflow-hidden rounded-[12px] border border-[var(--colors-border-primary)] transition-[border-color,box-shadow] duration-200 hover:z-10 hover:border-white/25 hover:shadow-[0_18px_36px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt=""
        className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        loading="lazy"
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

      {NEW_INDICES.has(index) && (
        <span
          className="absolute left-2 top-2 inline-flex h-[16px] items-center rounded-md bg-[var(--colors-fill-brand)] px-1.5 text-[9px] font-semibold uppercase tracking-[0.4px] text-white shadow-[0_4px_10px_rgba(138,63,252,0.4)]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          New
        </span>
      )}

      <span
        className="absolute bottom-1.5 left-2.5 text-[11px] font-medium tracking-[0.1px] text-white"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        Skill name
      </span>
    </motion.div>
  );
}

export function StepSkills() {
  return (
    <div className="flex h-full w-full max-w-[1040px] flex-col items-center gap-12 py-2">
      {/* Featured stack with its own dots controller */}
      <div className="w-full">
        <CardStack
          items={FEATURED}
          cardWidth={260}
          cardHeight={150}
          maxVisible={3}
          overlap={0.18}
          spreadDeg={14}
          tiltXDeg={6}
          activeLiftPx={10}
          inactiveScale={0.9}
          minStageHeight={210}
          autoAdvance
          intervalMs={1800}
          pauseOnHover
          showDots
        />
      </div>

      {/* Chips + Skill gallery */}
      <div className="flex w-full flex-col items-center gap-5">
        <div className="flex items-center justify-center gap-2">
          {CATEGORIES.map((c, i) => {
            const active = i === 0;
            return (
              <button
                key={c}
                type="button"
                className={`inline-flex h-8 cursor-pointer items-center rounded-full px-3 text-[12px] font-medium leading-none tracking-[0.1px] transition-colors ${
                  active
                    ? "bg-[var(--colors-content-primary)] text-[var(--colors-background)]"
                    : "border border-[var(--colors-border-primary)] bg-transparent text-[var(--colors-content-secondary)] hover:bg-[var(--colors-fill-secondary)]"
                }`}
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="grid w-full grid-cols-6 gap-2.5">
          {SKILLS.map((s, i) => (
            <SkillCard key={i} imageSrc={s.imageSrc} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
