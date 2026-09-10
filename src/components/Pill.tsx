// Ryan Playground 2K26 "highlighted-values" (node 376:27062) — the current,
// single canonical style for every semantic tone: a light fill, a matching
// border, and colored text. Confirmed against the real legend instance
// (Positive/Warning/Critical/High/Moderate/Low/Info). The old "white" vs
// "off-white" surface split (lighter colors on solid-white cards) is
// superseded by this unified set — both keys below now share the same
// values so existing call sites keep working.
const TONE_STYLES = {
  green: "border-green-200 bg-green-100 text-green-700",
  yellow: "border-yellow-300 bg-yellow-100 text-yellow-700",
  red: "border-red-200 bg-red-100 text-red-700",
  orange: "border-orange-200 bg-orange-100 text-orange-700",
  indigo: "border-indigo-300 bg-indigo-100 text-indigo-600",
  gray: "border-[#c2c1be] bg-[#d2d1ce] text-[#595856]",
  blue: "border-blue-300 bg-blue-100 text-blue-700",
} as const;

const TONES = { white: TONE_STYLES, "off-white": TONE_STYLES } as const;

export type PillTone = keyof typeof TONE_STYLES;
export type PillSurface = keyof typeof TONES;

export default function Pill({
  tone,
  surface = "off-white",
  children,
}: {
  tone: PillTone;
  surface?: PillSurface;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`flex h-6 items-center gap-2 whitespace-nowrap rounded-[4px] border px-2 text-xs tracking-[-0.12px] ${TONES[surface][tone]}`}
    >
      {children}
    </span>
  );
}
