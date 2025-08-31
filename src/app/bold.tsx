import Services from "@/components/page/Services";
import Hero from "@/components/page/Hero";
import WhyChooseUs from "@/components/page/WhyChooseUs";
import AppBar from "@/components/page/AppBar";
import Preview from "@/components/page/Preview";
import Reviews from "@/components/page/Reviews";

// painting-wall-red-room-before-after-restoration-refurbishment_157125-6682_rg2xqe.avif
export default function Home() {
  return (
    <>
      <AppBar className="mb-4 px-4 py-2" />
      <div className="mx-auto min-h-screen w-full bg-[#f0b863]">
        <header className="lg:grid-rows-[repeat(2,_300px) max] h-[600px] lg:grid lg:grid-cols-[50%_50%]">
          <div className="self-end">
            <p className="gradient-text text-center text-3xl font-extrabold tracking-tight text-pretty">
              NCS Painting
            </p>
            <h1 className="mb-4 text-center text-base leading-5 font-semibold">
              Edmonton House Painting Services
              <span className="block">
                Interior & Exterior Residential Painters
              </span>
            </h1>
          </div>
          <div className="row-span-2 mx-3">
            {/* <picture className=" ">
              <source
                media="(min-width: 1024px)"
                srcSet="https://res.cloudinary.com/jimbits/image/upload/v1755895320/ncs-painting-edmonton/glenora-edmonton-home-painted-white-stucco.avif"
              />

              <source
                media="(min-width: 640px)"
                srcSet="https://res.cloudinary.com/jimbits/image/upload/f_jpg/q_auto/dpr_auto/e_blur:1000%0A/roll-on-painting/Downtown-Edmonton-Condo-Repainted-Before-And-After"
                type="image/avif"
              />

              <img
                src="https://res.cloudinary.com/jimbits/image/upload/c_fit,f_auto,q_auto,w_480/v1756171559/roll-on-painting/condo-renovation-room-being-painted-blue-wall-ladder-paint-bucket.avif"
                alt="Painted living room with orange trim and white walls in Edmonton home renovation"
                loading="lazy"
                className="row-span-3 mb-5 h-auto w-full rounded-md object-cover"
              />
            </picture> */}
          </div>
          <div className="items-end space-y-8">
            <h2 className="mx-auto w-[80%] text-center text-xl font-semibold">
              Edmonton's Most Trusted Residential Painting Contractors
            </h2>
            <div className="mx-3 flex flex-col items-center justify-between gap-4 gap-5">
              <div className="text-center">
                <h3 className=" ">
                  Transform Your Home
                  <span className="block"> Call for Free Quote</span>
                </h3>
                <button type="button" className="rounded-md border px-6 py-1.5">
                  Call Now (780) 722-5555
                </button>
              </div>

              <div className="text-center">
                <h3 className="">
                  Schedule Your Free
                  <span className="block"> Painting Quote Online</span>
                </h3>
                <button type="button" className="rounded-md border px-6 py-1.5">
                  Book Online Quick Response
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* <Hero className="mb-2" /> */}

      <main>
        <Services />
        <WhyChooseUs />
      </main>
      {/* <Preview />
        <Reviews /> */}
    </>
  );
}
