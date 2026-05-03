import { Icon } from "@/components/atoms/Icon";
import type { Knowledge } from "@/types";

type Props = { item: Knowledge };

export function KnowledgeCard({ item }: Props) {
  return (
    <article className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-teal-300">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
        <Icon name={item.icon as never} size={24} />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {item.description}
      </p>
    </article>
  );
}
