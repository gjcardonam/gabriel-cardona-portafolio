import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Icon } from "@/components/atoms/Icon";
import { profile } from "@/data/profile";

type Props = {
  onOpenDialog?: () => void;
};

const HIGHLIGHTS = [
  { label: "Backend", icon: "server" as const },
  { label: "Data", icon: "database" as const },
  { label: "DevOps", icon: "cloud" as const },
];

export function ProfileSection({ onOpenDialog }: Props) {
  return (
    <Card variant="surface" className="anim-rise stagger-1 overflow-hidden p-8 sm:p-12 lg:p-16">
      {/* Top meta */}
      <div className="flex items-baseline gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em]">
        <span className="bg-ink px-2 py-0.5 text-canvas">/01</span>
        <span className="text-ink-mute">Perfil</span>
        <span className="ml-auto hidden text-ink-mute sm:inline">
          Medellín · Colombia
        </span>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="anim-rise stagger-2 text-sm font-medium text-ink-soft">
            Hola, soy
          </p>
          <h1 className="font-display anim-rise stagger-3 mt-2 text-[clamp(3.5rem,11vw,8rem)] uppercase text-ink">
            Gabriel
            <br />
            <span className="text-accent">Cardona</span>
          </h1>
          <p className="anim-rise stagger-4 mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {profile.shortDescription}
          </p>
          <div className="anim-rise stagger-5 mt-10 flex flex-wrap items-center gap-4">
            <Button variant="primary" onClick={onOpenDialog}>
              Conoce más sobre mí
              <Icon name="arrowRight" size={14} />
            </Button>
            <a
              href="mailto:gjcardonam@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft underline-offset-4 transition-colors duration-150 ease-out hover:text-accent hover:underline"
            >
              <Icon name="mail" size={14} />
              gjcardonam@gmail.com
            </a>
          </div>
        </div>

        {/* Photo with subtle accent block behind it */}
        <figure className="anim-scale-in stagger-3 relative w-fit">
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-accent"
          />
          <div className="relative h-[300px] w-[230px] overflow-hidden rounded-2xl bg-surface ring-1 ring-rule shadow-card sm:h-[360px] sm:w-[270px]">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="270px"
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="mt-4 flex items-center justify-between font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-mute">
            <span>G. Cardona</span>
            <span className="text-accent">→ {new Date().getFullYear()}</span>
          </figcaption>
        </figure>
      </div>

      {/* Highlight strip */}
      <div className="anim-rise stagger-6 mt-14 grid grid-cols-1 gap-3 border-t border-rule pt-8 sm:grid-cols-3">
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.label}
            className="flex items-center gap-3 rounded-xl bg-canvas-soft px-4 py-3 ring-1 ring-rule"
          >
            <Icon name={h.icon} size={18} className="text-accent" />
            <div>
              <div className="text-sm font-semibold text-ink">{h.label}</div>
              <div className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-mute">
                Foco principal
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
