import chevronRight from "../assets/chevron-right-outline-16.svg";

export default function CollapseButton({
  bg = "#f7f7f7",
}: {
  bg?: string;
}) {
  return (
    <button
      type="button"
      className="flex size-10 items-center justify-center rounded-full border border-surface-tertiary shadow-sm hover:brightness-95"
      style={{ backgroundColor: bg }}
      aria-label="Collapse"
    >
      <img src={chevronRight} alt="" className="size-5" />
    </button>
  );
}
