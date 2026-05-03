type Variant = "default" | "outline" | "accent";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const STYLES: Record<Variant, string> = {
  default: "bg-canvas-soft text-ink-soft border border-rule",
  outline: "border border-rule text-ink-soft bg-transparent",
  accent: "bg-accent-tint text-accent-deep border border-accent/20",
};

export function Badge({ children, variant = "default", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium tracking-tight ${STYLES[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
