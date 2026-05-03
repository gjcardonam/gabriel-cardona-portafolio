type Props = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ number, eyebrow, title, description }: Props) {
  return (
    <header className="mb-10 grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 sm:gap-x-10">
      <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent">
        §{number}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
        {eyebrow}
      </span>
      <span aria-hidden className="h-px self-center bg-ink/80" />
      <div>
        <h2 className="font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
