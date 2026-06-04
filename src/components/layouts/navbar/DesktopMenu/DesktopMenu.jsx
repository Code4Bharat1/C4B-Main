import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const DesktopMenu = ({ menuItems, pathname, handleLinkClick }) => {
  // ---------- SUBMENU STATES (Desktop) ----------
  const [isOdooDropdownOpen, setIsOdooDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);
  const [isManufacturingDropdownOpen, setIsManufacturingDropdownOpen] =
    useState(false);
  const [isHRDropdownOpen, setIsHRDropdownOpen] = useState(false);
  const [isHubDropdownOpen, setIsHubDropdownOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOdooDropdownOpen(false);
        setIsServicesDropdownOpen(false);
        setIsAppsDropdownOpen(false);
        setIsManufacturingDropdownOpen(false);
        setIsHRDropdownOpen(false);
        setIsHubDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Hover logic
  const handleDropdownEnter = (dropdownName) => {
    switch (dropdownName) {
      case "Odoo":
        setIsOdooDropdownOpen(true);
        break;
      case "Services":
        setIsServicesDropdownOpen(true);
        break;
      case "Apps":
        setIsAppsDropdownOpen(true);
        break;
      case "Manufacturing":
        setIsManufacturingDropdownOpen(true);
        break;
      case "HR":
        setIsHRDropdownOpen(true);
        break;
      case "Hub":
        setIsHubDropdownOpen(true);
        break;
      default:
        break;
    }
  };

  const handleDropdownLeave = (dropdownName) => {
    switch (dropdownName) {
      case "Odoo":
        setIsOdooDropdownOpen(false);
        break;
      case "Services":
        setIsServicesDropdownOpen(false);
        break;
      case "Apps":
        setIsAppsDropdownOpen(false);
        break;
      case "Manufacturing":
        setIsManufacturingDropdownOpen(false);
        break;
      case "HR":
        setIsHRDropdownOpen(false);
        break;
      case "Hub":
        setIsHubDropdownOpen(false);
        break;
      default:
        break;
    }
  };

  const isOpen = (dropdownName) => {
    switch (dropdownName) {
      case "Services":
        return isServicesDropdownOpen;
      case "Apps":
        return isAppsDropdownOpen;
      case "Manufacturing":
        return isManufacturingDropdownOpen;
      case "HR":
        return isHRDropdownOpen;
      case "Hub":
        return isHubDropdownOpen;
      default:
        return false;
    }
  };

  return (
    <div
      ref={menuRef}
      className="hidden md:flex gap-4 lg:gap-8 xl:gap-12 mr-4 lg:mr-8 xl:mr-16 dropdown-transition nav-entrance"
    >
      {menuItems.map(({ name, path, dropdown }, idx) => (
        <div key={idx} className="relative group">
          {(name === "Odoo" || name === "Hub") ? (
            <Link
            href={`${name === "Odoo" ? "/servicesweoffer" : "/"}`}
              onClick={() => {
  if (name === "Odoo") {
    setIsOdooDropdownOpen(prev => !prev);
  } else if (name === "Hub") {
    setIsHubDropdownOpen(prev => !prev);
  }
}}

              className={`text-sm lg:text-base xl:text-lg font-medium capitalize whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                pathname === path
                  ? "text-[#3b84d6] font-bold border-b-2 border-[#3b84d6]"
                  : "hover:text-[#3b84d6] transition-colors duration-200"
              }`}
            >
              {name}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  (name === "Odoo" ? isOdooDropdownOpen : isHubDropdownOpen) ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          ) : (
            <Link href={path || "/"} onClick={handleLinkClick}>
              <h3
                className={`text-sm lg:text-base xl:text-lg font-medium capitalize whitespace-nowrap flex items-center gap-1 ${
                  pathname === path
                    ? "text-[#3b84d6] font-bold border-b-2 border-[#3b84d6]"
                    : "hover:text-[#3b84d6] transition-colors duration-200"
                }`}
              >
                {name}
              </h3>
            </Link>
          )}

          {/* Hub Dropdown */}
          {name === "Hub" && (
            <div
              className={`absolute top-10 left-full md:left-auto md:right-0 mr-2 bg-white shadow-xl rounded-lg w-48 md:w-56 transition-all duration-300 z-[100] ${
                isHubDropdownOpen 
                  ? "opacity-100 translate-y-0 pointer-events-auto" 
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
                <ul className="text-gray-700 py-2">
                  {dropdown?.map((sub, index) => (
                    <li
                      key={index}
                      className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200"
                    >
                      <button
                        onClick={() => {
                          if (sub.scroll && typeof window !== 'undefined') {
                            const element = document.getElementById(sub.scroll);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                          setIsHubDropdownOpen(false);
                        }}
                        className="w-full text-left text-sm md:text-base"
                      >
                        {sub.label}
                      </button>
                    </li>
                  ))}
                </ul>
            </div>
          )}

          {/* Odoo Dropdown */}
          {name === "Odoo" && (
            <div
              className={`absolute top-10 left-full md:left-auto md:right-0 mr-2 bg-white shadow-xl rounded-lg w-48 md:w-56 transition-all duration-300 z-[100] ${
                isOdooDropdownOpen 
                  ? "opacity-100 translate-y-0 pointer-events-auto" 
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
                <ul className="text-gray-700 py-2">
                  {/* Services We Offer */}
                  <li
                    className="relative py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 flex justify-between items-center cursor-pointer"
                    onMouseEnter={() => handleDropdownEnter("Services")}
                    onMouseLeave={() => handleDropdownLeave("Services")}
                  >
                    <Link
                      href="/servicesweoffer"
                      className="flex-1 text-sm md:text-base"
                    >
                      Services We Offer
                    </Link>
                    <span
                      className={`mr-2 -rotate-180 transition-transform duration-200 hover:text-[#873070] ${
                        isOpen("Services") ? "-translate-x-1" : ""
                      }`}
                    >
                      <AiOutlineRight  className="-rotate-180"/>
                    </span>
                  </li>

                  {/* Apps */}
                  <li
                    className="relative py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 flex justify-between items-center cursor-pointer"
                    onMouseEnter={() => handleDropdownEnter("Apps")}
                    onMouseLeave={() => handleDropdownLeave("Apps")}
                  >
                    <Link href="/apps" className="flex-1 text-sm md:text-base">
                      Apps
                    </Link>
                    <span
                      className={`ml-2 transition-transform duration-200 ${
                        isOpen("Apps") ? "-translate-x-1" : ""
                      }`}
                    >
                      <AiOutlineRight className="-rotate-180" />
                    </span>
                  </li>
                </ul>

                {/* Services Submenu */}
                <div
                  className={`absolute top-0 right-full mr-5 bg-white shadow-xl rounded-lg w-[90vw] md:w-[500px] lg:w-[600px] p-4 md:p-6 max-h-[80vh] overflow-y-auto transition-all duration-300 ${
                    isServicesDropdownOpen
                      ? "opacity-100 translate-x-0 pointer-events-auto"
                      : "opacity-0 -translate-x-2 pointer-events-none"
                  }`}
                  onMouseEnter={() => handleDropdownEnter("Services")}
                  onMouseLeave={() => handleDropdownLeave("Services")}
                >
                      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
                        {/* FIRST COLUMN */}
                        <div className="w-full md:w-1/2 flex flex-col space-y-2 text-gray-700">
                          <h4 className="font-bold mb-2 text-base md:text-lg text-[#873070]">
                            Consulting
                          </h4>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/servicesweoffer/odoo-consulting">
                              Odoo Consulting
                            </Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/servicesweoffer/odoo-ecommerce">
                              Odoo E-Commerce
                            </Link>
                          </li>

                          <h4 className="font-bold mt-4 mb-2 text-base md:text-lg text-[#873070]">
                            Implementation
                          </h4>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/servicesweoffer/odoo-integration">
                              Odoo Integration
                            </Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/servicesweoffer/odoo-implementation">
                              Odoo Implementation
                            </Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/servicesweoffer/odoo-customization">
                              Odoo Customization
                            </Link>
                          </li>
                        </div>

                        {/* SECOND COLUMN */}
                        <div className="w-full md:w-1/2 flex flex-col space-y-2 text-gray-700">
                          <h4 className="font-bold mb-2 text-base md:text-lg text-[#873070] md:mt-0">
                            Development
                          </h4>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/servicesweoffer/odoo-development-services">
                              Odoo Development
                            </Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/servicesweoffer/odoo-configuration">
                              Odoo Configuration
                            </Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/servicesweoffer/odoo-offshore">
                              Odoo Offshore Development
                            </Link>
                          </li>

                          <h4 className="font-bold mt-4 mb-2 text-base md:text-lg text-[#873070]">
                            Support
                          </h4>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/servicesweoffer/odoo-support">
                              Odoo Support
                            </Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/servicesweoffer/odoo-migration">
                              Odoo Migration
                            </Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/servicesweoffer/odoo-maintenance">
                              Odoo Maintenance
                            </Link>
                          </li>
                        </div>
                      </div>
                </div>

                {/* Apps Submenu */}
                <div
                  className={`absolute top-0 right-full mr-2 bg-white shadow-xl rounded-lg w-[90vw] md:w-[500px] lg:w-[600px] p-4 md:p-6 max-h-[80vh] overflow-y-auto transition-all duration-300 ${
                    isAppsDropdownOpen
                      ? "opacity-100 translate-x-0 pointer-events-auto"
                      : "opacity-0 -translate-x-2 pointer-events-none"
                  }`}
                  onMouseEnter={() => handleDropdownEnter("Apps")}
                  onMouseLeave={() => handleDropdownLeave("Apps")}
                >
                  <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
                    <div className="w-full md:w-1/2 flex flex-col space-y-2 text-gray-700">
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-crm">Odoo CRM</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-sales">Odoo Sales</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-e-commerce">Odoo E-Commerce</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-e-mail-marketing">Odoo Email Marketing</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-project">Odoo Project</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-accounting">Odoo Accounting</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-inventory">Odoo Inventory</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-helpdesk">Odoo Helpdesk</Link>
                      </li>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col space-y-2 text-gray-700">
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-invoicing">Odoo Invoicing</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-purchase">Odoo Purchase</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-timesheet">Odoo Timesheet</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-point-of-sale">Odoo Point of Sale</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-expenses">Odoo Expenses</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-event-management">Odoo Events</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-marketing-automation">Marketing Automation</Link>
                      </li>
                      <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                        <Link href="/apps/odoo-documents">Odoo Documents</Link>
                      </li>
                    </div>
                  </div>
                </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopMenu;