"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#etusivu", label: "ETUSIVU" },
    { href: "#palvelut", label: "PALVELUT" },
    { href: "#referenssit", label: "REFERENSSIT" },
    { href: "#tiimi", label: "TIIMI" },
    { href: "#yhteystiedot", label: "YHTEYSTIEDOT" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-secondary-800 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+358401234567" className="hover:text-primary-500">+358 40 123 4567</a>
          </div>
          <div className="flex items-center space-x-4">
            <span>Sähköposti: <a href="mailto:info@rakennusmarieta.fi" className="hover:text-primary-500">info@rakennusmarieta.fi</a></span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg text-gray-900 top-0"
            : "bg-secondary-800 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <a href="#" className="bg-primary-500 text-white px-6 py-2 font-bold text-lg md:text-xl">
              RAKENNUS MARIETA
            </a>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary-500 transition-colors duration-300 font-medium text-sm uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4 space-y-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block hover:text-primary-500 transition-colors duration-300 font-medium uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
}

