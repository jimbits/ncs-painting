import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TestProps {
  children?: ReactNode;
  className?: string;
}

function Test({ className }: TestProps) {
  return (
    <header
      className={cn(
        "relative flex min-h-[calc(100dvh_-_64px)] flex-col justify-between overflow-y-hidden"
      )}
    >
      <div>
        <div className="absolute inset-0">
          <picture>
            <img
              src="https://res.cloudinary.com/jimbits/image/upload/c_fill,f_auto,q_20,w_500/v1756580859/ncs-painting-edmonton/landing/ncs-painting-edmoton-house-painting.png"
              alt="test the water"
              className="min-h-[calc(100dvh_-_64px)] object-cover md:w-full lg:min-h-[650px]"
              loading="eager"
            />
          </picture>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/75 to-stone-900/50" />
      </div>

      {/* contents */}
      <div className="relative z-10 sm:mx-8 lg:ml-[calc(15dvw_+_3rem)]">
        <div className="text-center lg:text-left">
          <p className="text-4xl/tight font-extrabold text-white sm:mb-3 sm:text-6xl md:m-0 md:text-7xl lg:text-9xl">
            NCS Painting
          </p>
          <h1 className="text-lg leading-6 font-bold text-pretty text-stone-50/85 sm:text-2xl lg:items-start">
            Edmontons Complete Interior &{" "}
            <span className="block md:inline">
              Exterior House Painting Services
            </span>
          </h1>
        </div>

        <div className="xs:mx-auto mx-4 my-4 max-w-xl border border-black/20 px-4 py-6 backdrop-blur-lg lg:mx-0 lg:max-w-[800px] lg:bg-black/25 lg:tracking-wider">
          <p className="text-center text-base/snug font-semibold text-white lg:text-left lg:text-xl">
            NCS Painting specializes exclusively in residential home painting.
            We are dedicated to providing quality premium materials that protect
            your home inside and out.
          </p>
        </div>
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
            className="bg-purple-50/ rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white"
          >
            Book Quote Online
          </button>
        </div>
      </div>

      {/* SERVICE AREA */}
      <div className="relative flex flex-col items-center justify-center bg-gray-900 py-4 pt-2">
        <h2 className="text-center text-base font-extrabold text-white">
          Service Area
          <span className="flex justify-center gap-0.25 text-xs opacity-85 sm:gap-2 sm:text-base">
            <span>Edmonton </span>
            <span>-</span>
            <span>Sherwood Park</span>
            <span>-</span>
            <span>Fort Saskatchewan</span>
            <span>-</span>

            <span>St Albert</span>
          </span>
        </h2>
      </div>
    </header>
  );
}

export default Test;
