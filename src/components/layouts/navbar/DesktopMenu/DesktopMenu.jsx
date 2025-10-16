"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineRight } from "react-icons/ai";

const DesktopMenu = ({ menuItems, pathname, handleLinkClick }) => {
  // ---------- SUBMENU STATES (Desktop) ----------
  const [isOdooDropdownOpen, setIsOdooDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);
  const [isManufacturingDropdownOpen, setIsManufacturingDropdownOpen] =
    useState(false);
  const [isHRDropdownOpen, setIsHRDropdownOpen] = useState(false);

  // Framer Motion animations
  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

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
      default:
        return false;
    }
  };

  return (
    <motion.div
      className="hidden md:flex gap-4 lg:gap-8 xl:gap-12 mr-4 lg:mr-8 xl:mr-16"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      {menuItems.map(({ name, path }, idx) => (
        <motion.div
          key={idx}
          variants={navVariants}
          className="relative group"
          onMouseEnter={() => handleDropdownEnter(name)}
          onMouseLeave={() => handleDropdownLeave(name)}
        >
          <Link href={path} onClick={handleLinkClick}>
            <h3
              className={`text-sm lg:text-base xl:text-lg font-medium capitalize whitespace-nowrap flex items-center gap-1 ${
                pathname === path
                  ? "text-[#3b84d6] font-bold border-b-2 border-[#3b84d6]"
                  : "hover:text-[#3b84d6] transition-colors duration-200"
              }`}
            >
              {name}
              {name === "Odoo" && (
                <motion.svg
                  className="w-4 h-4"
                  animate={{ rotate: isOdooDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
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
                </motion.svg>
              )}
            </h3>
          </Link>

          {/* Odoo Dropdown */}
          {name === "Odoo" && isOdooDropdownOpen && (
            <AnimatePresence>
              <motion.div
                className="absolute top-10 left-full md:left-auto md:right-0 mr-2 bg-white shadow-xl rounded-lg w-48 md:w-56"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="text-gray-700 py-2">
                  {/* Services We Offer */}
                  <li
                    className="relative py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 flex justify-between items-center cursor-pointer"
                    onMouseEnter={() => handleDropdownEnter("Services")}
                    onMouseLeave={() => handleDropdownLeave("Services")}
                  >
                    <Link href="/servicesweoffer" className="flex-1 text-sm md:text-base">
                      Services We Offer
                    </Link>
                    <motion.span
                      animate={{ x: isOpen("Services") ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2 hover:text-[#873070]"
                    >
                      <AiOutlineRight />
                    </motion.span>
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
                    <motion.span
                      animate={{ x: isOpen("Apps") ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2 hover:text-[#873070]"
                    >
                      <AiOutlineRight />
                    </motion.span>
                  </li>
                </ul>

                {/* Services Submenu */}
                {isServicesDropdownOpen && (
                  <AnimatePresence>
                    <motion.div
                      className="absolute top-2 left-full bg-white shadow-xl rounded-lg w-[90vw] md:w-[500px] lg:w-[600px] p-4 md:p-6 max-h-[80vh] overflow-y-auto ml-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
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
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* Apps Submenu */}
                {isAppsDropdownOpen && (
                  <AnimatePresence>
                    <motion.div
                      className="absolute top-[3.25rem] left-full bg-white shadow-xl rounded-lg w-[90vw] md:w-[500px] lg:w-[600px] p-4 md:p-6 max-h-[80vh] overflow-y-auto ml-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      onMouseEnter={() => handleDropdownEnter("Apps")}
                      onMouseLeave={() => handleDropdownLeave("Apps")}
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
                        {/* FIRST COLUMN */}
                        <div className="w-full md:w-1/2 flex flex-col space-y-2 text-gray-700">
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-crm">Odoo CRM</Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-sales">Odoo Sales</Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-e-commerce">
                              Odoo E-Commerce
                            </Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-e-mail-marketing">
                              Odoo Email Marketing
                            </Link>
                          </li>

                          {/* Odoo Manufacturing (sub-sub-menu) */}
                          <li
                            className="relative hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base cursor-pointer"
                            onMouseEnter={() => handleDropdownEnter("Manufacturing")}
                            onMouseLeave={() => handleDropdownLeave("Manufacturing")}
                          >
                            <div className="flex items-center justify-between">
                              <Link href="/apps/odoo-manufacturing">
                                Odoo Manufacturing
                              </Link>
                              <motion.span
                                animate={{ x: isOpen("Manufacturing") ? 5 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-2"
                              >
                                <AiOutlineRight />
                              </motion.span>
                            </div>

                            {isManufacturingDropdownOpen && (
                              <AnimatePresence>
                                <motion.div
                                  className="absolute top-0 right-full mr-2 bg-white shadow-xl rounded-lg w-48 md:w-56"
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 10 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ul className="text-gray-700 py-2">
                                    <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 text-sm">
                                      <Link href="/apps/odoo-maintenance">
                                        Odoo Maintenance
                                      </Link>
                                    </li>
                                    <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 text-sm">
                                      <Link href="/apps/odoo-plm">Odoo PLM</Link>
                                    </li>
                                    <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 text-sm">
                                      <Link href="/apps/odoo-quality">
                                        Odoo Quality
                                      </Link>
                                    </li>
                                  </ul>
                                </motion.div>
                              </AnimatePresence>
                            )}
                          </li>

                          {/* Odoo HR Management (sub-sub-menu) */}
                          <li
                            className="relative hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base cursor-pointer"
                            onMouseEnter={() => handleDropdownEnter("HR")}
                            onMouseLeave={() => handleDropdownLeave("HR")}
                          >
                            <div className="flex items-center justify-between">
                              <Link href="/apps/odoo-hr-management">
                                Odoo HR Management
                              </Link>
                              <motion.span
                                animate={{ x: isOpen("HR") ? 5 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-2"
                              >
                                <AiOutlineRight />
                              </motion.span>
                            </div>

                            {isHRDropdownOpen && (
                              <AnimatePresence>
                                <motion.div
                                  className="absolute top-0 right-full mr-2 bg-white shadow-xl rounded-lg w-48 md:w-56"
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 10 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ul className="text-gray-700 py-2">
                                    <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 text-sm">
                                      <Link href="/apps/odoo-timeoff">
                                        Odoo Timeoff
                                      </Link>
                                    </li>
                                    <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 text-sm">
                                      <Link href="/apps/odoo-recruitment">
                                        Odoo Recruitment
                                      </Link>
                                    </li>
                                    <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 text-sm">
                                      <Link href="/apps/odoo-appraisal">
                                        Odoo Appraisal
                                      </Link>
                                    </li>
                                  </ul>
                                </motion.div>
                              </AnimatePresence>
                            )}
                          </li>

                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-project">Odoo Project</Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-accounting">
                              Odoo Accounting
                            </Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-inventory">Odoo Inventory</Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-helpdesk">Odoo Helpdesk</Link>
                          </li>
                        </div>

                        {/* SECOND COLUMN */}
                        <div className="w-full md:w-1/2 flex flex-col space-y-2 text-gray-700">
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-invoicing">
                              Odoo Invoicing
                            </Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-sales">Odoo Sales</Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-purchase">Odoo Purchase</Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-timesheet">Odoo Timesheet</Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-sales">
                              Odoo Point of Sale
                            </Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-expenses">Odoo Expenses</Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-event-management">
                              Odoo Events
                            </Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-marketing-automation">
                              Marketing Automation
                            </Link>
                          </li>
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none text-sm md:text-base">
                            <Link href="/apps/odoo-documents">Odoo Documents</Link>
                          </li>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DesktopMenu;