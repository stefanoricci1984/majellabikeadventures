import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import FormComponent from "./components/form";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Gallery } from "./components/Gallery";
import CookieBanner from "./components/CookieBanner";
import PrivacyPolicy from "./components/PrivacyPolicy"; // Importa il nuovo componente
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const imageUrls = [
  "img/photo/uno.jpeg",
  "img/photo/due.jpeg",
  "img/photo/tre.jpeg",
  "img/photo/quattro.jpeg",
  "img/photo/cinque.jpeg",
  "img/photo/sei.jpeg",
  "img/photo/sette.jpeg",
  "img/photo/otto.jpeg",
  "img/photo/nove.jpeg",
  "img/photo/dieci.jpeg",
  "img/photo/undici.jpeg",
  "img/photo/14.jpeg",
  "img/photo/15.jpeg",
  "img/photo/19.jpeg",
  "img/photo/22.jpeg",
  "img/photo/24.jpeg",
  // Aggiungi altre URL delle immagini se necessario
];

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          {/* Pagina principale */}
          <Route path="/" element={
            <>
              <Navigation />
              <Header data={landingPageData.Header} />
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              <Gallery data={imageUrls} />
              <FormComponent />
              <CookieBanner />
            </>
          } />
          {/* Pagina Privacy Policy senza header e navigazione */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
