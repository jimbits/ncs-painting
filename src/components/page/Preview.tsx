import { Button } from "@/components/button";

export default function Preview() {
  return (
    <section className="m-auto grid w-full grid-flow-row flex-wrap items-center gap-x-0 gap-y-6 bg-gray-900 px-3 py-6 text-center sm:px-8 md:gap-x-28 md:py-16 lg:grid-cols-2 lg:text-start xl:px-32">
      <div className="flex items-center justify-center justify-self-center rounded-2xl bg-white p-2 lg:justify-self-end">
        <img
          src="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,q_60,w_600/v1756827782/ncs-painting-edmonton/about-us/living-room-being-painted-red.png"
          alt="adding the finishing touches,baseboard being painted white"
          className="h-[500px] object-cover object-right"
        />
      </div>
      {/* RIGHT COLUMN */}
      <div className="flex flex-col gap-6 justify-self-center md:gap-12 lg:justify-self-start">
        <div className="flex max-w-lg flex-col gap-6">
          <p className="text-sm font-semibold text-slate-500 uppercase">
            NCS PAINTNG DARK
          </p>
          <h3 className="text-4xl font-semibold text-white md:text-5xl">
            New Heading For
            <br />A Content Section.
          </h3>
          <p className="text-lg font-normal tracking-tight text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur inventore ullam pariatur!.
          </p>
        </div>
        <div>
          <Button size="large">Get a Template</Button>
        </div>
      </div>
    </section>
  );
}
