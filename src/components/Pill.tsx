const TONES = {
  red: "border-red-200 bg-red-100 text-red-900",
  yellow: "border-yellow-100 bg-yellow-50 text-yellow-900",
  amber: "border-amber-200 bg-amber-100 text-orange-900",
  blue: "border-blue-200 bg-blue-100 text-blue-900",
  green: "border-green-200 bg-green-100 text-green-900",
  indigo: "border-indigo-200 bg-indigo-100 text-indigo-900",
} as const;

export type PillTone = keyof typeof TONES;

export default function Pill({
  tone,
  children,
}: {
  tone: PillTone;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`whitespace-nowrap rounded-[4px] border px-2 py-0.5 text-xs tracking-[-0.12px] ${TONES[tone]}`}
    >
      {children}
    </span>
  );
}
