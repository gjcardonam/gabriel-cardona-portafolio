type Variant = "surface" | "canvas" | "ink" | "accent";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Adds cursor:pointer + lift hover. Use for cards that are actually clickable. */
  interactive?: boolean;
  /** Adds lift hover only (no cursor change). Use for cards with hover state but no click. */
  hoverable?: boolean;
  variant?: Variant;
};

const VARIANTS: Record<Variant, string> = {
  surface: "bg-surface text-ink",
  canvas: "bg-canvas-soft text-ink",
  ink: "bg-ink text-canvas",
  accent: "bg-accent text-canvas",
};

export function Card({
  children,
  className = "",
  interactive = false,
  hoverable = false,
  variant = "surface",
}: Props) {
  const showLift = interactive || hoverable;
  const decorationClass = showLift
    ? `lift ${interactive ? "cursor-pointer" : ""}`
    : "shadow-card";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ring-1 ring-rule ${VARIANTS[variant]} ${decorationClass} ${className}`}
    >
      {children}
    </div>
  );
}
