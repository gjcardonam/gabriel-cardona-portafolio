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
      className="press group inline-flex h-11 w-11 items-center justify-center rounded-xl bg-canvas-soft text-ink-soft ring-1 ring-rule transition-[color,background-color,box-shadow] duration-150 ease-out hover:bg-ink hover:text-canvas hover:ring-ink"
    >
      <Icon name={social.icon as never} size={18} />
    </a>
  );
}
