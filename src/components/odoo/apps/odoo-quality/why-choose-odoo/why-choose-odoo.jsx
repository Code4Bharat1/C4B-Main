import React from "react";

const Whychoose = () => {
  return (
    <section className="relative bg-white py-16 sm:pt-[0.5rem] sm:pd-[0.5rem]">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[5rem] md:pb-[7rem]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px]">
          <div className="">
            <img
              src="/images/App images/odoo-point-of-sale-oodu-implementers.jpg"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
          <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
            Why Choose odoo Implementers?
          </h2>
          <div className=" text-slate-500">
            <div className="mt-4">
            odoo Implementers have a legacy of designing and delivering customized Odoo Manufacturing modules to customers across various industries. Our experts cater to your business needs and ensure that the Odoo Manufacturing tool takes your business to a new horizon
            </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
