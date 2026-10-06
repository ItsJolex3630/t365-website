import type { Product } from '../data/products';
import type { Language } from '../i18n/translations';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface QuoteDetails {
  companyName?: string;
  contactName?: string;
  city?: string;
  missionName?: string;
}

export const WHATSAPP_NUMBER = '584149428999';

function getLocalizedString(obj: { en: string; es: string }, lang: Language): string {
  return obj[lang];
}

export function generateWhatsAppQuoteUrl(
  items: CartItem[],
  details: QuoteDetails = {},
  language: Language = 'en'
): string {
  const now = new Date();
  const locale = language === 'es' ? 'es-US' : 'en-US';
  const dateStr = now.toLocaleDateString(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const timeStr = now.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });

  if (language === 'en') {
    let message = `🚨 *OFFICIAL QUOTE REQUEST // T.365 PROSAFE SUPPLY* 🚨\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    
    if (details.companyName || details.contactName) {
      message += `👤 *Client:* ${details.contactName || 'Not specified'}\n`;
      message += `🏢 *Company / Agency:* ${details.companyName || 'Individual / Security'}\n`;
    }
    if (details.city) {
      message += `📍 *Destination:* ${details.city}\n`;
    }
    if (details.missionName) {
      message += `🎯 *Mission Configuration:* ${details.missionName}\n`;
    }
    message += `📅 *Date:* ${dateStr} - ${timeStr} hrs\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    if (items.length === 0) {
      message += `I would like to inquire about the institutional catalog and technical advisory for tactical equipment.\n`;
    } else {
      message += `📋 *REQUESTED TACTICAL GEAR:*\n`;
      items.forEach((item, index) => {
        message += `${index + 1}. [x${item.quantity}] *${getLocalizedString(item.product.name, language)}*\n`;
        message += `   • Ref: \`${item.product.sku}\`\n`;
        message += `   • Category: ${getLocalizedString({ en: item.product.category, es: item.product.category }, language)}\n`;
      });
      message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      message += `Please confirm immediate stock availability, certified technical specifications, and wholesale lead times.`;
    }

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  }

  // Spanish (default)
  let message = `🚨 *SOLICITUD DE COTIZACIÓN // T.365 PROSAFE SUPPLY* 🚨\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  
  if (details.companyName || details.contactName) {
    message += `👤 *Cliente:* ${details.contactName || 'No especificado'}\n`;
    message += `🏢 *Empresa / Org:* ${details.companyName || 'Particular / Seguridad'}\n`;
  }
  if (details.city) {
    message += `📍 *Ciudad / Destino:* ${details.city}\n`;
  }
  if (details.missionName) {
    message += `🎯 *Configuración de Misión:* ${details.missionName}\n`;
  }
  message += `📅 *Fecha:* ${dateStr} - ${timeStr} hrs\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  if (items.length === 0) {
    message += `Deseo consultar por catálogo institucional y asesoría técnica de equipamiento táctico.\n`;
  } else {
    message += `📋 *EQUIPAMIENTO SOLICITADO:*\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. [x${item.quantity}] *${getLocalizedString(item.product.name, language)}*\n`;
      message += `   • Ref: \`${item.product.sku}\`\n`;
      message += `   • Categoría: ${getLocalizedString({ en: item.product.category, es: item.product.category }, language)}\n`;
    });
    message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `Solicito confirmación de disponibilidad inmediata, ficha técnica certificada y plazos de despacho.`;
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
