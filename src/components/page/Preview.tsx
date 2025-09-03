import { Button } from "@/components/button";

export default function Preview() {
  return (
    <section className="m-auto grid w-full grid-flow-row flex-wrap items-center gap-x-0 gap-y-6 bg-gray-900 px-3 py-6 text-center sm:px-8 md:gap-x-28 md:py-16 lg:grid-cols-2 lg:text-start xl:px-48 xl:py-28">
      <div className="flex items-center justify-center justify-self-center rounded-2xl bg-white p-2 lg:justify-self-end">
        <img
          src="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,q_20,w_450/v1756827782/ncs-painting-edmonton/about-us/living-room-being-painted-red.png"
          alt="adding the finishing touches,baseboard being painted white"
          className="h-[450px] object-cover object-right"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </div>
      {/* RIGHT COLUMN */}
      <div className="flex flex-col gap-6 justify-self-center md:gap-12 lg:justify-self-start">
        <div className="flex max-w-lg flex-col gap-6">
          <p className="text-sm font-semibold text-slate-500 uppercase">
            Tell us about your project
          </p>
          <h3 className="text-4xl font-semibold text-white md:text-5xl">
            Get A Free House Painting Quote From A Professional
          </h3>
          <p className="text-lg font-normal tracking-tight text-slate-500">
            Ready to start your home painting project? Then contact Niall to
            discuss your project. He will provide you with a detailed estimate
            and a fair pricing.
          </p>
        </div>
        <div className="flex gap-5">
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
    </section>
  );
}
