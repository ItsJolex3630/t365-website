import React, { useState } from 'react';
import { ShoppingCart, MessageCircle, Menu, X } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';
import { useLanguage } from '../../context/LanguageContext';
import { generateWhatsAppQuoteUrl } from '../../utils/whatsapp';

export const Header: React.FC = () => {
  const { totalItemsCount, setIsDrawerOpen, items } = useQuote();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const directWhatsAppUrl = generateWhatsAppQuoteUrl(items, {}, language);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#242424] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="#" className="flex items-baseline gap-2 group">
            <span className="text-2xl sm:text-3xl font-black tracking-wider text-white flex items-center">
              T.365
              <span className="inline-block w-2.5 h-2.5 bg-[#76B900] ml-1.5 shadow-[0_0_10px_#76B900] animate-pulse"></span>
            </span>
            <span className="hidden sm:inline-block font-mono text-xs tracking-widest text-[#76B900] border-l border-[#242424] pl-3">
              PROSAFE SUPPLY
            </span>
          </a>
        </div>

        {/* Desktop Navigation: clean and spacious */}
        <nav className="hidden xl:flex items-center gap-8 lg:gap-10 font-semibold text-sm tracking-wide text-[#A3A3A3]">
          <a href="#catalogo" className="hover:text-[#76B900] transition-colors py-1">
            {t.nav.catalog}
          </a>
          <a href="#misiones" className="hover:text-[#76B900] transition-colors py-1">
            {t.nav.missions}
          </a>
          <a href="#especificaciones" className="hover:text-[#76B900] transition-colors py-1">
            {t.nav.standards}
          </a>
          <a href="#contacto" className="hover:text-[#76B900] transition-colors py-1">
            {t.nav.contact}
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher (Desktop) */}
          <div className="hidden xl:flex items-center border border-[#242424] bg-[#121212] p-0.5 text-xs font-mono">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 transition-all ${
                language === 'en'
                  ? 'bg-[#76B900] text-[#0A0A0A] font-extrabold shadow-[0_0_8px_rgba(118,185,0,0.4)]'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              EN
            </button>
            <span className="text-[#3A3A3A] px-0.5">|</span>
            <button
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 transition-all ${
                language === 'es'
                  ? 'bg-[#76B900] text-[#0A0A0A] font-extrabold shadow-[0_0_8px_rgba(118,185,0,0.4)]'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              ES
            </button>
          </div>

          {/* Cart / Quote Drawer Button - altura táctil mínima 44px */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="min-h-[44px] px-3.5 py-2.5 bg-[#121212] hover:bg-[#1A1A1A] border border-[#242424] hover:border-[#76B900] text-white flex items-center gap-2 text-xs font-mono tracking-wider transition-all"
            title="Ver lista de cotización"
          >
            <ShoppingCart className="w-4 h-4 text-[#76B900]" />
            <span className="hidden sm:inline">{t.nav.quoteBtn}</span>
            <span className="px-1.5 py-0.5 bg-[#76B900] text-[#0A0A0A] font-bold text-xs">
              {totalItemsCount}
            </span>
          </button>

          {/* WhatsApp Direct CTA - altura táctil mínima 44px */}
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex min-h-[44px] items-center gap-2 px-4 py-2.5 bg-[#76B900] hover:bg-[#86B335] text-[#0A0A0A] font-extrabold text-xs tracking-wider uppercase tactical-chamfer shadow-[0_0_15px_rgba(118,185,0,0.3)] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.nav.whatsappBtn}</span>
          </a>

          {/* Mobile Menu Button - visible hasta xl, área táctil 44x44px */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 text-[#A3A3A3] hover:text-white bg-[#121212] border border-[#242424]"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#242424] px-6 py-4 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#242424] text-xs font-mono text-[#A3A3A3]">
            <span className="text-[#76B900]">{t.nav.statusBadge}</span>
            <span>{t.nav.locationBadge}</span>
          </div>

          {/* Language Switcher (Mobile) */}
          <div className="flex items-center border border-[#242424] bg-[#121212] p-0.5 text-xs font-mono">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 transition-all ${
                language === 'en'
                  ? 'bg-[#76B900] text-[#0A0A0A] font-extrabold shadow-[0_0_8px_rgba(118,185,0,0.4)]'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              EN
            </button>
            <span className="text-[#3A3A3A] px-0.5">|</span>
            <button
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 transition-all ${
                language === 'es'
                  ? 'bg-[#76B900] text-[#0A0A0A] font-extrabold shadow-[0_0_8px_rgba(118,185,0,0.4)]'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              ES
            </button>
          </div>

          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-white hover:text-[#76B900]"
          >
            {t.nav.catalog}
          </a>
          <a
            href="#misiones"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-white hover:text-[#76B900]"
          >
            {t.nav.missions}
          </a>
          <a
            href="#especificaciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-white hover:text-[#76B900]"
          >
            {t.nav.standards}
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-white hover:text-[#76B900]"
          >
            {t.nav.contact}
          </a>

          <div className="pt-2">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#76B900] text-[#0A0A0A] font-bold text-xs tracking-wider uppercase tactical-chamfer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.nav.whatsappBtn}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
