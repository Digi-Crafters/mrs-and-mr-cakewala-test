'use client';

import React, { useState } from 'react';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuCategories = [
    { id: 'all', name: 'All Cakes' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'anniversary', name: 'Anniversary' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'theme', name: 'Theme Cakes' },
    { id: 'custom', name: 'Custom Cakes' },
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Chocolate Truffle',
      description: 'Rich chocolate cake with layers of dark chocolate ganache',
      price: '₹899',
      category: ['all', 'birthday'],
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Red Velvet Delight',
      description: 'Classic red velvet with cream cheese frosting',
      price: '₹1,099',
      category: ['all', 'anniversary'],
      image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Vanilla Berry Bliss',
      description: 'Vanilla sponge with mixed berry compote and fresh cream',
      price: '₹949',
      category: ['all', 'wedding'],
      image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Butterscotch Dream',
      description: 'Butterscotch cake with caramel sauce and nuts',
      price: '₹999',
      category: ['all', 'theme'],
      image: 'https://images.unsplash.com/photo-1586788680434-30d8b2b0625d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      name: 'Black Forest',
      description: 'Chocolate cake with cherries and whipped cream',
      price: '₹849',
      category: ['all', 'birthday'],
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 6,
      name: 'Pineapple Fantasy',
      description: 'Vanilla cake with pineapple filling and buttercream',
      price: '₹899',
      category: ['all', 'anniversary'],
      image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 7,
      name: 'Royal Wedding Cake',
      description: 'Elegant multi-tier vanilla cake with floral accents',
      price: '₹3,499',
      category: ['all', 'wedding', 'custom'],
      image: 'https://images.unsplash.com/photo-1535254979300-3c5273e5a339?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 8,
      name: 'Custom Photo Cake',
      description: 'Personalized cake with edible image printing',
      price: '₹1,299',
      category: ['all', 'custom'],
      image: 'https://images.unsplash.com/photo-1574085732737-67c1017a79d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category.includes(activeCategory));

  return (
    <section className="menu-section">
      {/* Background Elements */}
      <div className="menu-background-pattern"></div>
      <div className="menu-background-overlay"></div>
      <div className="menu-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
      
      <div className="container">
        <div className="menu-header">
          <h2 className="section-title">Our Exquisite Collection</h2>
          <p className="section-subtitle">Indulge in our handcrafted creations, made with love and the finest ingredients</p>
        </div>

        <div className="category-filter">
          {menuCategories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-item">
              <div className="square-card">
                <div className="card-frame">
                  <div className="frame-corner corner-tl"></div>
                  <div className="frame-corner corner-tr"></div>
                  <div className="frame-corner corner-bl"></div>
                  <div className="frame-corner corner-br"></div>
                </div>
                
                <div className="item-image">
                  <img src={item.image} alt={item.name} onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                  }} />
                  <div className="item-overlay">
                    <button className="quick-view-btn">Quick View</button>
                  </div>
                </div>
                
                <div className="item-content">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  <div className="item-footer">
                    <span className="item-price">{item.price}</span>
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-cta">
          <p className="cta-text">Can't find what you're looking for?</p>
          <button className="cta-button">Customize Your Cake</button>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        .menu-section {
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          background: 
            linear-gradient(135deg, 
              #D2691E 0%, 
              #CD853F 15%, 
              #DEB887 35%, 
              #F4A460 60%, 
              #DAA520 85%, 
              #B8860B 100%
            );
        }
        
        .menu-background-pattern {
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
        
        .menu-background-overlay {
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
        
        .menu-particles {
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
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }
        
        .menu-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
          font-weight: 700;
          color: #2C1810;
          margin: 0 0 20px 0;
          position: relative;
          display: inline-block;
          text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #8B4513, #F9D371);
        }
        
        .section-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          color: #3A2C1E;
          max-width: 600px;
          margin: 30px auto 0;
          line-height: 1.6;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.2);
        }
        
        .category-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 50px;
        }
        
        .filter-btn {
          padding: 12px 25px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.15);
          border-radius: 30px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: #2C1810;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(1px);
        }
        
        .filter-btn:hover {
          border-color: #8B4513;
          background: rgba(139, 69, 19, 0.2);
          transform: translateY(-2px);
        }
        
        .filter-btn.active {
          background: linear-gradient(135deg, #2C1810 0%, #3A2C1E 100%);
          border-color: #2C1810;
          color: #F9D371;
          box-shadow: 0 5px 15px rgba(44, 24, 16, 0.3);
        }
        
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }
        
        .menu-item {
          perspective: 1000px;
        }
        
        .square-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(1px);
        }
        
        .square-card:hover {
          transform: translateY(-10px) rotateX(5deg);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }
        
        .card-frame {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          pointer-events: none;
        }
        
        .frame-corner {
          position: absolute;
          width: 15px;
          height: 15px;
          border: 2px solid rgba(44, 24, 16, 0.5);
          transition: all 0.4s ease;
        }
        
        .corner-tl { top: 0; left: 0; border-right: none; border-bottom: none; }
        .corner-tr { top: 0; right: 0; border-left: none; border-bottom: none; }
        .corner-bl { bottom: 0; left: 0; border-right: none; border-top: none; }
        .corner-br { bottom: 0; right: 0; border-left: none; border-top: none; }
        
        .square-card:hover .frame-corner {
          border-color: #2C1810;
          transform: scale(1.2);
        }
        
        .item-image {
          position: relative;
          height: 280px;
          overflow: hidden;
        }
        
        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .square-card:hover .item-image img {
          transform: scale(1.05);
        }
        
        .item-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(58, 44, 30, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .square-card:hover .item-overlay {
          opacity: 1;
        }
        
        .quick-view-btn {
          padding: 10px 20px;
          background: #F9D371;
          color: #3A2C1E;
          border: none;
          border-radius: 20px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .quick-view-btn:hover {
          background: #E5C25D;
          transform: scale(1.05);
        }
        
        .item-content {
          padding: 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .item-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #2C1810;
          margin: 0 0 12px 0;
        }
        
        .item-description {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          color: #5C4B37;
          line-height: 1.5;
          margin: 0 0 25px 0;
          flex-grow: 1;
        }
        
        .item-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .item-price {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #8B4513;
        }
        
        .add-to-cart-btn {
          padding: 10px 20px;
          background: transparent;
          border: 2px solid #8B4513;
          border-radius: 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #8B4513;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .add-to-cart-btn:hover {
          background: #8B4513;
          color: white;
          transform: translateY(-2px);
        }
        
        .menu-cta {
          text-align: center;
          padding: 40px;
          background: linear-gradient(135deg, rgba(44, 24, 16, 0.9), rgba(58, 44, 30, 0.8));
          border-radius: 20px;
          color: white;
          backdrop-filter: blur(1px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .cta-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2rem;
          margin: 0 0 20px 0;
          color: #F9D371;
        }
        
        .cta-button {
          padding: 15px 35px;
          background: linear-gradient(135deg, #F9D371 0%, #E5C25D 100%);
          border: none;
          border-radius: 30px;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #3A2C1E;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(249, 211, 113, 0.3);
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(249, 211, 113, 0.4);
        }
        
        @keyframes patternMove {
          0% { background-position: 0 0, 20px 20px, 40px 40px; }
          100% { background-position: 60px 60px, 80px 80px, 120px 120px; }
        }
        
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
          33% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          66% { transform: translateY(-10px) translateX(-5px); opacity: 0.7; }
        }
        
        @media (max-width: 992px) {
          .menu-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
          }
          
          .section-title {
            font-size: 2.8rem;
          }
        }
        
        @media (max-width: 768px) {
          .menu-section {
            padding: 100px 0;
          }
          
          .section-title {
            font-size: 2.4rem;
          }
          
          .category-filter {
            gap: 10px;
          }
          
          .filter-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
          
          .menu-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 25px;
          }
        }
        
        @media (max-width: 576px) {
          .section-title {
            font-size: 2rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
          }
          
          .category-filter {
            flex-wrap: nowrap;
            overflow-x: auto;
            justify-content: flex-start;
            padding-bottom: 10px;
          }
          
          .filter-btn {
            white-space: nowrap;
          }
          
          .menu-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .menu-cta {
            padding: 30px 20px;
          }
          
          .cta-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MenuSection;