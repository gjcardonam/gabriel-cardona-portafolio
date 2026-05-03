import { Reveal } from "@/components/atoms/Reveal";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { EducationCard } from "@/components/molecules/EducationCard";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <section id="educacion" className="mt-4 scroll-mt-6 px-2 lg:mt-6 lg:px-4">
      <SectionTitle
        number="03"
        eyebrow="Educación"
        title="Formación académica"
        description="Pregrados y certificaciones técnicas relevantes para mi trayectoria profesional."
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {education.map((e, idx) => (
          <Reveal key={e.id} delay={idx * 80}>
            <EducationCard item={e} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
