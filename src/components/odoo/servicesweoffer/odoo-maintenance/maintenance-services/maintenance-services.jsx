import React from "react";

const OdooModuleConfiguration = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[6rem] px-8 lg:pl-[10rem] lg:pr-[10rem]">
        {/* Left Section - Image */}
        <div className="order-2 lg:order-1">
          <img
            src="/images/odoo-images/business-with-odoo-maintenance-management.jpg"
            alt="Odoo Module Configuration"
            className="shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Section - Text */}
        <div className="flex flex-col justify-center pr-0 pl-[0rem] order-1 lg:order-2 text-center lg:text-left">
          <h6 className="text-purple-700 text-[17px] font-bold mb-2 uppercase">
           Maintenance Services
          </h6>
          <h2 className="text-gray-800 text-[18px] sm:text-[20px] font-extrabold mb-6 leading-snug">
            Reduce Downturn for your Business with Odoo Maintenance Management
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Odoo provides the feasibility of planning preventive maintenance, including Mean Time Between Failure (MTBF), Mean Time To Repair (MTTR) and expected next failure data. Odoo Maintenance automates metrology and preventive maintenance scheduling. A smart solution for smart manufacturers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OdooModuleConfiguration;
