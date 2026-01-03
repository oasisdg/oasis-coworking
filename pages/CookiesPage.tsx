import React from 'react';
import { Cookie } from 'lucide-react';

const CookiesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Cookie className="w-16 h-16 text-[#13ec80] mx-auto mb-4" />
        <h1 className="text-4xl font-black mb-4">Política de Cookies</h1>
        <p className="text-[#618975]">Información sobre cómo usamos sus datos de navegación.</p>
      </div>

      <div className="space-y-8 text-[#111814] leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-4">¿Qué son las cookies?</h2>
          <p>
            Una cookie es un pequeño archivo de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Cookies utilizadas en este sitio web</h2>
          <div className="bg-white border border-[#f0f4f2] rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f6f8f7]">
                <tr>
                  <th className="p-4 font-bold">Tipo</th>
                  <th className="p-4 font-bold">Finalidad</th>
                  <th className="p-4 font-bold">Proveedor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f4f2]">
                <tr>
                  <td className="p-4">Técnicas</td>
                  <td className="p-4 text-[#618975]">Necesarias para el funcionamiento básico de la web y seguridad de los formularios.</td>
                  <td className="p-4">Netlify</td>
                </tr>
                <tr>
                  <td className="p-4">Analíticas</td>
                  <td className="p-4 text-[#618975]">Nos permiten cuantificar el número de usuarios y realizar mediciones estadísticas (Google Analytics).</td>
                  <td className="p-4">Google</td>
                </tr>
                <tr>
                  <td className="p-4">Terceros</td>
                  <td className="p-4 text-[#618975]">Visualización de mapas interactivos de ubicación.</td>
                  <td className="p-4">Google Maps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Desactivación de cookies</h2>
          <p className="mb-4">
            Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#618975]">
            <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noreferrer" className="underline hover:text-[#13ec80]">Google Chrome</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="underline hover:text-[#13ec80]">Safari</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noreferrer" className="underline hover:text-[#13ec80]">Mozilla Firefox</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CookiesPage;
