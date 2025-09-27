import PaintBrushIcon from '@/icons/paint-brush.svg';
import PaintBucketIcon from '@/icons/paint-bucket.svg';
import PaintRollerIcon from '@/icons/paint-roller.svg';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const benefits = [
  'Free Estimate',
  'Transparent Pricing',
  'Flexible work hours',
  'Low-VOC Paint Options',
  '30+ years experience',
  'Licensed & Insured',
  'Family owned business',
  'Work Quality Guarantee',
];

export default function StAlbert() {
  return (
    <div className="relative mb-28 grid grid-cols-1 grid-rows-[auto] bg-white lg:grid-cols-2 lg:gap-8 dark:bg-gray-900">
      <div className="mx-4 max-w-full overflow-hidden rounded-xl lg:self-center">
        <img
          src="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_800/v1755899496/ncs-painting-edmonton/landing/banner_qjlpp1.jpg"
          srcSet="
      https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_452/v1755899496/ncs-painting-edmonton/landing/banner_qjlpp1.jpg 452w,
      https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_591/v1755899496/ncs-painting-edmonton/landing/banner_qjlpp1.jpg 591w,
      https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_672/v1755899496/ncs-painting-edmonton/landing/banner_qjlpp1.jpg 672w,
      https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_768/v1758727257/ncs-painting-edmonton/landing/140db34b-bf42-47b6-a964-ed60e5f0c3e4.png 768w
    "
          sizes="(max-width: 640px) 100vw,
           (max-width: 768px) 591px,
           (max-width: 1024px) 672px,
          800px"
          width="2363"
          height="1483"
          alt="room being painted red with ladder, red paint, roller and brush at the center of the room on the floor"
          className="h-auto w-full lg:aspect-square"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </div>

      <div className="relative mx-auto self-center justify-self-center py-14 sm:py-32 2xl:px-4">
        <div className="pr-6 pl-6 lg:p-0">
          <header className="xs:text-center lg:text-left">
            <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
              Local House Painters St. Albert
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Residential Home Painting Specialists
            </p>
            <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-300">
              Trusted St. Albert painting company specializing in residential
              interior and exterior services. Fifteen years delivering premium
              residential painting services with superior quality and results.
            </p>
          </header>
          <ul
            role="list"
            className="mx-auto mt-10 w-fit max-w-lg text-sm/7 text-gray-950 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-1 lg:mx-0 xl:w-full dark:text-gray-200"
          >
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="h-7 w-5 flex-none text-indigo-500 dark:text-gray-200"
                />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex gap-6 xs:justify-center lg:justify-start">
            <a
              href="#"
              className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-gray-900 dark:shadow-none hover:dark:text-white"
            >
              Get Your Free Quote
            </a>
            <a
              href="#"
              className="rounded-md border border-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-white dark:text-white dark:shadow-none hover:dark:border-indigo-600"
            >
              Find Out More
            </a>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 926 676"
        aria-hidden="true"
        className="absolute -bottom-24 left-24 w-231.5 transform-gpu blur-[118px]"
      >
        <path
          d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
          fillOpacity=".4"
        />
        <defs>
          <linearGradient
            id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
            x1="926.392"
            x2="-109.635"
            y1=".176"
            y2="321.024"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
