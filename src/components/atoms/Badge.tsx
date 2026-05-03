type Props = {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
};

export function Badge({ children, variant = "default", className = "" }: Props) {
  const styles =
    variant === "outline"
      ? "border border-slate-300 text-slate-700 bg-transparent"
      : "bg-teal-600/10 text-teal-700 border border-teal-600/20";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles} ${className}`}
    >
      {children}
    </span>
  );
}
