import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Icon } from "@/components/atoms/Icon";
import { MagneticPhoto } from "@/components/atoms/MagneticPhoto";
import { profile } from "@/data/profile";

type Props = {
  onOpenDialog?: () => void;
};

const HIGHLIGHTS = [
  {
    label: "Backend",
    icon: "server" as const,
    detail: "FastAPI · PostgreSQL",
  },
  {
    label: "Data",
    icon: "database" as const,
    detail: "Dagster · BigQuery",
  },
  {
    label: "DevOps",
    icon: "cloud" as const,
    detail: "Docker · GCP · CI/CD",
  },
];

export function ProfileSection({ onOpenDialog }: Props) {
  return (
    <Card
      variant="surface"
      className="anim-rise stagger-1 relative overflow-hidden p-8 sm:p-12 lg:p-16"
    >
      {/* Ambient soft gradient mesh — aurora touch behind the name */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(52, 211, 153, 0.35) 0%, rgba(167, 243, 208, 0.18) 35%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-32 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(5, 150, 105, 0.18) 0%, transparent 70%)",
        }}
      />

      {/* Top status bar with multi-info */}
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
          <figcaption className="mt-4 flex items-center justify-between font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-mute">
            <span>G. Cardona · 2014→{new Date().getFullYear()}</span>
            <span className="text-accent-deep">12 yrs shipping</span>
          </figcaption>
        </figure>
      </div>

      {/* Highlight strip with detail per area */}
      <div className="anim-rise stagger-6 relative mt-14 grid grid-cols-1 gap-3 border-t border-rule pt-8 sm:grid-cols-3">
        {HIGHLIGHTS.map((h, i) => (
          <div
            key={h.label}
            className="group relative flex items-center gap-4 overflow-hidden rounded-xl bg-canvas-soft px-4 py-3.5 ring-1 ring-rule transition-[background-color,box-shadow] duration-200 ease-out hover:bg-surface hover:ring-accent/30 hover:shadow-card"
          >
            <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-surface text-accent-deep ring-1 ring-rule transition-colors duration-200 ease-out group-hover:bg-accent group-hover:text-canvas group-hover:ring-accent">
              <Icon name={h.icon} size={16} />
            </span>
            <div className="min-w-0">
              <div className="text-sm font-semibold tracking-tight text-ink">
                {h.label}
              </div>
              <div className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink-mute">
                {h.detail}
              </div>
            </div>
            <span className="ml-auto font-mono text-[10px] font-medium tracking-tight text-ink-faint">
              0{i + 1}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
