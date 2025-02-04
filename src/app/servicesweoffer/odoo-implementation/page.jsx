'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-implementation/cards/cards';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-implementation/contact-us/contact-us';
import Hero from '@/components/odoo/servicesweoffer/odoo-implementation/hero/hero';
import EcommerceSection from '@/components/odoo/servicesweoffer/odoo-implementation/implementation-software/implementation-software';
import SecondcontactSection from '@/components/odoo/servicesweoffer/odoo-implementation/second-contact-us/second-contact-us';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-implementation/why-choose-us/why-choose-us';
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