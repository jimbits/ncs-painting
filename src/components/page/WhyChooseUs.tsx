import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import PriceIcon from "@/icons/price.svg";
import ExperienceIcon from "@/icons/experience.svg";
import GuaranteeIcon from "@/icons/trust-check.svg";
import LicensedIcon from "@/icons/trust.svg";
import ServiceIcon from "@/icons/service.svg";
import LocalIcon from "@/icons/local.svg";
// 	children?: ReactNode
// 	classNameName?: string
// }

function WhyChooseUs() {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col flex-wrap items-center text-center">
          <h2 className="mb-2 text-center text-3xl font-bold text-zinc-700">
            Why Choose Edmonton's Trusted Painting Professionals
          </h2>
          <p className="mx-auto text-center text-base leading-relaxed text-gray-500 lg:w-3/4 xl:w-2/4">
            Roll On Quality has been Edmonton's trusted home painting
            specialists for over 15 years, delivering guaranteed quality
            craftsmanship with transparent pricing and reliable service.
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          {/* Card 1: Experience & Authority */}
          <section className="p-4 md:w-1/2 xl:w-1/3">
            <div className="flex flex-col items-center rounded-lg border border-gray-200 p-6">
              <div className="mb-4 inline-flex h-24 w-24 items-center justify-center">
                <ExperienceIcon className="fill-indigo-800 p-2" />
              </div>
              <header className="">
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  15+ Years Edmonton Experience
                </h2>
              </header>
              <p className="text-center text-base leading-relaxed">
                Trusted local expertise since 2009, serving thousands of
                satisfied Edmonton homeowners
              </p>
            </div>
          </section>

          {/* Card 2: Quality Guarantee */}
          <section className="p-4 md:w-1/2 xl:w-1/3">
            <div className="flex flex-col items-center rounded-lg border border-gray-200 p-6">
              <div className="mb-4 inline-flex h-24 w-24 items-center justify-center">
                <LicensedIcon className="fill-indigo-800 p-2" />
              </div>
              <header className="">
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Every Project Guaranteed
                </h2>
              </header>
              <p className="text-center text-base leading-relaxed">
                All work backed by our comprehensive workmanship warranty - if
                you're not satisfied, we make it right
              </p>
            </div>
          </section>

          {/* Card 3: Local & Licensed */}
          <section className="p-4 md:w-1/2 xl:w-1/3">
            <div className="flex flex-col items-center rounded-lg border border-gray-200 p-6">
              <div className="mb-4 inline-flex h-24 w-24 items-center justify-center">
                <GuaranteeIcon className="fill-indigo-800 p-2" />
              </div>
              <header className="">
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Licensed & Insured Professionals
                </h2>
              </header>
              <p className="text-center text-base leading-relaxed">
                Fully licensed Edmonton contractors with complete insurance
                protection for your peace of mind.
              </p>
            </div>
          </section>

          {/* Card 4: Transparent Pricing */}
          <section className="p-4 md:w-1/2 xl:w-1/3">
            <div className="flex flex-col items-center rounded-lg border border-gray-200 p-6">
              <div className="mb-4 inline-flex h-24 w-24 items-center justify-center">
                <PriceIcon className="fill-indigo-800 p-2" />
              </div>
              <header className="">
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Honest, Upfront Pricing
                </h2>
              </header>
              <p className="text-center text-base leading-relaxed">
                Your neighbors serving neighbors - locally owned with deep
                Edmonton community roots.
              </p>
            </div>
          </section>

          {/* Card 5: Professional Service */}
          <section className="p-4 md:w-1/2 xl:w-1/3">
            <div className="flex flex-col items-center rounded-lg border border-gray-200 p-6">
              <div className="mb-4 inline-flex h-24 w-24 items-center justify-center">
                <ServiceIcon className="fill-indigo-800 p-2" />
              </div>
              <header className="">
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  On-Time, Professional Results
                </h2>
              </header>
              <p className="text-center text-base leading-relaxed">
                Reliable scheduling, clean work practices, and professional
                results that exceed expectations
              </p>
            </div>
          </section>

          {/* Card 5: Professional Service */}
          <section className="p-4 md:w-1/2 xl:w-1/3">
            <div className="flex flex-col items-center rounded-lg border border-gray-200 p-6">
              <div className="mb-4 inline-flex h-24 w-24 items-center justify-center">
                <LocalIcon className="fill-indigo-800 p-2" />
              </div>
              <header className="">
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Locally Owned Edmonton Business
                </h2>
              </header>
              <p className="text-center text-base leading-relaxed">
                Your neighbors serving neighbors - locally owned with deep
                Edmonton community roots.
              </p>
            </div>
          </section>
        </div>
        <button className="mx-auto mt-16 flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
          Button
        </button>
      </div>
    </section>
  );
}

export default WhyChooseUs;
