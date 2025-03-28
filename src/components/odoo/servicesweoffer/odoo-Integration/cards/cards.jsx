import React from "react";

const EcommerceBenefits = () => {
  return (
    <section
      className="relative bg-white py-8 sm:py-16"
      style={{
        backgroundImage:
          "url('/images/odoo-images/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 px-6 sm:px-12 lg:px-48">
        {/* Card 1 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[443px] w-full sm:w-[530px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="/images/odoo-images/odoo-icons/odoo-integration-services-icon.png"
              alt="Benefits Icon"
              className="w-[5rem] h-16 sm:w-71 sm:h-[5.25rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
            Perks of Odoo Integration Services
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>Highly Customizable</li>
            <li>Completely Modular</li>
            <li>Advanced Technology Updates</li>
            <li>User friendly</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[443px] w-full sm:w-[560px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="/images/odoo-images/odoo-icons/odoo-integration-api-for-business-icon.png"
              alt="Store Icon"
              className="w-16 h-16 sm:w-[5rem] sm:h-[5rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
            Various Integration Services We Offer
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>Odoo E-Commerce Integration</li>
            <li>Odoo Accounting Integration</li>
            <li>Odoo Logistics Integration</li>
            <li>Odoo Utility Integration</li>
            <li>Odoo Shipping Integration</li>
            <li>Odoo Payment Gateway Integration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;
