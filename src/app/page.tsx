import { lazy, Suspense } from "react";
import AppBar from "@/components/landing-page/AppBar";
import Hero from "@/components/landing-page/Hero";

// Lazy load components that aren't immediately visible
const AboutUs = lazy(() => import("@/components/landing-page/AboutUs"));
const OurServices = lazy(() => import("@/components/landing-page/OurServices"));
const Reviews = lazy(() => import("@/components/landing-page/Reviews"));
const Preview = lazy(() => import("@/components/landing-page/Preview"));
const Faqs = lazy(() => import("@/components/landing-page/Faqs"));
const SherwoodPark = lazy(
  () => import("@/components/landing-page/SherwoodPark")
);
const FortSaskatchewan = lazy(
  () => import("@/components/landing-page/FortSaskatchewan")
);
const StAlbert = lazy(() => import("@/components/landing-page/StAlbert"));
const Footer = lazy(() => import("@/components/landing-page/Footer"));

// Simple loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-8">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
  </div>
);

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Keep critical above-the-fold content loaded immediately */}
      <AppBar className="mb-3" />
      <Hero />

      <main>
        <Suspense fallback={<SectionLoader />}>
          <AboutUs />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <OurServices />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Preview />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Reviews />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <SherwoodPark />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Faqs />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <FortSaskatchewan />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <StAlbert />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
