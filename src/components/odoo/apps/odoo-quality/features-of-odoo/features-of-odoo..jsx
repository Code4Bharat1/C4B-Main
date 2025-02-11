import React from 'react';

const Featuresofodoo = () => {
  return (
    <div className="relative h-[58rem]  md:h-[37rem]  bg-[#211f3b] text-white">
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
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 pt-[3rem] sm:pt-40 md:pt-[7.5rem] pb-[15rem] sm:pb-13">
        {/* Left Section: CRM Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.odooimplementers.com/images/Apps/odoo-quality-control-services-for-your-business.png"
            alt="Odoo CRM Dashboard"
            className=""
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-6">
            Features of Odoo Quality
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
            Quality control points- Checks at In-tack, In process and Post process
            Manage quality alerts-Trigger a quality alert from the work center, Inventory and at the manufacturing level
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featuresofodoo;
