# T.365 / PROSAFE SUPPLY — Plataforma Web & Catálogo Táctico

Sitio web oficial y catálogo interactivo de defensa y equipamiento táctico para **T.365 / PROSAFE SUPPLY** (*"Built for what's next. Tactical. 365 days a year."*).

Diseñado con una estética industrial militar de vanguardia inspirada en **g-tech.us**, optimizado para operadores de seguridad privada, fuerzas de orden y escoltas VIP.

---

## 🎨 Paleta de Color Institucional
- **50% Negro Mate / Gunmetal:** Fondos (`#0A0A0A`), paneles de chasis (`#121212`), tarjetas (`#1A1A1A`) y bordes (`#242424`).
- **30% Verde Táctico Luminescente:** Botones primarios (`#76B900` / `#86B335`), retículas HUD, glow reactivo y punto distintivo de la marca `T.365`.
- **20% Blanco de Alto Contraste:** Tipografía principal (`#FFFFFF`) y especificaciones técnicas (`#A3A3A3`).

---

## ⚡ Características Principales

1. **Header Táctico con Telemetría:**
   - Logotipo oficial `T.365` con indicador de pulso verde.
   - Estado de sistema en tiempo real: `SYS: OPERACIONAL | STOCK 100%`.
   - Acceso rápido a cotizador y botón directo de WhatsApp.

2. **Flagship Defense Hero:**
   - Exhibición de alta definición del Chaleco Porta-Placas Modular V-365 y Casco FAST Kevlar.
   - Retículas HUD superpuestas y barra de certificación balística (`NIJ 0101.06`, `STANAG 2920`).

3. **Cinta de Confianza Mil-Spec:**
   - 4 tarjetas modulares: `MIL-SPEC TESTED`, `1000D BALLISTIC NYLON`, `DOUBLE-LOCK MECHANISM`, `DESPACHO INMEDIATO`.

4. **Catálogo Táctico Interactivo:**
   - 13 productos renderizados en estudio con metadatos y especificaciones técnicas completas.
   - Filtros por categoría (`Chalecos`, `Cascos`, `Linternas`, `Bodycams`, `Retención & Defensa`) y buscador en vivo por SKU o palabra clave.
   - Modales de ficha técnica detallada.

5. **Configurador de Misiones (Mission Finder):**
   - 3 perfiles de despliegue operacional preconfigurados:
     - `[01] Seguridad Privada & Banca`
     - `[02] Patrullaje Urbano & Fuerzas de Orden`
     - `[03] Escoltas VIP & Protección Cercana`
   - Agregado del kit completo a la cotización con 1 clic.

6. **Estación de Cotización & Checkout WhatsApp:**
   - Slide-over drawer interactivo para ajustar cantidades y eliminar productos.
   - Formulario de datos de contacto institucional (opcional).
   - Generación de cotización formal codificada lista para enviar al canal oficial de WhatsApp de T.365.

---

## 🛠️ Stack Tecnológico
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Estilos:** Tailwind CSS v4 + Utilidades HUD personalizadas
- **Iconos:** Lucide React

---

## 🚀 Instalación y Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/ItsJolex3630/t365-website.git

# Entrar al directorio
cd t365-website

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

---

## 🌐 Despliegue en Vercel / Netlify
El repositorio está listo para conectarse y desplegarse automáticamente con cero configuración:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
