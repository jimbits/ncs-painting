// src/components/ui/NCSImage.tsx
import { buildCloudinaryUrl } from "@/lib/cloudinary";
import Image from "next/image";

interface NCSImageProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  height?: string;
  overlayOpacity?: number;
}

export default function NCSImage({
  imageUrl,
  title,
  subtitle,
  height = "60vh",
  overlayOpacity = 0.3,
}: NCSImageProps) {
  // Generate optimized Cloudinary URL for NCSImage image
  const optimizedImageUrl = buildCloudinaryUrl(imageUrl, {
    format: "auto",
    quality: "auto:good",
    width: 1920,
    dpr: "auto",
    gravity: "auto",
  });

  return (
    <div className="relative w-full" style={{ height }}>
      <Image
        src={optimizedImageUrl}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      >
        <h1 className="text-4xl font-bold md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 text-xl md:text-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}
