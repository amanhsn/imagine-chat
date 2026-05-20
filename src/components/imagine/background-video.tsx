export function PageBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Ellipse-15 glow — positioned upper-right per Figma (center at 50%+257.5, 50%-439.5) */}
      <div
        className="ellipse-drift absolute z-[1]"
        style={{
          left: "calc(50% + 257.5px)",
          top: "calc(50% - 439.5px)",
          width: "515px",
          height: "515px",
        }}
      >
        <div
          className="absolute"
          style={{
            inset: "-97.09%",
            backgroundImage: "url('/assets/ellipse-glow.svg')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      {/* Subtle dot pattern (Figma 1372x959, opacity 0.3) */}
      <div
        className="absolute z-[2] opacity-30"
        style={{
          left: "calc(50% + 34px)",
          top: "calc(50% + 32.5px)",
          width: "1372px",
          height: "959px",
          transform: "translate(-50%, -50%)",
          backgroundImage: "url('/assets/hero-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
