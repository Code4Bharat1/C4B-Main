import React from "react";
import Link from "next/link"; // Import Link from Next.js


const EcommerceSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-0">
          <div>
            <img
              src="https://www.odooimplementers.com/images/optimised-images/odoo-implementation-gold-partner.webp"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
          <h3 className="text-purple-700 uppercase text-sm font-bold">// Implementation Software</h3>
          <h2 className="text-lg sm:text-xl font-[1000] text-gray-800 mt-4 sm:mt-8">
            Manage your Process Flow Smoothly with Odoo Implementation
          </h2>
          <p className="text-gray-600 mt-4 mb-4 sm:mb-[15px] leading-relaxed tracking-wide text-justify">
            Odoo Implementation is a crucial process that can leverage your business. Oodu Implementers' highly skilled developers ensure that the entire process of Odoo implementation remains smooth without affecting the business operations.  
          </p>
          <h3 className="text-lg sm:text-xl font-[1000] text-gray-800 mt-6 sm:mt-8">
             Odoo Implementation Services
          </h3>
          <p className="text-gray-600 mt-4 leading-relaxed tracking-wide text-justify">
             Oodu Implementers develops a rich and user-friendly application for the business environment that enhances performance and productivity. Odoo finds applications in industries like trading, manufacturing, eCommerce, accounts, and finance. Odoo Implementation delivers the best business standards and results. Odoo Implementation is the most sought-after application to give the business the push it needs.
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

export default EcommerceSection;
