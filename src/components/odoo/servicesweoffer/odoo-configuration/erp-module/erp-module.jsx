import React from "react";

const OdooModuleConfiguration = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:pl-[5rem] lg:pr-[8rem]">
        {/* Left Section - Image */}
        <div className="order-2 lg:order-1">
          <img
            src="https://www.odooimplementers.com/images/odoo-configuration-module.jpg"
            alt="Odoo Module Configuration"
            className="shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Section - Text */}
        <div className="flex flex-col justify-center pr-0 pl-[0rem] order-1 lg:order-2 text-center lg:text-left">
          <h6 className="text-purple-700 text-sm font-bold mb-2 uppercase">
            //ERP Module Configuration
          </h6>
          <h2 className="text-gray-800 text-[18px] sm:text-[20px] font-extrabold mb-6 leading-snug">
            Easy-to-use Odoo Module Configuration Services
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Choosing the relevant components of the system, and setting up and
            aligning these components to meet their specific business
            requirement is necessary for a hassle-free business flow. We at
            Oodu Implementers take off your burden and select the relevant Odoo
            ERP modules to suit your business needs.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Odoo ERP module should ensure scalability, flexibility and
            feasibility for your business growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OdooModuleConfiguration;
