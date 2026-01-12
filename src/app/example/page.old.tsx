import { Metadata } from 'next';
import reviewData from '@/data/reviews.json';
import PageReviews
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};

export default function Example() {
  return (
    <section>
      <header>
        <h1>Reviews</h1>
      </header>
      <section className="mb-16">
        <h2 className="font-playfair mb-6 text-2xl text-gray-800">
          Example 2: Testimonial with Avatar
        </h2>
        <p className="font-poppins mb-6 text-gray-600">
          Best for: Website testimonials, landing pages, social proof
        </p>

        <div className="card-animate max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="font-outfit mb-4 text-4xl text-blue-400">❝</div>

          <p className="font-dm-sans mb-8 text-base leading-relaxed text-gray-700">
            Niall did a great job. Quote was very reasonable, he showed up on
            time and finished the job in good time. Painting was very well done,
            he kept a tidy job site and cleaned up everything at the end of the
            job.
          </p>

          <div className="flex items-center gap-4">
            <div className="font-outfit flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-lg font-bold text-white">
              BP
            </div>
            <div>
              <p className="font-outfit font-600 text-gray-900">Bruce Penny</p>
              <p className="font-dm-sans text-sm text-gray-500">
                Edmonton • Exterior painting
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
          </div>
        </div>
      </section>
    </section>
  );
}
