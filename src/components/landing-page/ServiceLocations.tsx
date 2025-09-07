import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Sherwood Park Interior Painting Services",
    description:
      "Transform your Sherwood Park home with our expert interior painting services. From Emerald Hills to Broadmoor, we deliver quality craftsmanship for walls, ceilings, trim, and cabinet refinishing that Strathcona County homeowners trust.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Exterior House Painting Sherwood Park",
    description:
      "Protect your investment with professional exterior painting services designed for Alberta's climate. Our Sherwood Park painting contractors specialize in siding, trim, and metal roof painting with guaranteed results.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Why Choose NCS Painting in Sherwood Park",
    description:
      "Family-owned and operated since 2009, we're Sherwood Park's trusted residential painters. Eco-friendly paints, competitive pricing, and 15 years of local experience serving Emerald Hills, Broadmoor, and all Strathcona County neighborhoods.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function SherwoodPark() {
  return (
    <section className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
            NCS Painting Sherwood Park .
          </p>

          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
            Professional House Painters Serving Sherwood Park
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            From Emerald Hills estates to Broadmoor bungalows we've helped
            hundreds of Sherwood Park homeowners protect and beautify your most
            valuable investment.
          </p>
        </header>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900 dark:text-white">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-indigo-600 dark:text-indigo-400"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
