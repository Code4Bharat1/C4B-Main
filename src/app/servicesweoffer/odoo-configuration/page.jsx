'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import SecondcontactSection from '@/components/odoo/servicesweoffer/odoo-configuration/contact-us-second/contact-us-second';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-configuration/contact-us/contact-us';
import EcommerceSection from '@/components/odoo/servicesweoffer/odoo-configuration/erp-module/erp-module';
import GeneralConfiguration from '@/components/odoo/servicesweoffer/odoo-configuration/general-configuration/general-configuration';
import Hero from '@/components/odoo/servicesweoffer/odoo-configuration/hero/hero';
import Services from '@/components/odoo/servicesweoffer/odoo-configuration/our-service/our-service';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <EcommerceSection />
      <Services />
      <ContactSection />
      <GeneralConfiguration />
      <SecondcontactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page