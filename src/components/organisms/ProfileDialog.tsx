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
        <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
          {profile.about}
        </p>

        <section>
          <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
            / Lo que aporto
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h}
                className="flex items-center gap-3 rounded-xl border border-rule bg-canvas-soft px-4 py-3 text-sm text-ink"
              >
                <span className="font-mono text-[10px] font-medium tracking-tight text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {h}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
            / Contacto rápido
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.contact.map((c) =>
              c.href ? (
                <a key={c.label} href={c.href}>
                  <Badge variant="accent">{c.value}</Badge>
                </a>
              ) : (
                <Badge key={c.label} variant="default">
                  {c.value}
                </Badge>
              ),
            )}
          </div>
        </section>
      </div>
    </Dialog>
  );
}
