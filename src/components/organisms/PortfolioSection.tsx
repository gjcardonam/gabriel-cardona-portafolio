import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/data/projects";

type Props = {
  onSelectProject?: (projectId: string) => void;
};

export function PortfolioSection({ onSelectProject }: Props) {
  return (
    <section id="portafolio" className="scroll-mt-6">
      <SectionTitle
        eyebrow="Portafolio"
        title="Proyectos seleccionados"
        description="Algunos proyectos en los que he trabajado, desde investigación universitaria hasta herramientas internas."
      />
      <div className="-mx-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6">
        <div className="flex gap-4 sm:gap-5">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onLearnMore={
                onSelectProject ? () => onSelectProject(p.id) : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
