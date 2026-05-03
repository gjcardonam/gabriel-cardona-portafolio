type Props = {
  value: number;
  label?: string;
  showValue?: boolean;
};

/**
 * Skill indicator with subtle tick marks every 25% (visual rhythm)
 * and a small "head" marker at the end of the filled segment.
 */
export function ProgressBar({ value, label, showValue = true }: Props) {
  const safeValue = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex items-baseline justify-between">
          {label && (
            <span className="text-sm font-medium text-ink">{label}</span>
          )}
          {showValue && (
            <span className="font-mono text-[10px] tabular-nums text-ink-mute">
              {String(safeValue).padStart(2, "0")}
            </span>
          )}
        </div>
      )}
      <div
        className="relative mt-2 h-[6px] w-full overflow-hidden rounded-full bg-canvas-deep"
        role="progressbar"
        aria-valuenow={safeValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        {/* Tick marks at 25, 50, 75 */}
        {[25, 50, 75].map((tick) => (
          <span
            key={tick}
            aria-hidden
            className="absolute top-0 h-full w-px bg-canvas"
            style={{ left: `${tick}%` }}
          />
        ))}
        {/* Filled segment with end marker */}
        <div
          className="relative h-full rounded-full bg-accent"
          style={{
            width: `${safeValue}%`,
            transition: "width 600ms cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          <span
            aria-hidden
            className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent ring-2 ring-canvas"
          />
        </div>
      </div>
    </div>
  );
}
