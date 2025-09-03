# 🖼️ Image Loading Attributes for Web Performance

The `<img>` element has several **loading-related attributes** that affect **performance, UX, and SEO**.  
Here are the most important ones (as of 2025, supported in modern browsers):  

---

## 1. `loading`
Controls how the image is fetched:

- `loading="eager"` → Loads immediately (default for above-the-fold images).  
- `loading="lazy"` → Defers loading until the image is near the viewport.  
- `loading="auto"` → Browser decides (rarely used).  

✅ **Best practice:** Use `lazy` for below-the-fold content.

---

## 2. `decoding`
Hints how the browser should decode the image:

- `decoding="sync"` → Decode immediately, might block rendering.  
- `decoding="async"` → Decode asynchronously (recommended for performance).  
- `decoding="auto"` → Browser decides (default).  

✅ Use `async` for most images unless you *must* block rendering.

---

## 3. `fetchpriority`
Signals to the browser how important the image is:

- `fetchpriority="high"` → Prioritize (e.g., hero image).  
- `fetchpriority="low"` → Deprioritize (e.g., offscreen images).  
- Default = `auto`.  

✅ Helps avoid **LCP (Largest Contentful Paint)** delays.

---

## 4. `importance`
- Similar to `fetchpriority`, but **less widely supported**.  
- Usually skip in favor of `fetchpriority`.

---

## 5. `srcset` & `sizes`
For **responsive images**:  

- `srcset` → Multiple versions (different widths or resolutions).  
- `sizes` → How much space the image will take in different viewport conditions.  

✅ Lets the browser download the smallest suitable file.

---

## 6. `width` and `height`
Not loading attributes, but **critical for performance**:

- Define **intrinsic size** → prevents **Cumulative Layout Shift (CLS)**.  
- Browsers can reserve the correct space before the image loads.

---

## 7. `type` & `<picture>` source selection
When using `<picture>` with `<source>`:

- `type="image/avif"` or `type="image/webp"` → Allows format switching.  

✅ Ensures modern formats are loaded when supported.

---

## 8. `referrerpolicy`
Controls how referrer headers are sent when fetching the image.  

- Example: `referrerpolicy="no-referrer"`

---

## ✅ Example of an Optimized Hero Image

```html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img 
    src="hero.jpg" 
    srcset="hero-640.jpg 640w, hero-1280.jpg 1280w, hero-1920.jpg 1920w"
    sizes="(max-width: 768px) 100vw, 1280px"
    width="1280" height="720"
    alt="Hero banner"
    loading="eager"
    decoding="async"
    fetchpriority="high"
  >
</picture>
