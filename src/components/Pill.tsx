// Ryan Playground 2K26 "highlighted-values" (node 314:17795): the same
// semantic tones render differently depending on what they sit on top of.
// "white" = pills inside a solid white surface (e.g. Top Priorities' row
// list). "off-white" = pills sitting directly on a card's frosted/off-white
// background (Pending Tasks, Unassigned Cases, Your Day) — one shade darker
// across the board so they keep enough contrast.
const TONES = {
  white: {
    red: "border-red-100 bg-red-50 text-red-600",
    yellow: "border-yellow-100 bg-yellow-50 text-yellow-600",
    orange: "border-orange-100 bg-orange-50 text-orange-600",
    blue: "border-blue-200 bg-blue-50 text-blue-600",
    green: "border-green-100 bg-green-50 text-green-600",
    indigo: "border-indigo-200 bg-indigo-50 text-indigo-600",
    gray: "border-[#d2d1ce] bg-base-200 text-neutral-600",
  },
  "off-white": {
    red: "border-red-200 bg-red-100 text-red-700",
    yellow: "border-yellow-300 bg-yellow-100 text-yellow-700",
    orange: "border-orange-200 bg-orange-100 text-orange-700",
    blue: "border-blue-300 bg-blue-100 text-blue-700",
    green: "border-green-200 bg-green-100 text-green-700",
    // Confirmed against the real "Due in 5 days" pill instance, which uses
    // indigo/900 rather than the generic legend's indigo/700 for this tone.
    indigo: "border-indigo-300 bg-indigo-100 text-indigo-900",
    gray: "border-[#c2c1be] bg-[#d2d1ce] text-[#595856]",
  },
} as const;

export type PillTone = keyof typeof TONES.white;
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
      className={`flex h-6 items-center whitespace-nowrap rounded-[4px] border px-2 text-xs tracking-[-0.12px] ${TONES[surface][tone]}`}
    >
      {children}
    </span>
  );
}
