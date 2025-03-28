import React from 'react';

const Personal = () => {
  return (
    <div className="relative h-[37rem] bg-[#211f3b] text-white">
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
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 pt-[3rem] sm:pt-40 md:pt-[7rem] pb-[15rem] sm:pb-13">
        {/* Left Section: CRM Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/App images/odoo-invoice-to-business.jpg"
            alt="Odoo CRM Dashboard"
            className="shadow-2xl border-[11px] border-[#211f3b]/50 shadow-[#895d7d]/100"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-6">
            Create Personal Branding with Odoo Invoicing
          </h2>
          <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold mb-3">
            Accelerated Business Transactions
          </h3>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
            Smooth and various payment modes for a hassle-free business flow. Streamline your billing for quick and easy payments. No rush to send reminders for late or pending payments. Odoo Invoicing provides automated follow-ups with simple and effective configuration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Personal;
