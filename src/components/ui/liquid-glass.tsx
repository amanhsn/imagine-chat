"use client";

import React from "react";

/**
 * Liquid-glass primitives.
 *
 * `<GlassEffect>` stacks a backdrop-blur layer, a tint layer, and an inset-
 * highlight layer to fake a piece of frosted glass. Pair it with `<GlassFilter />`
 * mounted once anywhere in the tree to opt into the SVG displacement
 * distortion — the filter id is `glass-distortion`.
 */

interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
}

export const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
}) => {
  const glassStyle = {
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  const content = (
    <div
      className={`relative flex font-semibold overflow-hidden text-black cursor-pointer transition-all duration-700 ${className}`}
      style={glassStyle}
    >
      {/* Glass Layers */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-inherit rounded-3xl"
        style={{
          backdropFilter: "blur(3px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      <div
        className="absolute inset-0 z-10 rounded-inherit"
        style={{ background: "rgba(255, 255, 255, 0.25)" }}
      />
      <div
        className="absolute inset-0 z-20 rounded-inherit rounded-3xl overflow-hidden"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)",
        }}
      />

      <div className="relative z-30">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

/**
 * Dark-mode variant tuned for translucent dark surfaces. Same layered approach
 * but the tint is a soft dark fill and the inset highlights are subtle white —
 * better for cards sitting on a dark page.
 */
interface DarkGlassProps extends GlassEffectProps {
  /** Background tint (default: faint white) */
  tint?: string;
  /** Backdrop blur in px (default: 16) */
  blur?: number;
  /** Apply the SVG displacement filter (default: false) */
  distort?: boolean;
}

export const DarkGlass: React.FC<DarkGlassProps> = ({
  children,
  className = "",
  style = {},
  tint = "rgba(255,255,255,0.035)",
  blur = 16,
  distort = false,
}) => (
  <div
    className={`relative overflow-hidden ${className}`}
    style={{
      boxShadow:
        "0 24px 60px -12px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
      ...style,
    }}
  >
    {/* Backdrop blur (optionally distorted) */}
    <div
      className="absolute inset-0 z-0 rounded-[inherit]"
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        filter: distort ? "url(#glass-distortion)" : undefined,
        isolation: "isolate",
      }}
    />
    {/* Tint */}
    <div
      className="absolute inset-0 z-10 rounded-[inherit]"
      style={{ background: tint }}
    />
    {/* Top-edge bright highlight + bottom-edge soft shadow */}
    <div
      className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
      style={{
        boxShadow:
          "inset 0 1px 0 0 rgba(255,255,255,0.10), inset 0 -1px 0 0 rgba(0,0,0,0.25), inset 1px 0 0 0 rgba(255,255,255,0.04), inset -1px 0 0 0 rgba(0,0,0,0.15)",
      }}
    />
    <div className="relative z-30 h-full">{children}</div>
  </div>
);

/** SVG turbulence + displacement filter that drives the liquid effect. */
export const GlassFilter: React.FC = () => (
  <svg style={{ display: "none" }} aria-hidden="true">
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);
