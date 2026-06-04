"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowRight,
  FaYoutube,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

// ─── SVG Flag Components ───────────────────────────────────────────────────────

const IndiaFlag = ({ className = "w-6 h-4" }) => (
  <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" className={`${className} rounded-sm shadow-sm`}>
    <rect width="30" height="20" fill="#138808" />
    <rect width="30" height="13.33" fill="#FFFFFF" />
    <rect width="30" height="6.67" fill="#FF9933" />
    {/* Ashoka Chakra */}
    <circle cx="15" cy="10" r="3" fill="none" stroke="#000080" strokeWidth="0.5" />
    {[...Array(24)].map((_, i) => {
      const angle = (i * 15 * Math.PI) / 180;
      return (
        <line
          key={i}
          x1="15" y1="10"
          x2={15 + 2.8 * Math.cos(angle)}
          y2={10 + 2.8 * Math.sin(angle)}
          stroke="#000080"
          strokeWidth="0.3"
        />
      );
    })}
    <circle cx="15" cy="10" r="0.6" fill="#000080" />
  </svg>
);

const UAEFlag = ({ className = "w-6 h-4" }) => (
  <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" className={`${className} rounded-sm shadow-sm`}>
    <rect width="30" height="20" fill="#000000" />
    <rect width="30" height="13.33" fill="#FFFFFF" />
    <rect width="30" height="6.67" fill="#009A44" />
    {/* Red vertical stripe on left */}
    <rect width="8" height="20" fill="#EF3340" />
  </svg>
);

const QatarFlag = ({ className = "w-6 h-4" }) => (
  <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" className={`${className} rounded-sm shadow-sm`}>
    <rect width="30" height="20" fill="#8D1B3D" />
    {/* White left section */}
    <rect width="8" height="20" fill="#FFFFFF" />
    {/* Serrated edge - 9 triangles pointing right */}
    {[...Array(9)].map((_, i) => {
      const h = 20 / 9;
      const y = i * h;
      return (
        <polygon
          key={i}
          points={`8,${y} 11,${y + h / 2} 8,${y + h}`}
          fill="#8D1B3D"
        />
      );
    })}
  </svg>
);

const OmanFlag = ({ className = "w-6 h-4" }) => (
  <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" className={`${className} rounded-sm shadow-sm`}>
    {/* Three horizontal bands */}
    <rect width="30" height="20" fill="#DB161B" />
    <rect x="8" width="22" height="20" fill="#DB161B" />
    <rect x="8" width="22" height="13.33" fill="#FFFFFF" />
    <rect x="8" width="22" height="6.67" fill="#008000" />
    {/* Red vertical stripe on left */}
    <rect width="8" height="20" fill="#DB161B" />
  </svg>
);

const SaudiArabiaFlag = ({ className = "w-6 h-4" }) => (
  <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" className={`${className} rounded-sm shadow-sm`}>
    <rect width="30" height="20" fill="#006C35" />
    {/* Simplified sword shape */}
    <rect x="6" y="12" width="18" height="1" fill="#FFFFFF" />
    <polygon points="22,12 24,12.5 22,13" fill="#FFFFFF" />
    {/* Simplified Arabic text representation */}
    <rect x="8" y="7" width="14" height="1.2" rx="0.5" fill="#FFFFFF" />
    <rect x="9" y="9" width="12" height="0.8" rx="0.4" fill="#FFFFFF" />
  </svg>
);

const KuwaitFlag = ({ className = "w-6 h-4" }) => (
  <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" className={`${className} rounded-sm shadow-sm`}>
    <rect width="30" height="20" fill="#CE1126" />
    <rect width="30" height="13.33" fill="#FFFFFF" />
    <rect width="30" height="6.67" fill="#007A3D" />
    {/* Black trapezoid on hoist */}
    <polygon points="0,0 8,6.67 8,13.33 0,20" fill="#000000" />
  </svg>
);

// ─── Flag Map ──────────────────────────────────────────────────────────────────

const flagComponents = {
  IN: IndiaFlag,
  AE: UAEFlag,
  QA: QatarFlag,
  OM: OmanFlag,
  SA: SaudiArabiaFlag,
  KW: KuwaitFlag,
};

const CountryFlag = ({ code, className }) => {
  const Flag = flagComponents[code];
  return Flag ? <Flag className={className} /> : null;
};

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer = () => {
  const branchOffices = [
    { country: "Qatar",        code: "QA" },
    { country: "UAE",          code: "AE" },
    { country: "Oman",         code: "OM" },
    { country: "Saudi Arabia", code: "SA" },
    { country: "Kuwait",       code: "KW" },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Main Section ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10"
        >
          {/* ── Logo + About — 3 cols ── */}
          <div className="lg:col-span-3 transition-all duration-500 opacity-0 translate-y-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="mb-6 w-full h-24 rounded-xl shadow-lg flex items-center justify-center bg-white overflow-hidden">
              <Image
                src="/nex.jpeg"
                alt="NEXCORE ALLIANCE LLP Logo"
                width={192}
                height={60}
                className="w-48 h-auto object-contain"
                style={{ height: 'auto' }}
              />
            </div>
            <p className="text-gray-200 leading-relaxed mb-6 text-sm">
              Nexcore Alliance is at the forefront of providing world-class IT
              solutions, helping businesses globally leverage technology for
              growth and success.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { href: "https://www.facebook.com/profile.php?id=61570113656994", icon: <FaFacebookF />, gradient: "from-blue-600 to-blue-700" },
                { href: "https://www.instagram.com/nexcorealliancellp/", icon: <FaInstagram />, gradient: "from-pink-600 via-purple-600 to-orange-500" },
                { href: "https://www.youtube.com/channel/UCYqpIltw48XxkMRLC-HCgag", icon: <FaYoutube />, gradient: "from-red-600 to-red-700" },
                { href: "https://www.linkedin.com/company/105730702/admin/dashboard/", icon: <FaLinkedinIn />, gradient: "from-blue-600 to-blue-700" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links — 2 cols ── */}
          <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Hub",          path: "/" },
                { name: "AI Solutions", path: "/aisloutions" },
                { name: "Case Studies", path: "/casestudy" },
                { name: "Odoo",         path: "/servicesweoffer" },
              ].map((link, i) => (
                <li key={i} className="group">
                  <Link href={link.path}>
                    <span className="text-gray-200 hover:text-orange-400 hover:translate-x-1 transition-all flex items-center gap-2 cursor-pointer text-sm">
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Policies — 3 cols ── */}
          <div className="lg:col-span-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold text-white mb-6">Policies</h3>
            <ul className="space-y-3">
              {[
                { name: "About Nexcore Alliance", path: "/policies/about" },
                { name: "Contact",                path: "/policies/contact" },
                { name: "Terms & Conditions",     path: "/policies/termsandcondition" },
                { name: "Privacy Policy",         path: "/policies/privacy" },
                { name: "Refund Policy",          path: "/policies/refund-policy" },
                { name: "Cancellation Policy",    path: "/policies/cancellation-policy" },
              ].map((item, i) => (
                <li key={i} className="group">
                  <Link href={item.path}>
                    <span className="text-gray-200 hover:text-orange-400 hover:translate-x-1 transition-all flex items-center gap-2 cursor-pointer text-sm">
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Get In Touch — 4 cols ── */}
          <div className="lg:col-span-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">

              {/* India Phone */}
              <a
                href="https://wa.me/918976104646"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:translate-x-1 transition-transform"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CountryFlag code="IN" className="w-6 h-4" />
                    <span className="text-xs font-semibold text-blue-300">India</span>
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors text-sm">
                    +91 8976104646
                  </span>
                </div>
              </a>

              {/* UAE Phone */}
              <a
                href="https://wa.me/+971562021489"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:translate-x-1 transition-transform"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CountryFlag code="AE" className="w-6 h-4" />
                    <span className="text-xs font-semibold text-blue-300">UAE</span>
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors text-sm">
                    +971 562021489
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:director@nexcorealliance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:translate-x-1 transition-transform"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <FiMail className="w-5 h-5" />
                </div>
                <span className="text-gray-200 group-hover:text-white transition-colors text-sm leading-relaxed pt-2">
                  director@nexcorealliance.com
                </span>
              </a>

              {/* Head Office */}
              <a
                href="https://maps.app.goo.gl/DzBt4BdL9BH4MRga9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:translate-x-1 transition-transform"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-orange-300 uppercase tracking-wide">
                      Head Office
                    </span>
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors text-sm leading-relaxed">
                    Off BKC, Mumbai, India 400070
                  </span>
                </div>
              </a>

              {/* ── Branch Offices — improved card layout ── */}
              <div className="pt-3 border-t border-blue-700/50">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-widest block mb-3">
                  Branch Offices
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {branchOffices.map((office, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 rounded-lg px-3 py-2 transition-all duration-200 cursor-default hover:-translate-y-1"
                    >
                      <CountryFlag code={office.code} className="w-7 h-[18px] flex-shrink-0" />
                      <span className="text-gray-200 text-xs font-medium leading-tight">
                        {office.country}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA Section ── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-blue-700/50"
        >
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-blue-50">
                  Let's discuss how we can help you achieve your goals
                </p>
              </div>
              <Link href="https://wa.me/918976104646">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  Get Started
                  <FaArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* ── Bottom Section ── */}
      <div className="relative z-10 border-t border-blue-700/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-gray-300 text-sm text-center md:text-left">
              © 2011-2026{" "}
              <span className="font-semibold text-white">Nexcore Alliance</span>
              . All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <Link href="/policies/privacy">
                <span className="hover:text-orange-400 transition-colors cursor-pointer">Privacy</span>
              </Link>
              <span>•</span>
              <Link href="/policies/termsandcondition">
                <span className="hover:text-orange-400 transition-colors cursor-pointer">Terms</span>
              </Link>
              <span>•</span>
              <Link href="/policies/contact">
                <span className="hover:text-orange-400 transition-colors cursor-pointer">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── WhatsApp Floating Button ── */}
      <a
        href="https://wa.me/918976104646"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl z-50 group hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <FaWhatsapp className="text-white text-3xl group-hover:scale-110 transition-transform" />
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
      </a>
    </footer>
  );
};

export default Footer;