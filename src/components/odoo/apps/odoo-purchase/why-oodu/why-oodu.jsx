import React from "react";
import Link from "next/link"; // Import Link from Next.js

const Whychoose = () => {
  return (
    <section className="relative bg-white py-16 sm:py-10">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[5rem] pb-[7rem]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px]">
          <div className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2">
            <img
              src="https://www.odooimplementers.com/images/Apps/odoo-implementers-assists-your-business-with-odoo-purchase-implementation.png"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
          <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
            Why odoo Implementers for Odoo Purchase
          </h2>
          <div className=" text-slate-500">
            <div>
              odoo Implementers is an Official Odoo partner and offers a diverse range of Odoo apps to meet your requirements and help run your business efficiently.
            </div>
            <div>
              odoo Implementers helps you gain a strong foothold in business with the implementation of Odoo Purchase. The above Odoo App for Purchase arrives with rich features to make you better at purchasing and inventory planning and help you create a purchase order and manage inventory in a hassle-free manner.
            </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
