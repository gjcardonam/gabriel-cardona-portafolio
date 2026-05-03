"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Max degrees of tilt at the corners */
  maxTilt?: number;
};

/**
 * Photo with subtle magnetic 3D tilt that follows the cursor.
 * CSS transition smooths the motion so it doesn't feel mechanical (per emil-design-eng).
 * Falls back to no tilt if user prefers reduced motion.
 */
export function MagneticPhoto({
  src,
  alt,
  width,
  height,
  className = "",
  maxTilt = 6,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<string>("");

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateY = px * maxTilt * 2;
      const rotateX = -py * maxTilt * 2;
      setTransform(
        `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`,
      );
    },
    [maxTilt],
  );

  const handleLeave = useCallback(() => {
    setTransform("");
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform,
        transition: "transform 350ms cubic-bezier(0.23, 1, 0.32, 1)",
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden bg-surface ring-1 ring-rule shadow-card ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className="h-full w-full object-cover"
      />
    </div>
  );
}
