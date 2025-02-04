import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-[13rem] items-center">
        {/* Text Content */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
            Why Choose Oodu Implementers for Consulting
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
            Oodu Implementer is a proud official Gold partner of Odoo,
            committed to delivering cost-effective innovation with a quick
            turnaround. We are specialized in providing end-to-end
            implementation and customization services for Odoo ERP. We have
            considerable experience in Configuration, Customization,
            Implementation, Consultation and Integration for Odoo ERP. We are
            recognized as a one-stop destination for all ERP specialized
            solutions.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            What Do We Do?
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
            <li>Analyzing and mapping the software requirements.</li>
            <li>Provide solutions by evaluating the problem and difficulties.</li>
            <li>Develop highly functional qualitative system modifications.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center sm:justify-start">
          <img
            src="https://www.odooimplementers.com/images/optimised-images/odoo-implemeters-for-consulting.webp"
            alt="Why Choose Us"
            className="shadow-[0_7px_27px_0_rgb(136,92,124)] p-2.5 w-[90%] sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
