import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles, ArrowRight } from 'lucide-react';

const WelcomeModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Comprobamos si ya vio el popup
    const hasSeenPopup = localStorage.getItem('oasis_welcome_popup_seen');
    
    if (!hasSeenPopup) {
      // Esperamos 3 segundos antes de mostrarlo para no agobiar
      const timer = setTimeout(() => {
        setShouldRender(true);
        // Pequeño delay extra para la animación de entrada
        setTimeout(() => setIsVisible(true), 50);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setShouldRender(false), 300); // Esperar a que termine la animación
    localStorage.setItem('oasis_welcome_popup_seen', 'true');
  };

  if (!shouldRender) return null;

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-all duration-300 ${isVisible ? 'bg-black/60 backdrop-blur-sm' : 'bg-black/0 pointer-events-none'}`}>
      <div 
        className={`bg-white w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row relative transition-all duration-500 transform ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'}`}
      >
        {/* Botón Cerrar */}
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-md hover:bg-black/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Imagen Lateral (Oculta en móvil) */}
        <div 
          className="hidden md:block w-2/5 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070")' }}
        >
          <div className="h-full w-full bg-[#102219]/40 backdrop-blur-[2px]"></div>
        </div>

        {/* Contenido */}
        <div className="flex-1 p-8 md:p-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-[#13ec80]/10 text-[#13ec80] px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3" /> Exclusivo Web
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-[#111814] mb-4 leading-tight">
            Abrimos puertas el <br/>
            <span className="text-[#13ec80]">15 de Febrero</span>
          </h2>
          
          <p className="text-[#618975] text-lg mb-8 leading-relaxed">
            Las primeras plazas están volando. Únete a la lista de fundadores y asegura un <strong>15% de descuento</strong> durante tus primeros 3 meses.
          </p>

          <div className="flex flex-col gap-3">
            <Link 
              to="/lista-espera" 
              onClick={handleClose}
              className="w-full bg-[#13ec80] text-[#102219] py-4 rounded-xl font-bold text-lg hover:bg-[#0fd671] transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
            >
              Quiero mi descuento <ArrowRight className="w-5 h-5" />
            </Link>
            <button 
              onClick={handleClose}
              className="text-sm text-gray-400 hover:text-gray-600 font-medium py-2"
            >
              No, prefiero pagar precio completo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
