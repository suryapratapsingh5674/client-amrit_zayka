import React from 'react';
import { Utensils, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow-wrapper">
            <span className="eyebrow">Pure Veg • Full Desi</span>
            <span className="hero-location-pill">
              <MapPin size={13} /> Ayodhya Bypass, Bhopal
            </span>
          </div>

          <h1 className="hero-headline">
            Dil Punjabi. <br />
            <span className="hero-headline-accent">Bhookh Bhi.</span>
          </h1>

          <p className="hero-description">
            Paranthe, chole bhature, desi favourites aur woh taste jiske liye dobara aana pade. 
            Freshly prepared, rich with Punjabi warmth, and pocket-friendly for everyone.
          </p>

          <div className="hero-cta-group">
            <a href="#menu" className="btn btn-primary hero-btn">
              <Utensils size={18} />
              <span>Explore the Menu</span>
            </a>
            <a href="#visit-us" className="btn btn-secondary hero-btn">
              <MapPin size={18} />
              <span>Find Us</span>
            </a>
          </div>

          <div className="hero-highlights">
            <div className="hero-highlight-item">
              <span className="veg-badge" title="Pure Veg">
                <span className="veg-badge-dot"></span>
              </span>
              <span>100% Pure Vegetarian</span>
            </div>
            <div className="hero-highlight-separator">•</div>
            <div className="hero-highlight-item">
              <Sparkles size={16} className="highlight-icon" />
              <span>Desi Ghee & Fresh Butter</span>
            </div>
            <div className="hero-highlight-separator">•</div>
            <div className="hero-highlight-item">
              <ShieldCheck size={16} className="highlight-icon" />
              <span>Authentic Spices</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-wrapper">
          <div className="hero-image-frame">
            <img
              src="/images/chole-bhature-signature.jpg"
              alt="Piping hot Chole Bhature served with pickled onions at Amrit Zayka Bhopal"
              className="hero-food-img"
              loading="eager"
            />
            <div className="hero-image-caption">
              <div className="caption-text">
                <strong>Signature Chole Bhature</strong>
                <span>Served fresh & piping hot with sirka pyaaz</span>
              </div>
              <span className="caption-price">₹100</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
