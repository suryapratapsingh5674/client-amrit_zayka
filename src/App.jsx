import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import MenuSection from './components/MenuSection';
import BrandPersonality from './components/BrandPersonality';
import AboutSection from './components/AboutSection';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main id="main-content">
        <Hero />
        <FeaturedDishes />
        <MenuSection />
        <BrandPersonality />
        <AboutSection />
        <VisitUs />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
