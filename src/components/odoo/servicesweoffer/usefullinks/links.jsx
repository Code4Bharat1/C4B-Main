import React from "react";
import Link from "next/link"; // Import Link from Next.js

const FooterLinks = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
          Useful Links:
        </h2>
        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
          {/* Company Column */}
          <div>
            <h3 className="text-[#885c7c] text-base sm:text-lg font-bold mb-4">
              COMPANY
            </h3>
            <ul className="space-y-4">
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                About Us
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Why Choose Us
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Our Quality Process
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Our Clients
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Careers
              </li>
            </ul>
          </div>
          {/* Services Column */}
          <div>
            <h3 className="text-[#885c7c] text-base sm:text-lg font-bold mb-4">
                SERVICES
            </h3>
            <ul className="space-y-4">
            
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
              <Link href="/servicesweoffer/odoo-consulting">
                Consulting
                </Link>
              </li>
           
            
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
              <Link href="/servicesweoffer/odoo-configuration">
                Configuration
              </Link>
              </li>
            
            
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
              <Link href="/servicesweoffer/odoo-customization">
                Customization
              </Link>
              </li>
             
              
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
              <Link href="/servicesweoffer/odoo-development-services">
                Development
              </Link>
              </li>
              
              
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
              <Link href="/servicesweoffer/odoo-implementation">
                Implementation
              </Link>
              </li>
            </ul>
          </div>
          {/* Apps Column */}
          <div>
            <h3 className="text-[#885c7c] text-base sm:text-lg font-bold mb-4">
              APPS
            </h3>
            <ul className="space-y-4">
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                CRM
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Invoicing
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Sales
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                E-Commerce
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Point Of Sale
              </li>
            </ul>
          </div>
          {/* Industries Column */}
          <div>
            <h3 className="text-[#885c7c] text-base sm:text-lg font-bold mb-4 whitespace-nowrap">
              INDUSTRIES WE CATER
            </h3>
            <ul className="space-y-4">
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Capital Machinery
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Component Manufacturing
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Garment Trading
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Service Industry
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Electrical Component Manufacturing
              </li>
            </ul>
          </div>
          {/* Menu Column */}
          <div>
            <h3 className="text-[#885c7c] text-base sm:text-lg font-bold mb-4">
              MENU
            </h3>
            <ul className="space-y-4">
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Blog
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Photo Gallery
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Video Gallery
              </li>
              <li className="hover:text-[#6E4A63] hover:scale-105 transition-transform duration-200 cursor-pointer">
                Our Corporate PPT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
