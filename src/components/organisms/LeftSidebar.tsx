import { Avatar } from "@/components/atoms/Avatar";
import { Badge } from "@/components/atoms/Badge";
import { ContactItem } from "@/components/molecules/ContactItem";
import { SkillBar } from "@/components/molecules/SkillBar";
import { profile } from "@/data/profile";
import { languages } from "@/data/languages";
import { programmingLanguages } from "@/data/programmingLanguages";
import { extraSkills } from "@/data/extraSkills";

export function LeftSidebar() {
  return (
    <aside className="relative bg-paper-soft px-7 py-9 lg:h-screen lg:overflow-y-auto">
      {/* Vertical rule on right edge */}
      <span
        aria-hidden
        className="absolute right-0 top-9 bottom-9 w-px bg-ink/20"
      />

      <header className="anim-rise stagger-1 flex flex-col items-start text-left">
        <div className="flex w-full items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
            Portfolio · 2026
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            v1
          </span>
        </div>
        <Avatar
          src={profile.photo}
          alt={profile.name}
          size={104}
          className="mt-6"
        />
        <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.05] text-ink">
          {profile.name}
        </h1>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
          {profile.title}
        </p>
      </header>

      <SidebarBlock label="A" title="Contacto" stagger={2}>
        <div className="space-y-3">
          {profile.contact.map((c) => (
            <ContactItem key={c.label} item={c} />
          ))}
        </div>
      </SidebarBlock>

      <SidebarBlock label="B" title="Idiomas" stagger={3}>
        <div className="space-y-3">
          {languages.map((l) => (
            <SkillBar key={l.name} skill={l} />
          ))}
        </div>
      </SidebarBlock>

      <SidebarBlock label="C" title="Lenguajes" stagger={4}>
        <div className="space-y-3">
          {programmingLanguages.map((l) => (
            <SkillBar key={l.name} skill={l} />
          ))}
        </div>
      </SidebarBlock>

      <SidebarBlock label="D" title="Habilidades extra" stagger={5}>
        <div className="space-y-4">
          {extraSkills.map((cat) => (
            <div key={cat.category}>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                {cat.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SidebarBlock>
    </aside>
  );
}

function SidebarBlock({
  label,
  title,
  stagger,
  children,
}: {
  label: string;
  title: string;
  stagger: number;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`anim-rise stagger-${stagger} mt-9 border-t border-ink/15 pt-6`}
    >
      <header className="mb-5 flex items-baseline justify-between">
        <h2 className="font-display text-base font-semibold text-ink">
          {title}
        </h2>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          §{label}
        </span>
      </header>
      {children}
    </section>
  );
}
