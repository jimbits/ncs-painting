import { PaintBrushIcon, PaintRollerIcon, PaintBucketIcon } from "@/icons";

const features = [
  {
    name: "Interior Painting Services",
    description:
      "Transform Fort Saskatchewan kitchens with professional cabinet refinishing services. Expert residential painting contractors deliver quality cabinet makeovers affordably.",
    icon: PaintBrushIcon,
  },
  {
    name: "Exterior House Painting Sherwood Park",
    description:
      "Protect your investment with professional exterior painting services designed for Alberta's climate. Our Sherwood Park painting contractors specialize in siding, trim, and metal roof painting with guaranteed results.",
    icon: PaintRollerIcon,
  },
  {
    name: "Fort Saskatchewan Cabinet Refinishing Services",
    description:
      "Family-owned and operated since 2009, we're Sherwood Park's trusted residential painters. Eco-friendly paints, competitive pricing, and 15 years of local experience serving Emerald Hills, Broadmoor, and all Strathcona County neighborhoods.",
    icon: PaintBucketIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                Local Fort Saskatchewan House Painters
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-600 dark:text-indigo-400"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <img
            alt="Product screenshot"
            src="https://res.cloudinary.com/jimbits/image/upload/v1756737707/ncs-painting-edmonton/about-us/ncs-painting-7_a2kmwj.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 dark:hidden dark:ring-white/10"
          />
        </div>
      </div>
    </div>
  );
}
