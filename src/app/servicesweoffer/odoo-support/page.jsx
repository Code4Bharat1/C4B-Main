'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-support/cards/cards';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-support/contact-us/contact-us';
import Hero from '@/components/odoo/servicesweoffer/odoo-support/hero/hero';
import SecondcontactSection from '@/components/odoo/servicesweoffer/odoo-support/second-contact-us/second-contact-us';
import EcommerceSections from '@/components/odoo/servicesweoffer/odoo-support/training/training';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-support/why-choose/why-choose';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <EcommerceSections />
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