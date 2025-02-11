import React from "react";

const GeneralConfiguration = () => {
  return (
    <section className="bg-white py-16 mb-[3rem]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-8 lg:pl-[12rem] lg:pr-[15rem]">
        {/* Left Section - Text */}
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-16">
          <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
             Why Oodo Implementers for Odoo CRM?
          </h2>
          <ul className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            <li>Renowned Partner for Odoo CRM Implementation.</li>
            <li>
                Perfectly designed customer-centric Odoo CRM Portal.
            </li>
            <li>
              An outstanding Odoo CRM implementation for your business.
            </li>
            <li>Blend of existing technologies with the latest business developments.</li>
            <li>Client-friendly approach and process-driven methodology.</li>
            <li>Odoo CRM partner.</li>
            <li>Round-the-clock assistance.</li>
            <li>Top-notch user experience.</li>
          </ul>
        </div>

        {/* Right Section - Image */}
        <div className="mx-auto sm:-mr-[26px] sm:ml-[26px]">
          <img
            src="https://www.odooimplementers.com/images/menu/odoo-open-source-crm-implementation.webp"
            alt="Configuration Image"
            className="shadow-2xl p-[10px] border-white shadow-[#895d7d]/100"
          />
        </div>
      </div>
    </section>
  );
};

export default GeneralConfiguration;
