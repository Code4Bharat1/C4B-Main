'use Client'
import Footer from '@/components/layouts/footer/Footer'
import Navbar from '@/components/layouts/navbar/Navbar'
import Hero from '@/components/odoo/Odoo Videos/hero/hero'
import VideoGrid from '@/components/odoo/Odoo Videos/odd-videos/odd-videos'
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoGrid  />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page