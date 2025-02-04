'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar'
import Hero from '@/components/odoo/servicesweoffer/hero/hero'
import Services from '@/components/odoo/servicesweoffer/services/services'
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links'
import React from 'react'

function App() {
  return (
    <div >
    <Navbar/>
      <Hero/>
      <Services/>
      <FooterLinks/>
      <Footer/>
    </div>
  )
}

export default App

