// src/utils/cloudinary-loader.ts
import type { ImageLoaderProps } from "next/image";

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  // Define default transformations
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];

  // Handle both full Cloudinary URLs and relative paths
  if (src.startsWith("https://res.cloudinary.com")) {
    // Extract the file path from the URL (everything after /upload/)
    const parts = src.split("/upload/");
    return `${parts[0]}/upload/${params.join(",")}/v1/${parts[1]}`;
  } else {
    // Assume it's a relative path to be uploaded to Cloudinary
    return `https://res.cloudinary.com/jimbits/image/upload/${params.join(",")}/v1/${src}`;
  }
}
