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
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[367px] w-full sm:w-[530px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex items-center mb-4">
        <img
          src="/images/odoo-images/odoo-icons/odoo-offshore-development-service-benefits-icon.webp"
          alt="Benefits Icon"
          className="w-[5rem] h-16 sm:w-20 sm:h-20 mr-4 transform transition-transform duration-300 group-hover:scale-110"
        />
        <h3 className="text-lg sm:text-[20px] font-extrabold text-gray-800">
          Benefits of Odoo Offshore Development
        </h3>
      </div>

      {/* Description */}
      <div className="text-gray-600 text-sm sm:text-base mb-4">
        The benefits of Odoo offshore developments go far and wide. The
        possibilities are endless with the right Odoo offshore developers by
        your side.
      </div>

      {/* Bullet Points in Two Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
          <li>Optimized Workloads</li>
          <li>Minimal Risks</li>
          <li>Faster Launch Times</li>
        </ul>
        <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
          <li>High-Quality Products</li>
          <li>Access to Top Tech Talent</li>
          <li>Industry Expertise</li>
        </ul>
      </div>
    </div>

        {/* Card 2 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[367px] w-full sm:w-[451px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="/images/odoo-images/odoo-icons/odoo-offshore-development-trends.webp"
              alt="Store Icon"
              className="w-16 h-16 sm:w-[5rem] sm:h-[5rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              Odoo Offshore Development Trends 
            </h3>
          </div>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>Significant use of collaborative tools</li>
            <li>Increased use of cloud services</li>
            <li>Increased use of cloud services</li>
            <li>Improved data security</li>
            <li>Demand for innovative skills</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;
