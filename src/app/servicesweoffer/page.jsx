
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Hero from '@/components/odoo/servicesweoffer/hero/hero';
import Services from '@/components/odoo/servicesweoffer/services/services';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react';

export const metadata = {
  title: 'Odoo Services – Code4Bharat',
  description:
    'Explore comprehensive Odoo services by Code4Bharat including implementation, customization, support, and more.',
  keywords: [
    'Odoo services',
    'Odoo implementation',
    'Odoo customization',
    'Odoo support',
    'ERP services India',
    'Code4Bharat Odoo',
  ],
  openGraph: {
    title: 'Odoo Services – Code4Bharat',
    description:
      'Get expert Odoo services tailored for your business needs by Code4Bharat.',
    url: 'https://www.code4bharat.com/services/odoo-services',
    siteName: 'Code4Bharat',
    images: [
      {
        url: 'https://www.code4bharat.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Odoo Services by Code4Bharat',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odoo Services – Code4Bharat',
    description:
      'Explore comprehensive Odoo services by Code4Bharat including implementation, customization, and support.',
    images: ['https://www.code4bharat.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.code4bharat.com/services/odoo-services',
  },
  robots: {
    index: true,
    follow: true,
  },
};

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <FooterLinks />
      <Footer />
    </div>
  );
}

export default App;
