'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-customization/cards/cards';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-customization/contact-us/contact-us';
import EcommerceSection from '@/components/odoo/servicesweoffer/odoo-customization/erp-customization/erp-customization';
import Hero from '@/components/odoo/servicesweoffer/odoo-customization/hero/hero';
import SecondcontactSection from '@/components/odoo/servicesweoffer/odoo-customization/second-contact-us/second-contact-us';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-customization/why-choose-us/why-choose-us';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <EcommerceSection />
      <ContactSection />
      <EcommerceBenefits />
      <WhyChooseUs />
      <SecondcontactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page