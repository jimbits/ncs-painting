import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeroProps {
  children?: ReactNode;
  className?: string;
}

function Hero({ className }: HeroProps) {
  return (
    <header className="responsive flex min-h-[calc(100svh-60px)] flex-col justify-between">
      <div className="relative overflow-hidden bg-[url('https://res.cloudinary.com/jimbits/image/upload/c_scale,w_1440/v1756580726/ncs-painting-edmonton/house-at-night_xalhqy.png')] bg-cover bg-position-[-375px_0px] bg-no-repeat sm:block">
        {/* Overlay Gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-800/50 to-pink-700/15" /> */}

        <div className="relative z-50 mx-auto flex min-h-[calc(85svh-30px)] flex-col justify-center sm:max-w-lg">
          <p className="text-center text-4xl/tight font-extrabold text-white">
            NCS Painting
          </p>
          <h1 className="text-center text-xl leading-tight font-bold text-pretty text-stone-50">
            Edmontons Complete Interior &{" "}
            <span className="block">Exterior House Painting Services</span>
          </h1>
          <p className="my-5 bg-indigo-950 px-4 py-6 text-center text-base/snug font-medium text-white">
            NCS Painting specializes exclusively in residential home painting.
            We are dedicated to providing quality premium materials that protect
            your home inside and out.
          </p>
          <h2 className="mx-auto mt-4 mb-3 px-3 text-center text-lg font-bold text-white opacity-90">
            Get Your Free House Painting Estimate Today Call For A Free Quote
          </h2>

          <div className="n mx-auto flex w-2/3 flex-col gap-3 text-white">
            <button
              type="button"
              className="rounded-lg bg-red-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-700"
            >
              Call (780)-722-5555
            </button>

            {/* Book Quote Online */}

            <button
              type="button"
              className="0 rounded-lg border border-white px-8 py-3 font-semibold text-white"
            >
              Book Quote Online
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-indigo-950/60 from-70% to-indigo-900/10" />
      </div>

      {/* SERVICE AREA */}
      <div className="h-[calc(15svh-30px)] bg-indigo-950 pt-2 pb-4">
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
