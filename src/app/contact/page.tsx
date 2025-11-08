'use client';

import { useState } from 'react';
import QuoteFormModal from '@/components/modals/QuoteFormModal';

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="container mx-auto px-4 py-8">
        <h1 className="mb-4 text-center text-4xl font-bold">Contact Page</h1>
      </header>

      <main className="mx-4 sm:mx-6">
        <section className="mx-auto max-w-2xl text-center">
          <p className="mb-8 text-lg text-gray-600">
            Ready to transform your space? Click the button below to request a
            free quote.
          </p>

          <button
            type="button"
            onClick={openModal}
            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Request a Quote
          </button>

          <div className="mt-12 space-y-4 text-left">
            <h2 className="text-2xl font-bold text-gray-900">
              Testing Instructions
            </h2>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Click "Request a Quote" to open the modal</li>
              <li>
                Test the conditional fields by changing "Preferred Contact
                Method"
              </li>
              <li>
                Try closing the modal with:
                <ul className="ml-8 list-inside list-disc">
                  <li>The X button (top-right)</li>
                  <li>Clicking outside the modal</li>
                  <li>Pressing the ESC key</li>
                </ul>
              </li>
              <li>
                Fill out the form and submit to test the email functionality
              </li>
              <li>Watch for the success message after submission</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Quote Form Modal */}
      <QuoteFormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
