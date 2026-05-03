import { Card } from "@/components/atoms/Card";
import { Icon } from "@/components/atoms/Icon";
import type { Knowledge } from "@/types";

type Props = {
  item: Knowledge;
  index: number;
  featured?: boolean;
};

export function KnowledgeCard({ item, index, featured = false }: Props) {
  const label = String(index + 1).padStart(2, "0");
  return (
    <Card
      variant={featured ? "canvas" : "surface"}
      hoverable
      className="group relative flex h-full flex-col overflow-hidden p-7 sm:p-8"
    >
      {/* Big ghost number — sits in background, faint */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -bottom-6 -right-2 select-none text-[11rem] leading-none tracking-tight text-ink/[0.04] transition-[color,transform] duration-500 ease-out group-hover:text-accent/15 group-hover:scale-105"
      >
        {label}
      </span>

      {/* Decorative dot pattern at top-right */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-6 h-12 w-12 opacity-30 transition-opacity duration-300 ease-out group-hover:opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(69, 69, 69) 1px, transparent 1.2px)",
          backgroundSize: "8px 8px",
          maskImage: "radial-gradient(circle, black, transparent)",
          WebkitMaskImage: "radial-gradient(circle, black, transparent)",
        }}
      />

      {/* Icon chip */}
      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-canvas-soft text-ink-soft ring-1 ring-rule transition-[background-color,color,transform,box-shadow] duration-200 ease-out group-hover:scale-110 group-hover:bg-accent group-hover:text-canvas group-hover:ring-accent group-hover:shadow-[0_8px_20px_-8px_rgba(5,150,105,0.5)]">
        <Icon name={item.icon as never} size={20} />
      </span>

      {/* Mono index label */}
      <span className="relative mt-5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-mute">
        / {label} · Knowledge
      </span>

      {/* Title — bigger when featured */}
      <h3
        className={`relative mt-2 text-balance font-bold tracking-tight text-ink ${featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"}`}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className={`relative mt-3 text-pretty leading-relaxed text-ink-soft ${featured ? "text-base sm:text-lg" : "text-sm"}`}
      >
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
