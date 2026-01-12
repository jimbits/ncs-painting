import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import FaqIcon from '@/icons/faq.svg';
interface FaqProps {
  children?: ReactNode;
  className?: string;
}

const faqs = [
  {
    question: 'How long does exterior painting last?',
    answer:
      'Exterior painting typically lasts 7–10 years, depending on climate and surface condition.',
  },

  {
    question: 'What paint finish is best indoors?',
    answer:
      'Eggshell or satin finishes are best for durability and easy cleaning indoors.',
  },
  {
    question: 'Can you paint over wallpaper?',
    answer:
      'Yes, but removing wallpaper first provides better, longer-lasting paint results.',
  },

  {
    question: 'What time of year is best?',
    answer:
      'Late spring to early fall is ideal for exterior painting projects.',
  },
];

export default function Faqs() {
  return (
    <section className="bg-stone-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-md lg:flex lg:max-w-none lg:gap-16">
          <div className="mb-8 lg:mb-0">
            <header className="text-center">
              <FaqIcon className="mx-auto mb-6 w-28 fill-indigo-600 lg:w-36 dark:fill-white" />
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-6xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 mb-4 text-base/7 text-pretty text-gray-600 dark:text-gray-200">
                Can’t find the answer you’re looking for?
              </p>
            </header>
            <div className="flex flex-col gap-4 lg:flex-row">
              <button
                type="button"
                className="rounded-sm bg-indigo-600 px-6 py-3 text-sm font-semibold text-white uppercase lg:flex-1"
              >
                ask the painter
              </button>
              <button
                type="button"
                className="rounded-sm border border-indigo-600 px-6 py-3 text-sm font-semibold text-indigo-600 uppercase lg:flex-1"
              >
                read more
              </button>
            </div>
          </div>
          <div className=" ">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-gray-900 lg:text-2xl lg:leading-4 lg:font-bold dark:text-white">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base/5 text-gray-600 dark:text-gray-400">
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
