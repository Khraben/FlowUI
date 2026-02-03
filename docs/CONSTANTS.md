# Sistema de Constantes FlowUI

Este documento describe el sistema de constantes centralizado de FlowUI para evitar strings hardcoded.

## 📁 Estructura de Constantes

```
src/constants/
├── index.ts           # Exporta todas las constantes
├── variants.ts        # Variantes de componentes
├── styles.ts          # Estilos de componentes
├── categories.ts      # Categorías de componentes
└── preview.ts         # Configuración de la página preview
```

## 🎨 Variantes de Componentes

### Button Variants

```typescript
import { BUTTON_VARIANTS, BUTTON_SIZES } from '@/constants';

<Button variant={BUTTON_VARIANTS.PRIMARY} size={BUTTON_SIZES.MD}>
  Click me
</Button>
```

**Variantes disponibles:**

- `BUTTON_VARIANTS.PRIMARY` - Botón principal
- `BUTTON_VARIANTS.SECONDARY` - Botón secundario
- `BUTTON_VARIANTS.OUTLINE` - Botón con borde
- `BUTTON_VARIANTS.GHOST` - Botón sin fondo

**Tamaños disponibles:**

- `BUTTON_SIZES.SM` - Pequeño
- `BUTTON_SIZES.MD` - Mediano
- `BUTTON_SIZES.LG` - Grande

### Card Variants

```typescript
import { CARD_VARIANTS } from '@/constants';

<Card variant={CARD_VARIANTS.ELEVATED}>
  Content
</Card>
```

**Variantes disponibles:**

- `CARD_VARIANTS.DEFAULT` - Card básico
- `CARD_VARIANTS.BORDERED` - Con borde
- `CARD_VARIANTS.ELEVATED` - Con sombra elevada

## 🎨 Estilos

Los estilos de Tailwind están centralizados en `styles.ts`:

```typescript
import { BUTTON_STYLES, CARD_STYLES, SHOWCASE_STYLES } from '@/constants';

<button className={BUTTON_STYLES.BASE}>
  {/* ... */}
</button>
```

## 📦 Categorías

```typescript
import { COMPONENT_CATEGORIES } from '@/constants';

const demo: ComponentDemo = {
  category: COMPONENT_CATEGORIES.BUTTONS,
  // ...
};
```

**Categorías disponibles:**

- `BUTTONS` - Botones
- `INPUTS` - Inputs
- `CARDS` - Tarjetas
- `NAVIGATION` - Navegación
- `FORMS` - Formularios
- `MODALS` - Modales
- `LAYOUTS` - Layouts
- `TYPOGRAPHY` - Tipografía
- `OTHER` - Otros

## ⚙️ Configuración de Preview

```typescript
import { PREVIEW_CONFIG, PREVIEW_TEXT } from '@/constants';

PREVIEW_CONFIG.COMPONENTS_PER_PAGE;
PREVIEW_CONFIG.SCROLL_THRESHOLD;
PREVIEW_CONFIG.LOADING_DELAY;

PREVIEW_TEXT.TITLE;
PREVIEW_TEXT.SUBTITLE;
PREVIEW_TEXT.LOADING_MESSAGE;
```

## 💡 Mejores Prácticas

### ✅ Hacer

```typescript
import { BUTTON_VARIANTS, COMPONENT_CATEGORIES } from '@/constants';

variant={BUTTON_VARIANTS.PRIMARY}
category: COMPONENT_CATEGORIES.BUTTONS
```

### ❌ Evitar

```typescript
variant = 'primary';
category: 'Buttons';

import { BUTTON_VARIANTS } from '@/constants/variants';
```

## 🔧 Agregar Nuevas Constantes

1. **Identificar el archivo correcto:**
   - Variantes de componentes → `variants.ts`
   - Estilos → `styles.ts`
   - Categorías → `categories.ts`
   - Textos de UI → `preview.ts` (o crear uno nuevo)

2. **Agregar la constante:**

```typescript
export const MY_COMPONENT_VARIANTS = {
  VARIANT_1: 'variant-1',
  VARIANT_2: 'variant-2',
} as const;

export type MyComponentVariant = (typeof MY_COMPONENT_VARIANTS)[keyof typeof MY_COMPONENT_VARIANTS];
```

3. **Exportar desde index.ts** si es necesario

4. **Actualizar este documento** con la nueva constante

## 📖 Beneficios

- ✅ **Type Safety**: TypeScript valida los valores
- ✅ **Refactoring**: Cambios centralizados
- ✅ **Autocompletado**: IntelliSense en el IDE
- ✅ **Consistencia**: Mismo valor en toda la app
- ✅ **Mantenibilidad**: Fácil de encontrar y actualizar
