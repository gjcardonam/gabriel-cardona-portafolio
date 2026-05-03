import { Card } from "@/components/atoms/Card";
import { Icon } from "@/components/atoms/Icon";
import type { Knowledge } from "@/types";

type Props = { item: Knowledge; index: number };

export function KnowledgeCard({ item, index }: Props) {
  const label = String(index + 1).padStart(2, "0");
  return (
    <Card variant="surface" interactive className="group flex h-full flex-col p-7">
      <div className="flex items-start justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-canvas-soft text-ink-soft ring-1 ring-rule transition-colors duration-200 ease-out group-hover:bg-accent-tint group-hover:text-accent-deep group-hover:ring-accent/20">
          <Icon name={item.icon as never} size={20} />
        </span>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-mute">
          /{label}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {item.description}
      </p>
    </Card>
  );
}
