type Props = {
  /** Level 0..100 */
  value: number;
  /** Number of dots in scale */
  total?: number;
  className?: string;
};

/**
 * Discrete dot scale visualizing a skill level.
 * Filled dots use accent color, empty use a faint rule color.
 */
export function SkillDots({ value, total = 5, className = "" }: Props) {
  const filled = Math.round((Math.max(0, Math.min(100, value)) / 100) * total);
  return (
    <div
      className={`inline-flex items-center gap-1 ${className}`}
      role="img"
      aria-label={`${filled} de ${total}`}
    >
      {Array.from({ length: total }).map((_, i) => {
        const isFilled = i < filled;
        return (
          <span
            key={i}
            aria-hidden
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ease-out ${isFilled ? "bg-accent" : "bg-canvas-deep"}`}
          />
        );
      })}
    </div>
  );
}
