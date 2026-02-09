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
  BaseModal,
  ConfirmationModal,
} from '@/app/components';
import type { TableColumn } from '@/app/components/Table';
import { COMPONENT_CATEGORIES } from '@/app/constants';
import { PREVIEW_COLOR_CONFIG } from './previewColors';

const PREVIEW_DARK_SURFACE = '#2C3135';
const PREVIEW_LIGHT_TEXT = '#E5E7EB';
import {
  Check,
  X,
  Trash2,
  Search,
  Download,
  Upload,
  Plus,
  Settings,
  Eye,
  EyeOff,
  ChevronDown,
  Calendar,
  Edit,
  Info,
  Home,
  LogOut,
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
      colors={PREVIEW_COLOR_CONFIG}
      customBg={PREVIEW_DARK_SURFACE}
      customTextColor={PREVIEW_LIGHT_TEXT}
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
      colors={PREVIEW_COLOR_CONFIG}
      customBg={PREVIEW_DARK_SURFACE}
      customTextColor={PREVIEW_LIGHT_TEXT}
    />
  );
};

const PasswordInputDemo = () => {
  const [password, setPassword] = useState('');
  return (
    <Input
      variant="password"
      label="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      showPasswordToggle
      passwordIcon={<Eye size={16} />}
      passwordIconHidden={<EyeOff size={16} />}
      placeholder=" "
      colors={PREVIEW_COLOR_CONFIG}
      customBg={PREVIEW_DARK_SURFACE}
      customTextColor={PREVIEW_LIGHT_TEXT}
    />
  );
};

const SelectInputDemo = () => {
  return (
    <SelectInput
      label="Country"
      selectIcon={<ChevronDown size={16} />}
      colors={PREVIEW_COLOR_CONFIG}
      customBg={PREVIEW_DARK_SURFACE}
      customTextColor={PREVIEW_LIGHT_TEXT}
    >
      <option value="">Select a country</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
      <option value="au">Australia</option>
    </SelectInput>
  );
};

const DatePickerDemo = () => {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <DatePicker
      selected={date}
      onChange={(newDate: Date | null) => setDate(newDate as Date)}
      onClear={() => setDate(null)}
      calendarIcon={<Calendar size={16} />}
      clearIcon={<X size={14} />}
      colors={PREVIEW_COLOR_CONFIG}
      customBg={PREVIEW_DARK_SURFACE}
      customTextColor={PREVIEW_LIGHT_TEXT}
    />
  );
};

const MonthYearPickerDemo = () => {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <DatePicker
      selected={date}
      onChange={(newDate: Date | null) => setDate(newDate as Date)}
      onClear={() => setDate(null)}
      showMonthYearPicker
      dateFormat="MM/yyyy"
      calendarIcon={<Calendar size={16} />}
      clearIcon={<X size={14} />}
      colors={PREVIEW_COLOR_CONFIG}
      customBg={PREVIEW_DARK_SURFACE}
      customTextColor={PREVIEW_LIGHT_TEXT}
    />
  );
};

const LanguageSelectorDemo = () => {
  const [lang, setLang] = useState('en');
  return (
    <LanguageSelector
      selectedLanguage={lang}
      onLanguageChange={setLang}
      availableLanguages={['en', 'es', 'pt', 'fr', 'it', 'ru', 'ja', 'de', 'zh']}
      colors={PREVIEW_COLOR_CONFIG}
    />
  );
};

const LoadingVariantsDemo = () => {
  const spinnerColor = PREVIEW_COLOR_CONFIG.primary;

  return (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
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
        @keyframes pulse-scale {
          0%, 100% { transform: scale(0.8); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
        @keyframes pulse-outer {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes bounce-dot {
          0%, 80%, 100% { transform: translateY(0) scale(1); }
          40% { transform: translateY(-10px) scale(1.1); }
        }
        .preview-spinner {
          width: 3rem;
          height: 3rem;
          border: 3px solid transparent;
          border-top-color: ${spinnerColor};
          border-right-color: ${spinnerColor};
          border-radius: 50%;
          animation: spin-modern 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          position: relative;
        }
        .preview-spinner::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border: 3px solid ${spinnerColor}20;
          border-radius: 50%;
          animation: pulse-ring 1.5s ease-in-out infinite;
        }
        .preview-pulse-core {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: ${spinnerColor};
          animation: pulse-scale 1.5s ease-in-out infinite;
        }
        .preview-pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 3rem;
          height: 3rem;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 2px solid ${spinnerColor};
          animation: pulse-outer 1.5s ease-out infinite;
        }
        .preview-dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background-color: ${spinnerColor};
        }
        .preview-dot-1 { animation: bounce-dot 1.4s infinite ease-in-out; }
        .preview-dot-2 { animation: bounce-dot 1.4s infinite ease-in-out 0.2s; }
        .preview-dot-3 { animation: bounce-dot 1.4s infinite ease-in-out 0.4s; }
      `}</style>

      {/* Spinner */}
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <div className="preview-spinner" />
      </div>

      {/* Pulse */}
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <div style={{ position: 'relative', width: '4rem', height: '4rem' }}>
          <div className="preview-pulse-core" />
          <div className="preview-pulse-ring" />
        </div>
      </div>

      {/* Dots */}
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div className="preview-dot preview-dot-1" />
          <div className="preview-dot preview-dot-2" />
          <div className="preview-dot preview-dot-3" />
        </div>
      </div>
    </div>
  );
};

const LoadingWithTextDemo = () => {
  const spinnerColor = PREVIEW_COLOR_CONFIG.primary;

  return (
    <>
      <style>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(0.8); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
        @keyframes pulse-outer {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes bounce-dot {
          0%, 80%, 100% { transform: translateY(0) scale(1); }
          40% { transform: translateY(-10px) scale(1.1); }
        }
        @keyframes text-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .preview-pulse-core {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: ${spinnerColor};
          animation: pulse-scale 1.5s ease-in-out infinite;
        }
        .preview-pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 3rem;
          height: 3rem;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 2px solid ${spinnerColor};
          animation: pulse-outer 1.5s ease-out infinite;
        }
        .preview-dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background-color: ${spinnerColor};
        }
        .preview-dot-1 { animation: bounce-dot 1.4s infinite ease-in-out; }
        .preview-dot-2 { animation: bounce-dot 1.4s infinite ease-in-out 0.2s; }
        .preview-dot-3 { animation: bounce-dot 1.4s infinite ease-in-out 0.4s; }
        .preview-loading-text {
          color: white;
          font-size: 1rem;
          font-weight: 500;
          animation: text-pulse 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Pulse with text */}
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}
      >
        <div style={{ position: 'relative', width: '4rem', height: '4rem' }}>
          <div className="preview-pulse-core" />
          <div className="preview-pulse-ring" />
        </div>
        <p className="preview-loading-text">Processing...</p>
      </div>

      {/* Dots with text */}
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}
      >
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div className="preview-dot preview-dot-1" />
          <div className="preview-dot preview-dot-2" />
          <div className="preview-dot preview-dot-3" />
        </div>
        <p className="preview-loading-text">Please wait...</p>
      </div>
    </>
  );
};

const SimpleTableDemo = () => {
  const [sortField, setSortField] = useState<string>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  interface DataRow extends Record<string, unknown> {
    id: number;
    name: string;
    status: string;
  }

  const columns: TableColumn<DataRow>[] = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
  ];

  const baseData: DataRow[] = [
    { id: 5, name: 'Alice Brown', status: 'Active' },
    { id: 2, name: 'Bob Wilson', status: 'Inactive' },
    { id: 8, name: 'Charlie Davis', status: 'Active' },
  ];

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...baseData].sort((a, b) => {
    const aValue = a[sortField as keyof DataRow];
    const bValue = b[sortField as keyof DataRow];

    if (aValue === bValue) return 0;

    const comparison = (aValue as string | number) < (bValue as string | number) ? -1 : 1;
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  return (
    <Table<DataRow>
      columns={columns}
      data={sortedData}
      sortField={sortField}
      sortDirection={sortDirection}
      onSort={handleSort}
      showActions={false}
      colors={PREVIEW_COLOR_CONFIG}
    />
  );
};

const TableWithActionsDemo = () => {
  const [sortField, setSortField] = useState<string>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  interface DataRow extends Record<string, unknown> {
    id: number;
    name: string;
  }

  const columns: TableColumn<DataRow>[] = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
  ];

  const baseData: DataRow[] = [
    { id: 3, name: 'Emma Johnson' },
    { id: 7, name: 'Frank Miller' },
    { id: 1, name: 'Grace Lee' },
  ];

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...baseData].sort((a, b) => {
    const aValue = a[sortField as keyof DataRow];
    const bValue = b[sortField as keyof DataRow];

    if (aValue === bValue) return 0;

    const comparison = (aValue as string | number) < (bValue as string | number) ? -1 : 1;
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  return (
    <Table<DataRow>
      columns={columns}
      data={sortedData}
      sortField={sortField}
      sortDirection={sortDirection}
      onSort={handleSort}
      showActions
      onInfo={(item) => console.log('Info:', item)}
      onEdit={(item) => console.log('Edit:', item)}
      onDelete={(item) => console.log('Delete:', item)}
      colors={PREVIEW_COLOR_CONFIG}
    />
  );
};

const BaseModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button colors={PREVIEW_COLOR_CONFIG} onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <BaseModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Edit Profile"
        colors={PREVIEW_COLOR_CONFIG}
        hasUnsavedChanges={true}
      >
        <div style={{ padding: '1rem' }}>
          <Input
            label="Name"
            placeholder="Enter name"
            colors={PREVIEW_COLOR_CONFIG}
            customBg={PREVIEW_DARK_SURFACE}
            customTextColor={PREVIEW_LIGHT_TEXT}
          />
          <div style={{ marginTop: '1rem' }}>
            <Input
              label="Email"
              type="email"
              placeholder="Enter email"
              colors={PREVIEW_COLOR_CONFIG}
              customBg={PREVIEW_DARK_SURFACE}
              customTextColor={PREVIEW_LIGHT_TEXT}
            />
          </div>
        </div>
      </BaseModal>
    </>
  );
};

const ConfirmationModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button colors={PREVIEW_COLOR_CONFIG} onClick={() => setIsOpen(true)}>
        Delete Item
      </Button>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setIsOpen(false);
        }}
        message="Are you sure you want to delete this item? This action cannot be undone."
        colors={PREVIEW_COLOR_CONFIG}
      />
    </>
  );
};

const SideBarDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <Home size={16} />,
      onClick: () => {},
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings size={16} />,
      onClick: () => {},
    },
  ];

  const logoutItem = {
    label: 'Logout',
    icon: <LogOut size={16} />,
    onClick: () => {},
  };

  return (
    <div className="relative w-full max-w-[240px] h-[200px] bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#333] mx-auto">
      <nav
        className={`absolute top-0 left-0 h-full flex flex-col transition-[width] duration-300 ease-in-out ${isOpen ? 'w-[11rem]' : 'w-[3rem]'}`}
        style={{ backgroundColor: PREVIEW_COLOR_CONFIG.primary }}
      >
        <div className="relative pt-2 pb-2 shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`absolute top-2 border-none p-1.5 cursor-pointer rounded-lg flex items-center justify-center w-7 h-7 transition-all duration-300 ${isOpen ? 'left-3' : 'left-1/2 -translate-x-1/2'}`}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: PREVIEW_LIGHT_TEXT,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        <ul className="list-none w-full p-0 m-0 flex flex-col flex-1 overflow-y-auto px-1.5 pt-6 pb-2">
          {menuItems.map((item) => (
            <li key={item.id} className="w-full mb-0.5">
              <button
                onClick={item.onClick}
                className={`bg-transparent border-none font-bold flex items-center w-full transition-all duration-300 cursor-pointer text-xs ${isOpen ? 'px-2.5 py-1.5 justify-start' : 'p-1.5 justify-center'}`}
                style={{ color: PREVIEW_LIGHT_TEXT }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span className={`shrink-0 ${isOpen ? 'mr-2' : 'mr-0'}`}>{item.icon}</span>
                {isOpen && (
                  <span className="whitespace-nowrap overflow-hidden text-xs">{item.label}</span>
                )}
              </button>
            </li>
          ))}

          <li className="w-full mt-auto mb-1.5">
            <button
              onClick={logoutItem.onClick}
              className={`bg-transparent border-none font-bold flex items-center w-full transition-all duration-300 cursor-pointer text-xs ${isOpen ? 'px-2.5 py-1.5 justify-start' : 'p-1.5 justify-center'}`}
              style={{ color: '#DC2626' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.15)';
                e.currentTarget.style.color = '#B91C1C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#DC2626';
              }}
            >
              <span className={`shrink-0 ${isOpen ? 'mr-2' : 'mr-0'}`}>{logoutItem.icon}</span>
              {isOpen && (
                <span className="whitespace-nowrap overflow-hidden text-xs">
                  {logoutItem.label}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </div>
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
      colors: PREVIEW_COLOR_CONFIG,
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
      colors: PREVIEW_COLOR_CONFIG,
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
      colors: PREVIEW_COLOR_CONFIG,
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
      colors: PREVIEW_COLOR_CONFIG,
    },
  },
  {
    id: 'button-success',
    name: 'Success Button',
    description: 'Success action button for positive confirmations',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: Button,
    props: {
      variant: 'primary',
      icon: <Check size={16} />,
      iconPosition: 'left',
      children: 'Confirm',
      colors: PREVIEW_COLOR_CONFIG,
      customBg: PREVIEW_COLOR_CONFIG.success,
    },
  },
  {
    id: 'button-danger',
    name: 'Danger Button',
    description: 'Danger button for destructive actions',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: Button,
    props: {
      variant: 'primary',
      icon: <Trash2 size={16} />,
      iconPosition: 'left',
      children: 'Delete',
      colors: PREVIEW_COLOR_CONFIG,
      customBg: PREVIEW_COLOR_CONFIG.danger,
    },
  },
  {
    id: 'button-loading',
    name: 'Loading Button',
    description: 'Button with loading spinner',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: Button,
    props: {
      variant: 'primary',
      isLoading: true,
      loadingText: 'Processing...',
      children: 'Submit',
      colors: PREVIEW_COLOR_CONFIG,
    },
  },
  {
    id: 'button-disabled',
    name: 'Disabled Button',
    description: 'Button in disabled state',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: Button,
    props: {
      variant: 'primary',
      disabled: true,
      children: 'Disabled',
      colors: PREVIEW_COLOR_CONFIG,
    },
  },
  {
    id: 'button-icon',
    name: 'Icon Buttons',
    description: 'Icon-only buttons in different sizes',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: () => (
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="icon" size="sm" colors={PREVIEW_COLOR_CONFIG}>
          <Plus size={14} />
        </Button>
        <Button variant="icon" size="md" colors={PREVIEW_COLOR_CONFIG}>
          <Search size={16} />
        </Button>
        <Button variant="icon" size="lg" colors={PREVIEW_COLOR_CONFIG}>
          <Settings size={20} />
        </Button>
      </div>
    ),
    props: {},
  },
  {
    id: 'input-text',
    name: 'Text Input',
    description: 'Standard text input field',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: Input,
    props: {
      variant: 'text',
      label: 'Username',
      placeholder: ' ',
      colors: PREVIEW_COLOR_CONFIG,
      customBg: PREVIEW_DARK_SURFACE,
      customTextColor: PREVIEW_LIGHT_TEXT,
    },
  },
  {
    id: 'input-email',
    name: 'Email Input',
    description: 'Email input with validation',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: Input,
    props: {
      variant: 'email',
      label: 'Email Address',
      placeholder: ' ',
      colors: PREVIEW_COLOR_CONFIG,
      customBg: PREVIEW_DARK_SURFACE,
      customTextColor: PREVIEW_LIGHT_TEXT,
    },
  },
  {
    id: 'input-password',
    name: 'Password Input',
    description: 'Password input with toggle visibility',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: PasswordInputDemo,
    props: {},
  },
  {
    id: 'input-search',
    name: 'Search Input',
    description: 'Search input with icon and clear button',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: SearchInputDemo,
    props: {},
  },
  {
    id: 'input-number',
    name: 'Number Input',
    description: 'Numeric input field',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: Input,
    props: {
      variant: 'number',
      label: 'Quantity',
      placeholder: ' ',
      colors: PREVIEW_COLOR_CONFIG,
      customBg: PREVIEW_DARK_SURFACE,
      customTextColor: PREVIEW_LIGHT_TEXT,
    },
  },
  {
    id: 'input-select',
    name: 'Select Input',
    description: 'Dropdown select input',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: SelectInputDemo,
    props: {},
  },
  {
    id: 'input-time',
    name: 'Time Input',
    description: 'Time selection input',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: TimeInputDemo,
    props: {},
  },
  {
    id: 'action-icons',
    name: 'Action Buttons',
    description: 'Icon buttons for common actions like edit, delete, and info',
    category: COMPONENT_CATEGORIES.BUTTONS,
    component: () => (
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <ActionIcon icon={Edit} title="Edit" colors={PREVIEW_COLOR_CONFIG} />
        <ActionIcon icon={Info} title="Info" colors={PREVIEW_COLOR_CONFIG} />
        <ActionIcon
          icon={Trash2}
          title="Delete"
          colors={PREVIEW_COLOR_CONFIG}
          customColor={PREVIEW_COLOR_CONFIG.danger}
        />
      </div>
    ),
    props: {},
  },
  {
    id: 'datepicker',
    name: 'Date Picker',
    description: 'Calendar date picker',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: DatePickerDemo,
    props: {},
  },
  {
    id: 'datepicker-month-year',
    name: 'Month Year Picker',
    description: 'Month and year selection picker',
    category: COMPONENT_CATEGORIES.INPUTS,
    component: MonthYearPickerDemo,
    props: {},
  },
  {
    id: 'language-selector',
    name: 'Language Selector',
    description: 'Dropdown language selector with flags',
    category: COMPONENT_CATEGORIES.NAVIGATION,
    component: LanguageSelectorDemo,
    props: {},
  },
  {
    id: 'loading-variants',
    name: 'Loading Variants',
    description: 'Loading indicators: spinner, pulse, and dots',
    category: COMPONENT_CATEGORIES.LOADERS,
    component: LoadingVariantsDemo,
    props: {},
  },
  {
    id: 'loading-with-text',
    name: 'Loading With Text',
    description: 'Loading indicators with text labels',
    category: COMPONENT_CATEGORIES.LOADERS,
    component: LoadingWithTextDemo,
    props: {},
  },
  {
    id: 'table-simple',
    name: 'Simple Table',
    description: 'Table with sorting (ID, Name, Status)',
    category: COMPONENT_CATEGORIES.OTHER,
    component: SimpleTableDemo,
    props: {},
  },
  {
    id: 'table-actions',
    name: 'Table With Actions',
    description: 'Table with action buttons (Edit, Info, Delete)',
    category: COMPONENT_CATEGORIES.OTHER,
    component: TableWithActionsDemo,
    props: {},
  },
  {
    id: 'modal-base',
    name: 'Base Modal',
    description: 'Modal dialog with unsaved changes warning',
    category: COMPONENT_CATEGORIES.MODALS,
    component: BaseModalDemo,
    props: {},
  },
  {
    id: 'modal-confirmation',
    name: 'Confirmation Modal',
    description: 'Confirmation dialog for destructive actions',
    category: COMPONENT_CATEGORIES.MODALS,
    component: ConfirmationModalDemo,
    props: {},
  },
  {
    id: 'sidebar',
    name: 'Side Navigation',
    description: 'Collapsible sidebar with top and bottom sections',
    category: COMPONENT_CATEGORIES.NAVIGATION,
    component: SideBarDemo,
    props: {},
  },
];
