import { Avatar } from "@/components/atoms/Avatar";
import { Badge } from "@/components/atoms/Badge";
import { Card } from "@/components/atoms/Card";
import { SkillDots } from "@/components/atoms/SkillDots";
import { ContactItem } from "@/components/molecules/ContactItem";
import { SkillBar } from "@/components/molecules/SkillBar";
import { profile } from "@/data/profile";
import { languages } from "@/data/languages";
import { programmingLanguages } from "@/data/programmingLanguages";
import { extraSkills } from "@/data/extraSkills";

export function LeftSidebar() {
  return (
    <Card
      variant="surface"
      className="anim-rise stagger-1 flex flex-col gap-9 p-7 lg:h-[calc(100vh-2rem)] lg:overflow-y-auto"
    >
      {/* Top status bar */}
      <div className="flex items-baseline justify-between border-b border-rule pb-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em]">
        <span className="text-ink">/ Portafolio · 2026</span>
        <span className="inline-flex items-center gap-1.5 text-accent">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Disponible
        </span>
      </div>

      <header className="flex flex-col items-start text-left">
        <div className="relative">
          <Avatar src={profile.photo} alt={profile.name} size={108} />
          {/* Decorative leaf stamp */}
          <span
            aria-hidden
            className="font-mono absolute -bottom-1 -right-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-[9px] font-bold uppercase tracking-tight text-canvas ring-2 ring-surface"
          >
            GC
          </span>
        </div>
        <h1 className="mt-5 text-2xl font-bold tracking-tight text-ink">
          {profile.name}
        </h1>
        <p className="mt-1 text-sm font-medium text-ink-soft">
          Software Engineer
        </p>
        <p className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-mute">
          Backend / Data / DevOps
        </p>
      </header>

      <SidebarBlock label="A" title="Contacto">
        <div className="space-y-3">
          {profile.contact.map((c) => (
            <ContactItem key={c.label} item={c} />
          ))}
        </div>
      </SidebarBlock>

      <SidebarBlock label="B" title="Idiomas">
        <div className="space-y-4">
          {languages.map((l) => (
            <SkillBar key={l.name} skill={l} />
          ))}
        </div>
      </SidebarBlock>

      <SidebarBlock label="C" title="Lenguajes">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
          {programmingLanguages.map((l) => (
            <li key={l.name} className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between gap-2">
                <span className="truncate text-sm font-medium text-ink">
                  {l.name}
                </span>
                <span className="font-mono text-[9px] tabular-nums text-ink-mute">
                  {l.level}
                </span>
              </div>
              <SkillDots value={l.level} total={5} />
            </li>
          ))}
        </ul>
      </SidebarBlock>

      <SidebarBlock label="D" title="Habilidades extra">
        <div className="space-y-4">
          {extraSkills.map((cat) => (
            <div key={cat.category}>
              <div className="mb-2 text-xs font-semibold text-ink">
                {cat.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <Badge key={item} variant="default">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SidebarBlock>

      {/* Quote / personality footer */}
      <footer className="border-t border-rule pt-5">
        <p className="font-display text-balance text-base uppercase leading-snug text-ink-soft">
          Construyo cosas que se sostienen solas.
        </p>
        <p className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-mute">
          3 años en producción / stack agnóstico / abierto a remoto
        </p>
      </footer>
    </Card>
  );
}

function SidebarBlock({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-rule pt-7">
      <header className="mb-5 flex items-baseline justify-between">
        <span className="inline-flex items-center gap-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em]">
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
          />
          <span className="text-ink">{title}</span>
        </span>
        <span className="font-mono text-[10px] font-medium tabular-nums text-ink-mute">
          /{label}
        </span>
      </header>
      {children}
    </section>
  );
}
