import { Card } from "@/components/atoms/Card";
import { Icon } from "@/components/atoms/Icon";
import type { Knowledge } from "@/types";

type Hue = "forest" | "moss" | "ochre" | "clay" | "pine" | "bark";
type Pattern = "dots" | "grid" | "diag" | "arcs" | "plus" | "circles";

type Variant = {
  hue: Hue;
  pattern: Pattern;
};

const VARIANTS: Variant[] = [
  { hue: "forest", pattern: "dots" },
  { hue: "ochre", pattern: "grid" },
  { hue: "pine", pattern: "diag" },
  { hue: "clay", pattern: "arcs" },
  { hue: "moss", pattern: "plus" },
  { hue: "bark", pattern: "circles" },
];

const HUE_TOKENS: Record<
  Hue,
  { text: string; bgChip: string; textChip: string; ring: string; ghost: string }
> = {
  forest: {
    text: "text-accent-deep",
    bgChip: "bg-accent-tint",
    textChip: "text-accent-deep",
    ring: "ring-accent/25",
    ghost: "text-accent/15",
  },
  moss: {
    text: "text-[var(--color-nature-moss)]",
    bgChip: "bg-[var(--color-nature-moss-tint)]",
    textChip: "text-[var(--color-nature-moss)]",
    ring: "ring-[var(--color-nature-moss)]/25",
    ghost: "text-[var(--color-nature-moss)]/15",
  },
  ochre: {
    text: "text-[var(--color-nature-ochre)]",
    bgChip: "bg-[var(--color-nature-ochre-tint)]",
    textChip: "text-[var(--color-nature-ochre)]",
    ring: "ring-[var(--color-nature-ochre)]/25",
    ghost: "text-[var(--color-nature-ochre)]/15",
  },
  clay: {
    text: "text-[var(--color-nature-clay)]",
    bgChip: "bg-[var(--color-nature-clay-tint)]",
    textChip: "text-[var(--color-nature-clay)]",
    ring: "ring-[var(--color-nature-clay)]/25",
    ghost: "text-[var(--color-nature-clay)]/15",
  },
  pine: {
    text: "text-[var(--color-nature-pine)]",
    bgChip: "bg-[var(--color-nature-pine-tint)]",
    textChip: "text-[var(--color-nature-pine)]",
    ring: "ring-[var(--color-nature-pine)]/25",
    ghost: "text-[var(--color-nature-pine)]/15",
  },
  bark: {
    text: "text-[var(--color-nature-bark)]",
    bgChip: "bg-[var(--color-nature-bark-tint)]",
    textChip: "text-[var(--color-nature-bark)]",
    ring: "ring-[var(--color-nature-bark)]/25",
    ghost: "text-[var(--color-nature-bark)]/15",
  },
};

/** SVG-as-CSS decorative patterns. Color is currentColor so it inherits from text-* class. */
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
        maskImage:
          "radial-gradient(circle, black 1.6px, transparent 1.6px), radial-gradient(circle, black 1.6px, transparent 1.6px)",
        WebkitMaskImage:
          "radial-gradient(circle, black 1.6px, transparent 1.6px)",
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

      {/* Pattern decoration top-right, color follows hue */}
      <span
        aria-hidden
        className={`pointer-events-none absolute right-5 top-5 h-16 w-16 opacity-50 transition-opacity duration-300 ease-out group-hover:opacity-90 ${tokens.text}`}
        style={{
          ...patternStyle(variant.pattern),
          maskImage: "radial-gradient(circle, black, transparent)",
          WebkitMaskImage: "radial-gradient(circle, black, transparent)",
        }}
      />

      {/* Icon chip in hue color */}
      <span
        className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-[transform,box-shadow] duration-200 ease-out group-hover:scale-110 ${tokens.bgChip} ${tokens.textChip} ${tokens.ring}`}
      >
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

      {/* Reveal arrow on hover, hue colored */}
      <span
        aria-hidden
        className={`relative mt-auto inline-flex items-center gap-2 pt-6 font-mono text-[10px] font-medium uppercase tracking-[0.18em] opacity-0 transition-[opacity,transform] duration-300 ease-out -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${tokens.text}`}
      >
        Explorar
        <Icon name="arrowRight" size={12} />
      </span>
    </Card>
  );
}
