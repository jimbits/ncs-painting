import { Resend } from 'resend';

// Initialize Resend client with API key from environment variables
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
export const EMAIL_CONFIG = {
  from: 'NCS Painting <quotes@ncspainting.com>',
  to: 'niall@ncspainting.com',
  replyTo: 'niall@ncspainting.com',
} as const;
