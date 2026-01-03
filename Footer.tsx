
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#f0f4f2] pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="text-[#13ec80] transition-transform group-hover:rotate-12 duration-300">
                <Logo className="w-7 h-7" />
              </div>
              <span className="text-xl font-bold">Oasis</span>
            </Link>
            <p className="text-[#618975] text-sm leading-relaxed">
              Espacios de trabajo flexibles diseñados para potenciar tu creatividad y bienestar en Pozuelo de Alarcón.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-[#f6f8f7] rounded-lg hover:text-[#13ec80] transition-colors"><Globe className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-[#f6f8f7] rounded-lg hover:text-[#13ec80] transition-colors"><Mail className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-[#f6f8f7] rounded-lg hover:text-[#13ec80] transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Espacios</h4>
            <ul className="space-y-3 text-sm text-[#618975]">
              <li><Link to="/espacios" className="hover:text-[#13ec80]">Despachos Privados</Link></li>
              <li><Link to="/espacios" className="hover:text-[#13ec80]">Puestos Flexibles</Link></li>
              <li><Link to="/espacios" className="hover:text-[#13ec80]">Salas de Reuniones</Link></li>
              <li><Link to="/espacios" className="hover:text-[#13ec80]">Terraza y Eventos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Compañía</h4>
            <ul className="space-y-3 text-sm text-[#618975]">
              <li><Link to="/ventajas" className="hover:text-[#13ec80]">Sobre Nosotros</Link></li>
              <li><Link to="/" className="hover:text-[#13ec80]">Blog</Link></li>
              <li><Link to="/contacto" className="hover:text-[#13ec80]">Contacto</Link></li>
              <li><a href="#" className="hover:text-[#13ec80]">Trabaja con nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-[#618975]">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#13ec80] shrink-0" />
                <span>Av. de Europa, 26, piso 3<br />28224 Pozuelo de Alarcón, Madrid</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#13ec80] shrink-0" />
                <span>+34 664 258 841</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#13ec80] shrink-0" />
                <span>hola@oasispozuelo.es</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#f0f4f2] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#618975]">
          <p>© 2026 Oasis Coworking. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#13ec80]">Política de Privacidad</a>
            <a href="#" className="hover:text-[#13ec80]">Términos de Uso</a>
            <a href="#" className="hover:text-[#13ec80]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
