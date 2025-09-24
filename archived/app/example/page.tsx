import PaintBrushIcon from "@/icons/paint-brush.svg";
import PaintBucketIcon from "@/icons/paint-bucket.svg";
import PaintRollerIcon from "@/icons/paint-roller.svg";

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

export default function Service8() {
  return (
    <section className="mx-auto max-w-7xl pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-gray-950">
      <div className="container">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
            Professional House Painters Fort Saskatchewan Alberta
          </h2>
          <h3 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            Fort Saskatchewan House Painters
          </h3>
          <p className="my-6 text-lg/6 text-gray-600 dark:text-gray-300">
            We been providing professional painting services to Fort
            Saskatchewan for over 15 years. From historic downtown to new
            developments we provide guaranteed results for your interior and
            exterior home painting projects.
          </p>

          <div className="flex flex-row justify-center gap-4">
            <button
              type="button"
              className="rounded-sm bg-indigo-600 px-6 py-2 text-sm font-semibold text-white uppercase"
            >
              Call (780)-722-5544
            </button>
            <button
              type="button"
              className="rounded-sm border border-indigo-600 px-6 py-2 text-sm font-semibold text-indigo-600 uppercase"
            >
              Free Online Quote
            </button>
          </div>
        </header>
      </div>
      <footer className="m-4 lg:grid lg:grid-cols-3 lg:gap-8">
        <figure className="mb-8 flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm lg:max-w-[480px] dark:border-gray-700 dark:bg-gray-800">
          <img
            src="https://res.cloudinary.com/jimbits/image/upload/c_scale,w_400/v1756171559/ncs-painting-edmonton/landing/painting-wall-yellow-room-before-after-restoration-refurbishment_157125-6684_lrhkp0.avif"
            width="480"
            height="209"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            alt="room being repainted sunset straw with ladder and paint bucket in the center of the room"
            className="h-[209px] w-[400px] object-cover object-center"
          />

          <figcaption className="relative bg-white p-5">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-pretty text-gray-900 dark:text-white">
              Expert interior painting for Fort Saskatchewan homes
            </h2>

            <p className="mb-3 text-lg/snug font-normal text-gray-700 dark:text-gray-400">
              From heritage downtown properties to modern developments we have
              been providing Fort Saskatchewan service for over 15 years.
            </p>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </figcaption>
        </figure>
        <figure className="mb-8 flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm lg:max-w-[480px] dark:border-gray-700 dark:bg-gray-800">
          <img
            src="https://res.cloudinary.com/jimbits/image/upload/c_scale,w_400/v1756171559/ncs-painting-edmonton/landing/painting-wall-yellow-room-before-after-restoration-refurbishment_157125-6684_lrhkp0.avif"
            width="480"
            height="209"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            alt="room being repainted sunset straw with ladder and paint bucket in the center of the room"
            className="h-[209px] w-[400px] object-cover object-center"
          />

          <figcaption className="relative bg-white p-5">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-pretty text-gray-900 dark:text-white">
              Expert interior painting for Fort Saskatchewan homes
            </h2>

            <p className="mb-3 text-lg/snug font-normal text-gray-700 dark:text-gray-400">
              From heritage downtown properties to modern developments we have
              been providing Fort Saskatchewan service for over 15 years.
            </p>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </figcaption>
        </figure>
      </footer>
    </section>
  );
}
