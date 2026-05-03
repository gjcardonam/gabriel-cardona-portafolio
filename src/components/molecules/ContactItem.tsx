import { Icon } from "@/components/atoms/Icon";
import type { ContactItem as ContactItemData } from "@/types";

type Props = { item: ContactItemData };

export function ContactItem({ item }: Props) {
  const content = (
    <div className="grid grid-cols-[14px_1fr] items-start gap-3">
      <Icon
        name={item.icon as never}
        size={14}
        className="mt-1 text-ink-mute"
      />
      <div className="min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
          {item.label}
        </div>
        <div className="truncate text-sm text-ink">{item.value}</div>
      </div>
    </div>
  );
  if (item.href) {
    return (
      <a
        href={item.href}
        className="block transition-colors hover:text-accent [&_.text-ink]:hover:text-accent"
      >
        {content}
      </a>
    );
  }
  return content;
}
