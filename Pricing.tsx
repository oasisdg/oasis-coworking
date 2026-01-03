
import React from 'react';
import { Link } from 'react-router-dom';
// Added ArrowRight to the imports
import { Check, CheckCircle, Info, Calendar, Monitor, UserPlus, FileText, Lock, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[480px] flex items-center justify-center p-8 text-center bg-[#102219] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069")' }}
        />
        <div className="relative z-10 max-w-2xl space-y-6">
          <h1 className="text-white text-4xl md:text-6xl font-black">Planes Flexibles en Pozuelo</h1>
          <p className="text-gray-300 text-lg md:text-xl">Desde hot desks flexibles hasta oficinas privadas para tu equipo. Sin ataduras, todo incluido.</p>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-white text-sm font-bold">
            <Calendar className="w-4 h-4 text-[#13ec80]" />
            Pago Mensual sin Permanencia
          </div>
        </div>
      </section>

      {/* Main Plans */}
      <section className="py-24 px-6 max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Membresías Mensuales</h2>
          <p className="text-[#618975]">Elige entre flexibilidad total o privacidad para tu equipo.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Hot Desk */}
          <div className="bg-white p-10 rounded-[40px] border border-[#dbe6e0] shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">Hot Desk</h3>
                <Monitor className="w-8 h-8 text-gray-300" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">200€</span>
                <span className="text-[#618975] font-medium">/mes</span>
              </div>
              <p className="text-xs text-[#618975]">Más IVA</p>
              <div className="space-y-4 pt-4">
                {["Acceso L-V 9:00 - 19:00", "Cualquier mesa disponible", "Wifi Alta Velocidad + Café", "2h créditos sala reuniones"].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm font-medium">
                    <Check className="w-5 h-5 text-[#13ec80] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Link to="/contacto" className="mt-10 block w-full bg-[#f6f8f7] text-[#111814] text-center py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all">
              Elegir Plan
            </Link>
          </div>

          {/* Private Office */}
          <div className="bg-white p-10 rounded-[40px] border-2 border-[#13ec80] shadow-2xl flex flex-col justify-between relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#13ec80] text-[#102219] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
              Recomendado
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">Despacho Privado</h3>
                <Lock className="w-8 h-8 text-[#13ec80]" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">300€</span>
                <span className="text-[#618975] font-medium">/puesto/mes</span>
              </div>
              <p className="text-xs text-[#618975]">Más IVA. Para equipos de 2 a 10 personas.</p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-3 text-sm font-bold">
                  <CheckCircle className="w-5 h-5 text-[#13ec80] shrink-0" />
                  Oficina privada insonorizada
                </div>
                {["Acceso 24/7 y limpieza diaria", "Logo en puerta y directorio", "Créditos ilimitados en salas*", "Muebles ergonómicos"].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm font-medium">
                    <Check className="w-5 h-5 text-[#13ec80] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Link to="/contacto" className="mt-10 block w-full bg-[#13ec80] text-[#102219] text-center py-4 rounded-2xl font-bold hover:bg-[#0fd671] transition-all">
              Solicitar Presupuesto
            </Link>
          </div>
        </div>
      </section>

      {/* Hourly / Day */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
            <div>
              <h2 className="text-2xl font-bold">Espacios por Hora y Día</h2>
              <p className="text-[#618975]">No necesitas ser miembro para reservar estos espacios.</p>
            </div>
            <Link to="/espacios" className="text-[#13ec80] font-bold flex items-center gap-1 hover:underline">
              Ver disponibilidad <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sala de Reuniones', price: '20€/hora', desc: 'Capacidad para 8 personas. Pantalla 4K y pizarra.' },
              { name: 'Cabinas Phone Booth', price: 'Gratis/miembros', desc: 'Perfectas para llamadas privadas insonorizadas.' },
              { name: 'Terraza Eventos', price: 'A medida', desc: 'Espacio al aire libre con vistas para afterworks.' }
            ].map((item, i) => (
              <div key={i} className="bg-[#f6f8f7] p-6 rounded-3xl border border-[#dbe6e0] space-y-4">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-[#13ec80] font-black text-xl">{item.price}</p>
                <p className="text-[#618975] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 max-w-5xl mx-auto w-full overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-12">Comparativa Detallada</h2>
        <div className="overflow-x-auto rounded-3xl border border-[#dbe6e0] shadow-sm">
          <table className="w-full text-left bg-white">
            <thead>
              <tr className="bg-gray-50 border-b border-[#dbe6e0]">
                <th className="p-6 text-sm font-bold text-[#618975] uppercase tracking-wider">Características</th>
                <th className="p-6 text-center text-sm font-bold">Hot Desk</th>
                <th className="p-6 text-center text-sm font-bold text-[#13ec80]">Despacho</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dbe6e0]">
              {[
                { label: 'Horario Acceso', hot: 'L-V 9:00-19:00', des: '24/7' },
                { label: 'Taquilla Privada', hot: '-', des: 'Sí' },
                { label: 'Créditos Salas', hot: '2 horas/mes', des: 'Ilimitado*' },
                { label: 'Domiciliación Fiscal', hot: '+30€/mes', des: 'Sí' },
                { label: 'Pases Invitado', hot: '1/mes', des: 'Ilimitado' },
                { label: 'Impresión BN', hot: '100 copias', des: '500 copias' }
              ].map((row, i) => (
                <tr key={i}>
                  <td className="p-6 font-medium text-sm">{row.label}</td>
                  <td className="p-6 text-center text-[#618975] text-sm">{row.hot}</td>
                  <td className="p-6 text-center font-bold text-sm bg-[#13ec80]/5">{row.des}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: '¿Hay compromiso de permanencia?', a: 'No. Nuestros planes mensuales son totalmente flexibles. Solo pedimos un preaviso de 15 días.' },
              { q: '¿Qué incluye el precio exactamente?', a: 'Todo: Luz, agua, internet simétrico, limpieza, seguridad, café/té ilimitados y acceso a comunes. Sin sorpresas.' },
              { q: '¿Hay parking disponible en la zona?', a: 'Sí, Oasis cuenta con plazas privadas para miembros. También hay facilidad de aparcamiento en la zona.' },
              { q: '¿Necesito pagar fianza?', a: 'Sí, solicitamos una fianza de un mes para despachos privados. Para Hot Desk no es necesaria fianza.' }
            ].map((faq, i) => (
              <details key={i} className="group bg-[#f6f8f7] rounded-2xl p-6 cursor-pointer border border-transparent open:border-[#13ec80]/20 transition-all">
                <summary className="font-bold flex justify-between items-center list-none">
                  {faq.q}
                  <Check className="w-5 h-5 text-[#13ec80] group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-[#618975] text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
