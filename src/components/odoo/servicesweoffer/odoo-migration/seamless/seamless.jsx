import React from "react";
import Link from "next/link"; // Import Link from Next.js

const EcommerceSections = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-0">
          <div>
            <img
              src="https://www.odooimplementers.com/images/odoo-migration-service-for-business.jpg"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
          <h3 className="text-purple-700 uppercase text-sm font-bold"> Seamless & Hassle free Migration</h3>
          <h2 className="text-lg sm:text-xl font-[1000] text-gray-800 mt-4 sm:mt-8">
              Modernise your Business App to Strategic Platforms with Odoo Migration
          </h2>
          <p className="text-gray-600 mt-4 mb-4 sm:mb-[15px] leading-relaxed tracking-wide text-justify">
             Odoo is an open source and constantly evolving ERP system. Odoo tools are updated regularly to match the global race and acquire customers and increased revenue. Odoo delivers modernized and efficient IT systems with the right mix of existing and new Odoo ERP Internet-driven technologies. Reuse and modernize your time-tested business applications to strategic platforms with Oodu Implementers' Odoo Migration Services.
          </p>
          <h3 className="text-lg sm:text-xl font-[1000] text-gray-800 mt-6 sm:mt-8">
             Odoo Migration Services
          </h3>
          <p className="text-gray-600 mt-4 leading-relaxed tracking-wide text-justify">
             Experts at Oodu Implementers deliver seamless Odoo Migration and execute any level of Odoo migration query. We deploy successful Odoo migrations with a process flow and support. We analyze the existing system and updating with the new Odoo versions. Odoo upgrades its versions frequently in a year and implements new features and processes. OI ensures to keep your system to be up to date all the time for smooth business operations.
          </p>
          <div className="mt-6 flex justify-center sm:justify-start">
          <Link href="/servicesweoffer">
            <button className="bg-[#885c7c] text-white font-[1000] py-2 px-4 sm:px-[25px] sm:py-[15px] hover:bg-purple-700 transition">
              All Services
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSections;
