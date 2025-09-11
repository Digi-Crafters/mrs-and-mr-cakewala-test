'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import menuData from '../data/menu.json';

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
  const [activeCategory, setActiveCategory] = useState<string>('cakes');
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCategories(menuData.categories);
    setIsLoaded(true);
  }, []);

  const fadeIn: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="menu" className="py-16 md:py-24" style={{ backgroundColor: '#FFC5D3' }}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-pink-900 mb-4 font-bold">
            Our Menu
          </h2>
          <p className="font-inter text-lg text-pink-800 max-w-2xl mx-auto leading-relaxed">
            Discover our delicious selection of handcrafted bakery treats made with love and premium ingredients.
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
                    ${activeCategory === category.id 
                      ? 'bg-pink-700 text-white shadow-pink-600/30' 
                      : 'bg-white/80 text-pink-800 hover:bg-white/90 backdrop-blur-sm border border-pink-200/50'}`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Active Category Display */}
            {categories.map((category) => (
              category.id === activeCategory && (
                <div key={category.id} className="mb-8">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-8"
                  >
                    <h3 className="font-playfair text-3xl md:text-4xl text-pink-900 font-bold">
                      {category.name}
                    </h3>
                    <p className="font-inter text-pink-800 mt-2 text-lg">
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
                        className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-pink-200/30"
                      >
                        <div className="relative h-48 md:h-56 w-full overflow-hidden">
                          <Image 
                            src={item.image} 
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-110"
                          />
                          {item.bestseller && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                              ⭐ Bestseller
                            </div>
                          )}
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>
                        <div className="p-4 md:p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-playfair text-xl text-pink-900 font-semibold">
                              {item.name}
                            </h4>
                            <span className="font-inter font-bold text-pink-700 text-lg bg-pink-100 px-2 py-1 rounded-lg">
                              Rs {item.price.toFixed(2)}
                            </span>
                          </div>
                          <p className="font-inter text-sm text-pink-700 leading-relaxed mb-4">
                            {item.description}
                          </p>
                          <button className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-3 rounded-xl hover:from-pink-700 hover:to-pink-800 transition-all duration-300 font-inter font-semibold shadow-lg hover:shadow-pink-600/30 transform hover:scale-105">
                            Order Now
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )
            ))}
          </>
        )}
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-400/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Menu;