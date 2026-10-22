import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl =
    'https://wa.me/919301116465?text=Hi%20Amrit%20Zayka%21%20I%20found%20your%20website%20and%20wanted%20to%20know%20more%20about%20your%20menu';

  return (
    <div
      className="floating-wa-wrapper"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className={`floating-wa-tooltip ${showTooltip ? 'visible' : ''}`}>
        <span>Chat on WhatsApp</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Chat with Amrit Zayka on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
