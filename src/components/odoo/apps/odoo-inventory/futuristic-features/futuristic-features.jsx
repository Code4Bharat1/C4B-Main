import React from "react";

const Highpoints = () => {
  return (
    <section className="bg-white py-16 mb-[3rem]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-8 lg:pl-[12rem] lg:pr-[15rem]">
        {/* Left Section - Text */}
        <div className="mx-auto sm:-mr-[26px] sm:ml-[26px]">
          <img
            src="/images/App images/odoo-inventory-software-features-image.gif"
            alt="Configuration Image"
            className="shadow-2xl border-[11px] h-[16rem] md:h-[36rem] border-[#ffff] shadow-[#895d7d]/100"
          />
        </div>

         {/* Right Section - Image */}
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-16">
          <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
          Futuristic Features of Odoo Inventory
          </h2>
          <ul className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            <li>Cutting-edge automation and advanced routes to manage the warehouse effectively.</li>
            <li>
             Drop-shipping to deliver directly to customers from the supplier based on products, orders or customers.
            </li>
            <li>
             Cross-docking to unload incoming material and directly transfer to the outbound gates with no storage in between.
            </li>
            <li>Multi-warehouses to manage all your warehouses with the same system and define replenishment rules between warehouses.</li>
          </ul>
          <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
           Complete Traceability with Double-Entry Inventory System
          </h2>
          <p className="text-gray-600 text-base sm:text-lg sm:text-[18px]">
            Real-time posting of inventory valuation on accounting software for an accurate balance sheet and warehouse management. Odoo Inventory Management is fully integrated with other Odoo apps for automated business flow.
          </p>
        </div>
      </div>
      </section>
  );
};

export default Highpoints;
