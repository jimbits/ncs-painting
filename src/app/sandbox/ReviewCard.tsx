import { cn } from '@/lib/utils';
import { StarIcon } from '@heroicons/react/24/solid';
import { formatDate, shouldTruncateReview, truncateText } from '@/lib/utils';
import Link from 'next/link';

interface ReviewCardProps {
  id: string;
  className?: string;
  body: string;
  rating: number;
  name: string | null;
  date: string;
  location: string | null;
  job: string | null;
  response?: string | null;
  responseDate?: string | null;
}

function ReviewCard({
  id,
  className,
  body,
  rating,
  name,
  date,
  location,
  job,
  response,
  responseDate,
}: ReviewCardProps) {
  const needsTruncation = shouldTruncateReview(body, 50);
  const displayText = needsTruncation ? truncateText(body, 50) : body;

  return (
    <article
      className={cn(
        'overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md',
        className
      )}
    >
      {/* Header Section */}
      <header className="">
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
          {/* Reviewer */}
          <div className="flex items-center justify-between">
            {/* Reviewer Info */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                <span className="text-sm font-semibold text-white">
                  {(name || 'H').charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {name || 'HomeOwner'}
                </p>
                {location && (
                  <p className="text-xs text-gray-500">{location}</p>
                )}
              </div>
            </div>

            {/* Date */}
            <time dateTime={date} className="text-sm text-gray-500">
              {formatDate(date)}
            </time>
          </div>
        </div>
      </header>
      <div className="space-y-1 px-6 py-4">
        {/* Rating Stars */}
        <div className="mt-3 flex items-center gap-1">
          {Array.from({ length: rating / 2 }).map((_, i) => (
            <StarIcon
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? 'fill-current text-yellow-400'
                  : 'fill-current text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm font-medium text-gray-700">
            {rating / 2}/5
          </span>
        </div>
        {/* Job Description */}
        {job && (
          <h2 className="mt-4 text-lg font-semibold text-pretty text-gray-700">
            {job}
          </h2>
        )}
        {/* Review Text */}
        <div className="mb-4">
          <p className="text-base leading-relaxed text-gray-800">
            {displayText}
            {needsTruncation && (
              <>
                {' '}
                <Link
                  href={`/reviews/${id}`}
                  className="text-sm font-medium text-blue-600 underline transition-colors hover:text-blue-800 hover:no-underline"
                >
                  Read more
                </Link>
              </>
            )}
          </p>
        </div>
        {/* Source Link */}
        <div className=" ">
          <Link
            href="https://www.homestars.com/profile/2780851-ncs-painting-design/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs text-gray-500 transition-colors hover:text-gray-700"
          >
            <svg
              className="mr-1 h-3 w-3"
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
        </div>
      </div>
      {/* Footer Section */}
      <footer>
        {/* Business Response */}
        {response && responseDate && (
          <div className="border-t border-blue-100 bg-blue-50 px-6 py-4">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                <span className="text-xs font-semibold text-white">NCS</span>
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-sm font-medium text-blue-900">
                    Response from business
                  </span>
                  <time
                    dateTime={responseDate}
                    className="text-xs text-blue-600"
                  >
                    {formatDate(responseDate)}
                  </time>
                </div>
                <p className="text-sm leading-relaxed text-blue-800">
                  {response}
                </p>
              </div>
            </div>
          </div>
        )}
      </footer>
    </article>
  );
}

export { ReviewCard };
