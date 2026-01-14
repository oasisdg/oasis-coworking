import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#102219] text-white py-3 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#13ec80]" />
          <span className="font-bold text-[#13ec80]">GRAN APERTURA 15 FEBRERO</span>
        </div>
        <p className="text-gray-300 hidden sm:block">|</p>
        <p>Únete a la lista de espera y consigue un <span className="font-bold text-white underline decoration-[#13ec80] underline-offset-2">15% de descuento</span>.</p>
        <Link 
          to="/lista-espera" 
          className="inline-flex items-center gap-1 font-bold text-[#13ec80] hover:text-white transition-colors ml-2"
        >
          Apuntarme <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementBar;
