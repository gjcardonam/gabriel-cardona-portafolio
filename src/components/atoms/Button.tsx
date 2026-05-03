import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const VARIANT_STYLES: Record<Variant, string> = {
  primary: "bg-ink text-canvas hover:bg-accent",
  secondary: "bg-surface text-ink ring-1 ring-rule hover:ring-accent hover:text-accent",
  ghost: "bg-transparent text-ink-soft hover:text-accent hover:bg-canvas-soft",
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
      className={`press inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold tracking-tight transition-[background-color,color,box-shadow] duration-150 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_STYLES[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
