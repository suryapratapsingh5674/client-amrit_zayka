import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { Search, Info, MessageCircle } from 'lucide-react';

function MenuCard({ item }) {
  return (
    <div className="menu-card">
      <div className="menu-card-header">
        <div className="menu-card-title-row">
          <span className="veg-badge" title="Pure Veg">
            <span className="veg-badge-dot"></span>
          </span>
          <h3 className="menu-item-name">{item.name}</h3>
        </div>

        {/* Single Price or Half / Full Portion Pricing */}
        {item.portions ? (
          <div className="portion-pricing" aria-label="Portion pricing">
            {item.portions.map((p) => (
              <div key={p.name} className="portion-item">
                <span className="portion-label">{p.name}</span>
                <span className="portion-price">{p.priceDisplay}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="single-price">
            <span className="menu-item-price">{item.priceDisplay}</span>
          </div>
        )}
      </div>

      {item.description && <p className="menu-item-desc">{item.description}</p>}

      {item.tag && (
        <div className="menu-card-footer">
          <span className="item-tag">{item.tag}</span>
        </div>
      )}
    </div>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const trimmedQuery = searchQuery.trim().toLowerCase();

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        !trimmedQuery ||
        item.name.toLowerCase().includes(trimmedQuery) ||
        (item.description && item.description.toLowerCase().includes(trimmedQuery));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, trimmedQuery]);

  const activeCategoryObj = MENU_CATEGORIES.find((c) => c.id === activeCategory);
  const isGroupedView = activeCategory === 'all' && !trimmedQuery;

  return (
    <section id="menu" className="section-padding menu-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="eyebrow">Asli Punjabi Swad</span>
          <h2 className="section-title">Menu Dekho. Cravings Badhao.</h2>
          <p className="section-subtitle">
            Transcribed faithfully from our updated in-restaurant menu card. Freshly prepared, 100% pure vegetarian, 
            and served with genuine Punjabi warmth.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="menu-controls">
          {/* Search Box */}
          <div className="menu-search-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="menu-search-input"
              placeholder="Search dishes (e.g., Chole, Parantha, Paneer Butter Masala)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search menu items"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="category-scroll-container" role="tablist" aria-label="Menu Categories">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`category-pill ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                  }}
                >
                  <span className="cat-name">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Official Menu Note Banner */}
        <div className="menu-note-strip" role="note">
          <span className="note-badge">Menu Note</span>
          <span className="note-text">Butter and Curd are provided as per requirement on MRP rate</span>
        </div>

        {/* Menu Items Count Info */}
        <div className="menu-meta-bar">
          <span className="items-count-text">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
            {activeCategory !== 'all' ? ` in ${activeCategoryObj?.name}` : ''}
            {trimmedQuery ? ` matching "${searchQuery}"` : ''}
          </span>
          {(trimmedQuery || activeCategory !== 'all') && (
            <button
              type="button"
              className="reset-filter-btn"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Items Listing */}
        {filteredItems.length === 0 ? (
          <div className="menu-empty-state">
            <p>Koi dish nahi mili! Try searching for something else or browse categories.</p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Show All Dishes
            </button>
          </div>
        ) : isGroupedView ? (
          /* Grouped by Category for easy scanning */
          <div className="menu-categories-container">
            {MENU_CATEGORIES.filter((cat) => cat.id !== 'all').map((cat) => {
              const categoryItems = filteredItems.filter((i) => i.category === cat.id);
              if (categoryItems.length === 0) return null;
              return (
                <div key={cat.id} className="menu-category-section">
                  <div className="menu-category-header">
                    <h3 className="menu-category-title">{cat.name}</h3>
                    {cat.label && <span className="menu-category-badge">{cat.label}</span>}
                  </div>
                  <div className="menu-grid">
                    {categoryItems.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Filtered or Searched View */
          <div>
            {activeCategory !== 'all' && activeCategoryObj && (
              <div className="menu-category-header single-cat-header">
                <h3 className="menu-category-title">{activeCategoryObj.name}</h3>
                {activeCategoryObj.label && (
                  <span className="menu-category-badge">{activeCategoryObj.label}</span>
                )}
              </div>
            )}
            <div className="menu-grid">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Official Note From Physical Menu */}
        <div className="menu-disclaimer-box">
          <div className="disclaimer-header">
            <Info size={18} className="disclaimer-icon" />
            <strong>Menu Note & Restaurant Policy:</strong>
          </div>
          <p>
            • Butter and Curd are provided as per requirement on MRP rate. <br />
            • Menu prices may change occasionally; kindly confirm current prices with the restaurant counter upon arrival. <br />
            • All dishes are 100% Pure Vegetarian and prepared fresh to order.
          </p>
          <div className="disclaimer-action">
            <a
              href="https://wa.me/919301116465?text=Hi%20Amrit%20Zayka%21%20I%20want%20to%20confirm%20item%20availability%20and%20prices."
              target="_blank"
              rel="noopener noreferrer"
              className="disclaimer-wa-link"
            >
              <MessageCircle size={15} />
              <span>Confirm Availability / Order via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
