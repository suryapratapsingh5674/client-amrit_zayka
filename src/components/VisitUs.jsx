import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export default function VisitUs() {
  const address = "Shop No. 2, Plot-1, Bhawani Town, Narela, Ayodhya Bypass, Bhopal, Madhya Pradesh";
  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Amrit Zayka Bhopal " + address)}`;
  const whatsappUrl = "https://wa.me/919301116465?text=Hi%20Amrit%20Zayka%21%20I%20found%20your%20website%20and%20wanted%20to%20know%20more%20about%20your%20menu";

  return (
    <section id="visit-us" className="section-padding visit-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Aao Kabhi Amrit Zayka Pe</span>
          <h2 className="section-title">Visit Us in Bhopal</h2>
          <p className="section-subtitle">
            Located conveniently on Ayodhya Bypass. Dine in with family & friends or pick up freshly packed orders.
          </p>
        </div>

        <div className="visit-grid">
          {/* Contact & Location Info Card */}
          <div className="visit-info-card">
            <div className="info-card-header">
              <div className="info-card-badge">
                <span className="veg-badge" title="Pure Veg">
                  <span className="veg-badge-dot"></span>
                </span>
                <span>Pure Vegetarian Punjabi Cafe</span>
              </div>
              <h3 className="restaurant-name">Amrit Zayka</h3>
              <p className="restaurant-locality">Bhawani Town, Ayodhya Bypass</p>
            </div>

            <div className="info-detail-group">
              <div className="info-detail-item">
                <div className="icon-wrapper">
                  <MapPin size={22} className="info-icon" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Complete Address</span>
                  <p className="detail-value">
                    Shop No. 2, Plot-1, Bhawani Town, Narela, Ayodhya Bypass, Bhopal, Madhya Pradesh
                  </p>
                </div>
              </div>

              <div className="info-detail-item">
                <div className="icon-wrapper">
                  <Phone size={22} className="info-icon" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Phone & Orders</span>
                  <a href="tel:+919301116465" className="detail-value link-phone">
                    +91 93011 16465
                  </a>
                </div>
              </div>

              <div className="info-detail-item">
                <div className="icon-wrapper">
                  <MessageCircle size={22} className="info-icon" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">WhatsApp Contact</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-value link-whatsapp"
                  >
                    +91 93011 16465 (Chat with us)
                  </a>
                </div>
              </div>
            </div>

            <div className="visit-actions">
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Navigation size={18} />
                <span>Get Directions</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919301116465"
                className="btn btn-secondary"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Map Display & Navigation Box */}
          <div className="visit-map-container">
            <div className="map-frame-wrapper">
              <iframe
                title="Amrit Zayka Restaurant Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-caption-bar">
              <div className="map-caption-text">
                <MapPin size={16} />
                <span>Shop No. 2, Bhawani Town, Ayodhya Bypass, Bhopal</span>
              </div>
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-open-link"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
