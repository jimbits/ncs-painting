import { Metadata } from 'next'
import Test from './Test'
export const metadata: Metadata = {
    title: 'Page Title',
    description: 'Page description',
}

export default function PageName() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Page Title</h1>
            <Test />
      // Page content
        </div>
    )
}