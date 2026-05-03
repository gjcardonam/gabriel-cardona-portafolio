type Props = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ number, eyebrow, title, description }: Props) {
  return (
    <header className="mb-12 max-w-3xl">
      <div className="flex items-baseline gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.16em]">
        <span className="bg-ink px-2 py-0.5 text-canvas">/{number}</span>
        <span className="text-ink-mute">{eyebrow}</span>
      </div>
      <h2 className="font-display mt-6 text-[clamp(2.5rem,6vw,4.5rem)] uppercase text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </header>
  );
}
