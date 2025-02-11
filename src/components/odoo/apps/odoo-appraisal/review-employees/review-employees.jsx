import React, { useState } from "react";

const Reviewemployees = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <div className="pr-[50px] pl-[50px]">
        <p className="text-purple-700 text-sm sm:text-[14px] font-semibold uppercase tracking-wider mb-2">
          Review employees' performances in no time and create appraisals
        </p>
        <h2 className="text-[20px] sm:text-3xl font-[1000] text-gray-800 mb-6 leading-snug lg:text-[20px]">
           Optimise Employee Performance with Odoo Appraisal Software
        </h2>
        <h2 className="text-[20px] sm:text-3xl font-[1000] text-gray-500 mb-6 leading-snug lg:text-[20px]">
           Timely Employee Appraisals with Odoo Appraisal App
        </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-4 leading-relaxed tracking-wide text-justify">
           Keep the encouragement process in your organization by performing periodical evaluations of your employees' performance. Frequently evaluate your human resources to provide benefits for your employees and for your company, whether it’s a small business or a large corporation.
          </p>

        </div>

        {/* Right Section - Image/Video */}
        <div className="relative flex justify-center">
          <div className="relative">
            <img
              src="https://www.odooimplementers.com/images/optimised-images/odoo-appraisal-software.webp"
              alt="Odoo Development"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviewemployees;