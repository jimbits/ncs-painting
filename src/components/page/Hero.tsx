import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeroProps {
  children?: ReactNode;
  className?: string;
}

function Hero({ className }: HeroProps) {
  return (
    <header className="responsive">
      <div className="relative overflow-hidden bg-[url('https://res.cloudinary.com/jimbits/image/upload/c_scale,w_1440/v1756580726/ncs-painting-edmonton/house-at-night_xalhqy.png')] bg-cover bg-position-[-375px_0px] bg-no-repeat sm:bg-bottom-left">
        {/* Overlay Gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-800/50 to-pink-700/15" /> */}

        <div className="md:my-[5svw] lg:mx-auto lg:w-[90%] xl:my-[10svh] xl:w-[75%]">
          <div className="relative z-50 flex min-h-[calc(85svh-30px)] flex-col items-center justify-center sm:mx-8 md:block md:min-h-0">
            <div className="text-center lg:text-left">
              <p className="text-4xl/tight font-extrabold text-white sm:mb-3 sm:text-6xl md:m-0 md:text-7xl lg:text-9xl">
                NCS Painting
              </p>
              <h1 className="text-xl leading-snug font-bold text-pretty text-stone-50 sm:text-2xl lg:items-start">
                Edmontons Complete Interior &{" "}
                <span className="block md:inline">
                  Exterior House Painting Services
                </span>
              </h1>
            </div>
            <p className="mx-4 my-4 max-w-xl bg-indigo-950 px-4 py-6 text-center text-base/snug font-medium text-white sm:my-10 sm:text-lg sm:font-bold md:mx-auto md:my-4 lg:mx-0 lg:my-8 lg:max-w-2xl lg:text-left lg:text-xl lg:text-white/80">
              NCS Painting specializes exclusively in residential home painting.
              We are dedicated to providing quality premium materials that
              protect your home inside and out.
            </p>
            <h2 className="mx-auto mt-4 mb-3 w-sm px-3 text-center text-lg font-bold text-white opacity-90 sm:mb-5 sm:max-w-lg sm:text-2xl md:w-xl md:max-w-none lg:mx-0 lg:text-left">
              Get Your Free House Painting Estimate{" "}
              <span className="md:block">Call For A Free Quote Today</span>
            </h2>

            <div className="mx-auto flex w-xs flex-col gap-3 text-white sm:w-sm md:w-full md:max-w-none md:flex-row md:justify-center md:gap-6 lg:justify-start">
              <button
                type="button"
                className="rounded-lg bg-red-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-700 lg:w-xs"
              >
                Call (780)-722-5555
              </button>

              {/* Book Quote Online */}

              <button
                type="button"
                className="0 bg-purple-50/ rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white"
              >
                Book Quote Online
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-purple-950/40 from-60% to-purple-900/15" />
        </div>
      </div>

      {/* SERVICE AREA */}
      <div className="flex h-[calc(15svh-30px)] flex-col items-center justify-center bg-indigo-950 pt-2 pb-4">
        <h2 className="text-center text-xl font-extrabold text-white">
          Service Area
          <span className="flex justify-center gap-1.5 text-xs opacity-85">
            <span>Edmonton </span>
            <span>Sherwood Park</span>
            <span>Fort Saskatchewan</span>

            <span>St Albert</span>
          </span>
        </h2>
      </div>
    </header>
  );
}

export default Hero;
