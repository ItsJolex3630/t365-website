import React from 'react';
import { ArrowRight, Crosshair, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';
import { generateWhatsAppQuoteUrl } from '../../utils/whatsapp';

export const HeroSection: React.FC = () => {
  const { items } = useQuote();
  const directWhatsAppUrl = generateWhatsAppQuoteUrl(items);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#242424] hud-grid-bg">
      {/* Decorative HUD Corner Crosshairs */}
      <div className="absolute top-6 left-6 text-[#242424] font-mono text-xs select-none pointer-events-none hidden md:block">
        + LOC: 33°27'S 70°40'W // GRID-365
      </div>
      <div className="absolute top-6 right-6 text-[#242424] font-mono text-xs select-none pointer-events-none hidden md:block">
        [SYS-STATUS: READY] +
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tactical Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#121212] border border-[#76B900]/40 text-[#76B900] text-xs font-mono tracking-wider shadow-[0_0_12px_rgba(118,185,0,0.15)]">
              <span className="w-2 h-2 bg-[#76B900] inline-block animate-ping"></span>
              <span>[ MIL-SPEC DEFENSE PROTOCOL // LATAM DISPATCH ]</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight uppercase">
                Equipamiento Táctico <br />
                <span className="text-[#76B900] drop-shadow-[0_0_20px_rgba(118,185,0,0.35)]">
                  Profesional & Defensa
                </span>
              </h1>
              <p className="font-mono text-sm sm:text-base text-[#76B900] tracking-widest uppercase font-semibold">
                Built for what's next. Tactical. 365 days a year.
              </p>
            </div>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-[#A3A3A3] max-w-2xl leading-relaxed">
              Suministros balísticos de estándar militar, chalecos porta-placas modulares, cascos FAST Kevlar, linternas de asalto y dispositivos de retención de alta resistencia para fuerzas de seguridad, custodia armada y operadores tácticos en terreno.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#catalogo"
                className="px-8 py-4 bg-[#76B900] hover:bg-[#86B335] text-[#0A0A0A] font-black text-sm tracking-widest uppercase tactical-chamfer flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(118,185,0,0.4)] transition-all hover:shadow-[0_0_30px_rgba(118,185,0,0.6)]"
              >
                <span>Explorar Catálogo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#121212] hover:bg-[#1A1A1A] border border-[#242424] hover:border-[#76B900] text-white hover:text-[#76B900] font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all font-mono"
              >
                <Crosshair className="w-4 h-4 text-[#76B900]" />
                <span>Consultar Especialista</span>
              </a>
            </div>

            {/* Quick Micro-Specs Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#242424] text-xs font-mono">
              <div className="space-y-1">
                <div className="text-[#5A5A5A] uppercase">Disponibilidad</div>
                <div className="text-white font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#76B900]" />
                  <span>100% Stock Inmediato</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[#5A5A5A] uppercase">Blindaje</div>
                <div className="text-white font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#76B900]" />
                  <span>NIJ 0101.06 Compliant</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[#5A5A5A] uppercase">Despacho</div>
                <div className="text-white font-bold flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#76B900]" />
                  <span>24/48H Chile & LATAM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tactical Hero Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Visual Chassis Frame */}
            <div className="relative bg-[#121212] border border-[#242424] p-3 tactical-chamfer shadow-[0_10px_40px_rgba(0,0,0,0.8)] group">
              {/* Top HUD Registration Header */}
              <div className="flex items-center justify-between pb-2 border-b border-[#242424] text-[11px] font-mono text-[#A3A3A3] px-2">
                <span className="text-[#76B900] font-bold">MODEL // V-365 PLATE CARRIER</span>
                <span>NIJ-III-A READY</span>
              </div>

              {/* Main Product Image */}
              <div className="relative overflow-hidden bg-[#0A0A0A] aspect-square flex items-center justify-center my-2">
                <img
                  src="/products/01_chaleco_tactico_platecarrier_02.jpg"
                  alt="Chaleco Porta-Placas Modular V-365 T.365"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlaid HUD Crosshair Markers */}
                <div className="absolute top-4 left-4 p-1.5 bg-[#0A0A0A]/80 border border-[#76B900] text-[10px] font-mono text-[#76B900]">
                  CORDURA 1000D // LASER-CUT
                </div>

                <div className="absolute bottom-4 right-4 p-1.5 bg-[#0A0A0A]/80 border border-[#242424] text-[10px] font-mono text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#76B900]"></span>
                  QUICK-RELEASE DUAL
                </div>
              </div>

              {/* Inset Second Gear Showcase: FAST Ballistic Helmet */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#242424]">
                <div className="flex items-center gap-3 p-2 bg-[#1A1A1A] border border-[#242424]">
                  <img
                    src="/products/11_casco_tactico_fast_01.jpg"
                    alt="Casco Balístico FAST T.365"
                    className="w-12 h-12 object-cover border border-[#242424]"
                  />
                  <div>
                    <div className="text-[11px] font-mono text-[#76B900]">CASCO FAST</div>
                    <div className="text-xs font-bold text-white">Wilcox Mount</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 bg-[#1A1A1A] border border-[#242424]">
                  <img
                    src="/products/04_camara_tactica_bodycam_05.jpg"
                    alt="Bodycam 4K T.365"
                    className="w-12 h-12 object-cover border border-[#242424]"
                  />
                  <div>
                    <div className="text-[11px] font-mono text-[#76B900]">BODYCAM 4K</div>
                    <div className="text-xs font-bold text-white">IR 14H Batería</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Accent Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#76B900]/20 to-transparent blur-xl -z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
