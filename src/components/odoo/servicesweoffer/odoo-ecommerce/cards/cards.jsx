import React from "react";

const EcommerceBenefits = () => {
  return (
    <section
      className="relative bg-white py-8 sm:py-16"
      style={{
        backgroundImage:
          "url('https://www.odooimplementers.com/images/background/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 px-6 sm:px-12 lg:px-48">
        {/* Card 1 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[443px] w-full sm:w-[530px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="https://www.odooimplementers.com/images/icon/odoo-e-commerce-service-benefits.png"
              alt="Benefits Icon"
              className="w-[5rem] h-16 sm:w-71 sm:h-[5.25rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              Key Benefits of Odoo E-commerce
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>Easy Tracking of Orders</li>
            <li>Simplified Payment Process</li>
            <li>Efficient Logistics System</li>
            <li>Robust Third-Party Integration Services</li>
            <li>Enhanced Online Business Promotion</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[443px] w-full sm:w-[560px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="https://www.odooimplementers.com/images/icon/odoo-artistic-e-commerce-store.png"
              alt="Store Icon"
              className="w-16 h-16 sm:w-[5rem] sm:h-[5rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              Artistic E-commerce Store
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>
              <span className="font-bold">Intuitive User Interface</span> to
              provide customers with a rich shopping experience
            </li>
            <li>
              <span className="font-bold">Attractive and tailor-made templates</span>{" "}
              based on your business purpose
            </li>
            <li>
              <span className="font-bold">Stunning and perfect-fit product galleries</span>{" "}
              to showcase your products and services
            </li>
            <li>
              <span className="font-bold">Customized and interactive UI designs</span>{" "}
              to make your customers more comfortable
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;
