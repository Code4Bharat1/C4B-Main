import React from "react";
import Link from "next/link"; // Import Link from Next.js

const Services = () => {
  return (
    <section
      className="relative bg-white py-16 sm:py-24 -mt-[7rem]"
      style={{
        backgroundImage:
          "url('/images/odoo-images/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 sm:px-[200px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between mb-8 sm:mb-12 text-center sm:text-left">
          <div>
            <h3 className="text-purple-600 uppercase text-[17px] font-bold"> Our Service</h3>
            <h1 className="text-xl sm:text-3xl font-[1000] text-gray-800 mt-4">
                Best Odoo Configuration Services
            </h1>
          </div>
          {/* All Services Button */}
          <div className="mt-6 sm:mt-0">
          <Link href="/servicesweoffer">
            <button className="bg-[#885c7c] text-white font-[1000] py-2 px-4 sm:px-6 hover:bg-purple-700 transition">
              All Services
            </button>
          </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2 justify-center px-16">
          {/* Service 1 (Largest) */}
          <div className="group relative bg-white rounded-lg p-4 sm:p-6 h-auto sm:h-[365px] overflow-hidden transform transition-transform duration-300 hover:-translate-y-4 shadow-xl">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#885c7c] via-[#885c7c88] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-configuration-service.webp"
                  alt="Odoo Consulting Services"
                  className="w-12 sm:w-16 h-12 sm:h-16 mr-4"
                />
                <h2 className="text-lg sm:text-[23px] font-bold text-gray-800">
                  Odoo Configuration Service
                </h2>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed tracking-wide text-justify">
                 Configuration simply does not mean setting up a few system parameters. Maintaining and updating the ERP system regularly is equally important for successful ERP implementation. odoo Implementers offers excellent customer care services round the clock. Our proficient technical team will cater to your business needs and deliver the best business approach.
              </p>
            </div>
          </div>

          {/* Service 2 (Medium) */}
          <div className="group relative bg-white rounded-lg p-4 sm:p-6 h-auto sm:h-[365px] overflow-hidden transform transition-transform duration-300 hover:-translate-y-4 shadow-xl">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#885c7c] via-[#885c7c88] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-erp-configuration.webp"
                  alt="Odoo Functional Consulting"
                  className="w-12 sm:w-16 h-12 sm:h-16 mr-4"
                />
                <h2 className="text-lg sm:text-[23px] font-bold text-gray-800">
                    Need for Odoo ERP Configuration
                </h2>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed tracking-wide text-justify">
                     The initial setup of the ERP system alone will never be sufficient to suit all your business needs. Many factors like new business strategy, profit and growth, mergers and acquisitions, and new end-users trigger the need to configure the way you use your ERP system. Restructuring and configuring your ERP system ensures better productivity and improving user experience. These factors influence the way you use your ERP system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
