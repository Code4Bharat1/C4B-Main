import React, { useState } from "react";

const Makingsmart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center">
        {/* Left Section - Text Content */}
        <div className="text-left">
          <p className="text-purple-700 text-sm sm:text-[14px] font-semibold uppercase tracking-wider mb-2">
            Making Smartware Work for Your Business
          </p>
          <h1 className="text-2xl sm:text-[20px] font-extrabold text-gray-800 mb-6 leading-snug">
           Odoo Invoicing to Manage your Business Effortlessly
          </h1>
          <h2 className="text-base sm:text-[16px] font-medium text-gray-600 mb-4">
           Effortlessly Manage Your Business With Odoo
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-4 leading-relaxed tracking-wide text-justify">
            Turn to Oodu Implementers to have the right Odoo Invoicing installed. We are active in Oodo Invoicing implementation for many years now. Oodu Implementers are well-equipped to handle the complex installation procedure. Our team runs a thorough analysis of your business process to implement reliable Odoo Invoicing. Odoo ensures that your invoicing process is automatic and organized. Our effective and structured implementation process will surely add value to your business flow.
          </p>
        </div>

        {/* Right Section - Image/Video */}
        <div className="relative">
          <img
            src="https://www.odooimplementers.com/images/Apps/odoo-invoicing-development-manage-your-busniess.webp"
            alt="Odoo CRM Software"
            className="shadow-2xl p-[10px] border-white shadow-[#895d7d]/100 sm:w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Makingsmart;
