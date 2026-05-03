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
      className="group relative inline-flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-accent"
    >
      <Icon name={social.icon as never} size={20} />
      <span className="pointer-events-none absolute inset-0 ring-1 ring-ink/0 transition-all group-hover:ring-ink" />
    </a>
  );
}
