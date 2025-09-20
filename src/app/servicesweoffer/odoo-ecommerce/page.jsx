
import React from 'react';

import Navbar from '@/components/layouts/navbar/Navbar';
import Footer from '@/components/layouts/footer/Footer';
import Hero from '@/components/odoo/servicesweoffer/odoo-ecommerce/hero/hero';
import EcommerceSection from '@/components/odoo/servicesweoffer/odoo-ecommerce/e-commerce/e-commerce';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-ecommerce/contact-us/contact-us';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-ecommerce/cards/cards';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-ecommerce/why-choose-us/why-choose-us';
import SecondContactSection from '@/components/odoo/servicesweoffer/odoo-ecommerce/second-contact-us/second-contact-us';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';

export const metadata = {
  title: 'Odoo eCommerce Development Services – Code4Bharat',
  description:
    'Unlock your digital store’s potential with Code4Bharat’s Odoo eCommerce development services. From storefront customization to backend automation.',
  keywords: [
    'Odoo eCommerce services',
    'eCommerce development Odoo',
    'custom Odoo storefront',
    'Odoo eCommerce India',
    'ERP eCommerce integration',
    'Code4Bharat eCommerce solutions',
  ],
  openGraph: {
    title: 'Odoo eCommerce Development Services – Code4Bharat',
    description:
      'Build high-performance Odoo eCommerce platforms with Code4Bharat. We help you customize, integrate, and optimize online stores.',
    url: 'https://www.code4bharat.com/services/odoo-ecommerce',
    siteName: 'Code4Bharat',
    images: [
      {
        url: 'https://www.code4bharat.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Code4Bharat Odoo eCommerce',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odoo eCommerce Development Services – Code4Bharat',
    description:
      'Custom Odoo eCommerce development by Code4Bharat. Enhance your store’s performance and customer experience.',
    images: ['https://www.code4bharat.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.code4bharat.com/services/odoo-ecommerce',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const OdooEcommercePage = () => {
  return (
    <div className="odoo-ecommerce-page">
      <Navbar />
      <Hero />
      <EcommerceSection />
      <ContactSection />
      <EcommerceBenefits />
      <WhyChooseUs />
      <SecondContactSection />
      <FooterLinks />
      <Footer />
    </div>
  );
};

export default OdooEcommercePage;
