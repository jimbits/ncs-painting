import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PaintingEstimateProps {
  children?: ReactNode;
  className?: string;
}

function PaintingEstimate({ className }: PaintingEstimateProps) {
  return (
    <div className="bg-indigo-100 dark:bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 md:py-72 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-900">
          Got Questions?
          <br />
          Need Some Advice.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
          >
            Ask The Painter
          </a>
          <a
            href="#"
            className="text-sm/6 text-xl font-semibold text-gray-900 dark:text-gray-900"
          >
            {""}FAQ
            <span aria-hidden="true" className="text-xl">
              {" "}
              {"  "}→
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PaintingCalculator;
