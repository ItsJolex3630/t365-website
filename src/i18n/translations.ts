export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    catalog: string;
    missions: string;
    standards: string;
    contact: string;
    quoteBtn: string;
    whatsappBtn: string;
    statusBadge: string;
    locationBadge: string;
  };
  hero: {
    protocolBadge: string;
    titleLine1: string;
    titleLine2: string;
    tagline: string;
    description: string;
    exploreBtn: string;
    consultBtn: string;
    availabilityLabel: string;
    availabilityValue: string;
    armorLabel: string;
    armorValue: string;
    dispatchLabel: string;
    dispatchValue: string;
  };
  milSpec: {
    stripTitle: string;
    items: {
      code: string;
      title: string;
      subtitle: string;
      desc: string;
    }[];
  };
  catalog: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    categories: Record<string, string>;
    wholesaleBadge: string;
    specsBtn: string;
    quoteBtn: string;
    noResultsTitle: string;
    noResultsDesc: string;
    resetFiltersBtn: string;
    viewDetails: string;
  };
  missions: {
    badge: string;
    title: string;
    subtitle: string;
    summaryLabel: string;
    scenarioLabel: string;
    advantagesLabel: string;
    supplyModeLabel: string;
    supplyModeValue: string;
    requestKitBtn: string;
    includedGearLabel: string;
    includedTag: string;
  };
  standards: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      tag: string;
      title: string;
      desc: string;
    }[];
  };
  drawer: {
    title: string;
    emptyTitle: string;
    emptyDesc: string;
    clearCart: string;
    contactDataLabel: string;
    companyPlaceholder: string;
    contactNamePlaceholder: string;
    destinationPlaceholder: string;
    totalItemsLabel: string;
    footerNote: string;
    sendWhatsappBtn: string;
    itemUnit: string;
    itemsUnits: string;
  };
  modal: {
    officialBadge: string;
    statusBadge: string;
    specsTitle: string;
    addQuoteBtn: string;
    whatsappBtn: string;
  };
  footer: {
    hotlineBadge: string;
    hotlineTitle: string;
    hotlineDesc: string;
    hotlineBtn: string;
    companyDesc: string;
    coverageText: string;
    linesTitle: string;
    standardsTitle: string;
    procurementTitle: string;
    procurementDesc: string;
    rightsReserved: string;
    terms: string;
    privacy: string;
    secureDispatch: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      catalog: 'Catalog',
      missions: 'Missions',
      standards: 'Standards',
      contact: 'Contact',
      quoteBtn: 'QUOTE',
      whatsappBtn: 'QUOTE WHATSAPP',
      statusBadge: 'ONLINE',
      locationBadge: 'UNITED STATES',
    },
    hero: {
      protocolBadge: '[ MIL-SPEC DEFENSE PROTOCOL // GLOBAL DISPATCH ]',
      titleLine1: 'Tactical Defense Gear',
      titleLine2: 'Professional Supplies',
      tagline: "Built for what's next. Tactical. 365 days a year.",
      description: 'Military-grade ballistic protection, modular laser-cut plate carriers, FAST Kevlar helmets, tactical assault flashlights, and certified high-security retention equipment for defense operators, law enforcement, and private security teams.',
      exploreBtn: 'Explore Catalog',
      consultBtn: 'Consult Specialist',
      availabilityLabel: 'Availability',
      availabilityValue: '100% In-Stock Immediate',
      armorLabel: 'Protection',
      armorValue: 'NIJ 0101.06 Compliant',
      dispatchLabel: 'Dispatch',
      dispatchValue: '24/48H United States & Global',
    },
    milSpec: {
      stripTitle: 'MIL-SPEC STANDARDS',
      items: [
        {
          code: 'PROTOCOL // 01',
          title: 'MIL-SPEC TESTED',
          subtitle: 'NIJ III-A & IV Ballistic Protocol',
          desc: 'Lab-certified testing against fragmentation, high-velocity handgun threats, and kinetic backface deformation limits.',
        },
        {
          code: 'MATERIAL // 02',
          title: '1000D BALLISTIC NYLON',
          subtitle: 'Official Water-Repellent Cordura',
          desc: 'Ultra-dense structural weave reinforced with DWR hydrophobic finish and precision laser-cut MOLLE modular slots.',
        },
        {
          code: 'SECURITY // 03',
          title: 'DOUBLE-LOCK MECHANISM',
          subtitle: 'Reinforced Locking Security',
          desc: 'Independent double-lock mechanisms in steel handcuffs and mil-spec quick-release tactical hardware buckles.',
        },
        {
          code: 'LOGISTICS // 04',
          title: 'IMMEDIATE DISPATCH',
          subtitle: 'Government & Corporate Express',
          desc: 'Direct priority dispatch channel for security contractors, wholesale purchases, and institutional procurement.',
        },
      ],
    },
    catalog: {
      badge: 'OPERATIONAL CATALOG // T.365 DEFENSE SYSTEMS',
      title: 'Official Tactical Equipment & Defense Gear',
      subtitle: 'Select specialized gear for your department, agency, or private security firm. Bulk wholesale lots and single units available with fast shipping.',
      searchPlaceholder: 'Search by SKU or product name...',
      categories: {
        'Todos': 'All Products',
        'Chalecos': 'Plate Carriers & Vests',
        'Cascos': 'FAST Helmets',
        'Linternas': 'Tactical Lights',
        'Bodycams': 'Body Cameras',
        'Retención & Defensa': 'Restraints & Defense',
      },
      wholesaleBadge: 'Institutional Quote Available',
      specsBtn: 'Specs',
      quoteBtn: 'Quote',
      noResultsTitle: '[ 0 RESULTS FOUND ]',
      noResultsDesc: 'No tactical equipment matched your current search filters. Try adjusting your query or category.',
      resetFiltersBtn: 'Reset Filters',
      viewDetails: 'VIEW SPECS',
    },
    missions: {
      badge: 'DEPLOYMENT CONFIGURATOR // MISSION FINDER',
      title: 'Tactical Gear Bundles by Operational Role',
      subtitle: 'Pre-configured mission packages engineered to meet the exact tactical and regulatory standards of each operational deployment.',
      summaryLabel: 'OPERATIONAL SUMMARY',
      scenarioLabel: 'Deployment Scenario:',
      advantagesLabel: 'Key Tactical Advantages:',
      supplyModeLabel: 'Procurement Mode:',
      supplyModeValue: 'CUSTOM BULK LOT PER UNIT',
      requestKitBtn: 'Request Complete Mission Bundle',
      includedGearLabel: 'INTEGRATED MISSION GEAR',
      includedTag: 'Included in Kit',
    },
    standards: {
      badge: 'MANUFACTURING STANDARDS & BALLISTIC TESTING',
      title: 'Certified Ballistic Compliance & Lab Ratings',
      subtitle: 'Every defense product supplied by T.365 undergoes rigorous material stress testing and standardized ballistic verification.',
      cards: [
        {
          tag: 'INTERNATIONAL STANDARD',
          title: 'NIJ Standard 0101.06',
          desc: 'Certified compliance for soft armor level IIIA (9mm FMJ RN and .44 Magnum SJHP), plus ceramic and UHMWPE hard armor plates (Level III and IV).',
        },
        {
          tag: 'OPTICS & ENCRYPTION',
          title: 'AES-256 Military Encryption',
          desc: 'Law enforcement bodycams feature tamper-proof judicial evidence protection with RSA encrypted digital watermarks and secured storage.',
        },
        {
          tag: 'QUALITY ASSURANCE',
          title: 'STANAG 2920 Fragment Testing',
          desc: 'V50 ballistic limit velocity testing against high-speed shrapnel and blast fragments in FAST helmets and tactical visors.',
        },
      ],
    },
    drawer: {
      title: 'QUOTE STATION',
      emptyTitle: 'Quote list is currently empty',
      emptyDesc: 'Select products from the catalog or add a complete mission bundle to request pricing.',
      clearCart: 'Clear entire quote',
      contactDataLabel: 'Contact Information (Optional):',
      companyPlaceholder: 'Company / Organization / Agency',
      contactNamePlaceholder: 'Contact Person Name',
      destinationPlaceholder: 'Destination City, State or Country',
      totalItemsLabel: 'Selected Items to Quote:',
      footerNote: '* Formal institutional quote delivered directly through our official WhatsApp desk.',
      sendWhatsappBtn: 'Send Quote via WhatsApp',
      itemUnit: 'unit',
      itemsUnits: 'units',
    },
    modal: {
      officialBadge: 'T.365 OFFICIAL GEAR',
      statusBadge: 'INSTITUTIONAL QUOTE REQUEST AVAILABLE',
      specsTitle: 'Technical Specifications & Telemetry:',
      addQuoteBtn: 'Add to Quote',
      whatsappBtn: 'Quote via WhatsApp',
    },
    footer: {
      hotlineBadge: 'DIRECT PROCUREMENT HOTLINE // WHOLESALE & GOVERNMENT',
      hotlineTitle: 'Need Specialized Technical Advice for Your Unit?',
      hotlineDesc: 'Our tactical equipment specialists build custom ballistic and retention packages tailored to your security requirements.',
      hotlineBtn: 'Talk to a Specialist (+58 414-9428999)',
      companyDesc: 'Military-grade ballistic armor, tactical optics, and certified defense supplies. Professional procurement 365 days a year.',
      coverageText: 'UNITED STATES & GLOBAL DISPATCH',
      linesTitle: 'Product Categories',
      standardsTitle: 'Standards & Compliance',
      procurementTitle: 'Institutional Sales',
      procurementDesc: 'We fulfill procurement orders for law enforcement departments, security contractors, and corporate defense accounts.',
      rightsReserved: '© 2025 T.365 PROSAFE SUPPLY. MIL-SPEC CERTIFIED DEFENSE SYSTEMS. ALL RIGHTS RESERVED.',
      terms: 'TERMS OF SERVICE',
      privacy: 'PRIVACY POLICY',
      secureDispatch: 'SECURE DISPATCH',
    },
  },
  es: {
    nav: {
      catalog: 'Catálogo',
      missions: 'Misiones',
      standards: 'Estándares',
      contact: 'Contacto',
      quoteBtn: 'COTIZACIÓN',
      whatsappBtn: 'COTIZAR WHATSAPP',
      statusBadge: 'EN LÍNEA',
      locationBadge: 'ESTADOS UNIDOS',
    },
    hero: {
      protocolBadge: '[ PROTOCOLO MIL-SPEC // DESPACHO GLOBAL ]',
      titleLine1: 'Equipamiento Táctico',
      titleLine2: 'Profesional & Defensa',
      tagline: "Built for what's next. Tactical. 365 days a year.",
      description: 'Suministros balísticos de estándar militar, chalecos porta-placas modulares, cascos FAST Kevlar, linternas de asalto y dispositivos de retención de alta resistencia para fuerzas de seguridad, custodia armada y operadores tácticos en terreno.',
      exploreBtn: 'Explorar Catálogo',
      consultBtn: 'Consultar Especialista',
      availabilityLabel: 'Disponibilidad',
      availabilityValue: '100% Stock Inmediato',
      armorLabel: 'Blindaje',
      armorValue: 'NIJ 0101.06 Compliant',
      dispatchLabel: 'Despacho',
      dispatchValue: '24/48H Estados Unidos & Global',
    },
    milSpec: {
      stripTitle: 'ESTÁNDARES MIL-SPEC',
      items: [
        {
          code: 'PROTOCOLO // 01',
          title: 'MIL-SPEC TESTED',
          subtitle: 'Protocolo Balístico NIJ III-A & IV',
          desc: 'Ensayos balísticos contra fragmentación, impactos de proyectiles de arma corta y absorción de energía cinética residual.',
        },
        {
          code: 'MATERIAL // 02',
          title: '1000D BALLISTIC NYLON',
          subtitle: 'Cordura Oficial Hidrorrepelente',
          desc: 'Tejido estructural de densidad extrema con tratamiento hidrófugo DWR y cortes láser precisos para fijación MOLLE.',
        },
        {
          code: 'SEGURIDAD // 03',
          title: 'DOUBLE-LOCK MECHANISM',
          subtitle: 'Retención y Fijación Reforzada',
          desc: 'Sistemas de doble seguro independientes en grilletes y hebillas de desenganche táctico para máxima retención.',
        },
        {
          code: 'LOGÍSTICA // 04',
          title: 'DESPACHO INMEDIATO',
          subtitle: 'Cobertura Institucional Express',
          desc: 'Canal prioritario para empresas de seguridad, licitaciones y órdenes operativas con entrega en 24 a 48 horas.',
        },
      ],
    },
    catalog: {
      badge: 'CATÁLOGO OPERATIVO // T.365 DEFENSE SYSTEMS',
      title: 'Equipamiento & Línea Táctica Oficial',
      subtitle: 'Seleccione el equipamiento requerido para su unidad o empresa de seguridad. Cotice unidades individuales o lotes por volumen con entrega inmediata.',
      searchPlaceholder: 'Buscar por SKU o producto...',
      categories: {
        'Todos': 'Todos los Productos',
        'Chalecos': 'Chalecos Balísticos',
        'Cascos': 'Cascos FAST',
        'Linternas': 'Linternas Tácticas',
        'Bodycams': 'Cámaras Corporales',
        'Retención & Defensa': 'Retención & Defensa',
      },
      wholesaleBadge: 'Cotización Mayorista Disponible',
      specsBtn: 'Ficha',
      quoteBtn: 'Cotizar',
      noResultsTitle: '[ 0 RESULTADOS ENCONTRADOS ]',
      noResultsDesc: 'No existen productos que coincidan con los criterios de búsqueda. Intente con otra categoría o SKU.',
      resetFiltersBtn: 'Restablecer Filtros',
      viewDetails: 'VER DETALLES',
    },
    missions: {
      badge: 'CONFIGURADOR DE DESPLIEGUE // MISSION FINDER',
      title: 'Kits Tácticos por Perfil Operativo',
      subtitle: 'Diseñados para responder a los requerimientos normativos y de seguridad operacional más exigentes de cada sector.',
      summaryLabel: 'RESUMEN OPERACIONAL',
      scenarioLabel: 'Escenario de Aplicación:',
      advantagesLabel: 'Ventajas Operativas Clave:',
      supplyModeLabel: 'Modalidad de Suministro:',
      supplyModeValue: 'LOTE COMPLETO POR UNIDAD',
      requestKitBtn: 'Cotizar Kit de Misión Completo',
      includedGearLabel: 'EQUIPAMIENTO INTEGRADO',
      includedTag: 'Incluido en Kit',
    },
    standards: {
      badge: 'ESTÁNDARES DE FABRICACIÓN & ENSAYOS DE RESISTENCIA',
      title: 'Homologación y Certificación de Blindaje',
      subtitle: 'Cada pieza de equipo provista por T.365 pasa por rigurosos controles de fatiga de materiales y pruebas balísticas normalizadas.',
      cards: [
        {
          tag: 'NORMA INTERNACIONAL',
          title: 'NIJ Standard 0101.06',
          desc: 'Cumplimiento verificado para paneles balísticos blandos nivel IIIA (amenazas de 9mm FMJ RN y .44 Magnum SJHP), además de placas cerámicas y polietileno nivel III y IV.',
        },
        {
          tag: 'ÓPTICA & TELEMETRÍA',
          title: 'Cifrado Militar AES-256',
          desc: 'Las cámaras corporales y dispositivos de grabación integran protección de datos a prueba de manipulación judicial con sellado de tiempo inviolable.',
        },
        {
          tag: 'CONTROL DE CALIDAD',
          title: 'Ensayos STANAG 2920',
          desc: 'Medición de velocidad de límite balístico V50 frente a esquirlas y fragmentos de alta velocidad en cascos tácticos FAST y visores de policarbonato reforzado.',
        },
      ],
    },
    drawer: {
      title: 'ESTACIÓN DE COTIZACIÓN',
      emptyTitle: 'No hay ítems en la cotización',
      emptyDesc: 'Seleccione productos del catálogo o agregue un kit de misión completo para comenzar.',
      clearCart: 'Vaciar toda la cotización',
      contactDataLabel: 'Datos de Contacto (Opcional):',
      companyPlaceholder: 'Empresa / Institución',
      contactNamePlaceholder: 'Nombre del Solicitante',
      destinationPlaceholder: 'Ciudad o Región de Despacho',
      totalItemsLabel: 'Total de Ítems a Cotizar:',
      footerNote: '* Cotización formal emitida directamente a través del canal oficial de WhatsApp.',
      sendWhatsappBtn: 'Enviar Cotización por WhatsApp',
      itemUnit: 'unidad',
      itemsUnits: 'unidades',
    },
    modal: {
      officialBadge: 'T.365 OFFICIAL GEAR',
      statusBadge: 'SOLICITUD DE COTIZACIÓN INSTITUCIONAL DISPONIBLE',
      specsTitle: 'Ficha Técnica / Telemetría:',
      addQuoteBtn: 'Agregar a Cotización',
      whatsappBtn: 'Cotizar WhatsApp',
    },
    footer: {
      hotlineBadge: 'CANAL DE ATENCIÓN DIRECTA // INSTITUCIONAL & MAYORISTA',
      hotlineTitle: '¿Requiere Asesoría Técnica para su Unidad?',
      hotlineDesc: 'Nuestros especialistas en equipamiento balístico y defensa configuran paquetes a la medida de los requerimientos de su institución.',
      hotlineBtn: 'Hablar con un Asesor (+58 414-9428999)',
      companyDesc: 'Equipamiento balístico, óptico y defensivo de estándar militar. Abastecimiento profesional 365 días al año.',
      coverageText: 'ESTADOS UNIDOS & COBERTURA GLOBAL',
      linesTitle: 'Líneas de Equipamiento',
      standardsTitle: 'Estándares & Normativas',
      procurementTitle: 'Compras Institucionales',
      procurementDesc: 'Atendemos órdenes de compra del sector público, corporativo y licitaciones de seguridad privada.',
      rightsReserved: '© 2025 T.365 PROSAFE SUPPLY. MIL-SPEC CERTIFIED DEFENSE SYSTEMS. ALL RIGHTS RESERVED.',
      terms: 'TÉRMINOS DE SERVICIO',
      privacy: 'POLÍTICA DE PRIVACIDAD',
      secureDispatch: 'DESPACHO SEGURO',
    },
  },
};