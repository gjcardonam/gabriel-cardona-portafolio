import type { Education } from "@/types";

type Props = {
  item: Education;
  index: number;
};

export function EducationCard({ item, index }: Props) {
  const label = String(index + 1).padStart(2, "0");
  return (
    <article className="group relative grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 border-t border-ink/15 py-7 transition-colors hover:bg-paper-soft sm:gap-x-10">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
        E · {label}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
        {item.startDate} — {item.endDate}
      </span>
      <span aria-hidden />
      <div>
        <h3 className="font-display text-2xl font-semibold leading-tight text-ink">
          {item.degree}
        </h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
          {item.institution}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
          {item.description}
        </p>
      </div>
    </article>
  );
}
