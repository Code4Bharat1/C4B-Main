import React from "react";

const Card = () => {
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
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[285px] w-full sm:w-[420px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="/images/odoo-images/odoo-web-development.webp"
              alt="Benefits Icon"
              className="w-[5rem] h-16 sm:w-71 sm:h-[5.25rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
               Odoo Customization Process
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>Points Of Sale</li>
            <li>Backend Theme</li>
            <li>Backend Customization</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[285px] w-full sm:w-[420px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="/images/odoo-images/odoo-web-development-in-backend-icon.webp"
              alt="Store Icon"
              className="w-16 h-16 sm:w-[5rem] sm:h-[5rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              What is the Purpose of the Odoo Customization?
            </h3>
          </div>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>Website Development</li>
            <li>E-commerce Development</li>
            <li>Customization</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Card;
