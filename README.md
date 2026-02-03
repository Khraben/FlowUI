# FlowUI

Librería privada de componentes React con Next.js, TypeScript y Tailwind CSS.

## 🎨 Filosofía de Diseño

**100% Reutilizable** - Todos los colores se pasan como props individuales. Los componentes no tienen estilos de color por defecto, garantizando máxima flexibilidad.

## 🚀 Características

- ✅ **Props Individuales** - Cada color es un prop directo (ej: `bg`, `textColor`, `hoverBg`)
- ✅ **Zero Defaults** - No hay colores hardcodeados en los componentes
- ✅ **Theme Darcula** - Inspirado en PyCharm
- ✅ **TypeScript Strict** - Type safety completo
- ✅ **Preview Showcase** - Ejemplos visuales con scroll infinito

## 📦 Componentes

### Button

```tsx
<Button
  variant="primary"
  bg="#1E90FF"
  textColor="#FFFFFF"
  hoverBg="#187BCD"
  disabledBg="#5A5A5A"
  disabledTextColor="#808080"
  focusRing="#1E90FF"
>
  Click me
</Button>
```

**Props de Color:**

- `bg` - Background color
- `textColor` - Text color
- `borderColor` - Border color (opcional)
- `hoverBg` - Hover background
- `hoverTextColor` - Hover text (opcional, usa textColor por defecto)
- `disabledBg` - Disabled background
- `disabledTextColor` - Disabled text
- `disabledBorderColor` - Disabled border (opcional)
- `focusRing` - Focus ring color

### Input

```tsx
<Input
  variant="text"
  label="Username"
  bg="#313335"
  textColor="#A9B7C6"
  borderColor="#4A5A6A"
  focusBorderColor="#00D4FF"
  labelColor="#808080"
  labelActiveColor="#00D4FF"
/>
```

**Props de Color:**

- `bg` - Background color
- `textColor` - Text color
- `borderColor` - Border color
- `focusBorderColor` - Focus border
- `focusShadow` - Focus shadow
- `labelColor` - Label default color
- `labelActiveColor` - Label active/focused color
- `iconColor` - Icon color
- `iconHoverColor` - Icon hover color
- `placeholderColor` - Placeholder color

### ActionIcon

Botón de icono con efectos hover y animaciones suaves.

```tsx
<ActionIcon
  icon={Heart}
  onClick={() => console.log('clicked')}
  title="Like"
  size="md"
  color="text-red-600"
  hoverColor="hover:text-red-700"
  hoverBg="hover:bg-red-600/10"
/>
```

**Props:**

- `icon` - Componente de icono (ej: de lucide-react)
- `onClick` - Función callback al hacer click
- `title` - Tooltip text
- `size` - Tamaño: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `color` - Color del icono (default: `'text-primary-600'`)
- `hoverColor` - Color en hover (default: `'hover:text-primary-700'`)
- `hoverBg` - Background en hover (default: `'hover:bg-primary-600/10'`)
- `disabled` - Estado deshabilitado
- `className` - Clases CSS adicionales

### Loading

Componente de carga moderno con animaciones CSS puras. Incluye 3 variantes: spinner, dots y pulse.

```tsx
<Loading
  variant="spinner"
  size="md"
  text="Loading..."
  spinnerColor="#3B82F6"
  overlayColor="bg-black/30"
  showOverlay={true}
/>
```

**Variantes:**

1. **Spinner**: Anillo giratorio con efecto de gradiente y anillo pulsante
2. **Dots**: Tres puntos con animación de rebote escalonada
3. **Pulse**: Efecto de pulso con anillo expansivo

**Props:**

- `variant` - Tipo de loader: `'spinner' | 'dots' | 'pulse'` (default: `'spinner'`)
- `size` - Tamaño: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `text` - Texto opcional debajo del loader
- `spinnerColor` - Color del loader (default: `'#3B82F6'`)
- `overlayColor` - Color del overlay (default: `'bg-black/30'`)
- `showOverlay` - Mostrar overlay de fondo (default: `true`)

**Características:**

- ✅ 100% CSS puro, sin íconos externos
- ✅ Portal rendering (se monta en document.body)
- ✅ Backdrop blur para efecto moderno
- ✅ Animaciones suaves con cubic-bezier
- ✅ Responsive y accesible

### LanguageSelector

Selector de idioma con dropdown y soporte para 9 idiomas. Los nombres se traducen automáticamente según el idioma seleccionado.

```tsx
<LanguageSelector
  selectedLanguage="en"
  onLanguageChange={(langCode) => console.log(langCode)}
  availableLanguages={['en', 'es', 'fr', 'de']}
  size="md"
  buttonBorder="border-2 border-primary-600"
  buttonHoverBorder="hover:border-primary-700"
  dropdownBg="bg-gray-900"
  dropdownBorder="border border-gray-700"
  itemHoverBg="hover:bg-gray-800"
  activeItemBg="bg-primary-900"
  activeItemText="text-primary-400"
  itemText="text-gray-300"
  checkIconColor="text-primary-400"
/>
```

**Idiomas Disponibles:**

- `en` - English / Inglés / Anglais / etc.
- `es` - Spanish / Español / Espagnol / etc.
- `pt` - Portuguese / Português / Portugais / etc.
- `fr` - French / Français / Francese / etc.
- `it` - Italian / Italiano / Italien / etc.
- `ru` - Russian / Русский / Russe / etc.
- `ja` - Japanese / 日本語 / Japonais / etc.
- `de` - German / Deutsch / Allemand / etc.
- `zh` - Chinese (Simplified) / 简体中文 / Chinois / etc.

**Props:**

- `selectedLanguage` - Código del idioma seleccionado (default: `'en'`)
- `onLanguageChange` - Callback cuando cambia el idioma
- `availableLanguages` - Array de códigos a mostrar (default: `['en', 'es']`)
- `size` - Tamaño: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `buttonBorder` - Border del botón
- `buttonHoverBorder` - Border en hover
- `dropdownBg` - Background del dropdown
- `dropdownBorder` - Border del dropdown
- `itemHoverBg` - Background en hover de items
- `activeItemBg` - Background del item activo
- `activeItemText` - Color de texto del item activo
- `itemText` - Color de texto de items
- `checkIconColor` - Color del check icon
- `flagBorder` - Border de las banderas

**Traducciones Automáticas:**

Los nombres de idiomas se muestran en el idioma seleccionado. Por ejemplo:

- Si `selectedLanguage="en"`: Spanish, French, German
- Si `selectedLanguage="es"`: Español, Francés, Alemán
- Si `selectedLanguage="fr"`: Espagnol, Français, Allemand

## 🎨 Paleta Preview

Los colores en `/src/constants/preview-colors.constants.ts` son **solo para demos**:

```ts
export const PREVIEW_COLORS = {
  PRIMARY: '#1E90FF',
  ACCENT: '#00D4FF',
  SUCCESS: '#00E676',
  DANGER: '#FF5252',
  // ... más colores
};
```

## 🏗️ Estructura

```
src/
├── app/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── models/
│   │   │   │   └── Button.interface.ts
│   │   │   └── types/
│   │   └── Input/
│   └── preview/
│       └── ComponentRegistry.tsx
├── constants/
│   ├── preview-colors.constants.ts  (solo preview)
│   ├── button.constants.ts
│   └── input.constants.ts
└── types/
```

## 🎯 Uso

1. Importa el componente
2. Pasa TODOS los colores como props individuales
3. Sin defaults = 100% control

```tsx
import { Button } from '@/app/components';

// ✅ Control total
<Button
  bg="#custom"
  textColor="#custom"
  // ... todos los colores necesarios
>
  Action
</Button>

// ❌ Sin colores = sin estilos de color
<Button>Won't have colors</Button>
```
