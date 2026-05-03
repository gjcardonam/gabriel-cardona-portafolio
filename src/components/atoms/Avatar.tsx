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
      className={`relative overflow-hidden rounded-full ring-4 ring-white shadow-md bg-white ${className}`}
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
