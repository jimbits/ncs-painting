import AppBar from "@/components/landing-page/AppBar";
import OurServices from "@/components/landing-page/OurServices";
import AboutUs from "@/components/landing-page/AboutUs";
import Reviews from "@/components/landing-page/Reviews";
import Preview from "@/components/landing-page/Preview";
import Faqs from "@/components/landing-page/Faqs";
import GetQuote from "@/components/landing-page/GetQuote";
import Hero from "@/components/landing-page/Hero";
import StAlbert from "@/components/landing-page/StAlbert";
import SherwoodPark from "@/components/landing-page/SherwoodPark";
import FortSaskatchewan from "@/components/landing-page/FortSaskatchewan";
import PaintingEstimate from "@/components/landing-page/PaintingEstimate";
import Footer from "@/components/landing-page/Footer";
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
    <div>
      <ResponsiveGuideBar position="top" className="h-3" />
      <AppBar />

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
