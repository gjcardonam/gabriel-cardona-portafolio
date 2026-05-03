import { Card } from "@/components/atoms/Card";
import { SocialIcon } from "@/components/molecules/SocialIcon";
import { socials } from "@/data/socials";

export function RightSidebar() {
  return (
    <Card variant="surface" className="anim-rise stagger-3 p-3">
      <div className="flex flex-row items-center justify-center gap-2 lg:flex-col lg:gap-2">
        <span className="hidden font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-ink-mute lg:mb-1 lg:block lg:text-center">
          / Redes
        </span>
        {socials.map((s) => (
          <SocialIcon key={s.name} social={s} />
        ))}
      </div>
    </Card>
  );
}
