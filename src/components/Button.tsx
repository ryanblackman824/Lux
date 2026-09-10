import type { ButtonHTMLAttributes } from "react";

// Ryan Playground 2K26 "button" component (node 314:16722) — full hierarchy x state matrix.
export type ButtonHierarchy = "primary" | "secondary" | "tertiary" | "ghost" | "accent";

export const HIERARCHIES: Record<ButtonHierarchy, string> = {
  primary:
    "bg-neutral-900 text-white hover:bg-neutral-700 active:bg-neutral-600 disabled:bg-neutral-400 disabled:text-neutral-600",
  secondary:
    "border border-neutral-900 text-neutral-900 hover:border-neutral-700 hover:bg-neutral-700 hover:text-white active:border-neutral-600 active:bg-neutral-600 active:text-white disabled:border-neutral-500 disabled:text-neutral-500",
  tertiary:
    "bg-neutral-50 text-neutral-900 hover:bg-neutral-700 hover:text-white active:bg-neutral-600 active:text-white disabled:bg-neutral-400 disabled:text-neutral-600",
  ghost:
    "text-neutral-900 hover:bg-neutral-700 hover:text-white active:bg-neutral-600 active:text-white disabled:bg-neutral-400 disabled:text-neutral-600",
  accent:
    "bg-accent text-[#171614] hover:bg-accent-hover active:bg-accent-active disabled:bg-neutral-400 disabled:text-neutral-600",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  hierarchy?: ButtonHierarchy;
};

export default function Button({
  hierarchy = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex h-8 items-center justify-center gap-3 whitespace-nowrap rounded-full px-4 text-sm tracking-[-0.14px] transition-colors disabled:cursor-not-allowed ${HIERARCHIES[hierarchy]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
