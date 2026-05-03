type Props = {
  children: React.ReactNode;
  variant?: "default" | "outline" | "accent";
  className?: string;
};

const STYLES: Record<NonNullable<Props["variant"]>, string> = {
  default: "bg-paper-deep text-ink-soft",
  outline: "border border-rule text-ink-soft bg-transparent",
  accent: "bg-accent/10 text-accent border border-accent/30",
};

export function Badge({ children, variant = "default", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center font-mono text-[10px] uppercase tracking-[0.14em] px-2 py-1 ${STYLES[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
