"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";

// Import Components
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";

const Navbar = () => {
  // Mobile Menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Detect if screen is mobile
  const [isMobile, setIsMobile] = useState(false);

  // Scroll detection
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Current route
  const pathname = usePathname();

  // Close mobile menu
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Convert title to link path
  const convertToPath = (name) => `/${name.toLowerCase().replace(/\s+/g, "")}`;

  // Animation
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Smooth Scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  // Main Menu Items
  const menuItems = [
    { 
      name: "Hub", 
      dropdown: [
        { label: "Home", scroll: "home" },
        { label: "Services", scroll: "services" },
        { label: "Approach", scroll: "approach" },
        { label: "About Us", scroll: "about" },
        { label: "Supporters", scroll: "supporters" },
        { label: "Values", scroll: "values" },
        { label: "Clients", scroll: "clients" },
        { label:"Approach-Detail", scroll:"approach-detail" },
        { label: "All Services", scroll: "all-services" },
        { label: "Awards", scroll: "awards" },
        // {}
      ]
    },
    { name: "Odoo", path: convertToPath("servicesweoffer") },
    { name: "AI Solutions", path: convertToPath("AISolutions") },
    { name: "Case Studies", path: convertToPath("casestudy") },
    { name: "Reach out", path: convertToPath("Contact Us") },
  ];

  return (
    <>
      <Head>
        <title>NEXCORE ALLIANCE LLP - Leading IT Solutions Provider</title>
        <meta
          name="description"
          content="NEXCORE ALLIANCE LLP specializes in cutting-edge web development and comprehensive IT solutions for businesses worldwide"
        />
      </Head>

      <motion.nav
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white shadow-md"
        }`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20 xl:h-22">

            {/* LOGO */}
            <motion.div
              className="flex-shrink-0"
              initial="hidden"
              animate="visible"
              variants={navVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" onClick={handleLinkClick}>
                <Image
                  src="/nex.png"
                  alt="NEXCORE ALLIANCE LLP Logo"
                  width={150}
                  height={150}
                  className="h-40 sm:h-25 lg:h-50 xl:h-65 w-auto object-contain"
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Scroll Menu
            <ul className="hidden md:flex space-x-8">
              <li><button onClick={() => scrollToSection("home")} className="hover:text-blue-600 transition cursor-pointer">Home</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-600 transition cursor-pointer">Services</button></li>
              <li><button onClick={() => scrollToSection("approach")} className="hover:text-blue-600 transition cursor-pointer">Approach</button></li>
              <li><button onClick={() => scrollToSection("about")} className="hover:text-blue-600 transition cursor-pointer">About Us</button></li>
              <li><button onClick={() => scrollToSection("clients")} className="hover:text-blue-600 transition cursor-pointer">Clients</button></li>
              <li><button onClick={() => scrollToSection("values")} className="hover:text-blue-600 transition cursor-pointer">Values</button></li>
            </ul> */}

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <BiMenuAltRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#112D4E]" />
            </button>

            {/* Desktop Main Menu */}
            {!isMobile && (
              <div className="flex items-center space-x-4 lg:space-x-6">
                <DesktopMenu
                  menuItems={menuItems}
                  pathname={pathname}
                  handleLinkClick={handleLinkClick}
                  scrollToSection={scrollToSection}
                />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            pathname={pathname}
            menuItems={menuItems}
            handleLinkClick={handleLinkClick}
            scrollToSection={scrollToSection}
          />
        )}
      </motion.nav>

      {/* Prevent Content Overlap */}
      <div className="h-16 sm:h-18 lg:h-20 xl:h-22"></div>
    </>
  );
};

export default Navbar;