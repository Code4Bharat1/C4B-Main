import React from "react";
import Link from "next/link"; // Import Link from Next.js

const EcommerceSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-0">
          <div className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2">
            <img
              src="/images/odoo-images/odoo-integration-services-oodu-implementers.jpg"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
          <h3 className="text-purple-700 uppercase text-[17px] font-bold"> End-to-End Integration</h3>
          <h2 className="text-lg sm:text-xl font-[1000] text-gray-800 mt-4 sm:mt-8">
            Business Information on your Fingertips with Odoo Integration 
          </h2>
          <p className="text-gray-600 mt-4 mb-4 sm:mb-[15px] leading-relaxed tracking-wide text-justify">
          Odoo offers a multi-dimensional solution for better organization of business functionalities through integration services. Odoo is an open-source functionality that enables integrating Odoo with various other modules or third-party software. Odoo Integration brings the full software system to manage every business aspect from a single dashboard without limitations.
          </p>
          <h3 className="text-lg sm:text-[28px] font-[1000] text-gray-800 mt-6 sm:mt-8">
          Wide Range of Odoo Integration Services
          </h3>
          <p className="text-gray-600 mt-4 leading-relaxed tracking-wide text-justify">
          Odoo Implementers' Odoo Integration service approach ensures that multi-enterprise applications are integrated and developed to remain flexible and responsive to changes in the business strategy. OI offers a wide range of integration services in Odoo Integrations by analyzing your unique business requirements and delivering the required Odoo services.
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
