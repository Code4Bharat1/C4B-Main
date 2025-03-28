import React from "react";

const WhyodooImplementers = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto lg:pl-[10rem] lg:pr-[14rem] grid grid-cols-1 lg:grid-cols-2 gap-[5rem] items-center">
        {/* Left Section - Image */}
        <div className="relative">
          <img
            src="/images/odoo-images/odoo-documents-software.webp"
            alt="Odoo CRM Screenshot"
            className="shadow-[0_7px_27px_0_rgba(136,92,124,1)] p-2 w-full sm:w-auto"
          />
        </div>

        {/* Right Section - Text */}
        <div className="px-4 sm:px-6">
          <h2 className="text-[24px] sm:text-[28px] font-[1000] text-gray-800 mb-4 sm:mb-6">
            Why Odoo Implementers for Odoo Development
          </h2>
          <ul className="text-gray-500 text-sm sm:text-base leading-relaxed list-decimal pl-5 space-y-3 sm:space-y-4">
            <li>
              Team of experts who leverage their skillset to curate the best
              possible solution for the industry
            </li>
            <li>
              Odoo development capabilities to build and deploy solutions for
              SME’s and MSME’s
            </li>
            <li>
              Equipped with technical skills to make a fully functional ERP
              coupled with custom functionalities
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyodooImplementers;
