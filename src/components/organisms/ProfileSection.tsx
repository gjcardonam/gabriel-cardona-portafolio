import { Avatar } from "@/components/atoms/Avatar";
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
      className="overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/70 sm:p-10"
    >
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[160px_1fr]">
        <div className="flex justify-center sm:justify-start">
          <Avatar src={profile.photo} alt={profile.name} size={160} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Perfil
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-sm font-medium text-slate-600">
            {profile.title}
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            {profile.shortDescription}
          </p>
          <div className="mt-6">
            <Button variant="primary" onClick={onOpenDialog}>
              <Icon name="code" size={16} />
              Conoce más sobre mí
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
