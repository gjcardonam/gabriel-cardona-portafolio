"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/atoms/Icon";

type Props = {
  children: React.ReactNode;
  /** Pixels to scroll on each prev/next button click. */
  step?: number;
  className?: string;
};

/**
 * Horizontal scroller with hidden native scrollbar, prev/next buttons,
 * and edge fade hints. Vertical wheel still scrolls the page (no hijack).
 */
export function HorizontalScroller({
  children,
  step = 400,
  className = "",
}: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const updateState = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft < max - 4);
    };

    updateState();
    el.addEventListener("scroll", updateState, { passive: true });

    const resizeObserver = new ResizeObserver(updateState);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", updateState);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollBy = (delta: number) => {
    scrollerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto"
        tabIndex={-1}
      >
        {children}
      </div>

      {/* Edge fade hints */}
      <div
        aria-hidden
        className={`pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-canvas to-transparent transition-opacity duration-300 ease-out ${canScrollLeft ? "opacity-100" : "opacity-0"}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-canvas to-transparent transition-opacity duration-300 ease-out ${canScrollRight ? "opacity-100" : "opacity-0"}`}
      />

      {/* Prev / Next nav buttons */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={() => scrollBy(-step)}
        disabled={!canScrollLeft}
        className="press absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-ink shadow-card ring-1 ring-rule transition-[opacity,transform,background-color] duration-200 ease-out hover:bg-accent hover:text-canvas hover:ring-accent disabled:pointer-events-none disabled:opacity-0"
      >
        <Icon name="arrowRight" size={16} className="rotate-180" />
      </button>
      <button
        type="button"
        aria-label="Siguiente"
        onClick={() => scrollBy(step)}
        disabled={!canScrollRight}
        className="press absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-ink shadow-card ring-1 ring-rule transition-[opacity,transform,background-color] duration-200 ease-out hover:bg-accent hover:text-canvas hover:ring-accent disabled:pointer-events-none disabled:opacity-0"
      >
        <Icon name="arrowRight" size={16} />
      </button>
    </div>
  );
}
