import React from "react";

const Whyodoo = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24 mb-[55px]">
      <div className="container mx-auto px-6 lg:pl-48 lg:pr-48 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center sm:mt-4 lg:mt-[-80px]">
        {/* Left Section - Text Content */}
        <div className="pr-4 sm:pr-[45px] pl-4 sm:pl-[-1px]">
          <h2 className="text-[22px] sm:text-[25px] sm:text-3xl font-[1000] text-gray-800 mb-4 sm:mb-6 leading-snug text-center sm:text-left">
              Why Odoo Implementers for your
              E-commerce Website?
          </h2>
         <p className="text-gray-500 text-sm sm:text-base leading-relaxed tracking-wide text-justify mt-[]">
            Oodu Implementers are a team of vibrant and certified professionals with a proven track record in Odoo implementation. We have clients across the globe excelling in their business with Odoo tools. Oodu Implementers serve the best tools, running a thorough analysis of your business and implementing the best strategy for your brand.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center mt-8 sm:mt-0">
          <img
            src="https://www.odooimplementers.com/images/Apps/oodu-implementers-best-erp-service-providers-best-ecommerce-website-with-odoo.webp"
            alt="E-commerce Development"j
            className="shadow-2xl p-[10px] border-white shadow-[#895d7d]/100 w-[px] sm:w-[570px] h-[223px] sm:h-[270px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Whyodoo;
