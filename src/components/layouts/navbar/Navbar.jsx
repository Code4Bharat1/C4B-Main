"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

const Navbar = () => {
  // Main state for mobile menu and dropdowns
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOdooDropdownOpen, setIsOdooDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isConsultingDropdownOpen, setIsConsultingDropdownOpen] = useState(false);
  const [isImplementationDropdownOpen, setIsImplementationDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // Refs to store timeouts for delayed closing (1 second)
  const odooTimeoutRef = useRef(null);
  const servicesTimeoutRef = useRef(null);
  const consultingTimeoutRef = useRef(null);
  const implementationTimeoutRef = useRef(null);
  const supportTimeoutRef = useRef(null);

  // Check responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Convert a name to a URL-friendly path (if needed)
  const convertToPath = (name) =>
    `/${name.toLowerCase().replace(/\s+/g, "")}`;

  // Framer Motion variants for smooth animations
  const navVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  // Define main menu items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: convertToPath("About Us") },
    { name: "Odoo", path: convertToPath("servicesweoffer") },
    { name: "Clients", path: convertToPath("Clients") },
    { name: "Approach", path: convertToPath("Approach") },
    { name: "Services", path: convertToPath("Services") },
    { name: "", path: convertToPath("Contact Us") },
  ];

  // --- Dropdown Handlers with Delay ---

  // On mouse enter: clear any timeout and open immediately.
  const handleDropdownHover = (dropdownName) => {
    switch (dropdownName) {
      case "Odoo":
        if (odooTimeoutRef.current) clearTimeout(odooTimeoutRef.current);
        setIsOdooDropdownOpen(true);
        break;
      case "Services":
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        setIsServicesDropdownOpen(true);
        break;
      case "Consulting":
        if (consultingTimeoutRef.current) clearTimeout(consultingTimeoutRef.current);
        setIsConsultingDropdownOpen(true);
        break;
      case "Implementation":
        if (implementationTimeoutRef.current)
          clearTimeout(implementationTimeoutRef.current);
        setIsImplementationDropdownOpen(true);
        break;
      case "Support":
        if (supportTimeoutRef.current) clearTimeout(supportTimeoutRef.current);
        setIsSupportDropdownOpen(true);
        break;
      default:
        break;
    }
  };

  // On mouse leave: set a 1-second timeout to close.
  const handleDropdownLeave = (dropdownName) => {
    switch (dropdownName) {
      case "Odoo":
        odooTimeoutRef.current = setTimeout(() => {
          setIsOdooDropdownOpen(false);
        }, 1000);
        break;
      case "Services":
        servicesTimeoutRef.current = setTimeout(() => {
          setIsServicesDropdownOpen(false);
        }, 1000);
        break;
      case "Consulting":
        consultingTimeoutRef.current = setTimeout(() => {
          setIsConsultingDropdownOpen(false);
        }, 1000);
        break;
      case "Implementation":
        implementationTimeoutRef.current = setTimeout(() => {
          setIsImplementationDropdownOpen(false);
        }, 1000);
        break;
      case "Support":
        supportTimeoutRef.current = setTimeout(() => {
          setIsSupportDropdownOpen(false);
        }, 1000);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* Use Next.js Head for meta information */}
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

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BiMenuAltRight className="w-8 h-8 text-[#112D4E]" />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            <motion.button
              className="absolute top-5 right-5"
              onClick={() => setIsMenuOpen(false)}
              variants={navVariants}
            >
              <MdClose className="w-8 h-8 text-[#112D4E]" />
            </motion.button>
            {menuItems.map(({ name, path }) => (
              <motion.div key={path} variants={navVariants} className="w-full">
                <Link href={path} onClick={handleLinkClick}>
                  <div
                    className={`text-lg my-4 py-4 px-6 w-full border-b-2 border-gray-300 flex justify-between items-center ${
                      pathname === path ? "text-[#3b84d6] font-bold" : "text-black"
                    }`}
                  >
                    <h3 className="font-medium capitalize">{name}</h3>
                    <LuArrowUpRight className="w-6 h-6 text-black" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Desktop Links Section */}
        <motion.div
          className="hidden md:flex gap-[3em] mr-[10em]"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          {menuItems.slice(0, 7).map(({ name, path }) => (
            <motion.div
              key={path}
              variants={navVariants}
              className="relative group"
              onMouseEnter={() => handleDropdownHover(name)}
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

              {/* Odoo Dropdown (Main Dropdown) */}
              {name === "Odoo" && isOdooDropdownOpen && (
                <AnimatePresence>
                  <motion.div
                    className="absolute left-0 z-50 bg-white shadow-lg rounded-lg w-64 mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => {
                      if (odooTimeoutRef.current) clearTimeout(odooTimeoutRef.current);
                      setIsOdooDropdownOpen(true);
                    }}
                    onMouseLeave={() => handleDropdownLeave("Odoo")}
                  >
                    <ul className="text-gray-700">
                      <li
                        className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200"
                        onMouseEnter={() => handleDropdownHover("Services")}
                        onMouseLeave={() => handleDropdownLeave("Services")}
                      >
                        <Link href="/servicesweoffer">Services We Offer</Link>
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200">
                        <Link href="/odoo/apps">Apps</Link>
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200">
                        <Link href="/odoo/industries">Industries We Cater</Link>
                      </li>
                    </ul>

                    {/* Sub-dropdown for "Services We Offer" */}
                    {isServicesDropdownOpen && (
                      <AnimatePresence>
                        <motion.div
                          className="absolute left-64 top-0 bg-white shadow-lg rounded-lg w-64 mt-2"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          onMouseEnter={() => {
                            if (servicesTimeoutRef.current)
                              clearTimeout(servicesTimeoutRef.current);
                            setIsServicesDropdownOpen(true);
                          }}
                          onMouseLeave={() => handleDropdownLeave("Services")}
                        >
                          <ul className="text-gray-700">
                            <li
                              className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200"
                              onMouseEnter={() => handleDropdownHover("Consulting")}
                              onMouseLeave={() => handleDropdownLeave("Consulting")}
                            >Consulting
                            </li>
                            <li
                              className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200"
                              onMouseEnter={() => handleDropdownHover("Implementation")}
                              onMouseLeave={() => handleDropdownLeave("Implementation")}
                            >Implementation
                            </li>
                            <li
                              className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200"
                              onMouseEnter={() => handleDropdownHover("Support")}
                              onMouseLeave={() => handleDropdownLeave("Support")}
                            >Support
                            </li>
                          </ul>

                          {/* Nested sub-dropdown for Consulting */}
                          {isConsultingDropdownOpen && (
                            <AnimatePresence>
                              <motion.div
                                className="absolute left-64 top-0 bg-white shadow-lg rounded-lg w-64 mt-2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                onMouseEnter={() => {
                                  if (consultingTimeoutRef.current)
                                    clearTimeout(consultingTimeoutRef.current);
                                  setIsConsultingDropdownOpen(true);
                                }}
                                onMouseLeave={() => handleDropdownLeave("Consulting")}
                              >
                                <ul className="text-gray-700">
                                  <li className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200">
                                    <Link href="/servicesweoffer/odoo-consulting">
                                      Odoo Consulting
                                    </Link>
                                  </li>
                                  <li className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200">
                                    <Link href="/servicesweoffer/odoo-ecommerce">
                                      Odoo E-Commerce
                                    </Link>
                                  </li>
                                </ul>
                              </motion.div>
                            </AnimatePresence>
                          )}

                          {/* Nested sub-dropdown for Implementation */}
                          {isImplementationDropdownOpen && (
                            <AnimatePresence>
                              <motion.div
                                className="absolute left-64 top-0 bg-white shadow-lg rounded-lg w-64 mt-2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                onMouseEnter={() => {
                                  if (implementationTimeoutRef.current)
                                    clearTimeout(implementationTimeoutRef.current);
                                  setIsImplementationDropdownOpen(true);
                                }}
                                onMouseLeave={() => handleDropdownLeave("Implementation")}
                              >
                                <ul className="text-gray-700">
                                  <li className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200">
                                    <Link href="/servicesweoffer/odoo-integration">
                                      Odoo Integration
                                    </Link>
                                  </li>
                                  <li className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200">
                                    <Link href="/servicesweoffer/odoo-implementation">
                                      Odoo Implementation
                                    </Link>
                                  </li>
                                  <li className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200">
                                    <Link href="/servicesweoffer/odoo-customization">
                                      Odoo Customization
                                    </Link>
                                  </li>
                                  <li className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200">
                                    <Link href="/servicesweoffer/odoo-development-services">
                                      Odoo Development
                                    </Link>
                                  </li>
                                  <li className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200">
                                    <Link href="/servicesweoffer/odoo-configuration">
                                      Odoo Configuration
                                    </Link>
                                  </li>
                                  <li className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200">
                                    <Link href="/servicesweoffer/odoo-offshore">
                                      Odoo Offshore Development
                                    </Link>
                                  </li>
                                </ul>
                              </motion.div>
                            </AnimatePresence>
                          )}

                          {/* Nested sub-dropdown for Support */}
                          {isSupportDropdownOpen && (
                            <AnimatePresence>
                              <motion.div
                                className="absolute left-64 top-0 bg-white shadow-lg rounded-lg w-64 mt-2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                onMouseEnter={() => {
                                  if (supportTimeoutRef.current)
                                    clearTimeout(supportTimeoutRef.current);
                                  setIsSupportDropdownOpen(true);
                                }}
                                onMouseLeave={() => handleDropdownLeave("Support")}
                              >
                                <ul className="text-gray-700">
                                  <li className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200">
                                    <Link href="/servicesweoffer/odoo-support">
                                      Odoo Support
                                    </Link>
                                  </li>
                                  <li className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200">
                                    <Link href="/servicesweoffer/odoo-migration">
                                      Odoo Migration
                                    </Link>
                                  </li>
                                  <li className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200">
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
