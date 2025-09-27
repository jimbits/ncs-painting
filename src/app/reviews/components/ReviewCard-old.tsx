import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import type { Review } from './types';
import { StarIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/lib/utils';
interface ReviewCardProps {
  children?: ReactNode;
  className?: string;
  body: string;
  rating: number;
  name: string | null;
  date?: string;
  location: string | null;
  job: string | null;
}

function ReviewCard({
  className,
  rating,
  body,
  name,
  location,
  job,
  date,
}: ReviewCardProps) {
  return (
    <article className="mb-10 max-w-md rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
      <div className="mb-3 flex items-center gap-1">
        {Array.from({ length: rating / 2 }).map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-stone-700">{body}</p>
      <div className="flex items-center justify-between border-t pt-4 text-sm text-stone-500">
        <div>
          <p className="font-medium text-stone-800">{name}</p>
          <p>{location}</p>
        </div>
        <div className="text-right">
          <span className="block text-xs">{formatDate(date)}</span>
          <span className="rounded-lg bg-stone-100 px-2 py-1 text-xs text-stone-600">
            {job}
          </span>
        </div>
      </div>
    </article>
  );
}

export { ReviewCard };
