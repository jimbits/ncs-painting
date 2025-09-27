// components/ReviewCardVariants.tsx
'use client';

import { StarIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const review = {
  id: 'rev-001',
  rating: 10,
  content:
    'Absolutely amazing kitchen renovation! The team was professional, on time, and the results exceeded our expectations. Our new kitchen is the heart of our home now.',
  date: '2025-08-22T14:30:00.000Z',
  projectType: 'Kitchen Renovation',
  reviewer: {
    name: 'Sarah Johnson',
    city: 'Vancouver',
  },
};

// ⭐ Version 1: Classic Card
export function ReviewCardV1() {
  return (
    <article className="max-w-md rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
      <div className="mb-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${
              i < review.rating
                ? 'fill-yellow-500 text-yellow-500'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-stone-700">
        {review.content}
      </p>
      <div className="flex items-center justify-between border-t pt-4 text-sm text-stone-500">
        <div>
          <p className="font-medium text-stone-800">{review.reviewer.name}</p>
          <p>{review.reviewer.city}</p>
        </div>
        <div className="text-right">
          <span className="block text-xs">{formatDate(review.date)}</span>
          <span className="rounded-lg bg-stone-100 px-2 py-1 text-xs text-stone-600">
            {review.projectType}
          </span>
        </div>
      </div>
    </article>
  );
}

// ⭐ Version 2: Highlighted Header
export function ReviewCardV2() {
  return (
    <article className="max-w-md rounded-xl border bg-gradient-to-br from-yellow-50 to-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-stone-900">{review.projectType}</h3>
        <time className="flex items-center gap-1 text-xs text-stone-500">
          <CalendarDaysIcon className="h-4 w-4" />
          {formatDate(review.date)}
        </time>
      </div>
      <div className="mb-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={`h-4 w-4 ${
              i < review.rating
                ? 'fill-yellow-500 text-yellow-500'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-stone-700">
        {review.content}
      </p>
      <p className="text-sm font-medium text-stone-800">
        — {review.reviewer.name}, {review.reviewer.city}
      </p>
    </article>
  );
}

// ⭐ Version 3: Minimalist w/ Top Date
export function ReviewCardV3() {
  return (
    <article className="max-w-md rounded-lg border border-stone-200 bg-white p-5">
      <time className="mb-2 block text-right text-xs text-stone-400">
        {formatDate(review.date)}
      </time>
      <div className="mb-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={`h-4 w-4 ${
              i < review.rating
                ? 'fill-yellow-500 text-yellow-500'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-stone-700 italic">
        "{review.content}"
      </p>
      <div className="flex justify-between text-sm">
        <p className="font-medium text-stone-800">{review.reviewer.name}</p>
        <span className="rounded-md bg-stone-100 px-2 py-1 text-xs text-stone-600">
          {review.projectType}
        </span>
      </div>
    </article>
  );
}

// ⭐ Version 4: Horizontal Layout
export function ReviewCardV4() {
  return (
    <article className="flex max-w-2xl gap-4 rounded-xl bg-white p-6 shadow-md">
      <div className="flex flex-shrink-0 flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-700">
          {review.rating}★
        </div>
        <time className="mt-2 text-xs text-stone-400">
          {formatDate(review.date)}
        </time>
      </div>
      <div className="flex-1">
        <h3 className="mb-1 font-semibold text-stone-900">
          {review.projectType}
        </h3>
        <p className="mb-3 text-sm text-stone-700">{review.content}</p>
        <p className="text-sm font-medium text-stone-800">
          {review.reviewer.name}, {review.reviewer.city}
        </p>
      </div>
    </article>
  );
}

// ⭐ Version 5: Elegant Testimonial
export function ReviewCardV5() {
  return (
    <article className="max-w-md rounded-2xl border border-stone-200 bg-stone-50 p-6">
      <blockquote className="mb-4 text-sm leading-relaxed text-stone-700">
        “{review.content}”
      </blockquote>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-stone-900">{review.reviewer.name}</p>
          <p className="text-xs text-stone-500">{review.reviewer.city}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating
                    ? 'fill-yellow-500 text-yellow-500'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <time className="mt-1 block text-xs text-stone-400">
            {formatDate(review.date)}
          </time>
        </div>
      </div>
    </article>
  );
}
