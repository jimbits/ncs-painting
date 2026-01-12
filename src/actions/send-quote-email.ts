'use server';

import React from 'react';
import { render } from '@react-email/components';
import { resend, EMAIL_CONFIG } from '@/lib/email/resend';
import QuoteConfirmationEmail from '@/emails/QuoteConfirmationEmails';
import {
  quoteFormSchema,
  type QuoteFormData,
  serviceTypeLabels,
  propertyTypeLabels,
  timelineLabels,
  contactMethodLabels,
} from '@/lib/validations/quote-form-schema';

/**
 * Server Action: Send quote request emails via Resend
 * Sends two emails:
 * 1. Confirmation email to customer
 * 2. Quote details email to Niall
 *
 * @param formData - The quote form data from the client
 * @returns Success or error response
 */
export async function sendQuoteEmail(formData: QuoteFormData) {
  try {
    // Server-side validation with Zod
    const validatedData = quoteFormSchema.parse(formData);

    // Send confirmation email to customer
    const confirmationEmailHtml = await render(
      React.createElement(QuoteConfirmationEmail, {
        customerName: validatedData.name,
        formData: validatedData,
      })
    );

    const confirmationResult = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: validatedData.email || validatedData.phone, // Should have email from validation, but fallback to phone
      subject: 'We Received Your Quote Request - NCS Painting',
      html: confirmationEmailHtml,
    });

    if (confirmationResult.error) {
      console.error(
        'Failed to send confirmation email:',
        confirmationResult.error
      );
      // Don't return here - still try to send admin email
    }

    // Generate admin email HTML
    const adminEmailHtml = generateAdminEmailHtml(validatedData);

    // Send quote details to admin (Niall)
    const adminResult = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo: validatedData.email || EMAIL_CONFIG.replyTo,
      subject: `New Quote Request from ${validatedData.name}`,
      html: adminEmailHtml,
    });

    if (adminResult.error) {
      console.error('Resend API error:', adminResult.error);
      return {
        success: false,
        error: 'Failed to send quote request. Please try again.',
      };
    }

    console.log('Emails sent successfully:', {
      confirmation: confirmationResult.data,
      admin: adminResult.data,
    });

    return {
      success: true,
      message: 'Quote request sent successfully!',
    };
  } catch (error) {
    console.error('Server action error:', error);

    // Handle Zod validation errors
    if (error instanceof Error && error.name === 'ZodError') {
      return {
        success: false,
        error: 'Invalid form data. Please check your inputs.',
      };
    }

    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}

/**
 * Generate HTML email content for admin (Niall) from form data
 */
function generateAdminEmailHtml(data: QuoteFormData): string {
  const {
    name,
    email,
    phone,
    preferredContactMethod,
    serviceType,
    propertyType,
    projectDescription,
    timeline,
  } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #2c3e50;
      margin-top: 0;
      font-size: 24px;
      border-bottom: 3px solid #3498db;
      padding-bottom: 10px;
    }
    h2 {
      color: #2c3e50;
      font-size: 18px;
      margin-top: 24px;
      margin-bottom: 16px;
    }
    .section {
      margin-bottom: 20px;
    }
    .label {
      font-weight: 600;
      color: #555;
      margin-bottom: 5px;
    }
    .value {
      color: #333;
      margin-bottom: 15px;
    }
    .highlight {
      background-color: #e8f4f8;
      padding: 15px;
      border-radius: 5px;
      border-left: 4px solid #3498db;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      font-size: 12px;
      color: #777;
    }
    a {
      color: #3498db;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 New Quote Request</h1>
    
    <div class="highlight">
      <div class="label">Customer Name:</div>
      <div class="value"><strong>${name}</strong></div>
      
      <div class="label">Preferred Contact Method:</div>
      <div class="value"><strong>${contactMethodLabels[preferredContactMethod]}</strong></div>
    </div>

    <h2>Contact Information</h2>
    <div class="section">
      ${
        email
          ? `
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      `
          : ''
      }
      
      ${
        phone
          ? `
        <div class="label">Phone:</div>
        <div class="value"><a href="tel:${phone.replace(/[^\d]/g, '')}">${phone}</a></div>
      `
          : ''
      }
    </div>

    <h2>Project Details</h2>
    <div class="section">
      <div class="label">Service Type:</div>
      <div class="value">${serviceTypeLabels[serviceType]}</div>
      
      ${
        propertyType && propertyType.length > 0
          ? `
        <div class="label">Property Type:</div>
        <div class="value">${propertyType.map((type) => propertyTypeLabels[type]).join(', ')}</div>
      `
          : ''
      }
      
      ${
        timeline && timeline.length > 0
          ? `
        <div class="label">Timeline:</div>
        <div class="value">${timeline.map((time) => timelineLabels[time]).join(', ')}</div>
      `
          : ''
      }
      
      ${
        projectDescription
          ? `
        <div class="label">Project Description:</div>
        <div class="value" style="white-space: pre-wrap; background-color: #f9f9f9; padding: 10px; border-radius: 4px;">${escapeHtml(projectDescription)}</div>
      `
          : ''
      }
    </div>

    <div class="footer">
      <p><strong>Quick Reply:</strong> Use the reply button to respond directly to the customer.</p>
      <p style="margin: 0;">Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Edmonton' })} (Mountain Time)</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Escape HTML special characters to prevent injection
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
