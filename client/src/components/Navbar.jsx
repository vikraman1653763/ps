import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import useIsSmallScreen from "../hooks/useIsSmallScreen.js";
import logoLight from "/assets/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isSmall = useIsSmallScreen();

  const navItems = [
    { label: "Home", path: "#home" },
    { label: "Gallery", path: "#gallery" },
    { label: "Info", path: "#info" },
  ];

  const mapItem = { label: "Map", path: "#venue" };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto" },
    exit: { opacity: 0, y: -10, height: 0 },
  };

  return (
    <div className="fixed w-full z-100 flex justify-center items-center transition-all duration-500">
      <header
        className={`flex items-center justify-between backdrop-blur-xl transition-all duration-500 
${
  scrolled
    ? `
translate-y-3 sm:translate-y-10 max-w-285 w-[80%] sm:w-285
rounded-2xl px-4 sm:px-8 py-2
bg-white/40 text-slate-800 border border-white/30 
shadow-[0_6px_24px_rgba(2,6,23,0.06)]
${isSmall && menuOpen ? "rounded-b-none" : ""}
`
    : `
sm:translate-y-0 px-7 sm:px-10 py-4 max-w-full w-full
bg-white text-slate-800 border border-white/30
shadow-[0_6px_24px_rgba(2,6,23,0.01)]
`
}`}
      >
        {/* Logo */}
        <img
          src={logoLight}
          alt="Logo"
          className="w-30 sm:w-52.5 h-10 cursor-pointer"
          onClick={() => scrollToSection("#home")}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map(({ label, path }) => (
            <button
              key={label}
              onClick={() => scrollToSection(path)}
              className={`text-base ${
                scrolled ? "text-slate-700" : "text-[#525F81]"
              } hover:text-primary transition-colors`}
            >
              {label}
            </button>
          ))}

          {/* Map Button */}
          <button
            onClick={() => scrollToSection(mapItem.path)}
            className="
              px-4 py-2 rounded-xl text-sm font-medium
              bg-primary text-white shadow-md
              hover:bg-primary/90 transition-all
            "
          >
            {mapItem.label}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle Menu"
          className="md:hidden text-slate-800"
        >
          {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className={`absolute top-16.5 rounded-b-2xl md:hidden z-40 w-full
border-t-2 border-primary
bg-white/50 backdrop-blur-xl
shadow-[0_10px_30px_rgba(2,6,23,0.08)]
${scrolled ? "max-w-[80%]" : "max-w-285"}
`}
          >
            <div className="flex flex-col gap-4 py-4 px-4">
              {navItems.map(({ label, path }) => (
                <button
                  key={label}
                  onClick={() => {
                    setMenuOpen(false);
                    scrollToSection(path);
                  }}
                  className="text-left text-slate-700 hover:text-primary transition-colors"
                >
                  {label}
                </button>
              ))}

              {/* Mobile Map Button */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection(mapItem.path);
                }}
                className="
                  mt-2 px-4 py-2 rounded-xl text-sm font-medium
                  bg-primary text-white text-left
                  hover:bg-primary/90 transition-all
                "
              >
                {mapItem.label}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
