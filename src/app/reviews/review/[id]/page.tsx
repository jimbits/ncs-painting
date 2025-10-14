// app/reviews/review/[id]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import reviewsData from '@/data/reviews.json';
import { StarIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/lib/utils';
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ReviewPage({ params }: PageProps) {
  const { id } = await params;
  const review = reviewsData.find((r) => r.id === id);

  if (!review) {
    notFound();
  }

  const starRating = Math.round(review.rating / 2);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Back link */}
        <Link
          href="/reviews"
          className="mb-6 inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
        >
          ← Back to all reviews
        </Link>

        {/* Main Review Card */}
        <section className="mb-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
          {/* Header */}
          <div className="px-8 py-6">
            <div className="mb-8 flex items-center justify-between">
              {/* Reviewer Info */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500">
                  <span className="text-2xl font-bold text-white">
                    {(review.name || 'H').charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-xl leading-4 font-bold text-gray-600">
                    {review.name || 'Home Owner'}
                  </p>
                  <p className="text-base text-gray-600">{review.location}</p>
                </div>
              </div>
              <p className="leading-2 text-gray-600">
                <span className="font-medium">Review Date:</span>{' '}
                <time> {formatDate(review.date)}</time>
              </p>
            </div>

            {/* Meta Info */}
            <header className="mb-4">
              {/* Rating */}
              <div className="flex items-center gap-1 text-right">
                <div className="flex items-center justify-end">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < starRating
                          ? 'fill-current text-yellow-400'
                          : 'fill-current text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <p className="mt-0.5 text-base font-bold text-gray-500">
                  {starRating}/5
                </p>
              </div>

              {review.job && (
                <h2 className="text-2xl font-bold text-gray-900">
                  {review.job}
                </h2>
              )}
            </header>

            {/* Review Content */}
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-base leading-relaxed text-gray-800">
                {review.body}
              </p>
            </div>

            {/* Source */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <Link
                href="https://www.homestars.com/profile/2780851-ncs-painting-design/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-500 transition-colors hover:text-gray-700"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                Originally posted on HomeStars
              </Link>
              <p className="mt-1 text-sm text-gray-400">Review #{review.id}</p>
            </div>
          </div>
        </section>

        {/* Business Response Card */}
        {review.response && review.responseDate && (
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
            <div className="px-8 py-6">
              <figure className="mb-4 flex items-center gap-4">
                <figcaption className=" ">
                  <h3 className="text-base font-bold text-gray-900">
                    NCS Painting
                  </h3>
                  <p className="text-sm text-gray-600">
                    Responded {formatDate(review.responseDate)}
                  </p>
                </figcaption>
              </figure>

              <p className="text-base leading-5 text-gray-800">
                {review.response}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
