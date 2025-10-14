import { Metadata } from 'next';
import { ReviewCard } from './components/ReviewCard';
import type { Review } from './types';
import reviewsData from '@/data/reviews.json';

export const metadata: Metadata = {
  title: 'Reviews Page',
  description: 'Page description',
};

async function PageName() {
  const firstTenReviews: Review[] = reviewsData.slice(0, 10);
  return (
    <>
      <header className="container mx-auto px-4 py-8">
        <h1 className="mb-4 text-center text-4xl font-bold">Reviews Page</h1>
      </header>
      <main className="mx-4 sm:mx-6">
        {firstTenReviews.map((review) => (
          <ReviewCard key={review.id} {...review} className="mb-4" />
        ))}
      </main>
    </>
  );
}

export default PageName;
