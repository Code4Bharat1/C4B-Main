import React from 'react';

const Manage = () => {
  return (
    <div className="relative min-h-screen bg-[#211f3b] text-white">
      {/* Background Images */}
      <div
        className="absolute bottom-0 right-0 w-[264px] h-[362px] bg-contain bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url(https://www.odooimplementers.com/images/background/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[366px] h-[501px] bg-contain bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url(https://www.odooimplementers.com/images/background/bg-art-5.png)' }}
      ></div>
      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 py-12 lg:p-[9rem]">
        {/* Left Section: CRM Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.odooimplementers.com/images/Apps/oodu-implementers-odoo-timesheet-software.webp"
            alt="Odoo CRM Dashboard"
            className=""
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h2 className="text-[28px] font-bold mb-6">
            Manage Day-to-day Tasks Proactively with Odoo Timesheet
          </h2>
          <p className="text-[16px] leading-relaxed mb-4">
            Odoo Timesheet works the way you do through the mobile app, even offline. Whether you run a small business or are a freelancer or someone who needs to manage employees from distant locations, this is your tool to be as flexible as you are. Just sign in and start tracking your time or resources time with any device, from anywhere.
          </p>
          <h3 className="text-2xl font-semibold mb-4">
           It assists you in every step of your workflow
          </h3>
          <h3 className="text-2xl font-semibold mb-4">
           Managing Tasks, Time-Tracking And Keeping Weekly Timesheets
          </h3>
          <h3 className="text-2xl font-semibold mb-4">
            Be Proactive
          </h3>
          <p className="text-[16px] leading-relaxed">
            Odoo Timesheet comes in handy for professionals who plan their activities at the start of the day. Users can take advantage of the day Planner to allocate time in advance to the tasks of that particular day.
          </p>
          <h3 className="text-2xl font-semibold mb-4">
            Every second matters
          </h3>
          <p className="text-[16px] leading-relaxed">
            Odoo Timesheet allows individuals to keep track of their work in detail. Users can set up the timer from their desktop with a single click. Just select the task and switch it on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Manage;
