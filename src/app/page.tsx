import { BelowTheFold } from '@/components/pages/home';
import { Hero } from '@/components/pages/home/sections/hero';
import AboutUs from '@/components/pages/home/sections/AboutUs';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutUs />

      <main>
        <BelowTheFold />
      </main>
    </div>
  );
}
