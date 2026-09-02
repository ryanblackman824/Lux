import type { ButtonHTMLAttributes } from "react";

// Ryan Playground 2K26 "button-iconic" component (node 314:16763).
// Same hierarchy x state colors as Button, except secondary's hover/active
// is a bottom-weighted border (border-b-2) instead of a full border.
type ButtonIconicHierarchy = "primary" | "secondary" | "tertiary" | "ghost" | "accent";

const HIERARCHIES: Record<ButtonIconicHierarchy, string> = {
  primary:
    "bg-neutral-900 text-white hover:bg-neutral-700 active:bg-neutral-600 disabled:bg-neutral-400 disabled:text-neutral-600",
  secondary:
    "border border-neutral-900 text-neutral-900 hover:border hover:border-b-2 hover:border-neutral-700 hover:bg-neutral-700 hover:text-white active:border active:border-b-2 active:border-neutral-600 active:bg-neutral-600 active:text-white disabled:border-neutral-500 disabled:text-neutral-500",
  tertiary:
    "bg-neutral-50 text-neutral-900 hover:bg-neutral-700 hover:text-white active:bg-neutral-600 active:text-white disabled:bg-neutral-400 disabled:text-neutral-600",
  ghost:
    "text-neutral-900 hover:bg-neutral-700 hover:text-white active:bg-neutral-600 active:text-white disabled:bg-neutral-400 disabled:text-neutral-600",
  accent:
    "bg-accent text-[#171614] hover:bg-accent-hover active:bg-accent-active disabled:bg-neutral-400 disabled:text-neutral-600",
};

type ButtonIconicProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  hierarchy?: ButtonIconicHierarchy;
};

export default function ButtonIconic({
  hierarchy = "primary",
  className = "",
  children,
  ...props
}: ButtonIconicProps) {
  return (
    <button
      type="button"
      className={`flex size-8 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed ${HIERARCHIES[hierarchy]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
