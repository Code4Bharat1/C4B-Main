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

  // Detect if screen is <= 768px on mount & resize
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Current route
  const pathname = usePathname();

  // Close mobile menu on direct link click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Helper: Convert a name to a URL-friendly path
  const convertToPath = (name) => `/${name.toLowerCase().replace(/\s+/g, "")}`;

  // Framer Motion animations for the parent elements
  const navVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // Main Menu Items (for demonstration)
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: convertToPath("About Us") },
    { name: "Odoo", path: convertToPath("servicesweoffer") },
    { name: "Clients", path: convertToPath("Clients") },
    { name: "Approach", path: convertToPath("Approach") },
    { name: "Services", path: convertToPath("Services") },
    { name: "", path: convertToPath("Contact Us") }, // "Get in Touch" button
  ];

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
              className="w-[100%] h-[55%] md:w-[100%] md:h-[100%] object-contain"
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

        {/* Mobile Menu (only if isMobile && isMenuOpen) */}
        {isMobile && (
          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            pathname={pathname}
            menuItems={menuItems}
            handleLinkClick={handleLinkClick}
          />
        )}

        {/* Desktop Menu (only if not isMobile) */}
        {!isMobile && (
          <DesktopMenu
            menuItems={menuItems}
            pathname={pathname}
            handleLinkClick={handleLinkClick}
          />
        )}

        {/* Desktop "Get In Touch" Button */}
        {!isMobile && (
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
        )}
      </nav>
    </>
  );
};

export default Navbar;
