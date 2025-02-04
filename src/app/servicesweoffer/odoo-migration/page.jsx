'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-migration/card/card';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-migration/contact-us/contact-us';
import Hero from '@/components/odoo/servicesweoffer/odoo-migration/hero/hero';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-migration/oodu-implementers/oodu-implementers';
import EcommerceSections from '@/components/odoo/servicesweoffer/odoo-migration/seamless/seamless';
import SecondcontactSection from '@/components/odoo/servicesweoffer/odoo-migration/second-contact-us/second-contact-us';
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