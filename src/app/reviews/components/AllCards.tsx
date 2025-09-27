import {cn} from '@/lib/utils'
import {ReactNode} from 'react'
import {ReviewCardV1, ReviewCardV2, ReviewCardV3, ReviewCardV4, ReviewCardV5} from './ReviewCard'
import {
	Review,
	ReviewsData,
	ReviewApiResponse,
} from '@/components/pages/home/sections/reviews/Reviews.types'

interface ReviewsPageProps {
	children?: ReactNode
	className?: string
}

async function fetchReviews(): Promise<ReviewApiResponse> {
	const res = await fetch('http://localhost:3000/api/reviews.json', {
		cache: 'no-store', // ISR Version => { next: { revalidate: 60 } }
	})
	if (!res.ok) {
		throw new Error(`Failed to fetch reviews: ${res.status} ${res.statusText}`)
	}

	return res.json() as Promise<ReviewApiResponse>
}

async function ReviewsPage({className}: ReviewsPageProps) {
	await fetchReviews()
	return (
		<div className={cn('text-inherit', className)}>
			<header className="pt-10 flex flex-col items-center -space-y-1.5">
				<h1 className="text-2xl  font-bold text-stone-950   ">Sandbox</h1>
				<p className=" ">Example SSR for Reviews Page</p>
				<p>built on next.js</p>
			</header>
			<main>
				<ReviewCardV1 />
				<ReviewCardV2 />
				<ReviewCardV3 />
				<ReviewCardV4 />
				<ReviewCardV5 />
			</main>
		</div>
	)
}

export default ReviewsPage
