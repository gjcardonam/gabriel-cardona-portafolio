"use client";

import { useEffect, useState } from "react";

type Props = {
  className?: string;
  /** IANA timezone string */
  timezone?: string;
  /** Locale for formatting */
  locale?: string;
};

/**
 * Live local clock — adds personality by showing the author is real and present.
 * Updates every second; falls back gracefully on SSR (hydration safe).
 */
export function LocalClock({
  className = "",
  timezone = "America/Bogota",
  locale = "es-CO",
}: Props) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return (
      <span className={className} suppressHydrationWarning>
        --:--:--
      </span>
    );
  }

  const formatter = new Intl.DateTimeFormat(locale, {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <span className={className} suppressHydrationWarning>
      {formatter.format(now)}
    </span>
  );
}
