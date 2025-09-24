// components/CloudinaryImage.tsx - Fixed version
"use client";

import { CldImage } from "next-cloudinary";

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  crop?: "fill" | "fit" | "scale" | "crop" | "thumb" | "auto";
  format?: "auto" | "webp" | "avif" | "jpg" | "png" | "gif";
  quality?: "auto" | number;
  dpr?: "auto" | number;
  blur?: string;
  priority?: boolean;
  sizes?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

export default function CloudinaryImage({
  src,
  alt,
  width,
  height,
  className,
  crop = "fill",
  format = "auto",
  quality = "auto",
  dpr = "auto",
  blur = "blur",
  priority = false,
  sizes = "(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw",

  blurDataURL,
}: CloudinaryImageProps) {
  return (
    <CldImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={className}
      crop={crop}
      format={format}
      quality={quality}
      dpr={dpr}
      priority={priority}
      sizes={sizes}
    />
  );
}
