import Link from 'next/link';
import Image from 'next/image';
import {
  FaceSmileIcon,
  ChatBubbleBottomCenterTextIcon,
  CalculatorIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Interior Paints', href: '/products#interior' },
      { name: 'Exterior Paints', href: '/products#exterior' },
      { name: 'Specialty Finishes', href: '/products#specialty' },
      { name: 'Color Collections', href: '/products#collections' },
    ],
    services: [
      { name: 'Interior Painting', href: '/services#interior' },
      { name: 'Exterior Painting', href: '/services#exterior' },
      { name: 'Color Consultation', href: '/services#consultation' },
      { name: 'Commercial Services', href: '/services#commercial' },
    ],
    tools: [
      { name: 'Paint Calculator', href: '/tools/calculator' },
      { name: 'Color Visualizer', href: '/tools/visualizer' },
      { name: 'Project Planner', href: '/tools/planner' },
      { name: 'Professional Tools', href: '/tools#professional' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/shinepaint',
      icon: <FaceSmileIcon className="w-6 h-6" />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/shinepaints?igsh=MXcwbzJjdTZqOTAxMQ==',
      icon: <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/shinepaint',
      icon: <CalculatorIcon className="w-6 h-6" />,
    },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <div className="relative w-32 h-12 sm:w-48 sm:h-16">
                <Image
                  src="/logo-black.jpg"
                  alt="Shine Paints"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Transform your space with premium quality paints and expert color consultation.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Products</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Tools</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <a href="tel:+918714209920" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 87142 09920
              </a>
              <a href="mailto:contact@shinepaint.com" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@shinepaint.com
              </a>
            </div>
            <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © {currentYear} Shine Paints. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 