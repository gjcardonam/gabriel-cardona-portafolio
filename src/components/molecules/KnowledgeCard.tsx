import { Icon } from "@/components/atoms/Icon";
import type { Knowledge } from "@/types";

type Props = {
  item: Knowledge;
  index: number;
};

export function KnowledgeCard({ item, index }: Props) {
  const label = String(index + 1).padStart(2, "0");
  return (
    <article className="group relative flex h-full flex-col border border-ink/15 bg-paper px-6 py-7 transition-all duration-300 hover:border-ink hover:bg-paper-soft">
      <div className="flex items-baseline justify-between border-b border-ink/15 pb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
          K · {label}
        </span>
        <Icon
          name={item.icon as never}
          size={20}
          className="text-ink-mute transition-colors group-hover:text-accent"
        />
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {item.description}
      </p>
    </article>
  );
}
