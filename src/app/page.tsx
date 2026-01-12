import { Hero } from '@/components/page-sections/home/hero';
import { AboutUs } from '@/components/page-sections/home/about-us';
import { Faqs } from '@/components/page-sections/home/faq';
import { OurServices } from '@/components/page-sections/home/services';
import { GetFreeQuote } from '@/components/page-sections/home/get-quote';
import { Footer } from '@/components/page-sections/home/footer';
import Reviews from '@/components/page-sections/home/Reviews';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutUs />

      <main>
        <OurServices />
        <GetFreeQuote />
        <Reviews />
        <Faqs />
        <Footer />
      </main>
    </div>
  );
}
