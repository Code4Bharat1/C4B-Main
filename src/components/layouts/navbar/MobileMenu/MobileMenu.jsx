"use client";
import React, { useState, useEffect } from "react";
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
  // Submenu states
  const [isOdooDropdownOpen, setIsOdooDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);
  const [isManufacturingDropdownOpen, setIsManufacturingDropdownOpen] = useState(false);
  const [isHRDropdownOpen, setIsHRDropdownOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Enhanced animations for better mobile feel
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const menuVariants = {
    hidden: { 
      x: "100%",
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  // Close all submenus
  const closeAllSubmenus = () => {
    setIsOdooDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsAppsDropdownOpen(false);
    setIsManufacturingDropdownOpen(false);
    setIsHRDropdownOpen(false);
  };

  // Enhanced toggle function with haptic feedback simulation
  const toggleDropdown = (dropdownName) => {
    // Add slight vibration for supported devices
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    switch (dropdownName) {
      case "Odoo":
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

  // Enhanced link click handler
  const handleMenuLinkClick = (e) => {
    closeAllSubmenus();
    handleLinkClick(e);
  };

  if (!isMenuOpen) return null;

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-50 shadow-2xl"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
              <h2 className="text-lg font-semibold text-[#112D4E]">Menu</h2>
              <motion.button
                className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                <MdClose className="w-6 h-6 text-[#112D4E]" />
              </motion.button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pb-6" style={{ maxHeight: 'calc(100vh - 80px)' }}>
              <div className="px-4 pt-2">
                {menuItems.map(({ name, path }, index) => {
                  if (name === "Odoo") {
                    return (
                      <motion.div
                        key={name}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                        className="mb-2"
                      >
                        {/* Main Odoo Button */}
                        <motion.button
                          onClick={() => toggleDropdown("Odoo")}
                          className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-all duration-200 ${
                            isOdooDropdownOpen 
                              ? "bg-purple-50 text-[#873070]" 
                              : "hover:bg-gray-50 text-gray-700"
                          }`}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="font-medium">Odoo</span>
                          <motion.span
                            animate={{ rotate: isOdooDropdownOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-lg"
                          >
                            <AiOutlineRight />
                          </motion.span>
                        </motion.button>

                        {/* Odoo Submenu */}
                        <AnimatePresence>
                          {isOdooDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden bg-gray-50 rounded-lg mt-1 ml-2"
                            >
                              <div className="p-3 space-y-1">
                                {/* Services We Offer */}
                                <div>
                                  <motion.button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleDropdown("Services");
                                    }}
                                    className={`w-full flex items-center justify-between p-3 rounded-md text-left transition-colors ${
                                      isServicesDropdownOpen
                                        ? "bg-white text-[#873070]"
                                        : "hover:bg-white text-gray-600"
                                    }`}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <Link 
                                      href="/servicesweoffer" 
                                      onClick={handleMenuLinkClick}
                                      className="flex-1 text-sm font-medium"
                                    >
                                      Services We Offer
                                    </Link>
                                    <motion.span
                                      animate={{ rotate: isServicesDropdownOpen ? 90 : 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="ml-2"
                                    >
                                      <AiOutlineRight className="w-4 h-4" />
                                    </motion.span>
                                  </motion.button>

                                  {/* Services Submenu */}
                                  <AnimatePresence>
                                    {isServicesDropdownOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden ml-4 mt-2"
                                      >
                                        <div className="space-y-1">
                                          {[
                                            { href: "/servicesweoffer/odoo-consulting", text: "Odoo Consulting" },
                                            { href: "/servicesweoffer/odoo-ecommerce", text: "Odoo E-Commerce" },
                                            { href: "/servicesweoffer/odoo-integration", text: "Odoo Integration" },
                                            { href: "/servicesweoffer/odoo-implementation", text: "Odoo Implementation" },
                                            { href: "/servicesweoffer/odoo-customization", text: "Odoo Customization" },
                                            { href: "/servicesweoffer/odoo-development-services", text: "Odoo Development" },
                                            { href: "/servicesweoffer/odoo-configuration", text: "Odoo Configuration" },
                                            { href: "/servicesweoffer/odoo-offshore", text: "Odoo Offshore Development" },
                                            { href: "/servicesweoffer/odoo-support", text: "Odoo Support" },
                                            { href: "/servicesweoffer/odoo-migration", text: "Odoo Migration" },
                                            { href: "/servicesweoffer/odoo-maintenance", text: "Odoo Maintenance" }
                                          ].map((service, idx) => (
                                            <Link
                                              key={idx}
                                              href={service.href}
                                              onClick={handleMenuLinkClick}
                                              className="block p-2 rounded-md text-xs text-gray-600 hover:bg-white hover:text-[#873070] transition-colors"
                                            >
                                              {service.text}
                                            </Link>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>

                                {/* Apps Section */}
                                <div>
                                  <motion.button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleDropdown("Apps");
                                    }}
                                    className={`w-full flex items-center justify-between p-3 rounded-md text-left transition-colors ${
                                      isAppsDropdownOpen
                                        ? "bg-white text-[#873070]"
                                        : "hover:bg-white text-gray-600"
                                    }`}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <Link 
                                      href="/apps" 
                                      onClick={handleMenuLinkClick}
                                      className="flex-1 text-sm font-medium"
                                    >
                                      Apps
                                    </Link>
                                    <motion.span
                                      animate={{ rotate: isAppsDropdownOpen ? 90 : 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="ml-2"
                                    >
                                      <AiOutlineRight className="w-4 h-4" />
                                    </motion.span>
                                  </motion.button>

                                  {/* Apps Submenu - Condensed for mobile */}
                                  <AnimatePresence>
                                    {isAppsDropdownOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden ml-4 mt-2"
                                      >
                                        <div className="space-y-1 max-h-60 overflow-y-auto">
                                          {/* Core Apps */}
                                          {[
                                            { href: "/apps/odoo-crm", text: "CRM" },
                                            { href: "/apps/odoo-sales", text: "Sales" },
                                            { href: "/apps/odoo-invoicing", text: "Invoicing" },
                                            { href: "/apps/odoo-purchase", text: "Purchase" },
                                            { href: "/apps/odoo-inventory", text: "Inventory" },
                                            { href: "/apps/odoo-accounting", text: "Accounting" },
                                            { href: "/apps/odoo-project", text: "Project" },
                                            { href: "/apps/odoo-timesheet", text: "Timesheet" },
                                            { href: "/apps/odoo-e-commerce", text: "E-Commerce" },
                                            { href: "/apps/odoo-helpdesk", text: "Helpdesk" }
                                          ].map((app, idx) => (
                                            <Link
                                              key={idx}
                                              href={app.href}
                                              onClick={handleMenuLinkClick}
                                              className="block p-2 rounded-md text-xs text-gray-600 hover:bg-white hover:text-[#873070] transition-colors"
                                            >
                                              {app.text}
                                            </Link>
                                          ))}
                                          
                                          {/* Manufacturing Apps */}
                                          <div className="pt-2 border-t border-gray-200">
                                            <p className="text-xs font-medium text-gray-500 px-2 pb-1">Manufacturing</p>
                                            {[
                                              { href: "/apps/odoo-manufacturing", text: "Manufacturing" },
                                              { href: "/apps/odoo-maintenance", text: "Maintenance" },
                                              { href: "/apps/odoo-plm", text: "PLM" },
                                              { href: "/apps/odoo-quality", text: "Quality" }
                                            ].map((app, idx) => (
                                              <Link
                                                key={idx}
                                                href={app.href}
                                                onClick={handleMenuLinkClick}
                                                className="block p-2 rounded-md text-xs text-gray-600 hover:bg-white hover:text-[#873070] transition-colors"
                                              >
                                                {app.text}
                                              </Link>
                                            ))}
                                          </div>

                                          {/* HR Apps */}
                                          <div className="pt-2 border-t border-gray-200">
                                            <p className="text-xs font-medium text-gray-500 px-2 pb-1">Human Resources</p>
                                            {[
                                              { href: "/apps/odoo-hr-management", text: "HR Management" },
                                              { href: "/apps/odoo-recruitment", text: "Recruitment" },
                                              { href: "/apps/odoo-timeoff", text: "Time Off" },
                                              { href: "/apps/odoo-appraisal", text: "Appraisal" }
                                            ].map((app, idx) => (
                                              <Link
                                                key={idx}
                                                href={app.href}
                                                onClick={handleMenuLinkClick}
                                                className="block p-2 rounded-md text-xs text-gray-600 hover:bg-white hover:text-[#873070] transition-colors"
                                              >
                                                {app.text}
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  } else {
                    // Regular menu items
                    return (
                      <motion.div
                        key={path}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                        className="mb-2"
                      >
                        <Link href={path} onClick={handleMenuLinkClick}>
                          <motion.div
                            className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                              pathname === path
                                ? "bg-blue-50 text-[#3b84d6] font-medium"
                                : "hover:bg-gray-50 text-gray-700"
                            }`}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="font-medium capitalize">{name}</span>
                            <LuArrowUpRight className="w-5 h-5 text-gray-400" />
                          </motion.div>
                        </Link>
                      </motion.div>
                    );
                  }
                })}
              </div>
            </div>

            {/* Footer - Optional */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <p className="text-xs text-gray-500 text-center">
                Swipe right or tap outside to close
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;