import { lazy, Suspense } from 'react';
const OurServices = lazy(() => import('./sections/OurServices'));
const Reviews = lazy(() => import('./sections/Reviews'));
const Preview = lazy(() => import('./sections/Preview'));
const Faqs = lazy(() => import('./sections/Faqs'));
const SherwoodPark = lazy(() => import('./sections/SherwoodPark'));
const FortSaskatchewan = lazy(() => import('./sections/FortSaskatchewan'));
const StAlbert = lazy(() => import('./sections/StAlbert'));
const Footer = lazy(() => import('./sections/Footer'));

// Simple loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-8">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
  </div>
);

export default function BelowTheFold() {
  return (
    <>
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
    </>
  );
}
