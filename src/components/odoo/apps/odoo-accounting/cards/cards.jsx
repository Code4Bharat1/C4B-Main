import React from "react";

const Card = () => {
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
              src="/images/App images/odoo-erp-solutions-account-reports.png"
              alt="Benefits Icon"
              className="w-[5rem] h-16 sm:w-71 sm:h-[5.25rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              Clear and Dynamic Business Reports
            </h3>
          </div>
          <div className="text-gray-500 text-sm sm:text-base space-y-2">             
            Generate your reports the way you like them. With the feature for Business Intelligence, Odoo accounting enables to report across any dimension. Futuristic features are available to filter, zoom, annotate and compare any data.                                                                 
          </div>  
        </div>

        {/* Card 2 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[353px] w-full sm:w-[530px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="/images/App images/App Icons/odoo-erp-solutions-account-payments-and-trasactions.png"
              alt="Store Icon"
              className="w-16 h-16 sm:w-[5rem] sm:h-[5rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              Rapid Payment and Transactions with Odoo Accounting
            </h3>
          </div >
          <div className="text-gray-500 text-sm sm:text-base space-y-2">
            Accounting offers automated follow-ups for faster payments, making it easy to create and send invoices, receive payments online, and remind your debtors in no time. With this feature, you can easily keep track of your outstanding invoices and take action to ensure timely payment.   
          </div>                                         
        </div>
      </div>
    </section>
  );
};

export default Card;
