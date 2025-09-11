"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Heart,
  Users,
  Award,
  Clock,
  Star,
  ChefHat,
  Coffee,
  Cake,
  MapPin,
  Calendar,
} from "lucide-react";

const About = () => {
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
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

  const fadeInLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight: Variants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
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
        staggerChildren: 0.2,
      },
    },
  };

  const achievements = [
    { icon: Award, number: "25+", label: "Awards Won", color: "text-pink-600" },
    {
      icon: Users,
      number: "50k+",
      label: "Happy Customers",
      color: "text-pink-700",
    },
    {
      icon: Cake,
      number: "500+",
      label: "Unique Recipes",
      color: "text-pink-600",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Fresh Baking",
      color: "text-pink-700",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Every item is crafted with passion and attention to detail, using family recipes passed down through generations.",
    },
    {
      icon: Star,
      title: "Premium Quality",
      description:
        "We source only the finest ingredients and maintain the highest standards in every aspect of our baking process.",
    },
    {
      icon: ChefHat,
      title: "Expert Craftsmanship",
      description:
        "Our skilled bakers combine traditional techniques with modern innovation to create exceptional treats.",
    },
    {
      icon: Coffee,
      title: "Community Hub",
      description:
        "More than a bakery, we're a gathering place where memories are made and friendships are formed over great food.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#FFC5D3" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-white/20 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-300/20 to-white/25 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-pink-200/25 to-pink-100/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-pink-900 mb-6 font-bold">
            Our Story
          </h2>
          <p className="font-inter text-lg md:text-xl text-pink-800 max-w-3xl mx-auto leading-relaxed">
            A journey of passion, tradition, and the sweetest dreams coming to
            life, one delicious creation at a time.
          </p>
        </motion.div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* Left Content - Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-pink-200/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl md:text-3xl text-pink-900 font-bold">
                    Since 1999
                  </h3>
                  <p className="text-pink-700 font-inter">Where it all began</p>
                </div>
              </div>

              <div className="space-y-4 text-pink-800 font-inter leading-relaxed">
                <p>
                  As the owners, we began with a simple passion for baking and a
                  desire to share joy through our creations. Over the years, our
                  humble kitchen grew into a welcoming bakery where every treat
                  is made with care and dedication. With the support of loved
                  ones and our community, we continue to craft delicious
                  memories for everyone who walks through our doors.
                </p>
                <p>
                  Today,{" "}
                  <span className="font-semibold text-pink-900">
                    Mrs. & Mr. Cakewala
                  </span>{" "}
                  continues that legacy, combining time-honored recipes with
                  contemporary flavors. Every morning, our ovens come alive with
                  the same passion that started it all – creating moments of
                  joy, one bite at a time.
                </p>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200/30">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-playfair text-xl text-pink-900 font-semibold mb-2">
                    Visit Our Bakery
                  </h4>
                  <p className="text-pink-800 font-inter mb-2">
                    H-165, H Block, L Block, Ambedkar Chawk, Shastri Nagar,
                    Meerut, Uttar Pradesh 250002
                  </p>
                  <p className="text-sm text-pink-700 font-inter">
                    Open Daily: 10:30 AM - 10:00 PM
                    <br />
                    Fresh baking starts at dawn!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image Gallery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/p/AF1QipMzP6UHCzT-fELPPInB3VpF4dVrI1WxHXkqFIc=w408-h306-k-no"
                alt="Our bakery interior"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-pink-600 fill-current" />
                  <span className="text-sm font-semibold text-pink-900 font-inter">
                    Est. 1999
                  </span>
                </div>
              </div>
            </div>

            {/* Small floating images */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=400&fit=crop"
                alt="Fresh croissants"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=400&fit=crop"
                alt="Decorated cupcakes"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="font-playfair text-3xl md:text-4xl text-pink-900 text-center mb-12 font-bold"
          >
            Our Achievements
          </motion.h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-pink-200/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div
                  className={`font-playfair text-3xl md:text-4xl font-bold ${achievement.color} mb-2`}
                >
                  {achievement.number}
                </div>
                <div className="text-pink-800 font-inter font-medium text-sm md:text-base">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h3
            variants={fadeInUp}
            className="font-playfair text-3xl md:text-4xl text-pink-900 text-center mb-12 font-bold"
          >
            What Makes Us Special
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200/50 group"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-playfair text-xl md:text-2xl text-pink-900 font-bold mb-4">
                  {value.title}
                </h4>
                <p className="text-pink-800 font-inter leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-400/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default About;
