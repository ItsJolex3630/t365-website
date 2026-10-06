import React, { useState } from 'react';
import { ShoppingCart, MessageCircle, Menu, X, Activity } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';
import { generateWhatsAppQuoteUrl } from '../../utils/whatsapp';

export const Header: React.FC = () => {
  const { totalItemsCount, setIsDrawerOpen, items } = useQuote();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const directWhatsAppUrl = generateWhatsAppQuoteUrl(items);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#242424] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-baseline gap-2 group">
            <span className="text-2xl sm:text-3xl font-black tracking-wider text-white flex items-center">
              T.365
              <span className="inline-block w-2.5 h-2.5 bg-[#76B900] ml-1.5 shadow-[0_0_10px_#76B900] animate-pulse"></span>
            </span>
            <span className="hidden md:inline-block font-mono text-xs tracking-widest text-[#76B900] border-l border-[#242424] pl-3">
              PROSAFE SUPPLY
            </span>
          </a>

          {/* Operational Status Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[#121212] border border-[#242424] text-[11px] font-mono tracking-wider text-[#A3A3A3]">
            <Activity className="w-3.5 h-3.5 text-[#76B900] animate-pulse" />
            <span>SYS: OPERACIONAL</span>
            <span className="text-[#5A5A5A]">|</span>
            <span className="text-[#76B900]">STOCK 100%</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#A3A3A3]">
          <a
            href="#catalogo"
            className="hover:text-[#76B900] transition-colors flex items-center gap-1 group"
          >
            <span className="font-mono text-xs text-[#5A5A5A] group-hover:text-[#76B900]">01.</span>
            Catálogo Táctico
          </a>
          <a
            href="#misiones"
            className="hover:text-[#76B900] transition-colors flex items-center gap-1 group"
          >
            <span className="font-mono text-xs text-[#5A5A5A] group-hover:text-[#76B900]">02.</span>
            Configurador Misiones
          </a>
          <a
            href="#especificaciones"
            className="hover:text-[#76B900] transition-colors flex items-center gap-1 group"
          >
            <span className="font-mono text-xs text-[#5A5A5A] group-hover:text-[#76B900]">03.</span>
            Estándares Balísticos
          </a>
          <a
            href="#contacto"
            className="hover:text-[#76B900] transition-colors flex items-center gap-1 group"
          >
            <span className="font-mono text-xs text-[#5A5A5A] group-hover:text-[#76B900]">04.</span>
            Contacto B2B
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Cart / Quote Drawer Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="relative px-3.5 py-2.5 bg-[#121212] hover:bg-[#1A1A1A] border border-[#242424] hover:border-[#76B900] text-white flex items-center gap-2 text-xs font-mono tracking-wider transition-all"
            title="Ver lista de cotización"
          >
            <ShoppingCart className="w-4 h-4 text-[#76B900]" />
            <span className="hidden sm:inline">COTIZACIÓN</span>
            <span className="px-1.5 py-0.5 bg-[#76B900] text-[#0A0A0A] font-bold text-xs">
              {totalItemsCount}
            </span>
          </button>

          {/* WhatsApp Direct CTA */}
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#76B900] hover:bg-[#86B335] text-[#0A0A0A] font-extrabold text-xs tracking-wider uppercase tactical-chamfer shadow-[0_0_15px_rgba(118,185,0,0.3)] transition-all hover:shadow-[0_0_22px_rgba(118,185,0,0.5)]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Cotizar WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A3A3A3] hover:text-white bg-[#121212] border border-[#242424]"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#242424] px-6 py-4 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#242424] text-xs font-mono text-[#A3A3A3]">
            <span className="text-[#76B900]">ESTADO: EN LÍNEA</span>
            <span>CHILE & LATAM</span>
          </div>
          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-white hover:text-[#76B900]"
          >
            01. Catálogo Táctico
          </a>
          <a
            href="#misiones"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-white hover:text-[#76B900]"
          >
            02. Configurador de Misiones
          </a>
          <a
            href="#especificaciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-white hover:text-[#76B900]"
          >
            03. Estándares Balísticos
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-white hover:text-[#76B900]"
          >
            04. Contacto B2B
          </a>

          <div className="pt-2">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#76B900] text-[#0A0A0A] font-bold text-xs tracking-wider uppercase tactical-chamfer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cotizar Directo por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
