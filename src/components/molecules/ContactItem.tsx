import { Icon } from "@/components/atoms/Icon";
import type { ContactItem as ContactItemData } from "@/types";

type Props = { item: ContactItemData };

export function ContactItem({ item }: Props) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-canvas-soft text-ink-soft ring-1 ring-rule">
        <Icon name={item.icon as never} size={14} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-mute">
          {item.label}
        </div>
        <div className="truncate text-sm font-medium text-ink">{item.value}</div>
      </div>
    </div>
  );
  if (item.href) {
    return (
      <a
        href={item.href}
        className="block rounded-xl p-1 -m-1 transition-colors duration-150 ease-out hover:bg-canvas-soft"
      >
        {content}
      </a>
    );
  }
  return content;
}
