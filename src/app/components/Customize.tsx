'use client';

import React, { useState } from 'react';

const CustomizeCakeSection = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({
    size: null,
    flavor: null,
    frosting: null,
    occasion: null,
    decorations: null
  });
  const [customMessage, setCustomMessage] = useState('');
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);

  const customizationSteps = [
    {
      id: 'size',
      title: 'Choose Size',
      subtitle: 'Perfect for your gathering',
      options: [
        { 
          id: 'small', 
          name: 'Personal', 
          description: '1-2 People',
          price: 599, 
          image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        },
        { 
          id: 'medium', 
          name: 'Family', 
          description: '4-6 People',
          price: 999, 
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: true
        },
        { 
          id: 'large', 
          name: 'Party', 
          description: '8-12 People',
          price: 1499, 
          image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        },
        { 
          id: 'xlarge', 
          name: 'Celebration', 
          description: '15+ People',
          price: 2299, 
          image: 'https://images.unsplash.com/photo-1535254979300-3c5273e5a339?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        }
      ]
    },
    {
      id: 'flavor',
      title: 'Select Base Flavor',
      subtitle: 'The heart of your cake',
      options: [
        { 
          id: 'chocolate', 
          name: 'Rich Chocolate', 
          description: 'Dark Belgian cocoa',
          price: 0, 
          image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: true
        },
        { 
          id: 'vanilla', 
          name: 'Classic Vanilla', 
          description: 'Pure Madagascar vanilla',
          price: 0, 
          image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        },
        { 
          id: 'strawberry', 
          name: 'Fresh Strawberry', 
          description: 'Real fruit infusion',
          price: 149, 
          image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        },
        { 
          id: 'redvelvet', 
          name: 'Red Velvet', 
          description: 'Signature cocoa blend',
          price: 199, 
          image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: true
        },
        { 
          id: 'butterscotch', 
          name: 'Butterscotch', 
          description: 'Caramel butter delight',
          price: 99, 
          image: 'https://images.unsplash.com/photo-1586788680434-30d8b2b0625d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        },
        { 
          id: 'blackforest', 
          name: 'Black Forest', 
          description: 'Cherry & chocolate',
          price: 249, 
          image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        }
      ]
    },
    {
      id: 'frosting',
      title: 'Choose Frosting',
      subtitle: 'Smooth finishing touch',
      options: [
        { 
          id: 'buttercream', 
          name: 'Buttercream', 
          description: 'Classic & creamy',
          price: 0, 
          image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: true
        },
        { 
          id: 'ganache', 
          name: 'Chocolate Ganache', 
          description: 'Rich & glossy',
          price: 199, 
          image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: true
        },
        { 
          id: 'creamcheese', 
          name: 'Cream Cheese', 
          description: 'Tangy & smooth',
          price: 149, 
          image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        },
        { 
          id: 'whipped', 
          name: 'Whipped Cream', 
          description: 'Light & airy',
          price: 99, 
          image: 'https://images.unsplash.com/photo-1535254979300-3c5273e5a339?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        }
      ]
    },
    {
      id: 'occasion',
      title: 'Pick Occasion',
      subtitle: 'Make it special',
      options: [
        { 
          id: 'birthday', 
          name: 'Birthday', 
          description: 'Celebration candles included',
          price: 0, 
          image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: true
        },
        { 
          id: 'anniversary', 
          name: 'Anniversary', 
          description: 'Romantic design elements',
          price: 299, 
          image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        },
        { 
          id: 'wedding', 
          name: 'Wedding', 
          description: 'Elegant multi-tier design',
          price: 699, 
          image: 'https://images.unsplash.com/photo-1535254979300-3c5273e5a339?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        },
        { 
          id: 'celebration', 
          name: 'General Celebration', 
          description: 'Festive & colorful',
          price: 149, 
          image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        }
      ]
    },
    {
      id: 'decorations',
      title: 'Add Decorations',
      subtitle: 'Final artistic touches',
      options: [
        { 
          id: 'flowers', 
          name: 'Fresh Flowers', 
          description: 'Edible flower arrangements',
          price: 399, 
          image: 'https://images.unsplash.com/photo-1574085732737-67c1017a79d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: true
        },
        { 
          id: 'fondant', 
          name: 'Fondant Art', 
          description: 'Custom sculpted designs',
          price: 599, 
          image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        },
        { 
          id: 'chocolate', 
          name: 'Chocolate Shavings', 
          description: 'Premium chocolate curls',
          price: 199, 
          image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: true
        },
        { 
          id: 'photo', 
          name: 'Edible Photo Print', 
          description: 'Your memories on cake',
          price: 299, 
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: false
        }
      ]
    }
  ];

  const handleOptionSelect = (stepId, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [stepId]: option
    });
  };

  const calculateTotalPrice = () => {
    let total = 0;
    Object.values(selectedOptions).forEach(option => {
      if (option) total += option.price;
    });
    return total;
  };

  const getCompletedSteps = () => {
    return Object.values(selectedOptions).filter(option => option !== null).length;
  };

  const canProceed = () => {
    return selectedOptions[customizationSteps[selectedStep].id] !== null;
  };

  const getPreviewImage = () => {
    if (selectedOptions.size) return selectedOptions.size.image;
    if (selectedOptions.flavor) return selectedOptions.flavor.image;
    return 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
  };

  return (
    <section className="customize-section">
      {/* Background Elements */}
      <div className="customize-background-pattern"></div>
      <div className="customize-background-overlay"></div>
      <div className="customize-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      <div className="container">
        <div className="customize-header">
          <div className="header-badge">
            <span className="badge-text">Craft Your Vision</span>
          </div>
          <h2 className="section-title">What's in your Heart? Customize it.</h2>
          <p className="section-subtitle">
            Transform your celebration with a personalized masterpiece. Every detail crafted to perfection, every bite a memory in the making.
          </p>
        </div>

        <div className="customize-content">
          {/* Progress Indicator */}
          <div className="progress-section">
            <div className="progress-header">
              <h3>Customization Progress</h3>
              <span className="progress-count">{getCompletedSteps()}/{customizationSteps.length} Steps Complete</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(getCompletedSteps() / customizationSteps.length) * 100}%` }}
              ></div>
            </div>
            <div className="steps-indicator">
              {customizationSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`step-dot ${selectedOptions[step.id] ? 'completed' : ''} ${index === selectedStep ? 'active' : ''}`}
                  onClick={() => setSelectedStep(index)}
                >
                  <span className="step-number">{index + 1}</span>
                  <span className="step-label">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="main-customization">
            {/* Step Content */}
            <div className="step-content">
              <div className="step-header">
                <h3 className="step-title">{customizationSteps[selectedStep].title}</h3>
                <p className="step-subtitle">{customizationSteps[selectedStep].subtitle}</p>
              </div>

              <div className="options-container">
                {customizationSteps[selectedStep].options.map((option, index) => (
                  <div
                    key={option.id}
                    className={`option-card ${selectedOptions[customizationSteps[selectedStep].id]?.id === option.id ? 'selected' : ''}`}
                    onClick={() => handleOptionSelect(customizationSteps[selectedStep].id, option)}
                  >
                    {option.popular && <div className="popular-badge">Most Popular</div>}
                    
                    <div className="option-image-container">
                      <img src={option.image} alt={option.name} className="option-image" />
                      <div className="option-overlay">
                        <div className="selection-indicator">
                          <div className="check-mark">✓</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="option-details">
                      <h4 className="option-name">{option.name}</h4>
                      <p className="option-description">{option.description}</p>
                      <div className="option-price">
                        {option.price === 0 ? 'Included' : `+₹${option.price}`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="step-navigation">
                <button
                  className="nav-btn prev"
                  onClick={() => setSelectedStep(Math.max(0, selectedStep - 1))}
                  disabled={selectedStep === 0}
                >
                  ← Previous
                </button>
                <button
                  className={`nav-btn next ${!canProceed() ? 'disabled' : ''}`}
                  onClick={() => {
                    if (canProceed()) {
                      setSelectedStep(Math.min(customizationSteps.length - 1, selectedStep + 1));
                    }
                  }}
                  disabled={!canProceed() || selectedStep === customizationSteps.length - 1}
                >
                  Next Step →
                </button>
              </div>
            </div>

            {/* Live Preview Panel */}
            <div className="preview-panel">
              <div className="preview-card">
                <div className="preview-header">
                  <h3>Your Custom Creation</h3>
                  <button 
                    className="price-breakdown-btn"
                    onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
                  >
                    View Details
                  </button>
                </div>

                <div className="preview-image-container">
                  <img src={getPreviewImage()} alt="Cake Preview" className="preview-image" />
                  <div className="preview-frame">
                    <div className="frame-corner tl"></div>
                    <div className="frame-corner tr"></div>
                    <div className="frame-corner bl"></div>
                    <div className="frame-corner br"></div>
                  </div>
                </div>

                <div className="preview-details">
                  {Object.entries(selectedOptions).map(([key, option]) => {
                    if (!option) return null;
                    return (
                      <div key={key} className="selected-option">
                        <span className="option-category">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                        <span className="option-value">{option.name}</span>
                      </div>
                    );
                  })}
                </div>

                {showPriceBreakdown && (
                  <div className="price-breakdown">
                    <h4>Price Breakdown</h4>
                    {Object.entries(selectedOptions).map(([key, option]) => {
                      if (!option) return null;
                      return (
                        <div key={key} className="price-item">
                          <span>{option.name}</span>
                          <span>₹{option.price}</span>
                        </div>
                      );
                    })}
                    <div className="price-total">
                      <span>Total</span>
                      <span>₹{calculateTotalPrice()}</span>
                    </div>
                  </div>
                )}

                <div className="custom-message-section">
                  <label htmlFor="message">Personal Message (Optional):</label>
                  <textarea
                    id="message"
                    placeholder="Happy Birthday Sarah! 🎂"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    rows="3"
                  />
                </div>

                <div className="preview-total">
                  <div className="total-price">₹{calculateTotalPrice()}</div>
                  <div className="total-label">Estimated Total</div>
                </div>

                <button 
                  className={`order-btn ${getCompletedSteps() < customizationSteps.length ? 'incomplete' : ''}`}
                  disabled={getCompletedSteps() < customizationSteps.length}
                >
                  {getCompletedSteps() < customizationSteps.length ? 
                    `Complete ${customizationSteps.length - getCompletedSteps()} More Steps` : 
                    'Place Custom Order'
                  }
                  <div className="btn-shine"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="additional-services">
          <h3>Premium Add-ons Available</h3>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h4>Custom Artwork</h4>
              <p>Hand-painted designs by our cake artists</p>
              <span className="service-price">From ₹799</span>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h4>Video Consultation</h4>
              <p>30-min design session with our chef</p>
              <span className="service-price">₹499</span>
            </div>
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h4>Express Delivery</h4>
              <p>Same-day delivery within Meerut</p>
              <span className="service-price">₹199</span>
            </div>
            <div className="service-card">
              <div className="service-icon">🎁</div>
              <h4>Gift Packaging</h4>
              <p>Premium presentation box included</p>
              <span className="service-price">₹299</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        .customize-section {
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
        
        .customize-background-pattern {
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
        
        .customize-background-overlay {
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
        
        .customize-particles {
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
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }
        
        .customize-header {
          text-align: center;
          margin-bottom: 80px;
        }
        
        .header-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          padding: 8px 20px;
          margin-bottom: 25px;
          backdrop-filter: blur(1px);
        }
        
        .badge-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #2C1810;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.8rem;
          font-weight: 700;
          color: #2C1810;
          margin: 0 0 20px 0;
          position: relative;
          display: inline-block;
          text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
          line-height: 1.1;
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
          font-size: 1.2rem;
          color: #3A2C1E;
          max-width: 800px;
          margin: 30px auto 0;
          line-height: 1.7;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.2);
        }
        
        .progress-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 40px;
          backdrop-filter: blur(1px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .progress-header h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          color: #2C1810;
          margin: 0;
        }
        
        .progress-count {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: #8B4513;
        }
        
        .progress-bar {
          height: 8px;
          background: rgba(139, 69, 19, 0.2);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 25px;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #8B4513, #F9D371);
          transition: width 0.5s ease;
          border-radius: 10px;
        }
        
        .steps-indicator {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .step-dot {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 10px;
          border-radius: 10px;
        }
        
        .step-dot:hover {
          background: rgba(139, 69, 19, 0.1);
        }
        
        .step-dot.active {
          background: rgba(44, 24, 16, 0.1);
        }
        
        .step-number {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: rgba(139, 69, 19, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: #8B4513;
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }
        
        .step-dot.completed .step-number {
          background: #8B4513;
          color: white;
        }
        
        .step-dot.active .step-number {
          background: #2C1810;
          color: #F9D371;
          box-shadow: 0 0 0 3px rgba(44, 24, 16, 0.2);
        }
        
        .step-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #5C4B37;
          text-align: center;
          max-width: 80px;
          line-height: 1.2;
        }
        
        .main-customization {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 40px;
          margin-bottom: 60px;
        }
        
        .step-content {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 25px;
          padding: 40px;
          backdrop-filter: blur(1px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .step-header {
          margin-bottom : 30px;         
        }
        .step-title {
            font-family: 'Playfair Display', serif; 
            font-size: 2rem;
            color: #2C1810;
            margin: 0 0 10px 0;



            text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
            position: relative;
            display: inline-block;
            line-height: 1.1;
        }
        .step-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 2px;
            background: linear-gradient(90deg, #8B4513, #F9D371);
        }
        .step-subtitle {
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            color: #5C4B37;
            margin: 0;
            line-height: 1.5;
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.2);
        }
        .options-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
            max-height: 500px;
            overflow-y: auto;
            padding-right: 10px;
        }
        .options-container::-webkit-scrollbar {
            width: 6px;
        }
        .options-container::-webkit-scrollbar-thumb {
            background: rgba(139, 69, 19, 0.3);
            border-radius: 3px;
        }
        .option-card {
            background: rgba(255, 255, 255, 0.8);
            border: 2px solid transparent;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        .option-card:hover {

            border-color: #D2B48C;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
            background: rgba(255, 255, 255, 0.9);
        }
        .option-card.selected {

            border-color: #8B4513;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            background: rgba(255, 255, 255, 1);
            transform: scale(1.03);
            z-index: 1;
        }

        .popular-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #FFD700;
            color: #2C1810;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 5px 10px;
            border-radius: 12px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .option-image-container {
            position: relative;
            width: 100%;
            padding-top: 65%;
            overflow: hidden;
            border-radius: 12px 12px 0 0;
        }
        .option-image {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            object-fit: cover;
            border-radius: 12px 12px 0 0;
            transition: transform 0.3s;
        }
        .option-card.selected .option-image {
            transform: scale(1.05);
        }
        .option-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(249, 211, 113, 0.18);
            opacity: 0;
            transition: opacity 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .option-card.selected .option-overlay {
            opacity: 1;
        }
        .selection-indicator {
            width: 38px; height: 38px;
            background: #8B4513;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(139, 69, 19, 0.2);
        }
        .check-mark {
            color: #fff;
            font-size: 1.5rem;
            font-weight: bold;
        }
        .option-details {
            padding: 18px 15px 15px 15px;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .option-name {
            font-family: 'Playfair Display', serif;
            font-size: 1.1rem;
            font-weight: 600;
            color: #2C1810;
            margin: 0 0 5px 0;
        }
        .option-description {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.95rem;
            color: #5C4B37;
            margin-bottom: 8px;
        }
        .option-price {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.95rem;
            font-weight: 600;
            color: #8B4513;
            margin-top: auto;
        }
        .step-navigation {
            display: flex;
            justify-content: space-between;
            margin-top: 35px;
        }
        .nav-btn {
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            padding: 10px 28px;
            border-radius: 20px;
            border: none;
            background: linear-gradient(90deg, #F9D371, #8B4513);
            color: #2C1810;
            cursor: pointer;
            transition: background 0.3s, color 0.3s, opacity 0.3s;
            box-shadow: 0 2px 8px rgba(139, 69, 19, 0.08);
            outline: none;
        }
        .nav-btn.prev {
            background: linear-gradient(90deg, #DEB887, #F4A460);
            color: #5C4B37;
        }
        .nav-btn:disabled,
        .nav-btn.disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .preview-panel {
            background: rgba(255,255,255,0.98);
            border-radius: 25px;
            padding: 35px 30px;
            border: 1px solid rgba(255,255,255,0.3);
            box-shadow: 0 6px 24px rgba(139,69,19,0.08);
            min-width: 320px;
            max-width: 400px;
            margin-left: auto;
        }
        .preview-card {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .preview-header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 18px;
        }
        .preview-header h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.3rem;
            color: #2C1810;
            margin: 0;
        }
        .price-breakdown-btn {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.95rem;
            background: none;
            border: none;
            color: #8B4513;
            font-weight: 600;
            cursor: pointer;
            padding: 0;
            text-decoration: underline;
            transition: color 0.2s;
        }
        .price-breakdown-btn:hover {
            color: #B8860B;
        }
        .preview-image-container {
            position: relative;
            width: 220px;
            height: 160px;
            margin-bottom: 18px;
        }
        .preview-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 18px;
            box-shadow: 0 4px 16px rgba(139,69,19,0.13);
        }
        .preview-frame {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
        }
        .frame-corner {
            position: absolute;
            width: 28px; height: 28px;
            border: 3px solid #F9D371;
            border-radius: 8px;
        }
        .frame-corner.tl { top: 0; left: 0; border-right: none; border-bottom: none; }
        .frame-corner.tr { top: 0; right: 0; border-left: none; border-bottom: none; }
        .frame-corner.bl { bottom: 0; left: 0; border-right: none; border-top: none; }
        .frame-corner.br { bottom: 0; right: 0; border-left: none; border-top: none; }
        .preview-details {
            width: 100%;
            margin-bottom: 10px;
        }
        .selected-option {
            display: flex;
            justify-content: space-between;
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            color: #5C4B37;
            margin-bottom: 3px;
        }
        .option-category {
            font-weight: 600;
            margin-right: 8px;
        }
        .option-value {
            font-weight: 500;
        }
        .price-breakdown {
            width: 100%;
            background: #FFF8E1;
            border-radius: 12px;
            padding: 15px 18px;
            margin-bottom: 12px;
            box-shadow: 0 2px 8px rgba(249, 211, 113, 0.08);
        }
        .price-breakdown h4 {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.05rem;
            color: #8B4513;
            margin: 0 0 10px 0;
        }
        .price-item {
            display: flex;
            justify-content: space-between;
            font-size: 0.98rem;
            margin-bottom: 4px;
        }
        .price-total {
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            font-size: 1.1rem;
            color: #2C1810;
            border-top: 1px solid #F9D371;
            margin-top: 8px;
            padding-top: 6px;
        }
        .custom-message-section {
            width: 100%;
            margin: 12px 0 10px 0;
        }
        .custom-message-section label {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.98rem;
            color: #8B4513;
            font-weight: 600;
            margin-bottom: 4px;
            display: block;
        }
        .custom-message-section textarea {
            width: 100%;
            border-radius: 8px;
            border: 1px solid #F9D371;
            padding: 8px 10px;
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            resize: vertical;
            min-height: 38px;
            background: #FFFDF7;
            transition: border 0.2s;
        }
        .custom-message-section textarea:focus {
            border-color: #8B4513;
            outline: none;
        }
        .preview-total {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 12px 0 10px 0;
        }
        .total-price {
            font-family: 'Playfair Display', serif;
            font-size: 2.1rem;
            font-weight: 700;
            color: #8B4513;
            margin-bottom: 2px;
        }
        .total-label {
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            color: #5C4B37;
        }
        .order-btn {
            width: 100%;
            margin-top: 18px;
            font-family: 'Montserrat', sans-serif;
            font-size: 1.15rem;
            font-weight: 700;
            padding: 14px 0;
            border-radius: 22px;
            border: none;
            background: linear-gradient(90deg, #F9D371, #8B4513);
            color: #2C1810;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(249, 211, 113, 0.13);
            transition: background 0.3s, color 0.3s, opacity 0.3s;
        }
        .order-btn.incomplete {
            background: linear-gradient(90deg, #DEB887, #F4A460);
            color: #5C4B37;
            opacity: 0.7;
            cursor: not-allowed;
        }
        .btn-shine {
            position: absolute;
            top: 0; left: -75px;
            width: 60px; height: 100%;
            background: linear-gradient(120deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 100%);
            transform: skewX(-20deg);
            animation: shine 2.5s infinite;
            pointer-events: none;
        }
        @keyframes shine {
            0% { left: -75px; }
            60% { left: 110%; }
            100% { left: 110%; }
        }
        .additional-services {
            margin-top: 70px;
            background: rgba(255,255,255,0.93);
            border-radius: 18px;
            padding: 38px 30px 30px 30px;
            box-shadow: 0 2px 12px rgba(139,69,19,0.07);
        }
        .additional-services h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            color: #2C1810;
            margin-bottom: 28px;
            text-align: center;
        }
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
            gap: 22px;
        }
        .service-card {
            background: #FFFDF7;
            border-radius: 14px;
            padding: 22px 18px;
            box-shadow: 0 2px 8px rgba(249, 211, 113, 0.08);
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #F9D371;
        }
        .service-icon {
            font-size: 2.1rem;
            margin-bottom: 10px;
        }
        .service-card h4 {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.08rem;
            font-weight: 700;
            color: #8B4513;
            margin: 0 0 6px 0;
        }
        .service-card p {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.98rem;
            color: #5C4B37;
            margin: 0 0 8px 0;
            text-align: center;
        }
        .service-price {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.98rem;
            font-weight: 600;
            color: #B8860B;
        }
        @media (max-width: 1100px) {
            .main-customization {
            grid-template-columns: 1fr;
            gap: 30px;
            }
            .preview-panel {
            max-width: 100%;
            min-width: 0;
            margin-left: 0;
            }
        }
        @media (max-width: 700px) {
            .customize-section {
            padding: 60px 0 30px 0;
            }
            .customize-header {
            margin-bottom: 40px;
            }
            .section-title {
            font-size: 2.2rem;
            }
            .main-customization {
            gap: 18px;
            }
            .step-content {
            padding: 18px;
            }
            .preview-panel {
            padding: 18px 8px;
            }
            .additional-services {
            padding: 18px 8px 18px 8px;
            }
        }
        @keyframes patternMove {
            0% { background-position: 0 0, 20px 20px, 40px 40px; }
            100% { background-position: 60px 60px, 60px 60px, 120px 120px; }
        }
        @keyframes particleFloat {
            0% { transform: translateY(0) scale(1);}
            50% { transform: translateY(-30px) scale(1.2);}
            100% { transform: translateY(0) scale(1);}
        }
          `}</style>
        </section>
      );
    };

    export default CustomizeCakeSection;