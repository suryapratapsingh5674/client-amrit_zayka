import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const whatsappUrl =
    'https://wa.me/919301116465?text=Hi%20Amrit%20Zayka%21%20I%20found%20your%20website%20and%20wanted%20to%20know%20more%20about%20your%20menu';

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo & Name */}
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <img
            src="/images/logo.jpg"
            alt="Amrit Zayka Logo"
            className="navbar-logo-img"
            width="48"
            height="48"
          />
          <div className="navbar-brand-text">
            <span className="navbar-brand-title">Amrit Zayka</span>
            <span className="navbar-brand-tag">The Punjabi Cafe • Pure Veg</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav desktop-only" aria-label="Main Navigation">
          <a href="#home" className="nav-link">Home</a>
          <a href="#specialties" className="nav-link">Specialties</a>
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#visit-us" className="nav-link">Visit Us</a>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions desktop-only">
          <a
            href="tel:+919301116465"
            className="navbar-call-link"
            title="Call Amrit Zayka"
          >
            <Phone size={16} />
            <span>+91 93011 16465</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp navbar-whatsapp-btn"
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar-mobile-toggle mobile-only"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="mobile-drawer mobile-only">
          <div className="container mobile-drawer-content">
            <nav className="mobile-nav-links" aria-label="Mobile Navigation">
              <a href="#home" className="mobile-nav-link" onClick={closeMenu}>
                Home
              </a>
              <a href="#specialties" className="mobile-nav-link" onClick={closeMenu}>
                Specialties
              </a>
              <a href="#menu" className="mobile-nav-link" onClick={closeMenu}>
                Menu & Prices
              </a>
              <a href="#about" className="mobile-nav-link" onClick={closeMenu}>
                About Us
              </a>
              <a href="#visit-us" className="mobile-nav-link" onClick={closeMenu}>
                Visit & Directions
              </a>
            </nav>

            <div className="mobile-drawer-footer">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mobile-btn"
                onClick={closeMenu}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+919301116465"
                className="btn btn-secondary mobile-btn"
                onClick={closeMenu}
              >
                <Phone size={18} />
                <span>Call +91 93011 16465</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
