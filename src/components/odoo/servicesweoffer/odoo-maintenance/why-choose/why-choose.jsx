import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:pl-48 lg:pr-48 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4 sm:mt-4 lg:mt-[-80px]">
        {/* Left Section - Text Content */}
        <div className="pr-4 sm:pr-[45px] pl-4 sm:pl-[-1px]">
          <h2 className="text-[22px] sm:text-[25px] sm:text-3xl font-[1000] text-gray-800 mb-4 sm:mb-6 leading-snug text-center sm:text-left">
            Why Choose odoo Implementers for Odoo Maintenance
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed tracking-wide text-justify mt-[]">
             Odoo Maintenance automates and elevates your equipment performance with robust technology. odoo Implementers, a reliable Gold partner of Odoo Maintenance, functions with a team of proficient code developers to cater to your business needs. We provide a smart solution for your manufacturing process and ensure hassle-free maintenance service. Besides maintenance, we work round the clock to assist in every process step and ensure smooth functioning. We are the most sought-after partner of Odoo for the efficient implementation of Odoo Maintenance service.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center mt-8 sm:mt-0">
          <img
            src="/images/odoo-images/odoo-maintenance-services.webp"
            alt="E-commerce Development"j
            className="shadow-lg w-[300px] sm:w-[570px] h-[223px] sm:h-[423px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
