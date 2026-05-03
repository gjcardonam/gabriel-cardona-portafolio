import { Card } from "@/components/atoms/Card";
import { Icon } from "@/components/atoms/Icon";
import { LocalClock } from "@/components/atoms/LocalClock";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-4 px-2 lg:mt-6 lg:px-4">
      <Card variant="ink" className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
        {/* Decorative gradient mesh in corner */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(120, 140, 93, 0.45) 0%, rgba(217, 119, 87, 0.22) 40%, transparent 70%)",
          }}
        />

        {/* Top status row */}
        <div className="relative flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em]">
          <span className="bg-canvas px-2 py-0.5 text-ink">/05</span>
          <span className="text-canvas/60">Final · Hablemos</span>
          <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-canvas/5 px-3 py-1 text-canvas/80 ring-1 ring-canvas/15">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-soft" />
            </span>
            <LocalClock className="font-mono tabular-nums" /> · Medellín
          </span>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h3 className="font-display text-balance text-[clamp(3rem,8vw,5.5rem)] uppercase leading-[0.95]">
              ¿Hablamos<span className="text-accent-soft">?</span>
            </h3>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-canvas/75">
              Construyo backend, data pipelines y plataforma. A veces simulo
              pozos. Si lo que tienes encaja, escríbeme. Respondo en menos de
              24 horas.
            </p>
            <a
              href="mailto:gjcardonam@gmail.com"
              className="press group mt-8 inline-flex items-center gap-3 rounded-xl bg-canvas px-5 py-3 text-base font-semibold tracking-tight text-ink transition-[background-color,color,box-shadow] duration-200 ease-out hover:bg-accent hover:text-canvas hover:shadow-[0_12px_28px_-12px_rgba(90,106,69,0.5)]"
            >
              <Icon name="mail" size={18} />
              <span>gjcardonam@gmail.com</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink/10 text-ink transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:bg-canvas group-hover:text-accent">
                <Icon name="arrowRight" size={12} />
              </span>
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
                <span className="inline-flex items-center gap-2.5">
                  <Icon
                    name={s.icon as never}
                    size={14}
                    className="text-canvas/70 transition-colors duration-150 ease-out group-hover:text-accent-soft"
                  />
                  {s.name}
                </span>
                <Icon
                  name="external"
                  size={12}
                  className="text-canvas/40 transition-all duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-accent-soft"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mt-12 flex flex-col items-start justify-between gap-2 border-t border-canvas/10 pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-canvas/50 sm:flex-row sm:items-center">
          <span>© {year} · {profile.name}</span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-accent-soft" />
            Next.js · TypeScript · Tailwind
          </span>
        </div>
      </Card>
    </footer>
  );
}
