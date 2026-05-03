import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { profile } from "@/data/profile";

type Props = {
  onOpenDialog?: () => void;
};

export function ProfileSection({ onOpenDialog }: Props) {
  return (
    <section
      id="perfil"
      className="relative scroll-mt-6 overflow-hidden border-b border-ink/15 pb-20 pt-12"
    >
      {/* Top meta strip */}
      <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 border-t border-ink pt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
        <span className="text-accent">§01</span>
        <span>Perfil · Hoja de vida</span>
        <span className="hidden sm:inline">Medellín / CO</span>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
            Senior Software Engineer · Backend · Data · DevOps
          </p>
          <h1 className="mt-4 font-display text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-ink">
            Gabriel
            <br />
            <span className="text-accent">Cardona.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            {profile.shortDescription}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="primary" onClick={onOpenDialog}>
              Conoce más sobre mí
              <Icon name="arrowRight" size={14} />
            </Button>
            <a
              href="mailto:gjcardonam@gmail.com"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft underline-offset-4 hover:text-accent hover:underline"
            >
              gjcardonam@gmail.com →
            </a>
          </div>
        </div>

        <figure className="relative w-fit">
          {/* Plate / mat behind photo */}
          <div className="absolute -inset-3 -z-10 bg-paper-deep" />
          <div className="relative h-[260px] w-[200px] overflow-hidden bg-white ring-1 ring-ink sm:h-[320px] sm:w-[240px]">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="240px"
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
            <span>Fig. 01</span>
            <span>{new Date().getFullYear()}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
