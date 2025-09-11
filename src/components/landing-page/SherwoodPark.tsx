import PaintBrushIcon from "@/icons/paint-brush.svg";
import PaintBucketIcon from "@/icons/paint-bucket.svg";
import PaintRollerIcon from "@/icons/paint-roller.svg";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Sherwood Park Interior Painting Services",
    description:
      "Transform your Sherwood Park home with our expert interior painting services. From Emerald Hills to Broadmoor, we deliver quality craftsmanship for walls, ceilings, trim, and cabinet refinishing that Strathcona County homeowners trust.",
    icon: PaintBrushIcon,
  },
  {
    name: "Exterior House Painting Sherwood Park",
    description:
      "Protect your investment with professional exterior painting services designed for Alberta's climate. Our Sherwood Park painting contractors specialize in siding, trim, and metal roof painting with guaranteed results.",
    icon: PaintRollerIcon,
  },
  {
    name: "Why Choose NCS Painting in Sherwood Park",
    description:
      "Family-owned and operated since 2009, we're Sherwood Park's trusted residential painters. Eco-friendly paints, competitive pricing, and 15 years of local experience serving Emerald Hills, Broadmoor, and all Strathcona County neighborhoods.",
    icon: PaintBucketIcon,
  },
];
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

export default function SherwoodPark() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <header className="xs:text-center lg:text-left">
              <h2 className="text-base/7 font-semibold text-pretty text-indigo-600 dark:text-indigo-400">
                Sherwood Park House Painters
              </h2>
              <h3 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
                Sherwood Park Residential Painting Services
              </h3>

              <p className="xs:mx-auto mt-6 max-w-[520px] text-lg/8 text-gray-600 lg:mx-0 dark:text-gray-300">
                From Emerald Hills estates to Broadmoor bungalows we've helped
                hundreds of Sherwood Park homeowners protect and beautify your
                most valuable investment.
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
            <div className="mt-10 flex justify-center gap-6 text-center lg:justify-start">
              <a
                href="#"
                className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:w-sm dark:shadow-none"
              >
                Get Your Free Quote
              </a>
              <a
                href="#"
                className="rounded-md border border-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:w-sm dark:shadow-none"
              >
                Find Out More
              </a>
            </div>
          </div>

          <img
            src="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_768/v1756737699/ncs-painting-edmonton/about-us/ncs-painting-41_um0p15.jpg"
            srcSet="
    https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_452/v1756737699/ncs-painting-edmonton/about-us/ncs-painting-41_um0p15.jpg 452w,
    https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_591/v1756737699/ncs-painting-edmonton/about-us/ncs-painting-41_um0p15.jpg 591w,
    https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_672/v1756737699/ncs-painting-edmonton/about-us/ncs-painting-41_um0p15.jpg 672w,
    https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_768/v1756737699/ncs-painting-edmonton/about-us/ncs-painting-41_um0p15.jpg 768w
  "
            sizes="(max-width: 640px) 100vw,
         (max-width: 768px) 591px,
         (max-width: 1024px) 672px,
         768px"
            width="870"
            height="738"
            alt="room being painted red with ladder, red paint, roller and brush at the center of the room on the floor"
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 md:w-3xl lg:-ml-0 lg:block dark:ring-white/10"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </div>
      </div>
    </div>
  );
}
