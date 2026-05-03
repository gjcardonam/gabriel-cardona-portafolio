import Image from "next/image";
import { Badge } from "@/components/atoms/Badge";
import { Icon } from "@/components/atoms/Icon";
import type { Project } from "@/types";

type Hue = "olive" | "orange" | "blue";

const HUE_VARIANTS: Hue[] = ["olive", "orange", "blue"];

const HUE_TOKENS: Record<
  Hue,
  {
    badge: string;
    accentText: string;
    accentBg: string;
    hoverArrow: string;
  }
> = {
  // olive = primary accent (Anthropic green)
  olive: {
    badge: "bg-accent-tint text-accent-deep ring-accent/20",
    accentText: "text-accent-deep",
    accentBg: "bg-accent",
    hoverArrow: "group-hover:text-accent-deep",
  },
  // orange = secondary accent (Anthropic orange)
  orange: {
    badge: "bg-secondary-tint text-secondary-deep ring-secondary/20",
    accentText: "text-secondary-deep",
    accentBg: "bg-secondary",
    hoverArrow: "group-hover:text-secondary-deep",
  },
  // blue = tertiary accent (Anthropic blue)
  blue: {
    badge: "bg-tertiary-tint text-tertiary-deep ring-tertiary/20",
    accentText: "text-tertiary-deep",
    accentBg: "bg-tertiary",
    hoverArrow: "group-hover:text-tertiary-deep",
  },
};

type Props = {
  project: Project;
  index: number;
  onLearnMore?: () => void;
};

export function ProjectCard({ project, index, onLearnMore }: Props) {
  const hue = HUE_VARIANTS[index % HUE_VARIANTS.length];
  const tokens = HUE_TOKENS[hue];
  const label = String(index + 1).padStart(2, "0");

  const cardClasses =
    "press lift group relative flex w-[360px] flex-none snap-start flex-col overflow-hidden rounded-3xl bg-surface text-left ring-1 ring-rule shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:w-[440px] lg:w-[480px]";

  const cardBody = (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas-soft">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 360px, (max-width: 1024px) 440px, 480px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {/* Index pill in hue color */}
        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ring-1 ${tokens.badge}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${tokens.accentBg}`} />
          Proyecto {label}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <h3 className="text-balance text-2xl font-bold tracking-tight text-ink sm:text-[26px]">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-pretty text-[15px] leading-relaxed text-ink-soft">
          {project.shortDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <Badge key={t} variant="default">
              {t}
            </Badge>
          ))}
        </div>
        <span
          aria-hidden
          className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-ink-soft transition-[color,gap] duration-200 ease-out group-hover:gap-3 ${tokens.hoverArrow}`}
        >
          Saber más
          <Icon name="arrowRight" size={14} />
        </span>
      </div>
    </>
  );

  if (onLearnMore) {
    return (
      <button
        type="button"
        onClick={onLearnMore}
        aria-label={`Ver detalles del proyecto ${project.title}`}
        className={`${cardClasses} cursor-pointer touch-manipulation`}
      >
        {cardBody}
      </button>
    );
  }

  return <div className={cardClasses}>{cardBody}</div>;
}
