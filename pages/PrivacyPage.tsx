import React from 'react';
import { ShieldCheck, Mail } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <ShieldCheck className="w-16 h-16 text-[#13ec80] mx-auto mb-4" />
        <h1 className="text-4xl font-black mb-4">Política de Privacidad</h1>
        <p className="text-[#618975]">Última actualización: Enero 2026</p>
      </div>

      <div className="space-y-8 text-[#111814] leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Responsable del Tratamiento</h2>
          <p>
            En cumplimiento de lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos que los datos personales facilitados serán tratados por:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-[#618975]">
            <li><strong>Titular:</strong> David Giner Hernández</li>
            <li><strong>NIF:</strong> 53201176Z</li>
            <li><strong>Domicilio:</strong> Avenida de Europa 26, 28224 Pozuelo de Alarcón, Madrid</li>
            <li><strong>Email:</strong> hola@oasispozuelo.es</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Finalidad del tratamiento</h2>
          <p>Tratamos la información que nos facilita con el fin de:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-[#618975]">
            <li>Gestionar las solicitudes de información recibidas a través del formulario de contacto.</li>
            <li>Gestionar las reservas de espacios o visitas (si procede).</li>
            <li>Enviar comunicaciones comerciales relacionadas con nuestros servicios (solo si nos ha dado su consentimiento explícito).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Legitimación</h2>
          <p>
            La base legal para el tratamiento de sus datos es el <strong>consentimiento</strong> del interesado al rellenar y enviar el formulario de contacto, aceptando esta Política de Privacidad.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Destinatarios de los datos</h2>
          <p>
            Sus datos no se cederán a terceros salvo obligación legal. No obstante, para prestar el servicio, utilizamos proveedores tecnológicos como Netlify (hosting y formularios) que actúan como encargados del tratamiento bajo estrictos acuerdos de confidencialidad.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Derechos del usuario</h2>
          <p>Puede ejercer sus derechos de acceso, rectificación, supresión, limitación y oposición enviando un email a:</p>
          <div className="flex items-center gap-2 mt-2 font-bold text-[#13ec80]">
            <Mail className="w-5 h-5" />
            <a href="mailto:hola@oasispozuelo.es">hola@oasispozuelo.es</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
