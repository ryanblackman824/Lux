const TONES = {
  red: "border-[#ffb8ad] bg-[#ffd8d0] text-[#750000]",
  yellow: "border-[#ffe04d] bg-[#fffbc9] text-[#453500]",
  amber: "border-[#ffbe57] bg-[#ffdc9d] text-[#642100]",
  blue: "border-[#a1cdff] bg-[#cbe4ff] text-[#083376]",
  green: "border-[#63e0a3] bg-[#a1f1c5] text-[#004023]",
  indigo: "border-[#c5c5ff] bg-[#dddeff] text-[#37228a]",
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
