import NowIcon from "./NowIcon";

export default function CollapseButton({
  bg = "var(--color-base-200)",
}: {
  bg?: string;
}) {
  return (
    <button
      type="button"
      className="flex size-10 items-center justify-center rounded-full border border-background-tertiary shadow-sm hover:brightness-95"
      style={{ backgroundColor: bg }}
      aria-label="Collapse"
    >
      <NowIcon icon="chevron-right-outline" size="md" />
    </button>
  );
}
