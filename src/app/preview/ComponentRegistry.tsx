import { ComponentDemo } from '@/types/component';
import { Button } from '@/app/components';
import { COMPONENT_CATEGORIES } from '@/constants';
import { Check, X, Trash2, Search, Download, Upload, Plus, Minus } from 'lucide-react';

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
    component: () => (
      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full px-4 py-2 pr-24 border rounded-md bg-[#313335] border-[#4A5A6A] text-[#A9B7C6]"
          placeholder="Search..."
          defaultValue="Sample text"
        />
        <Button variant="clear">
          <X size={16} />
        </Button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#4A9EFF]">
          <Search size={16} />
        </button>
      </div>
    ),
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
];
