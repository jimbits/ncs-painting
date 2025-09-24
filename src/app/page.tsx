import { lazy, Suspense } from 'react';
import { BelowTheFold } from '@/components/pages/home';
import Hero from '@/components/pages/home/sections/Hero';
import AboutUs from '@/components/pages/home/sections/AboutUs';
import { AppBar } from '@/components/navigation';
import ResponsiveGuideBar from '@/lib/ResponsiveGuide';
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <ResponsiveGuideBar />
      <AppBar />
      <Hero />
      <AboutUs />

      <main>
        <BelowTheFold />
      </main>
    </div>
  );
}
