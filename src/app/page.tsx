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
      <AppBar className="bg-zinc-50 px-4 pt-2 pb-5 shadow" />
      {/* <div className="relative h-[600px] bg-[url('https://res.cloudinary.com/jimbits/image/upload/c_scale,w_1440/v1756580726/ncs-painting-edmonton/house-at-night_xalhqy.png')] bg-cover bg-right bg-no-repeat before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/50 before:to-red-500/35"></div> */}

      <Hero />
    </>
  );
}
