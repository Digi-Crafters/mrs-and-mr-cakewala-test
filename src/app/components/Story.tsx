'use client';

import React, { useState, useEffect } from 'react';

const SweetBeginningsSection = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const bakerJourney = {
    name: "Rajesh Kumar",
    title: "Head Baker & Co-Founder",
    story: "My journey began in my grandmother's kitchen at age 8, watching her transform simple ingredients into magic. Today, 25 years later, every cake I create carries forward her legacy of love.",
    milestones: [
      {
        year: 1999,
        title: "First Lesson",
        description: "Learned to separate eggs from Nani at age 8",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      },
      {
        year: 2015,
        title: "Professional Training",
        description: "Completed pastry arts certification in Delhi",
        image: "https://images.unsplash.com/photo-1556909045-f24c4dd13c35?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      },
      {
        year: 2018,
        title: "First Shop",
        description: "Opened our small bakery in Meerut with just 3 recipes",
        image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      },
      {
        year: 2024,
        title: "Community Love",
        description: "Celebrating 1000+ happy families served",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      }
    ]
  };

  const legacyRecipes = [
    {
      id: 'nani-chocolate',
      name: "Nani's Secret Chocolate Cake",
      origin: "Lucknow, 1955",
      story: "This recipe survived partition when my grandmother carried it from Lahore to Lucknow. The secret? A pinch of cardamom that makes hearts remember home.",
      culturalSignificance: "Traditionally made for Diwali celebrations",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      ingredients: ["Dark chocolate from Kerala", "Cardamom from Karnataka", "Love from three generations"]
    },
    {
      id: 'dadi-vanilla',
      name: "Dadi's Celebration Vanilla",
      origin: "Meerut, 1978",
      story: "My paternal grandmother created this for my father's wedding. Every layer represents a blessing, every bite carries 40 years of family celebrations.",
      culturalSignificance: "Essential for North Indian wedding ceremonies",
      image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      ingredients: ["Vanilla from Madagascar", "Ghee made fresh daily", "Prayers whispered while mixing"]
    },
    {
      id: 'maa-special',
      name: "Maa's Comfort Butterscotch",
      origin: "Meerut, 1995",
      story: "Created by my mother during difficult times to bring smiles. She said 'Beta, sometimes the world needs more sweetness.' This cake became our signature of hope.",
      culturalSignificance: "Perfect for healing broken hearts",
      image: "https://images.unsplash.com/photo-1586788680434-30d8b2b0625d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      ingredients: ["Brown sugar aged 6 months", "Butter from local dairy", "Stories shared over tea"]
    }
  ];

  const customerMemories = [
    {
      id: 1,
      customerName: "Priya Sharma",
      occasion: "Daughter's First Birthday",
      memory: "The cake was perfect, but what touched my heart was when Rajesh ji personally called to ask about my daughter's favorite colors. The attention to detail made our celebration unforgettable.",
      bakerResponse: "Little Anaya's smile when she saw the pink butterfly cake reminded me why I became a baker. Some moments are priceless.",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      featured: true
    },
    {
      id: 2,
      customerName: "Vikash & Sneha",
      occasion: "Anniversary Surprise",
      memory: "After 10 years of marriage, my husband surprised me with the exact cake from our wedding day. Somehow, Rajesh ji had kept the design notes all these years.",
      bakerResponse: "Love stories deserve to be remembered. I keep notes of special moments because they might matter again someday.",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      featured: false
    },
    {
      id: 3,
      customerName: "Amit Gupta",
      occasion: "Father's Recovery",
      memory: "When Papa was recovering from surgery, the chocolate cake you made was the first thing that brought back his appetite and his smile.",
      bakerResponse: "Food is medicine for the soul. I'm grateful our cake could be part of uncle's healing journey.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      featured: false
    }
  ];

  const isAvailableForChat = () => {
    const hour = currentTime.getHours();
    return hour >= 9 && hour <= 21; // 9 AM to 9 PM
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    setIsTyping(true);
    // Simulate baker typing response
    setTimeout(() => {
      setIsTyping(false);
      setChatMessage('');
    }, 2000);
  };

  return (
    <section className="sweet-beginnings-section">
      {/* Background Elements */}
      <div className="section-background-pattern"></div>
      <div className="section-background-overlay"></div>
      
      <div className="container">
        <div className="section-header">
          <div className="header-badge">
            <span className="badge-text">Our Heart & Heritage</span>
          </div>
          <h2 className="section-title">Sweet Beginnings & Shared Moments</h2>
          <p className="section-subtitle">
            Every cake tells a story. Every celebration becomes a memory. Discover the heritage, passion, and love that goes into every creation at Mrs. & Mr. Cake Wala.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="story-navigation">
          <button 
            className={`nav-tab ${activeTab === 'journey' ? 'active' : ''}`}
            onClick={() => setActiveTab('journey')}
          >
            <span className="tab-icon">👨‍🍳</span>
            <span>Baker's Journey</span>
          </button>
          <button 
            className={`nav-tab ${activeTab === 'recipes' ? 'active' : ''}`}
            onClick={() => setActiveTab('recipes')}
          >
            <span className="tab-icon">📖</span>
            <span>Recipe Legacy</span>
          </button>
          <button 
            className={`nav-tab ${activeTab === 'memories' ? 'active' : ''}`}
            onClick={() => setActiveTab('memories')}
          >
            <span className="tab-icon">💕</span>
            <span>Shared Moments</span>
          </button>
        </div>

        {/* Content Sections */}
        <div className="story-content">
          {activeTab === 'journey' && (
            <div className="journey-section">
              <div className="baker-intro">
                <div className="baker-photo">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Rajesh Kumar - Head Baker" 
                  />
                  <div className="photo-frame"></div>
                </div>
                <div className="baker-details">
                  <h3>{bakerJourney.name}</h3>
                  <p className="baker-title">{bakerJourney.title}</p>
                  <p className="baker-story">{bakerJourney.story}</p>
                  <div className="personal-touch">
                    <h4>Personal Philosophy:</h4>
                    <p>"Every cake is a canvas for someone's happiness. I don't just bake cakes; I craft memories that families will treasure forever."</p>
                  </div>
                </div>
              </div>

              <div className="journey-timeline">
                <h3>My Baking Journey</h3>
                <div className="timeline">
                  {bakerJourney.milestones.map((milestone, index) => (
                    <div key={index} className="milestone">
                      <div className="milestone-year">{milestone.year}</div>
                      <div className="milestone-content">
                        <img src={milestone.image} alt={milestone.title} />
                        <div className="milestone-text">
                          <h4>{milestone.title}</h4>
                          <p>{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'recipes' && (
            <div className="recipes-section">
              <div className="recipes-intro">
                <h3>Three Generations of Love</h3>
                <p>These aren't just recipes – they're heirlooms. Each one carries the wisdom, love, and cultural heritage passed down through our family.</p>
              </div>

              <div className="recipes-grid">
                {legacyRecipes.map((recipe, index) => (
                  <div 
                    key={recipe.id} 
                    className={`recipe-card ${selectedRecipe === recipe.id ? 'expanded' : ''}`}
                    onClick={() => setSelectedRecipe(selectedRecipe === recipe.id ? null : recipe.id)}
                  >
                    <div className="recipe-image">
                      <img src={recipe.image} alt={recipe.name} />
                      <div className="recipe-origin">{recipe.origin}</div>
                    </div>
                    <div className="recipe-content">
                      <h4>{recipe.name}</h4>
                      <p className="recipe-brief">{recipe.story.substring(0, 100)}...</p>
                      
                      {selectedRecipe === recipe.id && (
                        <div className="recipe-expanded">
                          <p className="full-story">{recipe.story}</p>
                          <div className="cultural-significance">
                            <strong>Cultural Significance:</strong>
                            <p>{recipe.culturalSignificance}</p>
                          </div>
                          <div className="special-ingredients">
                            <strong>What Makes It Special:</strong>
                            <ul>
                              {recipe.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      <button className="learn-more">
                        {selectedRecipe === recipe.id ? 'Show Less' : 'Learn More'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'memories' && (
            <div className="memories-section">
              <div className="featured-memory">
                {customerMemories.filter(m => m.featured).map(memory => (
                  <div key={memory.id} className="featured-card">
                    <div className="featured-badge">This Month's Featured Story</div>
                    <div className="memory-content">
                      <div className="memory-image">
                        <img src={memory.image} alt={memory.occasion} />
                      </div>
                      <div className="memory-text">
                        <h3>{memory.occasion}</h3>
                        <blockquote>"{memory.memory}"</blockquote>
                        <p className="customer-name">- {memory.customerName}</p>
                        
                        <div className="baker-response">
                          <div className="response-avatar">
                            <img 
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80" 
                              alt="Baker Response" 
                            />
                          </div>
                          <div className="response-content">
                            <strong>Rajesh's Response:</strong>
                            <p>"{memory.bakerResponse}"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="memory-wall">
                <h3>More Beautiful Moments</h3>
                <div className="memories-grid">
                  {customerMemories.filter(m => !m.featured).map(memory => (
                    <div key={memory.id} className="memory-card">
                      <img src={memory.image} alt={memory.occasion} />
                      <div className="memory-overlay">
                        <h4>{memory.occasion}</h4>
                        <p>"{memory.memory.substring(0, 80)}..."</p>
                        <span className="customer-name">- {memory.customerName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="share-memory">
                <div className="share-prompt">
                  <h3>Share Your Sweet Memory</h3>
                  <p>Have a special moment with our cakes? We'd love to hear your story and share it with our family.</p>
                  <button className="share-btn">Share Your Story</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Ask the Baker Chat */}
        <div className={`chat-widget ${chatOpen ? 'open' : ''}`}>
          <div className="chat-header" onClick={() => setChatOpen(!chatOpen)}>
            <div className="baker-status">
              <div className={`status-indicator ${isAvailableForChat() ? 'online' : 'offline'}`}></div>
              <span>Ask the Baker</span>
            </div>
            <div className="chat-time">
              {isAvailableForChat() ? 'Available Now' : 'Available 9 AM - 9 PM'}
            </div>
          </div>
          
          {chatOpen && (
            <div className="chat-content">
              <div className="chat-messages">
                <div className="baker-message">
                  <div className="message-avatar">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80" 
                      alt="Rajesh" 
                    />
                  </div>
                  <div className="message-content">
                    <p>Hi! I'm Rajesh. Ask me anything about our cakes, recipes, or share your celebration ideas. I'm here to help make your moment special! 👨‍🍳</p>
                  </div>
                </div>
                {isTyping && (
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                    <p>Rajesh is typing...</p>
                  </div>
                )}
              </div>
              
              <form className="chat-form" onSubmit={handleChatSubmit}>
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder={isAvailableForChat() ? "Ask me anything..." : "Leave a message, I'll respond soon!"}
                  disabled={!isAvailableForChat()}
                />
                <button type="submit" disabled={!isAvailableForChat()}>
                  Send
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        .sweet-beginnings-section {
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          background: 
            linear-gradient(135deg, 
              #F9F5EB 0%, 
              #F5EDE1 25%, 
              #F2E6D6 50%, 
              #E8D5C0 75%, 
              #E5D2BD 100%
            );
        }
        
        .section-background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.08) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(249, 211, 113, 0.06) 0%, transparent 30%),
            linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(139, 69, 19, 0.05) 25%, transparent 25%);
          background-size: 100px 100px, 150px 150px, 50px 50px, 50px 50px;
          background-position: 0 0, 50px 50px, 0 0, 25px 25px;
          animation: patternFloat 30s ease-in-out infinite;
          opacity: 0.7;
        }
        
        .section-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse at top right, rgba(255, 255, 255, 0.6) 0%, transparent 60%),
            radial-gradient(ellipse at bottom left, rgba(139, 69, 19, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .header-badge {
          display: inline-block;
          background: rgba(139, 69, 19, 0.1);
          border: 1px solid rgba(139, 69, 19, 0.2);
          border-radius: 25px;
          padding: 8px 20px;
          margin-bottom: 25px;
        }
        
        .badge-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #8B4513;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: #3A2C1E;
          margin: 0 0 20px 0;
          position: relative;
          display: inline-block;
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
          color: #5C4B37;
          max-width: 800px;
          margin: 30px auto 0;
          line-height: 1.7;
        }
        
        .story-navigation {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 60px;
          background: rgba(255, 255, 255, 0.8);
          padding: 20px;
          border-radius: 20px;
          backdrop-filter: blur(1px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        
        .nav-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 20px;
          border: none;
          background: transparent;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 120px;
        }
        
        .nav-tab:hover {
          background: rgba(139, 69, 19, 0.05);
          transform: translateY(-5px);
        }
        
        .nav-tab.active {
          background: linear-gradient(135deg, #8B4513, #A0522D);
          color: white;
          box-shadow: 0 10px 25px rgba(139, 69, 19, 0.3);
        }
        
        .tab-icon {
          font-size: 2rem;
          margin-bottom: 5px;
        }
        
        .nav-tab span:last-child {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .story-content {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 25px;
          padding: 50px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(1px);
          margin-bottom: 40px;
        }
        
        /* Journey Section Styles */
        .baker-intro {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 40px;
          margin-bottom: 60px;
          align-items: start;
        }
        
        .baker-photo {
          position: relative;
        }
        
        .baker-photo img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }
        
        .photo-frame {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 3px solid rgba(139, 69, 19, 0.3);
          border-radius: 20px;
          z-index: -1;
        }
        
        .baker-details h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: #3A2C1E;
          margin: 0 0 10px 0;
        }
        
        .baker-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          color: #8B4513;
          font-weight: 600;
          margin: 0 0 25px 0;
        }
        
        .baker-story {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #5C4B37;
          margin-bottom: 30px;
        }
        
        .personal-touch {
          background: rgba(139, 69, 19, 0.05);
          padding: 25px;
          border-radius: 15px;
          border-left: 4px solid #8B4513;
        }
        
        .personal-touch h4 {
          font-family: 'Playfair Display', serif;
          color: #3A2C1E;
          margin: 0 0 15px 0;
        }
        
        .personal-touch p {
          font-family: 'Montserrat', sans-serif;
          font-style: italic;
          color: #5C4B37;
          margin: 0;
          line-height: 1.6;
        }
        
        .journey-timeline h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #3A2C1E;
          text-align: center;
          margin-bottom: 40px;
        }
        
        .timeline {
          position: relative;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #8B4513, #F9D371);
          transform: translateX(-50%);
        }
        
        .milestone {
          display: flex;
          align-items: center;
          margin-bottom: 60px;
          position: relative;
        }
        
        .milestone:nth-child(even) {
          flex-direction: row-reverse;
        }
        
        .milestone-year {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: #8B4513;
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          z-index: 2;
          box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3);
        }
        
        .milestone-content {
          width: 45%;
          display: flex;
          gap: 20px;
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .milestone:nth-child(even) .milestone-content {
          flex-direction: row-reverse;
          text-align: right;
        }
        
        .milestone-content img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          object-fit: cover;
        }
        
        .milestone-text h4 {
          font-family: 'Playfair Display', serif;
          color: #3A2C1E;
          margin: 0 0 10px 0;
        }
        
        .milestone-text p {
          font-family: 'Montserrat', sans-serif;
          color: #5C4B37;
          margin: 0;
          line-height: 1.5;
        }
        
        /* Recipe Section Styles */
        .recipes-intro {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .recipes-intro h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          color: #3A2C1E;
          margin: 0 0 20px 0;
        }
        
        .recipes-intro p {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          color: #5C4B37;
          line-height: 1.6;
        }
        
        .recipes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }
        
        .recipe-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.4s ease;
        }
        
        .recipe-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }
        
        .recipe-card.expanded {
          transform: translateY(-5px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
        }
        
        .recipe-image {
          position: relative;
          height: 200px;
        }
        
        .recipe-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }               
        .recipe-origin {

            position: absolute;
            bottom: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 5px 10px;
            border-radius: 15px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.85rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
            .recipe-content {
                padding: 25px 25px 20px 25px;
            }

            .recipe-content h4 {
                font-family: 'Playfair Display', serif;
                color: #3A2C1E;
                margin: 0 0 10px 0;
                font-size: 1.3rem;
            }

            .recipe-brief {
                font-family: 'Montserrat', sans-serif;
                color: #5C4B37;
                font-size: 1rem;
                margin-bottom: 10px;
            }

            .learn-more {
                margin-top: 15px;
                background: linear-gradient(90deg, #8B4513, #F9D371);
                color: white;
                border: none;
                border-radius: 10px;
                padding: 8px 18px;
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                cursor: pointer;
                transition: background 0.2s;
            }

            .learn-more:hover {
                background: linear-gradient(90deg, #A0522D, #FFD700);
            }

            .recipe-expanded {
                margin-top: 18px;
                background: rgba(249, 211, 113, 0.08);
                border-radius: 12px;
                padding: 18px 15px 10px 15px;
            }

            .full-story {
                font-family: 'Montserrat', sans-serif;
                color: #5C4B37;
                font-size: 1rem;
                margin-bottom: 12px;
            }

            .cultural-significance,
            .special-ingredients {
                margin-bottom: 10px;
            }

            .cultural-significance strong,
            .special-ingredients strong {
                color: #8B4513;
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
            }

            .special-ingredients ul {
                margin: 8px 0 0 18px;
                padding: 0;
                font-family: 'Montserrat', sans-serif;
                color: #5C4B37;
                font-size: 0.98rem;
            }

            .special-ingredients li {
                margin-bottom: 4px;
                list-style: disc;
            }
        
/* Memories Section Styles */
.featured-memory {
  margin-bottom: 50px;
}

.featured-card {
  display: flex;
  flex-direction: column;
  background: linear-gradient(120deg, #fffbe6 70%, #f9d371 100%);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(139, 69, 19, 0.08);
  padding: 40px 30px;
  align-items: center;
  position: relative;
}

.featured-badge {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: #8B4513;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 8px 22px;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(139, 69, 19, 0.15);
  letter-spacing: 1px;
}

.memory-content {
  display: flex;
  gap: 35px;
  align-items: flex-start;
}

.memory-image img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(139, 69, 19, 0.13);
}

.memory-text {
  max-width: 500px;
}

.memory-text h3 {
  font-family: 'Playfair Display', serif;
  color: #3A2C1E;
  margin: 0 0 10px 0;
  font-size: 1.5rem;
}

.memory-text blockquote {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  color: #5C4B37;
  margin: 0 0 12px 0;
  font-style: italic;
  line-height: 1.6;
}

.customer-name {
  font-family: 'Montserrat', sans-serif;
  color: #8B4513;
  font-weight: 600;
  font-size: 1rem;
}

.baker-response {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 18px;
  background: rgba(139, 69, 19, 0.06);
  border-radius: 10px;
  padding: 12px 16px;
}

.response-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #F9D371;
}

.response-content strong {
  color: #8B4513;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.98rem;
}

.response-content p {
  margin: 2px 0 0 0;
  font-family: 'Montserrat', sans-serif;
  color: #5C4B37;
  font-size: 1rem;
}

.memory-wall {
  margin-bottom: 40px;
}

.memory-wall h3 {
  font-family: 'Playfair Display', serif;
  color: #3A2C1E;
  font-size: 1.3rem;
  margin-bottom: 18px;
}

.memories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}

.memory-card {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(139, 69, 19, 0.08);
  cursor: pointer;
  background: #fff;
}

.memory-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.memory-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(139,69,19,0.85) 80%, rgba(255,255,255,0) 100%);
  color: #fff;
  padding: 18px 16px 12px 16px;
  font-family: 'Montserrat', sans-serif;
}

.memory-overlay h4 {
  margin: 0 0 6px 0;
  font-size: 1.1rem;
  font-family: 'Playfair Display', serif;
}

.memory-overlay p {
  margin: 0 0 6px 0;
  font-size: 0.98rem;
  font-style: italic;
}

.memory-overlay .customer-name {
  font-size: 0.92rem;
  color: #F9D371;
  font-weight: 500;
}

.share-memory {
  text-align: center;
  margin-top: 40px;
}

.share-prompt {
  display: inline-block;
  background: rgba(249, 211, 113, 0.13);
  border-radius: 15px;
  padding: 30px 40px;
  box-shadow: 0 4px 16px rgba(139, 69, 19, 0.07);
}

.share-prompt h3 {
  font-family: 'Playfair Display', serif;
  color: #3A2C1E;
  margin-bottom: 10px;
}

.share-prompt p {
  font-family: 'Montserrat', sans-serif;
  color: #5C4B37;
  margin-bottom: 18px;
}

.share-btn {
  background: linear-gradient(90deg, #8B4513, #F9D371);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 28px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.share-btn:hover {
  background: linear-gradient(90deg, #A0522D, #FFD700);
}

/* Chat Widget Styles */
.chat-widget {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 340px;
  z-index: 100;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 8px 32px rgba(139, 69, 19, 0.13);
  border-radius: 18px 18px 0 0;
  background: #fff;
  transition: box-shadow 0.2s;
}

.chat-widget:not(.open) {
  box-shadow: 0 2px 8px rgba(139, 69, 19, 0.08);
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #8B4513, #F9D371);
  color: #fff;
  padding: 18px 22px;
  border-radius: 18px 18px 0 0;
  cursor: pointer;
}

.baker-status {
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ccc;
  margin-right: 4px;
}

.status-indicator.online {
  background: #4CAF50;
}

.status-indicator.offline {
  background: #ccc;
}

.chat-time {
  font-size: 0.95rem;
  font-weight: 500;
}

.chat-content {
  background: #fff;
  padding: 18px 18px 12px 18px;
  border-radius: 0 0 18px 18px;
}

.chat-messages {
  margin-bottom: 12px;
}

.baker-message {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
}

.message-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.message-content {
  background: #F9F5EB;
  border-radius: 10px;
  padding: 10px 16px;
  color: #3A2C1E;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
}

.typing-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 50px;
}

.typing-indicator span {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #F9D371;
  border-radius: 50%;
  margin-right: 2px;
  animation: typingBlink 1.2s infinite alternate;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}
.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

.typing-indicator p {
  margin: 0 0 0 8px;
  font-size: 0.95rem;
  color: #8B4513;
}

@keyframes typingBlink {
  0% { opacity: 0.3; }
  100% { opacity: 1; }
}

.chat-form {
  display: flex;
  gap: 8px;
}

.chat-form input[type="text"] {
  flex: 1;
  border: 1px solid #F9D371;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  outline: none;
  transition: border 0.2s;
}

.chat-form input[type="text"]:disabled {
  background: #f5f5f5;
  color: #aaa;
}

.chat-form button {
  background: linear-gradient(90deg, #8B4513, #F9D371);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.chat-form button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

/* Responsive Styles */
@media (max-width: 900px) {
  .baker-intro {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .baker-photo img {
    height: 280px;
  }
  .story-content {
    padding: 30px 10px;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 2.1rem;
  }
  .story-navigation {
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
  .recipes-grid {
    grid-template-columns: 1fr;
  }
  .memories-grid {
    grid-template-columns: 1fr;
  }
  .chat-widget {
    width: 98vw;
    right: 1vw;
    bottom: 1vw;
  }
}
      `}</style>
    </section>
  );
};

export default SweetBeginningsSection;

        