// Marks a card's content as AI-generated: a green glow blooms from the
// top-left corner and a gradient sweep traces the card's border, both
// coming in strong on mount then dying down and staying off. One shot,
// not a looping ambient effect — the point is to catch the eye right as
// the card appears, not to keep drawing attention after that.
export default function AiGeneratedGlow({
  delay = 0,
  radius = "32px",
  showSaber = true,
  glowOpacity = 0.45,
}: {
  delay?: number;
  radius?: string;
  showSaber?: boolean;
  glowOpacity?: number;
}) {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-[10%] -top-[15%] -z-10 h-[60%] w-[60%] animate-ai-glow-in rounded-full opacity-0"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(82,203,61,${glowOpacity}), rgba(244,243,240,0))`,
          filter: "blur(50px)",
          animationDelay: `${delay}ms`,
        }}
        aria-hidden="true"
      />
      {showSaber && (
        <div
          // -inset-px (not inset-0) so this ring sits exactly on the
          // card's own 1px white border instead of one ring-width inside
          // it — otherwise the two read as two separate outlines.
          className="pointer-events-none absolute -inset-px -z-10 animate-ai-saber-in opacity-0"
          style={{
            borderRadius: radius,
            padding: "2px",
            background: "linear-gradient(45deg, #45CB3D, #FFFFFF, #45CB3D)",
            backgroundSize: "200% 200%",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
            animationDelay: `${delay}ms`,
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
