import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprobamos si ya aceptó las cookies antes
    const consent = localStorage.getItem('oasis_cookie_consent');
    if (!consent) {
      // Si no hay rastro, mostramos el banner tras 1 segundo
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('oasis_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="max-w-7xl mx-auto bg-[#111814] text-white p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 border border-[#2a3830]">
        <div className="flex-1 space-y-2 text-center md:text-left">
          <p className="font-bold text-[#13ec80]">🍪 Valoramos tu privacidad</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Utilizamos cookies propias y de terceros (Google Maps/Analytics) para mejorar tu experiencia. 
            Si continúas navegando, consideramos que aceptas su uso.
          </p>
        </div>
        <div className="flex gap-4 items-center shrink-0">
          <Link 
            to="/cookies" 
            className="text-sm font-medium text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-4"
          >
            Ver Política
          </Link>
          <button 
            onClick={acceptCookies}
            className="bg-[#13ec80] hover:bg-[#10d670] text-[#111814] font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            Aceptar todo
          </Link>
          <button 
            onClick={() => setIsVisible(false)} 
            className="p-2 text-gray-500 hover:text-white md:hidden"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
