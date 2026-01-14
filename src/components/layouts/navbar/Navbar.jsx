"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
      name: "Hub",path: "/", 
      dropdown: [
        // { label: "Home", scroll: "home" },
        { label: "About Us", scroll: "about" },
        { label: "Services", scroll: "services" },
        
        // { label: "Approach", scroll: "approach" },
        // { label: "Supporters", scroll: "supporters" },
        // { label: "Values", scroll: "values" },
        { label: "Clients", scroll: "clients" },
        // { label:"Approach-Detail", scroll:"approach-detail" },
        // { label: "All Services", scroll: "all-services" },
        { label: "Awards", scroll: "awards" },
      ]
    },
    { name: "AI Solutions", path: convertToPath("AISolutions") },
     { name: "AI Voice Agent", path: convertToPath("voiceagent") },
    { name: "Case Studies", path: convertToPath("casestudy") },
    { name: "Odoo", path: convertToPath("servicesweoffer") },
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
            ? "bg-white/98 backdrop-blur-lg shadow-xl border-b border-blue-100"
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
              <Link href="/" onClick={handleLinkClick} className="flex items-center">
  <Image
    src="/nex.png"
    alt="NEXCORE ALLIANCE LLP Logo"
    width={260}
    height={100}
    className="w-auto h-16 sm:h-20 lg:h-24 xl:h-24 object-contain"
    priority
  />
</Link>

            </motion.div>

            {/* Mobile Hamburger */}
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BiMenuAltRight className="w-6 h-6 sm:w-7 sm:h-7 text-blue-900" />
            </motion.button>

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