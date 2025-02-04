'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Card from '@/components/odoo/servicesweoffer/odoo-development-services/cards/cards';
import Hero from '@/components/odoo/servicesweoffer/odoo-development-services/hero/hero';
import OdooDevelopmentKeyPoints from '@/components/odoo/servicesweoffer/odoo-development-services/key-points/key-points';
import OdooAchievements from '@/components/odoo/servicesweoffer/odoo-development-services/odoo-achievements/odoo-achievements';
import OdooDevelopment from '@/components/odoo/servicesweoffer/odoo-development-services/odoo-development/odoo-development';
import WhyOoduImplementers from '@/components/odoo/servicesweoffer/odoo-development-services/why-oodu/why-oodu';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OdooDevelopment />
      <Card />
      <OdooDevelopmentKeyPoints />
      <WhyOoduImplementers />
      <OdooAchievements />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page