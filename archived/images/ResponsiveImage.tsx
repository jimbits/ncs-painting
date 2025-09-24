import { cn } from "@/lib/utils";

interface ResponsiveImageProps {
  publicId: string;
  alt: string;
  className?: string;
  quality?: number | "auto";
  format?: "auto" | "jpg" | "png" | "webp" | "avif";
  loading?: "lazy" | "eager";
  decoding?: "sync" | "async";
  fetchPriority?: "high" | "low";
}
const ResponsiveImage = ({
  publicId,
  alt,
  className = "",
  loading = "lazy",
  format = "auto",
  quality = "auto",
}: ResponsiveImageProps) => {
  const baseUrl = "https://res.cloudinary.com/jimbits/image/upload";
  const transforms = `f_${format},q_${quality},c_limit`;

  return (
    <picture>
      {/* 2xl: 1536px+ */}
      <source
        media="(min-width: 1536px)"
        srcSet={`${baseUrl}/w_1536,${transforms}/${publicId}`}
        sizes="100vw"
      />

      {/* xl: 1280px - 1535px */}
      <source
        media="(min-width: 1280px)"
        srcSet={`${baseUrl}/w_1280,${transforms}/${publicId}`}
        sizes="100vw"
      />

      {/* lg: 1024px - 1279px */}
      <source
        media="(min-width: 1024px)"
        srcSet={`${baseUrl}/w_1024,${transforms}/${publicId}`}
        sizes="100vw"
      />

      {/* md: 768px - 1023px */}
      <source
        media="(min-width: 768px)"
        srcSet={`${baseUrl}/w_768,${transforms}/${publicId}`}
        sizes="100vw"
      />

      {/* sm: 640px - 767px */}
      <source
        media="(min-width: 640px)"
        srcSet={`${baseUrl}/w_640,${transforms}/${publicId}`}
        sizes="100vw"
      />

      {/* xs: 480px - 639px */}
      <source
        media="(min-width: 480px)"
        srcSet={`${baseUrl}/w_480,${transforms}/${publicId}`}
        sizes="100vw"
      />

      {/* Default: < 480px */}
      <img
        src={`${baseUrl}/w_480,${transforms}/${publicId}`}
        alt={alt}
        loading={loading}
        decoding="async"
        className={className}
      />
    </picture>
  );
};
