"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineRight } from "react-icons/ai";

const DesktopMenu = ({ menuItems, pathname, handleLinkClick }) => {
  // ---------- SUBMENU STATES (Desktop) ----------
  const [isOdooDropdownOpen, setIsOdooDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isConsultingDropdownOpen, setIsConsultingDropdownOpen] = useState(false);
  const [isImplementationDropdownOpen, setIsImplementationDropdownOpen] =
    useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);

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
      case "Consulting":
        setIsConsultingDropdownOpen(true);
        break;
      case "Implementation":
        setIsImplementationDropdownOpen(true);
        break;
      case "Support":
        setIsSupportDropdownOpen(true);
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
      case "Consulting":
        setIsConsultingDropdownOpen(false);
        break;
      case "Implementation":
        setIsImplementationDropdownOpen(false);
        break;
      case "Support":
        setIsSupportDropdownOpen(false);
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
      case "Consulting":
        return isConsultingDropdownOpen;
      case "Implementation":
        return isImplementationDropdownOpen;
      case "Support":
        return isSupportDropdownOpen;
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
      className="hidden md:flex gap-[3em] mr-[10em]"
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
              className={`text-[1vw] font-medium capitalize ${
                pathname === path
                  ? "text-[#3b84d6] font-bold border-b-2 border-[#3b84d6]"
                  : ""
              }`}
            >
              {name}
            </h3>
          </Link>

          {/* Odoo Dropdown */}
          {name === "Odoo" && isOdooDropdownOpen && (
            <AnimatePresence>
              <motion.div
                className="absolute top-full left-0 z-50 bg-white shadow-lg rounded-lg w-64"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="text-gray-700">
                  {/* Services We Offer */}
                  <li
                    className="relative py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 flex justify-between items-center"
                    onMouseEnter={() => handleDropdownEnter("Services")}
                    onMouseLeave={() => handleDropdownLeave("Services")}
                  >
                    <Link href="/servicesweoffer">Services We Offer</Link>
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
                    className="relative py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 flex justify-between items-center"
                    onMouseEnter={() => handleDropdownEnter("Apps")}
                    onMouseLeave={() => handleDropdownLeave("Apps")}
                  >
                    <Link href="/apps">Apps</Link>
                    <motion.span
                      animate={{ x: isOpen("Apps") ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2 hover:text-[#873070]"
                    >
                      <AiOutlineRight />
                    </motion.span>
                  </li>

                  {/* (Optional) Additional Items Under Odoo */}
                  {/* <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                    <Link href="/OdooVideos">Odoo Videos</Link>
                  </li> */}
                </ul>

                {/* Services Submenu */}
                {isServicesDropdownOpen && (
                  <AnimatePresence>
                    <motion.div
                      className="absolute top-2 left-full bg-white shadow-lg rounded-lg w-64"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      onMouseEnter={() => handleDropdownEnter("Services")}
                      onMouseLeave={() => handleDropdownLeave("Services")}
                    >
                      <ul className="text-gray-700">
                        {/* Consulting */}
                        <li
                          className="relative py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 flex justify-between items-center"
                          onMouseEnter={() =>
                            handleDropdownEnter("Consulting")
                          }
                          onMouseLeave={() =>
                            handleDropdownLeave("Consulting")
                          }
                        >
                          <span>Consulting</span>
                          <motion.span
                            animate={{ x: isOpen("Consulting") ? 5 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-2 hover:text-[#873070]"
                          >
                            <AiOutlineRight />
                          </motion.span>
                        </li>

                        {/* Implementation */}
                        <li
                          className="relative py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 flex justify-between items-center"
                          onMouseEnter={() =>
                            handleDropdownEnter("Implementation")
                          }
                          onMouseLeave={() =>
                            handleDropdownLeave("Implementation")
                          }
                        >
                          <span>Implementation</span>
                          <motion.span
                            animate={{ x: isOpen("Implementation") ? 5 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-2 hover:text-[#873070]"
                          >
                            <AiOutlineRight />
                          </motion.span>
                        </li>

                        {/* Support */}
                        <li
                          className="relative py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 flex justify-between items-center"
                          onMouseEnter={() => handleDropdownEnter("Support")}
                          onMouseLeave={() => handleDropdownLeave("Support")}
                        >
                          <span>Support</span>
                          <motion.span
                            animate={{ x: isOpen("Support") ? 5 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-2 hover:text-[#873070]"
                          >
                            <AiOutlineRight />
                          </motion.span>
                        </li>
                      </ul>

                      {/* Consulting -> Child */}
                      {isConsultingDropdownOpen && (
                        <AnimatePresence>
                          <motion.div
                            className="absolute top-0 left-full bg-white shadow-lg rounded-lg w-64"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            onMouseEnter={() =>
                              handleDropdownEnter("Consulting")
                            }
                            onMouseLeave={() =>
                              handleDropdownLeave("Consulting")
                            }
                          >
                            <ul className="text-gray-700">
                              <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                <Link href="/servicesweoffer/odoo-consulting">
                                  Odoo Consulting
                                </Link>
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                <Link href="/servicesweoffer/odoo-ecommerce">
                                  Odoo E-Commerce
                                </Link>
                              </li>
                            </ul>
                          </motion.div>
                        </AnimatePresence>
                      )}

                      {/* Implementation -> Child */}
                      {isImplementationDropdownOpen && (
                        <AnimatePresence>
                          <motion.div
                            className="absolute top-6 left-full bg-white shadow-lg rounded-lg w-64"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            onMouseEnter={() =>
                              handleDropdownEnter("Implementation")
                            }
                            onMouseLeave={() =>
                              handleDropdownLeave("Implementation")
                            }
                          >
                            <ul className="text-gray-700">
                              <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                <Link href="/servicesweoffer/odoo-integration">
                                  Odoo Integration
                                </Link>
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                <Link href="/servicesweoffer/odoo-implementation">
                                  Odoo Implementation
                                </Link>
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                <Link href="/servicesweoffer/odoo-customization">
                                  Odoo Customization
                                </Link>
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                <Link href="/servicesweoffer/odoo-development-services">
                                  Odoo Development
                                </Link>
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                <Link href="/servicesweoffer/odoo-configuration">
                                  Odoo Configuration
                                </Link>
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                <Link href="/servicesweoffer/odoo-offshore">
                                  Odoo Offshore Development
                                </Link>
                              </li>
                            </ul>
                          </motion.div>
                        </AnimatePresence>
                      )}

                      {/* Support -> Child */}
                      {isSupportDropdownOpen && (
                        <AnimatePresence>
                          <motion.div
                            className="absolute top-12 left-full bg-white shadow-lg rounded-lg w-64"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            onMouseEnter={() =>
                              handleDropdownEnter("Support")
                            }
                            onMouseLeave={() =>
                              handleDropdownLeave("Support")
                            }
                          >
                            <ul className="text-gray-700">
                              <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                <Link href="/servicesweoffer/odoo-support">
                                  Odoo Support
                                </Link>
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                <Link href="/servicesweoffer/odoo-migration">
                                  Odoo Migration
                                </Link>
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                <Link href="/servicesweoffer/odoo-maintenance">
                                  Odoo Maintenance
                                </Link>
                              </li>
                            </ul>
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* Apps Submenu */}
                {isAppsDropdownOpen && (
                  <AnimatePresence>
                    <motion.div
                      className="absolute top-[1.75rem] left-full bg-white shadow-lg rounded-lg w-[500px] p-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      onMouseEnter={() => handleDropdownEnter("Apps")}
                      onMouseLeave={() => handleDropdownLeave("Apps")}
                    >
                      {/* Parent div with two child divs */}
                      <div className="flex justify-between gap-8">
                        {/* FIRST COLUMN */}
                        <div className="w-1/2 flex flex-col space-y-1 text-gray-700">
                          {/* Odoo CRM */}
                          <li className=" hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-crm">Odoo CRM</Link>
                          </li>
                          {/* Odoo Sales */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-sales">Odoo Sales</Link>
                          </li>
                          {/* Odoo E-Commerce */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-e-commerce">
                              Odoo E-Commerce
                            </Link>
                          </li>
                          {/* Odoo Email Marketing */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-e-mail-marketing">
                              Odoo Email Marketing
                            </Link>
                          </li>

                          {/* Odoo Manufacturing (sub-sub-menu) */}
                          <li
                            className="relative hover:text-[#873070] transition-colors duration-200 list-none"
                            onMouseEnter={() =>
                              handleDropdownEnter("Manufacturing")
                            }
                            onMouseLeave={() =>
                              handleDropdownLeave("Manufacturing")
                            }
                          >
                            <Link href="/apps/odoo-manufacturing">
                              Odoo Manufacturing
                            </Link>
                            <motion.span
                              animate={{
                                x: isOpen("Manufacturing") ? 5 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                              className="ml-2 inline-block"
                            >
                              <AiOutlineRight />
                            </motion.span>

                            {/* Nested inside manufacturing */}
                            {isManufacturingDropdownOpen && (
                              <AnimatePresence>
                                <motion.div
                                  className="absolute top-0 right-full bg-white shadow-lg rounded-lg w-64"
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ul className="text-gray-700">
                                    <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                      <Link href="/apps/odoo-maintenance">
                                        Odoo Maintenance
                                      </Link>
                                    </li>
                                    <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                      <Link href="/apps/odoo-plm">
                                        Odoo PLM
                                      </Link>
                                    </li>
                                    <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
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
                            className="relative hover:text-[#873070] transition-colors duration-200 list-none"
                            onMouseEnter={() => handleDropdownEnter("HR")}
                            onMouseLeave={() => handleDropdownLeave("HR")}
                          >
                            <Link href="/apps/odoo-hr-management">
                              Odoo HR Management
                            </Link>
                            <motion.span
                              animate={{ x: isOpen("HR") ? 5 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-2 inline-block"
                            >
                              <AiOutlineRight />
                            </motion.span>

                            {/* Nested inside HR */}
                            {isHRDropdownOpen && (
                              <AnimatePresence>
                                <motion.div
                                  className="absolute top-0 right-full bg-white shadow-lg rounded-lg w-64"
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ul className="text-gray-700">
                                    <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                      <Link href="/apps/odoo-timeoff">
                                        Odoo Timeoff
                                      </Link>
                                    </li>
                                    <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                      <Link href="/apps/odoo-recruitment">
                                        Odoo Recruitment
                                      </Link>
                                    </li>
                                    <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                                      <Link href="/apps/odoo-appraisal">
                                        Odoo Appraisal
                                      </Link>
                                    </li>
                                  </ul>
                                </motion.div>
                              </AnimatePresence>
                            )}
                          </li>

                          {/* Odoo Project */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-project">Odoo Project</Link>
                          </li>
                          {/* Odoo Accounting */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-accounting">
                              Odoo Accounting
                            </Link>
                          </li>
                          {/* Odoo Inventory */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-inventory">Odoo Inventory</Link>
                          </li>
                          {/* Odoo Helpdesk */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-helpdesk">Odoo Helpdesk</Link>
                          </li>
                        </div>

                        {/* SECOND COLUMN */}
                        <div className="w-1/2 flex flex-col space-y-1 text-gray-700">
                          {/* Odoo Invoicing */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-invoicing">
                              Odoo Invoicing
                            </Link>
                          </li>
                          {/* Odoo Sales (again, per your request) */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-sales">Odoo Sales</Link>
                          </li>
                          {/* Odoo Purchase */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-purchase">Odoo Purchase</Link>
                          </li>
                          {/* Odoo Timesheet */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-timesheet">Odoo Timesheet</Link>
                          </li>
                          {/* Odoo Point of Sale */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-sales">
                              Odoo Point of Sale
                            </Link>
                          </li>
                          {/* Odoo Expenses */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-expenses">Odoo Expenses</Link>
                          </li>
                          {/* Odoo Events */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-event-management">
                              Odoo Events
                            </Link>
                          </li>
                          {/* Marketing Automation */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
                            <Link href="/apps/odoo-marketing-automation">
                              Marketing Automation
                            </Link>
                          </li>
                          {/* Odoo Documents */}
                          <li className="hover:text-[#873070] transition-colors duration-200 list-none">
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
