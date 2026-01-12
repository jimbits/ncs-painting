import reviews from '@/data/reviews.json';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  fillColor?: string;
  backgroundColor?: string;
}

export default function TestimonialCard({
  fillColor = 'fill-sky-500',
  backgroundColor = 'bg-sky-500',
}: TestimonialCardProps) {
  return (
    <aside className="min-w-[420px] overflow-clip shadow-sm">
      <header className="grid grid-cols-1 grid-rows-1">
        <div className="z-10 col-start-1 row-start-1 mt-4 ml-3">
          <h2 className="font-semibold text-white">Location/Date</h2>
          <p className="text-5xl font-bold text-white">Job Description</p>
        </div>
        <svg
          viewBox="0 0 420 180"
          className={cn('col-start-1 row-start-1 h-[200px]', fillColor)}
        >
          <path d="M189,157.2q-75.4,29-114.3,7.6C54.2,151.4,0,118.4,0,118.4V0h420v47.7" />
        </svg>
      </header>

      <div className="mx-8 mt-6 -mb-4">
        <p className="text-sm text-neutral-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint aperiam
          doloribus doloremque repudiandae autem aspernatur ab omnis incidunt
          molestiae earum sunt, quisquam iste.
        </p>
        <div className="mt-6 mr-16 ml-auto w-fit">
          <p className="text-lg font-bold">User Fullname</p>
          <p className="text-sm">date/location</p>

          <ul className="rating">
            <li className="star">★</li>
            <li className="star">★</li>
            <li className="star">★</li>
            <li className="star">★</li>
            <li className="star">★</li>
          </ul>
        </div>
      </div>
      <footer className="grid grid-cols-1 grid-rows-1">
        <div
          className={cn(
            'z-3 col-span-1 row-span-1 mr-6 -mb-12 h-24 w-24 justify-self-end rounded-full border-8 border-white',
            backgroundColor
          )}
        />

        <svg
          className={cn(
            'col-span-1 row-span-1 w-[90%] justify-self-end',
            fillColor
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 350 100"
        >
          <path d="M0,100h350V28.7S313.4,0,270,0s-67.8,3.4-118,27.6C101.7,51.7,0,100,0,100Z" />
        </svg>
      </footer>
    </aside>
  );
}
