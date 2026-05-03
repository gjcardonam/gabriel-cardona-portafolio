import { Card } from "@/components/atoms/Card";
import type { Education } from "@/types";

type Props = { item: Education };

export function EducationCard({ item }: Props) {
  return (
    <Card variant="surface" hoverable className="relative flex h-full flex-col p-7 pl-9">
      <span
        aria-hidden
        className="absolute left-0 top-7 bottom-7 w-1 rounded-r-full bg-accent"
      />
      <header className="flex flex-col justify-between gap-3 sm:flex-row sm:items-baseline">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-ink">
            {item.degree}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent-deep">
            {item.institution}
          </p>
        </div>
        <span className="whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-mute">
          {item.startDate} → {item.endDate}
        </span>
      </header>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        {item.description}
      </p>
    </Card>
  );
}
