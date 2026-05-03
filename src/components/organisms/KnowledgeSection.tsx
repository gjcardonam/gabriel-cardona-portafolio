import { SectionTitle } from "@/components/atoms/SectionTitle";
import { KnowledgeCard } from "@/components/molecules/KnowledgeCard";
import { knowledge } from "@/data/knowledge";

export function KnowledgeSection() {
  return (
    <section
      id="conocimientos"
      className="scroll-mt-6 border-b border-ink/15 py-20"
    >
      <SectionTitle
        number="02"
        eyebrow="Conocimientos"
        title="Áreas en las que trabajo"
        description="Áreas técnicas en las que tengo experiencia construyendo y operando sistemas en producción."
      />
      <div className="grid grid-cols-1 gap-px bg-ink/15 sm:grid-cols-2 xl:grid-cols-3">
        {knowledge.map((k, idx) => (
          <KnowledgeCard key={k.id} item={k} index={idx} />
        ))}
      </div>
    </section>
  );
}
