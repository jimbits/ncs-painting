'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  quoteFormSchema,
  type QuoteFormData,
  type ContactMethod,
  type ServiceType,
  type PropertyType,
  type Timeline,
  serviceTypeLabels,
  propertyTypeLabels,
  timelineLabels,
  contactMethodLabels,
} from '@/lib/validations/quote-form-schema';
import { sendQuoteEmail } from '@/actions/send-quote-email';

interface QuoteFormProps {
  onSuccess: () => void;
}

export default function QuoteForm({ onSuccess }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      preferredContactMethod: 'phone',
      serviceType: 'interior',
      propertyType: [],
      projectDescription: '',
      timeline: [],
    },
  });

  // Watch the preferred contact method to show/hide fields
  const preferredContactMethod = watch('preferredContactMethod');

  // Determine which fields to show
  const showEmail =
    preferredContactMethod === 'email' || preferredContactMethod === 'both';
  const showPhone =
    preferredContactMethod === 'phone' || preferredContactMethod === 'both';

  // Phone number formatting handler
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove non-digits
    let formatted = '';

    if (input.length > 0) {
      formatted = '(' + input.substring(0, 3);
    }
    if (input.length >= 4) {
      formatted += ') ' + input.substring(3, 6);
    }
    if (input.length >= 7) {
      formatted += '-' + input.substring(6, 10);
    }

    setValue('phone', formatted, { shouldValidate: true });
  };

  // Form submission handler
  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await sendQuoteEmail(data);

      if (result.success) {
        onSuccess();
      } else {
        setSubmitError(
          result.error || 'Failed to send quote request. Please try again.'
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* General error message */}
      {submitError && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
          <p className="font-semibold">Error</p>
          <p>{submitError}</p>
        </div>
      )}

      {/* Name field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-bold text-stone-600"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className={`mt-1 block w-full rounded-lg border border-stone-400/60 bg-white px-4 py-1.5 shadow transition-colors placeholder:text-sm focus:ring-2 focus:outline-none ${
            errors.name
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
          }`}
          placeholder="John Doe"
          disabled={isSubmitting}
          required
          minLength={2}
          maxLength={100}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      {/* Prefered Contact Method  */}
      <div className="">
        {/* Preferred Contact Method - Radio Buttons */}
        <div className="mb-6">
          <label className="mb-2 block font-extrabold text-stone-700">
            Preferred Contact Method <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6">
            {(['email', 'phone', 'both'] as const).map((method) => (
              <label key={method} className="flex items-center">
                <input
                  type="radio"
                  value={method}
                  {...register('preferredContactMethod')}
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  disabled={isSubmitting}
                  required
                />
                <span className="ml-1 text-sm text-gray-700">
                  {contactMethodLabels[method]}
                </span>
              </label>
            ))}
          </div>
          {errors.preferredContactMethod && (
            <p className="mt-1 text-sm text-red-600">
              {errors.preferredContactMethod.message}
            </p>
          )}
        </div>

        {/* Email field - Conditional */}
        {showEmail && (
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-stone-600"
            >
              Email Address{' '}
              {(preferredContactMethod === 'email' ||
                preferredContactMethod === 'both') && (
                <span className="text-red-500">*</span>
              )}
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={`mt-1 block w-full rounded-lg border border-stone-400/60 bg-white px-4 py-1.5 shadow transition-colors placeholder:text-sm focus:ring-2 focus:outline-none ${
                errors.email
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
              placeholder="john@example.com"
              disabled={isSubmitting}
              required={
                preferredContactMethod === 'email' ||
                preferredContactMethod === 'both'
              }
              maxLength={255}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        )}

        {/* Phone field - Conditional */}
        {showPhone && (
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-bold text-stone-600"
            >
              Phone Number{' '}
              {(preferredContactMethod === 'phone' ||
                preferredContactMethod === 'both') && (
                <span className="text-red-500">*</span>
              )}
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone')}
              onChange={handlePhoneChange}
              className={`mt-1 block w-full rounded-lg border border-stone-400/60 bg-white px-4 py-1.5 shadow transition-colors placeholder:text-sm focus:ring-2 focus:outline-none ${
                errors.phone
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
              placeholder="(555) 123-4567"
              disabled={isSubmitting}
              required={
                preferredContactMethod === 'phone' ||
                preferredContactMethod === 'both'
              }
              pattern="\(\d{3}\) \d{3}-\d{4}"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Service Type - Radio Buttons */}
      <div>
        <label className="block text-lg font-semibold text-gray-700">
          Painting Service Required <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-6">
          {(['interior', 'exterior', 'both'] as const).map((type) => (
            <label key={type} className="flex items-center p-3">
              <input
                type="radio"
                value={type}
                {...register('serviceType')}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                disabled={isSubmitting}
                required
              />
              <span className="ml-3 text-sm text-gray-700">
                {serviceTypeLabels[type]}
              </span>
            </label>
          ))}
        </div>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-red-600">
            {errors.serviceType.message}
          </p>
        )}
      </div>

      {/* Property Type - Checkboxes (Optional) */}
      <div>
        <label className="block text-base font-bold text-gray-700">
          Property Type{' '}
          <span className="text-sm text-gray-400">
            (Optional - Select all that apply)
          </span>
        </label>
        <div className="flex justify-between gap-4">
          {Object.entries(propertyTypeLabels).map(([value, label]) => (
            <label
              key={value}
              className="flex cursor-pointer items-center transition-colors hover:bg-blue-50"
            >
              <input
                type="checkbox"
                value={value}
                {...register('propertyType')}
                className="h-4 w-4 cursor-pointer text-blue-500 focus:ring-blue-500"
                disabled={isSubmitting}
              />
              <span className="ml-3 text-sm text-gray-700">{label}</span>
            </label>
          ))}
        </div>
        {errors.propertyType && (
          <p className="mt-1 text-sm text-red-600">
            {errors.propertyType.message}
          </p>
        )}
      </div>

      {/* Timeline - Checkboxes (Optional) */}
      <div>
        <label className="block text-base font-bold text-gray-700">
          Project Timeline{' '}
          <span className="text-sm text-gray-400">
            (Optional - Select all that apply)
          </span>
        </label>
        <div className="flex justify-between">
          {Object.entries(timelineLabels).map(([value, label]) => (
            <label key={value} className="flex cursor-pointer items-center">
              <input
                type="checkbox"
                value={value}
                {...register('timeline')}
                className="h-4 w-4 cursor-pointer rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                disabled={isSubmitting}
              />
              <span className="ml-3 text-sm text-gray-700">{label}</span>
            </label>
          ))}
        </div>
        {errors.timeline && (
          <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
        )}
      </div>

      {/* Project Description - Textarea (Optional) */}
      <div>
        <label
          htmlFor="projectDescription"
          className="block text-base font-bold text-gray-700"
        >
          Project Description{' '}
          <span className="text-sm text-gray-400">(Optional)</span>
        </label>
        <textarea
          id="projectDescription"
          {...register('projectDescription')}
          rows={4}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Tell us about your painting project..."
          disabled={isSubmitting}
          maxLength={1000}
        />
        {errors.projectDescription && (
          <p className="mt-1 text-sm text-red-600">
            {errors.projectDescription.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Request Quote'
        )}
      </button>
    </form>
  );
}
