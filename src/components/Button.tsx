import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-ink text-white hover:brightness-110",
  secondary: "border border-ink bg-transparent text-ink hover:bg-black/5",
  tertiary: "bg-[#f9f8f6] text-black hover:bg-white",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex h-8 items-center justify-center gap-3 whitespace-nowrap rounded-full px-4 text-sm tracking-[-0.14px] transition-colors ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
