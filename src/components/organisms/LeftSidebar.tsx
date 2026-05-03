import { Avatar } from "@/components/atoms/Avatar";
import { Badge } from "@/components/atoms/Badge";
import { Card } from "@/components/atoms/Card";
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
        <span className="text-ink">/ Portfolio · 2026</span>
        <span className="inline-flex items-center gap-1.5 text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Available
        </span>
      </div>

      <header className="flex flex-col items-start text-left">
        <Avatar src={profile.photo} alt={profile.name} size={104} />
        <h1 className="mt-5 text-2xl font-bold tracking-tight text-ink">
          {profile.name}
        </h1>
        <p className="mt-1 text-sm font-medium text-ink-soft">
          Senior Software Engineer
        </p>
        <p className="mt-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-mute">
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
        <div className="space-y-3">
          {languages.map((l) => (
            <SkillBar key={l.name} skill={l} />
          ))}
        </div>
      </SidebarBlock>

      <SidebarBlock label="C" title="Lenguajes">
        <div className="space-y-3">
          {programmingLanguages.map((l) => (
            <SkillBar key={l.name} skill={l} />
          ))}
        </div>
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
      <header className="mb-5 flex items-baseline justify-between font-mono text-[10px] font-medium uppercase tracking-[0.18em]">
        <span className="text-ink">/ {title}</span>
        <span className="text-accent">{label}</span>
      </header>
      {children}
    </section>
  );
}
