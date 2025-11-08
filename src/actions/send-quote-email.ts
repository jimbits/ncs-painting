'use server';

import { resend, EMAIL_CONFIG } from '@/lib/email/resend';
import {
  quoteFormSchema,
  type QuoteFormData,
  serviceTypeLabels,
  propertyTypeLabels,
  timelineLabels,
  contactMethodLabels,
} from '@/lib/validations/quote-form-schema';

/**
 * Server Action: Send quote request email via Resend
 *
 * @param formData - The quote form data from the client
 * @returns Success or error response
 */
export async function sendQuoteEmail(formData: QuoteFormData) {
  try {
    // Server-side validation with Zod
    const validatedData = quoteFormSchema.parse(formData);

    // Format the email HTML content
    const emailHtml = generateEmailHtml(validatedData);

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo: validatedData.email || EMAIL_CONFIG.replyTo, // Reply goes to customer if email provided
      subject: `New Quote Request from ${validatedData.name}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend API error:', error);
      return {
        success: false,
        error: 'Failed to send email. Please try again.',
      };
    }

    console.log('Email sent successfully:', data);

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
 * Generate HTML email content from form data
 */
function generateEmailHtml(data: QuoteFormData): string {
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

    <div class="section">
      <h2 style="color: #2c3e50; font-size: 18px;">Contact Information</h2>
      
      ${
        email
          ? `
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${email}" style="color: #3498db; text-decoration: none;">${email}</a></div>
      `
          : ''
      }
      
      ${
        phone
          ? `
        <div class="label">Phone:</div>
        <div class="value"><a href="tel:${phone.replace(/[^\d]/g, '')}" style="color: #3498db; text-decoration: none;">${phone}</a></div>
      `
          : ''
      }
    </div>

    <div class="section">
      <h2 style="color: #2c3e50; font-size: 18px;">Project Details</h2>
      
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
        <div class="value" style="white-space: pre-wrap; background-color: #f9f9f9; padding: 10px; border-radius: 4px;">${projectDescription}</div>
      `
          : ''
      }
    </div>

    <div class="footer">
      <p>This quote request was submitted via the NCS Painting website contact form.</p>
      <p style="margin: 0;">Timestamp: ${new Date().toLocaleString('en-US', { timeZone: 'America/Edmonton' })}</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
