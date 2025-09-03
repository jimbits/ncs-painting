# Cloudinary Image Performance Guide

## Core Image Attributes for Performance

### 1. `loading` Attribute
```tsx
loading: "lazy" | "eager"
```

**Best Practices:**
- **`"eager"`**: First 2-3 images above the fold (hero, primary content)
- **`"lazy"`**: Everything else (galleries, below-fold content)

**With Cloudinary:**
- Works perfectly with progressive loading (`fl_progressive`)
- Lazy loading pairs well with Cloudinary's auto-quality optimization

### 2. `decoding` Attribute
```tsx
decoding: "sync" | "async"
```

**Best Practices:**
- **`"sync"`**: Critical above-the-fold images (blocks rendering until decoded)
- **`"async"`**: Below-the-fold images (don't block rendering)

**With Cloudinary:**
- `"async"` is usually best since Cloudinary optimizes file sizes
- Use `"sync"` only for LCP candidates (hero images)

### 3. `fetchpriority` Attribute
```tsx
fetchpriority: "high" | "low"
```

**Best Practices:**
- **`"high"`**: LCP candidate images (usually just 1 per page)
- **`"low"`**: Non-critical images (thumbnails, decorative)

**With Cloudinary:**
- Especially important since Cloudinary URLs can be bandwidth-heavy
- Use sparingly - only 1-2 "high" priority images per page

## Additional Critical Attributes

### `sizes` Attribute
```tsx
sizes: string
```
**Most critical for performance** - tells browser which image to download from `srcSet`

**Best Practices:**
- Match actual display width, not container width
- Account for responsive behavior
- Test with DevTools to verify correct image selection

### `alt` Attribute
```tsx
alt: string
```
**Always required** for accessibility and SEO

### `crossorigin` Attribute
```tsx
crossorigin: "anonymous" | "use-credentials"
```
**For Cloudinary:**
- Usually not needed unless using Canvas or other CORS-sensitive APIs
- Cloudinary serves from CDN, so typically omit

## Recommended Attribute Combinations

### Hero Images (LCP candidates)
```tsx
<img
  loading="eager"
  decoding="sync"
  fetchpriority="high"
  sizes="100vw"
  alt="Descriptive alt text"
/>
```

### Content Images
```tsx
<img
  loading="lazy"
  decoding="async"
  sizes="(min-width: 768px) 600px, 100vw"
  alt="Descriptive alt text"
/>
```

### Gallery/Thumbnail Images
```tsx
<img
  loading="lazy"
  decoding="async"
  fetchpriority="low"
  sizes="(min-width: 1024px) 300px, 50vw"
  alt="Descriptive alt text"
/>
```

## Cloudinary-Specific Considerations

**Why these matter more with Cloudinary:**
- **File sizes vary greatly** based on transforms - priority helps browser allocate bandwidth
- **Progressive loading** works better with async decoding
- **Auto-format** means unpredictable file sizes - `fetchpriority` becomes crucial
- **CDN delivery** means network priority matters more than local caching

## TypeScript Considerations

**React's built-in types don't include `"auto"` values**, so use:

```tsx
interface CloudinaryImageProps {
  loading?: "lazy" | "eager";        // No "auto"
  decoding?: "sync" | "async";       // No "auto"
  fetchPriority?: "high" | "low";    // No "auto"
}
```

**Recommended defaults:**
```tsx
const CloudinaryImage = ({
  loading = "lazy",      // Better default than "auto"
  decoding = "async",    // Better default than "auto"
  fetchPriority,         // No default - only set when needed
  // ... other props
}: CloudinaryImageProps) => {
```