// CookieBanner.js
import React, { useState } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem('cookieConsent', 'true');
  };

  // Verifica se l'utente ha già accettato i cookie
  React.useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
       <p>
        Questo sito utilizza i cookie per migliorare la tua esperienza. Continuando a navigare, accetti il nostro utilizzo dei cookie.<br /> 
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
          Leggi la nostra Privacy Policy
        </a>
      </p>
      <button onClick={handleAccept}>Accetta</button>
    </div>
  );
};

export default CookieBanner;
