"use client";

import { Dialog } from "@/components/atoms/Dialog";
import { Badge } from "@/components/atoms/Badge";
import { profile } from "@/data/profile";

type Props = {
  open: boolean;
  onClose: () => void;
};

const HIGHLIGHTS = [
  "Backend & APIs en producción",
  "Pipelines de datos orquestados",
  "Plataforma interna multi-tenant",
  "Observabilidad de punta a punta",
  "Cross software / industrial",
  "Documentación técnica seria",
];

export function ProfileDialog({ open, onClose }: Props) {
  return (
    <Dialog open={open} onClose={onClose} title="Sobre mí" maxWidth="lg">
      <div className="space-y-8">
        <p className="font-display text-xl leading-snug text-ink first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-accent">
          {profile.about}
        </p>

        <section>
          <header className="mb-4 flex items-baseline justify-between border-t border-ink/15 pt-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
              Lo que aporto
            </h3>
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
              §A
            </span>
          </header>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h}
                className="grid grid-cols-[auto_1fr] items-start gap-3"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed text-ink-soft">
                  {h}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <header className="mb-4 flex items-baseline justify-between border-t border-ink/15 pt-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
              Contacto rápido
            </h3>
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
              §B
            </span>
          </header>
          <div className="flex flex-wrap gap-2">
            {profile.contact.map((c) =>
              c.href ? (
                <a key={c.label} href={c.href}>
                  <Badge variant="accent">{c.value}</Badge>
                </a>
              ) : (
                <Badge key={c.label}>{c.value}</Badge>
              ),
            )}
          </div>
        </section>
      </div>
    </Dialog>
  );
}
