import React from "react";

const EcommerceBenefits = () => {
  return (
    <section
      className="relative bg-white py-8 sm:py-16"
      style={{
        backgroundImage:
          "url('https://www.odooimplementers.com/images/icon/odoo-…r-business-application-to-stategic-platforms.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 px-6 sm:px-12 lg:px-48">
        {/* Card 1 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[353px] w-full sm:w-[530px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="https://www.odooimplementers.com/images/icon/odoo-implementation-business-results.webp"
              alt="Benefits Icon"
              className="w-[5rem] h-16 sm:w-71 sm:h-[5.25rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              Our migration services are instrumental for
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>
              <span className="font-bold">Backup the legacy system </span> to
               to sustain the data on the server of Odoo ERP
            </li>
            <li>
              <span className="font-bold">Deploy a test lab or pilot project </span>{" "}
               to evaluate Odoo ERP
            </li>
            <li>
              <span className="font-bold">Migrate the modules </span>{" "}
              and 
              <span className="font-bold">re-create modules  </span>{" "}
              that no longer exist or that were custom-made
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[353px] w-full sm:w-[560px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="https://www.odooimplementers.com/images/icon/odoo-migration-service-icon.png"
              alt="Store Icon"
              className="w-16 h-16 sm:w-[5rem] sm:h-[5rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              Our migration services are instrumental for
            </h3>
          </div>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>Integration and enhancement of legacy systems with new Odoo ERP Internet-driven technologies and ERP version Odoo Migration Service</li>
            <li>Odoo Migration of systems to new architecture, languages, databases and web-based environments</li>
            <li>Migrating a legacy or existing application to a new operating environment- Re-enabling, re-hosting and re-engineering, Web Enablement, Application Upgradation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;
