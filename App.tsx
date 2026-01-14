import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import AnnouncementBar from './components/AnnouncementBar';
import WelcomeModal from './components/WelcomeModal'; // <--- IMPORTAR AQUÍ

// ... (Resto de imports de páginas igual que antes) ...

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#f6f8f7] text-[#111814]">
          <AnnouncementBar />
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
               {/* ... (Tus rutas siguen igual) ... */}
              <Route path="/" element={<Home />} />
              <Route path="/espacios" element={<Spaces />} />
              <Route path="/ventajas" element={<Advantages />} />
              <Route path="/precios" element={<Pricing />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/lista-espera" element={<WaitingList />} />
              <Route path="/privacidad" element={<PrivacyPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
            </Routes>
          </main>

          <Footer />
          <CookieBanner />
          <WelcomeModal /> {/* <--- AÑADIR EL POPUP AQUÍ AL FINAL */}
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
