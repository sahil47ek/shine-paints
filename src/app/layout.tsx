import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './components/Footer';
import { ReduxProvider } from '../store/provider';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Shine Paints | Premium Paint Solutions',
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ReduxProvider>
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
