import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import FaqIcon from "@/icons/faqs.svg";
interface FaqProps {
  children?: ReactNode;
  className?: string;
}

const faqs = [
  {
    question: "How long does exterior painting last?",
    answer:
      "Exterior painting typically lasts 7–10 years, depending on climate and surface condition.",
  },

  {
    question: "What paint finish is best indoors?",
    answer:
      "Eggshell or satin finishes are best for durability and easy cleaning indoors.",
  },
  {
    question: "Can you paint over wallpaper?",
    answer:
      "Yes, but removing wallpaper first provides better, longer-lasting paint results.",
  },

  {
    question: "What time of year is best?",
    answer:
      "Late spring to early fall is ideal for exterior painting projects.",
  },
];

export default function Faqs() {
  return (
    <section className="bg-stone-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <header>
              <FaqIcon className="mb-6 w-48 fill-indigo-600" />
              <h2 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 mb-4 text-base/7 text-pretty text-gray-600 dark:text-gray-400">
                If you can’t find the answer you’re looking for?
              </p>
            </header>
            <div className="flex flex-row gap-4">
              <button
                type="button"
                className="rounded-sm bg-indigo-600 px-6 py-2 text-sm font-semibold text-white uppercase"
              >
                ask the painter
              </button>
              <button
                type="button"
                className="rounded-sm border border-indigo-600 px-6 py-2 text-sm font-semibold text-indigo-600 uppercase"
              >
                read more
              </button>
            </div>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
