import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';
import { useLanguage } from '../../context/LanguageContext';
import { generateWhatsAppQuoteUrl } from '../../utils/whatsapp';
import type { QuoteDetails } from '../../utils/whatsapp';

export const QuoteDrawer: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    isDrawerOpen,
    setIsDrawerOpen,
    totalItemsCount,
  } = useQuote();
  const { language, t } = useLanguage();

  const [details, setDetails] = useState<QuoteDetails>({
    companyName: '',
    contactName: '',
    city: '',
  });

  if (!isDrawerOpen) return null;

  const whatsappUrl = generateWhatsAppQuoteUrl(items, details, language);

  const getProductName = (product: { name: { en: string; es: string } }) => product.name[language];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in">
      {/* Backdrop */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-full sm:w-[420px] max-w-md bg-[#0E0E0E] border-l border-[#242424] text-white flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.9)]">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#121212] border-b border-[#242424] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-[#76B900] font-bold">
                {t.drawer.title}
              </span>
              <span className="px-2 py-0.5 bg-[#76B900] text-[#0A0A0A] font-bold text-xs">
                {totalItemsCount}
              </span>
            </div>

            <button
              onClick={() => setIsDrawerOpen(false)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#A3A3A3] hover:text-white hover:bg-[#242424] transition-colors"
              aria-label={language === 'en' ? 'Close quote drawer' : 'Cerrar cotizador'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body / Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-12 h-12 bg-[#121212] border border-[#242424] mx-auto flex items-center justify-center text-[#76B900]">
                  0
                </div>
                <p className="font-mono text-sm text-white">
                  {t.drawer.emptyTitle}
                </p>
                <p className="text-xs text-[#A3A3A3]">
                  {t.drawer.emptyDesc}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3 bg-[#141414] border border-[#242424] flex items-center justify-between gap-3"
                  >
                    {/* Thumbnail */}
                    <div className="w-14 h-14 bg-[#0A0A0A] border border-[#242424] shrink-0 overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={getProductName(item.product)}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-mono text-[#76B900] truncate">
                        {item.product.sku}
                      </div>
                      <div className="text-xs font-bold text-white uppercase line-clamp-2">
                        {getProductName(item.product)}
                      </div>
                      <div className="text-[11px] font-mono text-[#76B900]">
                        {t.drawer.itemUnit} / {t.drawer.itemsUnits}: {item.quantity}
                      </div>
                    </div>

                    {/* Quantity Controls - áreas táctiles 38px+ */}
                    <div className="flex items-center border border-[#242424] bg-[#0A0A0A]">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="min-w-[38px] min-h-[38px] flex items-center justify-center text-[#A3A3A3] hover:text-[#76B900]"
                        aria-label={language === 'en' ? 'Decrease' : 'Disminuir'}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-7 text-center text-xs font-mono font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="min-w-[38px] min-h-[38px] flex items-center justify-center text-[#A3A3A3] hover:text-[#76B900]"
                        aria-label={language === 'en' ? 'Increase' : 'Aumentar'}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Remove - área táctil 38px+ */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="min-w-[38px] min-h-[38px] flex items-center justify-center text-[#8A8A8A] hover:text-[#FF3B30] transition-colors"
                      aria-label={language === 'en' ? 'Remove item' : 'Eliminar ítem'}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                <button
                  onClick={clearCart}
                  className="text-xs font-mono text-[#5A5A5A] hover:text-[#FF3B30] transition-colors flex items-center gap-1 pt-2"
                >
                  <Trash2 className="w-3 h-3" />
                  {t.drawer.clearCart}
                </button>
              </div>
            )}

            {/* Client Info Form (Optional B2B Fields) */}
            {items.length > 0 && (
              <div className="mt-6 pt-5 border-t border-[#242424] space-y-3">
                <div className="text-xs font-mono text-[#76B900] uppercase font-bold">
                  {t.drawer.contactDataLabel}
                </div>

                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder={t.drawer.companyPlaceholder}
                    value={details.companyName}
                    onChange={(e) =>
                      setDetails({ ...details, companyName: e.target.value })
                    }
                    className="w-full bg-[#141414] border border-[#242424] focus:border-[#76B900] text-base sm:text-xs font-mono p-3 min-h-[44px] text-white placeholder-[#8A8A8A] outline-none"
                  />

                  <input
                    type="text"
                    placeholder={t.drawer.contactNamePlaceholder}
                    value={details.contactName}
                    onChange={(e) =>
                      setDetails({ ...details, contactName: e.target.value })
                    }
                    className="w-full bg-[#141414] border border-[#242424] focus:border-[#76B900] text-base sm:text-xs font-mono p-3 min-h-[44px] text-white placeholder-[#8A8A8A] outline-none"
                  />

                  <input
                    type="text"
                    placeholder={t.drawer.destinationPlaceholder}
                    value={details.city}
                    onChange={(e) =>
                      setDetails({ ...details, city: e.target.value })
                    }
                    className="w-full bg-[#141414] border border-[#242424] focus:border-[#76B900] text-base sm:text-xs font-mono p-3 min-h-[44px] text-white placeholder-[#8A8A8A] outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && (
            <div className="p-5 bg-[#121212] border-t border-[#242424] space-y-3">
              <div className="flex justify-between items-baseline font-mono">
                <span className="text-xs text-[#A3A3A3]">{t.drawer.totalItemsLabel}</span>
                <span className="text-base font-bold text-[#76B900]">
                  {totalItemsCount} {totalItemsCount === 1 ? t.drawer.itemUnit : t.drawer.itemsUnits}
                </span>
              </div>
              <p className="text-[11px] text-[#8A8A8A] font-mono">
                {t.drawer.footerNote}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#76B900] hover:bg-[#86B335] text-[#0A0A0A] font-black text-xs uppercase tracking-widest tactical-chamfer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(118,185,0,0.35)] transition-all hover:shadow-[0_0_28px_rgba(118,185,0,0.55)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.drawer.sendWhatsappBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
