import Link from 'next/link';
import { HeroImage } from './HeroImage';

export default function Hero() {
  return (
    <section
      className="mx-auto mt-8 max-w-7xl md:max-w-[90%]"
      aria-label="NCS Painting Edmonton Hero Section"
    >
      <header className="items-center md:flex md:justify-between lg:justify-center">
        {/* Left column */}
        <div className="flex-1 text-center lg:text-left">
          {/* Main Heading */}
          <h1 className="mb-2 text-5xl font-extrabold text-gray-900 uppercase md:text-[clamp(2.5rem,7vw,7rem)]">
            NCS Painting
          </h1>

          {/* Local & Expertise Subheading */}
          <h2 className="text-lg font-bold tracking-tight text-stone-700 lg:text-3xl/8 dark:text-white">
            Trusted Residential Painters in Edmonton for Over 35 Years
            <span className="mx-auto mt-4 block text-center text-base font-bold text-pretty text-stone-700/85 sm:px-8 md:max-w-[360px] md:px-0 lg:mx-0 lg:max-w-none lg:px-0 lg:text-left lg:text-2xl lg:text-stone-800/85">
              Interior & Exterior Home Painting Services
              <span className="lg:block lg:text-xl">
                Proudly Serving Edmonton, St. Albert, Sherwood Park & Fort
                Saskatchewan
              </span>
            </span>
          </h2>

          {/* Mobile Hero Image */}
          <HeroImage className="mx-auto my-8 w-[65%] max-w-[320px] md:hidden" />

          {/* Call to Action */}
          <div className="mt-8 text-center lg:mt-20">
            <div className="mb-4">
              <h3 className="mb-1 text-center text-2xl leading-3.5 font-bold text-stone-700/85 md:text-2xl">
                Get Your Free Residential Painting Estimate
              </h3>
              <p className="text-sm text-stone-700">
                35+ years of experience — Edmonton homeowners’ trusted choice
              </p>
            </div>

            <div className="mx-auto flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
              <Link
                href="tel:+17807225577"
                className="block w-2/3 max-w-[289px] rounded-md border border-rose-500 bg-rose-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs transition-colors hover:border-rose-700 hover:bg-rose-700 hover:text-white"
              >
                Call (780) 722-5577
              </Link>

              <Link
                href="/book-quote"
                className="block w-2/3 max-w-[289px] rounded-md border border-indigo-500 bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-700 hover:text-white"
              >
                Book a Free Quote Online
              </Link>
            </div>
          </div>
        </div>

        {/* Right column image */}
        <div className="flex-1">
          <HeroImage
            className="mx-auto my-8 hidden md:block md:w-[40vw]"
            alt="Exterior residential painting project in Edmonton by NCS Painting"
          />
        </div>
      </header>

      {/* LocalBusiness Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'PaintingService',
            name: 'NCS Painting',
            image: 'https://yourdomain.com/hero-image.jpg',
            url: 'https://yourdomain.com',
            telephone: '+17807225577',
            priceRange: '$$',
            description:
              'NCS Painting specializes exclusively in residential interior and exterior painting across Edmonton and nearby areas. Over 35 years of trusted experience.',
            areaServed: [
              'Edmonton',
              'St. Albert',
              'Sherwood Park',
              'Fort Saskatchewan',
            ],
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Edmonton, Alberta',
              postalCode: 'T6A 2N9',
              addressLocality: 'Edmonton',
              addressRegion: 'AB',
              addressCountry: 'CA',
            },
            foundingDate: '1990',
            serviceType: 'Residential Interior and Exterior Painting',
          }),
        }}
      />
    </section>
  );
}
