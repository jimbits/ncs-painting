import { lazy, Suspense } from "react";
import AppBar from "@/components/pages/AppBar";
import Hero from "@/components/pages/Hero";
import AboutUs from "@/components/pages/AboutUs";
// Lazy load components that aren't immediately visible

const Footer = lazy(() => import("@/components/pages/Footer"));

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
