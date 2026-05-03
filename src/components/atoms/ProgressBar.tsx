type Props = {
  value: number;
  label?: string;
  showValue?: boolean;
};

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
        className="mt-1.5 h-[3px] w-full overflow-hidden rounded-full bg-canvas-deep"
        role="progressbar"
        aria-valuenow={safeValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-accent"
          style={{
            width: `${safeValue}%`,
            transition: "width 600ms cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        />
      </div>
    </div>
  );
}
