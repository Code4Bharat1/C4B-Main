'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import ProductPricing from '@/components/policies/productpricing'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <ProductPricing/>
        <Footer/>
    </div>
  )
}

export default page