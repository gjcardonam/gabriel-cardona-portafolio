import Image from "next/image";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import type { Project } from "@/types";

type Props = {
  project: Project;
  onLearnMore?: () => void;
};

export function ProjectCard({ project, onLearnMore }: Props) {
  return (
    <article className="flex w-[320px] flex-none flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-teal-300 sm:w-[360px]">
      <div className="relative aspect-[16/9] w-full bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 320px, 360px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
          {project.shortDescription}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between gap-2">
          <Button variant="primary" onClick={onLearnMore}>
            Saber más
            <Icon name="arrowRight" size={14} />
          </Button>
        </div>
      </div>
    </article>
  );
}
