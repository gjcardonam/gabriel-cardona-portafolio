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
        <div className="flex items-center justify-between text-xs">
          {label && <span className="text-slate-700">{label}</span>}
          {showValue && (
            <span className="text-slate-500">{safeValue}%</span>
          )}
        </div>
      )}
      <div
        className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200"
        role="progressbar"
        aria-valuenow={safeValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-600 to-teal-400 transition-all duration-500"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}
