import { z } from 'zod';

// Phone regex pattern for (xxx) xxx-xxxx format
const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

// Enum for contact method
export const contactMethodEnum = z.enum(['email', 'phone', 'both']);
export type ContactMethod = z.infer<typeof contactMethodEnum>;

// Enum for service type
export const serviceTypeEnum = z.enum(['interior', 'exterior', 'both']);
export type ServiceType = z.infer<typeof serviceTypeEnum>;

// Enum for property type
export const propertyTypeEnum = z.enum([
  'residential-home',
  'condo',
  'apartment',
  'town-home',
]);
export type PropertyType = z.infer<typeof propertyTypeEnum>;

// Enum for timeline/urgency
export const timelineEnum = z.enum([
  'asap',
  'within-1-month',
  'within-3-months',
  'just-browsing',
]);
export type Timeline = z.infer<typeof timelineEnum>;

/**
 * Base quote form schema
 * Conditional validation for email/phone based on preferred contact method
 */
export const quoteFormSchema = z
  .object({
    // Always required fields
    name: z
      .string()
      .min(1, 'Name is required')
      .min(2, 'Name must be at least 2 characters')
      .max(100, 'Name must be less than 100 characters'),

    preferredContactMethod: contactMethodEnum,

    serviceType: serviceTypeEnum,

    // Conditionally required fields (based on preferredContactMethod)
    email: z
      .string()
      .email('Please enter a valid email address')
      .max(255, 'Email must be less than 255 characters')
      .optional()
      .or(z.literal('')),

    phone: z
      .string()
      .regex(phoneRegex, 'Phone must be in format (xxx) xxx-xxxx')
      .optional()
      .or(z.literal('')),

    // Optional fields
    propertyType: z.array(propertyTypeEnum).optional(),

    projectDescription: z
      .string()
      .max(1000, 'Description must be less than 1000 characters')
      .optional()
      .or(z.literal('')),

    timeline: z.array(timelineEnum).optional(),
  })
  .superRefine((data, ctx) => {
    // Conditional validation based on preferred contact method
    if (
      data.preferredContactMethod === 'email' ||
      data.preferredContactMethod === 'both'
    ) {
      if (!data.email || data.email.trim() === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Email is required',
          path: ['email'],
        });
      }
    }

    if (
      data.preferredContactMethod === 'phone' ||
      data.preferredContactMethod === 'both'
    ) {
      if (!data.phone || data.phone.trim() === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Phone is required',
          path: ['phone'],
        });
      }
    }
  });

// TypeScript type inferred from schema
export type QuoteFormData = z.infer<typeof quoteFormSchema>;

// Helper labels for display
export const serviceTypeLabels: Record<ServiceType, string> = {
  interior: 'Interior',
  exterior: 'Exterior',
  both: 'Both',
};

export const propertyTypeLabels: Record<PropertyType, string> = {
  'residential-home': 'Residential Home',
  condo: 'Condo',
  apartment: 'Apartment',
  'town-home': 'Town Home',
};

export const timelineLabels: Record<Timeline, string> = {
  asap: 'ASAP',
  'within-1-month': 'Within 1 Month',
  'within-3-months': 'Within 3 Months',
  'just-browsing': 'Just Browsing',
};

export const contactMethodLabels: Record<ContactMethod, string> = {
  email: 'Email Only',
  phone: 'Phone Only',
  both: 'Both',
};
