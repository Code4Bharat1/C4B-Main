import React from "react";
import Link from "next/link"; // Import Link from Next.js

const Whyodoo = () => {
  return (
    <section className="relative bg-white py-16 sm:py-10">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[5rem]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px]">
          <div>
            <img
              src="/images/App images/easily-analyse-the-employee-working-with-odoo-timesheet.webp"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
          <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
            Why Odoo Implementers for Odoo Timesheet App
          </h2>
            <div className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              odoo Implementers is an Official Odoo partner and offers a variety of Odoo apps to suit your business needs and help perform your business operations efficiently.
            </div>
            <div className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              With the installation of Odoo Timesheet, odoo Implementers enables the end user to record the working time of employees over a project. The Timesheet feature in Odoo can help you easily analyse the employee working report and have a quick overview of time spent by employees on tasks per day or week and track time-based on projects and tasks, check the activities done and keep an eye on their work progressions. While performing the analysis, the end user can learn about billable hours & amounts, unvoiced charges and more.
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Whyodoo;
