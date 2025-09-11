"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import menuData from "../data/menu.json";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  bestseller?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("cakes");
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCategories(menuData.categories);
    setIsLoaded(true);
  }, []);

  const fadeIn: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const [showModal, setShowModal] = useState(false);

  const handleOrderNow = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section
      id="menu"
      className="py-16 md:py-24 relative"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-100/30 to-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-200/40 to-pink-100/20 rounded-full blur-3xl" />

        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(219,39,119,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-black mb-4 font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-pink-700 via-pink-800 to-pink-600 bg-clip-text text-transparent">
              Menu
            </span>
          </h2>
          <p className="font-inter text-lg text-pink-800 max-w-2xl mx-auto leading-relaxed">
            Discover our delicious selection of handcrafted bakery treats made
            with love and premium ingredients.
          </p>
        </motion.div>

        {isLoaded && (
          <>
            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-inter font-medium transition-all duration-300 transform hover:scale-105 shadow-lg
                    ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-pink-600 via-pink-700 to-pink-600 text-white shadow-pink-600/30"
                        : "bg-white/80 text-pink-800 hover:bg-white/90 backdrop-blur-sm border border-pink-200/50 hover:shadow-pink-200/40"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Active Category Display */}
            {categories.map(
              (category) =>
                category.id === activeCategory && (
                  <div key={category.id} className="mb-8">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                      className="text-center mb-8"
                    >
                      <h3 className="font-playfair text-3xl md:text-4xl text-black font-bold mb-2">
                        {category.name}
                      </h3>
                      <p className="font-inter text-pink-800 text-lg">
                        {category.description}
                      </p>
                    </motion.div>

                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    >
                      {category.items.map((item) => (
                        <motion.div
                          key={item.id}
                          variants={fadeIn}
                          className="bg-white/40 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/40 group"
                        >
                          <div className="relative h-48 md:h-56 w-full overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            {item.bestseller && (
                              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                                ⭐ Bestseller
                              </div>
                            )}
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent"></div>
                          </div>
                          <div className="p-4 md:p-6">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="font-playfair text-xl text-pink-900 font-semibold">
                                {item.name}
                              </h4>
                              <span className="font-inter font-bold text-pink-800 text-lg bg-pink-100/60 backdrop-blur-sm px-2 py-1 rounded-lg border border-pink-200/30">
                                Rs {item.price.toFixed(2)}
                              </span>
                            </div>
                            <p className="font-inter text-sm text-pink-700 leading-relaxed mb-4">
                              {item.description}
                            </p>
                            <button
                              className="w-full bg-gradient-to-r from-pink-600 via-pink-700 to-pink-600 text-white py-3 rounded-xl hover:from-pink-700 hover:to-pink-800 transition-all duration-300 font-inter font-semibold shadow-lg hover:shadow-pink-600/30 transform hover:scale-105 group"
                              onClick={handleOrderNow}
                            >
                              <span className="flex items-center justify-center">
                                Order Now
                              </span>
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                )
            )}
          </>
        )}
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-200/10 to-transparent pointer-events-none"></div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center relative">
            <button
              className="absolute top-4 right-4 text-pink-700 hover:text-pink-900 text-2xl font-bold"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="font-playfair text-2xl text-pink-700 font-bold mb-4">
              Order via WhatsApp
            </h3>
            <p className="font-inter text-pink-800 mb-6">
              Orders can only be placed through WhatsApp.
              <br />
              Click below to start your order!
            </p>
            <a
              href="#contact"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-600 via-pink-700 to-pink-600 text-white px-6 py-3 rounded-xl font-inter font-semibold shadow-lg hover:shadow-pink-600/30 transition-all duration-300"
              onClick={closeModal}
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
