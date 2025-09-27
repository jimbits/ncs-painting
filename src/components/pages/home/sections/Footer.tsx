import { cn } from '@/lib/utils.ts';
import { ReactNode } from 'react';
import Link from 'next/link';
interface FooterProps {
  children?: ReactNode;
  className?: string;
}
const navigation = {
  solutions: [
    { name: 'Marketing', href: '/' },
    { name: 'Analytics', href: '/' },
    { name: 'Automation', href: '/' },
    { name: 'Commerce', href: '/' },
    { name: 'Insights', href: '/' },
  ],
  support: [
    { name: 'Submit ticket', href: '/' },
    { name: 'Documentation', href: '/' },
    { name: 'Guides', href: '/' },
  ],
  company: [
    { name: 'About', href: '/' },
    { name: 'Blog', href: '/' },
    { name: 'Jobs', href: '/' },
    { name: 'Press', href: '/' },
  ],
  legal: [
    { name: 'Terms of service', href: '/' },
    { name: 'Privacy policy', href: '/' },
    { name: 'License', href: '/' },
  ],
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-gray-900 py-14 text-white', className)}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact & Business Info */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-xl font-bold text-white">NCS Painting</h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-300">
              Professional residential painting services serving Edmonton and
              surrounding communities since 2009.
            </p>

            <div className="mb-4 space-y-2">
              <p className="text-sm">
                <span className="font-semibold">Phone:</span>{' '}
                <Link
                  href="tel:7807225544"
                  className="text-blue-400 transition-colors hover:text-blue-300"
                >
                  (780) 722-5544
                </Link>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Email:</span>{' '}
                <Link
                  href="mailto:info@ncspainting.com"
                  className="text-blue-400 transition-colors hover:text-blue-300"
                >
                  info@ncspainting.com
                </Link>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Service Areas:</span> Edmonton,
                Sherwood Park, Fort Saskatchewan, St. Albert
              </p>
            </div>

            <div className="text-sm text-green-400">
              <p>✓ Licensed & Insured ✓ Work Guaranteed ✓ Free Estimates</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Painting Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Interior Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Exterior House Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Cabinet Refinishing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Deck & Fence Staining
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Drywall Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Power Washing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Commercial Painting
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Service Areas
            </h4>
            <ul className="mb-6 space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Edmonton House Painters
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Sherwood Park Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Fort Saskatchewan Painters
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  St. Albert Painting Services
                </Link>
              </li>
            </ul>

            <h5 className="text-md mb-3 font-medium text-white">
              Edmonton Neighborhoods
            </h5>
            <ul className="grid grid-cols-2 gap-1 text-xs text-gray-400">
              <li>Terwillegar</li>
              <li>Windermere</li>
              <li>Castle Downs</li>
              <li>Mill Creek</li>
              <li>Riverbend</li>
              <li>Summerside</li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Company</h4>
            <ul className="mb-6 space-y-2 text-sm">
              <li>
                <Link
                  href="#about-us"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  About NCS Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Painting Tips & Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Free Estimate
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Work Warranty
                </Link>
              </li>
            </ul>

            <div>
              <h5 className="text-md mb-3 font-medium text-white">Follow Us</h5>
              <div className="flex space-x-4 text-sm">
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                  aria-label="Facebook"
                >
                  Facebook
                </Link>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-red-400"
                  aria-label="Google Business"
                >
                  Google
                </Link>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-yellow-400"
                  aria-label="HomeStars"
                >
                  HomeStars
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <div className="text-sm text-gray-400">
              <p>
                &copy; 2024 NCS Painting. Professional house painters serving
                Edmonton, Sherwood Park, Fort Saskatchewan, and St. Albert since
                2009.
              </p>
            </div>

            <div className="text-sm">
              <p className="text-gray-300">
                <span className="font-semibold text-white">
                  Ready to transform your home?
                </span>{' '}
                <Link
                  href="tel:7807225544"
                  className="font-medium text-blue-400 transition-colors hover:text-blue-300"
                >
                  Call (780) 722-5544
                </Link>{' '}
                for your free painting estimate!
              </p>
            </div>

            <div className="space-x-2 text-sm text-gray-400">
              <Link href="/" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
