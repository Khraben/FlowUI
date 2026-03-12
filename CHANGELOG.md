# Changelog

All notable changes to FlowUI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2026-03-12

### 🐛 Bug Fixes

**Critical Fixes**:
- ✅ Removed obsolete `useEffect` event listeners from NavBar and SideBar
- 🧹 Cleaned up duplicate pathname tracking code
- 🎯 Fixed TypeScript compilation errors
- 🔧 Ensured proper Next.js hooks usage (`usePathname` and `useRouter`)

### 🧪 Quality Assurance

- ✅ All TypeScript type checks passing
- ✅ ESLint validation clean (no warnings or errors)
- ✅ Library build successful
- 📦 Production-ready bundle verified

## [1.0.2] - 2026-03-11

### 🐛 Bug Fixes

**NavBar Component**:
- ✅ Fixed React hydration errors caused by SSR/client mismatch
- 🔄 Replaced `window.location.pathname` with Next.js `usePathname()` hook
- 🚀 Improved navigation using `router.push()` for client-side routing
- 🎯 Fixed hover states persisting after click events
- 💫 Added proper hover state reset on all interactive elements

**SideBar Component**:
- ✅ Fixed React hydration errors caused by SSR/client mismatch  
- 🔄 Replaced manual pathname tracking with Next.js `usePathname()` hook
- 🚀 Improved navigation using `router.push()` for client-side routing
- 🎯 Fixed hover states persisting after click events
- 💫 Added proper hover state reset on menu items and toggle button
- 🔧 Fixed dependency array in `renderMenuItem` useCallback

### 🎨 Improved

**Preview Demos**:
- 📊 SideBar demo now simulates active page state (like NavBar demo)
- 🔄 SideBar demo auto-closes when navigating to a route
- ✨ Better visual feedback for active menu items in previews
- 🎭 Consistent behavior between NavBar and SideBar demos

### 🧹 Code Quality

- 🗑️ Removed unused `useEffect` imports
- ✅ Fixed ESLint warnings
- 🎯 Fixed React Compiler memoization warnings
- 📝 Improved type safety in callbacks

## [1.0.0] - 2026-03-09

### 🎉 First Stable Release

**Production Ready** - FlowUI reaches its first major stable release with a complete set of components, consistent API, and comprehensive theming system.

### 🌍 Now Open Source & Public

**FlowUI is now publicly available!**

- 📦 Published to **npm public registry** (npmjs.com)
- ⚖️ Licensed under **MIT License**
- 🌐 Open source and free to use in any project
- 🚀 No authentication required for installation
- ✨ Available globally: `npm install @khraben/flowui`

### Added

**ThemeSelector Component** - New component for switching between theme configurations:

- 🎨 Interactive theme preview with live color swatches
- 🔄 Smooth fade transitions between themes
- 📱 Responsive grid layout (2-3 columns)
- ✨ Hover effects with scale and elevation
- 🎯 Active theme indicator
- 💾 Callback support via `onThemeChange`
- Props: `themes`, `activeThemeId`, `onThemeChange`, `colors`

### Improved

**BaseModal - Smart Change Detection**:

- ✅ Only shows "Discard Changes?" confirmation when actual changes are detected
- 🔍 Tracks field state via `hasUnsavedChanges` prop
- 🎯 Better UX by avoiding unnecessary confirmations
- 🧹 Automatic value reset on close

**Input Component - Number Type Enhancements**:

- ⌨️ Robust keyboard validation (blocks non-numeric chars in real-time)
- ➕➖ Custom increment/decrement buttons styled with accent color
- 🎨 Clean arrow buttons (▲▼) without background containers
- 🚫 Hides native browser spinners
- ✓ Allows negative numbers (minus only at start)
- ✓ Allows decimals (single decimal point)
- 🎯 Supports `min`, `max`, and `step` props
- ⌨️ Proper keyboard navigation (arrows, backspace, cmd/ctrl shortcuts)

**ActionIcon - Compact Sizing**:

- 📏 Reduced padding for more compact icons
- sm: `0.25rem → 0.1875rem` padding, `0.125rem → 0.0625rem` margin
- md: `0.375rem → 0.25rem` padding, `0.125rem → 0.0625rem` margin
- lg: `0.5rem → 0.375rem` padding, `0.25rem → 0.125rem` margin
- 🎯 Better suited for table rows and dense UIs

**Table Component - Consistent Row Heights**:

- 📐 Fixed row height inconsistency between tables with/without ActionIcons
- 🔧 ActionIcons now use `size="sm"` in tables
- 📦 Icons wrapped in flex container for precise vertical alignment
- 🎯 All cells use consistent `0.5rem` vertical padding
- ✨ First row has extra `0.8125rem` top padding for header separation
- 📏 `lineHeight: 1` and `verticalAlign: middle` for actions column

### Fixed

**Input Component**:

- 🐛 Fixed double label issue in modal inputs (removed redundant placeholders)
- ✓ Label now animates cleanly without text overlap
- 🎯 Number inputs properly validate all edge cases

**Component Registry**:

- 🔧 Fixed React Hooks error by creating proper `NumberInputDemo` component
- ✅ All hook usage now follows React naming conventions

**Table Component**:

- 🐛 Fixed header/body overlap issue
- 📐 Consistent spacing between header and first row
- 🎨 Better visual hierarchy and readability

### Technical Improvements

- 🎯 Enhanced number input validation with `onKeyDown` handler
- 🧹 Cleaner modal input implementation without placeholder conflicts
- 📦 Optimized ActionIcon for table usage scenarios
- 🎨 Better color application across theme switching
- ⚡ Improved render performance with `useId` for number inputs

### Developer Experience

- 📝 All components follow consistent naming patterns
- ✅ Zero linting/compilation errors
- 🎯 Better TypeScript type safety
- 🔧 Improved prop documentation

---

## [0.2.7] - 2026-02-10

### Removed

**Complete Tailwind CSS Elimination** - All components now use pure CSS-in-JS:

- 🚫 **ActionIcon**: Completely refactored from Tailwind to inline styles with size-based scaling
- 🧹 **Cleaned Constants**: Removed all obsolete style constants for Button, Input, DatePicker, Loading, NavBar, SideBar, and LanguageSelector
- 📦 **Simplified Dependencies**: Components no longer depend on Tailwind CSS classes
- 🎯 **Consistent Styling**: All components now use CSSProperties with dynamic color calculations
- ⚡ **Performance**: Reduced bundle size by eliminating Tailwind dependency for component library
- 🎨 **Pure Color System**: All visual styling now handled through BaseColorConfig and ExtendedColorConfig

### Technical Improvements

**Component Refactoring**:

- **ActionIcon**: Size-based configurations (sm: 0.25rem padding / 14px icon, md: 0.375rem / 16px, lg: 0.5rem / 20px)
- **Constants Cleanup**: Removed ~15 obsolete constant files and simplified imports
- **Type Safety**: Converted all constant-based types to literal string unions
- **Build Optimization**: Improved compilation speed and bundle size

### Fixed

- All TypeScript compilation errors related to missing constant exports
- Build process now consistently successful without Tailwind dependencies

## [2.1.0] - 2026-02-09

### Added

**Gallery Component** - New masonry gallery component with lazy loading and smooth animations:

- 📱 Responsive CSS columns layout (1/2/3 columns)
- 🖼️ Maintains original image aspect ratios
- ⚡ Lazy loading with IntersectionObserver
- 🔄 Infinite scroll support with batch loading
- ✨ Framer Motion scroll animations
- 🎯 Hover effects (zoom 1.03x + overlay)
- 🎨 Integrated with simplified color system
- Props: `images`, `batchSize`, `enableAnimation`, `colors`, `customBorderColor`, `customSkeletonBg`, `customOverlayColor`

### Improved

**Dynamic Color System Enforcement** - Eliminated all hardcoded colors across components:

- **Table**: Removed `#1E1E1E`, `#252525`, rgba values → now uses `darkenColor`, `lightenColor`, `getContrastColor`, `adjustOpacity`
- **BaseModal**: Removed hardcoded overlay rgba values → now uses `adjustOpacity(darkenColor(colors.secondary, 80), ...)`
- **Input**: Removed `#FFFFFF`, `#000000` → now uses `lightenColor(colors.secondary, 70)` and `getContrastColor`
- **DatePicker**: Removed `#FFFFFF`, `#000000`, rgba shadows → now uses dynamic calculations
- **Loading**: Removed `#000000` → now uses `darkenColor(colors.secondary, 80)`
- **LanguageSelector**: Removed `#FFFFFF` → now uses `lightenColor(colors.secondary, 70)`
- **NavBar**: Removed all rgba values → now uses `adjustOpacity` and `getContrastColor`

**Benefits:**

- ✅ 100% theme consistency - all colors derived from the 3 base colors
- ✅ Better dark/light mode support - calculations adapt to any color scheme
- ✅ Zero magic numbers - no hardcoded hex or rgba values
- ✅ Predictable behavior - same color utilities across all components

### Technical

- All components now strictly follow the 3-color philosophy (primary, secondary, accent)
- Enhanced color utilities usage: `darkenColor`, `lightenColor`, `getContrastColor`, `adjustOpacity`
- Improved hover states with dynamic overlay calculations
- Better skeleton/loading state colors based on theme

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
