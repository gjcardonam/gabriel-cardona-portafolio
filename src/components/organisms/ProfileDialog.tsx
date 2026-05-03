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
      <div className="space-y-6">
        <p className="text-base leading-relaxed text-slate-700">
          {profile.about}
        </p>

        <section>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
            Lo que aporto
          </h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h}
                className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700"
              >
                <span className="inline-block h-1.5 w-1.5 flex-none rounded-full bg-teal-500" />
                {h}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
            Contacto rápido
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.contact.map((c) =>
              c.href ? (
                <a key={c.label} href={c.href}>
                  <Badge>{c.value}</Badge>
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
