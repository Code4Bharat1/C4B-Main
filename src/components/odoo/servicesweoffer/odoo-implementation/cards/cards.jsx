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
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 px-6 sm:px-12 ">
        {/* Card 1 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[480px] w-full sm:w-[530px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="/images/odoo-images/odoo-icons/odoo-implementation-business-results.webp"
              alt="Benefits Icon"
              className="w-[5rem] h-16 sm:w-71 sm:h-[5.25rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              Key Benefits of Odoo E-commerce
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>
              <span className="font-bold">Advanced Optimization </span> to
              with a full potential solution
            </li>
            <li>
              <span className="font-bold">Secured Implementation </span>{" "}
              to reduce the cyber attack risks
            </li>
            <li>
              <span className="font-bold">Customized Odoo Reports </span>{" "}
              in PDFs, Excel/CSVs
            </li>
            <li>
              <span className="font-bold">Stable Operation </span>{" "}
              with assistance to fix bugs in the system
            </li>
            <li>
              <span className="font-bold">Low-cost Implementation</span>{" "}
              without any license fee
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[480px] w-full sm:w-[560px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="/images/odoo-images/odoo-icons/odoo-implementation-company-business-goals.webp"
              alt="Store Icon"
              className="w-16 h-16 sm:w-[5rem] sm:h-[5rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              Artistic E-commerce Store
            </h3>
          </div>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>Defining Business Goals</li>
            <li>Allocating Budget</li>
            <li>Gathering Budget Information & Requirement</li>
            <li>Defining Implementation Phases</li>
            <li>Selecting the Best Hosting Plan</li>
            <li>Installation and Configuration</li>
            <li>Data Migration</li>
            <li>Testing Phase</li>
            <li>Training & Live</li>
            <li>Support & Maintenance</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;
