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
