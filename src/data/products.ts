export interface Product {
  id: string;
  sku: string;
  name: { en: string; es: string };
  category: 'Chalecos' | 'Cascos' | 'Linternas' | 'Bodycams' | 'Retención & Defensa';
  description: { en: string; es: string };
  priceClp: number;
  featured?: boolean;
  image: string;
  specs: {
    label: { en: string; es: string };
    value: { en: string; es: string };
  }[];
  standards: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'v-365-plate-carrier',
    sku: 'SYS-REF // V-365',
    name: { en: 'Modular V-365 Plate Carrier', es: 'Chaleco Porta-Placas Modular V-365' },
    category: 'Chalecos',
    description: {
      en: 'Rapid-extraction modular ballistic vest made from high-density Cordura 1000D with laser-cut MOLLE system.',
      es: 'Chaleco balístico modular de extracción rápida, confeccionado en Cordura 1000D de alta densidad con sistema MOLLE cortado por láser.',
    },
    priceClp: 189900,
    featured: true,
    image: '/products/01_chaleco_tactico_platecarrier_02.jpg',
    specs: [
      { label: { en: 'Material', es: 'Material' }, value: { en: 'Cordura 1000D Mil-Spec', es: 'Cordura 1000D Mil-Spec' } },
      { label: { en: 'System', es: 'Sistema' }, value: { en: 'Laser-Cut MOLLE', es: 'Laser-Cut MOLLE' } },
      { label: { en: 'Release', es: 'Liberación' }, value: { en: 'Quick-Release 4-point', es: 'Quick-Release 4 puntos' } },
      { label: { en: 'Compatibility', es: 'Compatibilidad' }, value: { en: 'NIJ III/IV Plates (10x12")', es: 'Placas NIJ III / IV (10x12")' } },
    ],
    standards: ['NIJ 0101.06 Compatible', 'Cordura Official', 'Mil-Spec Tested'],
  },
  {
    id: 'vr-365-radio-harness',
    sku: 'SYS-REF // VR-365',
    name: { en: 'Tactical Patrol Vest with Radio Harness', es: 'Chaleco Táctico con Arnés y Porta-Radio' },
    category: 'Chalecos',
    description: {
      en: 'Patrol tactical platform with anatomical fit, reinforced nylon buckles, and padded transceiver compartment.',
      es: 'Plataforma táctica de patrullaje con sujeción anatómica, hebillas de nylon reforzado y compartimento acolchado para radio transceptor.',
    },
    priceClp: 149900,
    image: '/products/01_chaleco_tactico_radio_01.jpg',
    specs: [
      { label: { en: 'Chassis', es: 'Chasis' }, value: { en: '900D Ballistic Nylon', es: 'Nylon Balístico 900D' } },
      { label: { en: 'Mount', es: 'Soporte' }, value: { en: 'Radio holder with antenna channel', es: 'Porta-radio con canal de antena' } },
      { label: { en: 'Adjustment', es: 'Ajuste' }, value: { en: '360° Adjustable Straps', es: 'Correas ajustables 360°' } },
      { label: { en: 'Weight', es: 'Peso' }, value: { en: '820 g', es: '820 g' } },
    ],
    standards: ['High-Abrasion Proof', 'Radio Shielding Channel'],
  },
  {
    id: 'h-fast-high-cut',
    sku: 'SYS-REF // H-FAST-01',
    name: { en: 'FAST High Cut Ballistic Helmet', es: 'Casco Balístico FAST High Cut' },
    category: 'Cascos',
    description: {
      en: 'Ballistic and anti-trauma protection helmet with high cut for tactical comms headsets. Includes ARC side rails and front Wilcox NVG shroud.',
      es: 'Casco de protección balística y anti-trauma con corte alto para headsets de comunicación táctica. Incluye rieles laterales ARC y base NVG frontal Wilcox.',
    },
    priceClp: 349900,
    featured: true,
    image: '/products/11_casco_tactico_fast_01.jpg',
    specs: [
      { label: { en: 'Armor', es: 'Blindaje' }, value: { en: 'Kevlar Aramid NIJ III-A', es: 'Kevlar Aramid NIJ III-A' } },
      { label: { en: 'Rails', es: 'Rieles' }, value: { en: 'ARC Accessory Rails 20mm', es: 'ARC Accessory Rails 20mm' } },
      { label: { en: 'Mount', es: 'Montura' }, value: { en: 'NVG Wilcox Shroud 3-hole', es: 'NVG Wilcox Shroud 3 agujeros' } },
      { label: { en: 'Retention', es: 'Retención' }, value: { en: 'Occ-Dial Micro-adjust', es: 'Dial de microajuste Occ-Dial' } },
    ],
    standards: ['NIJ Level III-A (9mm/.44 Mag)', 'STANAG 2920'],
  },
  {
    id: 'h-fast-side-armor',
    sku: 'SYS-REF // H-FAST-SIDE',
    name: { en: 'FAST Ballistic Helmet with Cheek Armor', es: 'Casco Balístico FAST con Carrilleras' },
    category: 'Cascos',
    description: {
      en: 'Extended protection variant for assault operators with perimeter tactical velcro panels and modular rails.',
      es: 'Variante de protección extendida para operadores de asalto con paneles de velcro táctico perimetral y rieles modulares.',
    },
    priceClp: 369900,
    image: '/products/11_casco_tactico_fast_04.jpg',
    specs: [
      { label: { en: 'Structure', es: 'Estructura' }, value: { en: 'UHMWPE + Aramid Fiber', es: 'UHMWPE + Fibra Aramida' } },
      { label: { en: 'Padding', es: 'Amortiguación' }, value: { en: 'Modular Memory-Foam Pads', es: 'Almohadillas modulares Memory-Foam' } },
      { label: { en: 'Panel', es: 'Panel' }, value: { en: 'Mil-Spec Velcro Top/Sides', es: 'Velcro Mil-Spec superior/lateral' } },
      { label: { en: 'Sizes', es: 'Tallas' }, value: { en: 'M/L (55-59cm) / L/XL (59-62cm)', es: 'M/L (55-59cm) / L/XL (59-62cm)' } },
    ],
    standards: ['NIJ Level III-A', 'V50 650 m/s'],
  },
  {
    id: 'h-fast-visor',
    sku: 'SYS-REF // H-VISOR-06',
    name: { en: 'FAST Ballistic Helmet with Tactical Visor', es: 'Casco Balístico FAST con Visor Táctico' },
    category: 'Cascos',
    description: {
      en: 'Riot control and urban ops configuration with flip-up ballistic polycarbonate visor resistant to fragments and projectiles.',
      es: 'Configuración de control de masas y operaciones urbanas con visor abatible de policarbonato balístico resistente a fragmentos y proyectiles.',
    },
    priceClp: 389900,
    image: '/products/11_casco_tactico_visor_06.jpg',
    specs: [
      { label: { en: 'Visor', es: 'Visor' }, value: { en: '6mm Anti-Scratch Polycarbonate', es: 'Policarbonato 6mm Antirrayas' } },
      { label: { en: 'Mechanism', es: 'Mecanismo' }, value: { en: '3-Position Lock (0°/45°/90°)', es: 'Bloqueo 3 posiciones (0° / 45° / 90°)' } },
      { label: { en: 'Protection', es: 'Protección' }, value: { en: 'Ballistic Impact & Liquids', es: 'Impacto balístico & Líquidos' } },
      { label: { en: 'Clarity', es: 'Transparencia' }, value: { en: '99.2% Distortion-Free Optics', es: 'Óptica 99.2% sin distorsión' } },
    ],
    standards: ['ANSI Z87.1', 'NIJ III-A Helmet Base'],
  },
  {
    id: 'l-clip-edc',
    sku: 'SYS-REF // L-CLIP-03',
    name: { en: 'Operational Tactical Flashlight with Clip', es: 'Linterna Táctica Operativa con Clip' },
    category: 'Linternas',
    description: {
      en: 'Compact daily carry and patrol flashlight with Type III anodized aerospace aluminum body and reversible hardened steel clip.',
      es: 'Linterna compacta para servicio diario y patrullaje con cuerpo de aluminio aeroespacial anodizado Tipo III y clip reversible en acero endurecido.',
    },
    priceClp: 48900,
    image: '/products/02_linterna_tactica_clip_03.jpg',
    specs: [
      { label: { en: 'Output', es: 'Potencia' }, value: { en: '1800 Lumens Peak', es: '1800 Lumens Peak' } },
      { label: { en: 'Range', es: 'Alcance' }, value: { en: '280 meters', es: '280 metros' } },
      { label: { en: 'Waterproof', es: 'Impermeabilidad' }, value: { en: 'IP68 Submersible 2m', es: 'IP68 Sumergible 2m' } },
      { label: { en: 'Battery', es: 'Batería' }, value: { en: 'Li-Ion 18650 USB-C Rechargeable', es: 'Li-Ion 18650 recargable USB-C' } },
    ],
    standards: ['IP68 Submersible', 'Mil-A-8625 Anodized'],
  },
  {
    id: 'l-crown-strike',
    sku: 'SYS-REF // L-CROWN-06',
    name: { en: 'Crenelated Strike Bezel Tactical Flashlight', es: 'Linterna Táctica Corona Almenada' },
    category: 'Linternas',
    description: {
      en: 'Tactical illumination and defense tool with front impact crenelated bezel for emergency glass breaking or defensive intervention.',
      es: 'Herramienta táctica de iluminación y defensa con bisel de impacto frontal almenado para quiebre de cristales de emergencia o intervención defensiva.',
    },
    priceClp: 54900,
    featured: true,
    image: '/products/02_linterna_tactica_corona_06.jpg',
    specs: [
      { label: { en: 'Bezel', es: 'Corona' }, value: { en: 'Tungsten Stainless Steel', es: 'Acero Inoxidable Wolframio' } },
      { label: { en: 'Output', es: 'Potencia' }, value: { en: '2200 Lumens', es: '2200 Lumens' } },
      { label: { en: 'Modes', es: 'Modos' }, value: { en: 'High / Medium / Low / SOS Strobe', es: 'Alto / Medio / Bajo / Estroboscópico SOS' } },
      { label: { en: 'Switch', es: 'Pulsador' }, value: { en: 'Silent Tactical Rear Dual-Stage', es: 'Táctico trasero silencioso de doble etapa' } },
    ],
    standards: ['Impact Tested 2.5m', 'IPX8 Waterproof'],
  },
  {
    id: 'l-patrol-heavy',
    sku: 'SYS-REF // L-PATROL-04',
    name: { en: 'Long-Range Patrol Tactical Flashlight', es: 'Linterna Táctica de Patrullaje Largo' },
    category: 'Linternas',
    description: {
      en: 'Long-range tactical beam for rural and maritime perimeter patrol. Powered by high-capacity 21700 battery with slotted thermal heatsink.',
      es: 'Foco táctico de largo alcance para patrullaje perimetral rural y marítimo. Alimentada por batería de alta capacidad 21700 con disipador térmico ranurado.',
    },
    priceClp: 69900,
    image: '/products/02_linterna_tactica_patrulla_04.jpg',
    specs: [
      { label: { en: 'Range', es: 'Alcance' }, value: { en: '620 meters', es: '620 metros' } },
      { label: { en: 'Output', es: 'Potencia' }, value: { en: '3500 Lumens', es: '3500 Lumens' } },
      { label: { en: 'Runtime', es: 'Autonomía' }, value: { en: 'Up to 48 hours on low', es: 'Hasta 48 horas en modo bajo' } },
      { label: { en: 'Chassis', es: 'Chasis' }, value: { en: '6061-T6 Aluminum Anti-Slip Texture', es: 'Aluminio 6061-T6 con texturizado antideslizante' } },
    ],
    standards: ['Ultra-Throw Beam', 'IP68'],
  },
  {
    id: 'e-steel-hinged',
    sku: 'SYS-REF // E-STEEL-02',
    name: { en: 'T.365 Hinged Nickel-Plated Steel Handcuffs', es: 'Grilletes de Bisagra T.365 Acero Niquelado' },
    category: 'Retención & Defensa',
    description: {
      en: 'Professional high-resistance hinge handcuffs restricting joint movement. Equipped with dual independent locking mechanism.',
      es: 'Grilletes profesionales de bisagra de alta resistencia que restringen el movimiento articular. Equipados con doble mecanismo de bloqueo independiente.',
    },
    priceClp: 38500,
    featured: true,
    image: '/products/03_esposas_tacticas_acero_02.jpg',
    specs: [
      { label: { en: 'Material', es: 'Material' }, value: { en: 'Anti-Corrosion Nickel-Plated Carbon Steel', es: 'Acero al carbono niquelado anticorrosión' } },
      { label: { en: 'Mechanism', es: 'Mecanismo' }, value: { en: 'Dual Anti-Tamper Deadbolt', es: 'Doble cerrojo antimanipulación' } },
      { label: { en: 'Structure', es: 'Estructura' }, value: { en: 'Reinforced 3-Rivet Hinge', es: 'Bisagra reforzada 3 remaches' } },
      { label: { en: 'Strength', es: 'Resistencia' }, value: { en: 'Tensile Strength >250 kg', es: 'Tensión superior a 250 kg' } },
    ],
    standards: ['NIJ 0307.01 Certified', 'Salt Spray Tested 48H'],
  },
  {
    id: 'cam-body-4k',
    sku: 'SYS-REF // CAM-BODY-05',
    name: { en: 'ProSafe 4K Police Bodycam', es: 'Bodycam Policial 4K ProSafe' },
    category: 'Bodycams',
    description: {
      en: 'Rugged 4K UHD body camera with IR night vision auto-activation, AES-256 encryption, and integrated GPS.',
      es: 'Cámara corporal de uso rudo con resolución 4K UHD, activación de visión nocturna por sensor infrarrojo, encriptación AES-256 y GPS integrado.',
    },
    priceClp: 210000,
    featured: true,
    image: '/products/04_camara_tactica_bodycam_05.jpg',
    specs: [
      { label: { en: 'Resolution', es: 'Resolución' }, value: { en: '4K @30fps / 1080p @60fps', es: '4K @30fps / 1080p @60fps' } },
      { label: { en: 'Night Vision', es: 'Visión Nocturna' }, value: { en: 'Auto IR 12m Range', es: 'IR automático alcance 12m' } },
      { label: { en: 'Battery', es: 'Batería' }, value: { en: '14 Hours Continuous Recording', es: '14 Horas de grabación continua' } },
      { label: { en: 'Security', es: 'Seguridad' }, value: { en: 'AES-256 Encrypted Memory with Admin Password', es: 'Memoria encriptada AES-256 con contraseña de administrador' } },
    ],
    standards: ['IP67 Weatherproof', 'Drop-Tested 2m', 'Law Enforcement Certified'],
  },
  {
    id: 'cam-rail-tactical',
    sku: 'SYS-REF // CAM-RAIL-02',
    name: { en: 'ARC/Picatinny Rail Tactical Mini Camera', es: 'Mini Cámara Táctica para Riel ARC/Picatinny' },
    category: 'Bodycams',
    description: {
      en: 'Ultra-compact low-profile device for direct mounting on ballistic helmets or weapon rail systems. Loop recording and directional audio.',
      es: 'Dispositivo ultra-compacto de bajo perfil para montaje directo en cascos balísticos o sistemas de riel de armamento. Grabación en bucle y audio direccional.',
    },
    priceClp: 135000,
    image: '/products/04_camara_tactica_riel_02.jpg',
    specs: [
      { label: { en: 'Mount', es: 'Montaje' }, value: { en: 'Picatinny 1913 & ARC Helmet Rail', es: 'Riel Picatinny 1913 & ARC Helmet Rail' } },
      { label: { en: 'Video', es: 'Video' }, value: { en: 'Full HD 1080p 60fps Digital Stabilization', es: 'Full HD 1080p 60fps con estabilizador digital' } },
      { label: { en: 'Weight', es: 'Peso' }, value: { en: '68 g (Ultra Light)', es: '68 g (ultra ligera)' } },
      { label: { en: 'Activation', es: 'Activación' }, value: { en: 'Single-Touch Haptic Feedback Button', es: 'Pulsador de un solo toque con retroalimentación háptica' } },
    ],
    standards: ['Shockproof 1000G', 'IP66'],
  },
  {
    id: 'stun-torch-compact',
    sku: 'SYS-REF // STUN-01',
    name: { en: 'Compact Stun Flashlight T.365', es: 'Linterna con Descarga Eléctrica Stun T.365' },
    category: 'Retención & Defensa',
    description: {
      en: 'Hybrid deterrent device with focused 1000 Lumen beam and high-voltage electric discharge generator for personal defense and perimeter control.',
      es: 'Dispositivo disuasivo híbrido con haz concentrado de 1000 Lumens y generador de descarga eléctrica de alto voltaje para defensa personal y control perimetral.',
    },
    priceClp: 39900,
    image: '/products/06_taser_linterna_electroshock_01.jpg',
    specs: [
      { label: { en: 'Discharge', es: 'Descarga' }, value: { en: 'Non-Lethal Deterrent Voltage with Visible Arc', es: 'Voltaje disuasivo no letal con arco visible' } },
      { label: { en: 'Safety', es: 'Seguro' }, value: { en: '3-Position Safety Switch', es: 'Interruptor de seguridad de 3 posiciones' } },
      { label: { en: 'Body', es: 'Cuerpo' }, value: { en: 'Reinforced Polymer with Textured Rubber', es: 'Polímero reforzado con goma texturizada' } },
      { label: { en: 'Charge', es: 'Carga' }, value: { en: 'Hidden Connector Rechargeable', es: 'Recargable mediante conector oculto' } },
    ],
    standards: ['Dual-Safety Switch', 'CE Certified'],
  },
  {
    id: 'stun-heavy-guard',
    sku: 'SYS-REF // STUN-02',
    name: { en: 'Heavy-Duty Guard Stun Device', es: 'Dispositivo Stun Pesado para Guardia' },
    category: 'Retención & Defensa',
    description: {
      en: 'Extended-length containment tool made from aerospace aluminum for security guards, night surveillance, and critical infrastructure.',
      es: 'Herramienta de contención de longitud extendida fabricada en aluminio aeronáutico para guardias de seguridad, vigilancia nocturna e instalaciones críticas.',
    },
    priceClp: 49900,
    image: '/products/06_taser_linterna_pesada_06.jpg',
    specs: [
      { label: { en: 'Length', es: 'Longitud' }, value: { en: '38 cm Deterrent Reach', es: '38 cm de alcance disuasivo' } },
      { label: { en: 'Discharge', es: 'Descarga' }, value: { en: 'Dual Perimeter Electrodes', es: 'Electrodos perimetrales dobles' } },
      { label: { en: 'Build', es: 'Construcción' }, value: { en: 'High-Impact Anodized Aluminum', es: 'Aluminio anodizado de alto impacto' } },
      { label: { en: 'Light', es: 'Luz' }, value: { en: 'Blinding 1200 Lumen Strobe LED', es: 'LED estroboscópico cegador de 1200 Lumens' } },
    ],
    standards: ['Heavy Duty Aluminum', 'Safety Pin Lanyard'],
  },
];
