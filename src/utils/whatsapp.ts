import type { Product } from '../data/products';

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

export const WHATSAPP_NUMBER = '584149428999'; // Número oficial T.365 (+58 414-9428999)

export function generateWhatsAppQuoteUrl(
  items: CartItem[],
  details: QuoteDetails = {}
): string {
  const now = new Date();
  const dateStr = now.toLocaleDateString('es-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const timeStr = now.toLocaleTimeString('es-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

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
      message += `${index + 1}. [x${item.quantity}] *${item.product.name}*\n`;
      message += `   • Ref: \`${item.product.sku}\`\n`;
      message += `   • Categoría: ${item.product.category}\n`;
    });
    message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `Solicito confirmación de disponibilidad inmediata, ficha técnica certificada y plazos de despacho.`;
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
