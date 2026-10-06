import React from 'react';
import { QuoteProvider, useQuote } from './context/QuoteContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { MilSpecStrip } from './components/sections/MilSpecStrip';
import { CatalogSection } from './components/sections/CatalogSection';
import { MissionFinder } from './components/sections/MissionFinder';
import { QuoteDrawer } from './components/sections/QuoteDrawer';
import { ProductModal } from './components/common/ProductModal';
import { Shield, Award, Cpu, FileCheck } from 'lucide-react';

const StandardsSection: React.FC = () => {
  return (
    <section id="especificaciones" className="py-20 bg-[#0A0A0A] border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121212] border border-[#76B900]/40 text-[#76B900] text-xs font-mono tracking-wider">
            <Shield className="w-3.5 h-3.5 text-[#76B900]" />
            <span>ESTÁNDARES DE FABRICACIÓN & ENSAYOS DE RESISTENCIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Homologación y Certificación de Blindaje
          </h2>
          <p className="text-sm text-[#A3A3A3]">
            Cada pieza de equipo provista por T.365 pasa por rigurosos controles de fatiga de materiales y pruebas balísticas normalizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#121212] border border-[#242424] hover:border-[#76B900] transition-colors relative group">
            <div className="p-3 bg-[#1A1A1A] w-fit border border-[#242424] text-[#76B900] mb-4">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-[#76B900]">NORMA INTERNACIONAL</div>
            <h3 className="text-lg font-bold text-white mt-1 uppercase">NIJ Standard 0101.06</h3>
            <p className="text-xs text-[#A3A3A3] mt-2 leading-relaxed">
              Cumplimiento verificado para paneles balísticos blandos nivel IIIA (amenazas de 9mm FMJ RN y .44 Magnum SJHP), además de placas cerámicas y polietileno nivel III y IV.
            </p>
          </div>

          <div className="p-6 bg-[#121212] border border-[#242424] hover:border-[#76B900] transition-colors relative group">
            <div className="p-3 bg-[#1A1A1A] w-fit border border-[#242424] text-[#76B900] mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-[#76B900]">OPTICA & TELEMETRÍA</div>
            <h3 className="text-lg font-bold text-white mt-1 uppercase">Cifrado Militar AES-256</h3>
            <p className="text-xs text-[#A3A3A3] mt-2 leading-relaxed">
              Las cámaras corporales y dispositivos de grabación integran protección de datos a prueba de manipulación judicial con sellado de tiempo inviolable y clave privada RSA.
            </p>
          </div>

          <div className="p-6 bg-[#121212] border border-[#242424] hover:border-[#76B900] transition-colors relative group">
            <div className="p-3 bg-[#1A1A1A] w-fit border border-[#242424] text-[#76B900] mb-4">
              <FileCheck className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-[#76B900]">CONTROL DE CALIDAD</div>
            <h3 className="text-lg font-bold text-white mt-1 uppercase">Ensayos STANAG 2920</h3>
            <p className="text-xs text-[#A3A3A3] mt-2 leading-relaxed">
              Medición de velocidad de límite balístico V50 frente a esquirlas y fragmentos de alta velocidad en cascos tácticos FAST y visores de policarbonato reforzado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const MainContent: React.FC = () => {
  const { selectedProductModal, setSelectedProductModal } = useQuote();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E2E1] flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MilSpecStrip />
        <CatalogSection />
        <MissionFinder />
        <StandardsSection />
      </main>
      <Footer />

      <QuoteDrawer />
      <ProductModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
      />
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <QuoteProvider>
        <MainContent />
      </QuoteProvider>
    </LanguageProvider>
  );
}

export default App;
