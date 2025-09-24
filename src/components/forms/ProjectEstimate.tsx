import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface QuoteFormProps {
  children?: ReactNode;
  className?: string;
}

function QuoteForm({ className }: QuoteFormProps) {
  return (
    <section className="mx-auto max-w-lg lg:mx-0">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Free Quote Request
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
          Get Your Painting Quote
        </h1>
        <p className="text-xl leading-relaxed text-slate-600">
          Ready to transform your space? Tell us about your project and we'll
          provide a detailed, no-obligation quote within 24 hours.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={getInputClassName("firstName")}
              placeholder="John"
              disabled={disabled || isSubmitting}
              autoComplete="given-name"
            />
            {renderErrorMessage("firstName")}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={getInputClassName("lastName")}
              placeholder="Doe"
              disabled={disabled || isSubmitting}
              autoComplete="family-name"
            />
            {renderErrorMessage("lastName")}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={getInputClassName("email")}
            placeholder="john.doe@example.com"
            disabled={disabled || isSubmitting}
            autoComplete="email"
          />
          {renderErrorMessage("email")}
        </div>

        {/* Phone Field */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={getInputClassName("phone")}
            placeholder="(555) 123-4567"
            disabled={disabled || isSubmitting}
            autoComplete="tel"
          />
          {renderErrorMessage("phone")}
        </div>

        {/* Project Description Field */}
        <div>
          <label
            htmlFor="projectDescription"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Project Details
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            rows={5}
            className={`${getInputClassName("projectDescription")} resize-none`}
            placeholder="Tell us about your painting project... Include details like room size, surface type, color preferences, timeline, and any specific requirements."
            disabled={disabled || isSubmitting}
          />
          {renderErrorMessage("projectDescription")}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={disabled || isSubmitting}
            className={`w-full transform rounded-xl px-8 py-4 text-lg font-semibold text-white transition-all duration-200 ${
              disabled || isSubmitting
                ? "cursor-not-allowed bg-slate-400"
                : "bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:scale-[1.02] hover:from-blue-700 hover:to-blue-800 hover:shadow-xl focus:ring-4 focus:ring-blue-500/30 focus:outline-none active:scale-[0.98]"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="mr-3 -ml-1 h-5 w-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-25"
                  ></circle>
                  <path
                    fill="currentColor"
                    strokeWidth="4"
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending Quote Request...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Get My Free Quote
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center space-x-6 pt-6 text-sm text-slate-500">
          <div className="flex items-center">
            <svg
              className="mr-1.5 h-4 w-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Free Quote
          </div>
          <div className="flex items-center">
            <svg
              className="mr-1.5 h-4 w-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            No Obligation
          </div>
          <div className="flex items-center">
            <svg
              className="mr-1.5 h-4 w-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            24hr Response
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteForm;
