"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";
import { AiOutlineRight } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

const Navbar = () => {
  // Mobile Menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ---------- SUBMENU STATES (both Desktop & Mobile) ----------
  // Odoo top-level
  const [isOdooDropdownOpen, setIsOdooDropdownOpen] = useState(false);

  // Under Odoo => Services We Offer => {Consulting, Implementation, Support}
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isConsultingDropdownOpen, setIsConsultingDropdownOpen] =
    useState(false);
  const [isImplementationDropdownOpen, setIsImplementationDropdownOpen] =
    useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);

  // NEW: Apps submenu under Odoo => Apps => sub-items & sub-sub-sub
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);
  // Nested submenus for Odoo Manufacturing, Odoo HR Management
  const [isManufacturingDropdownOpen, setIsManufacturingDropdownOpen] =
    useState(false);
  const [isHRDropdownOpen, setIsHRDropdownOpen] = useState(false);

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);

  // Current route
  const pathname = usePathname();

  // Detect if screen is <= 768px on mount & resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on direct link click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Helper: Convert a name to a URL-friendly path
  const convertToPath = (name) => `/${name.toLowerCase().replace(/\s+/g, "")}`;

  // Framer Motion animations
  const navVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // Main Menu Items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: convertToPath("About Us") },
    { name: "Odoo", path: convertToPath("servicesweoffer") },
    { name: "Clients", path: convertToPath("Clients") },
    { name: "Approach", path: convertToPath("Approach") },
    { name: "Services", path: convertToPath("Services") },
    { name: "", path: convertToPath("Contact Us") },
  ];

  /* ---------------------------------------------------------
   * DESKTOP (Hover) LOGIC
   * --------------------------------------------------------- */
  const handleDropdownEnter = (dropdownName) => {
    if (!isMobile) {
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
    }
  };

  const handleDropdownLeave = (dropdownName) => {
    if (!isMobile) {
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
    }
  };

  // Helper to see if a sub-dropdown is open (desktop)
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

  /* ---------------------------------------------------------
   * MOBILE (Click) LOGIC
   * --------------------------------------------------------- */
  // Close all submenus under Odoo
  const closeAllOdooSubmenus = () => {
    setIsServicesDropdownOpen(false);
    setIsConsultingDropdownOpen(false);
    setIsImplementationDropdownOpen(false);
    setIsSupportDropdownOpen(false);
    setIsAppsDropdownOpen(false);
    setIsManufacturingDropdownOpen(false);
    setIsHRDropdownOpen(false);
  };

  // Toggle any Odoo-level or nested submenu
  const toggleDropdown = (dropdownName) => {
    if (!isMobile) return; // Only run on mobile

    switch (dropdownName) {
      case "Odoo":
        // Toggling Odoo => close all Odoo submenus
        closeAllOdooSubmenus();
        setIsOdooDropdownOpen((prev) => !prev);
        break;
      case "Services":
        setIsConsultingDropdownOpen(false);
        setIsImplementationDropdownOpen(false);
        setIsSupportDropdownOpen(false);
        setIsServicesDropdownOpen((prev) => !prev);
        break;
      case "Consulting":
        setIsImplementationDropdownOpen(false);
        setIsSupportDropdownOpen(false);
        setIsConsultingDropdownOpen((prev) => !prev);
        break;
      case "Implementation":
        setIsConsultingDropdownOpen(false);
        setIsSupportDropdownOpen(false);
        setIsImplementationDropdownOpen((prev) => !prev);
        break;
      case "Support":
        setIsConsultingDropdownOpen(false);
        setIsImplementationDropdownOpen(false);
        setIsSupportDropdownOpen((prev) => !prev);
        break;
      case "Apps":
        setIsManufacturingDropdownOpen(false);
        setIsHRDropdownOpen(false);
        setIsAppsDropdownOpen((prev) => !prev);
        break;
      case "Manufacturing":
        setIsHRDropdownOpen(false);
        setIsManufacturingDropdownOpen((prev) => !prev);
        break;
      case "HR":
        setIsManufacturingDropdownOpen(false);
        setIsHRDropdownOpen((prev) => !prev);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Head>
        <title>Navbar Example</title>
        <meta name="description" content="Your website description" />
      </Head>

      <nav className="w-full h-[15%] flex justify-between items-center px-5 md:px-[6em] shadow-md fixed z-50 bg-white">
        {/* LOGO Section */}
        <motion.div
          className="w-full md:w-[15vw] h-[10vw] flex justify-between items-center"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/images/logo1.png"
              alt="Logo"
              width={150}
              height={150}
              className="w-[100%] h-[55%] md:w-[100%] md:h-[100vh] object-contain"
            />
          </Link>
        </motion.div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BiMenuAltRight className="w-8 h-8 text-[#112D4E]" />
        </div>

        {/* --------------------- MOBILE MENU --------------------- */}
        {isMobile && isMenuOpen && (
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
                                <Link
                                  href="/servicesweoffer"
                                  onClick={handleLinkClick}
                                >
                                  Services We Offer
                                </Link>
                                <motion.span
                                  animate={{
                                    rotate: isServicesDropdownOpen ? 90 : 0,
                                  }}
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
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleDropdown("Consulting");
                                        }}
                                        className={`flex justify-between items-center py-2 border-b border-gray-200 ${
                                          isConsultingDropdownOpen
                                            ? "text-[#873070]"
                                            : "text-gray-700"
                                        }`}
                                      >
                                        <span>Consulting</span>
                                        <motion.span
                                          animate={{
                                            rotate: isConsultingDropdownOpen
                                              ? 90
                                              : 0,
                                          }}
                                          className="ml-2"
                                        >
                                          <AiOutlineRight />
                                        </motion.span>
                                      </div>
                                      <AnimatePresence>
                                        {isConsultingDropdownOpen && (
                                          <motion.div
                                            className="ml-4 bg-gray-100"
                                            initial={{ height: 0 }}
                                            animate={{ height: "auto" }}
                                            exit={{ height: 0 }}
                                            transition={{ duration: 0.3 }}
                                          >
                                            <div className="p-2 text-gray-700">
                                              <Link
                                                href="/servicesweoffer/odoo-consulting"
                                                onClick={handleLinkClick}
                                              >
                                                <div className="py-2 hover:text-[#873070]">
                                                  Odoo Consulting
                                                </div>
                                              </Link>
                                              <Link
                                                href="/servicesweoffer/odoo-ecommerce"
                                                onClick={handleLinkClick}
                                              >
                                                <div className="py-2 hover:text-[#873070]">
                                                  Odoo E-Commerce
                                                </div>
                                              </Link>
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>

                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleDropdown("Implementation");
                                        }}
                                        className={`flex justify-between items-center py-2 border-b border-gray-200 ${
                                          isImplementationDropdownOpen
                                            ? "text-[#873070]"
                                            : "text-gray-700"
                                        }`}
                                      >
                                        <span>Implementation</span>
                                        <motion.span
                                          animate={{
                                            rotate: isImplementationDropdownOpen
                                              ? 90
                                              : 0,
                                          }}
                                          className="ml-2"
                                        >
                                          <AiOutlineRight />
                                        </motion.span>
                                      </div>
                                      <AnimatePresence>
                                        {isImplementationDropdownOpen && (
                                          <motion.div
                                            className="ml-4 bg-gray-100"
                                            initial={{ height: 0 }}
                                            animate={{ height: "auto" }}
                                            exit={{ height: 0 }}
                                            transition={{ duration: 0.3 }}
                                          >
                                            <div className="p-2 text-gray-700">
                                              <Link
                                                href="/servicesweoffer/odoo-integration"
                                                onClick={handleLinkClick}
                                              >
                                                <div className="py-2 hover:text-[#873070]">
                                                  Odoo Integration
                                                </div>
                                              </Link>
                                              <Link
                                                href="/servicesweoffer/odoo-implementation"
                                                onClick={handleLinkClick}
                                              >
                                                <div className="py-2 hover:text-[#873070]">
                                                  Odoo Implementation
                                                </div>
                                              </Link>
                                              <Link
                                                href="/servicesweoffer/odoo-customization"
                                                onClick={handleLinkClick}
                                              >
                                                <div className="py-2 hover:text-[#873070]">
                                                  Odoo Customization
                                                </div>
                                              </Link>
                                              <Link
                                                href="/servicesweoffer/odoo-development-services"
                                                onClick={handleLinkClick}
                                              >
                                                <div className="py-2 hover:text-[#873070]">
                                                  Odoo Development
                                                </div>
                                              </Link>
                                              <Link
                                                href="/servicesweoffer/odoo-configuration"
                                                onClick={handleLinkClick}
                                              >
                                                <div className="py-2 hover:text-[#873070]">
                                                  Odoo Configuration
                                                </div>
                                              </Link>
                                              <Link
                                                href="/servicesweoffer/odoo-offshore"
                                                onClick={handleLinkClick}
                                              >
                                                <div className="py-2 hover:text-[#873070]">
                                                  Odoo Offshore Development
                                                </div>
                                              </Link>
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>

                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleDropdown("Support");
                                        }}
                                        className={`flex justify-between items-center py-2 border-b border-gray-200 ${
                                          isSupportDropdownOpen
                                            ? "text-[#873070]"
                                            : "text-gray-700"
                                        }`}
                                      >
                                        <span>Support</span>
                                        <motion.span
                                          animate={{
                                            rotate: isSupportDropdownOpen
                                              ? 90
                                              : 0,
                                          }}
                                          className="ml-2"
                                        >
                                          <AiOutlineRight />
                                        </motion.span>
                                      </div>
                                      <AnimatePresence>
                                        {isSupportDropdownOpen && (
                                          <motion.div
                                            className="ml-4 bg-gray-100"
                                            initial={{ height: 0 }}
                                            animate={{ height: "auto" }}
                                            exit={{ height: 0 }}
                                            transition={{ duration: 0.3 }}
                                          >
                                            <div className="p-2 text-gray-700">
                                              <Link
                                                href="/servicesweoffer/odoo-support"
                                                onClick={handleLinkClick}
                                              >
                                                <div className="py-2 hover:text-[#873070]">
                                                  Odoo Support
                                                </div>
                                              </Link>
                                              <Link
                                                href="/servicesweoffer/odoo-migration"
                                                onClick={handleLinkClick}
                                              >
                                                <div className="py-2 hover:text-[#873070]">
                                                  Odoo Migration
                                                </div>
                                              </Link>
                                              <Link
                                                href="/servicesweoffer/odoo-maintenance"
                                                onClick={handleLinkClick}
                                              >
                                                <div className="py-2 hover:text-[#873070]">
                                                  Odoo Maintenance
                                                </div>
                                              </Link>
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>

                              {/* ------------------------------------------------
            APPS DROPDOWN (MOBILE)
          ------------------------------------------------- */}
                              <div
                                className="flex justify-between items-center py-2 border-b border-gray-200"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleDropdown("Apps");
                                }}
                              >
                                {/* Clicking on this text goes to "/apps" */}
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
                                {/* Clicking on arrow toggles the submenu */}
                                <motion.span
                                  animate={{
                                    rotate: isAppsDropdownOpen ? 90 : 0,
                                  }}
                                  className="ml-2 text-xl cursor-pointer"
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
                                        <span>Odoo Manufacturing</span>
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
                                        <span>Odoo HR Management</span>
                                        <motion.span
                                          animate={{
                                            rotate: isHRDropdownOpen ? 90 : 0,
                                          }}
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
                                      <Link href="#" onClick={handleLinkClick}>
                                        <div className="py-2 hover:text-[#873070]">
                                          Odoo Point of Sale
                                        </div>
                                      </Link>
                                      <Link href="#" onClick={handleLinkClick}>
                                        <div className="py-2 hover:text-[#873070]">
                                          Odoo Accounting
                                        </div>
                                      </Link>
                                      <Link href="#" onClick={handleLinkClick}>
                                        <div className="py-2 hover:text-[#873070]">
                                          Odoo Expenses
                                        </div>
                                      </Link>
                                      <Link href="#" onClick={handleLinkClick}>
                                        <div className="py-2 hover:text-[#873070]">
                                          Odoo Inventory
                                        </div>
                                      </Link>
                                      <Link href="#" onClick={handleLinkClick}>
                                        <div className="py-2 hover:text-[#873070]">
                                          Odoo Events
                                        </div>
                                      </Link>
                                      <Link href="#" onClick={handleLinkClick}>
                                        <div className="py-2 hover:text-[#873070]">
                                          Odoo Helpdesk
                                        </div>
                                      </Link>
                                      <Link href="#" onClick={handleLinkClick}>
                                        <div className="py-2 hover:text-[#873070]">
                                          Marketing Automation
                                        </div>
                                      </Link>
                                      <Link href="#" onClick={handleLinkClick}>
                                        <div className="py-2 hover:text-[#873070]">
                                          Odoo Documents
                                        </div>
                                      </Link>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>

                              <Link href="#" onClick={handleLinkClick}>
                                <div className="py-2 text-gray-700 hover:text-[#873070] transition-colors">
                                  Industries We Cater
                                </div>
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                } else {
                  // Normal top-level items
                  return (
                    <motion.div
                      key={path}
                      variants={navVariants}
                      className="w-full"
                    >
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
        )}

        {/* --------------------- DESKTOP (HOVER) LINKS --------------------- */}
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

                      {/* --------------------
      APPS (DESKTOP)
      ------------------- */}
                      <li
                        className="relative py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 flex justify-between items-center"
                        onMouseEnter={() => handleDropdownEnter("Apps")}
                        onMouseLeave={() => handleDropdownLeave("Apps")}
                      >
                        {/* Clicking on text => /apps */}
                        <Link href="/apps">Apps</Link>
                        {/* Hover opens the submenu */}
                        <motion.span
                          animate={{ x: isOpen("Apps") ? 5 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-2 hover:text-[#873070]"
                        >
                          <AiOutlineRight />
                        </motion.span>
                      </li>

                      <li className="py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200">
                        <Link href="/odoo/industries">Industries We Cater</Link>
                      </li>
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
                                animate={{
                                  x: isOpen("Implementation") ? 5 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                                className="ml-2 hover:text-[#873070]"
                              >
                                <AiOutlineRight />
                              </motion.span>
                            </li>

                            {/* Support */}
                            <li
                              className="relative py-2 px-4 hover:bg-gray-100 hover:text-[#873070] transition-colors duration-200 flex justify-between items-center"
                              onMouseEnter={() =>
                                handleDropdownEnter("Support")
                              }
                              onMouseLeave={() =>
                                handleDropdownLeave("Support")
                              }
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

                    {/* Apps Submenu (Desktop) */}
                    {isAppsDropdownOpen && (
                      <AnimatePresence>
                        <motion.div
                          className="absolute top-[1.75rem] left-full bg-white shadow-lg rounded-lg w-96"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          onMouseEnter={() => handleDropdownEnter("Apps")}
                          onMouseLeave={() => handleDropdownLeave("Apps")}
                        >
                          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 p-4 text-gray-700">
                            <li className="hover:text-[#873070]">
                              <Link href="/apps/odoo-crm">Odoo CRM</Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="/apps/odoo-invoicing">
                                Odoo Invoicing
                              </Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="/apps/odoo-sales">Odoo Sales</Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="/apps/odoo-purchase">
                                Odoo Purchase
                              </Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="/apps/odoo-e-commerce">
                                Odoo E-Commerce
                              </Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="/apps/odoo-timesheet">
                                Odoo Timesheet
                              </Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="/apps/odoo-e-mail-marketing">
                                Odoo Email Marketing
                              </Link>
                            </li>

                            {/* Odoo Manufacturing (Desktop) */}
                            <li
                              className="relative hover:text-[#873070] col-span-2 flex justify-between items-center py-2 px-4 bg-white"
                              onMouseEnter={() =>
                                handleDropdownEnter("Manufacturing")
                              }
                              onMouseLeave={() =>
                                handleDropdownLeave("Manufacturing")
                              }
                            >
                              <span>Odoo Manufacturing</span>
                              <motion.span
                                animate={{ x: isOpen("Manufacturing") ? 5 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-2"
                              >
                                <AiOutlineRight />
                              </motion.span>

                              {isManufacturingDropdownOpen && (
                                <AnimatePresence>
                                  <motion.div
                                    className="absolute top-0 left-full bg-white shadow-lg rounded-lg w-64"
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

                            {/* Odoo HR Management (Desktop) */}
                            <li
                              className="relative hover:text-[#873070] col-span-2 flex justify-between items-center py-2 px-4 bg-white"
                              onMouseEnter={() => handleDropdownEnter("HR")}
                              onMouseLeave={() => handleDropdownLeave("HR")}
                            >
                              <span>Odoo HR Management</span>
                              <motion.span
                                animate={{ x: isOpen("HR") ? 5 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-2"
                              >
                                <AiOutlineRight />
                              </motion.span>

                              {isHRDropdownOpen && (
                                <AnimatePresence>
                                  <motion.div
                                    className="absolute top-0 left-full bg-white shadow-lg rounded-lg w-64"
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

                            <li className="hover:text-[#873070]">
                              <Link href="/apps/odoo-project">
                                Odoo Project
                              </Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="#">Odoo Point of Sale</Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="#">Odoo Accounting</Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="#">Odoo Expenses</Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="#">Odoo Inventory</Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="#">Odoo Events</Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="#">Odoo Helpdesk</Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="#">Marketing Automation</Link>
                            </li>
                            <li className="hover:text-[#873070]">
                              <Link href="#">Odoo Documents</Link>
                            </li>
                          </ul>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop "Get In Touch" Button */}
        <motion.div
          className="hidden md:block"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <Link href={menuItems[6].path} onClick={handleLinkClick}>
            <motion.button
              className="btn text-[1vw] font-medium border-[2.5px] border-[#112D4E] px-10 py-2 rounded-md transition-all duration-300 ease-in-out"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#112D4E",
                color: "#ffffff",
                borderColor: "#ffffff",
              }}
              variants={navVariants}
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
