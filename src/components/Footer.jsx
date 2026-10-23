import React from 'react';
import { Phone, MessageCircle, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl =
    'https://wa.me/919301116465?text=Hi%20Amrit%20Zayka%21%20I%20found%20your%20website%20and%20wanted%20to%20know%20more%20about%20your%20menu';

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-col footer-brand-col">
          <div className="footer-logo-row">
            <img
              src="/images/logo.jpg"
              alt="Amrit Zayka Logo"
              className="footer-logo-img"
              width="44"
              height="44"
            />
            <div>
              <span className="footer-brand-title">Amrit Zayka</span>
              <span className="footer-brand-tagline">The Punjabi Cafe • Pure & Desi</span>
            </div>
          </div>
          <p className="footer-about-text">
            Bhopal's pure vegetarian Punjabi cafe serving fluffy Chole Bhature, traditional Daal Baati,
            rich curries, stuffed paranthas and authentic flavors on Ayodhya Bypass.
          </p>
          <div className="footer-veg-badge">
            <span className="veg-badge" title="Pure Veg">
              <span className="veg-badge-dot"></span>
            </span>
            <span>100% Pure Vegetarian Restaurant</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col footer-links-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#specialties">Specialties</a></li>
            <li><a href="#menu">Our Menu & Prices</a></li>
            <li><a href="#about">About Amrit Zayka</a></li>
            <li><a href="#visit-us">Visit & Directions</a></li>
          </ul>
        </div>

        {/* Contact & Location Column */}
        <div className="footer-col footer-contact-col">
          <h4 className="footer-heading">Contact & Visit</h4>
          <p className="footer-address-line">
            <MapPin size={16} className="footer-icon" />
            <span>Shop No. 2, Plot-1, Bhawani Town, Narela, Ayodhya Bypass, Bhopal, Madhya Pradesh</span>
          </p>
          <p className="footer-contact-line">
            <Phone size={16} className="footer-icon" />
            <a href="tel:+919301116465">+91 93011 16465</a>
          </p>
          <p className="footer-contact-line">
            <MessageCircle size={16} className="footer-icon" />
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp: +91 93011 16465
            </a>
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p className="footer-copy">
            © {currentYear} Amrit Zayka. All rights reserved. Pure Punjabi Flavour in Bhopal.
          </p>
          <p className="footer-note">
            Made with <Heart size={13} className="heart-icon" /> for Bhopal Foodies
          </p>
        </div>
      </div>
    </footer>
  );
}
