import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    space: 'Despacho Privado',
    message: '',
    privacy: false
  });

  // Función para codificar los datos para Netlify
  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Manejo especial para el checkbox
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
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setSubmitted(true);
        // Reset opcional del formulario
        setFormData({ name: '', email: '', phone: '', space: 'Despacho Privado', message: '', privacy: false });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch(error => alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo."));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="max-w-3xl mb-16 space-y-4">
        <h1 className="text-5xl font-black leading-tight">Contacto y Reserva</h1>
        <p className="text-[#618975] text-lg md:text-xl leading-relaxed">
          Encuentra tu espacio ideal en Pozuelo de Alarcón. Solicita una visita, pide presupuesto o simplemente ven a tomar un café con nosotros.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        {/* Info Col */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            {[
              { title: 'Nuestra ubicación', desc: 'Avenida de Europa, 26, piso 3\n28224 Pozuelo de Alarcón, Madrid', icon: <MapPin /> },
              { title: 'Llámanos', desc: 'Lunes a Viernes, 9:00 - 19:00\n+34 664 258 841', icon: <Phone /> },
              { title: 'Escríbenos', desc: 'Respondemos en menos de 24h\nhola@oasispozuelo.es', icon: <Mail /> }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 bg-white rounded-3xl border border-[#dbe6e0] shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#13ec80]/10 rounded-xl flex items-center justify-center text-[#13ec80] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-[#618975] text-sm whitespace-pre-line leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#dbe6e0] h-80 shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.567622956711!2d-3.793744623467654!3d40.44061695418196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4188fa63273873%3A0x66c8230588661763!2sAv.%20de%20Europa%2C%2026%2C%2028224%20Pozuelo%20de%20Alarc%C3%B3n%2C%20Madrid!5e0!3m2!1ses!2ses!4v1709420000000!5m2!1ses!2ses"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form Col */}
        <div className="lg:col-span-7">
          <div className="bg-white p-10 md:p-12 rounded-[40px] border border-[#dbe6e0] shadow-xl shadow-gray-100">
            <h2 className="text-3xl font-bold mb-2">Solicitar Visita o Presupuesto</h2>
            <p className="text-[#618975] mb-10">Déjanos tus datos y nos pondremos en contacto contigo para agendar una visita personalizada.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6" name="contact" method="post" data-netlify="true">
              {/* Campo oculto OBLIGATORIO para Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Nombre completo</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Tu nombre" className="w-full bg-[#f6f8f7] border-transparent rounded-xl py-4 px-6 focus:border-[#13ec80] focus:ring-0 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Email</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="ejemplo@email.com" className="w-full bg-[#f6f8f7] border-transparent rounded-xl py-4 px-6 focus:border-[#13ec80] focus:ring-0 transition-all" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Teléfono</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+34 600 000 000" className="w-full bg-[#f6f8f7] border-transparent rounded-xl py-4 px-6 focus:border-[#13ec80] focus:ring-0 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">¿Qué espacio te interesa?</label>
                  <select name="space" value={formData.space} onChange={handleChange} className="w-full bg-[#f6f8f7] border-transparent rounded-xl py-4 px-6 focus:border-[#13ec80] focus:ring-0 transition-all appearance-none">
                    <option value="Despacho Privado">Despacho Privado</option>
                    <option value="Hot Desk">Hot Desk</option>
                    <option value="Sala de Reuniones">Sala de Reuniones</option>
                    <option value="Eventos Terraza">Eventos Terraza</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Mensaje o necesidades especiales</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Cuéntanos cuántas personas sois, cuándo os gustaría empezar, etc." className="w-full bg-[#f6f8f7] border-transparent rounded-xl py-4 px-6 focus:border-[#13ec80] focus:ring-0 transition-all resize-none"></textarea>
              </div>
              
              <div className="flex items-start gap-4">
                <input required name="privacy" checked={formData.privacy} onChange={handleChange} type="checkbox" id="privacy" className="mt-1 rounded text-[#13ec80] focus:ring-[#13ec80]" />
                <label htmlFor="privacy" className="text-sm text-[#618975] leading-relaxed">
                  He leído y acepto la <a href="#" className="underline">Política de Privacidad</a>. Acepto recibir comunicaciones sobre los servicios de Oasis Coworking.
                </label>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={submitted}
                  className={`w-full md:w-auto min-w-[200px] flex items-center justify-center gap-2 py-4 px-10 rounded-2xl font-bold text-lg transition-all ${
                    submitted 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-[#13ec80] text-[#102219] hover:bg-[#0fd671] active:scale-95'
                  }`}
                >
                  {submitted ? (
                    <>¡Enviado! <CheckCircle className="w-5 h-5" /></>
                  ) : (
                    <>Enviar Solicitud <Send className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
