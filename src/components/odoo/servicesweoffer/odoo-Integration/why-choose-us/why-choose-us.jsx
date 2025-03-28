import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:pl-48 lg:pr-48 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4 sm:mt-4 lg:mt-[-80px]">
        {/* Left Section - Text Content */}
        <div className="pr-4 sm:pr-[79px] pl-4 sm:pl-[-1px]">
          <h2 className="text-[22px] sm:text-[28px] sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 leading-snug text-center sm:text-left">
          Why Choose Odoo Implementers for Odoo Integration
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed tracking-wide text-justify mt-[]">
          With a legacy of over 10 years, Odoo Implementers functions with technical expertise in all Odoo modules and delivers high coding standard services. We stand out from our competitors with our transparency and streamlined communication at every stage of the process.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center mt-8 sm:mt-0">
          <img
            src="/images/odoo-images/odoo-integration-modules-and-services.webp"
            className="shadow-lg w-[300px] sm:w-[570px] h-[223px] sm:h-[423px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
