import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Icon } from "@/components/atoms/Icon";
import { MagneticPhoto } from "@/components/atoms/MagneticPhoto";
import { profile } from "@/data/profile";

type Props = {
  onOpenDialog?: () => void;
};

export function ProfileSection({ onOpenDialog }: Props) {
  return (
    <Card
      variant="surface"
      className="anim-rise stagger-1 relative overflow-hidden p-8 sm:p-12 lg:p-16"
    >
      {/* Ambient soft gradient mesh, forest tones behind the name */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(217, 119, 87, 0.35) 0%, rgba(251, 233, 223, 0.20) 35%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-32 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(106, 155, 204, 0.20) 0%, transparent 70%)",
        }}
      />

      {/* Top status bar */}
      <div className="relative flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em]">
        <span className="bg-ink px-2 py-0.5 text-canvas">/01</span>
        <span className="text-ink-mute">Perfil</span>
        <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-accent-tint px-3 py-1 text-accent-deep ring-1 ring-accent/30">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Disponible · Medellín, CO
        </span>
      </div>

      <div className="relative mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="anim-rise stagger-2 text-sm font-medium text-ink-soft">
            Hola, soy
          </p>
          <h1 className="font-display anim-rise stagger-3 mt-2 text-[clamp(3.5rem,11vw,8rem)] uppercase text-ink">
            Gabriel
            <br />
            <span className="text-accent">Cardona.</span>
          </h1>
          <p className="anim-rise stagger-4 mt-8 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            {profile.shortDescription}
          </p>
          <div className="anim-rise stagger-5 mt-10 flex flex-wrap items-center gap-4">
            <Button variant="primary" onClick={onOpenDialog}>
              Conoce más sobre mí
              <Icon name="arrowRight" size={14} />
            </Button>
            <a
              href="mailto:gjcardonam@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft underline-offset-4 transition-colors duration-150 ease-out hover:text-accent-deep hover:underline"
            >
              <Icon name="mail" size={14} />
              gjcardonam@gmail.com
            </a>
          </div>
        </div>

        {/* Photo with magnetic tilt + accent block anchor */}
        <figure className="anim-scale-in stagger-3 relative w-fit [perspective:900px]">
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-accent-soft"
          />
          <MagneticPhoto
            src={profile.photo}
            alt={profile.name}
            width={270}
            height={360}
            className="relative h-[300px] w-[230px] rounded-2xl sm:h-[360px] sm:w-[270px]"
          />
        </figure>
      </div>
    </Card>
  );
}
