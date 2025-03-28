import React from 'react';

const Smartodoo = () => {
  return (
    <div className="relative min-h-screen bg-[#211f3b] text-white">
      {/* Background Images */}
      <div
        className="absolute bottom-0 right-0 w-[264px] h-[362px] bg-contain bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url(/images/App images/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[366px] h-[501px] bg-contain bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url(/images/App images/bg-art-5.png)' }}
      ></div>
      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 py-12 lg:p-[9rem]">
        {/* Left Section: CRM Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/App images/odoo-erp-solutions-for-account.jpg"
            alt="Odoo CRM Dashboard"
            className=""
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h2 className="text-[28px] font-bold mb-6">
           Smart Odoo Accounting Solutions for all Accounting Needs
          </h2>
          <p className="text-[16px] leading-relaxed mb-4">
            Sync your bank statements automatically with your bank and import files with Odoo Accounting. Managing recurring billings and payment tracking made simple. Robust integration with other Odoo Accounting apps provides feasibility to create professional invoices. Manage bills and expenses with a clear forecast of bills to be paid. Better control over supplier invoices. The reconciliation tool automates 95% of reconciliation and saves time. Odoo Accounting is a smart solution for all your needs.
          </p>
          <h2 className="text-[28px] font-bold mb-6">
           Automated Business Transaction Recordings with Odoo Accounting
          </h2>
          <p className="text-[16px] leading-relaxed">
           Odoo Accounting makes business easy for you. Odoo's popular features will change your business without much effort. Fully integrated with other Odoo Accounting Apps, business flow is automated.
           Integrated with Odoo Accounting Invoices to auto-generate and share invoices online. Synchronize every transaction with Odoo Inventory and keep your valuation up to date. Creating project tasks from sales is made easy by integrating with Odoo Sales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Smartodoo;
