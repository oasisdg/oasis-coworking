
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Espacios', path: '/espacios' },
    { name: 'Precios', path: '/precios' },
    { name: 'Ventajas', path: '/ventajas' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-[#f0f4f2] py-3 shadow-sm' 
          : 'bg-white border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="text-[#13ec80] transition-transform group-hover:scale-110 duration-300">
            <Logo className="w-9 h-9" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">Oasis Coworking</h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-semibold transition-colors hover:text-[#13ec80] ${
                  location.pathname === link.path ? 'text-[#13ec80]' : 'text-[#111814]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link 
            to="/contacto" 
            className="bg-[#13ec80] text-[#102219] px-6 py-2 rounded-lg text-sm font-bold transition-all hover:bg-[#0fd671] active:scale-95 shadow-sm"
          >
            Reservar Tour
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-[#111814]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[#f0f4f2] shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contacto" 
            onClick={() => setIsOpen(false)}
            className="bg-[#13ec80] text-[#102219] px-6 py-4 rounded-xl text-center font-bold"
          >
            Reservar Tour
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
