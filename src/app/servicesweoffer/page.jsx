
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Hero from '@/components/odoo/servicesweoffer/hero/hero';
import Services from '@/components/odoo/servicesweoffer/services/services';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react';

export const metadata = {
  title: 'Odoo Services – NEXCORE ALLIANCE LLP',
  description:
    'Explore comprehensive Odoo services by NEXCORE ALLIANCE LLP including implementation, customization, support, and more.',
  keywords: [
    'Odoo services',
    'Odoo implementation',
    'Odoo customization',
    'Odoo support',
    'ERP services India',
    'NEXCORE ALLIANCE LLP Odoo',
  ],
  openGraph: {
    title: 'Odoo Services – NEXCORE ALLIANCE LLP',
    description:
      'Get expert Odoo services tailored for your business needs by NEXCORE ALLIANCE LLP.',
    url: 'https://www.NEXCORE ALLIANCE LLP.com/services/odoo-services',
    siteName: 'NEXCORE ALLIANCE LLP',
    images: [
      {
        url: 'https://www.NEXCORE ALLIANCE LLP.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Odoo Services by NEXCORE ALLIANCE LLP',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odoo Services – NEXCORE ALLIANCE LLP',
    description:
      'Explore comprehensive Odoo services by NEXCORE ALLIANCE LLP including implementation, customization, and support.',
    images: ['https://www.NEXCORE ALLIANCE LLP.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.NEXCORE ALLIANCE LLP.com/services/odoo-services',
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
