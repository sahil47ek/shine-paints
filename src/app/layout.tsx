import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from './components/Footer';
import { ReduxProvider } from '../store/provider';
import WhatsAppButton from './components/WhatsAppButton';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Shine Paints | Premium Paint Solution',
    template: '%s | Shine Paints'
  },
  description: 'Transform your space with premium quality paints and expert color consultation. Discover our range of interior, exterior, and specialty paints.',
  keywords: ['paint', 'interior paint', 'exterior paint', 'color consultation', 'premium paint', 'eco-friendly paint'],
  authors: [{ name: 'Shine Paints' }],
  creator: 'Shine Paints',
  publisher: 'Shine Paints',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={inter.className} />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          {children}
          <Footer />
          <WhatsAppButton />
        </ReduxProvider>
      </body>
    </html>
  );
}
