import Hero from "@/components/page/Hero";
import AppBar from "@/components/page/AppBar";
import OurServices from "@/components/page/OurServices";
import AboutUs from "@/components/page/AboutUs";
import Reviews from "@/components/page/Reviews";
import Preview from "@/components/page/Preview";

// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "dns-prefetch": "//res.cloudinary.com",
    preconnect: "https://res.cloudinary.com",
    "preload-desktop":
      "https://res.cloudinary.com/jimbits/image/upload/c_limit,f_auto,g_auto,q_60,t_hero-mobile,w_1200/v1756580859/ncs-painting-edmonton/landing/ncs-painting-edmoton-house-painting.png",
    "preload-mobile":
      "https://res.cloudinary.com/jimbits/image/upload/c_limit,e_blur:30,g_auto,f_auto,q_60,w_600/v1756580859/ncs-painting-edmonton/landing/ncs-painting-edmoton-house-painting.png",
  },
};
export default function Home() {
  return (
    <div className="h-full overflow-y-auto">
      <AppBar />
      <Hero />
      <main className="">
        <AboutUs />
        <OurServices />
        <Preview />
        <Reviews />
      </main>
    </div>
  );
}
