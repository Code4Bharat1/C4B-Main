import React from "react";
import Link from "next/link"; // Import Link from Next.js

const Whyodoo = () => {
  return (
    <section className="relative bg-white py-16 sm:py-5">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[2rem] pb-[4rem]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px]">
          <div className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2">  
            <img
              src="https://www.odooimplementers.com/images/Apps/odoo-appraisal-app-form.png"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full border-white"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
        <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
          Why Oodu Implementers for Odoo Appraisal App?
        </h2>
            <div className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            Oodu Implementers is the trusted official partner of Odoo that offers a broad spectrum of Odoo's business apps to fuel the growth of your business.
            </div>
            <div className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
             We provide you with firm support for Odoo HR Management implementation. This Odoo HR management solution includes a prominent collection of various iconic modules such as odoo HR payroll, odoo appraisals, odoo recruitment system and more, which are designed to assist in several HR operations.
            </div>
            <div className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
             The HR team efficiently manage employee leaves with the time off module, maintain standardization in the appraisal process and perform the custom recruitment process in a hassle-free way and show utmost excellence in all operations.
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Whyodoo;
