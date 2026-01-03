import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#f0f4f2] pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cambiamos a 3 columnas (md:grid-cols-3) para que quede equilibrado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Marca y Redes */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="text-[#13ec80] transition-transform group-hover:rotate-12 duration-300">
                <Logo className="w-7 h-7" />
              </div>
              <span className="text-xl font-bold">Oasis</span>
            </Link>
            <p className="text-[#618975] text-sm leading-relaxed max-w-xs">
              Espacios de trabajo flexibles diseñados para potenciar tu creatividad y bienestar en Pozuelo de Alarcón.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-[#f6f8f7] rounded-xl hover:bg-[#13ec80] hover:text-[#102219] transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-[#f6f8f7] rounded-xl hover:bg-[#0a66c2] hover:text-white transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Espacios (Lo más importante) */}
          <div>
            <h4 className="font-bold mb-6">Nuestros Espacios</h4>
            <ul className="space-y-3 text-sm text-[#618975]">
              <li><Link to="/espacios" className="hover:text-[#13ec80] transition-colors">Despachos Privados</Link></li>
              <li><Link to="/espacios" className="hover:text-[#13ec80] transition-colors">Puestos Flexibles</Link></li>
              <li><Link to="/espacios" className="hover:text-[#13ec80] transition-colors">Salas de Reuniones</Link></li>
              <li><Link to="/espacios" className="hover:text-[#13ec80] transition-colors">Terraza y Eventos</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div>
            <h4 className="font-bold mb-6">Estamos aquí</h4>
            <ul className="space-y-4 text-sm text-[#618975]">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#13ec80] shrink-0" />
                <span>Av. de Europa, 26, piso 3<br />28224 Pozuelo de Alarcón, Madrid</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#13ec80] shrink-0" />
                <a href="tel:+34664258841" className="hover:text-[#13ec80] transition-colors">+34 664 258 841</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#13ec80] shrink-0" />
                <a href="mailto:hola@oasispozuelo.es" className="hover:text-[#13ec80] transition-colors">hola@oasispozuelo.es</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior legal */}
        <div className="pt-8 border-t border-[#f0f4f2] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#618975]">
          <p>© 2026 Oasis Coworking. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="hover:text-[#13ec80] transition-colors">Política de Privacidad</Link>
            <Link to="/cookies" className="hover:text-[#13ec80] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
