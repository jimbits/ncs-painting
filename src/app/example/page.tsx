import { Metadata } from 'next';
import reviewData from '@/data/reviews.json';
import Testimonial from './components/Testimonial';

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'Customer testimonials and reviews',
};

export default function ReviewsPage() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Page header */}
        <header className="mb-16">
          <h1 className="font-playfair mb-3 text-5xl text-gray-900">Reviews</h1>
          <p className="text-lg text-gray-600">
            Trusted by homeowners across Edmonton and beyond
          </p>
        </header>
        <div className="lg:flex lg:gap-8">
          <Testimonial />
          <Testimonial
            backgroundColor="bg-emerald-500"
            fillColor="fill-emerald-500"
          />
          <Testimonial
            backgroundColor="bg-rose-500"
            fillColor="fill-rose-500"
          />
        </div>
      </div>
    </section>
  );
}
