"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Import Components
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";

// Inline SVG hamburger — avoids loading react-icons/bi in critical path
const MenuIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="8" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile]     = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

  const handleLinkClick = () => setIsMenuOpen(false);

  const convertToPath = (name) =>
    `/${name.toLowerCase().replace(/\s+/g, "")}`;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    {
      name: "Hub",
      path: "/",
      dropdown: [
        { label: "About Us", scroll: "about"    },
        { label: "Services", scroll: "services" },
        { label: "Clients",  scroll: "clients"  },
        { label: "Awards",   scroll: "awards"   },
      ],
    },
    { name: "AI Solutions",  path: convertToPath("AISolutions")  },
    { name: "AI Voice Agent", path: convertToPath("voiceagent")  },
    { name: "Case Studies",  path: convertToPath("casestudy")    },
    { name: "Odoo",          path: convertToPath("servicesweoffer") },
    { name: "Reach out",     path: convertToPath("Contact Us")   },
  ];

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-300 nav-entrance ${
          isScrolled
            ? "bg-white/98 backdrop-blur-lg shadow-xl border-b border-blue-100"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20 xl:h-22">

            {/* LOGO */}
            <div
              className="flex-shrink-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Link href="/" onClick={handleLinkClick} className="flex items-center hover:scale-105 transition-transform duration-200">
                <Image
                  src="/nex.png"
                  alt="NEXCORE ALLIANCE LLP Logo"
                  width={260}
                  height={100}
                  priority
                  sizes="(max-width: 640px) 130px, (max-width: 1024px) 200px, 260px"
                  className="w-auto h-16 sm:h-20 lg:h-24 xl:h-24 object-contain"
                />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105 active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <MenuIcon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-900" />
            </button>

            {/* Desktop Main Menu */}
            {!isMobile && (
              <div className="hidden lg:flex items-center space-x-4 lg:space-x-6">
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
      </nav>

      {/* Mobile Sidebar */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        pathname={pathname}
        menuItems={menuItems}
        handleLinkClick={handleLinkClick}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Navbar;