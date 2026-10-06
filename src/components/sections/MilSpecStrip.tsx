import React from 'react';
import { ShieldCheck, Layers, Lock, Flame } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const MilSpecStrip: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#121212] border-b border-[#242424] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.milSpec.items.map((item, idx) => {
            const Icon = [ShieldCheck, Layers, Lock, Flame][idx];
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
