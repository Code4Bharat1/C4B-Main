import React from "react";

const Whyodoo = () => {
  return (
    <section className="relative bg-white py-16 sm:pt-[0px] sm:pb-[120px]">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[5rem]">

      {/* text section */}
      <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
          <h2 className="text-gray-900 font-[1000] text-base sm:text-[28px] lg:text-2xl mb-6">
            Why Odoo Implementers for Implementing POS
          </h2>
            <div className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
             Odoo Implementers, a Gold Partner of Odoo, take care of your implementation process, including transferring files and documents from your old system to the new Odoo system. We are a trustworthy partner of Odoo, having thrived in every project undertaken. Our services stand out from our competitors with our proficient team of coders, handling the entire implementation process effectively and efficiently. odoo Implementers study your business needs and deliver a robust Odoo POS and assure that your business grows leaps and bounds.
            </div>
        </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px]">
          <div className="">
            <img
              src="/images/App images/oodu-implementers-for-implemeneting-odoo-pos.png"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Whyodoo;
