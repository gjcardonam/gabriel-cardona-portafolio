import { SocialIcon } from "@/components/molecules/SocialIcon";
import { socials } from "@/data/socials";

export function RightSidebar() {
  return (
    <aside className="flex flex-row items-center justify-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70 lg:h-[calc(100vh-3rem)] lg:flex-col lg:items-stretch lg:justify-start lg:p-3">
      <span className="hidden text-[10px] font-bold uppercase tracking-widest text-slate-400 lg:mb-2 lg:block lg:text-center">
        Redes
      </span>
      {socials.map((s) => (
        <SocialIcon key={s.name} social={s} />
      ))}
    </aside>
  );
}
