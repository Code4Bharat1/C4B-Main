'use client';

import React from 'react';
import Head from 'next/head';

import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-customization/cards/cards';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-customization/contact-us/contact-us';
import EcommerceSection from '@/components/odoo/servicesweoffer/odoo-customization/erp-customization/erp-customization';
import Hero from '@/components/odoo/servicesweoffer/odoo-customization/hero/hero';
import SecondcontactSection from '@/components/odoo/servicesweoffer/odoo-customization/second-contact-us/second-contact-us';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-customization/why-choose-us/why-choose-us';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';

function Page() {
  return (
    <>
      <Head>
        <title>Odoo Customization Services – Code4Bharat</title>
        <meta
          name="description"
          content="Tailored Odoo customization services from Code4Bharat. Enhance your ERP with bespoke modules and features that fit your business needs."
        />
        <meta
          name="keywords"
          content="Odoo customization, custom Odoo modules, Odoo ERP customization, Code4Bharat Odoo services"
        />
        <meta property="og:title" content="Odoo Customization Services – Code4Bharat" />
        <meta
          property="og:description"
          content="Tailored Odoo customization services from Code4Bharat. Enhance your ERP with bespoke modules and features that fit your business needs."
        />
        <meta property="og:url" content="https://www.code4bharat.com/services/odoo-customization" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.code4bharat.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Odoo Customization Services – Code4Bharat" />
        <meta
          name="twitter:description"
          content="Tailored Odoo customization services from Code4Bharat. Enhance your ERP with bespoke modules and features that fit your business needs."
        />
        <meta name="twitter:image" content="https://www.code4bharat.com/og-image.png" />
        <link rel="canonical" href="https://www.code4bharat.com/services/odoo-customization" />
      </Head>

      <Navbar />
      <Hero />
      <EcommerceSection />
      <ContactSection />
      <EcommerceBenefits />
      <WhyChooseUs />
      <SecondcontactSection />
      <FooterLinks />
      <Footer />
    </>
  );
}

export default Page;
