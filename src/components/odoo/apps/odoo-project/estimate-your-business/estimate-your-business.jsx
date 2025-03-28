import React from 'react';

const Estimatebusiness = () => {
  return (
    <div className="relative h-[42rem] md:h-[35rem] bg-[#211f3b] text-white">
      {/* Background Images */}
      <div
        className="absolute bottom-0 right-0 w-[200px] sm:w-[264px] h-[300px] sm:h-[362px] bg-contain bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url(/images/App images/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[250px] sm:w-[366px] h-[350px] sm:h-[501px] bg-contain bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url(/images/App images/bg-art-5.png)' }}
      ></div>
      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 pt-[3rem] sm:pt-40 md:pt-[6rem] pb-[15rem] sm:pb-13">
        {/* Left Section: CRM Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/App images/odoo-task-management-module.webp"
            alt="Odoo CRM Dashboard"
            className="shadow-2xl border-[11px] border-[#211f3b]/50 shadow-[#895d7d]/100"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-6">
            Estimate your Business and Resources Needs with Odoo Project
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
            Schedule your teams for projects, considering their vacation plan. With a detailed forecast on your project performance and employee availability and plan ahead for emerging projects. Use the drag and drop feature for your tasks in the calendar to reschedule as well as highlight your project deadlines. Meet your deadlines more accurately. Increase your business returns by comparing your estimation with real-time sheets. Odoo Project Management provides facilities for multi-project analysis and searches.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Estimatebusiness;
