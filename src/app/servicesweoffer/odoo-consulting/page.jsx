'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar'
import ContactSection from '@/components/odoo/servicesweoffer/odoo-consulting/contact-us/contact-us';
import Hero from '@/components/odoo/servicesweoffer/odoo-consulting/hero/hero';
import Strategic from '@/components/odoo/servicesweoffer/odoo-consulting/strategic-consulting/strategic-consulting';
import Services from '@/components/odoo/servicesweoffer/odoo-consulting/our-service/service';
import SecondContactSection from '@/components/odoo/servicesweoffer/odoo-consulting/second-contact-us/second-contact-us';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-consulting/why-choose/why-choose';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links'
import React from 'react'

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Strategic/>
      <Services/>
      <ContactSection/>
      <WhyChooseUs/>
      <SecondContactSection/>
      <FooterLinks/>
      <Footer/>
    </div>
  )
}

export default App

