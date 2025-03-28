import React from "react";

const Managesuppliers = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center">
        {/* Left Section - Text Content */}
        <div className="text-left">
          <p className="text-purple-700 text-sm sm:text-[17px] font-semibold uppercase tracking-wider mb-2">
            Scale Up Your Business By Purchasing Smartly
          </p>
          <h1 className="text-2xl sm:text-[29px] font-extrabold text-gray-800 mb-6 leading-snug">
            Manage Suppliers and Purchase Order's Effortlessly with Odoo Purchase
          </h1>
          <h4 className="text-base sm:text-[20px] font-bold text-gray-600 mb-4">
            Step up the performance of your inventory & supply chain
          </h4>
          <p className="text-gray-500 text-sm sm:text-base mb-4 leading-relaxed tracking-wide text-justify">
            Odoo Purchase app can help you place purchase orders smoothly and efficiently. At odoo Implementers, we offer you a complete software solution to handle various activities involved in purchasing such as seller management, seller bills, supply chain and product variation management, stock update and product quality inspections. Our team of experts will guide you throughout the installation and help you automate the purchase procedure and administration process.
          </p>
        </div>

        {/* Right Section - Image/Video */}
        <div className="relative">
          <img
            src="/images/App images/purchase_screenshot_04.gif"
            alt="Odoo CRM Software"
            className="shadow-2xl p-[10px] border-white shadow-[#895d7d]/100 sm:w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Managesuppliers;
