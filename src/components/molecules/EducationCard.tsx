import type { Education } from "@/types";

type Props = { item: Education };

export function EducationCard({ item }: Props) {
  return (
    <article className="relative rounded-2xl bg-white p-6 pl-8 shadow-sm ring-1 ring-slate-200/70 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-teal-300">
      <span className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b from-teal-500 to-teal-700" />
      <header className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{item.degree}</h3>
          <p className="text-sm font-medium text-teal-700">{item.institution}</p>
        </div>
        <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-slate-500">
          {item.startDate} — {item.endDate}
        </span>
      </header>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {item.description}
      </p>
    </article>
  );
}
