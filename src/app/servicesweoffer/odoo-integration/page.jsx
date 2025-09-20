'use client';

import React from 'react';
import Head from 'next/head';

import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-Integration/cards/cards';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-Integration/contact-us/contact-us';
import EcommerceSection from '@/components/odoo/servicesweoffer/odoo-Integration/end-to-end-integration/end-to-end-integration';
import Hero from '@/components/odoo/servicesweoffer/odoo-Integration/hero/hero';
import SecondcontactSection from '@/components/odoo/servicesweoffer/odoo-Integration/second-contact-us/second-contact-us';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-Integration/why-choose-us/why-choose-us';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';

function Page() {
  return (
    <>
      <Head>
        <title>Odoo Integration Services – Code4Bharat</title>
        <meta
          name="description"
          content="Seamlessly connect your business processes with Code4Bharat’s Odoo Integration Services. End-to-end ERP integration tailored to your needs."
        />
        <meta
          name="keywords"
          content="Odoo integration services, ERP integration, Odoo API integration, custom Odoo connectors, Code4Bharat Odoo"
        />
        <meta property="og:title" content="Odoo Integration Services – Code4Bharat" />
        <meta
          property="og:description"
          content="Seamlessly connect your business processes with Code4Bharat’s Odoo Integration Services. End-to-end ERP integration tailored to your needs."
        />
        <meta property="og:url" content="https://www.code4bharat.com/services/odoo-integration" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.code4bharat.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Odoo Integration Services – Code4Bharat" />
        <meta
          name="twitter:description"
          content="Seamlessly connect your business processes with Code4Bharat’s Odoo Integration Services. End-to-end ERP integration tailored to your needs."
        />
        <meta name="twitter:image" content="https://www.code4bharat.com/og-image.png" />
        <link rel="canonical" href="https://www.code4bharat.com/services/odoo-integration" />
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
