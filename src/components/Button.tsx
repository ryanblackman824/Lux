import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-[#232320] text-white hover:bg-[#4d4c4a]",
  secondary:
    "border border-[#2e2e29] bg-transparent text-black hover:border-[#a1cdff] hover:bg-[#cbe4ff]",
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
      className={`inline-flex h-8 items-center justify-center gap-1 whitespace-nowrap rounded-[100px] px-6 py-[7px] text-xs transition-colors ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
