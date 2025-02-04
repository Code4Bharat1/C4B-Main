import React from "react";
import Link from "next/link"; // Import Link from Next.js

const EcommerceSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-0">
          <div className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2">
            <img
              src="https://www.odooimplementers.com/images/optimised-images/odoo-e-commerce-online-busniess.webp"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
          <h3 className="text-purple-700 uppercase text-sm font-bold">// E-Commerce</h3>
          <h2 className="text-lg sm:text-xl font-[1000] text-gray-800 mt-4 sm:mt-8">
            Establish a Powerful Online Business with Odoo E-commerce
          </h2>
          <p className="text-gray-600 mt-4 mb-4 sm:mb-[15px] leading-relaxed tracking-wide text-justify">
            The past decade witnessed a tremendous change in customers'
            shopping behavior and purchase patterns. E-commerce services with
            futuristic online features influence value-added services. Boost
            business sales and reach more loyal customers with Odoo Ecommerce.
          </p>
          <h3 className="text-lg sm:text-xl font-[1000] text-gray-800 mt-6 sm:mt-8">
            Odoo E-commerce Services
          </h3>
          <p className="text-gray-600 mt-4 leading-relaxed tracking-wide text-justify">
            Build an authentic online store in no time and connect with your
            potential business prospects worldwide with Odoo E-commerce. Oodu
            Implementers’ mobilized and customized E-commerce mobile app
            development technology is feasible to work from anywhere and
            anytime. Bootstrapped budget for easy business expansion as demand
            grows.
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
