import React from "react";

const Whychoose = () => {
  return (
    <section className="relative bg-white py-16 sm:pt-[0px] sm:pb-[120px]">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[5rem]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px]">
          <div className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2">
            <img
              src="/images/App images/features-of-odoo-project-in-business-icon.png"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
          <h2 className="text-gray-900 font-[1000] text-base sm:text-[28px] lg:text-2xl mb-6">
            Why Choose odoo Implementers for Odoo Project Software?
          </h2>
            <div>
              odoo Implementers is an official Gold Partner of Odoo, delivering a variety of Odoo business solutions, and catering to the needs of the customers. odoo Implementers follows a structured approach to deliver Odoo Project Management Software to effectively manage and get the project done. odoo Implementers is proud of the fact that our team consists of the right experts, with people from your field.
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
