import React from 'react';

const Takestep = () => {
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
            src="https://www.odooimplementers.com/images/Apps/Sales-Quotation.webp"
            alt="Odoo CRM Dashboard"
            className="shadow-2xl border-[11px] border-[#211f3b]/50 shadow-[#895d7d]/100"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h2 className="text-[32px] font-[1000] mb-6">
            Take a Step Ahead with Odoo Sales
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Manage Your Orders Effortlessly
          </h3>
          <p className="text-[16px] leading-relaxed mb-4">
            With Odoo Sales, you are one click away from converting business quotations into sales orders. You can edit and modify orders and ship orders. Automated invoice generation on ordered and delivered products with details on time, quantities and materials. Easy tracking of order flow with Odoo Sales.
          </p>
          <h3 className="text-2xl font-bold mb-4">
            Streamline Your Communication with Customers
          </h3>
          <p className="text-[16px] leading-relaxed">
            A single communication channel to schedule your business activities. Odoo Sales tool facilitates the attachment of your emails with the associated customer order. Oodu Implementers design customizable email templates for products to communicate relevant information to customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Takestep;
