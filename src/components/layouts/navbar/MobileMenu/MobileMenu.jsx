import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { LuArrowUpRight } from "react-icons/lu";

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  pathname,
  menuItems,
  handleLinkClick,
  scrollToSection,
}) => {
  // Submenu states
  const [isOdooDropdownOpen, setIsOdooDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);
  const [isHubDropdownOpen, setIsHubDropdownOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // Close all submenus
  const closeAllSubmenus = () => {
    setIsOdooDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsAppsDropdownOpen(false);
    setIsHubDropdownOpen(false);
  };

  const toggleDropdown = (dropdownName) => {
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    switch (dropdownName) {
      case "Odoo":
        setIsHubDropdownOpen(false);
        setIsOdooDropdownOpen((prev) => !prev);
        break;
      case "Services":
        setIsServicesDropdownOpen((prev) => !prev);
        break;
      case "Apps":
        setIsAppsDropdownOpen((prev) => !prev);
        break;
      case "Hub":
        setIsOdooDropdownOpen(false);
        setIsHubDropdownOpen((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const handleMenuLinkClick = (e) => {
    closeAllSubmenus();
    handleLinkClick(e);
  };

  // Note: We keep the component mounted but use CSS classes for visibility and animation
  // to avoid JS overhead during the toggle and keep transitions smooth.
  return (
    <div 
      className={`fixed inset-0 z-50 pointer-events-none transition-visibility duration-300 ${isMenuOpen ? "pointer-events-auto" : "invisible"}`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 mobile-menu-overlay ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-full max-w-sm h-full bg-white mobile-menu-panel shadow-2xl flex flex-col ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-50"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-[#112D4E]">Menu</h2>
          <button
            className="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdClose className="w-6 h-6 text-[#112D4E]" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-6" style={{ maxHeight: 'calc(100vh - 80px)' }}>
          <div className="px-4 pt-2">
            {menuItems.map(({ name, path, dropdown }, index) => {
              if (name === "Hub") {
                return (
                  <div key={name} className="mb-2">
                    <button
                      onClick={() => toggleDropdown("Hub")}
                      className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-all duration-200 ${
                        isHubDropdownOpen 
                          ? "bg-purple-50 text-[#873070]" 
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span className="font-medium">Hub</span>
                      <span
                        className={`text-lg transition-transform duration-200 ${isHubDropdownOpen ? "rotate-90" : ""}`}
                      >
                        <AiOutlineRight />
                      </span>
                    </button>

                    {/* Hub Submenu */}
                    <div className={`submenu-transition ${isHubDropdownOpen ? "open mt-1" : ""}`}>
                      <div className="p-3 space-y-1 bg-gray-50 rounded-lg ml-2">
                        {dropdown?.map((sub, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (sub.scroll && typeof window !== 'undefined') {
                                const element = document.getElementById(sub.scroll);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }
                              setIsMenuOpen(false);
                              closeAllSubmenus();
                            }}
                            className="block w-full text-left p-3 rounded-md text-sm text-gray-600 hover:bg-white hover:text-[#873070] transition-colors"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              } else if (name === "Odoo") {
                return (
                  <div key={name} className="mb-2">
                    <button
                      onClick={() => toggleDropdown("Odoo")}
                      className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-all duration-200 ${
                        isOdooDropdownOpen 
                          ? "bg-purple-50 text-[#873070]" 
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span className="font-medium">Odoo</span>
                      <span
                        className={`text-lg transition-transform duration-200 ${isOdooDropdownOpen ? "rotate-90" : ""}`}
                      >
                        <AiOutlineRight />
                      </span>
                    </button>

                    {/* Odoo Submenu */}
                    <div className={`submenu-transition ${isOdooDropdownOpen ? "open mt-1" : ""}`}>
                      <div className="p-3 space-y-1 bg-gray-50 rounded-lg ml-2">
                        <div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDropdown("Services");
                            }}
                            className={`w-full flex items-center justify-between p-3 rounded-md text-left transition-colors ${
                              isServicesDropdownOpen
                                ? "bg-white text-[#873070]"
                                : "hover:bg-white text-gray-600"
                            }`}
                          >
                            <Link 
                              href="/servicesweoffer" 
                              onClick={handleMenuLinkClick}
                              className="flex-1 text-sm font-medium"
                            >
                              Services We Offer
                            </Link>
                            <span
                              className={`ml-2 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-90" : ""}`}
                            >
                              <AiOutlineRight className="w-4 h-4" />
                            </span>
                          </button>

                          <div className={`submenu-transition ${isServicesDropdownOpen ? "open ml-4 mt-2" : ""}`}>
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
                          </div>
                        </div>

                        <div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDropdown("Apps");
                            }}
                            className={`w-full flex items-center justify-between p-3 rounded-md text-left transition-colors ${
                              isAppsDropdownOpen
                                ? "bg-white text-[#873070]"
                                : "hover:bg-white text-gray-600"
                            }`}
                          >
                            <Link 
                              href="/apps" 
                              onClick={handleMenuLinkClick}
                              className="flex-1 text-sm font-medium"
                            >
                              Apps
                            </Link>
                            <span
                              className={`ml-2 transition-transform duration-200 ${isAppsDropdownOpen ? "rotate-90" : ""}`}
                            >
                              <AiOutlineRight className="w-4 h-4" />
                            </span>
                          </button>

                          <div className={`submenu-transition ${isAppsDropdownOpen ? "open ml-4 mt-2" : ""}`}>
                            <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={path} className="mb-2">
                    <Link href={path || "/"} onClick={handleMenuLinkClick}>
                      <div
                        className={`flex items-center justify-between p-4 rounded-lg transition-colors active:scale-95 duration-200 ${
                          pathname === path
                            ? "bg-blue-50 text-[#3b84d6] font-medium"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        <span className="font-medium capitalize">{name}</span>
                        <LuArrowUpRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 bg-gray-50 mt-auto">
          <p className="text-xs text-gray-500 text-center">
            Nexcore Alliance • Excellence in Innovation
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;