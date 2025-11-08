'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import QuoteForm from '@/components/forms/QuoteForm';

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteFormModal({
  isOpen,
  onClose,
}: QuoteFormModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  // Reset modal state when it closes
  const handleClose = () => {
    onClose();
    // Delay reset to allow fade out animation to complete
    setTimeout(() => {
      setShowSuccess(false);
    }, 300);
  };

  // Called when form is successfully submitted
  const handleSuccess = () => {
    setShowSuccess(true);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        {/* Backdrop with fade animation */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal container */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Modal panel with fade + scale animation */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-7xl transform overflow-hidden rounded-lg bg-white shadow-2xl transition-all">
                {/* Close button */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                {/* Modal content - switches between form and success */}
                {!showSuccess ? (
                  <FormView onSuccess={handleSuccess} />
                ) : (
                  <SuccessView onClose={handleClose} />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

/**
 * Form View - Shows the quote request form
 */
function FormView({ onSuccess }: { onSuccess: () => void }) {
  return (
    <div className="grid md:grid-cols-2">
      {/* Left side - Branding (hidden on small screens) */}
      <div className="hidden bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white md:block lg:p-12">
        <div className="flex h-full flex-col justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Request a Quote</h2>
            <p className="mb-6 text-blue-100">
              Get a free, no-obligation quote for your painting project. We'll
              respond within 24 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-blue-300" />
                <div>
                  <h3 className="font-semibold">Professional Service</h3>
                  <p className="text-sm text-blue-100">
                    Experienced painters you can trust
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-blue-300" />
                <div>
                  <h3 className="font-semibold">Quality Guarantee</h3>
                  <p className="text-sm text-blue-100">
                    We stand behind our work
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-3 h-2 w-2 rounded-full bg-blue-300" />
                <div>
                  <h3 className="font-semibold">Free Estimates</h3>
                  <p className="text-sm text-blue-100">
                    No cost, no obligation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-500 pt-6">
            <p className="text-sm text-blue-200">
              🔒 Your information is secure and will never be shared with third
              parties.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="p-6 sm:p-8 lg:p-12">
        <div className="mb-6">
          <Dialog.Title className="text-2xl font-bold text-gray-900">
            Get Your Free Quote
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-600">
            Fill out the form below and we'll get back to you shortly.
          </Dialog.Description>
        </div>

        {/* Quote Form */}
        <QuoteForm onSuccess={onSuccess} />
      </div>
    </div>
  );
}

/**
 * Success View - Shows after successful form submission
 */
function SuccessView({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-8 text-center sm:p-12">
      {/* Success icon */}
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-8 w-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Success message */}
      <Dialog.Title className="mb-4 text-2xl font-bold text-gray-900">
        Quote Request Sent!
      </Dialog.Title>

      <Dialog.Description className="mb-8 text-gray-600">
        Thank you for your interest in NCS Painting. We've received your quote
        request and will get back to you within 24 hours.
      </Dialog.Description>

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
      >
        Close
      </button>
    </div>
  );
}
