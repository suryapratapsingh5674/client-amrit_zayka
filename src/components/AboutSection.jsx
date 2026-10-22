import React from 'react';
import { Sparkles, UtensilsCrossed, Users, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Images collage using genuine wall art & restaurant interior */}
          <div className="about-visuals">
            <div className="about-main-img-card">
              <img
                src="/images/restaurant-wall-art.webp"
                alt="Colorful Punjabi Wall Art inside Amrit Zayka Bhopal featuring Desi Tadka, Punjab, and Do Mastane Chale Chole Bhature Khane"
                className="about-img about-img-primary"
                loading="lazy"
              />
              <div className="about-img-tag">
                <span>Authentic Punjabi Wall Art at Our Cafe</span>
              </div>
            </div>

            <div className="about-sub-img-card">
              <img
                src="/images/restaurant-interior.webp"
                alt="Clean and welcoming dining area at Amrit Zayka Bhopal"
                className="about-img about-img-secondary"
                loading="lazy"
              />
              <div className="about-badge-overlay">
                <span className="badge-title">Pure & Desi</span>
                <span className="badge-subtitle">Ayodhya Bypass, Bhopal</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="about-content">
            <span className="eyebrow">Hamari Kahani</span>
            <h2 className="section-title">Thoda Punjab, Thoda Apnapan.</h2>
            
            <p className="about-paragraph">
              Amrit Zayka is Bhopal's local pure vegetarian Punjabi cafe where food is made with 
              passion, fresh ingredients, and genuine desi warmth. Whether you're craving 
              piping hot stuffed paranthas, fluffy chole bhature, slow-simmered daal makhani, 
              or sizzling Indo-Chinese noodles, we serve comfort on every plate.
            </p>

            <p className="about-paragraph">
              Step into our lively space adorned with vibrant Punjabi truck art, cheerful food slogans, 
              and a warm, relaxed atmosphere that welcomes students, families, colleagues, and foodies alike.
            </p>

            <div className="about-features-list">
              <div className="feature-item">
                <CheckCircle2 size={20} className="feature-icon" />
                <div>
                  <strong>100% Pure Vegetarian Kitchen</strong>
                  <p>Prepared in a strictly vegetarian and hygienic environment.</p>
                </div>
              </div>

              <div className="feature-item">
                <CheckCircle2 size={20} className="feature-icon" />
                <div>
                  <strong>Pocket-Friendly & Generous Portions</strong>
                  <p>Quality food with genuine prices transcribed directly from our menu.</p>
                </div>
              </div>

              <div className="feature-item">
                <CheckCircle2 size={20} className="feature-icon" />
                <div>
                  <strong>Comfortable Dine-In & Quick Takeaway</strong>
                  <p>Air-conditioned seating, prompt service, and convenient packaging.</p>
                </div>
              </div>
            </div>

            <div className="about-cta-row">
              <a href="#visit-us" className="btn btn-primary">
                <span>Visit Us in Bhopal</span>
              </a>
              <a
                href="https://wa.me/919301116465?text=Hi%20Amrit%20Zayka%21%20I%20would%20like%20to%20know%20more%20about%20your%20restaurant."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
