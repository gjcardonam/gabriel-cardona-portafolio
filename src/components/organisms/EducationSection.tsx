import { Reveal } from "@/components/atoms/Reveal";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { EducationCard } from "@/components/molecules/EducationCard";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <section
      id="educacion"
      className="scroll-mt-6 border-b border-ink/15 py-20"
    >
      <SectionTitle
        number="03"
        eyebrow="Educación"
        title="Formación académica"
        description="Pregrados y certificaciones técnicas relevantes para mi trayectoria profesional."
      />
      <div className="border-b border-ink/15">
        {education.map((e, idx) => (
          <Reveal key={e.id} delay={idx * 80}>
            <EducationCard item={e} index={idx} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
