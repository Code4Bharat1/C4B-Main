import React from "react";

const Salientfeatures = () => {
  return (
    <section className="relative bg-white py-16 sm:py-5">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[2rem] pb-[4rem]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px]">
          <div className="">
            <img
              src="https://www.odooimplementers.com/images/Apps/odoo-maintenance-features.webp"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full border-white"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
        <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
          Salient Features of Odoo Maintenance
        </h2>
          <ul className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            <li>Control planned / unplanned maintenance and Schedule maintenance while minimizing downtime.</li>
            <li>
              Plant Maintenance Module captures information on equipment maintenance and breakdown analysis, lets you schedule maintenance task calendar for all equipment etc.
            </li>
            <li>
            Automate/plan preventive maintenance.
            </li>
            <li>Track corrective maintenance.</li>
            <li>Organize maintenance request.</li>
            <li>Increase overall equipment effectiveness.</li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Salientfeatures;
