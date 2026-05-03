import Image from "next/image";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import type { Project } from "@/types";

type Props = {
  project: Project;
  index: number;
  onLearnMore?: () => void;
};

export function ProjectCard({ project, index, onLearnMore }: Props) {
  const label = String(index + 1).padStart(2, "0");
  return (
    <article className="group flex w-[320px] flex-none snap-start flex-col border border-ink/20 bg-paper transition-all duration-300 hover:border-ink sm:w-[380px]">
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-ink/15 bg-paper-deep">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 320px, 380px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-ink ring-1 ring-ink">
          P · {label}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-semibold leading-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
          {project.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="secondary" onClick={onLearnMore}>
            Saber más
            <Icon name="arrowRight" size={14} />
          </Button>
        </div>
      </div>
    </article>
  );
}
