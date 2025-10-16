"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";

// Import our new smaller components
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";

const Navbar = () => {
  // Mobile Menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Detect if screen is mobile (changed to lg breakpoint for better responsive design)
  const [isMobile, setIsMobile] = useState(false);
  
  // Scroll detection for enhanced navbar
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Changed to lg breakpoint (1024px)
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

  // Close mobile menu on direct link click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Helper: Convert a name to a URL-friendly path
  const convertToPath = (name) => `/${name.toLowerCase().replace(/\s+/g, "")}`;

  // Framer Motion animations
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Main Menu Items
  const menuItems = [
    { name: "Hub", path: "/" },
    { name: "Behind the code", path: convertToPath("About Us") },
    { name: "Odoo", path: convertToPath("servicesweoffer") },
    { name: "Trusted By", path: convertToPath("Clients") },
    { name: "Strategy", path: convertToPath("Approach") },
    { name: "What we offer", path: convertToPath("Services") },
    { name: "Reach out", path: convertToPath("Contact Us") },
   
  ];

  return (
    <>
      <Head>
        <title>Code4Bharat - Leading IT Solutions Provider</title>
        <meta name="description" content="Code4Bharat specializes in cutting-edge web development and comprehensive IT solutions for businesses worldwide" />
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
            
            {/* LOGO Section */}
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
                  src="/images/c4b.png"
                  alt="Code4Bharat Logo"
                  width={200}
                  height={200}
                  className="h-50 sm:h-25 lg:h-50 xl:h-65 w-auto object-contain"
                  priority
                />
              </Link>
            </motion.div>

            {/* Mobile Hamburger Icon */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <BiMenuAltRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#112D4E]" />
            </button>

            {/* Desktop Menu */}
            {!isMobile && (
              <div className="flex items-center space-x-4 lg:space-x-6">
                <DesktopMenu
                  menuItems={menuItems}
                  pathname={pathname}
                  handleLinkClick={handleLinkClick}
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
          />
        )}
      </motion.nav>
      
      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-16 sm:h-18 lg:h-20 xl:h-22"></div>
    </>
  );
};

export default Navbar;