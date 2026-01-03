
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Video, ClipboardList, Utensils, Users, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Spaces: React.FC = () => {
  const [activeTab, setActiveTab] = useState('despachos');

  const tabs = [
    { id: 'despachos', label: 'Despachos Privados' },
    { id: 'salas', label: 'Salas de Reuniones' },
    { id: 'cabinas', label: 'Cabinas y Terraza' },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative h-[400px] flex items-center justify-center text-center px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=2070")` }}
        />
        <div className="relative z-10 max-w-4xl space-y-4">
          <span className="text-[#13ec80] font-bold uppercase tracking-widest text-sm">Pozuelo de Alarcón</span>
          <h1 className="text-white text-5xl md:text-6xl font-black">Nuestros Espacios</h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
            Desde despachos privados hasta salas de reuniones de alto rendimiento. Encuentra la flexibilidad que tu equipo merece.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md border-b border-[#dbe6e0]">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="flex overflow-x-auto no-scrollbar py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 text-sm font-bold transition-all whitespace-nowrap border-b-2 ${
                  activeTab === tab.id 
                    ? 'border-[#13ec80] text-[#111814]' 
                    : 'border-transparent text-[#618975] hover:text-[#13ec80]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* Despachos */}
        <section id="despachos" className={`grid lg:grid-cols-2 gap-16 items-center ${activeTab !== 'despachos' && 'hidden lg:grid'}`}>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#13ec80]/10 text-[#13ec80]">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Privacidad Total</span>
            </div>
            <h2 className="text-4xl font-extrabold">Despachos Privados</h2>
            <p className="text-[#618975] text-lg leading-relaxed">
              Tu propia sede dentro de Oasis. Diseñados para equipos que necesitan concentración sin renunciar a la comunidad. Totalmente amueblados y listos para entrar a trabajar.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {["Capacidad 1 a 10 pax", "Acceso 24/7 seguro", "Mobiliario ergonómico", "Limpieza diaria"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#13ec80]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contacto" className="inline-flex items-center gap-2 bg-[#111814] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all">
              Solicitar Disponibilidad <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg h-[240px]">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2069" className="w-full h-full object-cover" alt="Office" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[145px]">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2074" className="w-full h-full object-cover" alt="Detail" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[145px]">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Detail 2" />
            </div>
          </div>
        </section>

        {/* Salas */}
        <section id="salas" className={`grid lg:grid-cols-2 gap-16 items-center flex-row-reverse ${activeTab !== 'salas' && 'hidden lg:grid'}`}>
          <div className="lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600">
              <Users className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Colaboración</span>
            </div>
            <h2 className="text-4xl font-extrabold">Salas de Reuniones</h2>
            <p className="text-[#618975] text-lg leading-relaxed">
              Impresiona a tus clientes y potencia la creatividad de tu equipo. Salas equipadas con la última tecnología audiovisual para presentaciones sin fallos.
            </p>
            <div className="bg-white p-8 rounded-3xl border border-[#dbe6e0] shadow-sm">
              <h3 className="font-bold mb-4">Equipamiento Incluido</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Monitor className="w-5 h-5 text-[#13ec80]" />
                  <span>Pantallas 4K</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ClipboardList className="w-5 h-5 text-[#13ec80]" />
                  <span>Pizarras</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Video className="w-5 h-5 text-[#13ec80]" />
                  <span>Videoconf.</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Utensils className="w-5 h-5 text-[#13ec80]" />
                  <span>Catering (Opc.)</span>
                </div>
              </div>
            </div>
            <Link to="/contacto" className="inline-block bg-[#13ec80] text-[#102219] px-8 py-4 rounded-xl font-bold shadow-sm hover:brightness-105 transition-all">
              Reservar por Horas
            </Link>
          </div>
          <div className="lg:order-1 relative">
            <div className="aspect-video rounded-[32px] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=2050" alt="Meeting" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 flex flex-col items-center">
              <span className="text-xs text-[#618975] font-bold uppercase">Capacidad</span>
              <span className="text-2xl font-black">4 - 12 Pax</span>
            </div>
          </div>
        </section>

        {/* Other Spaces */}
        <section id="cabinas-terraza" className={`grid md:grid-cols-2 gap-8 ${activeTab !== 'cabinas' && 'hidden md:grid'}`}>
          <div className="bg-white rounded-[32px] overflow-hidden border border-[#dbe6e0] shadow-sm flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=2069" className="w-full h-full object-cover" alt="Booths" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Silencio</div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">Cabinas Insonorizadas</h3>
              <p className="text-[#618975] text-sm leading-relaxed mb-6 flex-grow">
                Espacios individuales diseñados para tener llamadas y videoconferencias sin interrupciones. Ventilación activa y acústica de estudio.
              </p>
              <Link to="/contacto" className="text-[#13ec80] font-bold flex items-center gap-2 group">
                Reservar Cabina <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-[32px] overflow-hidden border border-[#dbe6e0] shadow-sm flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Terrace" />
              <div className="absolute top-4 left-4 bg-[#13ec80]/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#102219]">Networking</div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">Terraza para Eventos</h3>
              <p className="text-[#618975] text-sm leading-relaxed mb-6 flex-grow">
                Más de 200m² al aire libre para desconectar, hacer networking o celebrar tu próximo evento corporativo. Afterworks cada jueves.
              </p>
              <Link to="/contacto" className="text-[#13ec80] font-bold flex items-center gap-2 group">
                Ver Info Eventos <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Spaces;
