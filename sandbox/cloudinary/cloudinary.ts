// src/lib/cloudinary.ts
export const cloudinaryConfig = {
  cloudName: "jimbits",
  secure: true,
};

// Type definitions for Cloudinary transformations
export interface CloudinaryTransformation {
  width?: number;
  height?: number;
  crop?: "fill" | "limit" | "crop" | "scale" | "pad" | "fit" | "thumb";
  aspectRatio?: string;
  gravity?: "auto" | "face" | "center";
  quality?: number | "auto" | "auto:best" | "auto:good" | "auto:eco";
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  effect?: string;
  blur?: number;
  brightness?: number;
  grayscale?: boolean;
  dpr?: number | "auto";
}

// Helper function to build optimized Cloudinary URLs
export function buildCloudinaryUrl(
  publicId: string,
  transformations: CloudinaryTransformation = {}
): string {
  // Build transformation array
  const transforms: string[] = [];

  // Add transformations if specified
  if (transformations.format !== undefined)
    transforms.push(`f_${transformations.format}`);
  if (transformations.width !== undefined)
    transforms.push(`w_${transformations.width}`);
  if (transformations.height !== undefined)
    transforms.push(`h_${transformations.height}`);
  if (transformations.crop !== undefined)
    transforms.push(`c_${transformations.crop}`);
  if (transformations.quality !== undefined)
    transforms.push(`q_${transformations.quality}`);
  if (transformations.gravity !== undefined)
    transforms.push(`g_${transformations.gravity}`);
  if (transformations.blur !== undefined)
    transforms.push(`e_blur:${transformations.blur}`);
  if (transformations.brightness !== undefined)
    transforms.push(`e_brightness:${transformations.brightness}`);
  if (transformations.grayscale === true) transforms.push("e_grayscale");
  if (transformations.dpr !== undefined)
    transforms.push(`dpr_${transformations.dpr}`);

  // Add default transformations if none provided
  if (transforms.length === 0) {
    transforms.push("f_auto", "q_auto");
  }

  // Handle Cloudinary URL construction
  const transformationString =
    transforms.length > 0 ? `${transforms.join(",")}` : "";

  // Check if publicId is already a full Cloudinary URL
  if (publicId.startsWith("https://res.cloudinary.com")) {
    // Parse the URL to extract relevant parts
    const urlParts = publicId.split("/upload/");
    if (urlParts.length === 2) {
      return `${urlParts[0]}/upload/${transformationString}/${urlParts[1]}`;
    }
    return publicId; // Return as is if URL structure is unexpected
  }

  // Ensure publicId doesn't start with a slash
  const cleanPublicId = publicId.startsWith("/")
    ? publicId.substring(1)
    : publicId;

  // Construct and return the full Cloudinary URL
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${transformationString}/${cleanPublicId}`;
}
