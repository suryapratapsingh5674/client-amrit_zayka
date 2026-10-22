import React from 'react';
import { SIGNATURE_DISHES } from '../data/menuData';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FeaturedDishes() {
  return (
    <section id="specialties" className="section-padding featured-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Hamari Specialties</span>
          <h2 className="section-title">Scene Kya Hai? Food Ka Scene Hai.</h2>
          <p className="section-subtitle">
            Authentic flavours, real ingredients, and that unmistakable Punjabi love. 
            Here are the crowd favorites you cannot afford to miss.
          </p>
        </div>

        <div className="featured-grid">
          {SIGNATURE_DISHES.map((dish) => (
            <div key={dish.id} className="dish-card">
              <div className="dish-image-wrapper">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="dish-img"
                  loading="lazy"
                />
                <span className="dish-badge">{dish.badge}</span>
              </div>
              <div className="dish-content">
                <div className="dish-top-row">
                  <div className="dish-title-group">
                    <span className="veg-badge" title="Pure Veg">
                      <span className="veg-badge-dot"></span>
                    </span>
                    <h3 className="dish-name">{dish.title}</h3>
                  </div>
                  <span className="dish-price">{dish.price}</span>
                </div>
                <p className="dish-tagline">“{dish.tagline}”</p>
                <p className="dish-desc">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-bottom-cta text-center">
          <p className="cravings-prompt">Craving something specific? Explore our complete physical menu.</p>
          <a href="#menu" className="btn btn-outline-red">
            <span>View Full 40+ Items Menu</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
