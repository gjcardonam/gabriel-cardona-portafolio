import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export function Avatar({ src, alt, size = 96, className = "" }: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-full bg-surface ring-4 ring-surface shadow-card ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        priority
        className="h-full w-full object-cover"
      />
    </div>
  );
}
