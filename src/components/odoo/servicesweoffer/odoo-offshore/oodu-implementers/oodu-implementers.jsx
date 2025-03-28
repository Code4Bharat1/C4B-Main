import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:pl-48 lg:pr-48 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4 sm:mt-4 lg:mt-[-80px]">
        {/* Left Section - Text Content */}
        <div className="pr-4 sm:pr-[45px] pl-4 sm:pl-[-1px]">
          <h2 className="text-[22px] sm:text-[25px] sm:text-3xl font-[1000] text-gray-800 mb-4 sm:mb-6 leading-snug text-center sm:text-left">
                Odoo Implementers for Odoo Offshore Development
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed tracking-wide text-justify mt-[]">
          Odoo Implementers, a leading Gold partner of Odoo, use innovative technologies to amplify our clients' growth ambitions and expedite time-to-market. We are a team of result-driven and quality-obsesses Odoo offshore developers determined to deliver a customer-outsourced Odoo software development to meet any skillset, complexity and scale. Our clients’ satisfaction stands as a testimony of our service.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center mt-8 sm:mt-0 mb-[44px] sm:mb-0">
          <img
            src="/images/odoo-images/oodu-implementers-for-odoo-offshore-development.jpg"
            alt="E-commerce Development"j
            className="shadow-lg w-[300px] sm:w-[570px] h-[223px] sm:h-[423px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
