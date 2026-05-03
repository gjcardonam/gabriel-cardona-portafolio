import { Card } from "@/components/atoms/Card";
import { Icon } from "@/components/atoms/Icon";
import type { Knowledge } from "@/types";

type Hue = "orange" | "blue" | "olive";
type Pattern = "dots" | "grid" | "diag" | "arcs" | "plus" | "circles";

const VARIANTS: { hue: Hue; pattern: Pattern }[] = [
  { hue: "orange", pattern: "dots" },
  { hue: "blue", pattern: "grid" },
  { hue: "olive", pattern: "diag" },
  { hue: "orange", pattern: "arcs" },
  { hue: "blue", pattern: "plus" },
  { hue: "olive", pattern: "circles" },
];

const HUE_TOKENS: Record<
  Hue,
  {
    chipBg: string;
    chipText: string;
    chipRing: string;
    chipHoverBg: string;
    pattern: string;
    ghost: string;
    explore: string;
  }
> = {
  orange: {
    chipBg: "bg-accent-tint",
    chipText: "text-accent-deep",
    chipRing: "ring-accent/15",
    chipHoverBg: "group-hover:bg-accent group-hover:text-canvas group-hover:ring-accent",
    pattern: "text-accent",
    ghost: "text-accent/[0.08] group-hover:text-accent/[0.15]",
    explore: "text-accent",
  },
  blue: {
    chipBg: "bg-secondary-tint",
    chipText: "text-secondary-deep",
    chipRing: "ring-secondary/15",
    chipHoverBg: "group-hover:bg-secondary group-hover:text-canvas group-hover:ring-secondary",
    pattern: "text-secondary",
    ghost: "text-secondary/[0.10] group-hover:text-secondary/[0.18]",
    explore: "text-secondary-deep",
  },
  olive: {
    chipBg: "bg-tertiary-tint",
    chipText: "text-tertiary-deep",
    chipRing: "ring-tertiary/15",
    chipHoverBg: "group-hover:bg-tertiary group-hover:text-canvas group-hover:ring-tertiary",
    pattern: "text-tertiary",
    ghost: "text-tertiary/[0.10] group-hover:text-tertiary/[0.18]",
    explore: "text-tertiary-deep",
  },
};

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
  const variant = VARIANTS[index % VARIANTS.length];
  const tokens = HUE_TOKENS[variant.hue];
  const label = String(index + 1).padStart(2, "0");

  return (
    <Card
      variant="surface"
      hoverable
      className="group relative flex h-full flex-col overflow-hidden p-7 sm:p-8"
    >
      {/* Big ghost number, hue tinted */}
      <span
        aria-hidden
        className={`font-display pointer-events-none absolute -bottom-6 -right-2 select-none text-[11rem] leading-none tracking-tight transition-[color,transform] duration-500 ease-out group-hover:scale-105 ${tokens.ghost}`}
      >
        {label}
      </span>

      {/* Pattern decoration top-right, hue colored */}
      <span
        aria-hidden
        className={`pointer-events-none absolute right-5 top-5 h-16 w-16 opacity-30 transition-opacity duration-300 ease-out group-hover:opacity-70 ${tokens.pattern}`}
        style={{
          ...patternStyle(variant.pattern),
          maskImage: "radial-gradient(circle, black, transparent)",
          WebkitMaskImage: "radial-gradient(circle, black, transparent)",
        }}
      />

      {/* Icon chip in hue color */}
      <span
        className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-[transform,background-color,color,box-shadow] duration-200 ease-out group-hover:scale-110 ${tokens.chipBg} ${tokens.chipText} ${tokens.chipRing} ${tokens.chipHoverBg}`}
      >
        <Icon name={item.icon as never} size={20} />
      </span>

      <span className="relative mt-5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-mute">
        / {label} · Knowledge
      </span>

      <h3 className="relative mt-2 text-balance text-xl font-bold tracking-tight text-ink sm:text-2xl">
        {item.title}
      </h3>

      <p className="relative mt-3 text-pretty text-sm leading-relaxed text-ink-soft">
        {item.description}
      </p>

      <span
        aria-hidden
        className={`relative mt-auto inline-flex items-center gap-2 pt-6 font-mono text-[10px] font-medium uppercase tracking-[0.18em] opacity-0 transition-[opacity,transform] duration-300 ease-out -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${tokens.explore}`}
      >
        Explorar
        <Icon name="arrowRight" size={12} />
      </span>
    </Card>
  );
}
