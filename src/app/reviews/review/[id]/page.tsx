// app/reviews/review/[id]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import reviewsData from '@/data/reviews.json';

interface PageProps {
  params: { id: string };
}

export default function ReviewPage({ params }: PageProps) {
  const review = reviewsData.find((r) => r.id === params.id);

  if (!review) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      {/* Back link */}
      <Link
        href="/reviews"
        className="mb-6 inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
      >
        ← Back to all reviews
      </Link>

      {/* Review content */}
      <article className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold text-gray-900">
          Review by {review.name || 'Home Owner'}
        </h1>
        <p className="leading-relaxed text-gray-700">{review.body}</p>
      </article>
    </div>
  );
}
