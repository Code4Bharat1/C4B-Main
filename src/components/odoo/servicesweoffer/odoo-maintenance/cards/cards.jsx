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
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[320px] w-full sm:w-[530px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="	https://www.odooimplementers.com/images/icon/odoo-maintenance-service-for-effective-equipment.png"
              alt="Benefits Icon"
              className="w-[5rem] h-16 sm:w-71 sm:h-[5.25rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              Efficient Maintenance for Effective Equipment
            </h3>
          </div>
          <div className="text-gray-400 text-sm sm:text-base space-y-2">
                Maintenance forms an integral part of the equipment operation. The manufacturing sector can trigger maintenance requests directly from the work center control panel. Odoo Maintenance enables real-time updating of maintenance team activities. Better communication with reduced downtime and improved manufacturing are the highlights of Odoo Maintenance.                                                                          
          </div>
        </div>

        {/* Card 2 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[320px] w-full sm:w-[560px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="https://www.odooimplementers.com/images/icon/maintenance2.png"
              alt="Store Icon"
              className="w-16 h-16 sm:w-[5rem] sm:h-[5rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              Optimize your Performance With Odoo Maintenance
            </h3>
          </div>
            <div className="text-gray-400 text-sm sm:text-base space-y-2">
                Odoo Customization offers a wide range of services to enhance business growth. Odoo Customization serves the following purposes
            </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;
