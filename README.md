# FlowUI

> Modern React component library built with TypeScript and Tailwind CSS

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)

## 📦 Installation

```bash
npm install @khraben/flowui
```

### Peer Dependencies

FlowUI requires the following peer dependencies:

```bash
npm install react react-dom tailwindcss
```

**Optional dependencies** (only if using DatePicker):

```bash
npm install react-datepicker date-fns
```

**For icons** (recommended):

```bash
npm install lucide-react
```

## 🚀 Quick Start

```tsx
import { Button, Input, DatePicker } from '@khraben/flowui';
import { BUTTON_VARIANTS, INPUT_VARIANTS } from '@khraben/flowui';

function App() {
  return (
    <div>
      <Button variant={BUTTON_VARIANTS.PRIMARY} size="md">
        Click Me
      </Button>

      <Input variant={INPUT_VARIANTS.TEXT} label="Email" placeholder="Enter your email" />

      <DatePicker size="md" placeholderText="Select date" />
    </div>
  );
}
```

## 📚 Components

### Button

Versatile button component with multiple variants and states.

```tsx
import { Button } from '@khraben/flowui';
import { BUTTON_VARIANTS, BUTTON_SIZES, BUTTON_ROUNDED_OPTIONS } from '@khraben/flowui';
import { Download } from 'lucide-react';

<Button
  variant={BUTTON_VARIANTS.PRIMARY}
  size={BUTTON_SIZES.MEDIUM}
  rounded={BUTTON_ROUNDED_OPTIONS.MEDIUM}
  icon={<Download />}
  iconPosition="left"
  isLoading={false}
  loadingText="Processing..."
  fullWidth={false}
  onClick={() => console.log('Clicked')}
>
  Download File
</Button>;
```

**Props:**

| Prop           | Type                | Default     | Description          |
| -------------- | ------------------- | ----------- | -------------------- |
| `variant`      | `string`            | `'primary'` | Button style variant |
| `size`         | `string`            | `'md'`      | Button size          |
| `rounded`      | `string`            | `'md'`      | Border radius        |
| `icon`         | `ReactNode`         | -           | Icon element         |
| `iconPosition` | `'left' \| 'right'` | `'left'`    | Icon position        |
| `isLoading`    | `boolean`           | `false`     | Loading state        |
| `loadingText`  | `string`            | -           | Text during loading  |
| `fullWidth`    | `boolean`           | `false`     | Full width button    |

**Variants:** `primary`, `secondary`, `success`, `danger`, `close`, `clear`, `icon`

**Sizes:** `sm`, `md`, `lg`

**Color Customization:**

```tsx
<Button
  variant="primary"
  bg="bg-purple-600"
  textColor="text-white"
  hoverBg="bg-purple-700"
  borderColor="border-purple-600"
/>
```

---

### Input

Flexible input component with multiple variants and features.

```tsx
import { Input } from '@khraben/flowui';
import { INPUT_VARIANTS, INPUT_SIZES } from '@khraben/flowui';
import { Search } from 'lucide-react';

<Input
  variant={INPUT_VARIANTS.TEXT}
  size={INPUT_SIZES.MEDIUM}
  label="Username"
  placeholder="Enter username"
  onClear={() => setValue('')}
  fullWidth
/>;
```

**Props:**

| Prop                 | Type        | Default  | Description                             |
| -------------------- | ----------- | -------- | --------------------------------------- |
| `variant`            | `string`    | `'text'` | Input type variant                      |
| `size`               | `string`    | `'md'`   | Input size                              |
| `label`              | `string`    | -        | Input label                             |
| `onClear`            | `function`  | -        | Clear button callback                   |
| `showPasswordToggle` | `boolean`   | `true`   | Show password toggle (password variant) |
| `searchIcon`         | `ReactNode` | -        | Custom search icon                      |
| `clearIcon`          | `ReactNode` | -        | Custom clear icon                       |
| `fullWidth`          | `boolean`   | `true`   | Full width input                        |

**Variants:** `text`, `number`, `search`, `select`, `password`, `time`, `date`

**Sizes:** `sm`, `md`, `lg`

---

### SelectInput

Styled select dropdown component.

```tsx
import { SelectInput } from '@khraben/flowui';

<SelectInput size="md" label="Country" fullWidth onChange={(e) => setCountry(e.target.value)}>
  <option value="">Select a country</option>
  <option value="us">United States</option>
  <option value="mx">Mexico</option>
  <option value="ca">Canada</option>
</SelectInput>;
```

---

### TimeInput

Time picker with AM/PM support.

```tsx
import { TimeInput } from '@khraben/flowui';

<TimeInput size="md" label="Select Time" placeholder="HH:MM AM/PM" fullWidth />;
```

---

### DatePicker

Advanced date picker with locale support and customizable calendar.

```tsx
import { DatePicker } from '@khraben/flowui';
import { DATEPICKER_SIZES } from '@khraben/flowui';
import { es } from 'date-fns/locale';

<DatePicker
  size={DATEPICKER_SIZES.MEDIUM}
  selected={date}
  onChange={(newDate) => setDate(newDate)}
  placeholderText="Select date"
  dateFormat="dd/MM/yyyy"
  locale={es}
  minDate={new Date()}
  showMonthYearPicker={false}
  fullWidth={false}
/>;
```

**Props:**

| Prop                  | Type           | Default        | Description             |
| --------------------- | -------------- | -------------- | ----------------------- |
| `size`                | `string`       | `'md'`         | DatePicker size         |
| `selected`            | `Date \| null` | -              | Selected date           |
| `onChange`            | `function`     | -              | Date change callback    |
| `dateFormat`          | `string`       | `'MM/dd/yyyy'` | Date format             |
| `locale`              | `Locale`       | `enUS`         | date-fns locale         |
| `minDate`             | `Date \| null` | -              | Minimum selectable date |
| `maxDate`             | `Date \| null` | -              | Maximum selectable date |
| `showMonthYearPicker` | `boolean`      | `false`        | Month/year picker mode  |
| `fullWidth`           | `boolean`      | `false`        | Full width picker       |

**Calendar Color Customization:**

```tsx
<DatePicker
  calendarBorderColor="border-indigo-200"
  calendarHeaderBg="bg-indigo-600"
  calendarHeaderText="text-white"
  calendarSelectedBg="bg-indigo-500"
  calendarSelectedText="text-white"
  calendarDayHoverBg="hover:bg-indigo-100"
/>
```

## 🎨 Styling

FlowUI uses Tailwind CSS 4. Make sure your project has Tailwind configured:

```js
// tailwind.config.js
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@khraben/flowui/**/*.{js,mjs}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Custom Colors

All components support custom color props:

```tsx
<Button
  bg="bg-custom-primary"
  textColor="text-custom-text"
  hoverBg="bg-custom-hover"
  borderColor="border-custom-border"
/>
```

## 📖 Constants

Import constants for type-safe props:

```tsx
import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_ICON_POSITIONS,
  BUTTON_ROUNDED_OPTIONS,
  INPUT_VARIANTS,
  INPUT_SIZES,
  DATEPICKER_SIZES,
} from '@khraben/flowui';
```

**Available Constants:**

- `BUTTON_VARIANTS`: `PRIMARY`, `SECONDARY`, `SUCCESS`, `DANGER`, `CLOSE`, `CLEAR`, `ICON`
- `BUTTON_SIZES`: `SMALL`, `MEDIUM`, `LARGE`
- `BUTTON_ICON_POSITIONS`: `LEFT`, `RIGHT`
- `BUTTON_ROUNDED_OPTIONS`: `NONE`, `SM`, `MD`, `LG`, `FULL`
- `INPUT_VARIANTS`: `TEXT`, `NUMBER`, `SEARCH`, `SELECT`, `PASSWORD`, `TIME`, `DATE`
- `INPUT_SIZES`: `SMALL`, `MEDIUM`, `LARGE`
- `DATEPICKER_SIZES`: `SMALL`, `MEDIUM`, `LARGE`

## 🔧 TypeScript

FlowUI is built with TypeScript and provides full type definitions:

```tsx
import type { ButtonProps, InputProps, DatePickerProps } from '@khraben/flowui';

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## 🌐 Internationalization

DatePicker supports multiple locales via date-fns:

```tsx
import { DatePicker } from '@khraben/flowui';
import { es, fr, de } from 'date-fns/locale';

// Spanish
<DatePicker locale={es} dateFormat="dd/MM/yyyy" />

// French
<DatePicker locale={fr} dateFormat="dd/MM/yyyy" />

// German
<DatePicker locale={de} dateFormat="dd.MM.yyyy" />
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/Khraben/FlowUI)
- [Issue Tracker](https://github.com/Khraben/FlowUI/issues)
- [Changelog](CHANGELOG.md)

## 👨‍💻 Author

**Khraben**

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
