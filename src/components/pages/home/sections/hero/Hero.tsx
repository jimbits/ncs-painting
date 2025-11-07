import Link from 'next/link';
import { HeroImage } from './HeroImage';

export default function Hero() {
  return (
    <>
      <header
        className="mx-auto mt-8 max-w-7xl md:max-w-[90%]"
        aria-label="NCS Painting Edmonton Hero Section"
      >
        {/* Left column */}
        <div>
          <div className="md:flex md:items-center md:justify-center">
            {/* Mobile Hero Image */}
            <HeroImage className="hidden md:order-2 md:mx-0 md:block md:w-[40%]" />

            {/* Call to Action */}
            <div className="order-1 mt-8 max-w-[700px] md:w-[60%]">
              <div className="md:mb-8">
                <p className="text-center text-xl font-extrabold text-stone-500 md:text-left lg:text-2xl">
                  NCS Painting
                </p>
                <h1 className="mb-4 text-center text-2xl font-extrabold tracking-tight text-pretty text-stone-700 sm:mb-6 sm:px-4 sm:text-4xl md:px-0 md:text-left lg:text-4xl xl:text-5xl dark:text-white">
                  Edmonton's Trusted Residential Painters With Over 30 Years
                  Experience
                </h1>
                {/* H2: Geographic Keywords */}
                <h2 className="text-center text-base font-extrabold tracking-tight text-pretty text-stone-600/60 sm:text-xl md:text-left lg:text-2xl dark:text-white">
                  Serving Edmonton, St. Albert, Sherwood Park & Fort
                  Saskatchewan
                </h2>

                <HeroImage className="order-2 mx-auto my-8 w-[55%] max-w-[520px] md:mx-0 md:hidden md:w-[40%]" />
              </div>

              <div className="mb-4">
                <h3 className="text-center text-2xl/6 leading-[1] font-bold text-pretty text-stone-700/85 md:text-left md:text-[clamp(2rem,2rem,8rem)] lg:max-w-[520px] lg:text-4xl">
                  Get Your Free Residential Painting Estimate
                </h3>
              </div>

              <div className="mb-12 flex flex-row justify-center gap-4 text-sm md:justify-start lg:flex-row lg:text-base">
                <Link
                  href="/book-quote"
                  className="block max-w-[289px] rounded-md bg-red-500 px-3.5 py-2.5 font-semibold text-white transition-colors hover:border-rose-700 hover:bg-rose-700 hover:text-white"
                >
                  Book a Free Quote Online
                </Link>
                <Link
                  href="tel:+17807225577"
                  className="block max-w-[289px] rounded-md border border-blue-500 px-3.5 py-2.5 font-semibold text-blue-500 transition-colors hover:bg-indigo-700 hover:text-white"
                >
                  Call (780) 722-5577
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
