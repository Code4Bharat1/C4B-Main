import React from "react";

const EcommerceBenefits = () => {
  return (
    <section
      className="relative bg-white py-8 sm:py-16"
      style={{
        backgroundImage:
          "url('/images/odoo-images/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 px-6 sm:px-12 ">
        {/* Card 1 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[480px] w-full sm:w-[530px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="/images/odoo-images/odoo-icons/odoo-implementers-for-odoo-customization-process.png"
              alt="Benefits Icon"
              className="w-[5rem] h-16 sm:w-71 sm:h-[5.25rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
               Odoo Customization Process
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>
              <span className="font-bold">Understanding  </span> to
              Business Requirements.
            </li>
            <li>
              <span className="font-bold">Analysis</span>{" "}
               of Gap between requirements and existing Odoo ERP.
            </li>
            <li>
              <span className="font-bold">Checking Feasibility</span>{" "}
               and avoiding compromising the performance of existing functionality.
            </li>
            <li>
              <span className="font-bold">Estimating Costs</span>{" "}
                Business Requirements.
            </li>
            <li>
              <span className="font-bold">Developing</span>{" "}
               Odoo software based on the need.
            </li>
            <li>
              <span className="font-bold">Testing</span>{" "}
               for any issues
            </li>
            <li>
              <span className="font-bold">Delivering</span>{" "}
               completed and tested modules.
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[480px] w-full sm:w-[560px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="/images/odoo-images/odoo-icons/custom2.png"
              alt="Store Icon"
              className="w-16 h-16 sm:w-[5rem] sm:h-[5rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              What is the Purpose of the Odoo Customization?
            </h3>
          </div>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <div>
                Odoo Customization offers a wide range of services to enhance business growth. Odoo Customization serves the following purposes
            </div>
            <li>Identify key business problems that ERP customizations should solve.</li>
            <li>Solve departmental, functional or process-related problems.</li>
            <li>Isolate issues that have the greatest impact on operational costs, performance and growth goals and non-economic factors.</li>
            <li>Address issues like lack of custom reporting, user-interface design and workflow customization.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;
