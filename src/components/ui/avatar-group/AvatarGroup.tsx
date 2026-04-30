import { Avatar } from "../avatar/Avatar";

export type AvatarGroupItem = {
  alt: string;
  initials: string;
};

export interface AvatarGroupProps {
  items?: AvatarGroupItem[];
  max?: number;
}

const defaultItems: AvatarGroupItem[] = [
  { alt: "Gurney", initials: "GK" },
  { alt: "Analytics Agent", initials: "AI" },
  { alt: "Marketing", initials: "MK" },
  { alt: "Product", initials: "PR" },
];

export function AvatarGroup({ items = defaultItems, max = 3 }: AvatarGroupProps) {
  const visibleItems = items.slice(0, max);
  const overflow = Math.max(items.length - visibleItems.length, 0);

  return (
    <div className="flex items-center">
      {visibleItems.map((item, index) => (
        <div className="-ml-2 first:ml-0" key={item.alt} style={{ zIndex: visibleItems.length - index }}>
          <Avatar alt={item.alt} initials={item.initials} />
        </div>
      ))}
      {overflow > 0 ? (
        <span className="-ml-2 inline-flex h-8 min-w-8 items-center justify-center rounded-full border-2 border-white bg-gray-100 px-2 text-xs font-semibold text-gray-600">
          +{overflow}
        </span>
      ) : null}
    </div>
  );
}
