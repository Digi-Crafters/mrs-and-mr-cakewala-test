'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail,
  MessageCircle,
  X,
  ExternalLink,
  Instagram,
  Facebook,
  Twitter,
  Star
} from 'lucide-react';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const fadeInUp: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
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

  const fadeInLeft: Variants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const fadeInRight: Variants = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
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
        staggerChildren: 0.2
      }
    }
  };

  const popupVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["H-165, H Block, L Block, Ambedkar Chawk, Shastri Nagar, Meerut, Uttar Pradesh 250002"],
      color: "text-pink-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 09997795796", "Available 10:30 AM - 10 PM"],
      color: "text-pink-700"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Monday - Sunday", "10:30 AM - 10:00 PM", "Fresh baking all day!"],
      color: "text-pink-600"
    }
  ];

  const handleContactClick = () => {
    setShowPopup(true);
  };

  const handleWhatsAppClick = () => {
    alert("Demo Site - WhatsApp integration is not functional in this demo.");
  };

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/search/mrs+and+mr+cakewala/@28.9533806,77.7387134,14z?entry=s&sa=X&ved=1t%3A199789', '_blank');
  };

  return (
    <>
      <section id="contact" className="relative py-16 md:py-24 overflow-hidden" >
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-white/20 to-pink-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-pink-300/20 to-white/25 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-200/25 to-pink-100/20 rounded-full blur-2xl" />
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
             <span className='text-black'>Visit </span> Us
            </h2>
            <p className="font-inter text-lg md:text-xl text-pink-800 max-w-3xl mx-auto leading-relaxed">
              Come experience the warmth of our bakery, meet our passionate bakers, 
              and taste the difference that love and tradition make.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 mb-16">
            {/* Left Side - Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-6"
            >
              <motion.div variants={staggerContainer} className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200/50 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-xl md:text-2xl text-black font-bold mb-3">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className={`font-inter text-sm md:text-base ${detailIndex === info.details.length - 1 ? 'text-pink-600 font-medium italic' : 'text-pink-800'} ${detailIndex > 0 ? 'mt-1' : ''}`}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6"
              >
                <button
                  onClick={handleContactClick}
                  className="group bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-pink-600/30 transition-all duration-300 transform hover:scale-105 font-inter"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Contact Us</span>
                  </span>
                </button>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="group bg-white/80 backdrop-blur-sm text-pink-800 px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-pink-200/50 font-inter"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp (Demo)</span>
                  </span>
                </button>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200/30"
              >
                <h4 className="font-playfair text-xl text-pink-900 font-bold mb-4 text-center">
                  Follow Us
                </h4>
                <div className="flex justify-center space-x-4">
                  {[
                    { icon: Instagram, color: "hover:text-pink-600" },
                    { icon: Facebook, color: "hover:text-blue-600" },
                    { icon: Twitter, color: "hover:text-blue-400" }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-700 ${social.color} transition-all duration-300 transform hover:scale-110 shadow-md`}
                    >
                      <social.icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
                <p className="text-center text-sm text-pink-700 mt-3 font-inter">
                  Share your sweet moments with us! #MrAndMrsCakewala
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-pink-200/50 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-playfair text-2xl md:text-3xl text-pink-900 font-bold">
                    Find Us Here
                  </h3>
                  <button
                    onClick={handleMapClick}
                    className="flex items-center space-x-2 text-pink-700 hover:text-pink-800 transition-colors font-inter text-sm"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                {/* Map Container */}
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28037.96632829355!2d77.7387134!3d28.9533806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64d6bb4c6a7d%3A0x6e51d60c2b4b2b2b!2sMrs%20and%20Mr%20Cakewala!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                  ></iframe>

                  {/* Map Overlay Info */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-pink-200/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-playfair text-lg font-bold text-pink-900">We&apos;re Here!</p>
                        <p className="text-sm text-pink-700 font-inter">Downtown District</p>
                      </div>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-pink-200/30">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-pink-600 fill-current" />
                      <span className="font-bold text-pink-900 font-inter">4.8</span>
                      <span className="text-sm text-pink-700 font-inter">(2.1k reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-pink-100/50 rounded-xl">
                    <Clock className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-pink-900 font-inter">Open Now</p>
                    <p className="text-xs text-pink-700 font-inter">Until 10 PM</p>
                  </div>
                  <div className="text-center p-4 bg-pink-100/50 rounded-xl">
                    <Phone className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-pink-900 font-inter">Call Now</p>
                    <p className="text-xs text-pink-700 font-inter">+91 09997795796</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-400/10 to-transparent pointer-events-none" />
      </section>

      {/* Contact Form Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-pink-200/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-playfair text-2xl md:text-3xl text-pink-900 font-bold mb-4">
                Contact Form
              </h3>
              
              <p className="text-pink-800 font-inter mb-6 leading-relaxed">
                This feature is currently in development. Please use our phone number or visit us directly for immediate assistance.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-2 text-pink-700 font-inter">
                  <Phone className="w-5 h-5" />
                  <span>09997795796</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-pink-700 font-inter">
                  <MapPin className="w-5 h-5" />
                  <span>H-165, H Block, L Block, Ambedkar Chawk, Shastri Nagar, Meerut, Uttar Pradesh 250002</span>
                </div>
              </div>
              
              <button
                onClick={() => setShowPopup(false)}
                className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-pink-600/30 transition-all duration-300 transform hover:scale-105 font-inter"
              >
                Got it!
              </button>
            </div>
            
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Contact;