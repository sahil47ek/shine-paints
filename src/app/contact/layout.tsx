import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Shine Paints for expert color consultation and paint recommendations.',
  openGraph: {
    title: 'Contact Shine Paints',
    description: 'Get in touch with our paint experts for personalized assistance.',
    images: [
      {
        url: '/contact-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Shine Paints',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Shine Paints',
    description: 'Premium paint solutions provider',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Paint Street',
      addressLocality: 'Color City',
      addressRegion: 'ST',
      postalCode: '12345',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-8900',
      contactType: 'customer service',
      email: 'contact@shinepaint.com',
      availableLanguage: ['English']
    }
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
} 