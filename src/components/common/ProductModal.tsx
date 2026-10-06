import React from 'react';
import { X, ShoppingCart, MessageCircle, Check } from 'lucide-react';
import type { Product } from '../../data/products';
import { useQuote } from '../../context/QuoteContext';
import { generateWhatsAppQuoteUrl } from '../../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addItem } = useQuote();

  if (!product) return null;

  const singleItemQuoteUrl = generateWhatsAppQuoteUrl([{ product, quantity: 1 }]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-[#121212] border border-[#242424] shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto">
        {/* Header Bar - sticky para mantener botón de cierre visible */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-[#141414] border-b border-[#242424]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#76B900] tracking-wider">
              {product.sku}
            </span>
            <span className="text-[#5A5A5A]">|</span>
            <span className="text-xs font-mono text-[#A3A3A3] uppercase">
              {product.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#A3A3A3] hover:text-white hover:bg-[#242424] transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image - altura ajustada en móvil para mantener botones visibles */}
          <div className="bg-[#0A0A0A] border border-[#242424] p-3 h-52 sm:h-64 md:h-full max-h-80 flex items-center justify-center relative overflow-hidden group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-[#121212]/90 border border-[#242424] text-[10px] font-mono text-[#76B900]">
              T.365 OFFICIAL GEAR
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-black text-white uppercase leading-snug">
                {product.name}
              </h2>
              {/* Institutional badge instead of price */}
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] border border-[#76B900]/40 text-[#76B900] text-xs font-mono">
                <span className="w-1.5 h-1.5 bg-[#76B900] inline-block animate-pulse"></span>
                <span>SOLICITUD DE COTIZACIÓN INSTITUCIONAL DISPONIBLE</span>
              </div>
            </div>

            <p className="text-sm text-[#A3A3A3] leading-relaxed">
              {product.description}
            </p>

            {/* Spec Matrix */}
            <div className="space-y-1.5 border-t border-[#242424] pt-3">
              <div className="font-mono text-[11px] text-[#76B900] tracking-wider uppercase mb-2">
                Ficha Técnica / Telemetría:
              </div>
              {product.specs.map((s, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center text-xs py-1 px-2 bg-[#1A1A1A] border-b border-[#242424]"
                >
                  <span className="text-[#A3A3A3] font-mono">{s.label}:</span>
                  <span className="text-white font-medium">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Standards & Certifications */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-1.5">
                {product.standards.map((std, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#0A0A0A] border border-[#76B900]/40 text-[#76B900] text-[10px] font-mono"
                  >
                    <Check className="w-3 h-3" />
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  addItem(product, 1);
                  onClose();
                }}
                className="flex-1 py-3 px-4 bg-[#76B900] hover:bg-[#86B335] text-[#0A0A0A] font-extrabold text-xs tracking-wider uppercase tactical-chamfer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(118,185,0,0.3)]"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Agregar a Cotización</span>
              </button>

              <a
                href={singleItemQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-[#1A1A1A] hover:bg-[#242424] border border-[#242424] hover:border-[#76B900] text-white font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#76B900]" />
                <span>Cotizar WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
