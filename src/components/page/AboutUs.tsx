export default function AboutUs() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Large soft glow top-left */}
          <div className="absolute top-[-10%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,165,0,0.35),transparent_70%)] blur-3xl" />
          {/* Large soft glow top-left */}
          <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,165,0,0.15),transparent_70%)] blur-3xl" />
          {/* Medium glow bottom-right */}
          <div className="absolute right-[9%] bottom-[15%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(255,140,0,0.6),transparent_70%)] blur-3xl" />

          {/* Smaller, brighter accent circle mid-right */}
          <div className="absolute top-1/3 right-1/4 h-[12rem] w-[12rem] rounded-full bg-[radial-gradient(circle,rgba(255,120,0,0.5),transparent_10%)] blur-xl" />

          {/* Tiny sharp highlight near center */}
          <div className="absolute top-1/2 left-1/3 h-[6rem] w-[6rem] rounded-full bg-[radial-gradient(circle,rgba(255,180,0,0.7),transparent_80%)] blur-md" />

          {/* Wide faint circle for subtle depth */}
          <div className="absolute bottom-1/4 left-1/4 h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle,rgba(255,200,0,0.15),transparent_75%)] blur-3xl" />
        </div>
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
                    src="https://res.cloudinary.com/jimbits/image/upload/c_limit,f_auto,q_40,w_300/v1756761693/ncs-painting-edmonton/about-us/meeting-with-clients-on-the-job.png"
                    className="block size-full object-cover object-center"
                  />
                </picture>
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 dark:shadow-none">
                <picture>
                  <img
                    alt="room being painted red with ladder red paint, roller and brush at the centerof the room on the floor"
                    src="https://res.cloudinary.com/jimbits/image/upload/c_limit,f_auto,q_40,w_300/v1756827782/ncs-painting-edmonton/about-us/living-room-being-painted-red.png"
                    className="block size-full object-cover object-bottom"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </picture>
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 dark:shadow-none dark:outline-white/10">
                <picture>
                  <img
                    alt="Exterior home painted by NCS painting in southwest Edmoton"
                    src="https://res.cloudinary.com/jimbits/image/upload/c_limit,f_auto,q_40,w_300/v1756737699/ncs-painting-edmonton/about-us/ncs-painting-41_um0p15.jpg"
                    className="block size-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </picture>
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 dark:shadow-none dark:outline-white/10">
                <picture>
                  <img
                    alt=""
                    src="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,q_40,w_300/v1756761499/ncs-painting-edmonton/about-us/nial-owner-ncs-painting.webp"
                    className="block size-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
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
