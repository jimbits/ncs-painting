# Picture Element


```html
	<picture>
						{/* 2xl: 1536px and up */}
						<source
							media="(min-width: 1536px)"
							srcSet="https://res.cloudinary.com/jimbits/image/upload/f_auto,q_auto:eco/v1756171559/roll-on-painting/painting-wall-red-room-before-after-restoration-refurbishment_157125-6682_rg2xqe.avif"
							type="image/webp"
						/>

						{/* xl: 1280px and up */}
						<source
							media="(min-width: 1280px)"
							srcSet="https://res.cloudinary.com/jimbits/image/upload/f_auto,q_auto:eco/v1756171559/roll-on-painting/painting-wall-red-room-before-after-restoration-refurbishment_157125-6682_rg2xqe.avif"
							type="image/webp"
						/>

						{/* lg: 1024px and up */}
						<source
							media="(min-width: 1024px)"
							srcSet="https://res.cloudinary.com/jimbits/image/upload/f_auto,q_auto:eco/v1756171559/roll-on-painting/painting-wall-red-room-before-after-restoration-refurbishment_157125-6682_rg2xqe.avif"
							type="image/webp"
						/>

						{/* md: 768px and up */}
						<source
							media="(min-width: 768px)"
							srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,q_auto:good,w_700/v1755899501/roll-on-painting/painted-living-room-orange-trim-white-edmonto.webp"
							type="image/webp"
						/>
 
						{/* sm: 640px and up */}
						<source
							media="(min-width: 640px)"
							srcSet="https://res.cloudinary.com/jimbits/image/upload/f_auto,q_auto:eco/v1756171559/roll-on-painting/painting-wall-red-room-before-after-restoration-refurbishment_157125-6682_rg2xqe.avif"
							type="image/avif"
						/>

						{/* Default: mobile first (below 640px) */}
						<img
							src="https://res.cloudinary.com/jimbits/image/upload/f_auto,q_auto:good/v1756171559/roll-on-painting/painting-wall-red-room-before-after-restoration-refurbishment_157125-6682_rg2xqe.avif"
							alt="Painted living room with orange trim and white walls in Edmonton home renovation"
							loading="lazy"
							className="w-full h-auto"
						/>
					</picture>

```