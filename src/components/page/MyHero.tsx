import { ChevronRightIcon } from "@heroicons/react/20/solid";
import NcsLogo from "@/icons/hero.svg";
export default function MyHero() {
  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg
          x="50%"
          y={-1}
          className="overflow-visible fill-gray-50 dark:fill-gray-800/20"
        >
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(80%-30rem)] lg:left-48 xl:left-[calc(0%-24rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-1108/632 w-277 bg-linear-to-r from-[#4626fb] to-[#221abc] opacity-20"
        />
      </div>
      <header className="mx-auto max-w-7xl px-6 pt-10 pb-24 md:grid md:grid-cols-2 md:grid-rows-[auto_1fr] lg:grid-rows-[300px_300px] lg:px-8">
        {/* HEADING 1 */}
        <div className="self-end">
          <p className="gradient-text text-center text-6xl/tight font-extrabold uppercase sm:mb-3 sm:text-6xl md:m-0 md:text-left md:text-5xl lg:text-[clamp(48px,5vw,80px)]">
            NCS Painting
          </p>
          <h1 className="text-center text-lg leading-6 font-bold text-pretty text-stone-600/85 sm:text-2xl md:text-left md:text-xl lg:text-2xl">
            Edmontons Complete Interior &{" "}
            <span className="block">Exterior House Painting Services</span>
          </h1>
        </div>

        {/* LOGO */}
        <NcsLogo className="mx-auto my-4 h-2/3 w-2/3 md:col-start-2 md:col-end-3 md:row-span-2 md:my-0 md:h-full md:w-full md:self-center" />

        {/* CALL TO ACTION */}
        <div className="max-w-2xl text-center md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 lg:mx-0 lg:self-start">
          <p className="xl: text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 md:text-left md:text-xl/tight lg:mt-4 dark:text-gray-400">
            NCS Painting specializes exclusively in residential home painting.
            We are dedicated to providing quality premium materials that protect
            your home inside and out.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
            <a
              href="#"
              className="rounded-md border border-red-600 bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400 dark:focus-visible:outline-red-500"
            >
              Call (780)-722-6555
            </a>
            <a
              href="#"
              className="rounded-md border border-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-indigo-700 dark:text-white"
            >
              Book Quote Online
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
