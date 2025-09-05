// types/form.ts

// Core form data structure - represents the shape of our form
export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectDescription: string;
}

// Error state for each form field (optional fields since not all may have errors)
export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  projectDescription?: string;
}

// Props for the QuoteForm component
export interface QuoteFormProps {
  onSubmit: (data: QuoteFormData) => Promise<void>; // Required callback function
  className?: string; // Optional CSS classes
  disabled?: boolean; // Optional disabled state
}

// Props for the GetQuote wrapper component
export interface GetQuoteProps {
  onSubmit?: (data: QuoteFormData) => Promise<void>; // Optional - will use default if not provided
  className?: string;
  disabled?: boolean;
}

// Internal validation result structure
export interface ValidationResult {
  isValid: boolean;
  errors: FormErrors;
}

// Validation rule definition for future extensibility
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message: string;
}

// Type for validation rules object (maps each field to its rules)
export type ValidationRules = {
  [K in keyof QuoteFormData]: ValidationRule[];
};

// API response types for when we integrate with a backend
export interface QuoteSubmissionResponse {
  success: boolean;
  message: string;
  quoteId?: string;
  estimatedResponse?: string;
}

export interface ApiError {
  message: string;
  field?: keyof QuoteFormData;
  code?: string;
}
