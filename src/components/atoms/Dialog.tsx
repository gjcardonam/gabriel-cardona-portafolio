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
        className="anim-fade absolute inset-0 cursor-default bg-ink/30 backdrop-blur-md"
      />
      {/* Modal: scale-in 250ms (within emil's 200-500ms range), strong ease-out, modals stay centered */}
      <div
        className={`anim-scale-in relative w-full ${MAX_WIDTH[maxWidth]} max-h-[90vh] overflow-hidden rounded-t-3xl bg-surface shadow-[0_24px_64px_-16px_rgba(9,9,11,0.25)] ring-1 ring-rule sm:rounded-3xl`}
      >
        <header className="flex items-baseline justify-between gap-4 border-b border-rule px-7 py-5">
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
              / Detalle
            </p>
            <h2 className="font-display mt-0.5 text-3xl uppercase text-ink">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar diálogo"
            className="press inline-flex h-9 w-9 flex-none items-center justify-center rounded-full text-ink-mute transition-colors duration-150 ease-out hover:bg-canvas-soft hover:text-ink"
          >
            <Icon name="close" size={18} />
          </button>
        </header>
        <div className="max-h-[calc(90vh-6rem)] overflow-y-auto px-7 py-7">
          {children}
        </div>
      </div>
    </div>
  );
}
