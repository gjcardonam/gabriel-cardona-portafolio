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
        <div className="flex items-baseline justify-between font-mono text-[11px]">
          {label && (
            <span className="text-ink-soft tracking-wide">{label}</span>
          )}
          {showValue && (
            <span className="text-ink-mute tabular-nums">
              {String(safeValue).padStart(2, "0")}
            </span>
          )}
        </div>
      )}
      <div
        className="mt-1.5 h-px w-full bg-rule"
        role="progressbar"
        aria-valuenow={safeValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full bg-accent transition-all duration-700 ease-out"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}
