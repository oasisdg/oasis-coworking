import React, { useState } from 'react';
import { Check, Calendar, Gift, Send } from 'lucide-react';
import SEO from '../components/SEO';

const WaitingList: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Despacho Privado',
    needs: '',
    privacy: false
  });

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if ((e.target as HTMLInputElement).type === 'checkbox') {
        setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
        setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "waiting-list", ...formData })
    })
      .then(() => setSubmitted(true))
      .catch(() => alert("Error al enviar. Inténtalo de nuevo."));
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="text-center max-w-lg space-y-6">
          <div className="w-20 h-20 bg-[#13ec80]/20 rounded-full flex items-center justify-center text-[#13ec80] mx-auto animate-bounce">
            <Check className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-black">¡Estás dentro!</h1>
          <p className="text-lg text-[#618975]">
            Ya tienes tu sitio en la lista prioritaria. Te contactaremos antes del <strong>15 de Febrero</strong> para formalizar tu plaza con el <strong>15% de descuento</strong>.
          </p>
          <a href="/" className="inline-block text-[#13ec80] font-bold hover:underline">Volver al inicio</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f8f7] flex flex-col lg:flex-row">
      <SEO 
        title="Lista de Espera | Oasis Coworking - Apertura 15 Feb"
        description="Apúntate a la lista de espera antes de la apertura y consigue un 15% de descuento en tu oficina o puesto de trabajo durante 3 meses."
      />

      {/* Left: Visual & Value */}
      <div className="lg:w-1/2 bg-[#102219] text-white p-8 lg:p-20 flex flex-col justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069")' }}
        />
        
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#13ec80] text-[#102219] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
            <Calendar className="w-3 h-3" /> Apertura 15 de Febrero
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Trabaja donde <br/><span className="text-[#13ec80]">otros sueñan.</span>
          </h1>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            Estamos ultimando los detalles de tu nuevo espacio de trabajo en Pozuelo. Únete ahora a los fundadores y profesionales que estrenarán Oasis.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-4">
            <h3 className="font-bold text-xl flex items-center gap-2">
              <Gift className="w-5 h-5 text-[#13ec80]" />
              Oferta Fundadores
            </h3>
            <ul className="space-y-3">
              {[
                "15% de descuento durante 3 meses",
                "Prioridad en la elección de despacho",
                "Invitación al evento de inauguración",
                "Pack de bienvenida exclusivo"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-[#13ec80] flex items-center justify-center text-[#102219] shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="lg:w-1/2 p-6 lg:p-20 flex flex-col justify-center bg-white">
        <div className="max-w-md mx-auto w-full space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-[#111814]">Asegura tu plaza</h2>
            <p className="text-[#618975] mt-2">Rellena el formulario para entrar en la lista prioritaria. Sin compromiso de pago hoy.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" name="waiting-list" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="waiting-list" />

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#111814] ml-1">Nombre completo</label>
              <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Ej. Ana García" className="w-full bg-[#f6f8f7] border-transparent rounded-xl py-4 px-6 focus:border-[#13ec80] focus:ring-0 transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#111814] ml-1">Email profesional</label>
              <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="ana@empresa.com" className="w-full bg-[#f6f8f7] border-transparent rounded-xl py-4 px-6 focus:border-[#13ec80] focus:ring-0 transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#111814] ml-1">Teléfono</label>
              <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+34 600 000 000" className="w-full bg-[#f6f8f7] border-transparent rounded-xl py-4 px-6 focus:border-[#13ec80] focus:ring-0 transition-all" />
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2 col-span-2">
                  <label className="text-sm font-bold text-[#111814] ml-1">¿Qué estás buscando?</label>
                  <select name="interest" value={formData.interest} onChange={handleChange} className="w-full bg-[#f6f8f7] border-transparent rounded-xl py-4 px-6 focus:border-[#13ec80] focus:ring-0 transition-all appearance-none">
                    <option value="Despacho Privado">Despacho Privado</option>
                    <option value="Hot Desk">Hot Desk (Mesa flexible)</option>
                    <option value="Sala Reuniones">Sala de Reuniones</option>
                    <option value="Indeciso">Aún no lo sé</option>
                  </select>
               </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#111814] ml-1">¿Qué necesitas para que sea perfecto?</label>
              <textarea 
                name="needs" 
                value={formData.needs} 
                onChange={handleChange} 
                rows={3} 
                placeholder="Ej. Necesito luz natural, somos un equipo de 4, necesito monitores..." 
                className="w-full bg-[#f6f8f7] border-transparent rounded-xl py-4 px-6 focus:border-[#13ec80] focus:ring-0 transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex items-start gap-3 pt-2">
               <input required name="privacy" checked={formData.privacy} onChange={handleChange} type="checkbox" className="mt-1 rounded text-[#13ec80] focus:ring-[#13ec80]" />
               <p className="text-xs text-[#618975] leading-relaxed">
                 Acepto la política de privacidad y recibir información sobre la apertura.
               </p>
            </div>

            <button type="submit" className="w-full bg-[#13ec80] text-[#102219] py-4 rounded-xl font-bold text-lg hover:bg-[#0fd671] transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2">
              Unirme a la Lista de Espera <Send className="w-4 h-4" />
            </button>
            
            <p className="text-center text-xs text-[#618975]">
              Plazas limitadas. Promoción válida para los primeros 50 registros.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitingList;
