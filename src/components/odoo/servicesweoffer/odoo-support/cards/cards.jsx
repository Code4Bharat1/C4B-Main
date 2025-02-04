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
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[480px] w-full sm:w-[530px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="https://www.odooimplementers.com/images/icon/odoo-technical-support-specialist-icon.png"
              alt="Benefits Icon"
              className="w-[5rem] h-16 sm:w-71 sm:h-[5.25rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
              Highlights of Odoo Support 
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>Project Management</li>
            <li>Configuration Support</li>
            <li>Full Account Management Services</li>
            <li>Time and Materials Management</li>
            <li>Round-the-clock Helpdesk via Call and Email</li>
            <li>Data Import Assistance</li>
            <li>Consulting Services</li>
            <li>Code Development</li>
            <li>Reports and Workflows Customization</li>
            <li>Punctual and Technical Guidance</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[480px] w-full sm:w-[560px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img
              src="https://www.odooimplementers.com/images/icon/odoo-technical-support-specialist-icon.png"
              alt="Store Icon"
              className="w-16 h-16 sm:w-[5rem] sm:h-[5rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
               Odoo Support Services at Oodu Implementers 
            </h3>
          </div>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <div>
            Oodu Implementers work closely with clients to ensure seamless and uninterrupted business flow. Our eminent support system takes business to great heights. We provide,
            </div>
            <li>Installation and Upgrade Process Support</li>
            <li>Configuration Support</li>
            <li>Operational Support</li>
            <li>Global Tax, Legal and Regulatory Updates</li>
            <li>Immediate Response to Critical Issue</li>
            <li>Support to Maximize your return on Odoo ERP Investment</li>
            <li>Proactive Support Services</li>
            <li>Strategic Roadmap Services</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;
