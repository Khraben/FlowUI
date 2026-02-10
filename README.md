# FlowUI

Private React component library with TypeScript and Tailwind CSS.

## ⚠️ Private Package - Authentication Required

This is a **private GitHub Package**. You need a valid GitHub Personal Access Token to install it.

### 1️⃣ Generate GitHub Token

Go to: **GitHub → Settings → Developer settings → Personal access tokens (classic)**

Required scopes:

- ✅ `read:packages`
- ✅ `repo` (because the repository is private)

### 2️⃣ Configure Authentication

Create/update `~/.npmrc` in your home directory:

```
@khraben:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE
```

**OR** login via npm:

```bash
npm login --scope=@khraben --registry=https://npm.pkg.github.com
```

- **Username:** Your GitHub username
- **Password:** Your GitHub token (NOT your GitHub password)
- **Email:** Any valid email

## 📦 Installation

```bash
npm install @khraben/flowui
```

**Note:** Tailwind CSS is required but not enforced as a peer dependency. Make sure you have Tailwind CSS 4+ configured in your project.

## 🎨 Design Philosophy

FlowUI uses a **simplified color system** that dramatically reduces the number of props needed while maintaining full customization flexibility.

### New Color System (v2.0+)

- **3 Base Colors** - `primary`, `secondary`, `accent` (required)
- **3 Extended Colors** - `warning`, `success`, `danger` (when needed)
- **Auto-calculated States** - Hover, focus, disabled states computed automatically
- **Type-Safe** - Full TypeScript support

See [Color System Documentation](docs/COLOR_SYSTEM.md) for complete details.

## 🚀 Features

- ✅ **Simplified Color Props** - Define 3 colors instead of 10+
- ✅ **Auto-calculated States** - Hover, focus, disabled colors computed dynamically
- ✅ **Smart Contrast** - Text colors automatically adjusted for readability
- ✅ **Consistent Theming** - Same color config across all components
- ✅ **Zero Hardcoded Colors** - All colors derived from the 3 base colors
- ✅ **TypeScript Strict** - Complete type safety
- ✅ **Built with tsup** - Optimized ESM + CJS builds
- ✅ **Framer Motion** - Smooth animations in Gallery and other components

## 📚 Components

### Quick Start

```tsx
import { Button, Input, BaseColorConfig } from '@khraben/flowui';

// Define your color palette once
const myColors: BaseColorConfig = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  accent: '#EC4899'
};

// Use it across all components
<Button colors={myColors} variant="primary">Click me</Button>
<Input colors={myColors} label="Username" />
```

### Button

```tsx
import { Button, BaseColorConfig } from '@khraben/flowui';

const colors: BaseColorConfig = {
  primary: '#3B82F6',    // Blue
  secondary: '#8B5CF6',  // Purple
  accent: '#EC4899'      // Pink
};

// Basic usage - hover, disabled, focus states auto-calculated
<Button colors={colors} variant="primary">
  Click me
</Button>

// Custom override when needed
<Button
  colors={colors}
  customBg="#EF4444"
  customTextColor="#FFFFFF"
>
  Danger Button
</Button>
```

**New Props:**

- `colors?: BaseColorConfig` - Color configuration (primary, secondary, accent)
- `customBg?: string` - Override background color
- `customTextColor?: string` - Override text color
- `customBorderColor?: string` - Override border color

**Auto-calculated:**

- Hover colors (lighter/darker based on luminosity)
- Disabled states (reduced opacity)
- Focus rings (adjusted opacity)
- Text contrast (black/white for readability)

### Input

```tsx
import { Input, BaseColorConfig } from '@khraben/flowui';

const colors: BaseColorConfig = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  accent: '#EC4899',
};

<Input
  colors={colors}
  label="Username"
  placeholder="Enter username"
/>

// With custom overrides
<Input
  colors={colors}
  customBg="#F3F4F6"
  customTextColor="#1F2937"
  label="Email"
/>
```

**New Props:**

- `colors?: BaseColorConfig` - Color configuration (primary, secondary, accent)
- `customBg?: string` - Override input background
- `customTextColor?: string` - Override text color
- `customBorderColor?: string` - Override border color

**Auto-calculated:**

- Border and focus colors (from primary)
- Label colors (active and inactive states)
- Icon colors and hover states
- Placeholder color
- Focus shadow

### ActionIcon

Icon button with hover effects and smooth animations.

```tsx
import { ActionIcon, BaseColorConfig } from '@khraben/flowui';
import { Heart } from 'lucide-react';

const colors: BaseColorConfig = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  accent: '#EC4899',
};

<ActionIcon
  icon={Heart}
  onClick={() => console.log('clicked')}
  title="Like"
  size="md"
  colors={colors}
/>

// With custom color override
<ActionIcon
  icon={Heart}
  colors={colors}
  customColor="#EF4444"
  title="Delete"
/>
```

**Props:**

- `icon` - Icon component (e.g., from lucide-react)
- `onClick` - Click callback function
- `title` - Tooltip text
- `size` - Size: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `colors?: BaseColorConfig` - Color configuration
- `customColor?: string` - Override icon color
- `customBg?: string` - Override background color
- `disabled` - Disabled state
- `className` - Additional CSS classes

**Auto-calculated:**

- Hover color (based on icon color)
- Hover background (semi-transparent)
- Disabled state (reduced opacity)

### Loading

Modern loading component with pure CSS animations. Includes 3 variants: spinner, dots, and pulse.

```tsx
import { Loading, BaseColorConfig } from '@khraben/flowui';

const colors: BaseColorConfig = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  accent: '#EC4899',
};

<Loading
  variant="spinner"
  size="md"
  text="Loading..."
  colors={colors}
  showOverlay={true}
/>

// With custom overrides
<Loading
  colors={colors}
  customSpinnerColor="#EF4444"
  customOverlayColor="rgba(0, 0, 0, 0.5)"
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
- `colors?: BaseColorConfig` - Color configuration
- `customSpinnerColor?: string` - Override spinner color
- `customOverlayColor?: string` - Override overlay color
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
import { LanguageSelector, DEFAULT_AVAILABLE_LANGUAGES, BaseColorConfig } from '@khraben/flowui';

const colors: BaseColorConfig = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  accent: '#EC4899',
};

<LanguageSelector
  selectedLanguage="en"
  onLanguageChange={(langCode) => console.log(langCode)}
  availableLanguages={DEFAULT_AVAILABLE_LANGUAGES}
  size="md"
  colors={colors}
/>

// With custom overrides
<LanguageSelector
  colors={colors}
  customBgColor="#F3F4F6"
  customBorderColor="#D1D5DB"
  customTextColor="#1F2937"
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
- `colors?: BaseColorConfig` - Color configuration
- `customBorderColor?: string` - Override button border
- `customBgColor?: string` - Override button background
- `customTextColor?: string` - Override text color

**Auto-calculated:**

- Dropdown background (from secondary)
- Item hover states
- Active item background
- Check icon color (from primary)
- Border hover states

**Auto Translations:**

Language names are displayed in the selected language. For example:

- If `selectedLanguage="en"`: Spanish, French, German
- If `selectedLanguage="es"`: Español, Francés, Alemán
- If `selectedLanguage="fr"`: Espagnol, Français, Allemand

### Table

Data table with sorting, pagination, and custom styling.

```tsx
import { Table, BaseColorConfig } from '@khraben/flowui';

const colors: BaseColorConfig = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  accent: '#EC4899',
};

<Table
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email' },
  ]}
  data={users}
  onEdit={(user) => console.log(user)}
  onDelete={(user) => console.log(user)}
  colors={colors}
/>

// With custom overrides
<Table
  columns={columns}
  data={data}
  colors={colors}
  customHeaderBg="#1F2937"
  customRowBg="#111827"
/>
```

**Props:**

- `columns` - Array of column definitions
- `data` - Array of data objects
- `onEdit?` - Edit callback function
- `onDelete?` - Delete callback function
- `colors?: BaseColorConfig` - Color configuration
- `customHeaderBg?: string` - Override header background
- `customRowBg?: string` - Override row background

**Auto-calculated:**

- Header text color (based on contrast)
- Row hover states
- Border colors
- Action icon colors
- Sort indicator colors

### BaseModal

Modal foundation with gradient headers and animations.

```tsx
import { BaseModal, ExtendedColorConfig } from '@khraben/flowui';
import { CheckCircle } from 'lucide-react';

const colors: ExtendedColorConfig = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  accent: '#EC4899',
  warning: '#F59E0B',
  success: '#10B981',
  danger: '#EF4444',
};

<BaseModal
  isOpen={true}
  onClose={() => setOpen(false)}
  title="Success"
  icon={CheckCircle}
  colors={colors}
>
  <p>Operation completed successfully</p>
</BaseModal>

// With custom overrides
<BaseModal
  colors={colors}
  customOverlayBg="rgba(0, 0, 0, 0.8)"
  customModalBg="#1F2937"
  title="Custom Modal"
>
  <p>Content here</p>
</BaseModal>
```

**Props:**

- `isOpen` - Modal visibility state
- `onClose` - Close callback
- `title` - Modal title
- `icon?` - Header icon component
- `colors?: ExtendedColorConfig` - Color configuration
- `customOverlayBg?: string` - Override overlay background
- `customModalBg?: string` - Override modal background
- `hasUnsavedChanges?` - Show confirmation on close

**Auto-calculated:**

- Header gradient (primary to secondary)
- Header text color (based on contrast)
- Close button states
- Stats section colors
- Scrollbar styling
- Confirmation dialog colors

### ConfirmationModal

Pre-built confirmation dialog with async support.

```tsx
import { ConfirmationModal, ExtendedColorConfig } from '@khraben/flowui';

const colors: ExtendedColorConfig = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  accent: '#EC4899',
  warning: '#F59E0B',
  success: '#10B981',
  danger: '#EF4444',
};

<ConfirmationModal
  isOpen={true}
  onClose={() => setOpen(false)}
  onConfirm={async () => {
    await deleteUser();
  }}
  message="Are you sure you want to delete this user?"
  confirmText="Delete"
  cancelText="Cancel"
  colors={colors}
/>;
```

**Props:**

- `isOpen` - Modal visibility state
- `onClose` - Close callback
- `onConfirm` - Confirm callback (can be async)
- `message` - Confirmation message
- `confirmText?` - Confirm button text
- `cancelText?` - Cancel button text
- `colors?: ExtendedColorConfig` - Color configuration
- `loadingContent?` - Custom loading component

**Auto-calculated:**

All colors are automatically managed through the BaseModal component.

### SideBar

Collapsible navigation sidebar with top and bottom sections.

```tsx
import { SideBar } from '@khraben/flowui';
import { Home, Users, Settings, LogOut } from 'lucide-react';

const menuItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <Home />,
    onClick: () => router.push('/'),
    section: 'top', // Optional: 'top' | 'bottom'
  },
  {
    id: 'users',
    label: 'Users',
    icon: <Users />,
    onClick: () => router.push('/users'),
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings />,
    onClick: () => router.push('/settings'),
    section: 'bottom', // Will be placed at bottom
  },
];

const logoutButton = {
  label: 'Logout',
  icon: <LogOut />,
  onClick: () => handleLogout(),
};

<SideBar
  menuItems={menuItems}
  logoutButton={logoutButton}
  isOpen={isOpen}
  onToggle={(open) => setIsOpen(open)}
  backgroundColor="var(--color-primary)"
  textColor="var(--color-text-light)"
  hoverBackgroundColor="var(--color-hover-surface)"
  logoutTextColor="var(--color-error-light)"
  logoutHoverBackgroundColor="var(--color-hover-error)"
  logoutHoverTextColor="var(--color-error)"
/>;
```

### NavBar

Modern responsive navigation bar with logo, menu items, and action buttons.

```tsx
import { NavBar } from '@khraben/flowui';
import { ShoppingCart, User } from 'lucide-react';

const logo = {
  text: 'MyApp',
  // Or use an image
  // src: '/logo.png',
  // alt: 'MyApp Logo',
  href: '/',
};

const menuItems = [
  {
    id: 'home',
    label: 'Home',
    onClick: () => router.push('/'),
    isActive: pathname === '/',
  },
  {
    id: 'products',
    label: 'Products',
    href: '/products',
    isActive: pathname === '/products',
  },
  {
    id: 'about',
    label: 'About',
    onClick: () => router.push('/about'),
  },
];

const actions = [
  {
    id: 'cart',
    label: 'Cart',
    icon: <ShoppingCart size={16} />,
    onClick: () => router.push('/cart'),
    variant: 'outline',
  },
  {
    id: 'login',
    label: 'Login',
    onClick: () => router.push('/login'),
    variant: 'secondary',
  },
  {
    id: 'signup',
    label: 'Sign Up',
    onClick: () => router.push('/signup'),
    variant: 'primary',
  },
];

<NavBar
  logo={logo}
  menuItems={menuItems}
  actions={actions}
  backgroundColor="#FFFFFF"
  textColor="#374151"
  activeTextColor="#1E90FF"
  hoverTextColor="#1E90FF"
  height="4rem"
/>;
```

**Props:**

- `logo?` - Logo configuration (text, image, href, onClick)
- `menuItems?` - Array of navigation links
- `actions?` - Array of action buttons (login, signup, etc.)
- `backgroundColor?` - NavBar background color
- `textColor?` - Default text color
- `activeTextColor?` - Active menu item color
- `hoverTextColor?` - Hover state text color
- `height?` - NavBar height (default: 4rem)
- `showMobileMenu?` - Controlled mobile menu state
- `onMobileMenuToggle?` - Mobile menu toggle handler

### Gallery

Responsive masonry gallery with lazy loading, infinite scroll, and smooth animations.

```tsx
import { Gallery } from '@khraben/flowui';

const images = [
  {
    id: '1',
    src: 'https://example.com/image1.jpg',
    alt: 'Beautiful landscape',
    width: 800,
    height: 600,
  },
  {
    id: '2',
    src: 'https://example.com/image2.jpg',
    alt: 'City skyline',
    width: 600,
    height: 800,
  },
  // ... more images
];

<Gallery
  images={images}
  batchSize={12}
  enableAnimation={true}
  colors={{
    primary: '#1E90FF',
    secondary: '#2C3135',
    accent: '#00D4FF',
  }}
/>;
```

**Props:**

- `images` - Array of image objects (id, src, alt, width, height)
- `batchSize?` - Number of images to load per batch (default: 12)
- `enableAnimation?` - Enable scroll animations (default: true)
- `className?` - Additional CSS classes
- `colors?` - BaseColorConfig for dynamic theming
- `customBorderColor?` - Override border color
- `customSkeletonBg?` - Override skeleton background
- `customOverlayColor?` - Override hover overlay color

**Features:**

- 📱 Responsive layout (1/2/3 columns)
- 🎨 CSS columns masonry layout
- 🖼️ Maintains original aspect ratios
- ⚡ Lazy loading with IntersectionObserver
- 🔄 Infinite scroll support
- ✨ Framer Motion animations
- 🎯 Hover effects with zoom and overlay

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
/>;
```

## 🎨 Static Colors

System-level colors for consistent UI states:

```tsx
import { STATIC_COLORS } from '@khraben/flowui';

STATIC_COLORS.DISABLED_BG; // #9CA3AF
STATIC_COLORS.DISABLED_TEXT; // #D1D5DB
STATIC_COLORS.OVERLAY_DARK; // rgba(0, 0, 0, 0.5)
STATIC_COLORS.LIGHT_TEXT; // #E5E7EB
STATIC_COLORS.BORDER_GRAY; // #4B5563
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
├── SideBar
├── NavBar
├── Gallery
└── Color System (BaseColorConfig, ExtendedColorConfig)
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
