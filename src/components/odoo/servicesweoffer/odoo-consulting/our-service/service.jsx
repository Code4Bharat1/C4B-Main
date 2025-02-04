import React from "react";
import Link from "next/link"; // Import Link from Next.js

const Services = () => {
  return (
    <section
      className="relative bg-white py-16 sm:py-24 -mt-[7rem]"
      style={{
        backgroundImage:
          "url('https://www.odooimplementers.com/images/background/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 sm:px-[200px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between mb-8 sm:mb-12 text-center sm:text-left">
          <div>
            <h3 className="text-purple-600 uppercase text-sm font-bold">// Our Service</h3>
            <h1 className="text-xl sm:text-3xl font-[1000] text-gray-800 mt-4">
              Odoo Functional & Technical Consulting Services
            </h1>
          </div>
          {/* All Services Button with Routing */}
          <div className="mt-6 sm:mt-0">
            <Link href="/servicesweoffer"> {/* Add your desired route here */}
              <button className="bg-[#885c7c] text-white font-[1000] py-2 px-4 sm:px-6  hover:bg-purple-700 transition">
                All Services
              </button>
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 (Largest) */}
          <div className="group relative bg-white rounded-lg p-4 sm:p-6 h-auto sm:h-[365px] overflow-hidden transform transition-transform duration-300 hover:-translate-y-4">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#885c7c] via-[#885c7c88] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <img
                  src="https://www.odooimplementers.com/images/icon/odoo-consulting-service-technical-and-functional.png"
                  alt="Odoo Consulting Services"
                  className="w-12 sm:w-16 h-12 sm:h-16 mr-4"
                />
                <h2 className="text-lg sm:text-[23px] font-[1000] text-gray-800">
                  Odoo Consulting Services
                </h2>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed tracking-wide text-justify">
                Oodu Implementers offers Odoo Consulting services to assist you
                with customizing and implementing Odoo. Besides, we help with
                migration and training to ensure that your business has the
                tools to thrive. We cater to our clients anywhere in the world
                with an enormous range of IT solutions. Our Odoo ERP consultants
                analyze, understand and evaluate the entire business process to
                supply potential ERP solutions. Our experts review the
                functionalities of the modules and deliver simple and effective
                consultation.
              </p>
            </div>
          </div>

          {/* Service 2 (Medium) */}
          <div className="group relative bg-white rounded-lg p-4 sm:p-6 h-auto sm:h-[365px] overflow-hidden transform transition-transform duration-300 hover:-translate-y-4">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#885c7c] via-[#885c7c88] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <img
                  src="https://www.odooimplementers.com/images/icon/odoo-service-functional-consulting.png"
                  alt="Odoo Functional Consulting"
                  className="w-12 sm:w-16 h-12 sm:h-16 mr-4"
                />
                <h2 className="text-lg sm:text-[23px] font-[1000] text-gray-800">
                  Odoo Functional Consulting
                </h2>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed tracking-wide text-justify">
                Oodu Implementers have the best Odoo consultants that provide
                Odoo functional consulting services. Our dedicated team will
                get in touch with the business to know your business plan,
                deadline for the project, and the way you want the software. We
                will check your project with the Odoo functional aspects, solve
                the process, and make the system work on the business logic
                provided in the system requirement.
              </p>
            </div>
          </div>

          {/* Service 3 (Smallest) */}
          <div className="group relative bg-white rounded-lg p-4 sm:p-6 h-auto sm:h-[310px] overflow-hidden transform transition-transform duration-300 hover:-translate-y-4">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#885c7c] via-[#885c7c88] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <img
                  src="https://www.odooimplementers.com/images/icon/odoo-service-technical-consulting.png"
                  alt="Odoo Technical Consulting"
                  className="w-12 sm:w-16 h-12 sm:h-16 mr-4"
                />
                <h2 className="text-lg sm:text-[23px] font-[1000] text-gray-800">
                  Odoo Technical Consulting
                </h2>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed tracking-wide text-justify">
                Our Odoo Consulting experts understand your business needs,
                technical flow, and the workflow of the system. We achieve your
                goal with the process through effective coding techniques and
                task management. We follow a standard technical flow that is
                defined by the Odoo Functional Consultants and deliver a robust
                service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
