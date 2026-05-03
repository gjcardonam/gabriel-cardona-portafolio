import { Reveal } from "@/components/atoms/Reveal";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { KnowledgeCard } from "@/components/molecules/KnowledgeCard";
import { knowledge } from "@/data/knowledge";

// Bento spans: card 0 takes 2 cols (featured), rest are 1 col each
const SPAN_CLASSES: Record<number, string> = {
  0: "lg:col-span-2",
};

export function KnowledgeSection() {
  return (
    <section id="conocimientos" className="mt-4 scroll-mt-6 px-2 lg:mt-6 lg:px-4">
      <SectionTitle
        number="02"
        eyebrow="Conocimientos"
        title="Áreas en las que trabajo"
        description="Áreas técnicas en las que tengo experiencia construyendo y operando sistemas en producción."
      />
      <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {knowledge.map((k, idx) => (
          <Reveal
            key={k.id}
            delay={idx * 60}
            className={SPAN_CLASSES[idx] ?? ""}
          >
            <KnowledgeCard item={k} index={idx} featured={idx === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
