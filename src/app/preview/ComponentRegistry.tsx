import { ComponentDemo } from '@/types/component';
import {
  Button,
  Input,
  SelectInput,
  TimeInput,
  DatePicker,
  LanguageSelector,
  ActionIcon,
  Table,
} from '@/app/components';
import type { TableColumn } from '@/app/components/Table';
import { COMPONENT_CATEGORIES, PREVIEW_COLORS } from '@/app/constants';
import {
  Check,
  X,
  Trash2,
  Search,
  Download,
  Upload,
  Plus,
  Minus,
  Eye,
  EyeOff,
  ChevronDown,
  Calendar,
  Heart,
  Star,
  Share2,
  Bookmark,
  Edit,
  Copy,
} from 'lucide-react';
import { useState } from 'react';

const SearchInputDemo = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Input
      variant="search"
      label="Search"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onClear={() => setSearchValue('')}
      searchIcon={<Search size={16} />}
      clearIcon={<X size={14} />}
      placeholder=" "
      bg={PREVIEW_COLORS.SURFACE_DARK}
      textColor={PREVIEW_COLORS.TEXT_LIGHT}
      borderColor={PREVIEW_COLORS.BORDER}
      focusBorderColor={PREVIEW_COLORS.ACCENT}
      focusShadow={PREVIEW_COLORS.FOCUS_SHADOW}
      labelColor={PREVIEW_COLORS.DISABLED_TEXT}
      labelActiveColor={PREVIEW_COLORS.ACCENT}
      iconColor={PREVIEW_COLORS.ACCENT}
      iconHoverColor={PREVIEW_COLORS.ACCENT_HOVER}
      placeholderColor={PREVIEW_COLORS.TRANSPARENT}
    />
  );
};

const TimeInputDemo = () => {
  const [timeValue, setTimeValue] = useState('');
  return (
    <TimeInput
      label="Select Time"
      value={timeValue}
      onChange={(e) => setTimeValue(e.target.value)}
      startHour={9}
      endHour={17}
      interval={30}
      selectIcon={<ChevronDown size={16} />}
      bg={PREVIEW_COLORS.SURFACE_DARK}
      textColor={PREVIEW_COLORS.TEXT_LIGHT}
      borderColor={PREVIEW_COLORS.BORDER}
      focusBorderColor={PREVIEW_COLORS.ACCENT}
      focusShadow={PREVIEW_COLORS.FOCUS_SHADOW}
      labelColor={PREVIEW_COLORS.DISABLED_TEXT}
      labelActiveColor={PREVIEW_COLORS.ACCENT}
      iconColor={PREVIEW_COLORS.ACCENT}
      iconHoverColor={PREVIEW_COLORS.ACCENT_HOVER}
      placeholderColor={PREVIEW_COLORS.TRANSPARENT}
    />
  );
};

export const componentRegistry: ComponentDemo[] = [
  {
    id: 'button-primary',
    name: 'Primary Button',
    description: 'Main call-to-action button with primary styling',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: Button,
    props: {
      variant: 'primary',
      children: 'Primary Action',
      bg: PREVIEW_COLORS.PRIMARY,
      textColor: PREVIEW_COLORS.WHITE,
      hoverBg: PREVIEW_COLORS.PRIMARY_HOVER,
      disabledBg: PREVIEW_COLORS.DISABLED_BG,
      disabledTextColor: PREVIEW_COLORS.DISABLED_TEXT,
      focusRing: PREVIEW_COLORS.PRIMARY,
    },
  },
  {
    id: 'button-primary-icon-left',
    name: 'Primary Button with Icon Left',
    description: 'Primary button with icon on the left side',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: Button,
    props: {
      variant: 'primary',
      icon: <Download size={16} />,
      iconPosition: 'left',
      children: 'Download',
      bg: PREVIEW_COLORS.PRIMARY,
      textColor: PREVIEW_COLORS.WHITE,
      hoverBg: PREVIEW_COLORS.PRIMARY_HOVER,
      disabledBg: PREVIEW_COLORS.DISABLED_BG,
      disabledTextColor: PREVIEW_COLORS.DISABLED_TEXT,
      focusRing: PREVIEW_COLORS.PRIMARY,
    },
  },
  {
    id: 'button-primary-icon-right',
    name: 'Primary Button with Icon Right',
    description: 'Primary button with icon on the right side',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: Button,
    props: {
      variant: 'primary',
      icon: <Upload size={16} />,
      iconPosition: 'right',
      children: 'Upload',
      bg: PREVIEW_COLORS.PRIMARY,
      textColor: PREVIEW_COLORS.WHITE,
      hoverBg: PREVIEW_COLORS.PRIMARY_HOVER,
      disabledBg: PREVIEW_COLORS.DISABLED_BG,
      disabledTextColor: PREVIEW_COLORS.DISABLED_TEXT,
      focusRing: PREVIEW_COLORS.PRIMARY,
    },
  },
  {
    id: 'button-secondary',
    name: 'Secondary Button',
    description: 'Secondary action button with outlined style',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: Button,
    props: {
      variant: 'secondary',
      children: 'Secondary Action',
      bg: PREVIEW_COLORS.TRANSPARENT,
      textColor: PREVIEW_COLORS.ACCENT,
      borderColor: PREVIEW_COLORS.ACCENT,
      hoverBg: PREVIEW_COLORS.ACCENT,
      hoverTextColor: PREVIEW_COLORS.BLACK,
      disabledBg: PREVIEW_COLORS.TRANSPARENT,
      disabledTextColor: PREVIEW_COLORS.DISABLED_TEXT,
      disabledBorderColor: PREVIEW_COLORS.DISABLED_TEXT,
      focusRing: PREVIEW_COLORS.ACCENT,
    },
  },
  {
    id: 'button-success',
    name: 'Success Button',
    description: 'Success action button for positive confirmations',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: Button,
    props: {
      variant: 'success',
      icon: <Check size={16} />,
      iconPosition: 'left',
      children: 'Confirm',
      bg: PREVIEW_COLORS.SUCCESS,
      textColor: PREVIEW_COLORS.BLACK,
      hoverBg: PREVIEW_COLORS.SUCCESS_HOVER,
      disabledBg: PREVIEW_COLORS.DISABLED_BG,
      disabledTextColor: PREVIEW_COLORS.DISABLED_TEXT,
      focusRing: PREVIEW_COLORS.SUCCESS,
    },
  },
  {
    id: 'button-danger',
    name: 'Danger Button',
    description: 'Danger button for destructive actions',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: Button,
    props: {
      variant: 'danger',
      icon: <Trash2 size={16} />,
      iconPosition: 'left',
      children: 'Delete',
      bg: PREVIEW_COLORS.DANGER,
      textColor: PREVIEW_COLORS.WHITE,
      hoverBg: PREVIEW_COLORS.DANGER_HOVER,
      disabledBg: PREVIEW_COLORS.DISABLED_BG,
      disabledTextColor: PREVIEW_COLORS.DISABLED_TEXT,
      focusRing: PREVIEW_COLORS.DANGER,
    },
  },
  {
    id: 'button-close',
    name: 'Close Button',
    description: 'Circular close button for modals and dialogs',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: Button,
    props: {
      variant: 'close',
      children: <X size={20} />,
      bg: PREVIEW_COLORS.WHITE_ALPHA_20,
      textColor: PREVIEW_COLORS.WHITE,
      hoverBg: PREVIEW_COLORS.WHITE_ALPHA_30,
      disabledBg: PREVIEW_COLORS.DISABLED_BG,
      disabledTextColor: PREVIEW_COLORS.DISABLED_TEXT,
      focusRing: PREVIEW_COLORS.WHITE,
    },
  },
  {
    id: 'button-icon',
    name: 'Icon Button',
    description: 'Icon-only button for compact actions',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: () => (
      <div className="flex gap-2">
        <Button
          variant="icon"
          size="sm"
          bg={PREVIEW_COLORS.TRANSPARENT}
          textColor={PREVIEW_COLORS.PRIMARY}
          borderColor={PREVIEW_COLORS.PRIMARY}
          hoverBg={PREVIEW_COLORS.PRIMARY}
          hoverTextColor={PREVIEW_COLORS.WHITE}
          disabledBg={PREVIEW_COLORS.TRANSPARENT}
          disabledTextColor={PREVIEW_COLORS.DISABLED_TEXT}
          disabledBorderColor={PREVIEW_COLORS.DISABLED_TEXT}
          focusRing={PREVIEW_COLORS.PRIMARY}
        >
          <Plus size={14} />
        </Button>
        <Button
          variant="icon"
          size="md"
          bg={PREVIEW_COLORS.TRANSPARENT}
          textColor={PREVIEW_COLORS.PRIMARY}
          borderColor={PREVIEW_COLORS.PRIMARY}
          hoverBg={PREVIEW_COLORS.PRIMARY}
          hoverTextColor={PREVIEW_COLORS.WHITE}
          disabledBg={PREVIEW_COLORS.TRANSPARENT}
          disabledTextColor={PREVIEW_COLORS.DISABLED_TEXT}
          disabledBorderColor={PREVIEW_COLORS.DISABLED_TEXT}
          focusRing={PREVIEW_COLORS.PRIMARY}
        >
          <Search size={16} />
        </Button>
        <Button
          variant="icon"
          size="lg"
          bg={PREVIEW_COLORS.TRANSPARENT}
          textColor={PREVIEW_COLORS.PRIMARY}
          borderColor={PREVIEW_COLORS.PRIMARY}
          hoverBg={PREVIEW_COLORS.PRIMARY}
          hoverTextColor={PREVIEW_COLORS.WHITE}
          disabledBg={PREVIEW_COLORS.TRANSPARENT}
          disabledTextColor={PREVIEW_COLORS.DISABLED_TEXT}
          disabledBorderColor={PREVIEW_COLORS.DISABLED_TEXT}
          focusRing={PREVIEW_COLORS.PRIMARY}
        >
          <Minus size={18} />
        </Button>
      </div>
    ),
  },
  {
    id: 'action-icon-default',
    name: 'Action Icon',
    description: 'Icon button with hover effects and animations',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: function ActionIconDefault() {
      return (
        <div className="flex gap-4 items-center">
          <ActionIcon
            icon={Heart}
            title="Like"
            color={PREVIEW_COLORS.DANGER}
            hoverColor={PREVIEW_COLORS.DANGER_HOVER}
            hoverBg="hover:bg-red-600/10"
          />
          <ActionIcon
            icon={Star}
            title="Favorite"
            color={PREVIEW_COLORS.ACCENT}
            hoverColor={PREVIEW_COLORS.ACCENT_HOVER}
            hoverBg="hover:bg-yellow-600/10"
          />
          <ActionIcon
            icon={Share2}
            title="Share"
            color={PREVIEW_COLORS.PRIMARY}
            hoverColor={PREVIEW_COLORS.PRIMARY_HOVER}
            hoverBg="hover:bg-blue-600/10"
          />
          <ActionIcon
            icon={Bookmark}
            title="Bookmark"
            color={PREVIEW_COLORS.ACCENT}
            hoverColor={PREVIEW_COLORS.ACCENT_HOVER}
            hoverBg="hover:bg-purple-600/10"
          />
        </div>
      );
    },
  },
  {
    id: 'action-icon-sizes',
    name: 'Action Icon Sizes',
    description: 'Different sizes: sm, md, lg',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: function ActionIconSizes() {
      return (
        <div className="flex gap-4 items-center">
          <ActionIcon icon={Edit} title="Edit Small" size="sm" />
          <ActionIcon icon={Copy} title="Copy Medium" size="md" />
          <ActionIcon icon={Trash2} title="Delete Large" size="lg" color={PREVIEW_COLORS.DANGER} />
        </div>
      );
    },
  },
  {
    id: 'button-sizes',
    name: 'Button Sizes',
    description: 'All available button sizes: small, medium, large',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: () => (
      <div className="flex items-center gap-3 flex-wrap">
        <Button
          variant="primary"
          size="sm"
          bg={PREVIEW_COLORS.PRIMARY}
          textColor={PREVIEW_COLORS.WHITE}
          hoverBg={PREVIEW_COLORS.PRIMARY_HOVER}
          disabledBg={PREVIEW_COLORS.DISABLED_BG}
          disabledTextColor={PREVIEW_COLORS.DISABLED_TEXT}
          focusRing={PREVIEW_COLORS.PRIMARY}
        >
          Small
        </Button>
        <Button
          variant="primary"
          size="md"
          bg={PREVIEW_COLORS.PRIMARY}
          textColor={PREVIEW_COLORS.WHITE}
          hoverBg={PREVIEW_COLORS.PRIMARY_HOVER}
          disabledBg={PREVIEW_COLORS.DISABLED_BG}
          disabledTextColor={PREVIEW_COLORS.DISABLED_TEXT}
          focusRing={PREVIEW_COLORS.PRIMARY}
        >
          Medium
        </Button>
        <Button
          variant="primary"
          size="lg"
          bg={PREVIEW_COLORS.PRIMARY}
          textColor={PREVIEW_COLORS.WHITE}
          hoverBg={PREVIEW_COLORS.PRIMARY_HOVER}
          disabledBg={PREVIEW_COLORS.DISABLED_BG}
          disabledTextColor={PREVIEW_COLORS.DISABLED_TEXT}
          focusRing={PREVIEW_COLORS.PRIMARY}
        >
          Large
        </Button>
      </div>
    ),
  },
  {
    id: 'button-loading',
    name: 'Loading Button',
    description: 'Button with loading state and spinner',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: () => (
      <div className="flex gap-3">
        <Button
          variant="primary"
          isLoading
          bg={PREVIEW_COLORS.PRIMARY}
          textColor={PREVIEW_COLORS.WHITE}
          hoverBg={PREVIEW_COLORS.PRIMARY_HOVER}
          disabledBg={PREVIEW_COLORS.DISABLED_BG}
          disabledTextColor={PREVIEW_COLORS.DISABLED_TEXT}
          focusRing={PREVIEW_COLORS.PRIMARY}
        >
          Loading...
        </Button>
        <Button
          variant="success"
          isLoading
          bg={PREVIEW_COLORS.SUCCESS}
          textColor={PREVIEW_COLORS.BLACK}
          hoverBg={PREVIEW_COLORS.SUCCESS_HOVER}
          disabledBg={PREVIEW_COLORS.DISABLED_BG}
          disabledTextColor={PREVIEW_COLORS.DISABLED_TEXT}
          focusRing={PREVIEW_COLORS.SUCCESS}
        >
          Processing
        </Button>
      </div>
    ),
  },
  {
    id: 'input-text',
    name: 'Text Input',
    description: 'Standard text input with floating label',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: () => (
      <Input
        variant="text"
        label="Full Name"
        placeholder=" "
        bg={PREVIEW_COLORS.SURFACE_DARK}
        textColor={PREVIEW_COLORS.TEXT_LIGHT}
        borderColor={PREVIEW_COLORS.BORDER}
        focusBorderColor={PREVIEW_COLORS.ACCENT}
        focusShadow={PREVIEW_COLORS.FOCUS_SHADOW}
        labelColor={PREVIEW_COLORS.DISABLED_TEXT}
        labelActiveColor={PREVIEW_COLORS.ACCENT}
        iconColor={PREVIEW_COLORS.ACCENT}
        iconHoverColor={PREVIEW_COLORS.ACCENT_HOVER}
        placeholderColor={PREVIEW_COLORS.TRANSPARENT}
      />
    ),
  },
  {
    id: 'input-number',
    name: 'Number Input',
    description: 'Numeric input field with floating label',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: () => (
      <Input
        variant="number"
        label="Age"
        placeholder=" "
        bg={PREVIEW_COLORS.SURFACE_DARK}
        textColor={PREVIEW_COLORS.TEXT_LIGHT}
        borderColor={PREVIEW_COLORS.BORDER}
        focusBorderColor={PREVIEW_COLORS.ACCENT}
        focusShadow={PREVIEW_COLORS.FOCUS_SHADOW}
        labelColor={PREVIEW_COLORS.DISABLED_TEXT}
        labelActiveColor={PREVIEW_COLORS.ACCENT}
        iconColor={PREVIEW_COLORS.ACCENT}
        iconHoverColor={PREVIEW_COLORS.ACCENT_HOVER}
        placeholderColor={PREVIEW_COLORS.TRANSPARENT}
      />
    ),
  },
  {
    id: 'input-search',
    name: 'Search Input',
    description: 'Search input with icon and clear button',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: SearchInputDemo,
  },
  {
    id: 'input-password',
    name: 'Password Input',
    description: 'Password input with toggle visibility',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: () => (
      <Input
        variant="password"
        label="Password"
        passwordIcon={<Eye size={16} />}
        passwordIconHidden={<EyeOff size={16} />}
        placeholder=" "
        bg={PREVIEW_COLORS.SURFACE_DARK}
        textColor={PREVIEW_COLORS.TEXT_LIGHT}
        borderColor={PREVIEW_COLORS.BORDER}
        focusBorderColor={PREVIEW_COLORS.ACCENT}
        focusShadow={PREVIEW_COLORS.FOCUS_SHADOW}
        labelColor={PREVIEW_COLORS.DISABLED_TEXT}
        labelActiveColor={PREVIEW_COLORS.ACCENT}
        iconColor={PREVIEW_COLORS.ACCENT}
        iconHoverColor={PREVIEW_COLORS.ACCENT_HOVER}
        placeholderColor={PREVIEW_COLORS.TRANSPARENT}
      />
    ),
  },
  {
    id: 'input-select',
    name: 'Select Input',
    description: 'Dropdown select with floating label',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: () => (
      <SelectInput
        label="Country"
        selectIcon={<ChevronDown size={16} />}
        defaultValue=""
        bg={PREVIEW_COLORS.SURFACE_DARK}
        textColor={PREVIEW_COLORS.TEXT_LIGHT}
        borderColor={PREVIEW_COLORS.BORDER}
        focusBorderColor={PREVIEW_COLORS.ACCENT}
        focusShadow={PREVIEW_COLORS.FOCUS_SHADOW}
        labelColor={PREVIEW_COLORS.DISABLED_TEXT}
        labelActiveColor={PREVIEW_COLORS.ACCENT}
        iconColor={PREVIEW_COLORS.ACCENT}
        iconHoverColor={PREVIEW_COLORS.ACCENT_HOVER}
        placeholderColor={PREVIEW_COLORS.TRANSPARENT}
      >
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </SelectInput>
    ),
  },
  {
    id: 'input-time',
    name: 'Time Input',
    description: 'Time picker with customizable range',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: TimeInputDemo,
  },
  {
    id: 'input-sizes',
    name: 'Input Sizes',
    description: 'All available input sizes: small, medium, large',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: () => (
      <div className="flex flex-col gap-4 w-full">
        <Input
          variant="text"
          size="sm"
          label="Small"
          placeholder=" "
          bg={PREVIEW_COLORS.SURFACE_DARK}
          textColor={PREVIEW_COLORS.TEXT_LIGHT}
          borderColor={PREVIEW_COLORS.BORDER}
          focusBorderColor={PREVIEW_COLORS.ACCENT}
          focusShadow={PREVIEW_COLORS.FOCUS_SHADOW}
          labelColor={PREVIEW_COLORS.DISABLED_TEXT}
          labelActiveColor={PREVIEW_COLORS.ACCENT}
          iconColor={PREVIEW_COLORS.ACCENT}
          iconHoverColor={PREVIEW_COLORS.ACCENT_HOVER}
          placeholderColor={PREVIEW_COLORS.TRANSPARENT}
        />
        <Input
          variant="text"
          size="md"
          label="Medium"
          placeholder=" "
          bg={PREVIEW_COLORS.SURFACE_DARK}
          textColor={PREVIEW_COLORS.TEXT_LIGHT}
          borderColor={PREVIEW_COLORS.BORDER}
          focusBorderColor={PREVIEW_COLORS.ACCENT}
          focusShadow={PREVIEW_COLORS.FOCUS_SHADOW}
          labelColor={PREVIEW_COLORS.DISABLED_TEXT}
          labelActiveColor={PREVIEW_COLORS.ACCENT}
          iconColor={PREVIEW_COLORS.ACCENT}
          iconHoverColor={PREVIEW_COLORS.ACCENT_HOVER}
          placeholderColor={PREVIEW_COLORS.TRANSPARENT}
        />
        <Input
          variant="text"
          size="lg"
          label="Large"
          placeholder=" "
          bg={PREVIEW_COLORS.SURFACE_DARK}
          textColor={PREVIEW_COLORS.TEXT_LIGHT}
          borderColor={PREVIEW_COLORS.BORDER}
          focusBorderColor={PREVIEW_COLORS.ACCENT}
          focusShadow={PREVIEW_COLORS.FOCUS_SHADOW}
          labelColor={PREVIEW_COLORS.DISABLED_TEXT}
          labelActiveColor={PREVIEW_COLORS.ACCENT}
          iconColor={PREVIEW_COLORS.ACCENT}
          iconHoverColor={PREVIEW_COLORS.ACCENT_HOVER}
          placeholderColor={PREVIEW_COLORS.TRANSPARENT}
        />
      </div>
    ),
  },
  {
    id: 'datepicker-basic',
    name: 'Date Picker',
    description: 'Interactive calendar date picker with clear button',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: function DatePickerBasic() {
      const [selectedDate, setSelectedDate] = useState<Date | null>(null);
      return (
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          onClear={() => setSelectedDate(null)}
          placeholderText="Select a date"
          calendarIcon={<Calendar size={18} />}
          clearIcon={<X size={16} />}
          bg={PREVIEW_COLORS.SURFACE_DARK}
          textColor={PREVIEW_COLORS.TEXT_LIGHT}
          borderColor={PREVIEW_COLORS.BORDER}
          focusBorderColor={PREVIEW_COLORS.ACCENT}
          focusShadow={PREVIEW_COLORS.FOCUS_SHADOW}
          iconColor={PREVIEW_COLORS.ACCENT}
          iconHoverColor={PREVIEW_COLORS.ACCENT_HOVER}
          placeholderColor={PREVIEW_COLORS.DISABLED_TEXT}
          calendarBorderColor={PREVIEW_COLORS.ACCENT}
          calendarHeaderBg={PREVIEW_COLORS.ACCENT}
          calendarHeaderText={PREVIEW_COLORS.WHITE}
          calendarDayText={PREVIEW_COLORS.TEXT_LIGHT}
          calendarDayHoverBg={PREVIEW_COLORS.FOCUS_SHADOW}
          calendarSelectedBg={PREVIEW_COLORS.ACCENT}
          calendarSelectedText={PREVIEW_COLORS.WHITE}
          calendarMonthBg={PREVIEW_COLORS.SURFACE_DARK}
        />
      );
    },
  },
  {
    id: 'datepicker-month-year',
    name: 'Month & Year Picker',
    description: 'Date picker showing only month and year selection',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: function DatePickerMonthYear() {
      const [selectedDate, setSelectedDate] = useState<Date | null>(null);
      return (
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          onClear={() => setSelectedDate(null)}
          placeholderText="Select month/year"
          dateFormat="MM/yyyy"
          showMonthYearPicker
          calendarIcon={<Calendar size={16} />}
          clearIcon={<X size={14} />}
          bg={PREVIEW_COLORS.SURFACE_DARK}
          textColor={PREVIEW_COLORS.TEXT_LIGHT}
          borderColor={PREVIEW_COLORS.BORDER}
          focusBorderColor={PREVIEW_COLORS.ACCENT}
          focusShadow={PREVIEW_COLORS.FOCUS_SHADOW}
          iconColor={PREVIEW_COLORS.ACCENT}
          iconHoverColor={PREVIEW_COLORS.ACCENT_HOVER}
          placeholderColor={PREVIEW_COLORS.DISABLED_TEXT}
          calendarBorderColor={PREVIEW_COLORS.PRIMARY}
          calendarHeaderBg={PREVIEW_COLORS.PRIMARY}
          calendarHeaderText={PREVIEW_COLORS.WHITE}
          calendarDayText={PREVIEW_COLORS.TEXT_LIGHT}
          calendarDayHoverBg={PREVIEW_COLORS.FOCUS_SHADOW}
          calendarSelectedBg={PREVIEW_COLORS.ACCENT}
          calendarSelectedText={PREVIEW_COLORS.WHITE}
          calendarMonthBg={PREVIEW_COLORS.SURFACE_DARK}
        />
      );
    },
  },
  {
    id: 'language-selector-default',
    name: 'Language Selector',
    description: 'Multi-language selector with 9 languages - names change based on selection',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: function LanguageSelectorDefault() {
      const [language, setLanguage] = useState('en');
      return (
        <LanguageSelector
          selectedLanguage={language}
          onLanguageChange={setLanguage}
          availableLanguages={['en', 'es', 'pt', 'fr', 'it', 'ru', 'ja', 'de', 'zh']}
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
      );
    },
  },
  {
    id: 'language-selector-sizes',
    name: 'Language Selector Sizes',
    description: 'All sizes with subset of languages (EN, ES, FR)',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: function LanguageSelectorSizes() {
      const [languageSm, setLanguageSm] = useState('en');
      const [languageMd, setLanguageMd] = useState('es');
      const [languageLg, setLanguageLg] = useState('fr');
      return (
        <div className="flex items-center gap-4">
          <LanguageSelector
            selectedLanguage={languageSm}
            onLanguageChange={setLanguageSm}
            availableLanguages={['en', 'es', 'fr']}
            size="sm"
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
          <LanguageSelector
            selectedLanguage={languageMd}
            onLanguageChange={setLanguageMd}
            availableLanguages={['en', 'es', 'fr']}
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
          <LanguageSelector
            selectedLanguage={languageLg}
            onLanguageChange={setLanguageLg}
            availableLanguages={['en', 'es', 'fr']}
            size="lg"
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
        </div>
      );
    },
  },
  {
    id: 'loading-spinner',
    name: 'Spinner',
    description: 'Modern CSS-only spinner with gradient ring effect',
    category: COMPONENT_CATEGORIES.LOADERS,
    component: function LoadingSpinnerDemo() {
      return (
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center">
            <style>{`
              @keyframes spin-modern {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              @keyframes pulse-ring {
                0% { transform: scale(0.8); opacity: 0.8; }
                50% { transform: scale(1); opacity: 0.4; }
                100% { transform: scale(0.8); opacity: 0.8; }
              }
            `}</style>
            <div className="relative w-12 h-12">
              <div
                className="absolute inset-0 rounded-full border-3"
                style={{
                  borderColor: 'transparent',
                  borderTopColor: PREVIEW_COLORS.PRIMARY,
                  borderRightColor: PREVIEW_COLORS.PRIMARY,
                  animation: 'spin-modern 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                }}
              />
              <div
                className="absolute inset-0 rounded-full border-2"
                style={{
                  borderColor: PREVIEW_COLORS.ACCENT_ALPHA_10,
                  animation: 'pulse-ring 1.5s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: 'loading-spinner-text',
    name: 'Dots',
    description: 'Bouncing dots loader',
    category: COMPONENT_CATEGORIES.LOADERS,
    component: function LoadingSpinnerTextDemo() {
      return (
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center gap-2">
            <style>{`
              @keyframes bounce-dot {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-8px); }
              }
            `}</style>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: PREVIEW_COLORS.SUCCESS,
                  animation: `bounce-dot 0.6s ease-in-out ${i * 0.15}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: 'loading-pulse',
    name: 'Pulse',
    description: 'Pulsing ring effect with expanding animation',
    category: COMPONENT_CATEGORIES.LOADERS,
    component: function LoadingPulseDemo() {
      return (
        <div className="flex justify-center items-center">
          <div className="relative">
            <style>{`
              @keyframes pulse-scale {
                0%, 100% { transform: scale(0.8); opacity: 1; }
                50% { transform: scale(1.2); opacity: 0.6; }
              }
              @keyframes pulse-outer {
                0% { transform: scale(0.8); opacity: 0.8; }
                100% { transform: scale(1.5); opacity: 0; }
              }
              .pulse-core {
                border-radius: 50%;
                animation: pulse-scale 1.5s ease-in-out infinite;
              }
              .pulse-ring {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                border: 2px solid ${PREVIEW_COLORS.DANGER};
                animation: pulse-outer 1.5s ease-out infinite;
              }
            `}</style>
            <div className="relative" style={{ width: '4rem', height: '4rem' }}>
              <div
                className="pulse-core w-12 h-12"
                style={{ backgroundColor: PREVIEW_COLORS.DANGER }}
              />
              <div className="pulse-ring w-12 h-12" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: 'loading-with-text',
    name: 'Loaders with Text',
    description: 'All variants with different loading messages',
    category: COMPONENT_CATEGORIES.LOADERS,
    component: function LoadingWithTextDemo() {
      return (
        <div className="flex gap-8 justify-center items-center">
          <style>{`
            @keyframes spin-modern {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes pulse-ring {
              0% { transform: scale(0.8); opacity: 0.8; }
              50% { transform: scale(1); opacity: 0.4; }
              100% { transform: scale(0.8); opacity: 0.8; }
            }
            @keyframes bounce-dot {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
            @keyframes pulse-scale {
              0%, 100% { transform: scale(0.8); opacity: 1; }
              50% { transform: scale(1.1); opacity: 0.7; }
            }
            @keyframes pulse-outer {
              0% { transform: scale(1); opacity: 0.5; }
              100% { transform: scale(1.5); opacity: 0; }
            }
          `}</style>
          {/* Spinner */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-12 h-12">
              <div
                className="absolute inset-0 rounded-full border-3"
                style={{
                  borderColor: 'transparent',
                  borderTopColor: PREVIEW_COLORS.PRIMARY,
                  borderRightColor: PREVIEW_COLORS.PRIMARY,
                  animation: 'spin-modern 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                }}
              />
              <div
                className="absolute inset-0 rounded-full border-2"
                style={{
                  borderColor: PREVIEW_COLORS.ACCENT_ALPHA_10,
                  animation: 'pulse-ring 1.5s ease-in-out infinite',
                }}
              />
            </div>
            <p className="text-base text-gray-500 font-medium animate-pulse">Loading data...</p>
          </div>
          {/* Dots */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: PREVIEW_COLORS.SUCCESS,
                    animation: `bounce-dot 0.6s ease-in-out ${i * 0.15}s infinite`,
                  }}
                />
              ))}
            </div>
            <p className="text-base text-gray-500 font-medium animate-pulse">Processing...</p>
          </div>
          {/* Pulse */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative" style={{ width: '4rem', height: '4rem' }}>
              <div
                className="pulse-core w-12 h-12"
                style={{ backgroundColor: PREVIEW_COLORS.DANGER }}
              />
              <div className="pulse-ring w-12 h-12" style={{ width: '100%', height: '100%' }} />
            </div>
            <p className="text-base text-gray-500 font-medium animate-pulse">Please wait...</p>
          </div>
        </div>
      );
    },
  },
  {
    id: 'loading-sizes',
    name: 'Loader Sizes',
    description: 'All size variants: sm, md, lg',
    category: COMPONENT_CATEGORIES.LOADERS,
    component: function LoadingSizesDemo() {
      return (
        <div className="flex gap-8 justify-center items-center">
          <style>{`
            @keyframes spin-modern {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes pulse-ring {
              0% { transform: scale(0.8); opacity: 0.8; }
              50% { transform: scale(1); opacity: 0.4; }
              100% { transform: scale(0.8); opacity: 0.8; }
            }
          `}</style>
          {/* Small */}
          <div className="relative w-8 h-8">
            <div
              className="absolute inset-0 rounded-full border-3"
              style={{
                borderColor: 'transparent',
                borderTopColor: PREVIEW_COLORS.PRIMARY,
                borderRightColor: PREVIEW_COLORS.PRIMARY,
                animation: 'spin-modern 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              }}
            />
            <div
              className="absolute inset-0 rounded-full border-2"
              style={{
                borderColor: PREVIEW_COLORS.ACCENT_ALPHA_10,
                animation: 'pulse-ring 1.5s ease-in-out infinite',
              }}
            />
          </div>
          {/* Medium */}
          <div className="relative w-12 h-12">
            <div
              className="absolute inset-0 rounded-full border-3"
              style={{
                borderColor: 'transparent',
                borderTopColor: PREVIEW_COLORS.PRIMARY,
                borderRightColor: PREVIEW_COLORS.PRIMARY,
                animation: 'spin-modern 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              }}
            />
            <div
              className="absolute inset-0 rounded-full border-2"
              style={{
                borderColor: PREVIEW_COLORS.ACCENT_ALPHA_10,
                animation: 'pulse-ring 1.5s ease-in-out infinite',
              }}
            />
          </div>
          {/* Large */}
          <div className="relative w-16 h-16">
            <div
              className="absolute inset-0 rounded-full border-3"
              style={{
                borderColor: 'transparent',
                borderTopColor: PREVIEW_COLORS.PRIMARY,
                borderRightColor: PREVIEW_COLORS.PRIMARY,
                animation: 'spin-modern 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              }}
            />
            <div
              className="absolute inset-0 rounded-full border-2"
              style={{
                borderColor: PREVIEW_COLORS.ACCENT_ALPHA_10,
                animation: 'pulse-ring 1.5s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      );
    },
  },
  {
    id: 'table-basic',
    name: 'Basic Table',
    description: 'Simple data table with columns and rows',
    category: COMPONENT_CATEGORIES.OTHER,
    component: function TableBasicDemo() {
      const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'role', label: 'Role' },
      ];
      const data = [
        { id: 1, name: 'John Doe', role: 'Admin' },
        { id: 2, name: 'Jane Smith', role: 'User' },
      ];
      return (
        <Table
          columns={columns}
          data={data}
          showActions={false}
          headerBgFrom={PREVIEW_COLORS.PRIMARY}
          headerBgTo={PREVIEW_COLORS.PRIMARY_HOVER}
          headerTextColor={PREVIEW_COLORS.WHITE}
          headerBorderColor={PREVIEW_COLORS.BORDER}
          rowBg={PREVIEW_COLORS.SURFACE_DARK}
          rowEvenBg="#3A3F42"
          rowHoverBg="#424749"
          cellTextColor={PREVIEW_COLORS.TEXT_LIGHT}
          cellBorderColor={PREVIEW_COLORS.BORDER}
        />
      );
    },
  },
  {
    id: 'table-sortable',
    name: 'Sortable Table',
    description: 'Table with sortable columns',
    category: COMPONENT_CATEGORIES.OTHER,
    component: function TableSortableDemo() {
      const [sortField, setSortField] = useState<string>('name');
      const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

      const columns = [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'status', label: 'Status' },
      ];

      const data = [
        { id: 1, name: 'Alice Brown', status: 'Active' },
        { id: 2, name: 'Bob Wilson', status: 'Inactive' },
      ];

      const handleSort = (field: string) => {
        if (sortField === field) {
          setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
          setSortField(field);
          setSortDirection('asc');
        }
      };

      const sortedData = [...data].sort((a, b) => {
        const aValue = a[sortField as keyof typeof a];
        const bValue = b[sortField as keyof typeof b];
        if (sortDirection === 'asc') {
          return aValue > bValue ? 1 : -1;
        }
        return aValue < bValue ? 1 : -1;
      });

      return (
        <Table
          columns={columns}
          data={sortedData}
          sortField={sortField}
          sortDirection={sortDirection}
          onSort={handleSort}
          showActions={false}
          headerBgFrom={PREVIEW_COLORS.PRIMARY}
          headerBgTo={PREVIEW_COLORS.PRIMARY_HOVER}
          headerTextColor={PREVIEW_COLORS.WHITE}
          headerBorderColor={PREVIEW_COLORS.BORDER}
          rowBg={PREVIEW_COLORS.SURFACE_DARK}
          rowEvenBg="#3A3F42"
          rowHoverBg="#424749"
          cellTextColor={PREVIEW_COLORS.TEXT_LIGHT}
          cellBorderColor={PREVIEW_COLORS.BORDER}
        />
      );
    },
  },
  {
    id: 'table-actions',
    name: 'Table with Actions',
    description: 'Table with action buttons (info, edit, delete)',
    category: COMPONENT_CATEGORIES.OTHER,
    component: function TableActionsDemo() {
      const data = [
        { id: 1, product: 'Laptop', price: '$999' },
        { id: 2, product: 'Mouse', price: '$29' },
      ];

      const columns = [
        { key: 'id', label: 'ID' },
        { key: 'product', label: 'Product' },
        { key: 'price', label: 'Price' },
      ];

      return (
        <Table
          columns={columns}
          data={data}
          onInfo={() => {}}
          onEdit={() => {}}
          onDelete={() => {}}
          headerBgFrom={PREVIEW_COLORS.PRIMARY}
          headerBgTo={PREVIEW_COLORS.PRIMARY_HOVER}
          headerTextColor={PREVIEW_COLORS.WHITE}
          headerBorderColor={PREVIEW_COLORS.BORDER}
          rowBg={PREVIEW_COLORS.SURFACE_DARK}
          rowEvenBg="#3A3F42"
          rowHoverBg="#424749"
          cellTextColor={PREVIEW_COLORS.TEXT_LIGHT}
          cellBorderColor={PREVIEW_COLORS.BORDER}
          actionColor={PREVIEW_COLORS.PRIMARY}
          actionHoverColor={PREVIEW_COLORS.PRIMARY_HOVER}
          actionDeleteHoverColor={PREVIEW_COLORS.DANGER_HOVER}
        />
      );
    },
  },
  {
    id: 'table-custom-render',
    name: 'Custom Cell Rendering',
    description: 'Table with custom cell rendering and badges',
    category: COMPONENT_CATEGORIES.OTHER,
    component: function TableCustomRenderDemo() {
      const columns: TableColumn[] = [
        { key: 'name', label: 'Name' },
        {
          key: 'status',
          label: 'Status',
          render: (value: unknown) => {
            const status = String(value);
            return (
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {status}
              </span>
            );
          },
        },
      ];

      const data = [
        { id: 1, name: 'Emma Watson', status: 'Active' },
        { id: 2, name: 'Tom Holland', status: 'Inactive' },
      ];

      return (
        <Table
          columns={columns}
          data={data}
          showActions={false}
          headerBgFrom={PREVIEW_COLORS.PRIMARY}
          headerBgTo={PREVIEW_COLORS.PRIMARY_HOVER}
          headerTextColor={PREVIEW_COLORS.WHITE}
          headerBorderColor={PREVIEW_COLORS.BORDER}
          rowBg={PREVIEW_COLORS.SURFACE_DARK}
          rowEvenBg="#3A3F42"
          rowHoverBg="#424749"
          cellTextColor={PREVIEW_COLORS.TEXT_LIGHT}
          cellBorderColor={PREVIEW_COLORS.BORDER}
        />
      );
    },
  },
  {
    id: 'table-empty',
    name: 'Empty Table',
    description: 'Table with no data shows custom message',
    category: COMPONENT_CATEGORIES.OTHER,
    component: function TableEmptyDemo() {
      const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'description', label: 'Description' },
      ];

      return (
        <Table
          columns={columns}
          data={[]}
          noDataMessage="No records found. Add some data to get started!"
          showActions={false}
          headerBgFrom={PREVIEW_COLORS.PRIMARY}
          headerBgTo={PREVIEW_COLORS.PRIMARY_HOVER}
          headerTextColor={PREVIEW_COLORS.WHITE}
          headerBorderColor={PREVIEW_COLORS.BORDER}
          noDataBg={PREVIEW_COLORS.SURFACE_DARK}
          noDataTextColor={PREVIEW_COLORS.TEXT_LIGHT}
          noDataBorderColor={PREVIEW_COLORS.BORDER}
        />
      );
    },
  },
];
