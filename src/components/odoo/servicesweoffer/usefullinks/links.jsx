import React from "react";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-8 text-center text-black hover:text-[#885c7c]">
          Useful Links
        </h2>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-sm">
          {/* Services Column */}
          <div>
            <h3 className="text-[#885c7c] text-lg font-bold mb-4">SERVICES</h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Consulting",
                  path: "/servicesweoffer/odoo-implementation",
                },
                {
                  name: "Configuration",
                  path: "/servicesweoffer/odoo-configuration",
                },
                {
                  name: "Customization",
                  path: "/servicesweoffer/odoo-customization",
                },
                {
                  name: "Development",
                  path: "/servicesweoffer/odoo-development-services",
                },
                {
                  name: "Implementation",
                  path: "/servicesweoffer/odoo-implementation",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apps Column */}
          <div>
            <h3 className="text-[#885c7c] text-lg font-bold mb-4">APPS</h3>
            <ul className="space-y-3">
              {[
                { name: "CRM", path: "/apps/odoo-crm" },
                { name: "Invoicing", path: "/apps/odoo-invoicing" },
                { name: "Sales", path: "/apps/odoo-sales" },
                { name: "E-Commerce", path: "/apps/odoo-e-commerce" },
                { name: "Point Of Sale", path: "/apps/odoo-sales" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h3 className="text-[#885c7c] text-lg font-bold mb-4">
              INDUSTRIES WE CATER
            </h3>
            <ul className="space-y-3">
              {[
                "Capital Machinery",
                "Component Manufacturing",
                "Garment Trading",
                "Service Industry",
                "Electrical Component Manufacturing",
              ].map((industry, index) => (
                <li
                  key={index}
                  className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Column */}
          <div>
            <h3 className="text-[#885c7c] text-lg font-bold mb-4 lg:pl-16">
              MENU
            </h3>
            <ul className="space-y-3 lg:pl-16">
              {[
                "Blog",
                "Photo Gallery",
                "Video Gallery",
                "Our Corporate PPT",
              ].map((menuItem, index) => (
                <li
                  key={index}
                  className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  {menuItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
