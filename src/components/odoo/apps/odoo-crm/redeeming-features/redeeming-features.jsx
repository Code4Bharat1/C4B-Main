import React from "react";
import Link from "next/link"; // Import Link from Next.js

const Redeeming = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px]">
          <div className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2">
            <img
              src="https://www.odooimplementers.com/images/menu/odoo-crm-software-analysis.webp"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
          <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
           Redeeming Features of Odoo CRM
          </h2>
          <ul className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            <li>Innumerable tools for a fast and effective business management.</li>
            <li>
              Insightful data to make smart business decisions.
            </li>
            <li>
              Real-time reports analyzing business performance.
            </li>
            <li>A custom dashboard to review your activities and next move.</li>
            <li>Real-time messaging to enhance collaboration with customers.</li>
            <li>Easily track business transactions in no time.</li>
            <div>
             Odoo CRM provides innumerable tools for fast and effective business management. With Odoo CRM, you can access insightful data that enables you to make smart business decisions. The real-time reports analyzing business performance, available in Odoo CRM, provide you with up-to-date information that can help you to identify areas where you need to improve.
             With a custom dashboard, provided by Odoo CRM, you can review your activities and plan your next move. The real-time messaging feature of Odoo CRM enhances collaboration with customers, allowing you to stay in touch and keep them updated on your progress.
            </div>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Redeeming;
