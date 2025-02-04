import React from "react";
import Link from "next/link"; // Import Link from Next.js

const EcommerceSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-0">
          <div>
            <img
              src="https://www.odooimplementers.com/images/odoo-erp-customizations.jpg"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
          <h3 className="text-purple-700 uppercase text-sm font-bold">// ERP Customization</h3>
          <h2 className="text-lg sm:text-xl font-[1000] text-gray-800 mt-4 sm:mt-8">
             Guaranteed Customer Satisfaction with Odoo ERP Customization Services
          </h2>
          <p className="text-gray-600 mt-4 mb-4 sm:mb-[15px] leading-relaxed tracking-wide text-justify">
               Odoo Customization is a key to successful development for achieving desirable results. We at Oodu Implementers understand the client's industry type and their requirements for a better Odoo Implementation. We guarantee customer satisfaction in return with exemplary development and service.  
          </p>
          <h3 className="text-lg sm:text-xl font-[1000] text-gray-800 mt-6 sm:mt-8">
               Most effective Process for Odoo Customisation
          </h3>
          <p className="text-gray-600 mt-4 leading-relaxed tracking-wide text-justify">
               Oodu Implementers have experience in working with different industry verticals and offer the level of technical sophistication needed to achieve a successful outcome. We manage the Odoo Customization process by establishing a clear, company-wide definition of business requirements and project controls. We identify and prioritize functions that should be added as a part of the overall functionality of the existing system.
          </p>
          <div className="mt-6 flex justify-center sm:justify-start">
          <Link href="/servicesweoffer">
            <button className="bg-[#885c7c] text-white font-[1000] py-2 px-4 sm:px-[25px] sm:py-[15px] hover:bg-purple-700 transition">
              All Services
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;
