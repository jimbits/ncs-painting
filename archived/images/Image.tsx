import { cn } from "@/lib/utils";

import React from "react";

type ImageFormat = "avif" | "webp" | "jpg" | "png";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  breakpoints?: Record<string, number>; // e.g. { sm: 640, md: 768, lg: 1024 }
  formats?: ImageFormat[];
  sizes?: string;
  loading?: "lazy" | "eager";
  decoding?: "sync" | "async" | "auto";
  fetchPriority?: "high" | "low" | "auto";
}

const defaultBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  breakpoints = defaultBreakpoints,
  formats = ["avif", "webp"],
  sizes = "(max-width: 768px) 100vw, 1280px",
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto",
}) => {
  // Remove extension from src for building format variants
  const baseName = src.replace(/\.[^/.]+$/, "");

  return (
    <picture>
      {formats.map((format) => (
        <source
          key={format}
          srcSet={Object.values(breakpoints)
            .map((bp) => `${baseName}-${bp}.${format} ${bp}w`)
            .join(", ")}
          sizes={sizes}
          type={`image/${format}`}
        />
      ))}

      {/* Fallback <img> */}
      <img
        src={`${baseName}-${width}.jpg`}
        srcSet={Object.values(breakpoints)
          .map((bp) => `${baseName}-${bp}.jpg ${bp}w`)
          .join(", ")}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className={cn("", className)}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
};
