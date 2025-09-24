import AppBar from "@/components/pages/AppBar";
import OurServices from "@/components/pages/OurServices";
import AboutUs from "@/components/pages/AboutUs";
import Reviews from "@/components/pages/Reviews";
import Preview from "@/components/pages/Preview";
import Faqs from "@/components/pages/Faqs";
import GetQuote from "@/components/pages/GetQuote";
import Hero from "@/components/pages/Hero";
import StAlbert from "@/components/pages/StAlbert";
import SherwoodPark from "@/components/pages/SherwoodPark";
import FortSaskatchewan from "@/components/pages/FortSaskatchewan";
import PaintingEstimate from "@/components/pages/PaintingEstimate";
import Footer from "@/components/pages/Footer";
import ResponsiveGuideBar from "@/lib/ResponsiveGuide";

// app/page.tsx
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   other: {
//     "dns-prefetch": "//res.cloudinary.com",
//     preconnect: "https://res.cloudinary.com",
//     "preload-desktop":
//       "https://res.cloudinary.com/jimbits/image/upload/c_limit,f_auto,g_auto,q_60,t_hero-mobile,w_1200/v1756580859/ncs-painting-edmonton/landing/ncs-painting-edmoton-house-painting.png",
//     "preload-mobile":
//       "https://res.cloudinary.com/jimbits/image/upload/c_limit,e_blur:30,g_auto,f_auto,q_60,w_600/v1756580859/ncs-painting-edmonton/landing/ncs-painting-edmoton-house-painting.png",
//   },
// };
export default function Home() {
  return (
    <div className="overflow-x: hidden;">
      {/* <ResponsiveGuideBar /> */}
      <AppBar className="mb-3" />

      <Hero />
      <main>
        <AboutUs />
        <OurServices />
        <Preview />
        <Reviews />
        <SherwoodPark />
        <Faqs />
        <FortSaskatchewan />
        <PaintingEstimate />
        <StAlbert />
        <Footer />
      </main>
    </div>
  );
}
