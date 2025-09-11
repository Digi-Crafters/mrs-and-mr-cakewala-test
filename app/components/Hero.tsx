// components/BakeryHero.js
"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Star,
  Heart,
  ArrowRight,
  Phone,
  Award,
  Sparkles,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import BakeryNavigation from "./Navigation";

const BakeryHero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const featuredItems = [
    {
      name: "Wedding Cakes",
      description: "Custom designed masterpieces",
      price: "Rs 299",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop&crop=center",
    },
    {
      name: "Artisan Croissants",
      description: "Fresh baked every morning",
      price: "Rs 312",
      image:
        "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Gourmet Cupcakes",
      description: "Premium flavors & designs",
      price: "Rs 124",
      image:
        "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&h=600&fit=crop&crop=center",
    },
  ];

  // Smooth scrolling function for CTA button
  const smoothScrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Memoized function to handle image rotation
  const rotateImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % featuredItems.length);
  }, [featuredItems.length]);

  useEffect(() => {
    const interval = setInterval(rotateImage, 5000);
    return () => clearInterval(interval);
  }, [rotateImage]);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#FFC5D3" }}
      id="home"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 md:left-20 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-white/20 to-pink-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-pink-200/40 to-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 md:w-72 md:h-72 bg-gradient-to-r from-pink-300/25 to-pink-200/20 rounded-full blur-3xl" />

        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <BakeryNavigation />

      {/* Hero Content */}
      <div className="relative z-40 max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center min-h-[70vh] md:min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Awards Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-pink-200/50 shadow-lg">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-pink-600" />
              <span className="text-pink-800 font-medium text-xs md:text-sm font-inter">
                Award Winning Bakery 2024
              </span>
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 text-pink-500 fill-current"
                  />
                ))}
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
                <span className="block text-white">Sweet</span>
                <span className="block bg-gradient-to-r from-pink-700 via-pink-800 to-pink-600 bg-clip-text text-transparent">
                  Dreams
                </span>
                <span className="block text-white">Baked</span>
                <span className="block font-dancing-script text-4xl md:text-6xl lg:text-7xl text-pink-700 -mt-2 md:-mt-4">
                  Daily
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-pink-800 leading-relaxed font-light max-w-lg font-inter">
              Where passion meets perfection in every bite. From sunrise
              croissants to midnight celebrations, we craft moments that taste
              like happiness.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button
                onClick={smoothScrollToMenu}
                className="group relative bg-gradient-to-r from-pink-600 via-pink-700 to-pink-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold shadow-xl hover:shadow-pink-600/30 transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2 md:space-x-3 font-inter">
                  <span>Discover Menu</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-pink-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Sparkles className="absolute top-1 right-1 w-3 h-3 md:w-4 md:h-4 text-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 ">
              {[
                { number: "25+", label: "Years Crafting" },
                { number: "50k+", label: "Happy Customers" },
                { number: "500+", label: "Unique Recipes" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-pink-700 group-hover:text-pink-800 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-pink-600 text-xs md:text-sm font-medium tracking-wide uppercase font-inter">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative mt-12 lg:mt-0">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-pink-200/40 rounded-3xl blur-xl scale-105 -z-10"></div>

            {/* Main Card */}
            <div className="relative bg-white/40 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/40 shadow-2xl">
              {/* Product Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={featuredItems[currentImage].image}
                  alt={featuredItems[currentImage].name}
                  fill
                  className="object-cover transition-all duration-1000"
                  priority={currentImage === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent"></div>

                {/* Image Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 md:w-4 md:h-4 text-pink-400 fill-current"
                        />
                      ))}
                    </div>
                    <button
                      className="bg-white/30 backdrop-blur-xl p-1.5 md:p-2 rounded-full hover:bg-white/50 transition-colors"
                      aria-label="Add to favorites"
                    >
                      <Heart className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white px-3 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-playfair text-xl md:text-2xl font-bold text-pink-900 mb-1 md:mb-2">
                      {featuredItems[currentImage].name}
                    </h3>
                    <p className="text-pink-700 text-sm font-inter">
                      {featuredItems[currentImage].description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-pink-600 text-xs mb-1 font-inter">
                      Starting from
                    </p>
                    <p className="font-playfair text-xl md:text-2xl font-bold text-pink-800">
                      {featuredItems[currentImage].price}
                    </p>
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 pt-2 md:pt-4">
                  {featuredItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImage
                          ? "bg-pink-600 w-6"
                          : "bg-pink-300 hover:bg-pink-400"
                      }`}
                      aria-label={`View ${featuredItems[index].name}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Contact Info */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl p-3 md:p-4 shadow-xl">
              <div className="flex items-center space-x-2 md:space-x-3 text-white">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <div>
                  <p className="text-xs opacity-90 font-inter">Call Now</p>
                  <p className="font-bold text-sm font-inter">
                    +91 09997795796
                  </p>
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white/60 backdrop-blur-xl rounded-2xl p-3 md:p-4 border border-pink-200/50 shadow-xl">
              <div className="flex items-center space-x-2 md:space-x-3 text-pink-800">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-pink-600" />
                <div>
                  <p className="text-xs font-inter">Downtown</p>
                  <p className="font-bold text-sm font-inter">Open Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-400/20 to-transparent"></div> */}
    </div>
  );
};

export default BakeryHero;
