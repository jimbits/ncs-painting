import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { BadgeCheck, PhoneCall, Pencil } from "lucide-react";
interface HeroProps {
  children?: ReactNode;
  className?: string;
}

function Hero({ className }: HeroProps) {
  return (
    <section className="px-4 py-2">
      <div className="space-y-4">
        <ul className="shadow- mx-auto max-w-fit space-y-1.5 rounded bg-stone-100/50 px-8 py-10 font-medium tracking-tight text-zinc-600 shadow-stone-500/40">
          <li className="flex gap-2">
            <BadgeCheck className="stroke-indigo-600" />
            <p>30+ Years of Painting Edmonton Homes.</p>
          </li>
          <li className="flex gap-2">
            <BadgeCheck className="stroke-indigo-600" />
            <p>Quality Craftsmanship Guaranteed</p>
          </li>
          <li className="flex gap-2">
            <BadgeCheck className="stroke-indigo-600" />
            <p>Licensed & Insured </p>
          </li>
          <li className="flex gap-2">
            <BadgeCheck className="stroke-indigo-600" />
            <p>Eco-Friendly Painting Options</p>
          </li>
        </ul>
        {/* Call To Action */}f
        {/* <div className="flex flex-col items-center gap-1">
          <div className="w-sm max-w-[300px]">
            <h3 className="text-center text-xl font-bold text-zinc-700">
              Free Estimate Call Now
            </h3>
            <button
              type="button"
              className="b w-full rounded-md bg-orange-600 px-6 py-2 text-base font-medium text-white"
            >
              (780)-722-5555
            </button>
          </div>
          <div className="w-sm max-w-[300px]">
            <button
              type="button"
              className="w-full rounded-md bg-blue-600 px-6 py-2 text-base font-medium text-white"
            >
              <div>
                <p>Get Free Online Quote</p>
              </div>
            </button>
          </div>
        </div> */}
        {/* <button
					type="button"
					className="w-full inline-flex items-center justify-center px-8 py-3   border  border-indigio-500 text-base font-medium rounded-md  text-indigo-600  bg-white  md:py-4 md:text-lg md:px-10"
				>
					Calculate Your Project Cost Free Painting Estimator"
				</button> */}
      </div>
    </section>
  );
}

export default Hero;
