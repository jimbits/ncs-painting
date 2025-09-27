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
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">Reviews Page</h1>

      {firstTenReviews.map((review) => (
        <ReviewCard key={review.id} {...review} className="mb-4" />
      ))}
    </div>
  );
}

export default PageName;
