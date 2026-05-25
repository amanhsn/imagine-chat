"use client";

import { motion } from "framer-motion";
import {
  ImageIcon,
  Wand2,
  Film,
  Megaphone,
  Shuffle,
  Clapperboard,
} from "lucide-react";
import { ReactNode } from "react";
import { DarkGlass } from "@/components/ui/liquid-glass";

const IMGS = [
  "https://i.pinimg.com/736x/e7/cf/cb/e7cfcbd7a8af10b8839c8d9a3d8eb4ce.jpg",
  "https://i.pinimg.com/736x/f4/b0/00/f4b000a6880f7e8d0c677812d789e001.jpg",
  "https://i.pinimg.com/1200x/ae/cf/d7/aecfd72b2439914647ec06d19cb182b5.jpg",
  "https://i.pinimg.com/736x/5d/f7/69/5df7696c4f24b7961c8c72748a355ff8.jpg",
  "https://i.pinimg.com/736x/9c/f2/8b/9cf28b4df4e06e0ca34fbe87f25734b6.jpg",
];

function Card({
  icon,
  title,
  sub,
  children,
  className = "",
  delay = 0,
}: {
  icon: ReactNode;
  title: string;
  sub: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1 + delay,
      }}
      whileHover={{
        y: -4,
        scale: 1.015,
        transition: { type: "spring", stiffness: 280, damping: 22 },
      }}
      className={`${className} group cursor-default`}
    >
      <DarkGlass className="h-full rounded-[20px] transition-[box-shadow,border-color] duration-300 group-hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.12)]">
        <div className="flex h-full flex-col">
          {/* Visual — fills the top */}
          <div className="relative min-h-[96px] w-full flex-1 overflow-hidden bg-[var(--colors-surface-deep)] sm:min-h-[112px] md:min-h-[124px]">
            {children}
          </div>
          {/* Text — bottom block */}
          <div className="flex flex-col gap-1.5 p-4">
            <div className="flex items-center gap-2">
              <span className="text-[var(--colors-content-primary)]">
                {icon}
              </span>
              <h3 className="text-[14px] font-semibold leading-tight tracking-[-0.1px] text-[var(--colors-content-primary)]">
                {title}
              </h3>
            </div>
            <p
              className="text-[12px] leading-[1.5] text-[var(--colors-content-tertiary)]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              {sub}
            </p>
          </div>
        </div>
      </DarkGlass>
    </motion.div>
  );
}

/* ─── Image: 4 generated thumbnails around a central IMG disc ─── */
function ImagePreview() {
  const tiles = [
    { src: IMGS[0]!, rot: -10, tx: -46, ty: -14 },
    { src: IMGS[1]!, rot: 9, tx: 44, ty: -16 },
    { src: IMGS[2]!, rot: -6, tx: -44, ty: 22 },
    { src: IMGS[3]!, rot: 12, tx: 42, ty: 20 },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(242,139,130,0.16), transparent 65%)",
        }}
      />
      {tiles.map((t, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 size-14 overflow-hidden rounded-[8px] border border-white/15"
          style={{
            transform: `translate(calc(-50% + ${t.tx}px), calc(-50% + ${t.ty}px)) rotate(${t.rot}deg)`,
            boxShadow: "0 10px 24px rgba(0,0,0,0.55)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={t.src}
            alt=""
            className="size-full object-cover"
            loading="lazy"
            draggable={false}
          />
        </div>
      ))}
      <span
        className="absolute left-1/2 top-1/2 z-[1] flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--colors-content-primary)] text-[10px] font-semibold tracking-[0.3px] text-[var(--colors-background)]"
        style={{
          boxShadow:
            "0 14px 30px rgba(255,255,255,0.2), 0 0 0 3px rgba(10,10,10,0.7)",
          fontFamily: "var(--font-ui)",
        }}
      >
        IMG
      </span>
    </div>
  );
}

/* ─── Animate: horizontal film strip with sprockets, image frames marquee ─── */
function AnimatePreview() {
  const frames = [...IMGS, ...IMGS];
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* sprocket rails */}
      <div className="absolute inset-x-0 top-1 z-[2] flex h-2.5 items-center justify-around bg-black/40 px-1">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="h-1 w-1.5 rounded-[1px] bg-white/10" />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-1 z-[2] flex h-2.5 items-center justify-around bg-black/40 px-1">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="h-1 w-1.5 rounded-[1px] bg-white/10" />
        ))}
      </div>

      {/* frames track */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden px-1">
        <div className="film-marquee flex w-max items-center gap-1.5">
          {[...frames, ...frames].map((src, i) => (
            <div
              key={i}
              className="relative h-[68px] w-[60px] shrink-0 overflow-hidden rounded-[3px] border border-white/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="size-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-8 bg-gradient-to-r from-[var(--colors-surface-deep)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[3] w-8 bg-gradient-to-l from-[var(--colors-surface-deep)] to-transparent" />
    </div>
  );
}

/* ─── Film: 2x2 storyboard with cinematic image scenes ─── */
function FilmPreview() {
  return (
    <div className="relative h-full w-full">
      <div className="grid h-full grid-cols-2 gap-1.5 p-2">
        {IMGS.slice(0, 4).map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-[6px] border border-white/8"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <span
              className="absolute left-1.5 top-1.5 inline-flex h-[14px] items-center rounded-[3px] bg-black/55 px-1 text-[8px] font-medium tracking-[0.3px] text-white/90 backdrop-blur"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              S0{i + 1}
            </span>
          </div>
        ))}
      </div>
      {/* clapper hint, floats above the storyboard */}
      <span className="absolute right-2 top-2 z-[2] flex size-5 items-center justify-center rounded-full bg-black/55 text-white/85 shadow-[0_2px_8px_rgba(0,0,0,0.4)] backdrop-blur">
        <Clapperboard className="size-3" strokeWidth={1.7} />
      </span>
    </div>
  );
}

/* ─── Ads: vertical 9:16 UGC frames in horizontal scroll with edge shadows ─── */
function AdsPreview() {
  const ads = [...IMGS, ...IMGS];
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center overflow-hidden px-4">
        <div className="film-marquee flex w-max items-center gap-3">
          {[...ads, ...ads].map((src, i) => (
            <div
              key={i}
              className="relative h-[124px] w-[70px] shrink-0 overflow-hidden rounded-[6px] border border-white/10 shadow-[0_10px_22px_rgba(0,0,0,0.55)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="size-full object-cover"
                loading="lazy"
                draggable={false}
              />
              {/* subtle inner highlight */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[6px]"
                style={{
                  background:
                    "radial-gradient(circle at 30% 18%, rgba(255,255,255,0.18), transparent 55%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* edge shadows */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-16 bg-gradient-to-r from-[var(--colors-surface-deep)] via-[var(--colors-surface-deep)]/85 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[3] w-16 bg-gradient-to-l from-[var(--colors-surface-deep)] via-[var(--colors-surface-deep)]/85 to-transparent" />
    </div>
  );
}

/* ─── Pitch: source brief → fan connector → variant thumbnails ─── */
function PitchStackPreview() {
  const variants = [...IMGS, IMGS[1]!];
  // Pill, SVG, and thumb row are flex siblings — the SVG (flex-1) fills the
  // exact space between pill bottom and thumb top, so the line endpoints
  // always land on the thumbs regardless of card height.
  const INNER_W = 280;
  const THUMB_CENTERS = [20, 68, 116, 164, 212, 260];
  return (
    <div className="relative flex h-full w-full flex-col items-center overflow-hidden">
      {/* Source brief pill */}
      <div className="relative z-[2] mt-3 flex h-[20px] items-center gap-1 rounded-full border border-white/15 bg-white/[0.06] px-2.5 backdrop-blur">
        <span className="size-1 rounded-full bg-[var(--colors-fill-brand)] shadow-[0_0_6px_var(--colors-fill-brand)]" />
        <span
          className="text-[8.5px] tracking-[0.3px] text-white/80"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Brief
        </span>
      </div>

      {/* Fan connector — flex-1 to fill the exact gap between pill and thumbs */}
      <svg
        className="pointer-events-none w-full flex-1"
        style={{ maxWidth: `${INNER_W}px` }}
        viewBox={`0 0 ${INNER_W} 100`}
        preserveAspectRatio="none"
        aria-hidden
      >
        {THUMB_CENTERS.map((x, i) => (
          <line
            key={i}
            x1={INNER_W / 2}
            y1="0"
            x2={x}
            y2="100"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.6"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Variant thumbnails — fixed 280px row, gap-2, mirrors THUMB_CENTERS */}
      <div
        className="mb-3 flex gap-2"
        style={{ width: `${INNER_W}px` }}
      >
        {variants.map((src, i) => (
          <div
            key={i}
            className="relative h-[60px] w-10 shrink-0 overflow-hidden rounded-[5px] border border-white/10 shadow-[0_6px_16px_rgba(0,0,0,0.5)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="size-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Count chip */}
      <span
        className="absolute right-2 top-2 z-[2] inline-flex h-[14px] items-center rounded-[3px] bg-black/55 px-1 text-[8px] font-medium tracking-[0.2px] text-white/85 backdrop-blur"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        ×30
      </span>
    </div>
  );
}

export function StepUseCases() {
  return (
    <div className="grid h-full w-full max-w-[960px] grid-cols-1 gap-2.5 overflow-y-auto pb-4 pt-2 sm:grid-cols-6 sm:gap-3 sm:pb-6 md:grid-rows-2">
      <Card
        icon={<ImageIcon className="size-[15px]" strokeWidth={1.8} />}
        title="Research a look."
        sub="Moodboards, hero shots, references — gathered in seconds."
        className="sm:col-span-2"
        delay={0}
      >
        <ImagePreview />
      </Card>

      <Card
        icon={<Wand2 className="size-[15px]" strokeWidth={1.8} />}
        title="Animate the still."
        sub="Frames you already love, in motion that feels intentional."
        className="sm:col-span-2"
        delay={0.06}
      >
        <AnimatePreview />
      </Card>

      <Card
        icon={<Film className="size-[15px]" strokeWidth={1.8} />}
        title="Film a 60-second story."
        sub="Script, cast, scenes, score, cut — one prompt to wrap."
        className="sm:col-span-2"
        delay={0.12}
      >
        <FilmPreview />
      </Card>

      <Card
        icon={<Megaphone className="size-[15px]" strokeWidth={1.8} />}
        title="Marketing at unfair scale."
        sub="100 on-brand creatives per product. Minutes, not weeks."
        className="sm:col-span-3"
        delay={0.18}
      >
        <AdsPreview />
      </Card>

      <Card
        icon={<Shuffle className="size-[15px]" strokeWidth={1.8} />}
        title="Pitch in 30 directions."
        sub="Skip the long brief. One sentence, many futures."
        className="sm:col-span-3"
        delay={0.24}
      >
        <PitchStackPreview />
      </Card>
    </div>
  );
}
