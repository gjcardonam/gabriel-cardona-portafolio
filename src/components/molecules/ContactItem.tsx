import { Icon } from "@/components/atoms/Icon";
import type { ContactItem as ContactItemData } from "@/types";

type Props = { item: ContactItemData };

export function ContactItem({ item }: Props) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-teal-50 text-teal-700">
        <Icon name={item.icon as never} size={16} />
      </span>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          {item.label}
        </div>
        <div className="truncate text-sm text-slate-800">{item.value}</div>
      </div>
    </div>
  );
  if (item.href) {
    return (
      <a
        href={item.href}
        className="block rounded-lg p-1 -m-1 transition-colors hover:bg-slate-100"
      >
        {content}
      </a>
    );
  }
  return content;
}
