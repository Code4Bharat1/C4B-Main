import React from "react";

const Whychoose = () => {
  return (
    <section className="relative bg-white py-16 sm:py-10">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[5rem] pb-[7rem]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px]">
          <div className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2">
            <img
              src="/images/App images/Odoo-event-management-module.png"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
          <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
            Why odoo Implementers for Odoo Events app?
          </h2>
          <div className=" text-slate-500">
            <div>
              odoo Implementers is your licensed Odoo partner and offers a wide variety of Odoo software solutions to help increase your business performance.
            </div>
            <div className="mt-4">
              With the installation of the Odoo Event Management Module, odoo Implementers assist you in simplifying and automating the process of conducting an event of any size. Odoo Event features all that you need from planning a program and making accommodations to selling tickets and seeking sponsors for events easily and effectively
            </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
