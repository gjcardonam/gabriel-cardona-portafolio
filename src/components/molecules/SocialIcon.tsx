import { Icon } from "@/components/atoms/Icon";
import type { Social } from "@/types";

type Props = { social: Social };

export function SocialIcon({ social }: Props) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      title={social.name}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:bg-teal-700 hover:text-white hover:ring-teal-700"
    >
      <Icon name={social.icon as never} size={20} />
    </a>
  );
}
