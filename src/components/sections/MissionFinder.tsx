import React, { useState } from 'react';
import { Target, CheckCircle2, ShoppingCart, ArrowRight } from 'lucide-react';
import { MISSIONS } from '../../data/missions';
import { PRODUCTS } from '../../data/products';
import { useQuote } from '../../context/QuoteContext';

export const MissionFinder: React.FC = () => {
  const [selectedMissionId, setSelectedMissionId] = useState<string>(MISSIONS[0].id);
  const { addMissionBundle, setSelectedProductModal } = useQuote();

  const currentMission = MISSIONS.find((m) => m.id === selectedMissionId) || MISSIONS[0];

  const missionProducts = PRODUCTS.filter((p) =>
    currentMission.recommendedProductIds.includes(p.id)
  );

  return (
    <section id="misiones" className="py-20 border-b border-[#242424] bg-[#0E0E0E] relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#76B900]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121212] border border-[#76B900]/40 text-[#76B900] text-xs font-mono tracking-wider">
            <Target className="w-3.5 h-3.5 text-[#76B900]" />
            <span>CONFIGURADOR DE DESPLIEGUE // MISSION FINDER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Kits Tácticos por Perfil Operativo
          </h2>
          <p className="text-sm text-[#A3A3A3]">
            Diseñados para responder a los requerimientos normativos y de seguridad operacional más exigentes de cada sector.
          </p>
        </div>

        {/* Mission Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MISSIONS.map((m) => {
            const isActive = m.id === selectedMissionId;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMissionId(m.id)}
                className={`p-5 min-h-[44px] text-left border transition-all relative ${
                  isActive
                    ? 'bg-[#1A1A1A] border-[#76B900] shadow-[0_0_20px_rgba(118,185,0,0.25)]'
                    : 'bg-[#121212] border-[#242424] hover:border-[#76B900]/60 text-[#A3A3A3]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#76B900] font-bold">
                    {m.code}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 bg-[#76B900] shadow-[0_0_8px_#76B900] animate-pulse"></span>
                  )}
                </div>
                <h3 className="mt-2 font-extrabold text-sm text-white uppercase tracking-wide">
                  {m.title}
                </h3>
                <div className="mt-1 text-xs font-mono text-[#A3A3A3]">
                  {m.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Mission Breakdown Chassis */}
        <div className="bg-[#121212] border border-[#242424] p-6 lg:p-8 tactical-chamfer shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Mission Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#76B900] tracking-wider uppercase">
                  {currentMission.code} // RESUMEN OPERACIONAL
                </span>
                <h3 className="text-2xl font-black text-white uppercase">
                  {currentMission.title}
                </h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  {currentMission.description}
                </p>
              </div>

              {/* Scenario */}
              <div className="p-3.5 bg-[#0A0A0A] border-l-2 border-[#76B900] text-xs text-[#A3A3A3] font-mono leading-relaxed">
                <span className="text-white font-bold block mb-1">
                  Escenario de Aplicación:
                </span>
                {currentMission.scenario}
              </div>

              {/* Advantages List */}
              <div className="space-y-2">
                <div className="font-mono text-xs text-[#76B900] uppercase font-bold">
                  Ventajas Operativas Clave:
                </div>
                <ul className="space-y-1.5 text-xs text-[#E5E2E1]">
                  {currentMission.keyAdvantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#76B900] shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bundle Action */}
              <div className="pt-4 border-t border-[#242424] space-y-3">
                <div className="flex justify-between items-baseline font-mono">
                  <span className="text-xs text-[#A3A3A3]">Modalidad de Suministro:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#76B900]">
                    LOTE COMPLETO POR UNIDAD
                  </span>
                </div>

                <button
                  onClick={() => addMissionBundle(currentMission)}
                  className="w-full py-3.5 sm:py-4 px-4 sm:px-6 bg-[#76B900] hover:bg-[#86B335] text-[#0A0A0A] font-black text-xs sm:text-sm uppercase tracking-wider tactical-chamfer flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(118,185,0,0.35)] transition-all hover:shadow-[0_0_28px_rgba(118,185,0,0.55)]"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Cotizar Kit de Misión Completo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Recommended Products Grid Column */}
            <div className="lg:col-span-7">
              <div className="text-xs font-mono text-[#76B900] mb-3 uppercase tracking-wider flex items-center gap-2">
                <span>EQUIPAMIENTO INTEGRADO ({missionProducts.length} ÍTEMS):</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {missionProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setSelectedProductModal(p)}
                    className="p-3 bg-[#1A1A1A] border border-[#242424] hover:border-[#76B900] transition-colors flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-16 h-16 shrink-0 bg-[#0A0A0A] border border-[#242424] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-[#76B900] truncate">
                        {p.sku}
                      </div>
                      <div className="text-xs font-bold text-white group-hover:text-[#76B900] transition-colors truncate uppercase">
                        {p.name}
                      </div>
                      <div className="text-[10px] font-mono text-[#8A8A8A]">
                        Incluido en Kit de Misión
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
