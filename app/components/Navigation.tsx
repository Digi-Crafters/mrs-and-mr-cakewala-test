// components/BakeryNavigation.js
"use client";
import React, { useState, useEffect } from "react";
import { ChefHat, Menu, X } from "lucide-react";

const BakeryNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = React.useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "Menu", href: "#menu" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  // Smooth scrolling function
  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.href.substring(1));
      const scrollY = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <nav className="relative z-50 px-6 py-6 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="relative">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-tr from-white via-pink-50 to-pink-100 rounded-2xl flex items-center justify-center shadow-lg md:shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300 border border-pink-200/50">
              <ChefHat className="w-6 h-6 md:w-7 md:h-7 text-pink-600" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h1 className="font-dancing-script text-2xl md:text-3xl font-bold text-pink-800">
              Mrs. & Mr. Cakewala
            </h1>
            <p className="text-pink-700 text-xs md:text-sm font-light tracking-wide font-inter">
               BAKERY & CONFECTIONERY
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => smoothScrollTo(item.href)}
              className={`transition-colors font-medium text-sm tracking-wider uppercase font-inter hover:text-pink-700 ${
                activeSection === item.href.substring(1)
                  ? "text-pink-800 font-semibold"
                  : "text-pink-600/80"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button className="relative group bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold shadow-lg md:shadow-xl hover:shadow-pink-400/25 transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10 font-inter">Order Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-pink-800 p-2 hover:bg-pink-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg lg:hidden border-t border-pink-200/30 shadow-xl">
            <div className="flex flex-col p-6 space-y-6">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => smoothScrollTo(item.href)}
                  className={`text-left transition-colors font-medium text-lg tracking-wider uppercase font-inter py-2 hover:text-pink-700 ${
                    activeSection === item.href.substring(1)
                      ? "text-pink-800 font-semibold"
                      : "text-pink-600/80"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                className="bg-gradient-to-r from-pink-500 to-pink-400 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-pink-400/25 transition-all duration-300 transform hover:scale-105 overflow-hidden font-inter mt-4"
                onClick={() => smoothScrollTo("#menu")}
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default BakeryNavigation;
