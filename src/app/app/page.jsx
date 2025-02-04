'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import SolutionsSection from '@/components/odoo/apps/Our Solutions/page';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <SolutionsSection/>
      <FooterLinks/>
      <Footer/>
    </div>
  )
}

export default page