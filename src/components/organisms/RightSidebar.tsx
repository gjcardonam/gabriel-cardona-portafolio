import { SocialIcon } from "@/components/molecules/SocialIcon";
import { socials } from "@/data/socials";

export function RightSidebar() {
  return (
    <aside className="relative bg-paper-soft px-3 py-9 lg:h-screen">
      {/* Vertical rule on left edge */}
      <span
        aria-hidden
        className="absolute left-0 top-9 bottom-9 w-px bg-ink/20"
      />
      <div className="flex flex-row items-center justify-center gap-3 lg:flex-col lg:gap-2">
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute lg:mb-3 lg:block lg:[writing-mode:vertical-rl] lg:rotate-180">
          Sígueme
        </span>
        {socials.map((s) => (
          <SocialIcon key={s.name} social={s} />
        ))}
      </div>
    </aside>
  );
}
