import { ComponentDemo } from '@/types/component';
import { Button, Input, SelectInput, TimeInput } from '@/app/components';
import { COMPONENT_CATEGORIES } from '@/constants';
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
} from 'lucide-react';
import { useState } from 'react';

const ClearButtonDemo = () => {
  const [value, setValue] = useState('Sample text');

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        className="w-full px-4 py-2 pr-24 border rounded-md bg-[#313335] border-[#4A5A6A] text-[#A9B7C6] focus:outline-none focus:border-[#00D4FF]"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <Button variant="clear" onClick={() => setValue('')}>
          <X size={16} />
        </Button>
      )}
      <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#4A9EFF]">
        <Search size={16} />
      </button>
    </div>
  );
};

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
    },
  },
  {
    id: 'button-clear',
    name: 'Clear Button',
    description: 'Positioned clear button for input fields',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: ClearButtonDemo,
  },
  {
    id: 'button-icon',
    name: 'Icon Button',
    description: 'Icon-only button for compact actions',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: () => (
      <div className="flex gap-2">
        <Button variant="icon" size="sm">
          <Plus size={14} />
        </Button>
        <Button variant="icon" size="md">
          <Search size={16} />
        </Button>
        <Button variant="icon" size="lg">
          <Minus size={18} />
        </Button>
      </div>
    ),
  },
  {
    id: 'button-sizes',
    name: 'Button Sizes',
    description: 'All available button sizes: small, medium, large',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: () => (
      <div className="flex items-center gap-3 flex-wrap">
        <Button variant="primary" size="sm">
          Small
        </Button>
        <Button variant="primary" size="md">
          Medium
        </Button>
        <Button variant="primary" size="lg">
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
        <Button variant="primary" isLoading>
          Loading...
        </Button>
        <Button variant="success" isLoading>
          Processing
        </Button>
      </div>
    ),
  },
  {
    id: 'button-disabled',
    name: 'Disabled Buttons',
    description: 'Disabled state for all button variants',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: () => (
      <div className="flex gap-3 flex-wrap">
        <Button variant="primary" disabled>
          Primary
        </Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="success" disabled>
          Success
        </Button>
        <Button variant="danger" disabled>
          Danger
        </Button>
      </div>
    ),
  },
  {
    id: 'input-text',
    name: 'Text Input',
    description: 'Standard text input with floating label',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: () => <Input variant="text" label="Full Name" placeholder=" " />,
  },
  {
    id: 'input-number',
    name: 'Number Input',
    description: 'Numeric input field with floating label',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: () => <Input variant="number" label="Age" placeholder=" " />,
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
      />
    ),
  },
  {
    id: 'input-select',
    name: 'Select Input',
    description: 'Dropdown select with floating label',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: () => (
      <SelectInput label="Country" selectIcon={<ChevronDown size={16} />} defaultValue="">
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
        <Input variant="text" size="sm" label="Small" placeholder=" " />
        <Input variant="text" size="md" label="Medium" placeholder=" " />
        <Input variant="text" size="lg" label="Large" placeholder=" " />
      </div>
    ),
  },
];
