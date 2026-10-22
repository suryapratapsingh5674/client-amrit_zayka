import React from 'react';
import { BRAND_MEMES } from '../data/menuData';
import { Flame, Heart } from 'lucide-react';

export default function BrandPersonality() {
  return (
    <section className="section-padding personality-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">The Punjabi Vibe</span>
          <h2 className="section-title">Yahan Calories Nahi, Khushiyan Count Hoti Hain.</h2>
          <p className="section-subtitle">
            Pet full. Dil full. Scene sorted. Doston ke saath plan banao, khana hum sambhal lenge!
          </p>
        </div>

        {/* Witty Quote Badges */}
        <div className="personality-quotes-bar">
          <div className="quote-pill">
            <span className="quote-emoji">🔥</span>
            <span>“Ek plate mangayi thi. Ab sabki nazar usi pe hai.”</span>
          </div>
          <div className="quote-pill">
            <span className="quote-emoji">❤️</span>
            <span>“Diet kal se. Aaj toh Amrit Zayka banta hai.”</span>
          </div>
          <div className="quote-pill">
            <span className="quote-emoji">✨</span>
            <span>“Doston ke saath scene? Table hum arrange kar denge.”</span>
          </div>
        </div>

        {/* Social Memes & Authentic Food Creatives Grid */}
        <div className="personality-grid">
          {BRAND_MEMES.map((item, idx) => (
            <div key={idx} className="creative-card">
              <div className="creative-img-wrapper">
                <img
                  src={item.image}
                  alt={item.quote}
                  className="creative-img"
                  loading="lazy"
                />
              </div>
              <div className="creative-text-box">
                <h3 className="creative-quote">“{item.quote}”</h3>
                <p className="creative-subtext">{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
