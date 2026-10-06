import React from 'react';
import { ShieldCheck, Layers, Lock, Flame } from 'lucide-react';

export const MilSpecStrip: React.FC = () => {
  const specs = [
    {
      code: 'PROTOCOL // 01',
      title: 'MIL-SPEC TESTED',
      subtitle: 'Protocolo Balístico NIJ III-A & IV',
      desc: 'Ensayos balísticos contra fragmentación, impactos de proyectiles de arma corta y absorción de energía cinética residual.',
      icon: ShieldCheck,
    },
    {
      code: 'MATERIAL // 02',
      title: '1000D BALLISTIC NYLON',
      subtitle: 'Cordura Oficial Hidrorrepelente',
      desc: 'Tejido estructural de densidad extrema con tratamiento hidrófugo DWR y cortes láser precisos para fijación MOLLE.',
      icon: Layers,
    },
    {
      code: 'SECURITY // 03',
      title: 'DOUBLE-LOCK MECHANISM',
      subtitle: 'Retención y Fijación Reforzada',
      desc: 'Sistemas de doble seguro independientes en grilletes y hebillas de desenganche táctico para máxima retención.',
      icon: Lock,
    },
    {
      code: 'LOGISTICS // 04',
      title: 'DESPACHO INMEDIATO',
      subtitle: 'Cobertura Institucional Express',
      desc: 'Canal prioritario para empresas de seguridad, licitaciones y órdenes operativas con entrega en 24 a 48 horas.',
      icon: Flame,
    },
  ];

  return (
    <section className="bg-[#121212] border-b border-[#242424] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 bg-[#1A1A1A] border border-[#242424] hover:border-[#76B900] transition-colors relative group"
              >
                {/* Corner Dot */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#242424] group-hover:bg-[#76B900] transition-colors"></div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#121212] border border-[#242424] text-[#76B900] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono text-[10px] text-[#76B900] tracking-wider uppercase">
                      {item.code}
                    </div>
                    <h3 className="font-extrabold text-sm text-white tracking-wide uppercase">
                      {item.title}
                    </h3>
                    <div className="font-mono text-xs text-[#A3A3A3]">
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-xs text-[#7A7A7A] group-hover:text-[#A3A3A3] transition-colors leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
