import NowIcon from "./NowIcon";

export default function CollapseButton({
  bg = "#f7f7f7",
}: {
  bg?: string;
}) {
  return (
    <button
      type="button"
      className="flex size-10 items-center justify-center rounded-full border border-[#edece9] shadow-sm hover:brightness-95"
      style={{ backgroundColor: bg }}
      aria-label="Collapse"
    >
      <NowIcon icon="chevron-right-outline" size="sm" className="text-[#2e2e29]" />
    </button>
  );
}
