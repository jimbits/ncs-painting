// components/ResponsiveCloudinaryImage.tsx
"use client";

import { CldImage } from "next-cloudinary";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  aspectRatio?: string; // e.g., "16:9", "4:3", "1:1"
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ResponsiveCloudinaryImage({
  src,
  alt,
  aspectRatio = "16:9",
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw",
}: ResponsiveImageProps) {
  return (
    <CldImage
      src={src}
      alt={alt}
      width={1200} // Max width for largest screens
      height={675} // Calculated from 16:9 aspect ratio
      className={className}
      crop="fill"
      gravity="auto"
      format="auto"
      quality="auto"
      dpr="auto" // Automatically handles retina displays
      priority={priority}
      sizes={sizes} // This tells Next.js which sizes to generate
    />
  );
}
