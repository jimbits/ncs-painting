import NCSPaintingLogo from '@/icons/ncs-painting-logo.svg';
import Link from 'next/link';
export default function Hero() {
  const reallyLongLineOfCodeThatShouldDefinitelyBreakAt80CharactersWhenPrettierFormatsItProperly =
    'this is a test';
  return (
    // Fixed version with proper overflow control
    <div className="relative">
      <header className="mx-auto max-w-7xl px-3 pb-24 md:grid md:grid-cols-2 md:grid-rows-[auto_1fr] lg:grid-rows-[300px_300px] lg:px-8">
        {/* HEADING 1 */}
        <div className="self-end">
          <p className="gradient-text dark:gradient-text text-center text-4xl font-extrabold uppercase xs:text-6xl/tight sm:mb-3 sm:text-6xl md:m-0 md:text-left md:text-5xl lg:text-[clamp(48px,5vw,80px)]">
            NCS Painting
          </p>
          <h1 className="text-center leading-tight font-bold text-pretty text-stone-600/85 sm:text-2xl md:text-left md:text-xl lg:text-3xl/8 dark:text-white">
            Edmontons Complete Interior &
            <span className="block">Exterior House Painting Services</span>
          </h1>
        </div>

        {/* LOGO */}
        <NCSPaintingLogo className="mx-auto my-5 w-[80%] max-w-[380px] md:col-start-2 md:col-end-3 md:row-span-2 md:my-0 md:h-full md:max-w-none md:self-center lg:w-full lg:max-w-none" />

        {/* CALL TO ACTION */}
        <div className="mx-auto md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 md:mx-0 md:w-full lg:mx-0 lg:self-start">
          <p className="mx-auto mb-5 text-center text-[17px]/5 font-medium tracking-tight text-gray-600 xs:w-[85%] sm:my-3 sm:mb-6 sm:w-[80%] sm:text-xl/5 md:mx-0 md:mb-4 md:w-full md:text-left md:text-lg/tight lg:mt-4 lg:mb-6 dark:text-gray-200">
            We are exclusively an interior and exterior home painting services.
            Dedicated to quality, care, and satisfaction.
          </p>

          <div className="flex flex-col items-center gap-4 sm:mx-auto sm:w-2/3 sm:flex-row md:mx-0 md:w-full md:flex-col md:items-start">
            <Link
              href="tel:+1234567890"
              className="text-md block w-full max-w-[250px] rounded-md border border-rose-500 bg-rose-500 px-3.5 py-2.5 text-center font-semibold text-white shadow-xs transition-colors hover:border-rose-700 hover:bg-rose-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-rose-500 dark:text-white dark:hover:bg-rose-700 dark:focus-visible:outline-red-500"
            >
              Call (780)-722-6555
            </Link>
            <Link
              href="/"
              type="button"
              className="text-md block w-full max-w-[250px] rounded-md border border-indigo-500 bg-indigo-500 px-3.5 py-2.5 text-center font-semibold text-white transition-colors hover:bg-indigo-700 hover:text-white dark:border-indigo-400 dark:bg-indigo-400 dark:text-white hover:dark:border-indigo-500 hover:dark:bg-indigo-500"
            >
              Book Quote Online
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
