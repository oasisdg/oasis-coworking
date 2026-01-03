
import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Wifi, Sun, Timer, Train, Bus, CheckCircle } from 'lucide-react';

const Advantages: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center p-8 text-center bg-[#102219] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2070")' }}
        />
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#13ec80] text-[#102219] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
            Ahora disponible en Pozuelo
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-black">Más que una oficina, tu Oasis personal.</h1>
          <p className="text-gray-200 text-lg md:text-xl">Descubre el espacio que combina productividad, bienestar y una comunidad vibrante en la Avenida de Europa, 26.</p>
          <div className="flex justify-center gap-4 pt-4">
            <Link to="/contacto" className="bg-[#13ec80] text-[#102219] px-8 py-4 rounded-xl font-bold hover:brightness-105 transition-all shadow-xl shadow-[#13ec80]/30">
              Agenda una Visita
            </Link>
            <Link to="/espacios" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
              Ver Galería
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-b border-[#dbe6e0]">
          {[
            { label: 'Terraza Panorámica', value: '500m²' },
            { label: 'Acceso Seguro', value: '24/7' },
            { label: 'Eventos Mensuales', value: '10+' },
            { label: 'Luz Natural', value: '100%' }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left space-y-1">
              <p className="text-5xl font-black tracking-tight">{stat.value}</p>
              <p className="text-sm text-[#618975] font-bold uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Feature 1: Terrace */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="text-[#13ec80] font-black uppercase tracking-widest text-sm flex items-center gap-2">
              <Cloud className="w-5 h-5" /> La Joya de la Corona
            </div>
            <h2 className="text-4xl font-black">La Terraza: Tu ventaja competitiva</h2>
            <p className="text-[#618975] text-lg leading-relaxed">
              Nuestra espectacular terraza no es solo para descansar. Es una herramienta estratégica. El lugar perfecto para impresionar a clientes en reuniones informales, organizar eventos corporativos al atardecer o simplemente desconectar 15 minutos para volver con energía.
            </p>
            <div className="space-y-3">
              {["Eventos exclusivos de networking", "Zona chill-out con WiFi alta velocidad", "Vistas privilegiadas de Pozuelo"].map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#13ec80]" />
                  <span className="font-semibold">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Terrace View" />
          </div>
        </section>

        {/* Comparison Section */}
        <section className="bg-[#f0fdf4] rounded-[40px] p-8 md:p-16 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black">El Estándar Oasis</h2>
            <p className="text-[#618975] text-lg">Muchos espacios ofrecen WiFi y café. Nosotros ofrecemos una experiencia que eleva tu marca y tu bienestar.</p>
            <div className="space-y-4">
              {[
                "Luz Natural y Ventilación",
                "Terraza para Eventos 500m²",
                "Parking Privado Incluido"
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl flex justify-between items-center shadow-sm">
                  <span className="font-bold">{item}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Otros ❌</span>
                    <div className="w-px h-6 bg-gray-200"></div>
                    <span className="text-[10px] font-bold text-[#13ec80] uppercase tracking-widest">Oasis ✅</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-10 rounded-[32px] shadow-2xl space-y-6 text-center">
            <Sun className="w-16 h-16 text-[#13ec80] mx-auto" />
            <h3 className="text-2xl font-black italic">"La mejor decisión del año"</h3>
            <p className="text-[#618975] leading-relaxed italic">"Buscaba un sitio en Pozuelo para no bajar a Madrid centro y encontré este paraíso. La terraza es increíble."</p>
            <div className="flex items-center justify-center gap-4 border-t pt-6">
              <img src="https://i.pravatar.cc/150?u=carlosm" className="w-12 h-12 rounded-full" alt="Carlos M" />
              <div className="text-left">
                <p className="font-bold">Carlos M.</p>
                <p className="text-xs text-[#618975]">CEO, TechStart</p>
              </div>
            </div>
          </div>
        </section>

        {/* Connectivity */}
        <section className="space-y-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black mb-4">Conectividad Inmejorable</h2>
            <p className="text-[#618975] text-lg">Situado estratégicamente en Pozuelo, Oasis ofrece múltiples opciones de transporte para llegar rápido y cómodo.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '10 min de Moncloa', icon: <Timer />, desc: 'Conexión directa por Bus-VAO. Centro de Madrid a un paso.' },
              { title: 'Cercanías Aravaca', icon: <Train />, desc: 'Acceso inmediato a líneas C-7 y C-10 de Renfe.' },
              { title: 'Metro Ligero', icon: <Train />, desc: 'Parada ML2 a pocos metros de la oficina.' },
              { title: 'Red de Autobuses', icon: <Bus />, desc: 'Líneas 560, 561, 562, 656 y 657 en la puerta.' }
            ].map((c, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-[#dbe6e0] shadow-sm space-y-4">
                <div className="w-12 h-12 bg-[#13ec80]/10 rounded-xl flex items-center justify-center text-[#13ec80]">{c.icon}</div>
                <h3 className="text-xl font-bold">{c.title}</h3>
                <p className="text-[#618975] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Dark */}
      <section className="bg-[#111814] py-24 text-center px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-white text-4xl md:text-6xl font-black">¿Listo para elevar tu forma de trabajar?</h2>
          <p className="text-gray-400 text-lg">Únete a la comunidad de profesionales que han elegido calidad de vida sin renunciar a la productividad. Plazas limitadas.</p>
          <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 max-w-md mx-auto">
            <form className="space-y-4">
              <input type="text" placeholder="Nombre completo" className="w-full bg-white/10 border-transparent rounded-xl py-4 px-6 text-white placeholder-gray-500 focus:border-[#13ec80] focus:ring-0 transition-all" />
              <input type="email" placeholder="Email profesional" className="w-full bg-white/10 border-transparent rounded-xl py-4 px-6 text-white placeholder-gray-500 focus:border-[#13ec80] focus:ring-0 transition-all" />
              <button className="w-full bg-[#13ec80] text-[#102219] font-bold py-4 rounded-xl hover:brightness-105 transition-all">Solicitar Información</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advantages;
