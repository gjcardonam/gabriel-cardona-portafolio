import { Reveal } from "@/components/atoms/Reveal";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/data/projects";

type Props = {
  onSelectProject?: (projectId: string) => void;
};

export function PortfolioSection({ onSelectProject }: Props) {
  return (
    <section
      id="portafolio"
      className="scroll-mt-6 border-b border-ink/15 py-20"
    >
      <SectionTitle
        number="04"
        eyebrow="Portafolio"
        title="Proyectos seleccionados"
        description="Algunos proyectos en los que he trabajado, desde investigación universitaria hasta herramientas internas."
      />

      {/* Index strip */}
      <div className="mb-6 flex items-center justify-between border-y border-ink/15 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
        <span>Índice</span>
        <span className="hidden gap-6 sm:inline-flex">
          {projects.map((p, idx) => (
            <span key={p.id}>
              <span className="text-accent">
                {String(idx + 1).padStart(2, "0")}
              </span>{" "}
              {p.title}
            </span>
          ))}
        </span>
        <span>↦ scroll</span>
      </div>

      <div className="-mx-6 overflow-x-auto px-6 pb-4 sm:-mx-12 sm:px-12">
        <div className="flex snap-x snap-mandatory gap-5">
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
