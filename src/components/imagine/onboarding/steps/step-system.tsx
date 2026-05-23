"use client";

import { motion } from "framer-motion";
import {
  Video,
  Palette,
  Music,
  Mic,
  Plug,
  Brain,
  Mail,
  MessageCircle,
  HardDrive,
  Code2,
  Layers,
  Activity,
  Sparkles,
  Camera,
  PenTool,
} from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";

function Panel({
  delay,
  children,
}: {
  delay: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.18 + delay,
      }}
      className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-[var(--colors-border-secondary)] bg-[var(--colors-fill-primary-variant)]/85 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
    >
      {children}
    </motion.div>
  );
}

function PanelFooter({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="shrink-0 border-t border-[var(--colors-border-primary)] px-5 py-4">
      <h3 className="text-[14px] font-semibold leading-tight tracking-[-0.1px] text-[var(--colors-content-primary)]">
        {title}
      </h3>
      <p
        className="mt-0.5 text-[12px] leading-[1.45] text-[var(--colors-content-tertiary)]"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        {sub}
      </p>
    </div>
  );
}

/* ───── Skills panel ───── */

function SkillChip({
  label,
  tint,
  rotate,
  z,
  shift,
}: {
  label: string;
  tint: string;
  rotate: number;
  z: number;
  shift: number;
}) {
  return (
    <div
      className="absolute top-0 flex h-[78px] w-[112px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 px-2.5 pb-2 pt-2.5 shadow-[0_8px_22px_rgba(0,0,0,0.45)]"
      style={{
        background: tint,
        transform: `translateX(${shift}px) rotate(${rotate}deg)`,
        zIndex: z,
      }}
    >
      <FlickeringGrid
        className="absolute inset-0 [mask-image:linear-gradient(180deg,#000_30%,transparent_100%)]"
        color="rgba(255,255,255,0.85)"
        maxOpacity={0.4}
        flickerChance={0.08}
        squareSize={2}
        gridGap={6}
      />
      <span className="relative text-[11px] font-semibold leading-tight text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
        {label}
      </span>
      <span
        className="relative text-[10px] leading-tight text-white/80"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        skills
      </span>
    </div>
  );
}

function SkillRow({
  icon,
  name,
  desc,
}: {
  icon: ReactNode;
  name: string;
  desc: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--colors-fill-secondary)] text-[var(--colors-content-secondary)]">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p
          className="truncate text-[12px] font-medium leading-tight text-[var(--colors-content-primary)]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          {name}
        </p>
        <p
          className="truncate text-[11px] leading-tight text-[var(--colors-content-tertiary)]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

function SkillsPanel() {
  return (
    <Panel delay={0}>
      <div className="flex min-h-0 flex-1 flex-col gap-4 p-5">
        {/* Stacked chips */}
        <div className="relative mx-auto h-[110px] w-[260px] shrink-0">
          <SkillChip
            label="Cinematic"
            tint="linear-gradient(135deg, #0e3b5c 0%, #2979FF 100%)"
            rotate={-6}
            z={1}
            shift={-58}
          />
          <SkillChip
            label="Brand"
            tint="linear-gradient(135deg, #6b1d3e 0%, #FF80AB 100%)"
            rotate={2}
            z={2}
            shift={20}
          />
          <SkillChip
            label="Music"
            tint="linear-gradient(135deg, #1f5c2d 0%, #00E676 100%)"
            rotate={9}
            z={3}
            shift={98}
          />
        </div>

        {/* Skill list — long enough to bleed under the fade */}
        <div className="relative min-h-0 flex-1">
          <div className="flex flex-col gap-2.5">
            <SkillRow
              icon={<Video className="size-3.5" strokeWidth={1.5} />}
              name="/video-adapt"
              desc="Adapt a video from a link"
            />
            <SkillRow
              icon={<Palette className="size-3.5" strokeWidth={1.5} />}
              name="/brand-mood"
              desc="Generate a brand mood board"
            />
            <SkillRow
              icon={<Music className="size-3.5" strokeWidth={1.5} />}
              name="/lyric-gen"
              desc="Write lyrics in any style"
            />
            <SkillRow
              icon={<Mic className="size-3.5" strokeWidth={1.5} />}
              name="/voiceover"
              desc="Generate a narrated voiceover"
            />
            <SkillRow
              icon={<Camera className="size-3.5" strokeWidth={1.5} />}
              name="/product-shot"
              desc="Studio product photography"
            />
            <SkillRow
              icon={<Sparkles className="size-3.5" strokeWidth={1.5} />}
              name="/ugc-flow"
              desc="Native-feel UGC variants"
            />
            <SkillRow
              icon={<PenTool className="size-3.5" strokeWidth={1.5} />}
              name="/storyboard"
              desc="Sketch a 6-panel storyboard"
            />
            <SkillRow
              icon={<Video className="size-3.5" strokeWidth={1.5} />}
              name="/scene-compose"
              desc="Compose a cinematic scene"
            />
          </div>
          {/* Fade mask suggesting more skills */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--colors-fill-primary-variant)] to-transparent" />
        </div>
      </div>

      <PanelFooter
        title="Skills"
        sub="Slash-commands that evolve with every task."
      />
    </Panel>
  );
}

/* ───── Connectors panel ───── */

function ConnectorNode({
  Icon,
  bg,
  x,
  y,
  label,
  drift = 0,
}: {
  Icon: typeof Mail;
  bg: string;
  x: number;
  y: number;
  label: string;
  drift?: number;
}) {
  return (
    <div
      className="float-drift absolute flex flex-col items-center gap-1"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        animationDelay: `-${drift}s`,
      }}
    >
      <span
        className="flex size-9 items-center justify-center rounded-full border border-white/10 shadow-[0_6px_16px_rgba(0,0,0,0.4)]"
        style={{ background: bg }}
      >
        <Icon className="size-[18px] text-white" strokeWidth={1.5} />
      </span>
      <span
        className="text-[10px] font-medium leading-tight text-[var(--colors-content-tertiary)]"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        {label}
      </span>
    </div>
  );
}

function ActivityRow({
  Icon,
  text,
  ago,
  tone = "white",
}: {
  Icon: typeof Mail;
  text: string;
  ago: string;
  tone?: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[11px] leading-none">
      <Icon
        className="size-3 shrink-0"
        strokeWidth={1.5}
        style={{ color: tone }}
      />
      <span
        className="min-w-0 flex-1 truncate text-[var(--colors-content-secondary)]"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        {text}
      </span>
      <span
        className="text-[10px] text-[var(--colors-content-tertiary)]"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        {ago}
      </span>
    </div>
  );
}

function ConnectorsPanel() {
  return (
    <Panel delay={0.12}>
      <div className="flex min-h-0 flex-1 flex-col gap-4 p-5">
        {/* Constellation — fills upper area */}
        <div className="relative h-[230px] w-full shrink-0">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 300 230"
            fill="none"
          >
            <g stroke="rgba(255,255,255,0.18)" strokeWidth="1">
              <path d="M150 120 Q 90 80 50 40" />
              <path d="M150 120 Q 110 60 95 20" />
              <path d="M150 120 Q 150 60 150 18" />
              <path d="M150 120 Q 200 60 215 25" />
              <path d="M150 120 Q 240 80 270 45" />
            </g>
          </svg>

          <ConnectorNode
            Icon={MessageCircle}
            bg="linear-gradient(135deg, #075E54, #25D366)"
            x={17}
            y={18}
            label="WhatsApp"
            drift={0.2}
          />
          <ConnectorNode
            Icon={Mail}
            bg="linear-gradient(135deg, #C5221F, #EA4335)"
            x={32}
            y={9}
            label="Gmail"
            drift={0.8}
          />
          <ConnectorNode
            Icon={HardDrive}
            bg="linear-gradient(135deg, #1A73E8, #4285F4)"
            x={50}
            y={8}
            label="Drive"
            drift={1.3}
          />
          <ConnectorNode
            Icon={Code2}
            bg="linear-gradient(135deg, #1d1d1d, #424242)"
            x={68}
            y={11}
            label="GitHub"
            drift={1.9}
          />
          <ConnectorNode
            Icon={Layers}
            bg="linear-gradient(135deg, #A259FF, #F24E1E)"
            x={88}
            y={20}
            label="Figma"
            drift={2.4}
          />

          {/* Central hub */}
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "52%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="absolute inset-0 -m-3 rounded-full bg-[var(--colors-fill-brand)]/30 blur-xl" />
            <span className="relative flex size-12 items-center justify-center rounded-full border border-[var(--colors-border-brand-hover)] bg-[var(--colors-fill-primary-variant)] shadow-[0_0_24px_rgba(138,63,252,0.4)]">
              <Image
                src="/assets/logo-imagine.svg"
                alt=""
                width={22}
                height={22}
                className="size-[22px]"
              />
            </span>
          </div>
        </div>

        {/* Live activity log */}
        <div className="flex min-h-0 flex-1 flex-col gap-2.5 rounded-xl border border-[var(--colors-border-primary)] bg-[var(--colors-background)]/50 p-3">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-[#28C840] shadow-[0_0_8px_#28C840]" />
            <span
              className="text-[10px] uppercase tracking-[2px] text-[var(--colors-content-tertiary)]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Live · syncing
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <ActivityRow
              Icon={Mail}
              text="Gmail · 3 new messages"
              ago="12s"
              tone="#EA4335"
            />
            <ActivityRow
              Icon={HardDrive}
              text="Drive · 2 docs updated"
              ago="1m"
              tone="#4285F4"
            />
            <ActivityRow
              Icon={Layers}
              text='Figma · "Brand v3" edited'
              ago="2m"
              tone="#A259FF"
            />
            <ActivityRow
              Icon={Code2}
              text="GitHub · PR #142 merged"
              ago="4m"
              tone="#bdbdbd"
            />
          </div>
        </div>
      </div>

      <PanelFooter
        title="Connectors"
        sub="30+ tools Imagine already plugs into."
      />
    </Panel>
  );
}

/* ───── Memory panel ───── */

function Spoke({ label, angle }: { label: string; angle: number }) {
  // Tighter radii so labels stay safely inside the panel content area.
  const rad = (angle * Math.PI) / 180;
  const r = 50; // line endpoint as % of viewbox
  const lr = 76; // label position as % of viewbox
  const x = 50 + r * 0.4 * Math.cos(rad);
  const y = 50 + r * 0.4 * Math.sin(rad);
  const lx = 50 + lr * 0.42 * Math.cos(rad);
  const ly = 50 + lr * 0.42 * Math.sin(rad);
  return (
    <>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <line
          x1={50}
          y1={50}
          x2={x}
          y2={y}
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.3"
        />
      </svg>
      <span
        className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-medium leading-none text-[var(--colors-content-tertiary)]"
        style={{
          left: `${lx}%`,
          top: `${ly}%`,
          fontFamily: "var(--font-ui)",
        }}
      >
        {label}
      </span>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="font-hero text-[18px] font-bold leading-none tracking-[-0.5px] text-[var(--colors-content-primary)]">
        {value}
      </span>
      <span
        className="text-[9px] uppercase leading-none tracking-[1.5px] text-[var(--colors-content-tertiary)]"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        {label}
      </span>
    </div>
  );
}

function Tag({ children, tone }: { children: ReactNode; tone?: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full border border-[var(--colors-border-secondary)] bg-[var(--colors-background)]/50 px-2 py-1 text-[10px] leading-none text-[var(--colors-content-secondary)]"
      style={{ fontFamily: "var(--font-ui)" }}
    >
      {tone && (
        <span
          className="size-1.5 rounded-full"
          style={{ background: tone }}
        />
      )}
      {children}
    </span>
  );
}

function MemoryPanel() {
  return (
    <Panel delay={0.24}>
      <div className="flex min-h-0 flex-1 flex-col gap-4 p-5">
        {/* Spider diagram — constrained inside */}
        <div className="relative h-[220px] w-full shrink-0 overflow-hidden">
          {/* Floating memory cards — pulled inward */}
          <div
            className="float-drift absolute left-[6%] top-[6%] w-[100px] rotate-[-4deg] rounded-md border border-white/10 bg-[#1a1a1a]/90 p-2 shadow-[0_6px_16px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: "-1.2s" }}
          >
            <p
              className="text-[9.5px] leading-snug text-[var(--colors-content-secondary)]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              &quot;Palettes lean cool — teal, navy, ice blue.&quot;
            </p>
          </div>
          <div
            className="float-drift absolute right-[6%] top-[4%] flex size-[52px] items-center justify-center rotate-[6deg] overflow-hidden rounded-md border border-white/15 bg-gradient-to-br from-[#3b1d6b] via-[#6928c4] to-[#a56eff] shadow-[0_6px_16px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: "-2.6s" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.35),transparent_60%)]" />
          </div>

          {/* Spokes + center */}
          <Spoke label="Voice" angle={-120} />
          <Spoke label="Brand" angle={-60} />
          <Spoke label="Audience" angle={0} />
          <Spoke label="Projects" angle={60} />
          <Spoke label="Identity" angle={120} />
          <Spoke label="Preferences" angle={180} />

          <div
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="absolute inset-0 -m-2 rounded-full bg-[var(--colors-fill-brand)]/30 blur-lg" />
            <span className="relative flex size-10 items-center justify-center rounded-full border border-[var(--colors-border-brand-hover)] bg-[var(--colors-fill-primary-variant)] shadow-[0_0_24px_rgba(138,63,252,0.4)]">
              <Brain
                className="size-[18px] text-[var(--colors-content-primary)]"
                strokeWidth={1.5}
              />
            </span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 rounded-xl border border-[var(--colors-border-primary)] bg-[var(--colors-background)]/50 py-3">
          <Stat value="47" label="Facts" />
          <Stat value="12" label="Brands" />
          <Stat value="3" label="Audiences" />
        </div>

        {/* Tag cloud filler */}
        <div className="flex min-h-0 flex-1 flex-wrap content-start items-start gap-1.5">
          <Tag tone="#2979FF">teal palette</Tag>
          <Tag>Product Designer</Tag>
          <Tag tone="#FF80AB">Gen Z · NYC</Tag>
          <Tag>skate culture</Tag>
          <Tag tone="#00E676">DIY visuals</Tag>
          <Tag>toggadand.ai</Tag>
          <Tag>Q3 launch</Tag>
        </div>
      </div>

      <PanelFooter
        title="Memory"
        sub="A second brain that remembers every project."
      />
    </Panel>
  );
}

/* ───── Step ───── */

export function StepSystem() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-3 py-2 sm:gap-4">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="flex items-center gap-1.5 rounded-full border border-[var(--colors-border-secondary)] bg-[var(--colors-fill-secondary)]/60 px-2.5 py-1 text-[11px] font-medium tracking-[0.4px] text-[var(--colors-content-tertiary)] backdrop-blur"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        <Plug className="size-3" strokeWidth={1.5} />
        Skills · Connectors · Memory
      </motion.span>

      <div className="grid h-full w-full min-h-0 max-w-[1080px] grid-cols-1 gap-4 md:grid-cols-3">
        <SkillsPanel />
        <ConnectorsPanel />
        <MemoryPanel />
      </div>
    </div>
  );
}
