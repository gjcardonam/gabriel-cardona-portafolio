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
    <aside className="flex flex-col gap-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto">
      <header className="flex flex-col items-center text-center">
        <Avatar src={profile.photo} alt={profile.name} size={120} />
        <h1 className="mt-4 text-xl font-bold text-slate-900">{profile.name}</h1>
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-teal-700">
          {profile.title}
        </p>
      </header>

      <SidebarBlock title="Contacto">
        <div className="space-y-3">
          {profile.contact.map((c) => (
            <ContactItem key={c.label} item={c} />
          ))}
        </div>
      </SidebarBlock>

      <SidebarBlock title="Idiomas">
        <div className="space-y-3">
          {languages.map((l) => (
            <SkillBar key={l.name} skill={l} />
          ))}
        </div>
      </SidebarBlock>

      <SidebarBlock title="Lenguajes de programación">
        <div className="space-y-3">
          {programmingLanguages.map((l) => (
            <SkillBar key={l.name} skill={l} />
          ))}
        </div>
      </SidebarBlock>

      <SidebarBlock title="Habilidades extra">
        <div className="space-y-4">
          {extraSkills.map((cat) => (
            <div key={cat.category}>
              <div className="mb-2 text-xs font-semibold text-slate-700">
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
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-500">
        {title}
      </h2>
      {children}
    </section>
  );
}
