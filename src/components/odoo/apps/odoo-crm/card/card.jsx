import React from "react";

const EcommerceBenefits = () => {
  return (
    <section
      className="relative bg-white py-8 sm:py-16"
      style={{
        backgroundImage:
          "url(/images/odoo-images/bg-maps-dots.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 px-6 sm:px-12 lg:px-48">
        {/* Card 1 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[353px] w-full sm:w-[530px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="/images/App images/App Icons/odoo-open-source-dashboard-implementation.png"
              alt="Benefits Icon"
              className="w-[5rem] h-16 sm:w-71 sm:h-[5.25rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
               Get Detailed Predictions
            </h3>
          </div>
          <div className="text-gray-500 text-sm sm:text-base space-y-2">             
            Odoo CRM also sets up automated alerts and notifications so that you can stay on top of your sales and marketing activities. This helps you identify potential issues before they become major problems, allowing you to take corrective action quickly and efficiently. With Odoo CRM, business owners can take informed decisions quickly.                                                                   
          </div>  
        </div>

        {/* Card 2 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[353px] w-full sm:w-[530px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="/images/App images/App Icons/odoo-crm-module-benefits.png"
              alt="Store Icon"
              className="w-16 h-16 sm:w-[5rem] sm:h-[5rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              Reap Innumerable Benefits
            </h3>
          </div >
          <div className="text-gray-500 text-sm sm:text-base space-y-2">
             Practical tools to implement various business functionalities. Affordable and well-curated Odoo CRM portal which does not burden your wallet and intention for investing in the implementation.   
          </div>                                         
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;
