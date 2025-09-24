interface PreloadHeroProps {
  publicId: string;
  cloudName?: string;
}

export const PreloadHero = ({
  publicId,
  cloudName = "jimbits",
}: PreloadHeroProps) => {
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  const transforms = "f_auto,q_auto,c_limit";

  return (
    <>
      <link rel="dns-prefetch" href="//res.cloudinary.com" />
      <link
        rel="preconnect"
        href="https://res.cloudinary.com"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        as="image"
        href={`${baseUrl}/w_1280,${transforms}/${publicId}`}
        media="(min-width: 1024px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={`${baseUrl}/w_768,${transforms}/${publicId}`}
        media="(min-width: 768px) and (max-width: 1023px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={`${baseUrl}/w_480,${transforms}/${publicId}`}
        media="(max-width: 767px)"
        fetchPriority="high"
      />
    </>
  );
};
