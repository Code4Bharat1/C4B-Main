"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { LuArrowUpRight } from "react-icons/lu";

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  pathname,
  menuItems,
  handleLinkClick,
}) => {
  // ---------- SUBMENU STATES (Mobile) ----------
  const [isOdooDropdownOpen, setIsOdooDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);
  const [isManufacturingDropdownOpen, setIsManufacturingDropdownOpen] =
    useState(false);
  const [isHRDropdownOpen, setIsHRDropdownOpen] = useState(false);

  // Framer Motion animations
  const navVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // Toggle any Odoo-level or nested submenu
  const toggleDropdown = (dropdownName) => {
    switch (dropdownName) {
      case "Odoo":
        // Toggling Odoo => close all Odoo submenus
        setIsServicesDropdownOpen(false);
        setIsAppsDropdownOpen(false);
        setIsManufacturingDropdownOpen(false);
        setIsHRDropdownOpen(false);
        setIsOdooDropdownOpen((prev) => !prev);
        break;
      case "Services":
        setIsServicesDropdownOpen((prev) => !prev);
        break;
      case "Apps":
        setIsManufacturingDropdownOpen(false);
        setIsHRDropdownOpen(false);
        setIsAppsDropdownOpen((prev) => !prev);
        break;
      case "Manufacturing":
        setIsManufacturingDropdownOpen((prev) => !prev);
        setIsHRDropdownOpen(false);
        break;
      case "HR":
        setIsHRDropdownOpen((prev) => !prev);
        setIsManufacturingDropdownOpen(false);
        break;
      default:
        break;
    }
  };

  if (!isMenuOpen) return null; // If menu is not open, don't render anything

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-white z-50 pt-16 overflow-y-auto"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={navVariants}
    >
      {/* Close Button */}
      <motion.button
        className="absolute top-5 right-5"
        onClick={() => setIsMenuOpen(false)}
        variants={navVariants}
      >
        <MdClose className="w-8 h-8 text-[#112D4E]" />
      </motion.button>

      {/* Mobile Menu Items */}
      <div className="flex flex-col items-start">
        {menuItems.map(({ name, path }) => {
          // Special handling for "Odoo"
          if (name === "Odoo") {
            return (
              <motion.div
                key={name}
                variants={navVariants}
                className="w-full border-b border-gray-300"
              >
                <div
                  onClick={() => toggleDropdown("Odoo")}
                  className={`text-lg my-4 py-4 px-6 w-full flex justify-between items-center ${
                    isOdooDropdownOpen ? "text-[#873070]" : "text-black"
                  }`}
                >
                  <h3 className="font-medium capitalize">Odoo</h3>
                  {/* Rotate arrow if open */}
                  <motion.span
                    animate={{ rotate: isOdooDropdownOpen ? 90 : 0 }}
                    className="ml-2 text-xl"
                  >
                    <AiOutlineRight />
                  </motion.span>
                </div>

                <AnimatePresence>
                  {isOdooDropdownOpen && (
                    <motion.div
                      className="bg-gray-50"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pl-6 py-2">
                        {/* Services We Offer */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown("Services");
                          }}
                          className={`flex justify-between items-center py-2 border-b border-gray-200 ${
                            isServicesDropdownOpen
                              ? "text-[#873070]"
                              : "text-gray-700"
                          }`}
                        >
                          <Link href="/servicesweoffer" onClick={handleLinkClick}>
                            Services We Offer
                          </Link>
                          <motion.span
                            animate={{ rotate: isServicesDropdownOpen ? 90 : 0 }}
                            className="ml-2"
                          >
                            <AiOutlineRight />
                          </motion.span>
                        </div>

                        <AnimatePresence>
                          {isServicesDropdownOpen && (
                            <motion.div
                              className="ml-4 bg-white"
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="p-2">
                                {/* Consulting Services - Direct Links */}
                                <Link
                                  href="/servicesweoffer/odoo-consulting"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070] text-gray-700">
                                    Odoo Consulting
                                  </div>
                                </Link>
                                <Link
                                  href="/servicesweoffer/odoo-ecommerce"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070] text-gray-700">
                                    Odoo E-Commerce
                                  </div>
                                </Link>

                                {/* Implementation Services - Direct Links */}
                                <Link
                                  href="/servicesweoffer/odoo-integration"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070] text-gray-700">
                                    Odoo Integration
                                  </div>
                                </Link>
                                <Link
                                  href="/servicesweoffer/odoo-implementation"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070] text-gray-700">
                                    Odoo Implementation
                                  </div>
                                </Link>
                                <Link
                                  href="/servicesweoffer/odoo-customization"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070] text-gray-700">
                                    Odoo Customization
                                  </div>
                                </Link>
                                <Link
                                  href="/servicesweoffer/odoo-development-services"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070] text-gray-700">
                                    Odoo Development
                                  </div>
                                </Link>
                                <Link
                                  href="/servicesweoffer/odoo-configuration"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070] text-gray-700">
                                    Odoo Configuration
                                  </div>
                                </Link>
                                <Link
                                  href="/servicesweoffer/odoo-offshore"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070] text-gray-700">
                                    Odoo Offshore Development
                                  </div>
                                </Link>

                                {/* Support Services - Direct Links */}
                                <Link
                                  href="/servicesweoffer/odoo-support"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070] text-gray-700">
                                    Odoo Support
                                  </div>
                                </Link>
                                <Link
                                  href="/servicesweoffer/odoo-migration"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070] text-gray-700">
                                    Odoo Migration
                                  </div>
                                </Link>
                                <Link
                                  href="/servicesweoffer/odoo-maintenance"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070] text-gray-700">
                                    Odoo Maintenance
                                  </div>
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Apps Dropdown */}
                        <div
                          className="flex justify-between items-center py-2 border-b border-gray-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown("Apps");
                          }}
                        >
                          <Link
                            href="/apps"
                            onClick={handleLinkClick}
                            className={`${
                              isAppsDropdownOpen
                                ? "text-[#873070]"
                                : "text-gray-700"
                            }`}
                          >
                            Apps
                          </Link>
                          <motion.span
                            animate={{ rotate: isAppsDropdownOpen ? 90 : 0 }}
                            className="ml-2 "
                          >
                            <AiOutlineRight />
                          </motion.span>
                        </div>

                        <AnimatePresence>
                          {isAppsDropdownOpen && (
                            <motion.div
                              className="ml-4 bg-white"
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="p-2 text-gray-700">
                                <Link
                                  href="/apps/odoo-crm"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo CRM
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-invoicing"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo Invoicing
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-sales"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo Sales
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-purchase"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo Purchase
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-e-commerce"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo E-Commerce
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-timesheet"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo Timesheet
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-e-mail-marketing"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo Email Marketing
                                  </div>
                                </Link>

                                {/* Manufacturing */}
                                <div
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleDropdown("Manufacturing");
                                  }}
                                  className={`flex justify-between items-center py-2 border-b border-gray-200 ${
                                    isManufacturingDropdownOpen
                                      ? "text-[#873070]"
                                      : "text-gray-700"
                                  }`}
                                >
                                  <Link
                                    href="/apps/odoo-manufacturing"
                                    onClick={handleLinkClick}
                                  >
                                    <span>Odoo Manufacturing</span>
                                  </Link>
                                  <motion.span
                                    animate={{
                                      rotate: isManufacturingDropdownOpen
                                        ? 90
                                        : 0,
                                    }}
                                    className="ml-2"
                                  >
                                    <AiOutlineRight />
                                  </motion.span>
                                </div>

                                <AnimatePresence>
                                  {isManufacturingDropdownOpen && (
                                    <motion.div
                                      className="ml-4 bg-gray-100"
                                      initial={{ height: 0 }}
                                      animate={{ height: "auto" }}
                                      exit={{ height: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <div className="p-2 text-gray-700">
                                        <Link
                                          href="/apps/odoo-maintenance"
                                          onClick={handleLinkClick}
                                        >
                                          <div className="py-2 hover:text-[#873070]">
                                            Odoo Maintenance
                                          </div>
                                        </Link>
                                        <Link
                                          href="/apps/odoo-plm"
                                          onClick={handleLinkClick}
                                        >
                                          <div className="py-2 hover:text-[#873070]">
                                            Odoo PLM
                                          </div>
                                        </Link>
                                        <Link
                                          href="/apps/odoo-quality"
                                          onClick={handleLinkClick}
                                        >
                                          <div className="py-2 hover:text-[#873070]">
                                            Odoo Quality
                                          </div>
                                        </Link>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>

                                {/* HR */}
                                <div
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleDropdown("HR");
                                  }}
                                  className={`flex justify-between items-center py-2 border-b border-gray-200 ${
                                    isHRDropdownOpen
                                      ? "text-[#873070]"
                                      : "text-gray-700"
                                  }`}
                                >
                                  <Link
                                    href="/apps/odoo-hr-management"
                                    onClick={handleLinkClick}
                                  >
                                    <span>Odoo HR Management</span>
                                  </Link>
                                  <motion.span
                                    animate={{ rotate: isHRDropdownOpen ? 90 : 0 }}
                                    className="ml-2"
                                  >
                                    <AiOutlineRight />
                                  </motion.span>
                                </div>
                                <AnimatePresence>
                                  {isHRDropdownOpen && (
                                    <motion.div
                                      className="ml-4 bg-gray-100"
                                      initial={{ height: 0 }}
                                      animate={{ height: "auto" }}
                                      exit={{ height: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <div className="p-2 text-gray-700">
                                        <Link
                                          href="/apps/odoo-timeoff"
                                          onClick={handleLinkClick}
                                        >
                                          <div className="py-2 hover:text-[#873070]">
                                            Odoo Timeoff
                                          </div>
                                        </Link>
                                        <Link
                                          href="/apps/odoo-recruitment"
                                          onClick={handleLinkClick}
                                        >
                                          <div className="py-2 hover:text-[#873070]">
                                            Odoo Recruitment
                                          </div>
                                        </Link>
                                        <Link
                                          href="/apps/odoo-appraisal"
                                          onClick={handleLinkClick}
                                        >
                                          <div className="py-2 hover:text-[#873070]">
                                            Odoo Appraisal
                                          </div>
                                        </Link>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>

                                <Link
                                  href="/apps/odoo-project"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo Project
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-sales"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo Point of Sale
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-accounting"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo Accounting
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-expenses"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo Expenses
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-inventory"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo Inventory
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-event-management"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo Events
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-helpdesk"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo Helpdesk
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-marketing-automation"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Marketing Automation
                                  </div>
                                </Link>
                                <Link
                                  href="/apps/odoo-documents"
                                  onClick={handleLinkClick}
                                >
                                  <div className="py-2 hover:text-[#873070]">
                                    Odoo Documents
                                  </div>
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* <Link href="/OdooVideos" onClick={handleLinkClick}>
                          <div className="py-2 text-gray-700 hover:text-[#873070] transition-colors">
                            Odoo Videos
                          </div>
                        </Link> */}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          } else {
            // Normal top-level items
            return (
              <motion.div key={path} variants={navVariants} className="w-full">
                <Link href={path} onClick={handleLinkClick}>
                  <div
                    className={`text-lg my-4 py-4 px-6 w-full border-b-2 border-gray-300 flex justify-between items-center ${
                      pathname === path
                        ? "text-[#3b84d6] font-bold"
                        : "text-black"
                    }`}
                  >
                    <h3 className="font-medium capitalize">{name}</h3>
                    <LuArrowUpRight className="w-6 h-6 text-black" />
                  </div>
                </Link>
              </motion.div>
            );
          }
        })}
      </div>
    </motion.div>
  );
};

export default MobileMenu;