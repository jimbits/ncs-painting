import { PaintBrushIcon, PaintRollerIcon, PaintBucketIcon } from "@/icons";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const benefits = [
  "Free Estimate",
  "Transparent Pricing",
  "Flexible work hours",
  "Low-VOC Paint Options",
  "30+ years experience",
  "Licensed & Insured",
  "Family owned business",
  "Work Quality Guarantee",
];

export default function StAlbert() {
  return (
    <div className="relative bg-white dark:bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          alt=""
          src="https://res.cloudinary.com/jimbits/image/upload/v1756171559/ncs-painting-edmonton/about-us/condo-renovation-room-being-painted-blue-wall-ladder-paint-bucket.avif"
          className="size-full object-cover"
        />
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
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
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
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-950 sm:grid-cols-2 dark:text-gray-200"
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
          <div className="mt-10 flex gap-6">
            <a
              href="#"
              className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:shadow-none"
            >
              Get Your Free Quote
            </a>
            <a
              href="#"
              className="rounded-md border border-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:shadow-none"
            >
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
