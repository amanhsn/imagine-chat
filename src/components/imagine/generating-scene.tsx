"use client";

import { useEffect, useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GeneratingSceneProps {
  label?: string;
  className?: string;
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
}

export function GeneratingScene({
  label = "Generating Scene",
  className,
  squareSize = 6,
  gridGap = 4,
  flickerChance = 0.4,
}: GeneratingSceneProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let cols = 0;
    let rows = 0;
    let cells = new Float32Array(0);
    let dpr = 1;

    const setup = () => {
      const w = root.clientWidth;
      const h = root.clientHeight;
      if (!w || !h) return;
      dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      cols = Math.floor(w / (squareSize + gridGap));
      rows = Math.floor(h / (squareSize + gridGap));
      cells = new Float32Array(cols * rows);
      for (let i = 0; i < cells.length; i++) cells[i] = Math.random() * 0.7;
    };

    setup();

    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      for (let i = 0; i < cells.length; i++) {
        if (Math.random() < flickerChance * dt) {
          cells[i] = Math.random() * 0.85;
        }
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const step = (squareSize + gridGap) * dpr;
      const sz = squareSize * dpr;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          ctx.fillStyle = `rgba(220,210,255,${cells[i * rows + j]})`;
          ctx.fillRect(i * step, j * step, sz, sz);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const ro = new ResizeObserver(setup);
    ro.observe(root);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [squareSize, gridGap, flickerChance]);

  // Subtle cursor parallax on the blob layer
  useEffect(() => {
    const root = rootRef.current;
    const parallax = parallaxRef.current;
    if (!root || !parallax) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf: number;

    const onMove = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = nx * 18;
      targetY = ny * 12;
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      parallax.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn(
        "scene-loader relative isolate h-full w-full overflow-hidden rounded-[16px] border border-[var(--colors-border-secondary)] bg-[var(--colors-background)]",
        className,
      )}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      {/* Color base — two soft tinted glows that breathe */}
      <div className="scene-loader-glow-a pointer-events-none absolute inset-0" />
      <div className="scene-loader-glow-b pointer-events-none absolute inset-0" />

      {/* Parallax wrapper for the blob-clipped pixel grid */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <div className="scene-loader-mask pointer-events-none absolute inset-0">
          <canvas ref={canvasRef} className="absolute inset-0 size-full" />
        </div>
      </div>

      {/* Drifting scanline shimmer that sweeps across the canvas */}
      <div className="scene-loader-scan pointer-events-none absolute inset-0" />

      {/* Vignette to soften the rectangular frame */}
      <div className="scene-loader-vignette pointer-events-none absolute inset-0" />

      {/* Center: spinner + label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <SceneSpinner />
        <p className="txt-shimmer text-[16px] font-medium leading-5 tracking-[0.32px]">
          {label}
        </p>
      </div>
    </div>
  );
}

function SceneSpinner() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="scene-loader-spinner"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="2"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
