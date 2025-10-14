// app/reviews/review/[id]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import reviewsData from '@/data/reviews.json';
import { StarIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/lib/utils';
interface PageProps {
  params: { id: string };
}

export default function ReviewPage({ params }: PageProps) {
  const review = reviewsData.find((r) => r.id === params.id);

  if (!review) {
    notFound();
    ç;
  }

  // Convert 10-point rating to 5-star
  const starRating = Math.round(review.rating / 2);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      {/* Back link */}
      <Link
        href="/reviews"
        className="mb-6 inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
      >
        ← Back to all reviews
      </Link>

      <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        {/* Header with reviewer info */}
        <div className="px-8 py-6">
          <header className="flex items-center justify-between">
            {/* Reviewer & Location */}
            <figure className="mb-6 flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-600">
                <span className="text-xl font-semibold text-white">
                  {(review.name || 'H').charAt(0).toUpperCase()}
                </span>
              </div>
              <figcaption>
                <p className="text-2xl font-bold text-gray-900">
                  {review.name || 'Home Owner'}
                </p>
                {review.location && (
                  <p className="-mt-1 text-gray-600">{review.location}</p>
                )}
              </figcaption>
            </figure>

            {/* Rating */}
            <div className="mb-4 flex items-center gap-2">
              <div className="flex items-center gap-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-6 w-6 ${
                      i < starRating
                        ? 'fill-current text-yellow-400'
                        : 'fill-current text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xl font-semibold text-gray-900">
                {starRating}/5
              </span>
            </div>
          </header>
          {/* Review Date */}
          <div>
            <span className="mr-1.5"> Review Date:</span>
            <time dateTime={review.date} className="text-gray-500">
              {formatDate(review.date)}
            </time>
          </div>

          {/* Job description */}
          {review.job && (
            <div className="mb-4">
              <h1 className="text-2xl font-semibold capitalize">
                {review.job}
              </h1>
            </div>
          )}
          {/* Review Content */}
          <div>
            <div className="prose prose-gray max-w-none">
              <p className="text-xl leading-snug whitespace-pre-line text-gray-800">
                {review.body}
              </p>
            </div>
          </div>

          {/* Original Source LInk */}
          <Link
            href="https://www.homestars.com/profile/2780851-ncs-painting-design/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-gray-600 transition-colors hover:text-gray-800"
          >
            <figure className="my-4 flex items-center">
              <svg
                className="mr-2 h-5.5 w-5.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              <figure>
                <p>Originally posted on HomeStars</p>
                <p className="text-xs text-gray-400">Review #{review.id}</p>
              </figure>
            </figure>
          </Link>
        </div>
        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 px-8 py-6">
          {/* Business response */}
          {review.response && review.responseDate && (
            <>
              <figure className="mb-3 flex items-center gap-6">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-400">
                  <span className="text-sm font-extrabold text-gray-900">
                    NCS
                  </span>
                </div>
                <figcaption>
                  <h3 className="mt-2 text-sm leading-1 font-semibold text-gray-900">
                    Response from NCS Painting & Design
                  </h3>
                  <time
                    dateTime={review.responseDate}
                    className="-mt-4 text-xs text-gray-600"
                  >
                    Responded {formatDate(review.responseDate)}
                  </time>

                  <p className="text-base leading-tight text-gray-700">
                    {review.response}
                  </p>
                </figcaption>
              </figure>
            </>
          )}
        </footer>
      </article>
    </div>
  );
}
