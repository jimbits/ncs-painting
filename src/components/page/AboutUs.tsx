export default function AboutUs() {
  return (
    <section className="overflow-hidden py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <header className="max-w-4xl">
          <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
            NCS PAINTING WHO WE ARE
          </p>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            ABOUT US
          </p>
          <p className="mt-6 text-xl/8 text-balance text-gray-700 dark:text-gray-300">
            Over 35 years track record of excellence means you can feel
            confident knowing your paint job will be with the high standard we
            demand.
          </p>
        </header>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
              A Local Edmonton Painting Business With a Track Record of
              Excellence
            </h2>
            <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-400">
              Over 35 years track record of excellence means you can feel
              confident knowing your paint job will be with the high standard we
              demand. With over 30 years experience and an knowledgeable staff,
              NCS Painting has experience in all of your decorating needs.
            </p>
            <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-400">
              If you need straight painting we do that. However, we also offer
              numerous faux finishes, airless spraying, HVLP Spraying, wood
              refinishing, drywall repairs, installing drywall, power washing
              and minor carpentry. Our goal is to leave our customers satisfied.
            </p>
            <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-400">
              "We pay special attention to the details" Give us a call today for
              a free estimate. Remember we don't ask for an up front deposit
              under $1500.00
            </p>
          </div>
          <div className="px-6 pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 dark:shadow-none">
                <picture>
                  <img
                    alt="checking color swatches while painters prep room"
                    src="https://res.cloudinary.com/jimbits/image/upload/f_auto,q_60/v1756761693/ncs-painting-edmonton/about-us/meeting-with-clients-on-the-job.png"
                    className="block size-full object-cover object-center"
                  />
                </picture>
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 dark:shadow-none">
                <picture>
                  <img
                    alt="couple selecting colours while painters get to work"
                    src="https://res.cloudinary.com/jimbits/image/upload/v1756742517/ncs-painting-edmonton/about-us/red-room_nlfwyk.png"
                    className="block size-full object-cover object-bottom"
                  />
                </picture>
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 dark:shadow-none dark:outline-white/10">
                <picture>
                  <img
                    alt="Exterior home painted by NCS painting in southwest Edmoton"
                    src="https://res.cloudinary.com/jimbits/image/upload/c_limit,f_auto,h_500,q_33/v1756737699/ncs-painting-edmonton/about-us/ncs-painting-41_um0p15.jpg"
                    className="block size-full object-cover object-center"
                  />
                </picture>
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 dark:shadow-none dark:outline-white/10">
                <picture>
                  <img
                    alt=""
                    src="https://res.cloudinary.com/jimbits/image/upload/v1756761499/ncs-painting-edmonton/about-us/nial-owner-ncs-painting.webp"
                    className="block size-full object-cover object-center"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
