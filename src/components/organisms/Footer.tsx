import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-8 text-slate-100 shadow-sm sm:p-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">
            ¿Hablamos?
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
            Estoy abierto a roles remotos mid-senior y staff en backend, data
            engineering y DevOps. Escríbeme y conversamos.
          </p>
          <a
            href="mailto:gjcardonam@gmail.com"
            className="mt-4 inline-block text-base font-semibold text-teal-300 underline-offset-4 hover:underline"
          >
            gjcardonam@gmail.com
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-teal-300 hover:text-teal-200"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-4 text-xs text-slate-400 sm:flex-row sm:items-center">
        <span>
          © {year} {profile.name}. Todos los derechos reservados.
        </span>
        <span>
          Construido con Next.js, TypeScript y Tailwind.
        </span>
      </div>
    </footer>
  );
}
