import { Button } from "@/components/ui/button";

export default function Preview() {
  return (
    <section className="bg-gray-900 px-4 py-6 text-center sm:px-8 md:py-16">
      <div className="mx-auto max-w-7xl lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-12">
        <div className="mx-auto max-w-[500px] rounded-2xl bg-white p-2 lg:mx-0 lg:w-[460px]">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,q_40,w_500,h_500/v1756827782/ncs-painting-edmonton/about-us/living-room-being-painted-red.png"
            />
            <img
              src="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,q_50,w_400,h_400/v1756827782/ncs-painting-edmonton/about-us/living-room-being-painted-red.png"
              alt="adding the finishing touches, baseboard being painted white"
              className="aspect-square h-auto w-full object-cover object-right"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width="400"
              height="400"
            />
          </picture>
        </div>
        {/* RIGHT COLUMN */}
        <div className="flex flex-col">
          <p className="py-6 text-sm font-semibold text-slate-500 uppercase">
            Tell us about your project
          </p>
          <h3 className="xs:text-4xl text-3xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-5xl lg:tracking-tighter xl:text-7xl">
            Get A Free Quote From <span className="block"> A Professional</span>
          </h3>
          <p className="mx-auto my-6 w-[80%] max-w-[620px] text-lg font-normal tracking-tight text-slate-500 md:w-[85%] md:tracking-normal">
            Ready to start your home painting project? Then contact Niall to
            discuss your project. He will provide you with a detailed estimate
            and a fair pricing.
          </p>

          <div className="mx-auto flex w-2/3 flex-col gap-5 sm:flex-row sm:justify-around md:justify-center">
            <Button
              size="large"
              className="border border-white bg-white text-stone-950"
            >
              Call (780)-722-6555
            </Button>
            <Button
              size="large"
              className="border border-white bg-transparent text-white"
            >
              Book Your Quote Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
