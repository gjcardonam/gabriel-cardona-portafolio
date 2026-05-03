"use client";

import { useEffect } from "react";
import { Icon } from "@/components/atoms/Icon";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg";
};

const MAX_WIDTH = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-3xl",
};

export function Dialog({
  open,
  onClose,
  title,
  children,
  maxWidth = "md",
}: Props) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
    >
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/70 backdrop-blur-[2px] anim-fade"
      />
      <div
        className={`relative w-full ${MAX_WIDTH[maxWidth]} max-h-[90vh] overflow-hidden bg-paper ring-1 ring-ink shadow-[12px_12px_0_0_rgba(23,21,19,0.08)] anim-rise`}
      >
        <header className="flex items-center justify-between gap-4 border-b border-ink/15 px-6 py-4">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Detalle
            </p>
            <h2 className="font-display text-2xl font-semibold leading-tight text-ink">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar diálogo"
            className="inline-flex h-9 w-9 flex-none items-center justify-center text-ink-mute transition-colors hover:bg-ink hover:text-paper"
          >
            <Icon name="close" size={18} />
          </button>
        </header>
        <div className="max-h-[calc(90vh-5.5rem)] overflow-y-auto px-6 py-6">
          {children}
        </div>
      </div>
    </div>
  );
}
