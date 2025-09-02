import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Interior Painting Services",
    id: "interior_home",
    href: "#",
    title: "Interior Home",
    description:
      "Looking for a professional interior painting company close to you? NCS Painting provides Interior House Painting Services to Edmonton, St. Albert, Sherwood Park, Stony Plain.",
    features: [
      "Wall, Ceiling & Feature Wall Painting",
      "Cabinet Painting / Refinishing",
      "Wallpaper Installation & Removal",
      "Trim, Crown Molding, Millwork Painting",
      "Eco friendly interior painting",
      "Popcorn cieling removal",
      "Accent & Feature Walls",
    ],
    featured: false,
    actionCall: "Call (780)-722-6555",
  },
  {
    name: "Additonal Services",
    id: "fall-specials",
    href: "#",
    title: "Additional Services",
    description:
      "Top exterior painting Edmonton: siding, stucco, brick, trim, decks, fences, doors, garage—professional, durable, weather-resistant services local homeowners trust.",
    features: [
      "Siding",
      "Stucco Paintng & Repair",
      "Brick Painting & Staining",
      "Deck & Fence Painting/Staining",
      "Garage Door Painting",
      "Exterior Doors and Windows",
      "Window Frame & Shutter Painting",
      "Garage Door Painting",
    ],
    featured: true,
    actionCall: "Call Now",
  },
  {
    name: "NCS Exteriors",
    id: "exterior_services",
    href: "#",
    title: "Exterior Home",
    description:
      "Top exterior painting Edmonton: siding, stucco, brick, trim, decks, fences, doors, garage—professional, durable, weather-resistant services local homeowners trust.",
    features: [
      "Exterior Siding Wood & Metal",
      "Stucco Paintng & Repair",
      "Brick Painting & Staining",
      "Deck & Fence Painting/Staining",
      "Garage Door Painting",
      "Exterior Doors and Windows",
      "Window Frame & Shutter Painting",
    ],
    featured: false,
    actionCall: "Call Now",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  return (
    <section className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div className="clipper mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20" />
      </div>
      <header className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
          NCS Painting Services Edmoton
        </h2>

        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl dark:text-white">
          Services At A Glance
        </p>
        <h3 className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
          Affordable Interior & Exterior House Painting Services in Edmonton,
          St. Albert, Sherwood Park, and Stony Plain.
        </h3>
      </header>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-7xl lg:grid-cols-[1fr_1.125fr_1fr] xl:max-w-[1400px]">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative border-8 bg-gray-900 shadow-2xl"
                : "bg-white/60 sm:mx-8 lg:mx-0 dark:bg-white/2.5",
              tier.featured
                ? ""
                : tierIdx === 0
                  ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                  : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 dark:ring-white/10"
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured
                  ? "text-indigo-400"
                  : "text-indigo-600 dark:text-indigo-400",
                "text-base/7 font-semibold"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured
                    ? "text-white"
                    : "text-gray-900 dark:text-white",
                  "text-5xl font-semibold tracking-tighter"
                )}
              >
                {tier.title}
              </span>
            </p>

            <p
              className={classNames(
                tier.featured
                  ? "text-gray-300"
                  : "text-gray-600 dark:text-gray-300",
                "mt-6 text-base/7"
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured
                  ? "text-gray-300"
                  : "text-gray-600 dark:text-gray-300",
                "mt-8 space-y-3 text-sm/6 sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured
                        ? "text-indigo-400"
                        : "text-indigo-600 dark:text-indigo-400",
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500 dark:shadow-none"
                  : "text-indigo-600 inset-ring inset-ring-indigo-200 hover:inset-ring-indigo-300 focus-visible:outline-indigo-600 dark:bg-white/10 dark:text-white dark:inset-ring-white/5 dark:hover:bg-white/20 dark:hover:inset-ring-white/5 dark:focus-visible:outline-white/75",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              {tier.actionCall}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
