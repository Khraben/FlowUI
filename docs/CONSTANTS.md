# FlowUI Constants System

This document describes FlowUI's centralized constants system for components and colors.

## 📁 Project Structure

```
src/
├── constants/
│   └── staticColors.constants.ts    # System-level colors (27 colors)
├── app/
│   └── constants/
│       ├── index.ts                 # Exports all component constants
│       ├── categories.constants.ts  # Component categories for preview
│       ├── components/              # Component-specific constants
│       │   ├── button/
│       │   ├── input/
│       │   ├── loading/
│       │   ├── table/
│       │   └── ...
│       └── preview/
│           └── colors.constants.ts  # Preview color palette (6 colors)
```

## 🎨 Exported Constants

### Components

All components are exported from the main entry point:

```typescript
import {
  Button,
  Input,
  DatePicker,
  LanguageSelector,
  ActionIcon,
  Loading,
  Table,
  BaseModal,
  ConfirmationModal,
} from '@khraben/flowui';
```

### Component Enums

```typescript
import {
  BUTTON_VARIANT,
  BUTTON_ROUNDED,
  SIZE,
  POSITION,
  INPUT_VARIANT
} from '@khraben/flowui';

<Button variant={BUTTON_VARIANT.PRIMARY} size={SIZE.MD} />
<Input variant={INPUT_VARIANT.TEXT} size={SIZE.LG} />
```

### Language Constants

```typescript
import {
  ALL_LANGUAGES,
  DEFAULT_LANGUAGES,
  DEFAULT_AVAILABLE_LANGUAGES,
  DEFAULT_SELECTED_LANGUAGE,
  LANGUAGE_SELECTOR_BUTTON_SIZES,
  LANGUAGE_SELECTOR_FLAG_SIZES
} from '@khraben/flowui';

<LanguageSelector
  selectedLanguage={DEFAULT_SELECTED_LANGUAGE}
  availableLanguages={DEFAULT_AVAILABLE_LANGUAGES}
  size={LANGUAGE_SELECTOR_BUTTON_SIZES.md}
/>
```

### Static Colors

System-level colors for disabled states, overlays, and UI elements:

```typescript
import { STATIC_COLORS } from '@khraben/flowui';

<div style={{ backgroundColor: STATIC_COLORS.DISABLED_BG }}>
  <span style={{ color: STATIC_COLORS.LIGHT_TEXT }}>Disabled</span>
</div>
```

**Available static colors (27 total):**

**Disabled States:**

- `DISABLED_BG` - #9CA3AF
- `DISABLED_TEXT` - #D1D5DB

**Overlays:**

- `OVERLAY_DARK` - rgba(0, 0, 0, 0.5)
- `OVERLAY_DARKER` - rgba(0, 0, 0, 0.7)

**Grayscale:**

- `GRAY_50` through `GRAY_900`
- `WHITE` - #FFFFFF
- `WHITE_ALPHA_20`, `WHITE_ALPHA_30`

**Status Colors:**

- `RED_500`, `RED_600`, `RED_HOVER`

**Surfaces:**

- `DARK_SURFACE`, `DARK_SURFACE_LIGHT`, `DARK_SURFACE_LIGHTER`

**Text & Borders:**

- `LIGHT_TEXT`, `DARK_TEXT`, `BORDER_GRAY`, `LABEL_GRAY`, `LABEL_LIGHT_GRAY`

**Utility:**

- `TRANSPARENT`

## 💡 Best Practices

### ✅ Do

Use exported constants for consistency:

```typescript
import { BUTTON_VARIANT, SIZE, STATIC_COLORS } from '@khraben/flowui';

<Button
  variant={BUTTON_VARIANT.PRIMARY}
  size={SIZE.MD}
  bg="#1E90FF"
  textColor={STATIC_COLORS.WHITE}
  disabledBg={STATIC_COLORS.DISABLED_BG}
/>
```

### ❌ Avoid

Hardcoded strings and magic values:

```typescript
<Button
  variant="primary"
  size="md"
  bg="#1E90FF"
  textColor="#FFFFFF"
  disabledBg="#9CA3AF"
/>
```

## 🎨 Color System Philosophy

FlowUI uses a **two-tier color system**:

### 1. Component Colors (Props)

All visual colors are **passed as props** for maximum flexibility:

```typescript
<Button
  bg="#1E90FF"              // Primary color
  textColor="#FFFFFF"        // Text color
  hoverBg="#187BCD"          // Hover state
  disabledBg="#5A5A5A"       // Disabled state
/>
```

### 2. System Colors (STATIC_COLORS)

Non-customizable system colors for consistent UI states:

```typescript
import { STATIC_COLORS } from '@khraben/flowui';

const disabledColor = STATIC_COLORS.DISABLED_BG;
const overlayColor = STATIC_COLORS.OVERLAY_DARK;
const borderColor = STATIC_COLORS.BORDER_GRAY;
```

## 🔧 TypeScript Support

All exports include full TypeScript definitions:

```typescript
import type {
  ButtonProps,
  InputProps,
  DatePickerProps,
  LanguageSelectorProps,
  ActionIconProps,
  LoadingProps,
  TableProps,
  TableColumn,
  BaseModalProps,
  ConfirmationModalProps,
} from '@khraben/flowui';
```

## 📖 Benefits

- ✅ **Type Safety** - TypeScript validates all values
- ✅ **100% Customizable** - All visual colors via props
- ✅ **Consistent System Colors** - Unified disabled states and overlays
- ✅ **Autocomplete** - Full IntelliSense support
- ✅ **Tree Shakable** - Only import what you use
- ✅ **Zero Hardcoded Colors** - Maximum flexibility
