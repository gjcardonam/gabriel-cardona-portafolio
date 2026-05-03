import { Reveal } from "@/components/atoms/Reveal";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/data/projects";

type Props = {
  onSelectProject?: (projectId: string) => void;
};

export function PortfolioSection({ onSelectProject }: Props) {
  return (
    <section id="portafolio" className="mt-4 scroll-mt-6 px-2 lg:mt-6 lg:px-4">
      <SectionTitle
        number="04"
        eyebrow="Portafolio"
        title="Proyectos seleccionados"
        description="Algunos proyectos en los que he trabajado, desde investigación universitaria hasta herramientas internas."
      />
      <div className="-mx-2 overflow-x-auto px-2 pb-4 sm:-mx-4 sm:px-4">
        <div className="flex snap-x snap-mandatory gap-4">
          {projects.map((p, idx) => (
            <Reveal key={p.id} delay={idx * 80}>
              <ProjectCard
                project={p}
                index={idx}
                onLearnMore={
                  onSelectProject ? () => onSelectProject(p.id) : undefined
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
