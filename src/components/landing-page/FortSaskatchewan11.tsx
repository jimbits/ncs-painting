import { PaintBrushIcon, PaintRollerIcon, PaintBucketIcon } from "@/icons";

const features = [
  {
    name: "Fort Saskatchewan Interior Painting Services",
    description:
      "Expert interior painting for Fort Saskatchewan homes, from heritage downtown properties to modern developments. Our residential painting contractors specialize in walls, ceilings, trim, and cabinet refinishing that protects your investment and enhances your home's character.",
    icon: PaintBrushIcon,
  },
  {
    name: "Exterior House Painting Fort Saskatchewan",
    description:
      "Weather-resistant exterior painting services designed for Alberta's climate. Our Fort Saskatchewan painting contractors deliver professional siding, trim, and metal roof painting with guaranteed results that withstand harsh winters.",
    icon: PaintRollerIcon,
  },
  {
    name: "Heritage Home Painting Specialists Fort Saskatchewan",
    description:
      "Specialized techniques for Fort Saskatchewan's historic properties. Family-owned painting company with 15 years experience serving Fort Saskatchewan residents with eco-friendly paints, competitive pricing, and respect for your home's unique character.",
    icon: PaintBucketIcon,
  },
];
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

export default function FortSaskatchewan() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/75 px-6 py-16 shadow-lg ring-1 ring-gray-900/5 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20 dark:bg-white/3 dark:shadow-none dark:ring-white/10">
            <img
              alt=""
              src="https://res.cloudinary.com/jimbits/image/upload/v1756737700/ncs-painting-edmonton/about-us/ncs-painting-131_jo352i.png"
              className="h-96 w-full flex-none rounded-2xl object-cover object-center shadow-none lg:aspect-square lg:h-auto lg:max-w-sm dark:shadow-xl"
            />
            <div className="w-full flex-auto">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                Fort Saskatchewan Local Home Painting Company
              </h2>
              <h3 className="text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl dark:text-white">
                Fort Saskatchewan House Painting Services
              </h3>
              <p className="mt-6 text-lg/8 text-pretty text-gray-600 dark:text-gray-400">
                NCS Painting has been serving Fort Saskatchewan Alberta since
                2009. We specialize in Residential painting offering both full
                interior and exterior painting services.
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
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#9fd6fc] to-[#8680fd] opacity-50 dark:from-[#80caff] dark:to-[#4f46e5] dark:opacity-20"
          />
        </div>
      </div>
    </section>
  );
}
