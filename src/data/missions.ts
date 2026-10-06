export interface MissionProfile {
  id: string;
  code: string;
  title: string;
  badge: string;
  description: string;
  scenario: string;
  recommendedProductIds: string[];
  keyAdvantages: string[];
}

export const MISSIONS: MissionProfile[] = [
  {
    id: 'mission-private-security',
    code: 'CONFIG // 01-SEC',
    title: 'SEGURIDAD PRIVADA & BANCA',
    badge: 'ALTA DISUASIÓN Y CONTROL',
    description: 'Equipamiento optimizado para guardias de seguridad en sucursales bancarias, condominios residenciales e instalaciones corporativas críticas.',
    scenario: 'Turnos prolongados de vigilancia, control de acceso vehicular/peatonal y neutralización inmediata ante intrusiones sin letalidad.',
    recommendedProductIds: [
      'v-365-plate-carrier',
      'l-crown-strike',
      'e-steel-hinged',
      'stun-heavy-guard',
    ],
    keyAdvantages: [
      'Disuasión psicológica inmediata y presencia autoritaria',
      'Protección balística ligera para jornadas de 8 a 12 horas',
      'Retención mecánica certificada de doble seguro',
    ],
  },
  {
    id: 'mission-urban-patrol',
    code: 'CONFIG // 02-PATROL',
    title: 'PATRULLAJE URBANO & FUERZAS DE ORDEN',
    badge: 'MÁXIMA RESISTENCIA & TELEMETRÍA',
    description: 'Kit táctico integral de protección balística nivel III-A, comunicación por radio integrada y registro de evidencia en video 4K.',
    scenario: 'Operaciones de respuesta rápida, controles vehiculares nocturnos e intervenciones en áreas de alta complejidad delictual.',
    recommendedProductIds: [
      'vr-365-radio-harness',
      'h-fast-high-cut',
      'cam-body-4k',
      'l-patrol-heavy',
    ],
    keyAdvantages: [
      'Protección cefálica y torácica contra calibres comunes de mano',
      'Evidencia encriptada en tiempo real con geolocalización GPS',
      'Iluminación de largo alcance (600m+) para despeje perimetral',
    ],
  },
  {
    id: 'mission-vip-escort',
    code: 'CONFIG // 03-ESCORT',
    title: 'ESCOLTAS VIP & PROTECCIÓN CERCANA',
    badge: 'DISCRECIÓN Y RESPUESTA RÁPIDA',
    description: 'Configuración de bajo perfil concebida para escoltas ejecutivos, diplomáticos y traslados de valores de alto riesgo.',
    scenario: 'Vehículos blindados, eventos masivos, movimientos en centros urbanos concurridos y defensa de proximidad.',
    recommendedProductIds: [
      'v-365-plate-carrier',
      'l-clip-edc',
      'cam-rail-tactical',
      'stun-torch-compact',
    ],
    keyAdvantages: [
      'Movilidad corporal sin restricciones ni volumen excesivo',
      'Herramientas compactas de disuasión no letal oculta',
      'Grabación de bajo perfil montable en equipo ligero',
    ],
  },
];
