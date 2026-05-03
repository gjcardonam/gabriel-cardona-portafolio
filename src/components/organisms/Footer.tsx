import { Card } from "@/components/atoms/Card";
import { Icon } from "@/components/atoms/Icon";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-4 px-2 lg:mt-6 lg:px-4">
      <Card variant="ink" className="overflow-hidden p-8 sm:p-12 lg:p-16">
        <div className="flex items-baseline gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em]">
          <span className="bg-canvas px-2 py-0.5 text-ink">/05</span>
          <span className="text-canvas/60">Final</span>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h3 className="font-display text-[clamp(3rem,8vw,5.5rem)] uppercase leading-[0.95]">
              ¿Hablamos?
            </h3>
            <p className="mt-6 max-w-md text-base leading-relaxed text-canvas/75">
              Estoy abierto a roles remotos mid-senior y staff en backend, data
              engineering y DevOps. Escríbeme y conversamos.
            </p>
            <a
              href="mailto:gjcardonam@gmail.com"
              className="mt-6 inline-flex items-center gap-3 text-xl font-semibold text-accent-soft underline-offset-8 transition-colors duration-150 ease-out hover:text-canvas hover:underline"
            >
              <Icon name="mail" size={18} />
              gjcardonam@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-canvas/50">
              / Sígueme
            </p>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="press group inline-flex items-center justify-between gap-8 rounded-xl bg-canvas/5 px-4 py-2.5 text-sm font-medium text-canvas ring-1 ring-canvas/15 transition-[color,background-color,box-shadow] duration-150 ease-out hover:bg-canvas/10 hover:text-accent-soft"
              >
                <span>{s.name}</span>
                <Icon name="arrowRight" size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-canvas/10 pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-canvas/50 sm:flex-row sm:items-center">
          <span>© {year} · {profile.name}</span>
          <span>Next.js · TypeScript · Tailwind</span>
        </div>
      </Card>
    </footer>
  );
}
