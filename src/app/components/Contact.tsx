'use client';

import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    occasion: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon. 🎂');
  };

  return (
    <section className="contact-section">
      {/* Background Elements */}
      <div className="contact-background-pattern"></div>
      <div className="contact-background-overlay"></div>
      
      {/* Floating Bakery Elements */}
      <div className="floating-bakery-elements">
        <div className="floating-element element-1">🎂</div>
        <div className="floating-element element-2">🍰</div>
        <div className="floating-element element-3">🧁</div>
        <div className="floating-element element-4">🌸</div>
        <div className="floating-element element-5">✨</div>
      </div>

      <div className="container">
        {/* Cute Introductory Message */}
        <div className="contact-intro">
          <div className="intro-icon">💌</div>
          <h2 className="section-title">Let's Create Something Sweet Together!</h2>
          <p className="section-subtitle">
            Whether you're planning a celebration or just craving something delicious, 
            we're here to make your day extra special. Drop us a message and let's bake up some happiness!
          </p>
          <div className="intro-divider">
            <div className="divider-line"></div>
            <div className="divider-icon">🍰</div>
            <div className="divider-line"></div>
          </div>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">🏪</div>
              <div className="info-content">
                <h3>Visit Our Bakery</h3>
                <p>123 Sweet Street<br />Meerut, Uttar Pradesh 250001</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>+91 98765 43210<br />Mon-Sun: 8AM - 9PM</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>hello@mrsandcakewala.com<br />orders@mrsandcakewala.com</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h3>Bakery Hours</h3>
                <p>Monday - Friday: 8AM - 9PM<br />Saturday - Sunday: 8AM - 10PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h3>Send Us a Sweet Message</h3>
              <p>We'd love to hear from you! Fill out the form below and we'll get back to you faster than you can say "cupcake"!</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="What should we call you?"
                  />
                  <div className="input-decoration">👤</div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Where can we reach you?"
                  />
                  <div className="input-decoration">📧</div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="occasion">Occasion (Optional)</label>
                <div className="input-wrapper">
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                  >
                    <option value="">Select an occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="wedding">Wedding</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="just-because">Just Because!</option>
                  </select>
                  <div className="input-decoration">🎉</div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Sweet Message</label>
                <div className="input-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your cake dreams..."
                  ></textarea>
                  <div className="input-decoration">💭</div>
                </div>
              </div>
              
              <button type="submit" className="submit-btn">
                <span className="btn-icon">✉️</span>
                Send Message
                <span className="btn-sparkle">✨</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bakery Promise */}
        <div className="bakery-promise">
          <div className="promise-content">
            <h3>Our Sweet Promise to You</h3>
            <div className="promise-divider">
              <div className="divider-line"></div>
              <div className="divider-icon">❤️</div>
              <div className="divider-line"></div>
            </div>
            <div className="promise-items">
              <div className="promise-item">
                <div className="promise-icon">⏰</div>
                <h4>Quick Response</h4>
                <p>We'll get back to you within 24 hours</p>
              </div>
              <div className="promise-item">
                <div className="promise-icon">🎨</div>
                <h4>Custom Designs</h4>
                <p>We bring your cake vision to life</p>
              </div>
              <div className="promise-item">
                <div className="promise-icon">❤️</div>
                <h4>Made with Love</h4>
                <p>Every cake is crafted with care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        .contact-section {
          padding: 100px 0;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, 
            rgba(249, 245, 235, 0.95) 0%, 
            rgba(252, 246, 240, 0.95) 50%,
            rgba(242, 230, 214, 0.95) 100%),
            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238b4513' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        
        .contact-background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(249, 211, 113, 0.15) 0%, transparent 25%),
            radial-gradient(circle at 80% 70%, rgba(139, 69, 19, 0.1) 0%, transparent 25%);
          pointer-events: none;
        }
        
        .contact-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.7) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(139, 69, 19, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .floating-bakery-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .floating-element {
          position: absolute;
          font-size: 2.2rem;
          animation: float 6s ease-in-out infinite;
          opacity: 0.8;
          filter: drop-shadow(0 4px 8px rgba(139, 69, 19, 0.15));
        }
        
        .element-1 { top: 15%; left: 5%; animation-delay: 0s; }
        .element-2 { top: 25%; right: 10%; animation-delay: 2s; }
        .element-3 { bottom: 30%; left: 15%; animation-delay: 4s; }
        .element-4 { top: 60%; right: 5%; animation-delay: 1s; font-size: 1.8rem; }
        .element-5 { bottom: 20%; right: 15%; animation-delay: 3s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-15px) rotate(5deg); opacity: 1; }
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }
        
        .contact-intro {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }
        
        .intro-icon {
          font-size: 4.5rem;
          margin-bottom: 25px;
          animation: bounce 2s infinite;
          display: inline-block;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: #3A2C1E;
          margin: 0 0 20px 0;
          position: relative;
          display: inline-block;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 3px;
          background: linear-gradient(90deg, #8B4513, #F9D371);
        }
        
        .section-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.3rem;
          color: #5C4B37;
          max-width: 700px;
          margin: 30px auto 0;
          line-height: 1.7;
        }
        
        .intro-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 30px auto 0;
          max-width: 400px;
        }
        
        .divider-line {
          height: 2px;
          flex: 1;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
        }
        
        .divider-icon {
          margin: 0 15px;
          font-size: 1.5rem;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 50px;
          margin-bottom: 60px;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .info-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 30px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(139, 69, 19, 0.1);
          transition: all 0.3s ease;
          backdrop-filter: blur(1px);
        }
        
        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
          border-color: rgba(139, 69, 19, 0.2);
        }
        
        .info-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
          background: linear-gradient(135deg, #8B4513, #A0522D);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 4px rgba(139, 69, 19, 0.2));
        }
        
        .info-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          color: #3A2C1E;
          margin: 0 0 12px 0;
        }
        
        .info-content p {
          font-family: 'Montserrat', sans-serif;
          color: #5C4B37;
          margin: 0;
          line-height: 1.6;
        }
        
        .contact-form-container {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 25px;
          padding: 40px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(139, 69, 19, 0.1);
          backdrop-filter: blur(1px);
        }
        
        .form-header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .form-header h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          color: #3A2C1E;
          margin: 0 0 15px 0;
        }
        
        .form-header p {
          font-family: 'Montserrat', sans-serif;
          color: #5C4B37;
          margin: 0;
          line-height: 1.6;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .form-group {
          position: relative;
        }
        
        .form-group label {
          display: block;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: #3A2C1E;
          margin-bottom: 8px;
        }
        
        .input-wrapper {
          position: relative;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 16px 16px 16px 50px;
          border: 2px solid #E5D9CC;
          border-radius: 12px;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          color: #5C4B37;
          transition: all 0.3s ease;
          background: #FFF;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #8B4513;
          box-shadow: 0 0 0 3px rgba(139, 69, 19, 0.1);
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .input-decoration {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.2rem;
          color: #8B4513;
          pointer-events: none;
        }
        
        .form-group textarea + .input-decoration {
          top: 20px;
          transform: none;
        }
        
        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 35px;
          background: linear-gradient(135deg, #8B4513, #A0522D);
          color: white;
          border: none;
          border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3);
          margin-top: 10px;
          position: relative;
          overflow: hidden;
        }
        
        .submit-btn:hover {
          background: linear-gradient(135deg, #A0522D, #8B4513);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(139, 69, 19, 0.4);
        }
        
        .submit-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(30deg);
          transition: all 0.5s ease;
        }
        
        .submit-btn:hover::before {
          transform: translateX(100%) rotate(30deg);
        }
        
        .btn-icon {
          font-size: 1.3rem;
        }
        
        .btn-sparkle {
          position: absolute;
          right: 20px;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .submit-btn:hover .btn-sparkle {
          opacity: 1;
          transform: translateX(5px);
        }
        
        .bakery-promise {
          background: linear-gradient(135deg, rgba(44, 24, 16, 0.03), rgba(249, 211, 113, 0.05));
          border-radius: 25px;
          padding: 50px;
          text-align: center;
          border: 1px solid rgba(139, 69, 19, 0.1);
          backdrop-filter: blur(1px);
        }
        
        .promise-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #3A2C1E;
          margin: 0 0 20px 0;
        }
        
        .promise-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 40px;
          max-width: 300px;
        }
        
        .promise-items {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        
        .promise-item {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid rgba(139, 69, 19, 0.1);
        }
        
        .promise-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: rgba(139, 69, 19, 0.2);
        }
        
        .promise-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
          background: linear-gradient(135deg, #8B4513, #A0522D);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        
        .promise-item h4 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: #3A2C1E;
          margin: 0 0 10px 0;
        }
        
        .promise-item p {
          font-family: 'Montserrat', sans-serif;
          color: #5C4B37;
          margin: 0;
          line-height: 1.6;
        }
        
        @media (max-width: 992px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .promise-items {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .contact-section {
            padding: 80px 0;
          }
          
          .section-title {
            font-size: 2.8rem;
          }
          
          .info-card {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
          
          .promise-items {
            grid-template-columns: 1fr;
          }
          
          .contact-form-container {
            padding: 30px 25px;
          }
        }
        
        @media (max-width: 576px) {
          .section-title {
            font-size: 2.2rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
          
          .intro-icon {
            font-size: 3.5rem;
          }
          
          .bakery-promise {
            padding: 30px 20px;
          }
          
          .floating-element {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;