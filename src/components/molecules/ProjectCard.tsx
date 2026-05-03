import Image from "next/image";
import { Badge } from "@/components/atoms/Badge";
import { Icon } from "@/components/atoms/Icon";
import type { Project } from "@/types";

type Props = {
  project: Project;
  index: number;
  onLearnMore?: () => void;
};

export function ProjectCard({ project, index, onLearnMore }: Props) {
  const label = String(index + 1).padStart(2, "0");

  const cardClasses =
    "press lift group relative flex w-[320px] flex-none snap-start flex-col overflow-hidden rounded-2xl bg-surface text-left ring-1 ring-rule shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:w-[380px]";

  const cardBody = (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas-soft">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 320px, 380px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-md bg-surface px-2 py-1 font-mono text-[10px] font-medium tracking-tight text-ink shadow-card ring-1 ring-rule">
          /{label}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-balance text-xl font-bold tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-pretty text-sm leading-relaxed text-ink-soft">
          {project.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t} variant="default">
              {t}
            </Badge>
          ))}
        </div>
        <span
          aria-hidden
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-ink-soft transition-[color,gap] duration-200 ease-out group-hover:gap-3 group-hover:text-accent-deep"
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
