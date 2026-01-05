import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Wifi, Coffee, ParkingCircle, Clock, Star, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      
      {/* Configuramos el SEO específico de la portada */}
      <SEO 
        title="Oasis Coworking Pozuelo | Oficinas y Despachos en Av. Europa"
        description="Tu espacio de trabajo flexible en Pozuelo. Alquiler de despachos privados, salas de reuniones y puestos fijos con las mejores vistas de Madrid."
      />

      {/* Hero Section */}
      <section className="relative px-6 py-12 md:py-20 max-w-7xl mx-auto w-full">
        <div 
          className="relative min-h-[500px] md:min-h-[600px] rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(16, 34, 25, 0.4), rgba(16, 34, 25, 0.7)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069")` }}
        >
          <div className="relative z-10 max-w-4xl space-y-6">
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Oasis: Tu espacio de trabajo con vistas
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Despachos privados, salas de reuniones y una terraza única para que tus ideas fluyan en el corazón de Pozuelo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/espacios" className="bg-[#13ec80] text-[#102219] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0fd671] transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-[#13ec80]/20">
                Explorar Espacios
              </Link>
              <Link to="/contacto" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                Reservar Visita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#13ec80]/10 text-[#13ec80]">
              <div className="w-2 h-2 rounded-full bg-[#13ec80] animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest">Productividad & Calma</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Más que una oficina, un entorno para crecer.
            </h2>
            <p className="text-lg text-[#618975] leading-relaxed">
              En Oasis Coworking creemos que el entorno define tu trabajo. Hemos diseñado cada rincón de nuestras instalaciones en Pozuelo de Alarcón para ofrecer el equilibrio perfecto entre la energía de una comunidad profesional y la paz necesaria para concentrarse.
            </p>
            <div className="space-y-4">
              {[
                "Luz natural en todos los espacios",
                "Comunidad de profesionales afines",
                "Eventos de networking semanales"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#13ec80]" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
            <div className="rounded-3xl bg-cover bg-center col-span-1 row-span-2" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070")' }}></div>
            <div className="rounded-3xl bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070")' }}></div>
            <div className="rounded-3xl bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070")' }}></div>
          </div>
        </div>
      </section>

      {/* Spaces Preview */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Diseñado para tu productividad</h2>
              <p className="text-[#618975] text-lg">Encuentra el lugar perfecto para trabajar, reunirte y crecer profesionalmente.</p>
            </div>
            <Link to="/espacios" className="bg-[#13ec80] text-[#102219] px-6 py-3 rounded-xl font-bold transition-transform hover:scale-105">
              Ver disponibilidad
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Despachos Privados', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069', desc: 'Oficinas equipadas con luz natural y máxima privacidad.' },
              { name: 'Salas de Reuniones', img: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=2050', desc: 'Espacios tecnológicos perfectos para presentaciones.' },
              { name: 'Cabinas Insonorizadas', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070', desc: 'Concentración total para tus llamadas importantes.' },
              { name: 'Terraza para Eventos', img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2070', desc: 'Un respiro al aire libre para networking y relax.' }
            ].map((space, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-md">
                  <img src={space.img} alt={space.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                </div>
                <h3 className="text-xl font-bold mb-1">{space.name}</h3>
                <p className="text-[#618975] text-sm">{space.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-16">Servicios Incluidos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Internet Alta Velocidad', icon: <Wifi />, desc: 'Fibra óptica dedicada, segura y con redundancia.' },
            { title: 'Café de Especialidad', icon: <Coffee />, desc: 'Barra libre de café de grano, té y agua filtrada.' },
            { title: 'Parking Privado', icon: <ParkingCircle />, desc: 'Plazas en el edificio para coches y bicicletas.' },
            { title: 'Acceso 24/7', icon: <Clock />, desc: 'Tu oficina disponible cuando la necesites mediante app.' }
          ].map((service, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl shadow-sm border border-[#dbe6e0] hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#13ec80]/20 rounded-2xl flex items-center justify-center text-[#13ec80] mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[#618975] text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f6f8f7] py-24 border-y border-[#dbe6e0]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Lo que dicen nuestros coworkers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Elena M.', 
                role: 'Diseñadora Gráfica', 
                text: 'Desde que mudé mi estudio a Oasis, mi productividad se ha disparado. La luz natural y la terraza son impagables.', 
                // CORREGIDO: Usamos img=32 (Foto de mujer específica)
                img: 'https://i.pravatar.cc/150?img=32' 
              },
              { 
                name: 'Carlos R.', 
                role: 'Consultor IT', 
                text: 'El ambiente es muy profesional pero cercano. He hecho contactos valiosos aquí. Las salas de reuniones impresionan.', 
                // CORREGIDO: Usamos img=33 (Foto de hombre específica)
                img: 'https://i.pravatar.cc/150?img=33' 
              },
              { 
                name: 'Sofia L.', 
                role: 'Emprendedora', 
                text: 'La flexibilidad de acceso 24/7 es fundamental para mí. Oasis ofrece calidad premium a un precio muy competitivo.', 
                // CORREGIDO: Usamos img=45 (Foto de mujer específica)
                img: 'https://i.pravatar.cc/150?img=45' 
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm space-y-6">
                <div className="flex gap-1 text-[#13ec80]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-[#111814] font-medium leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border-2 border-[#13ec80]/20" />
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs text-[#618975]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-[#102219] rounded-[40px] p-8 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#13ec80]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-xl space-y-4">
            <h2 className="text-white text-3xl md:text-5xl font-black leading-tight">¿Listo para mejorar tu espacio de trabajo?</h2>
            <p className="text-gray-400 text-lg">Ven a conocernos y disfruta de un día de prueba gratuito. Sin compromisos.</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link to="/contacto" className="bg-[#13ec80] text-[#102219] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#0fd671] transition-all shadow-xl shadow-[#13ec80]/20 text-center">
              Reservar Tour
            </Link>
            <Link to="/precios" className="border border-gray-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:border-white transition-all text-center">
              Ver Tarifas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
