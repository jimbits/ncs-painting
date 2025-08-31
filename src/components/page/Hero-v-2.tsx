import { ReactNode } from "react";
import { cn } from "@/lib/utils";
interface HeroProps {
  children?: ReactNode;
  className?: string;
}

function Hero({ className }: HeroProps) {
  return (
    <div
      className={cn(
        "max-w-[1440px] lg:mx-8 lg:grid lg:grid-cols-[500px_1fr] lg:grid-rows-[250px_250px] lg:gap-x-8 xl:grid-cols-[550px_1fr] 2xl:mx-auto",
        className
      )}
    >
      {/* Headings */}
      <div className="text-center lg:mb-4 lg:self-end lg:text-left">
        <p className="gradient-text text-6xl/normal font-extrabold tracking-tight text-pretty sm:text-5xl lg:text-[68px] lg:leading-18 lg:tracking-tighter xl:text-7xl">
          NCS Painting
        </p>
        <h1 className="text-center text-[20px] leading-5 font-bold">
          Edmonton House Painting Services
          <span className="block">
            Interior & Exterior Residential Painters
          </span>
        </h1>
      </div>

      {/* Hero Image */}
      <div className="mt-4 mb-6 px-2 sm:mt-6 lg:row-span-3">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,h_600,q_auto/v1755899500/roll-on-painting/hero-8_deusbs.jpg"
          />

          <source
            media="(min-width: 640px)"
            srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,h_600,q_auto/v1755899500/ncs-painting-edmonton/exterior-home-edmonton-ellerslie-painted-blue-pictured-in-the-evening-light"
          />

          <img
            src="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,h_500,q_auto/v1755899500/ncs-painting-edmonton/exterior-home-edmonton-ellerslie-painted-blue-pictured-in-the-evening-light"
            alt="Painted living room with orange trim and white walls in Edmonton home renovation"
            loading="lazy"
            className="h-auto w-full rounded-md object-cover lg:h-full"
          />
        </picture>
      </div>

      {/* Call To Action */}
      <div className="">
        <h2 className="text-center text-lg leading-tight font-semibold text-pretty sm:text-xl xl:text-3xl">
          Edmonton's Most Trusted Residential Painting Contractors
        </h2>
        <div className="flex flex-col items-center text-center sm:flex-row sm:justify-center md:flex-row md:justify-evenly lg:justify-between lg:self-start xl:justify-start">
          <div className=" ">
            <h3 className="mt-2 text-base leading-snug font-extrabold text-red-600 lg:text-base lg:leading-4">
              Transform Your Home
              <span className="block"> Call for Free Quote</span>
            </h3>
            <button
              type="button"
              className="my-2 w-full rounded-lg border border-rose-500 px-6 py-3 text-base font-semibold text-rose-500 lg:text-sm xl:text-base"
            >
              Call Now (780) 722-5555
            </button>
          </div>

          <div className=" ">
            <h3 className="mt-2 text-base leading-snug font-extrabold text-indigo-600 lg:text-base lg:leading-4">
              Schedule Your Free
              <span className="block"> Painting Quote Online</span>
            </h3>
            <button
              type="button"
              className="my-2 w-full rounded-lg border border-indigo-600 px-6 py-3 font-bold text-indigo-600 lg:text-sm xl:text-base"
            >
              Book Online Quick Response
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
