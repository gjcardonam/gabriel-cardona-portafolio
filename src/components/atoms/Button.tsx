import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    "bg-teal-700 text-white hover:bg-teal-800 active:bg-teal-900 focus:ring-teal-600/40",
  secondary:
    "bg-white text-teal-700 border border-teal-700 hover:bg-teal-50 focus:ring-teal-600/40",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-300",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60 ${VARIANT_STYLES[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
