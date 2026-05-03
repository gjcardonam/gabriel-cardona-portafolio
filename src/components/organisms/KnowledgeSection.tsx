import { SectionTitle } from "@/components/atoms/SectionTitle";
import { KnowledgeCard } from "@/components/molecules/KnowledgeCard";
import { knowledge } from "@/data/knowledge";

export function KnowledgeSection() {
  return (
    <section id="conocimientos" className="scroll-mt-6">
      <SectionTitle
        eyebrow="Conocimientos"
        title="Áreas en las que trabajo"
        description="Áreas técnicas en las que tengo experiencia construyendo y operando sistemas en producción."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {knowledge.map((k) => (
          <KnowledgeCard key={k.id} item={k} />
        ))}
      </div>
    </section>
  );
}
