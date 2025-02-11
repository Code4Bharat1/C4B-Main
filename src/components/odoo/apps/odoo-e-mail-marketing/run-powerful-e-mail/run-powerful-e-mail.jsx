import React from 'react';

const Runpowerful = () => {
  return (
    <div className="relative h-[48rem] md:h-[37rem] bg-[#211f3b] text-white">
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
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 pt-[2rem] sm:pt-40 md:pt-[4.5rem] pb-[15rem] sm:pb-13">
        {/* Left Section: CRM Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.odooimplementers.com/images/Apps/odoo-email-marketing%20-development-app.webp"
            alt="Odoo CRM Dashboard"
            className=""
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-[1000] mb-6">
            Run powerful E-mail Campaigns with Odoo E-mail Marketing App
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
            You don't need any IT knowledge to run powerful E-mail campaigns that
            resonate with your prospects. This is a user-friendly software tool that
            lets you take complete control over your E-mail content and layout.
          </p>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
            Do you feel that designing newsletters on your own is not a good idea?
            No issues You can choose one of the many available templates, read the
            layout, customize your message and images and you’re all set to launch
            your new campaign.
          </p>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
            Simply select your building blocks and drop them precisely where you want
            them to be visible on your E-mail. Enhance your content with catchy titles,
            high conversion calls-to-action buttons and social media redirecting links
            or footers in just a few clicks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Runpowerful;
