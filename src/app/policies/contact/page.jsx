import Footer from '@/components/layouts/footer/Footer'
import Navbar from '@/components/layouts/navbar/Navbar'
import ContactUs from '@/components/policies/contact'
import TermsAndConditions from '@/components/policies/TermsAndConditions'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default page