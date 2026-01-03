import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner'; // <--- Nuevo Banner

// Páginas
import Home from './pages/Home';
import Spaces from './pages/Spaces';
import Advantages from './pages/Advantages';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import PrivacyPage from './pages/PrivacyPage'; // <--- Nueva Página
import CookiesPage from './pages/CookiesPage'; // <--- Nueva Página

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#f6f8f7] text-[#111814]">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/espacios" element={<Spaces />} />
            <Route path="/ventajas" element={<Advantages />} />
            <Route path="/precios" element={<Pricing />} />
            <Route path="/contacto" element={<Contact />} />
            
            {/* Rutas Legales */}
            <Route path="/privacidad" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Banner de Cookies (flotante) */}
        <CookieBanner />
      </div>
    </Router>
  );
};

export default App;
