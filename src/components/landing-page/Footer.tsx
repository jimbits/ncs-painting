import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Logo from "@/icons/ncs-painting-logo.svg";
interface FooterProps {
  children?: ReactNode;
  className?: string;
}
const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Automation", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Submit ticket", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
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
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:7807225544"
                  className="text-blue-400 transition-colors hover:text-blue-300"
                >
                  (780) 722-5544
                </a>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@ncspainting.com"
                  className="text-blue-400 transition-colors hover:text-blue-300"
                >
                  info@ncspainting.com
                </a>
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
                <a
                  href="/interior-painting-edmonton"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Interior Painting
                </a>
              </li>
              <li>
                <a
                  href="/exterior-painting-edmonton"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Exterior House Painting
                </a>
              </li>
              <li>
                <a
                  href="/cabinet-refinishing-edmonton"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Cabinet Refinishing
                </a>
              </li>
              <li>
                <a
                  href="/deck-staining-edmonton"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Deck & Fence Staining
                </a>
              </li>
              <li>
                <a
                  href="/drywall-repair-edmonton"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Drywall Repair
                </a>
              </li>
              <li>
                <a
                  href="/power-washing-edmonton"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Power Washing
                </a>
              </li>
              <li>
                <a
                  href="/commercial-painting-edmonton"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Commercial Painting
                </a>
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
                <a
                  href="/edmonton-painters"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Edmonton House Painters
                </a>
              </li>
              <li>
                <a
                  href="/sherwood-park-painters"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Sherwood Park Painting
                </a>
              </li>
              <li>
                <a
                  href="/fort-saskatchewan-painters"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Fort Saskatchewan Painters
                </a>
              </li>
              <li>
                <a
                  href="/st-albert-painters"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  St. Albert Painting Services
                </a>
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
                <a
                  href="/about-ncs-painting"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  About NCS Painting
                </a>
              </li>
              <li>
                <a
                  href="/painting-gallery"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Project Gallery
                </a>
              </li>
              <li>
                <a
                  href="/customer-reviews"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Customer Reviews
                </a>
              </li>
              <li>
                <a
                  href="/painting-tips-blog"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Painting Tips & Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact-painters-edmonton"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/free-painting-estimate"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Free Estimate
                </a>
              </li>
              <li>
                <a
                  href="/painting-warranty"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Work Warranty
                </a>
              </li>
            </ul>

            <div>
              <h5 className="text-md mb-3 font-medium text-white">Follow Us</h5>
              <div className="flex space-x-4 text-sm">
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-red-400"
                  aria-label="Google Business"
                >
                  Google
                </a>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-yellow-400"
                  aria-label="HomeStars"
                >
                  HomeStars
                </a>
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
                </span>{" "}
                <a
                  href="tel:7807225544"
                  className="font-medium text-blue-400 transition-colors hover:text-blue-300"
                >
                  Call (780) 722-5544
                </a>{" "}
                for your free painting estimate!
              </p>
            </div>

            <div className="space-x-2 text-sm text-gray-400">
              <a
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a
                href="/terms-of-service"
                className="transition-colors hover:text-white"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
