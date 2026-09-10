import NowIcon from "./NowIcon";
import { HIERARCHIES, type ButtonHierarchy } from "./Button";

// Ryan Playground 2K26 "button-split" component (node 314:16823) — a button
// with a trailing chevron is really two adjacent buttons sharing one pill,
// each with its own hover/active state. Hovering the label never darkens
// the caret side, and vice versa.
type ButtonSplitProps = {
  hierarchy?: ButtonHierarchy;
  className?: string;
  onLabelClick?: () => void;
  onCaretClick?: () => void;
  caretLabel?: string;
  children: React.ReactNode;
};

export default function ButtonSplit({
  hierarchy = "primary",
  className = "",
  onLabelClick,
  onCaretClick,
  caretLabel = "More options",
  children,
}: ButtonSplitProps) {
  return (
    <div
      className={`inline-flex h-8 items-center overflow-hidden rounded-full ${className}`}
    >
      <button
        type="button"
        onClick={onLabelClick}
        className={`inline-flex h-full items-center gap-2 whitespace-nowrap pl-4 pr-2 text-sm tracking-[-0.14px] transition-colors disabled:cursor-not-allowed ${HIERARCHIES[hierarchy]}`}
      >
        {children}
      </button>
      <button
        type="button"
        onClick={onCaretClick}
        aria-label={caretLabel}
        className={`inline-flex h-full items-center pl-1 pr-3 transition-colors disabled:cursor-not-allowed ${HIERARCHIES[hierarchy]}`}
      >
        <NowIcon icon="caret-down-outline" size="sm" />
      </button>
    </div>
  );
}
