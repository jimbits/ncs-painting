import { cn } from '@/lib/utils';
import { StarIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { shouldTruncateReview, truncateText } from '@/lib/utils';
interface ReviewCardProps {
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
  className,
  rating,
  body,
  name,
  location,
  job,
  date,
  response,
  responseDate,
}: ReviewCardProps) {
  const needsTruncation = shouldTruncateReview(body, 50);
  const displayText = needsTruncation ? truncateText(body, 50) : body;
  return (
    <article
      className={cn(
        'max-w-md rounded-lg border border-stone-200 bg-white p-5',
        className
      )}
    >
      <header className="mb-4">
        <h2 className="text-xl font-bold text-stone-800">
          {name || 'Home Owner'}
        </h2>
        {job && <p className="text-base text-stone-600">{job}</p>}
        {location && <p className="text-sm text-stone-500">{location}</p>}

        <div className="mt-3 flex items-start justify-between">
          <div className="flex items-center gap-1">
            {Array.from({ length: rating / 2 }).map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? 'fill-yellow-500 text-yellow-500'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-stone-600">{rating / 2}/5</span>
          </div>

          <time dateTime={date} className="text-xs text-stone-400">
            {formatDate(date)}
          </time>
        </div>
      </header>

      <blockquote className="mb-4 text-sm leading-relaxed text-stone-700 italic">
        "{displayText}"
        {needsTruncation && (
          <>
            {' '}
            <Link
              href={`/reviews/${'jim'}`}
              className="text-xs font-medium text-blue-600 underline hover:text-blue-800"
            >
              Read More
            </Link>
          </>
        )}
      </blockquote>

      {response && responseDate && (
        <div className="mt-4 border-t border-stone-100 pt-4">
          <div className="rounded bg-stone-50 p-3">
            <p className="mb-2 text-sm text-stone-700">{response}</p>
            <time dateTime={responseDate} className="text-xs text-stone-500">
              Response: {formatDate(responseDate)}
            </time>
          </div>
        </div>
      )}

      <footer className="mt-4 border-t border-stone-100 pt-3">
        <Link
          href="https://www.homestars.com/profile/2780851-ncs-painting-design/reviews"
          className="text-xs text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on HomeStars
        </Link>
      </footer>
    </article>
  );
}

export { ReviewCard };
