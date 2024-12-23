'use client';


import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import CancellationPolicy from '@/components/policies/cancellationpolicy';
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <CancellationPolicy/>
        <Footer/>
    </div>
  )
}

export default page