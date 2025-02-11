import React from 'react';

const Readymade = () => {
  return (
    <div className="relative h-[39rem] bg-[#211f3b] text-white">
      {/* Background Images */}
      <div
        className="absolute bottom-0 right-0 w-[200px] sm:w-[264px] h-[300px] sm:h-[362px] bg-contain bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url(https://www.odooimplementers.com/images/background/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[250px] sm:w-[366px] h-[350px] sm:h-[501px] bg-contain bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url(https://www.odooimplementers.com/images/background/bg-art-5.png)' }}
      ></div>
      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 pt-[0rem] sm:pt-40 md:pt-[6rem] pb-[15rem] sm:pb-13">
        {/* Left Section: CRM Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.odooimplementers.com/images/odoo-shopify-oodu-implementers.jpg"
            alt="Odoo CRM Dashboard"
            className="shadow-2xl border-[11px] border-[#211f3b]/50 shadow-[#895d7d]/100"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-6">
            Readymade Templates to Create your Brand's
            E-commerce Website
          </h2>
          <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold mb-3">
            Meet Your Business Needs in a Compact Package
          </h3>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
            A ready-to-use e-commerce platform with automated stock adjustments and reporting. An integrated e-commerce platform to simplify business management. A user-friendly customer portal to cater to the needs of your customers in no time. Furnish customers with intuitive features to download invoices and track their orders and delivery status. Run your business from anywhere with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Readymade;
