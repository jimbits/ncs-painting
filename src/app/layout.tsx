import { type Metadata } from 'next';
import { defaultMetadata } from './metadata/defaultMetadata';
import { Geist, Geist_Mono } from 'next/font/google';

import { ResponsiveGuide } from '@/tools/responsive-guide';
import { AppBar } from '@/components/navigation';
import '@/css/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head></head>

      <body>
        <ResponsiveGuide visible={true} />
        <AppBar />
        {children}
      </body>
    </html>
  );
}
