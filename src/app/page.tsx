import Services from "@/components/page/Services";
import Hero from "@/components/page/Hero";

import AppBar from "@/components/page/AppBar";
import OurServices from "@/components/page/OurServices";
import AboutUs from "@/components/page/AboutUs";
import Test from "@/components/page/Testing";
import Reviews from "@/components/page/Reviews";
import Preview from "@/components/page/Preview";

// painting-wall-red-room-before-after-restoration-refurbishment_157125-6682_rg2xqe.avif
//className="bg-zinc-500 px-4 pt-2 pb-5 shadow sm:bg-red-500 md:bg-green-500 lg:bg-violet-500 xl:bg-pink-500"
export default function Home() {
  return (
    <div className="h-full overflow-y-auto">
      <AppBar className="responsive" />
      <Test />
      <main className="">
        <AboutUs />
        <OurServices />
        <Preview />
        <Reviews />
      </main>
    </div>
  );
}
