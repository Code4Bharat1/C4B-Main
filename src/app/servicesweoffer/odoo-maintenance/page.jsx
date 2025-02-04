'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-maintenance/cards/cards';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-maintenance/contact-us/contact-us';
import Hero from '@/components/odoo/servicesweoffer/odoo-maintenance/hero/hero';
import OdooModuleConfiguration from '@/components/odoo/servicesweoffer/odoo-maintenance/maintenance-services/maintenance-services';
import Services from '@/components/odoo/servicesweoffer/odoo-maintenance/preventive-maintenance-services/preventive-maintenance-services';
import SecondcontactSection from '@/components/odoo/servicesweoffer/odoo-maintenance/second-contact-us/second-contact-us';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-maintenance/why-choose/why-choose';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OdooModuleConfiguration />
      <Services />
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