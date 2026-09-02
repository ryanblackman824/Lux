const TONES = {
  red: "border-red-100 bg-red-50 text-red-600",
  yellow: "border-yellow-100 bg-yellow-50 text-yellow-600",
  orange: "border-orange-100 bg-orange-50 text-orange-600",
  blue: "border-blue-300 bg-blue-100 text-blue-700",
  green: "border-green-200 bg-green-100 text-green-700",
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
      className={`flex h-6 items-center whitespace-nowrap rounded-[4px] border px-2 text-xs tracking-[-0.12px] ${TONES[tone]}`}
    >
      {children}
    </span>
  );
}
