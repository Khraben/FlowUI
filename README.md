# FlowUI

Private React component library with Next.js, TypeScript and Tailwind CSS.

## 🎨 Design Philosophy

**100% Reusable** - All colors are passed as individual props. Components have no default color styles, ensuring maximum flexibility.

## 🚀 Features

- ✅ **Individual Props** - Each color is a direct prop (e.g., `bg`, `textColor`, `hoverBg`)
- ✅ **Zero Defaults** - No hardcoded colors in components
- ✅ **Darcula Theme** - Inspired by PyCharm
- ✅ **TypeScript Strict** - Complete type safety
- ✅ **Preview Showcase** - Visual examples with infinite scroll

## 📦 Installation

```bash
npm install @khraben/flowui
```

**Prerequisites:** Add `.npmrc` to your project root:

```
@khraben:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## 📚 Components

### Button

```tsx
import { Button } from '@khraben/flowui';

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

**Color Props:**

- `bg` - Background color
- `textColor` - Text color
- `borderColor` - Border color (optional)
- `hoverBg` - Hover background
- `hoverTextColor` - Hover text (optional, uses textColor by default)
- `disabledBg` - Disabled background
- `disabledTextColor` - Disabled text
- `disabledBorderColor` - Disabled border (optional)
- `focusRing` - Focus ring color

### Input

```tsx
import { Input } from '@khraben/flowui';

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

**Color Props:**

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

Icon button with hover effects and smooth animations.

```tsx
import { ActionIcon } from '@khraben/flowui';
import { Heart } from 'lucide-react';

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

- `icon` - Icon component (e.g., from lucide-react)
- `onClick` - Click callback function
- `title` - Tooltip text
- `size` - Size: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `color` - Icon color
- `hoverColor` - Hover color
- `hoverBg` - Hover background
- `disabled` - Disabled state
- `className` - Additional CSS classes

### Loading

Modern loading component with pure CSS animations. Includes 3 variants: spinner, dots, and pulse.

```tsx
import { Loading } from '@khraben/flowui';

<Loading
  variant="spinner"
  size="md"
  text="Loading..."
  spinnerColor="#3B82F6"
  overlayColor="bg-black/30"
  showOverlay={true}
/>
```

**Variants:**

1. **Spinner**: Rotating ring with gradient effect and pulsing ring
2. **Dots**: Three dots with staggered bounce animation
3. **Pulse**: Pulse effect with expanding ring

**Props:**

- `variant` - Loader type: `'spinner' | 'dots' | 'pulse'` (default: `'spinner'`)
- `size` - Size: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `text` - Optional text below loader
- `spinnerColor` - Loader color
- `overlayColor` - Overlay color
- `showOverlay` - Show background overlay (default: `true`)

**Features:**

- ✅ 100% pure CSS, no external icons
- ✅ Portal rendering (mounts to document.body)
- ✅ Backdrop blur for modern effect
- ✅ Smooth animations with cubic-bezier
- ✅ Responsive and accessible

### LanguageSelector

Language selector with dropdown and support for 9 languages. Names are automatically translated to the selected language.

```tsx
import { LanguageSelector, DEFAULT_AVAILABLE_LANGUAGES } from '@khraben/flowui';

<LanguageSelector
  selectedLanguage="en"
  onLanguageChange={(langCode) => console.log(langCode)}
  availableLanguages={DEFAULT_AVAILABLE_LANGUAGES}
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

**Available Languages:**

- `en` - English
- `es` - Spanish / Español
- `pt` - Portuguese / Português
- `fr` - French / Français
- `it` - Italian / Italiano
- `ru` - Russian / Русский
- `ja` - Japanese / 日本語
- `de` - German / Deutsch
- `zh` - Chinese (Simplified) / 简体中文

**Props:**

- `selectedLanguage` - Selected language code (default: `'en'`)
- `onLanguageChange` - Callback when language changes
- `availableLanguages` - Array of language codes to display
- `size` - Size: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `buttonBorder` - Button border
- `buttonHoverBorder` - Hover border
- `dropdownBg` - Dropdown background
- `dropdownBorder` - Dropdown border
- `itemHoverBg` - Item hover background
- `activeItemBg` - Active item background
- `activeItemText` - Active item text color
- `itemText` - Item text color
- `checkIconColor` - Check icon color
- `flagBorder` - Flag border

**Auto Translations:**

Language names are displayed in the selected language. For example:

- If `selectedLanguage="en"`: Spanish, French, German
- If `selectedLanguage="es"`: Español, Francés, Alemán
- If `selectedLanguage="fr"`: Espagnol, Français, Allemand

### Table

Data table with sorting, pagination, and custom styling.

```tsx
import { Table, STATIC_COLORS } from '@khraben/flowui';

<Table
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email' },
  ]}
  data={users}
  onEdit={(user) => console.log(user)}
  onDelete={(user) => console.log(user)}
  headerBg={STATIC_COLORS.DARK_SURFACE}
  headerText={STATIC_COLORS.LIGHT_TEXT}
  rowBg={STATIC_COLORS.DARK_SURFACE_LIGHT}
  rowText={STATIC_COLORS.LIGHT_TEXT}
/>
```

### BaseModal

Modal foundation with gradient headers and animations.

```tsx
import { BaseModal } from '@khraben/flowui';
import { CheckCircle } from 'lucide-react';

<BaseModal
  isOpen={true}
  onClose={() => setOpen(false)}
  title="Success"
  icon={CheckCircle}
  headerBgFrom="#1E90FF"
  headerBgTo="#00D4FF"
>
  <p>Operation completed successfully</p>
</BaseModal>
```

### ConfirmationModal

Pre-built confirmation dialog with async support.

```tsx
import { ConfirmationModal } from '@khraben/flowui';

<ConfirmationModal
  isOpen={true}
  onClose={() => setOpen(false)}
  onConfirm={async () => {
    await deleteUser();
  }}
  message="Are you sure you want to delete this user?"
  confirmText="Delete"
  cancelText="Cancel"
/>
```

### DatePicker

Calendar date picker with range selection.

```tsx
import { DatePicker } from '@khraben/flowui';

<DatePicker
  selected={date}
  onChange={(date) => setDate(date)}
  bg="#313335"
  textColor="#A9B7C6"
  borderColor="#4A5A6A"
  calendarHeaderBg="#1E90FF"
  calendarSelectedBg="#00D4FF"
/>
```

## 🎨 Static Colors

System-level colors for consistent UI states:

```tsx
import { STATIC_COLORS } from '@khraben/flowui';

STATIC_COLORS.DISABLED_BG         // #9CA3AF
STATIC_COLORS.DISABLED_TEXT       // #D1D5DB
STATIC_COLORS.OVERLAY_DARK        // rgba(0, 0, 0, 0.5)
STATIC_COLORS.LIGHT_TEXT          // #E5E7EB
STATIC_COLORS.BORDER_GRAY         // #4B5563
// ... 27 total colors
```

## 🏗️ Project Structure

```
@khraben/flowui/
├── Button
├── Input (+ SelectInput, TimeInput)
├── ActionIcon
├── Loading
├── Table
├── DatePicker
├── LanguageSelector
├── BaseModal
├── ConfirmationModal
└── STATIC_COLORS
```

## 🎯 Usage

1. Import the component
2. Pass ALL colors as individual props
3. No defaults = 100% control

```tsx
import { Button, STATIC_COLORS } from '@khraben/flowui';

// ✅ Full control
<Button
  bg="#1E90FF"
  textColor="#FFFFFF"
  hoverBg="#187BCD"
  disabledBg={STATIC_COLORS.DISABLED_BG}
  disabledTextColor={STATIC_COLORS.DISABLED_TEXT}
>
  Action
</Button>

// ❌ Without colors = no color styles
<Button>Won't have colors</Button>
```

## 📖 Documentation

- [Constants System](docs/CONSTANTS.md) - Exported constants and TypeScript types
- [Publishing Guide](PUBLISHING.md) - How to publish to GitHub Packages

## 🔒 License

UNLICENSED - Private proprietary software. All rights reserved.
