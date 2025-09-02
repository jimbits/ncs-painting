import { CheckIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";
const tiers = [
  {
    name: "NCS Interiors",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "Interior Services",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      "Walls and Ceilings",
      "Texture painting",
      "Wall papper removal",
      "Trim, baseboards and molding",
      "Eco friendly interior painting",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    featured: true,
  },
];

interface SpecialProps {
  tierIdx: number;
  tier: any;
}
export function Special({ tier, tierIdx }: SpecialProps) {
  return (
    <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
      <div
        key={tier.id}
        className={cn(
          "relative bg-gray-900 shadow-2xl",
          "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl",
          "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
          "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 dark:ring-white/10"
        )}
      >
        <p className={cn("text-base/7 font-semibold text-indigo-400")}>
          NCS PAINTING INTERIORS
        </p>
        <h3 className="mt-4 flex items-baseline gap-x-2">
          <span className="text-5xl font-semibold tracking-tighter text-white">
            Interior Home Services
          </span>
        </h3>
        <p className={cn("mt-6 text-base/7 text-gray-300")}>
          NCS Painting provides all of the interior house painting services you
          will need. for Edmonton homes including walls, ceilings, trim,
          cabinets, and specialty finishes with guaranteed quality craftsmanship
          results.
        </p>
        <ul
          role="list"
          className={cn("text-gray-300", "mt-8 space-y-3 text-sm/6 sm:mt-10")}
        >
          {tier.features.map((feature: any) => (
            <li key={feature} className="flex gap-x-3">
              <CheckIcon
                aria-hidden="true"
                className={cn(
                  "text-indigo-400",

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
          className={cn(
            "mt-8 block rounded-md bg-white/10 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-none",
            "inset-ring inset-ring-white/5 hover:bg-white/40 hover:inset-ring-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75",
            "sm:mt-10"
          )}
        >
          Call Us Today
        </a>
      </div>
    </div>
  );
}
interface FeaturedServiceProps {
  tierIdx: number;
  tier: any;
}
export function FeaturedService({ tier, tierIdx }: FeaturedServiceProps) {
  console.log(tier, tierIdx);
  return (
    <section className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
      <div
        className={cn(
          "relative bg-white/60 shadow-2xl sm:mx-8 lg:mx-0",
          "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl",
          "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
          "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 dark:ring-white/10"
        )}
      >
        <p className={cn("text-base/7 font-semibold text-indigo-600")}>
          NCS PAINTING INTERIORS
        </p>
        <h3 className="mt-4 flex items-baseline gap-x-2">
          <span className="text-5xl font-semibold tracking-tighter text-gray-900 dark:text-white">
            Interior Home Services
          </span>
        </h3>
        <p
          className={cn(
            "text-gray-300",
            "text-gray-600 dark:text-gray-300",
            "mt-6 text-base/7"
          )}
        >
          NCS Painting provides all of the interior house painting services you
          will need. for Edmonton homes including walls, ceilings, trim,
          cabinets, and specialty finishes with guaranteed quality craftsmanship
          results.
        </p>
        <ul
          role="list"
          className={cn("mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10")}
        >
          {tier.features.map((feature: any) => (
            <li key={feature} className="flex gap-x-3">
              <CheckIcon
                aria-hidden="true"
                className={cn("h-6 w-5 flex-none text-indigo-600")}
              />
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={tier.href}
          aria-describedby={tier.id}
          className={cn(
            "bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500 dark:shadow-none",
            "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
          )}
        >
          Call Us Today
        </a>
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <section className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <header
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div className="clipper mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-indigo-600 to-[#9089fc] opacity-30 dark:opacity-20" />
      </header>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
          Interior Home Painting Services Edmonton
        </h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl dark:text-white">
          Home Painting Services
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
        Choose an affordable plan that’s packed with the best features for
        engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <Special tier={tiers[1]} tierIdx={0} />
    </section>
  );
}
