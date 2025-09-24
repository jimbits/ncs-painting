import reviews from '@/app/api/reviews/reviews.json'
import type {NextRequest} from 'next/server'

export async function GET() {
	return Response.json(reviews)
}
