import { cn } from "@/lib/utils";

function Services() {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <header className="mb-20">
          <h2 className="mb-2 text-center text-3xl font-bold text-zinc-700">
            Our Edmonton Home Painting Services
          </h2>

          <p className="text-gray-500s mx-auto text-center text-base leading-relaxed lg:w-3/4 xl:w-2/4">
            Professional interior and exterior home painting services for
            Edmonton residents, delivering quality craftsmanship with guaranteed
            results every time.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="inline-flex h-1 w-16 rounded-full bg-indigo-500"></div>
          </div>
        </header>
        <div className="-mx-4 -mt-4 -mb-10 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
          {/* Inerior House Painting */}
          <div className="flex max-w-[500px] flex-col items-center p-4 text-center sm:text-left">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,h_500,q_auto/v1756260161/roll-on-painting/faux_ujnvjv.jpg"
              />

              <source
                media="(min-width: 640px)"
                srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,h_500,q_auto/v1756260161/roll-on-painting/faux_ujnvjv.jpg"
              />

              <img
                src="https://res.cloudinary.com/jimbits/image/upload/f_auto,q_auto/v1755899506/roll-on-painting/remove-3_okddch.png"
                alt="Painted living room with orange trim and white walls in Edmonton home renovation"
                loading="lazy"
                className="mb-4 h-96 w-full rounded-md object-cover"
              />
            </picture>

            <div className="flex-grow">
              <h2 className="mb-3 text-lg font-medium text-gray-900">
                Interior House Painting Edmonton
              </h2>

              <p className="text-base leading-relaxed">
                Professional interior house painting services for Edmonton homes
                including walls, ceilings, trim, cabinets, and specialty
                finishes with guaranteed quality craftsmanship results.
              </p>

              <a className="mt-3 inline-flex items-center text-indigo-500">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Exterior House Painting */}
          <div className="flex max-w-[500px] flex-col items-center p-4 text-center sm:text-left">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,h_500,q_auto/v1755894897/roll-on-painting/residential-exterior-house-being-painted-1-1_h259gd.jpg"
              />

              <source
                media="(min-width: 640px)"
                srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,h_500,q_auto/v1755894897/roll-on-painting/residential-exterior-house-being-painted-1-1_h259gd.jpg"
              />

              <img
                src="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,h_500,q_auto/v1755894897/roll-on-painting/residential-exterior-house-being-painted-1-1_h259gd.jpg"
                alt="Painted living room with orange trim and white walls in Edmonton home renovation"
                loading="lazy"
                className="mb-4 h-96 w-[500px] rounded-md object-cover"
              />
            </picture>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                Exterior Home Painting Services
              </h2>
              <p className="text-base leading-relaxed">
                Professional exterior home painting services for Edmonton
                properties including house siding, decks, fences, garage doors,
                and pressure washing with weatherproof protection guaranteed.
              </p>
              <a className="mt-3 inline-flex items-center text-indigo-500">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Specialty Painting */}
          <div className="flex max-w-[500px] flex-col items-center p-4 text-center sm:text-left">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,w_500/v1756255543/roll-on-painting/goldalamode-kitchen-reveal-before-2f179d741f694971820d09de0ba8adc3_vn2k7e.jpg"
              />

              <source
                media="(min-width: 640px)"
                srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,w_500/v1756255543/roll-on-painting/goldalamode-kitchen-reveal-before-2f179d741f694971820d09de0ba8adc3_vn2k7e.jpg"
              />

              <img
                src="https://res.cloudinary.com/jimbits/image/upload/c_scale,w_500/v1756255543/roll-on-painting/goldalamode-kitchen-reveal-before-2f179d741f694971820d09de0ba8adc3_vn2k7e.jpg"
                alt="Painted living room with orange trim and white walls in Edmonton home renovation"
                loading="lazy"
                className="mb-4 h-96 w-full rounded-md object-cover"
              />
            </picture>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                Specialty Painting Services
              </h2>

              <p className="text-base leading-relaxed">
                Specialized Edmonton painting services including popcorn ceiling
                removal, wallpaper removal, eco-friendly paints, color
                consultations, and custom finishes.
              </p>

              <a className="mt-3 inline-flex items-center text-indigo-500">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Other Services */}
          <div className="flex max-w-[500px] flex-col items-center p-4 text-center sm:text-left">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet=" https://res.cloudinary.com/jimbits/image/upload/v1756259043/roll-on-painting/wdg-blog-pressure-washing-deck_pich1k.webp"
              />

              <source
                media="(min-width: 640px)"
                srcSet="https://res.cloudinary.com/jimbits/image/upload/v1756259043/roll-on-painting/wdg-blog-pressure-washing-deck_pich1k.webp"
              />

              <img
                src=" https://res.cloudinary.com/jimbits/image/upload/v1756259043/roll-on-painting/wdg-blog-pressure-washing-deck_pich1k.webp"
                alt="Painted living room with orange trim and white walls in Edmonton home renovation"
                loading="lazy"
                className="mb-4 h-96 w-full rounded-md object-cover"
              />
            </picture>

            <div className="flex-grow">
              <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                Additional Services
              </h2>

              <p className="text-base leading-relaxed">
                Specialized Edmonton painting services including popcorn ceiling
                removal, wallpaper removal, eco-friendly paints, color
                consultations, and custom finishes.
              </p>

              <a className="mt-3 inline-flex items-center text-indigo-500">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <button className="mx-auto mt-16 flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
          Button
        </button>
      </div>
    </section>
  );
}

export default Services;
