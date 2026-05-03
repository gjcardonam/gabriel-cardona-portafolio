import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen" />
      <div className="relative px-0 py-16">
        <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 border-t border-paper/30 pb-12 pt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">
          <span className="text-accent-soft">§05</span>
          <span>Final · Contacto</span>
          <span className="hidden sm:inline">EOF</span>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h3 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[0.95] tracking-[-0.02em]">
              ¿Hablamos
              <span className="text-accent-soft">?</span>
            </h3>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75">
              Estoy abierto a roles remotos mid-senior y staff en backend, data
              engineering y DevOps. Escríbeme y conversamos.
            </p>
            <a
              href="mailto:gjcardonam@gmail.com"
              className="mt-6 inline-block font-display text-2xl font-medium text-accent-soft underline-offset-8 hover:underline"
            >
              gjcardonam@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">
              Sígueme
            </span>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/85 transition-colors hover:text-accent-soft"
              >
                → {s.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-paper/15 pt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50 sm:flex-row sm:items-center">
          <span>
            © {year} · {profile.name}
          </span>
          <span>Next.js · TypeScript · Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
