import { SectionTitle } from "@/components/atoms/SectionTitle";
import { EducationCard } from "@/components/molecules/EducationCard";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <section id="educacion" className="scroll-mt-6">
      <SectionTitle
        eyebrow="Educación"
        title="Formación académica"
        description="Pregrados y certificaciones técnicas relevantes para mi trayectoria profesional."
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {education.map((e) => (
          <EducationCard key={e.id} item={e} />
        ))}
      </div>
    </section>
  );
}
