import React, { useState } from "react";

const Manage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center">
        {/* Left Section - Text Content */}
        <div className="text-left">
          <p className="text-purple-700 text-sm sm:text-[14px] font-semibold uppercase tracking-wider mb-2">
            Manage Leaves Of Everyone With Ease
          </p>
          <h1 className="text-2xl sm:text-[29px] font-extrabold text-gray-800 mb-6 leading-snug">
            Manage employee leaves efficiently with Odoo Timeoff Calendar Software
          </h1> 
          <h1 className="text-2xl sm:text-[29px] font-bold text-gray-800 mb-6 leading-snug">
            Administer employee leaves
          </h1> 
          <p className="text-gray-500 text-sm sm:text-base mb-4 leading-relaxed tracking-wide text-justify">
            Keep an eye on the vacation days taken by every employee. Allow employees to make requests and managers to approve and validate them, everything in just a few taps. Each employee's agenda is updated accordingly.
          </p>
          <p className="text-gray-500 text-sm sm:text-base mb-4 leading-relaxed tracking-wide text-justify">
          Managers have a complete view of their entire team leaves in one place, to maintain the team well-organized and distribute tasks effortlessly during the absence of their team members.
          </p>
        </div>

        {/* Right Section - Image/Video */}
        <div className="relative">
          <img
            src="https://www.odooimplementers.com/images/Apps/odoo-app-for-workplace-management.webp"
            alt="Odoo CRM Software"
            className="sm:w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Manage;
