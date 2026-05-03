type Variant = "surface" | "canvas" | "ink" | "accent";

type Props = {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
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
  variant = "surface",
}: Props) {
  const interactiveClass = interactive ? "lift cursor-pointer" : "shadow-card";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ring-1 ring-rule ${VARIANTS[variant]} ${interactiveClass} ${className}`}
    >
      {children}
    </div>
  );
}
