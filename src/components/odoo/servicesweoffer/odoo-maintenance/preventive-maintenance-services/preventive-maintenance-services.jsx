import React from "react";
import Link from "next/link"; // Import Link from Next.js

const Services = () => {
  return (
    <section
      className="relative bg-white py-16 sm:py-24 -mt-[7rem]"
      style={{
        backgroundImage:
          "url('/images/odoo-images/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 sm:px-[200px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between mb-8 sm:mb-12 text-center sm:text-left">
          <div data-aos="fade-up">
            <h3 className="text-purple-600 uppercase text-sm font-bold">// Our Service</h3>
            <h1 className="text-xl sm:text-3xl font-[1000] text-gray-800 mt-4">
              Best Odoo Configuration Services
            </h1>
          </div>
          {/* All Services Button */}
          <div className="mt-6 sm:mt-0" data-aos="fade-left">
          <Link href="/servicesweoffer">
            <button className="bg-[#885c7c] text-white font-[1000] py-2 px-4 sm:px-6 hover:bg-purple-700 transition-transform transform hover:scale-105 shadow-lg">
              All Services
            </button>
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {/* Service 1 */}
          <div className="text-center group transform transition-transform hover:scale-105 hover:-translate-y-2">
            <div className="mb-4">
              <img
                src="/images/odoo-images/odoo-icons/odoo-preventive-maintenance-service.png"
                alt="Preventive Maintenance"
                className="mx-auto h-[7rem] transition-transform transform group-hover:rotate-6"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
              Preventive Maintenance
            </h3>
            <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-900 transition-colors">
              Trigger and schedule maintenance requests automatically based on
              KPIs.
            </p>
          </div>

          {/* Service 2 */}
          <div className="text-center group transform transition-transform hover:scale-105 hover:-translate-y-2">
            <div className="mb-4">
              <img
                src="/images/odoo-images/odoo-icons/odoo-corrective-maintenance-management.png"
                alt="Corrective Maintenance"
                className="mx-auto h-[7rem] transition-transform transform group-hover:rotate-6"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
              Corrective Maintenance
            </h3>
            <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-900 transition-colors">
              Plan corrective maintenance directly from the control center
              panel.
            </p>
          </div>

          {/* Service 3 */}
          <div className="text-center group transform transition-transform hover:scale-105 hover:-translate-y-2">
            <div className="mb-4">
              <img
                src="/images/odoo-images/odoo-icons/odoo-maintenance-management-calendar.png"
                alt="Calendar"
                className="mx-auto h-[7rem] transition-transform transform group-hover:rotate-6"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
              Calendar
            </h3>
            <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-900 transition-colors">
              Schedule maintenance operations with the factory calendar.
            </p>
          </div>

          {/* Service 4 */}
          <div className="text-center group transform transition-transform hover:scale-105 hover:-translate-y-2">
            <div className="mb-4">
              <img
                src="/images/odoo-images/odoo-icons/odoo-maintenance-service-statistics.png"
                alt="Statistics"
                className="mx-auto h-[7rem] transition-transform transform group-hover:rotate-6"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
              Statistics
            </h3>
            <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-900 transition-colors">
              Compute the maintenance statistics - MTBF.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
