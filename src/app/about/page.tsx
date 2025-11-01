import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import QuoteForm from '@/components/forms/ProjectEstimate';
interface ContactPageProps {
  children?: ReactNode;
  className?: string;
}

function ContactPage({ className }: ContactPageProps) {
  return (
    <main className="bg-gray-50 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <header>
          <h1 className="text-center text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
            About NCS Paiting H1
          </h1>
          <h2 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl dark:text-white">
            About Page Tagline
          </h2>
        </header>
      </div>
    </main>
  );
}

export default ContactPage;
