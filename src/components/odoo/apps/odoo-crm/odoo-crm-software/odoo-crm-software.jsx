import React from 'react';

const OdooCRM = () => {
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
            src="https://www.odooimplementers.com/images/menu/odoo-crm-software-development.gif"
            alt="Odoo CRM Dashboard"
            className="shadow-2xl border-[11px] border-[#211f3b]/50 shadow-[#895d7d]/100"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h2 className="text-[28px] font-bold mb-6">
            Odoo CRM Software to Manage Leads and Real-time Messages
          </h2>
          <p className="text-[16px] leading-relaxed mb-4">
            Odoo CRM offers a technology-driven approach to enhance customer experience and cater to their needs effortlessly. With real-time messaging and effective online campaigns, it helps grab the attention of leads and build reliable relationships with customers. Utilize its features to leverage key resources and augment your business operations.
          </p>
          <h3 className="text-2xl font-semibold mb-4">
            Redefine Scalability and Flexibility with Odoo CRM
          </h3>
          <p className="text-[16px] leading-relaxed">
            A cutting-edge, user-friendly Odoo CRM portal to enhance business performance and productivity. Odoo CRM solution fits the needs of enterprise solutions and transforms your business operation services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OdooCRM;
