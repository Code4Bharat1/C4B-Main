import React from "react";
import Link from "next/link"; // Import Link from Next.js

const Whyget = () => {
  return (
    <section className="relative bg-white py-16 sm:py-5">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[2rem] pb-[4rem]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px]">
          <div className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2">
            <img
              src="https://www.odooimplementers.com/images/Apps/WhatsApp%20Image%202022-10-01%20at%207.05.51%20PM.jpeg"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full border-white"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
        <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
        Why get Odoo Invoicing implemented?

        </h2>
          <ul className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            <li>Fast and secure payments.</li>
            <li>
            Online transactions with automated follow-ups.
            </li>
            <li>
             Insightful analysis.
            </li>
            <li>Easy conversion of quotes into invoices.</li>
            <li>Recurring invoices creation.</li>
            <li>Contract management.</li>
            <div>
            Companies need the right tool to quickly pull up their business history and easily reach out to customers. Send invoices and quotes promptly and avoid the rush from customers.
            </div>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Whyget;
