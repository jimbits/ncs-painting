# Responsive Images

Picture Element
```jsx
  <div className="w-full md:w-[768px] lg:w-[1000px]">
        <picture>
              {/* Mobile: Smaller Crop */}   
          <source
            media="(max-width: 480px)"
            srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,q_auto,w_400/v1756171559/ncs-painting-edmonton/painting-wall-red-room-before-after-restoration-refurbishment_157125-6682_rg2xqe"
            sizes="100vw"
          />

          <source
            media="(max-width: 768px)"
            srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,q_auto,w_768/v1756171847/ncs-painting-edmonton/renovation-modernization-with-drywall-plaster-walk-through-room_157125-7190_vawp1w"
          />

          {/* Tablet: Wider crop */}
          <source
            media="(max-width: 1024px)"
            srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,q_auto,w_1024/v1756248122/ncs-painting-edmonton/hero-4_ue8yt7.webp"
          />

          {/* Desktop: Full landscape */}
          <img
            src="https://res.cloudinary.com/jimbits/image/upload/v1756171559/ncs-painting-edmonton/room-before-after-restoration-yellow-walls-before-and-after.avif"
            alt="Blue painted home in Ellerslie, Edmonton"
            className="h-auto w-full"
          />
        </picture>
     </div>
```

## Cloudinary Image Component

```jsx
  
        <div className="w-[400px] sm:w-[620px] xl:w-[900px]">
        <CloudinaryImage
          src="ncs-painting-edmonton/exterior-home-edmonton-ellerslie-painted-blue-pictured-in-the-evening-light"
          alt="Description"
          width={900}
          height={504}
          format="auto"
          // This will work with AVIF
          quality={65} // Start here and adjust down if needed
          sizes="(max-width: 639px) 400px, (max-width: 1279px) 620px, 900px"
          className="h-auto w-full"
        />
      </div>  

```