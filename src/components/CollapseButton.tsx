import chevron from "../assets/chevron.svg";

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
      <span className="-rotate-90 flex-none">
        <img src={chevron} alt="" className="size-4" />
      </span>
    </button>
  );
}
