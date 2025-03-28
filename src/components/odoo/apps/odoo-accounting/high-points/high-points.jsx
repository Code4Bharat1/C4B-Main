import React from "react";

const Highpoints = () => {
  return (
    <section className="bg-white py-16 mb-[3rem]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-8 lg:pl-[12rem] lg:pr-[15rem]">
        {/* Left Section - Text */}
        <div className="mx-auto sm:-mr-[26px] sm:ml-[26px]">
          <img
            src="/images/App images/odoo-accounting-app-fully-integrated.gif"
            alt="Configuration Image"
            className=""
          />
        </div>

         {/* Right Section - Image */}
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-16">
          <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
            High points of Odoo Accounting
          </h2>
          <ul className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            <li>Easy tracking of budget and comparison of business performance with the different budgets.</li>
            <li>
              Automated account reconciliation.
            </li>
            <li>
              Securable accountings and upgradation of Odoo accounting books.
            </li>
            <li>Optimal validation for your business payment.</li>
            <li>Analytic data generation based on timesheets, supplier bills, work orders.</li>
            <li>Fully integrated with other Odoo Apps- Odoo Expenses, Odoo Inventory, Odoo Point of Sale, Odoo Sales, Odoo Project, Odoo Purchase and Odoo Accounting Customer Portal.</li>
          </ul>
          <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
            You can easily extra the following reports with Odoo Accounting:
          </h2>
          <ul className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            <li>Balance Sheet.</li>
            <li>
              General Ledger.
            </li>
            <li>
            Partner Ledger.
            </li>
            <li>Profit & Loss.</li>
            <li>Sale & Purchase Journal.</li>
            <li>Trial Balance.</li>
            <li>Aged Partner Balance.</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto grid-flow-row max-w-screen-lg px-4 sm:px-6 lg:px-8">
      <h2 className="text-gray-900 font-extrabold text-lg sm:text-2xl mb-6">
        Why choose Odoo Implementers for Odoo Accounting?
       </h2>
     <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
       Odoo Implementers assures highly efficient business processes with promised productivity gains. We are well-experienced in creating a secured system with potential cash flow to ensure flexibility and optimized solutions for cost efficiency. We deliver better results with a perfect blend of business domain knowledge and advanced technology frameworks. Odoo Implementers are sure to make a big difference in your business with the reliable Odoo Accounting tools implementation.
      </p>
      </div>

      </section>
  );
};

export default Highpoints;
