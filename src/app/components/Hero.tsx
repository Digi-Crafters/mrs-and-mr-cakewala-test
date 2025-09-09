'use client';

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className="delivery-info">
            <span className="delivering-to">Delivering To</span>
            <span className="location">Meerut ▾</span>
          </div>
          
          <div className="top-links">
            <a href="#" className="top-link">Titanic Order</a>
            <a href="#" className="top-link">Cart (0)</a>
            <a href="#" className="top-link">Login/Signup</a>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="container">
          <div className="logo-section">
            <h1 className="logo">Mrs. & Mr. Cakewala</h1>
          </div>

          <div className={`search-bar ${isSearchFocused ? 'focused' : ''}`}>
            <input
              type="text"
              placeholder="Search for cakes, occasion, flavour and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <button className="search-btn">🔍</button>
          </div>

          <div className="header-actions">
            <button className="help-btn">
              <span className="help-icon">💬</span>
              <span>Hey, need any help?</span>
            </button>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container">
          <ul className="nav-list">
            <li><a href="#" className="nav-link">Cakes</a></li>
            <li><a href="#" className="nav-link">Theme Cakes</a></li>
            <li><a href="#" className="nav-link">By Relationship</a></li>
            <li><a href="#" className="nav-link">Desserts</a></li>
            <li><a href="#" className="nav-link">Birthday</a></li>
            <li><a href="#" className="nav-link">Hampers</a></li>
            <li><a href="#" className="nav-link">Anniversary</a></li>
            <li><a href="#" className="nav-link">Occasions</a></li>
            <li><a href="#" className="nav-link">Customized Cakes</a></li>
          </ul>
        </div>
      </nav>

      <div className="hero-banner">
        <div className="hero-background-pattern"></div>
        <div className="hero-background-overlay"></div>
        <div className="hero-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
        
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-text">Premium Quality</span>
              </div>
              <h2 className="hero-title">Crafting Happiness, One Cake at a Time</h2>
              <p className="hero-description">
                Freshly baked with love, served with elegance — discover Meerut's favorite pastry shop where every bite tells a story.
              </p>
              <div className="hero-actions">
                <button className="hero-btn primary">
                  <span className="btn-text">THEME CAKES</span>
                  <div className="btn-shine"></div>
                </button>
                <button className="hero-btn secondary">
                  <span className="btn-text">ORDER NOW</span>
                  <div className="btn-glow"></div>
                </button>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="cake-showcase">
                <div className="showcase-frame">
                  <div className="frame-border"></div>
                  <div className="frame-corner corner-tl"></div>
                  <div className="frame-corner corner-tr"></div>
                  <div className="frame-corner corner-bl"></div>
                  <div className="frame-corner corner-br"></div>
                </div>
                
                <div className="cake-container">
                  <div className="cake-glow-ring"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Elegant Multi-tier Wedding Cake" 
                    className="cake-image"
                  />
                  <div className="cake-reflection"></div>
                </div>
                
                <div className="showcase-info">
                  <div className="info-card">
                    <span className="info-label">Featured</span>
                    <h3 className="info-title">Premium Cakes</h3>
                    <div className="info-price">Starting ₹599</div>
                    <div className="info-rating">
                      <span className="stars">⭐⭐⭐⭐⭐</span>
                      <span className="rating-text">4.9 (250+ reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="floating-decorations">
                <div className="floating-element element-1">🎂</div>
                <div className="floating-element element-2">✨</div>
                <div className="floating-element element-3">🍰</div>
                <div className="floating-element element-4">🎉</div>
                <div className="floating-element element-5">💫</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
        }
        
        .header {
          background: linear-gradient(to bottom, #FFFFFF 0%, #FFF9F5 100%);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .top-bar {
          background: #3A2C1E;
          color: #F9D371;
          padding: 8px 0;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
        }
        
        .top-bar .container {
          justify-content: space-between;
        }
        
        .delivering-to {
          margin-right: 8px;
          opacity: 0.8;
        }
        
        .location {
          font-weight: 600;
          cursor: pointer;
        }
        
        .top-links {
          display: flex;
          gap: 25px;
        }
        
        .top-link {
          color: #F9D371;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        
        .top-link:hover {
          opacity: 0.8;
        }
        
        .main-header {
          padding: 20px 0;
        }
        
        .main-header .container {
          justify-content: space-between;
        }
        
        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: #8B4513;
          margin: 0;
        }
        
        .search-bar {
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid #E5D9CC;
          border-radius: 30px;
          padding: 0 15px;
          width: 450px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(139, 69, 19, 0.1);
        }
        
        .search-bar.focused {
          border-color: #8B4513;
          box-shadow: 0 2px 12px rgba(139, 69, 19, 0.2);
        }
        
        .search-bar input {
          flex: 1;
          border: none;
          padding: 12px 0;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          color: #5C4B37;
          background: transparent;
          outline: none;
        }
        
        .search-bar input::placeholder {
          color: #A89B8C;
        }
        
        .search-btn {
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          color: #8B4513;
          padding: 5px;
        }
        
        .help-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #F9F5EB;
          border: 1px solid #E5D9CC;
          border-radius: 20px;
          padding: 10px 15px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          color: #8B4513;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .help-btn:hover {
          background: #F3E9D6;
        }
        
        .main-nav {
          border-top: 1px solid #F0E6DB;
          border-bottom: 1px solid #F0E6DB;
          padding: 15px 0;
        }
        
        .nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 30px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        
        .nav-list::-webkit-scrollbar {
          display: none;
        }
        
        .nav-link {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          color: #5C4B37;
          text-decoration: none;
          white-space: nowrap;
          padding: 5px 0;
          position: relative;
          transition: color 0.2s;
        }
        
        .nav-link:hover {
          color: #8B4513;
        }
        
        .nav-link:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #8B4513;
          transition: width 0.3s;
        }
        
        .nav-link:hover:after {
          width: 100%;
        }
        
        .hero-banner {
          background: 
            linear-gradient(135deg, 
              #D2691E 0%, 
              #CD853F 15%, 
              #DEB887 35%, 
              #F4A460 60%, 
              #DAA520 85%, 
              #B8860B 100%
            );
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          min-height: 600px;
        }
        
        .hero-background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.15) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(249, 211, 113, 0.08) 3px, transparent 3px);
          background-size: 60px 60px, 40px 40px, 80px 80px;
          background-position: 0 0, 20px 20px, 40px 40px;
          animation: patternMove 20s linear infinite;
          opacity: 0.6;
        }
        
        .hero-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(139, 69, 19, 0.15) 0%, transparent 50%),
            linear-gradient(45deg, rgba(249, 211, 113, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .hero-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          animation: particleFloat 8s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        
        .particle-1 { top: 10%; left: 10%; animation-delay: 0s; }
        .particle-2 { top: 20%; right: 20%; animation-delay: 2s; }
        .particle-3 { bottom: 30%; left: 15%; animation-delay: 4s; }
        .particle-4 { top: 60%; right: 10%; animation-delay: 6s; }
        .particle-5 { bottom: 20%; right: 30%; animation-delay: 1s; }
        
        .hero-container {
          align-items: stretch !important;
          position: relative;
          z-index: 2;
        }
        
        .hero-content {
          display: flex;
          align-items: center;
          gap: 100px;
          width: 100%;
        }
        
        .hero-text {
          flex: 1;
          max-width: 520px;
        }
        
        .hero-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          padding: 8px 20px;
          margin-bottom: 25px;
          backdrop-filter: blur(-1px);
        }
        
        .badge-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #2C1810;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 700;
          margin: 0 0 30px 0;
          color: #2C1810;
          line-height: 1.1;
          letter-spacing: -1px;
          text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
        }
        
        .hero-description {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.15rem;
          color: #3A2C1E;
          line-height: 1.8;
          margin: 0 0 40px 0;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.2);
          opacity: 0.9;
        }
        
        .hero-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .hero-btn {
          position: relative;
          padding: 18px 40px;
          border: none;
          border-radius: 35px;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          text-transform: uppercase;
          letter-spacing: 1px;
          overflow: hidden;
          z-index: 1;
        }
        
        .btn-text {
          position: relative;
          z-index: 2;
        }
        
        .hero-btn.primary {
          background: linear-gradient(135deg, #2C1810 0%, #3A2C1E 100%);
          color: #F9D371;
          box-shadow: 0 8px 32px rgba(44, 24, 16, 0.4);
          border: 2px solid rgba(249, 211, 113, 0.3);
        }
        
        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(249, 211, 113, 0.3), transparent);
          transition: left 0.5s;
        }
        
        .hero-btn.primary:hover .btn-shine {
          left: 100%;
        }
        
        .hero-btn.primary:hover {
          background: linear-gradient(135deg, #3A2C1E 0%, #2C1810 100%);
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(44, 24, 16, 0.6);
          border-color: #F9D371;
        }
        
        .hero-btn.secondary {
          background: rgba(255, 255, 255, 0.2);
          color: #2C1810;
          border: 2px solid #2C1810;
          backdrop-filter: blur(1px);
        }
        
        .btn-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(44, 24, 16, 0.1);
          border-radius: 35px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .hero-btn.secondary:hover .btn-glow {
          opacity: 1;
        }
        
        .hero-btn.secondary:hover {
          background: rgba(44, 24, 16, 0.1);
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(44, 24, 16, 0.3);
          border-color: #2C1810;
        }
        
        .hero-image {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
        }
        
        .cake-showcase {
          position: relative;
          width: 100%;
          max-width: 480px;
          height: 500px;
        }
        
        .showcase-frame {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .frame-border {
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          bottom: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.1);
        //   backdrop-filter: blur(1px);
          transition: all 0.4s ease;
        }
        
        .cake-showcase:hover .frame-border {
          border-color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 50px rgba(255, 255, 255, 0.3);
        }
        
        .frame-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 3px solid rgba(44, 24, 16, 0.8);
          transition: all 0.4s ease;
        }
        
        .corner-tl { top: 0; left: 0; border-right: none; border-bottom: none; }
        .corner-tr { top: 0; right: 0; border-left: none; border-bottom: none; }
        .corner-bl { bottom: 0; left: 0; border-right: none; border-top: none; }
        .corner-br { bottom: 0; right: 0; border-left: none; border-top: none; }
        
        .cake-showcase:hover .frame-corner {
          transform: scale(1.2);
          border-color: #2C1810;
          box-shadow: 0 0 15px rgba(44, 24, 16, 0.5);
        }
        
        .cake-container {
          position: absolute;
          top: 40px;
          left: 40px;
          right: 40px;
          bottom: 100px;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .cake-showcase:hover .cake-container {
          transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
        }
        
        .cake-glow-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.4), transparent, rgba(44, 24, 16, 0.3), transparent);
          border-radius: 25px;
          animation: rotate 4s linear infinite;
          z-index: -1;
        }
        
        .cake-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
          filter: brightness(1.1) contrast(1.1) saturate(1.2);
        }
        
        .cake-showcase:hover .cake-image {
          transform: scale(1.05);
        }
        
        .cake-reflection {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(218, 165, 32, 0.3), transparent);
          pointer-events: none;
        }
        
        .showcase-info {
          position: absolute;
          bottom: 0;
          left: 20px;
          right: 20px;
          transform: translateY(10px);
          transition: transform 0.4s ease;
        }
        
        .cake-showcase:hover .showcase-info {
          transform: translateY(0);
        }
        
        .info-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(1px);
          border: 1px solid rgba(44, 24, 16, 0.2);
          border-radius: 15px;
          padding: 20px;
          color: #2C1810;
        }
        
        .info-label {
          display: inline-block;
          background: linear-gradient(135deg, #2C1810, #3A2C1E);
          color: #F9D371;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .info-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 8px 0;
          color: #2C1810;
        }
        
        .info-price {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #8B4513;
          margin-bottom: 10px;
        }
        
        .info-rating {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .stars {
          font-size: 0.9rem;
        }
        
        .rating-text {
          font-size: 0.85rem;
          color: rgba(44, 24, 16, 0.7);
        }
        
        .floating-decorations {
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
          animation: float 4s ease-in-out infinite;
          opacity: 0.9;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
        }
        
        .element-1 { top: 15%; left: -15%; animation-delay: 0s; }
        .element-2 { top: 60%; right: -10%; animation-delay: 1.5s; font-size: 1.8rem; }
        .element-3 { bottom: 25%; left: -12%; animation-delay: 3s; font-size: 2rem; }
        .element-4 { top: 5%; right: -18%; animation-delay: 0.8s; font-size: 1.6rem; }
        .element-5 { bottom: 5%; right: -8%; animation-delay: 2.3s; font-size: 1.4rem; }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-25px) rotate(15deg); 
            opacity: 1;
          }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
          33% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          66% { transform: translateY(-10px) translateX(-5px); opacity: 0.7; }
        }
        
        @keyframes patternMove {
          0% { background-position: 0 0, 20px 20px, 40px 40px; }
          100% { background-position: 60px 60px, 80px 80px, 120px 120px; }
        }
        
        @media (max-width: 992px) {
          .main-header .container {
            flex-direction: column;
            gap: 20px;
          }
          
          .search-bar {
            width: 100%;
            max-width: 500px;
          }
          
          .hero-content {
            flex-direction: column;
            gap: 60px;
            text-align: center;
          }
          
          .hero-text {
            max-width: none;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .cake-showcase {
            max-width: 400px;
            height: 420px;
          }
          
          .nav-list {
            gap: 20px;
          }
        }
        
        @media (max-width: 768px) {
          .top-bar .container {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }
          
          .hero-banner {
            padding: 100px 0;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }
          
          .hero-actions {
            justify-content: center;
          }
          
          .hero-btn {
            flex: 1;
            min-width: 160px;
          }
          
          .cake-showcase {
            max-width: 340px;
            height: 360px;
          }
          
          .nav-list {
            gap: 15px;
          }
          
          .floating-element {
            font-size: 1.8rem;
          }
        }
        
        @media (max-width: 576px) {
          .logo {
            font-size: 1.8rem;
          }
          
          .hero-title {
            font-size: 2.2rem;
            line-height: 1.2;
          }
          
          .hero-banner {
            padding: 80px 0;
          }
          
          .hero-content {
            gap: 50px;
          }
          
          .cake-showcase {
            max-width: 300px;
            height: 320px;
          }
          
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          
          .hero-btn {
            width: 100%;
            max-width: 300px;
          }
          
          .floating-element {
            font-size: 1.5rem;
          }
        }
        `}</style>
    </header>
    );
};export default Header;
