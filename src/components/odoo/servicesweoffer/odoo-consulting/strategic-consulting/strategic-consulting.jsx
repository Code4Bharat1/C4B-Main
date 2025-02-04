import React from "react";

const Strategic = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto flex flex-col sm:flex-row items-center pr-[-7px] pl-[30px]">
        {/* Left Side - Image */}
        <div className="relative w-full sm:w-1/2 flex justify-center mb-8 sm:mb-0 px-6 sm:pl-[135px] sm:pr-0">
          <div className="relative pt-[0.5rem] pb-[0.5rem]">
            <img
              src="https://www.odooimplementers.com/images/odoo-service-strategic-consulting-partner.png"
              alt="Team Working"
              className="w-[90%] sm:w-[528px] h-auto shadow-[0px_7px_27px_0px_rgba(136,92,124)]"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full sm:w-1/2 text-center sm:text-left px-6 sm:px-0 sm:pl-[7rem] sm:pr-[13rem]">
          <h3 className="text-purple-700 uppercase text-[14px] font-bold">// Strategic Consulting</h3>
          <h1 className="text-xl sm:text-2xl font-[1000] text-gray-900 mt-4 leading-snug">
            Strategic Odoo Consulting Partners
          </h1>
          <p className="text-gray-500 mt-5 text-sm leading-relaxed tracking-wide text-justify">
            Odoo stands for On-Demand Open Object, which provides a dashboard
            for several business-related apps and modules. Odoo Consulting
            services assist you to get the best out of Odoo to enhance
            efficiency across your company. Odoo is an ever-evolving platform,
            with our Odoo Consultants assisting you with the latest versions
            and updates relevant to your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Strategic;
