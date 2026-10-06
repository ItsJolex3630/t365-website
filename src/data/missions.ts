export interface MissionProfile {
  id: string;
  code: { en: string; es: string };
  title: { en: string; es: string };
  badge: { en: string; es: string };
  description: { en: string; es: string };
  scenario: { en: string; es: string };
  recommendedProductIds: string[];
  keyAdvantages: { en: string; es: string }[];
}

export const MISSIONS: MissionProfile[] = [
  {
    id: 'mission-private-security',
    code: { en: 'CONFIG // 01-SEC', es: 'CONFIG // 01-SEC' },
    title: { en: 'PRIVATE SECURITY & BANKING', es: 'SEGURIDAD PRIVADA & BANCA' },
    badge: { en: 'HIGH DETERRENCE & CONTROL', es: 'ALTA DISUASIÓN Y CONTROL' },
    description: {
      en: 'Optimized gear for security guards in bank branches, residential compounds, and critical corporate facilities.',
      es: 'Equipamiento optimizado para guardias de seguridad en sucursales bancarias, condominios residenciales e instalaciones corporativas críticas.',
    },
    scenario: {
      en: 'Extended surveillance shifts, vehicle/pedestrian access control, and immediate non-lethal neutralization of intrusions.',
      es: 'Turnos prolongados de vigilancia, control de acceso vehicular/peatonal y neutralización inmediata ante intrusiones sin letalidad.',
    },
    recommendedProductIds: [
      'v-365-plate-carrier',
      'l-crown-strike',
      'e-steel-hinged',
      'stun-heavy-guard',
    ],
    keyAdvantages: [
      { en: 'Immediate psychological deterrence and authoritative presence', es: 'Disuasión psicológica inmediata y presencia autoritaria' },
      { en: 'Lightweight ballistic protection for 8-12 hour shifts', es: 'Protección balística ligera para jornadas de 8 a 12 horas' },
      { en: 'Certified dual-lock mechanical restraint', es: 'Retención mecánica certificada de doble seguro' },
    ],
  },
  {
    id: 'mission-urban-patrol',
    code: { en: 'CONFIG // 02-PATROL', es: 'CONFIG // 02-PATROL' },
    title: { en: 'URBAN PATROL & LAW ENFORCEMENT', es: 'PATRULLAJE URBANO & FUERZAS DE ORDEN' },
    badge: { en: 'MAXIMUM RESISTANCE & TELEMETRY', es: 'MÁXIMA RESISTENCIA & TELEMETRÍA' },
    description: {
      en: 'Complete tactical kit with Level III-A ballistic protection, integrated radio comms, and 4K video evidence recording.',
      es: 'Kit táctico integral de protección balística nivel III-A, comunicación por radio integrada y registro de evidencia en video 4K.',
    },
    scenario: {
      en: 'Rapid response ops, nighttime vehicle checkpoints, and interventions in high-crime urban areas.',
      es: 'Operaciones de respuesta rápida, controles vehiculares nocturnos e intervenciones en áreas de alta complejidad delictual.',
    },
    recommendedProductIds: [
      'vr-365-radio-harness',
      'h-fast-high-cut',
      'cam-body-4k',
      'l-patrol-heavy',
    ],
    keyAdvantages: [
      { en: 'Head and torso protection against common handgun calibers', es: 'Protección cefálica y torácica contra calibres comunes de mano' },
      { en: 'Real-time encrypted evidence with GPS geolocation', es: 'Evidencia encriptada en tiempo real con geolocalización GPS' },
      { en: 'Long-range illumination (600m+) for perimeter clearance', es: 'Iluminación de largo alcance (600m+) para despeje perimetral' },
    ],
  },
  {
    id: 'mission-vip-escort',
    code: { en: 'CONFIG // 03-ESCORT', es: 'CONFIG // 03-ESCORT' },
    title: { en: 'VIP ESCORT & CLOSE PROTECTION', es: 'ESCOLTAS VIP & PROTECCIÓN CERCANA' },
    badge: { en: 'DISCRETION & RAPID RESPONSE', es: 'DISCRECIÓN Y RESPUESTA RÁPIDA' },
    description: {
      en: 'Low-profile configuration for executive protection details, diplomats, and high-value asset transport.',
      es: 'Configuración de bajo perfil concebida para escoltas ejecutivos, diplomáticos y traslados de valores de alto riesgo.',
    },
    scenario: {
      en: 'Armored vehicles, mass events, crowded urban movements, and close-quarters defense.',
      es: 'Vehículos blindados, eventos masivos, movimientos en centros urbanos concurridos y defensa de proximidad.',
    },
    recommendedProductIds: [
      'v-365-plate-carrier',
      'l-clip-edc',
      'cam-rail-tactical',
      'stun-torch-compact',
    ],
    keyAdvantages: [
      { en: 'Unrestricted mobility without excessive bulk', es: 'Movilidad corporal sin restricciones ni volumen excesivo' },
      { en: 'Compact concealed non-lethal deterrence tools', es: 'Herramientas compactas de disuasión no letal oculta' },
      { en: 'Low-profile recording mountable on lightweight gear', es: 'Grabación de bajo perfil montable en equipo ligero' },
    ],
  },
];
