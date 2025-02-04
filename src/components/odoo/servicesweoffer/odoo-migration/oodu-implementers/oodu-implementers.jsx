import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24 mb-[55px]">
      <div className="container mx-auto px-6 lg:pl-48 lg:pr-48 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4 sm:mt-4 lg:mt-[-80px]">
        {/* Left Section - Text Content */}
        <div className="pr-4 sm:pr-[45px] pl-4 sm:pl-[-1px]">
          <h2 className="text-[22px] sm:text-[25px] sm:text-3xl font-[1000] text-gray-800 mb-4 sm:mb-6 leading-snug text-center sm:text-left">
            Oodu Implementers for Odoo Migration
          </h2>
         <p className="text-gray-500 text-sm sm:text-base leading-relaxed tracking-wide text-justify mt-[]">
            Oodu Implementers has long years of experience in Odoo Migration. We specialize in migrating Odoo ERP solutions to a higher version of the same. We provide service and ensure successful migration of existing ERP apps to open source without impacting data entity, functionality, or business process. Our team of Odoo consultants and developers, together with experienced testers and validation specialists, provide smooth data migration with their rigorous business approach.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center mt-8 sm:mt-0">
          <img
            src="https://www.odooimplementers.com/images/oodu-implementers-for-odoo-migration.webp"
            alt="E-commerce Development"j
            className="shadow-lg w-[px] sm:w-[570px] h-[223px] sm:h-[270px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
