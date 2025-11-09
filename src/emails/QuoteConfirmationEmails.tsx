import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Column,
} from '@react-email/components';
import {
  type QuoteFormData,
  serviceTypeLabels,
  propertyTypeLabels,
  timelineLabels,
  contactMethodLabels,
} from '@/lib/validations/quote-form-schema';

interface QuoteConfirmationEmailProps {
  customerName: string;
  formData: QuoteFormData;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export default function QuoteConfirmationEmail({
  customerName,
  formData,
}: QuoteConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>We received your quote request - NCS Painting</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header Section */}
          <Section style={headerSection}>
            <Text style={headerTitle}>🎨 NCS Painting</Text>
            <Text style={headerSubtitle}>Quote Request Received</Text>
          </Section>

          {/* Main Content */}
          <Section style={contentSection}>
            <Text style={greeting}>Hi {customerName},</Text>

            <Text style={bodyText}>
              Thank you for submitting your quote request! We've received your
              information and appreciate your interest in NCS Painting.
            </Text>

            <Text style={bodyText}>
              <strong>
                We will review your request and be in contact within 2 business
                days.
              </strong>
            </Text>

            {/* Summary Box */}
            <Section style={summaryBox}>
              <Text style={summaryTitle}>Your Quote Request Summary</Text>

              <Row>
                <Column style={labelColumn}>
                  <Text style={label}>Service Type:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={value}>
                    {serviceTypeLabels[formData.serviceType]}
                  </Text>
                </Column>
              </Row>

              {formData.propertyType && formData.propertyType.length > 0 && (
                <Row>
                  <Column style={labelColumn}>
                    <Text style={label}>Property Type:</Text>
                  </Column>
                  <Column style={valueColumn}>
                    <Text style={value}>
                      {formData.propertyType
                        .map((type) => propertyTypeLabels[type])
                        .join(', ')}
                    </Text>
                  </Column>
                </Row>
              )}

              {formData.timeline && formData.timeline.length > 0 && (
                <Row>
                  <Column style={labelColumn}>
                    <Text style={label}>Timeline:</Text>
                  </Column>
                  <Column style={valueColumn}>
                    <Text style={value}>
                      {formData.timeline
                        .map((time) => timelineLabels[time])
                        .join(', ')}
                    </Text>
                  </Column>
                </Row>
              )}

              {formData.projectDescription && (
                <Row>
                  <Column style={labelColumn}>
                    <Text style={label}>Description:</Text>
                  </Column>
                  <Column style={valueColumn}>
                    <Text style={value}>{formData.projectDescription}</Text>
                  </Column>
                </Row>
              )}
            </Section>

            <Hr style={hr} />

            {/* Contact Info */}
            <Section style={contactSection}>
              <Text style={contactLabel}>We'll reach you via:</Text>
              <Text style={contactInfo}>
                {contactMethodLabels[formData.preferredContactMethod]}
              </Text>
              {formData.email && (
                <Text style={contactInfo}>📧 {formData.email}</Text>
              )}
              {formData.phone && (
                <Text style={contactInfo}>📱 {formData.phone}</Text>
              )}
            </Section>

            <Hr style={hr} />

            {/* CTA Section */}
            <Section style={ctaSection}>
              <Text style={bodyText}>
                Questions in the meantime? Feel free to reach out directly.
              </Text>
              <Button style={button} href={`${baseUrl}/contact`}>
                Visit Our Website
              </Button>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footerSection}>
            <Text style={footerText}>
              © {new Date().getFullYear()} NCS Painting. All rights reserved.
            </Text>
            <Text style={footerText}>
              This email was sent because you submitted a quote request on our
              website.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f4f4f4',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0',
  marginBottom: '64px',
};

const headerSection = {
  backgroundColor: '#2c3e50',
  padding: '40px 20px',
  textAlign: 'center' as const,
  borderRadius: '8px 8px 0 0',
};

const headerTitle = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0',
  padding: '0',
};

const headerSubtitle = {
  color: '#3498db',
  fontSize: '18px',
  margin: '8px 0 0 0',
};

const contentSection = {
  padding: '40px 20px',
};

const greeting = {
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '0 0 20px 0',
};

const bodyText = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#333333',
  margin: '0 0 16px 0',
};

const summaryBox = {
  backgroundColor: '#e8f4f8',
  borderLeft: '4px solid #3498db',
  padding: '20px',
  marginBottom: '24px',
  borderRadius: '4px',
};

const summaryTitle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#2c3e50',
  margin: '0 0 16px 0',
};

const labelColumn = {
  width: '30%',
  paddingRight: '12px',
};

const valueColumn = {
  width: '70%',
};

const label = {
  fontSize: '13px',
  fontWeight: 'bold',
  color: '#555555',
  margin: '0 0 8px 0',
};

const value = {
  fontSize: '14px',
  color: '#333333',
  margin: '0 0 12px 0',
};

const hr = {
  borderColor: '#e0e0e0',
  margin: '24px 0',
};

const contactSection = {
  marginBottom: '24px',
};

const contactLabel = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#2c3e50',
  margin: '0 0 8px 0',
};

const contactInfo = {
  fontSize: '14px',
  color: '#3498db',
  margin: '4px 0',
};

const ctaSection = {
  textAlign: 'center' as const,
  marginTop: '32px',
};

const button = {
  backgroundColor: '#3498db',
  borderRadius: '4px',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  margin: '16px 0',
};

const footerSection = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '0 0 8px 8px',
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '12px',
  color: '#777777',
  margin: '0',
  lineHeight: '1.5',
};
