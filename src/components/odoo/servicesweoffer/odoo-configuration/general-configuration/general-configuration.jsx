import React from "react";

const GeneralConfiguration = () => {
  return (
    <section className="bg-white py-16 mb-[3rem]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-8 lg:px-[8rem]">
        {/* Left Section - Text */}
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-16">
          <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
            General Configuration Mode
          </h2>
          <ul className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            <li>A function can be turned ON or OFF or made OPTIONAL.</li>
            <li>
              XOR mode enables choosing only one flow that meets the specified
              condition.
            </li>
            <li>
              OR mode where a configuration supports optional activities or
              flow requiring all, none, or some of the activities.
            </li>
            <li>AND mode indicates mandatory parallel flows.</li>
          </ul>
          <h3 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-4">
            Why Choose Oodu Implementers for Odoo Configuration
          </h3>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Configuring the ERP system is an important part of the Odoo
            Implementation, which sets up all the parameters of the software to
            fit your business needs. Oodu Implementers, a reputed Gold partner
            of Odoo, configure your ERP system to recognize revenue by certain
            specifications like geographical unit or product line.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="mx-auto sm:-mr-20 sm:ml-12">
          <img
            src="https://www.odooimplementers.com/images/optimised-images/odoo-configuration-services.webp"
            alt="Configuration Image"
            className="shadow-lg rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default GeneralConfiguration;
