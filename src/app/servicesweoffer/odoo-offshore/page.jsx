'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import EcommerceSection from '@/components/odoo/servicesweoffer/odoo-offshore/business-outsourcing/business-outsourcing';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-offshore/cards/cards';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-offshore/contact-us/contact-us';
import Hero from '@/components/odoo/servicesweoffer/odoo-offshore/Hero/hero';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-offshore/oodu-implementers/oodu-implementers';
import ContactSectionsecond from '@/components/odoo/servicesweoffer/odoo-offshore/second-contact-us/second-contact-us';
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
      <ContactSectionsecond />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page