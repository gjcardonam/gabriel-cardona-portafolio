import { Card } from "@/components/atoms/Card";
import { Icon } from "@/components/atoms/Icon";
import type { Knowledge } from "@/types";

type Pattern = "dots" | "grid" | "diag" | "arcs" | "plus" | "circles";

const PATTERNS: Pattern[] = ["dots", "grid", "diag", "arcs", "plus", "circles"];

/** Decorative repeating background patterns for visual variety per card. */
function patternStyle(pattern: Pattern): React.CSSProperties {
  switch (pattern) {
    case "dots":
      return {
        backgroundImage:
          "radial-gradient(circle, currentColor 1px, transparent 1.4px)",
        backgroundSize: "10px 10px",
      };
    case "grid":
      return {
        backgroundImage:
          "linear-gradient(currentColor 0.6px, transparent 0.6px), linear-gradient(90deg, currentColor 0.6px, transparent 0.6px)",
        backgroundSize: "14px 14px",
      };
    case "diag":
      return {
        backgroundImage:
          "repeating-linear-gradient(-45deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 9px)",
      };
    case "arcs":
      return {
        backgroundImage:
          "radial-gradient(circle at 0% 100%, transparent 12px, currentColor 12px, currentColor 13px, transparent 13px), radial-gradient(circle at 0% 100%, transparent 26px, currentColor 26px, currentColor 27px, transparent 27px), radial-gradient(circle at 0% 100%, transparent 40px, currentColor 40px, currentColor 41px, transparent 41px)",
      };
    case "plus":
      return {
        backgroundImage:
          "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
        backgroundSize: "16px 16px",
        backgroundPosition: "center",
      };
    case "circles":
      return {
        backgroundImage:
          "radial-gradient(circle at center, transparent 5px, currentColor 5px, currentColor 5.6px, transparent 5.6px)",
        backgroundSize: "18px 18px",
      };
  }
}

type Props = {
  item: Knowledge;
  index: number;
};

export function KnowledgeCard({ item, index }: Props) {
  const pattern = PATTERNS[index % PATTERNS.length];
  const label = String(index + 1).padStart(2, "0");

  return (
    <Card
      variant="surface"
      hoverable
      className="group relative flex h-full flex-col overflow-hidden p-7 sm:p-8"
    >
      {/* Big ghost number, accent tinted */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -bottom-6 -right-2 select-none text-[11rem] leading-none tracking-tight text-accent/[0.07] transition-[color,transform] duration-500 ease-out group-hover:text-accent/15 group-hover:scale-105"
      >
        {label}
      </span>

      {/* Pattern decoration top-right, accent colored */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-5 top-5 h-16 w-16 text-accent opacity-25 transition-opacity duration-300 ease-out group-hover:opacity-60"
        style={{
          ...patternStyle(pattern),
          maskImage: "radial-gradient(circle, black, transparent)",
          WebkitMaskImage: "radial-gradient(circle, black, transparent)",
        }}
      />

      {/* Icon chip */}
      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-tint text-accent-deep ring-1 ring-accent/15 transition-[transform,background-color,color,box-shadow] duration-200 ease-out group-hover:scale-110 group-hover:bg-accent group-hover:text-canvas group-hover:ring-accent">
        <Icon name={item.icon as never} size={20} />
      </span>

      {/* Mono index label */}
      <span className="relative mt-5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-mute">
        / {label} · Knowledge
      </span>

      <h3 className="relative mt-2 text-balance text-xl font-bold tracking-tight text-ink sm:text-2xl">
        {item.title}
      </h3>

      <p className="relative mt-3 text-pretty text-sm leading-relaxed text-ink-soft">
        {item.description}
      </p>

      {/* Reveal arrow on hover */}
      <span
        aria-hidden
        className="relative mt-auto inline-flex items-center gap-2 pt-6 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent opacity-0 transition-[opacity,transform] duration-300 ease-out -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
      >
        Explorar
        <Icon name="arrowRight" size={12} />
      </span>
    </Card>
  );
}
