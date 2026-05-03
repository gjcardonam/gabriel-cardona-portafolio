import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-accent hover:text-paper border border-ink hover:border-accent",
  secondary:
    "bg-paper text-ink border border-ink hover:bg-ink hover:text-paper",
  ghost:
    "bg-transparent text-ink-soft hover:text-accent border border-transparent hover:border-rule",
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
      className={`group inline-flex items-center justify-center gap-2 px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-paper focus:ring-accent disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_STYLES[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
