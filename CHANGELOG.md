# Changelog

All notable changes to FlowUI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-02-06

### 🎨 Major: Simplified Color System

Complete redesign of the color prop system to dramatically reduce complexity while maintaining full customization.

#### Breaking Changes

**All components now use simplified color props:**

- **Before**: 10-40 individual color props per component (`bg`, `textColor`, `hoverBg`, `hoverTextColor`, `disabledBg`, etc.)
- **After**: Single `colors` prop with 3-6 colors + optional overrides

**New Color Configuration:**

- `BaseColorConfig`: `primary`, `secondary`, `accent` (required for all components)
- `ExtendedColorConfig`: Adds `warning`, `success`, `danger` (for modals, confirmations)

**Removed Props** (now auto-calculated or moved to `colors` config):

- Button: `bg`, `textColor`, `hoverBg`, `hoverTextColor`, `disabledBg`, `disabledTextColor`, `disabledBorderColor`, `focusRing`
- Input: `bg`, `textColor`, `borderColor`, `focusBorderColor`, `focusShadow`, `labelColor`, `labelActiveColor`, `iconColor`, `iconHoverColor`, `placeholderColor`
- ActionIcon: `color`, `hoverColor`, `hoverBg`, `disabledColor`
- DatePicker: 30+ color props simplified to `colors` + 3 overrides
- BaseModal: 30+ color props simplified to `colors` + 2 overrides
- LanguageSelector: 15+ color props simplified to `colors` + 3 overrides
- Loading: `overlayColor`, `spinnerColor` → `colors` + optional overrides

**New Override Props** (for edge cases):

- Button: `customBg`, `customTextColor`, `customBorderColor`
- Input: `customBg`, `customTextColor`, `customBorderColor`
- ActionIcon: `customColor`, `customBg`
- DatePicker: `customBg`, `customTextColor`, `customBorderColor`
- Loading: `customOverlayColor`, `customSpinnerColor`
- LanguageSelector: `customBorderColor`, `customBgColor`, `customTextColor`
- BaseModal: `customOverlayBg`, `customModalBg`

#### Added

**New Color Utilities:**

- `isDarkColor(hex)` - Determines if a color is dark based on luminance
- `darkenColor(hex, percent)` - Darkens a color by percentage
- `lightenColor(hex, percent)` - Lightens a color by percentage
- `getHoverColor(hex, intensity)` - Auto-calculates hover color (darkens light, lightens dark)
- `getContrastColor(hex)` - Returns white or black for optimal text contrast
- `adjustOpacity(hex, opacity)` - Converts hex to rgba with opacity

**New Type Exports:**

- `BaseColorConfig` - Interface for basic 3-color configuration
- `ExtendedColorConfig` - Interface for 6-color configuration (includes status colors)
- `hasExtendedColors()` - Type guard for extended color configs
- `DEFAULT_COLOR_CONFIG` - Default color palette

**Auto-calculated States:**
All components now automatically calculate:

- Hover colors (intelligent darkening/lightening)
- Disabled states (opacity adjustment)
- Focus rings (color with adjusted opacity)
- Text contrast (ensures readability)
- Border hover states

**New Documentation:**

- `docs/COLOR_SYSTEM.md` - Complete color system guide
- `docs/MIGRATION_GUIDE.md` - Step-by-step migration instructions
- `docs/examples/ColorSystemExamples.tsx` - 7 practical examples

#### Benefits

- **90% fewer color props** - From 10-40 props to 3-6
- **Consistent theming** - Same color config across all components
- **Smart defaults** - Hover, disabled, focus states auto-calculated
- **Better accessibility** - Automatic contrast calculations
- **Easier maintenance** - Update theme by changing one config object
- **Full type safety** - TypeScript ensures required colors present
- **Still flexible** - Override props available for edge cases

#### Migration

See [Migration Guide](docs/MIGRATION_GUIDE.md) for detailed instructions.

**Quick Example:**

Before:

```tsx
<Button
  bg="#3B82F6"
  textColor="#FFFFFF"
  hoverBg="#2563EB"
  hoverTextColor="#FFFFFF"
  disabledBg="#9CA3AF"
  disabledTextColor="#D1D5DB"
  focusRing="#93C5FD"
/>
```

After:

```tsx
const colors = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  accent: '#EC4899',
};

<Button colors={colors} variant="primary" />;
```

---

## [0.1.0] - 2026-02-02

### Added

- **Button Component** - Fully customizable button with variants (primary, secondary, tertiary, ghost)
- **Input Component** - Text, password, email, number, and textarea variants with icon support
- **ActionIcon Component** - Icon button with smooth hover animations
- **Loading Component** - Overlay loading with spinner, dots, and pulse variants
- **Table Component** - Data table with sorting, pagination, and custom styling
- **BaseModal Component** - Modal foundation with gradient headers and animations
- **ConfirmationModal Component** - Pre-built confirmation dialog with async support
- **DatePicker Component** - Calendar date picker with range selection
- **LanguageSelector Component** - Dropdown language switcher with flags

### Features

- **100% Color Props** - All colors passed as individual props, zero hardcoded values
- **Static Color System** - 27 system-level colors for consistent disabled states, grays, and overlays
- **Preview Showcase** - Interactive component gallery with 100+ examples
- **TypeScript Strict Mode** - Full type safety with comprehensive interfaces
- **Darcula Theme** - Inspired by PyCharm's color scheme
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Accessibility** - ARIA labels, keyboard navigation, and focus management

### Developer Experience

- ESLint + Prettier configuration
- TypeScript strict mode
- Next.js 16 with Turbopack
- Tailwind CSS 4
- Component constants organization
- Preview color palette (6 colors)
- Static color constants (27 colors)

### Documentation

- Comprehensive README with usage examples
- Component prop documentation
- Color system guidelines
- Preview showcase for visual testing
