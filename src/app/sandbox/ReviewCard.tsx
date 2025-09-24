// components/ReviewCardVariants.tsx
'use client'

import {StarIcon, CalendarDaysIcon} from '@heroicons/react/24/outline'

const review = {
	id: 'rev-001',
	rating: 5,
	content:
		'Absolutely amazing kitchen renovation! The team was professional, on time, and the results exceeded our expectations. Our new kitchen is the heart of our home now.',
	date: '2025-08-22T14:30:00.000Z',
	projectType: 'Kitchen Renovation',
	reviewer: {
		name: 'Sarah Johnson',
		city: 'Vancouver',
	},
}

function formatDate(dateStr: string) {
	return new Date(dateStr).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

// ⭐ Version 1: Classic Card
export function ReviewCardV1() {
	return (
		<article className="bg-white rounded-2xl shadow-md p-6 max-w-md hover:shadow-lg transition">
			<div className="flex items-center gap-1 mb-3">
				{Array.from({length: 5}).map((_, i) => (
					<StarIcon
						key={i}
						className={`h-5 w-5 ${
							i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
						}`}
					/>
				))}
			</div>
			<p className="text-stone-700 text-sm leading-relaxed mb-4">{review.content}</p>
			<div className="flex items-center justify-between text-sm text-stone-500 border-t pt-4">
				<div>
					<p className="font-medium text-stone-800">{review.reviewer.name}</p>
					<p>{review.reviewer.city}</p>
				</div>
				<div className="text-right">
					<span className="block text-xs">{formatDate(review.date)}</span>
					<span className="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded-lg">
						{review.projectType}
					</span>
				</div>
			</div>
		</article>
	)
}

// ⭐ Version 2: Highlighted Header
export function ReviewCardV2() {
	return (
		<article className="bg-gradient-to-br from-yellow-50 to-white border rounded-xl shadow-sm p-6 max-w-md">
			<div className="flex items-center justify-between mb-4">
				<h3 className="font-semibold text-stone-900">{review.projectType}</h3>
				<time className="flex items-center gap-1 text-xs text-stone-500">
					<CalendarDaysIcon className="h-4 w-4" />
					{formatDate(review.date)}
				</time>
			</div>
			<div className="flex items-center gap-1 mb-3">
				{Array.from({length: 5}).map((_, i) => (
					<StarIcon
						key={i}
						className={`h-4 w-4 ${
							i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
						}`}
					/>
				))}
			</div>
			<p className="text-stone-700 text-sm leading-relaxed mb-4">{review.content}</p>
			<p className="text-sm font-medium text-stone-800">
				— {review.reviewer.name}, {review.reviewer.city}
			</p>
		</article>
	)
}

// ⭐ Version 3: Minimalist w/ Top Date
export function ReviewCardV3() {
	return (
		<article className="border border-stone-200 rounded-lg p-5 max-w-md bg-white">
			<time className="block text-xs text-stone-400 mb-2 text-right">
				{formatDate(review.date)}
			</time>
			<div className="flex items-center gap-1 mb-3">
				{Array.from({length: 5}).map((_, i) => (
					<StarIcon
						key={i}
						className={`h-4 w-4 ${
							i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
						}`}
					/>
				))}
			</div>
			<p className="text-stone-700 text-sm leading-relaxed mb-4 italic">"{review.content}"</p>
			<div className="flex justify-between text-sm">
				<p className="font-medium text-stone-800">{review.reviewer.name}</p>
				<span className="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded-md">
					{review.projectType}
				</span>
			</div>
		</article>
	)
}

// ⭐ Version 4: Horizontal Layout
export function ReviewCardV4() {
	return (
		<article className="flex gap-4 p-6 bg-white rounded-xl shadow-md max-w-2xl">
			<div className="flex-shrink-0 flex flex-col items-center">
				<div className="bg-yellow-100 text-yellow-700 rounded-full h-12 w-12 flex items-center justify-center font-bold">
					{review.rating}★
				</div>
				<time className="mt-2 text-xs text-stone-400">{formatDate(review.date)}</time>
			</div>
			<div className="flex-1">
				<h3 className="font-semibold text-stone-900 mb-1">{review.projectType}</h3>
				<p className="text-stone-700 text-sm mb-3">{review.content}</p>
				<p className="text-sm font-medium text-stone-800">
					{review.reviewer.name}, {review.reviewer.city}
				</p>
			</div>
		</article>
	)
}

// ⭐ Version 5: Elegant Testimonial
export function ReviewCardV5() {
	return (
		<article className="bg-stone-50 border border-stone-200 rounded-2xl p-6 max-w-md">
			<blockquote className="text-stone-700 text-sm leading-relaxed mb-4">
				“{review.content}”
			</blockquote>
			<div className="flex items-center justify-between">
				<div>
					<p className="font-medium text-stone-900">{review.reviewer.name}</p>
					<p className="text-xs text-stone-500">{review.reviewer.city}</p>
				</div>
				<div className="text-right">
					<div className="flex items-center gap-1 justify-end">
						{Array.from({length: 5}).map((_, i) => (
							<StarIcon
								key={i}
								className={`h-4 w-4 ${
									i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
								}`}
							/>
						))}
					</div>
					<time className="text-xs text-stone-400 block mt-1">{formatDate(review.date)}</time>
				</div>
			</div>
		</article>
	)
}
