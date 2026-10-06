import React from 'react';
import { Phone, Mail, CheckCircle } from 'lucide-react';
import { generateWhatsAppQuoteUrl } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const directWhatsAppUrl = generateWhatsAppQuoteUrl([]);

  return (
    <footer id="contacto" className="bg-[#0A0A0A] border-t border-[#242424] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Hotline Card */}
        <div className="bg-[#121212] border border-[#242424] p-6 lg:p-8 tactical-chamfer flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#76B900]">
              <span className="w-2 h-2 bg-[#76B900] rounded-none animate-pulse"></span>
              <span>CANAL DE ATENCIÓN DIRECTA // INSTITUCIONAL & MAYORISTA</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
              ¿Requiere Asesoría Técnica para su Unidad?
            </h3>
            <p className="text-xs text-[#A3A3A3] max-w-xl">
              Nuestros especialistas en equipamiento balístico y defensa configuran paquetes a la medida de los requerimientos de su institución.
            </p>
          </div>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#76B900] hover:bg-[#86B335] text-[#0A0A0A] font-extrabold text-xs font-mono tracking-wider uppercase tactical-chamfer flex items-center gap-2 shadow-[0_0_15px_rgba(118,185,0,0.3)] shrink-0 transition-all hover:shadow-[0_0_25px_rgba(118,185,0,0.5)]"
          >
            <Phone className="w-4 h-4" />
            <span>Hablar con un Asesor (+58 414-9428999)</span>
          </a>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black tracking-wider text-white flex items-center">
                T.365
                <span className="inline-block w-2 h-2 bg-[#76B900] ml-1 shadow-[0_0_8px_#76B900]"></span>
              </span>
              <span className="font-mono text-xs text-[#76B900] border-l border-[#242424] pl-2">
                PROSAFE SUPPLY
              </span>
            </div>
            <p className="text-[#7A7A7A] leading-relaxed">
              Equipamiento balístico, óptico y defensivo de estándar militar. Abastecimiento profesional 365 días al año.
            </p>
            <div className="font-mono text-[11px] text-[#A3A3A3] space-y-1">
              <div>SANTIAGO, CHILE</div>
              <div className="text-[#76B900]">COBERTURA LATAM DISPATCH</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 font-mono">
            <div className="text-[#76B900] font-bold uppercase tracking-wider text-xs">
              Líneas de Equipamiento
            </div>
            <ul className="space-y-2 text-[#A3A3A3]">
              <li><a href="#catalogo" className="hover:text-white transition-colors">Chalecos Porta-Placas Cordura</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Cascos Balísticos FAST Aramid</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Linternas Tácticas de Asalto</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Cámaras Corporales 4K IR</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Grilletes de Bisagra de Acero</a></li>
            </ul>
          </div>

          {/* Standards & Compliance */}
          <div className="space-y-3 font-mono">
            <div className="text-[#76B900] font-bold uppercase tracking-wider text-xs">
              Estándares & Normativas
            </div>
            <ul className="space-y-2 text-[#A3A3A3]">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#76B900]" />
                <span>NIJ Standard 0101.06 (III-A)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#76B900]" />
                <span>STANAG 2920 Ballistic</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#76B900]" />
                <span>ISO 9001:2015 Management</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#76B900]" />
                <span>Mil-Spec Cordura 1000D</span>
              </li>
            </ul>
          </div>

          {/* Procurement & Contact */}
          <div className="space-y-3 font-mono">
            <div className="text-[#76B900] font-bold uppercase tracking-wider text-xs">
              Compras Institucionales
            </div>
            <p className="text-[#7A7A7A] leading-relaxed">
              Atendemos órdenes de compra del sector público, corporativo y licitaciones de seguridad privada.
            </p>
            <div className="pt-1 space-y-1 text-[#A3A3A3]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#76B900]" />
                <span>contacto@t365tactical.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#76B900]" />
                <span>+58 414-9428999</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#5A5A5A]">
          <div>
            © 2025 T.365 PROSAFE SUPPLY. MIL-SPEC CERTIFIED DEFENSE SYSTEMS.
          </div>
          <div className="flex gap-4">
            <span>TERMINOS DE SERVICIO</span>
            <span>POLÍTICA DE PRIVACIDAD</span>
            <span>DESPACHO SEGURO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
