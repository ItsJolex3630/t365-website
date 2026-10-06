import React, { useState, useMemo } from 'react';
import { Search, Filter, ShoppingCart, Eye } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useQuote } from '../../context/QuoteContext';

const CATEGORIES = [
  'Todos',
  'Chalecos',
  'Cascos',
  'Linternas',
  'Bodycams',
  'Retención & Defensa',
] as const;

export const CatalogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { addItem, setSelectedProductModal } = useQuote();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        selectedCategory === 'Todos' || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="catalogo" className="py-20 border-b border-[#242424] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121212] border border-[#242424] text-[#76B900] text-xs font-mono tracking-wider">
              <span>CATÁLOGO OPERATIVO // T.365 DEFENSE SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Equipamiento & Línea Táctica Oficial
            </h2>
            <p className="text-sm text-[#A3A3A3] max-w-xl">
              Seleccione el equipamiento requerido para su unidad o empresa de seguridad. Cotice unidades individuales o lotes por volumen con entrega inmediata.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-96 relative">
            <Search className="w-4 h-4 text-[#A3A3A3] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por SKU o producto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-[#242424] focus:border-[#76B900] text-white pl-9 pr-4 py-2.5 text-xs font-mono tracking-wider placeholder-[#5A5A5A] outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="relative">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#242424]">
            <Filter className="w-4 h-4 text-[#76B900] mr-2 shrink-0 hidden sm:block" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 min-h-[44px] flex items-center text-xs font-mono tracking-wider uppercase transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#76B900] text-[#0A0A0A] font-extrabold shadow-[0_0_12px_rgba(118,185,0,0.3)]'
                    : 'bg-[#121212] text-[#A3A3A3] hover:text-white border border-[#242424] hover:border-[#76B900]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Máscara de desvanecimiento derecha en móvil */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none md:hidden" />
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#121212] border border-[#242424] p-2.5 sm:p-4 flex flex-col justify-between hud-glow-card relative group"
            >
              {/* Corner crosshair accents */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#242424] group-hover:border-[#76B900] transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#242424] group-hover:border-[#76B900] transition-colors"></div>

              <div>
                {/* SKU Badge & Category */}
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-[#242424] text-[9px] sm:text-[11px] font-mono">
                  <span className="text-[#76B900] font-bold truncate">{product.sku}</span>
                  <span className="text-[#8A8A8A] uppercase truncate ml-1">{product.category}</span>
                </div>

                {/* Product Image Container */}
                <div
                  onClick={() => setSelectedProductModal(product)}
                  className="cursor-pointer relative overflow-hidden bg-[#0A0A0A] aspect-square flex items-center justify-center my-3 border border-[#242424] group-hover:border-[#76B900]/50 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 bg-[#0A0A0A]/90 border border-[#76B900] text-[#76B900] font-mono text-[11px] flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      VER DETALLES
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3
                    onClick={() => setSelectedProductModal(product)}
                    className="font-extrabold text-xs sm:text-sm text-white group-hover:text-[#76B900] transition-colors cursor-pointer line-clamp-2 uppercase min-h-[2rem] sm:min-h-0"
                  >
                    {product.name}
                  </h3>
                  {/* Cotización Mayorista badge instead of price */}
                  <div className="text-[10px] sm:text-[11px] font-mono text-[#76B900] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#76B900] inline-block animate-pulse"></span>
                    <span>Cotización Mayorista</span>
                  </div>
                </div>

                {/* Key Spec Chips - hidden on mobile */}
                <div className="hidden sm:block mt-3 pt-3 border-t border-[#242424] space-y-1">
                  {product.specs.slice(0, 2).map((s, idx) => (
                    <div key={idx} className="text-[11px] font-mono text-[#A3A3A3] flex justify-between">
                      <span className="text-[#8A8A8A]">{s.label}:</span>
                      <span className="text-white truncate ml-2">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons - full width on mobile, dual on sm+ */}
              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-[#242424] grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                <button
                  onClick={() => setSelectedProductModal(product)}
                  className="hidden sm:flex py-2 px-2 bg-[#1A1A1A] hover:bg-[#242424] text-[#A3A3A3] hover:text-white border border-[#242424] text-[11px] font-mono items-center justify-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ficha</span>
                </button>

                <button
                  onClick={() => addItem(product, 1)}
                  className="py-2 px-2 bg-[#76B900] hover:bg-[#86B335] text-[#0A0A0A] font-extrabold text-[11px] font-mono tracking-wider uppercase tactical-chamfer-sm flex items-center justify-center gap-1.5 shadow-[0_0_10px_rgba(118,185,0,0.25)] transition-all"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Cotizar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#121212] border border-[#242424] p-8 space-y-3">
            <p className="text-sm font-mono text-[#76B900]">
              [ 0 RESULTADOS ENCONTRADOS ]
            </p>
            <p className="text-xs text-[#A3A3A3]">
              No existen productos que coincidan con los criterios de búsqueda. Intente con otra categoría o SKU.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 bg-[#76B900] text-[#0A0A0A] font-bold text-xs uppercase"
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
