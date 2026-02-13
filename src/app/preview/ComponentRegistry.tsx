import { ComponentDemo } from '@/types/component';
import Image from 'next/image';
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
  Gallery,
} from '@/app/components';
import type { TableColumn } from '@/app/components';
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
  LogIn,
} from 'lucide-react';
import { useState } from 'react';
import { adjustOpacity, getContrastColor } from '@/app/utils/colorUtils';

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
      label="Date Picker"
      placeholderText=" "
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
      label="Month Year Picker"
      placeholderText=" "
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
    { id: 5, name: 'Alice ', status: 'Active' },
    { id: 2, name: 'Bob ', status: 'Inactive' },
    { id: 8, name: 'Charlie', status: 'Active' },
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
    { id: 3, name: 'Emma' },
    { id: 7, name: 'Frank' },
    { id: 1, name: 'Grace' },
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
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings size={16} />,
    },
  ];

  const logoutItem = {
    label: 'Logout',
    icon: <LogOut size={16} />,
  };

  const backgroundColor = PREVIEW_COLOR_CONFIG.secondary;
  const textColor = '#E5E7EB';
  const hoverBg = 'rgba(255, 255, 255, 0.1)';
  const toggleBtnBg = 'rgba(255, 255, 255, 0.2)';
  const toggleBtnHoverBg = 'rgba(255, 255, 255, 0.3)';
  const logoutTextColor = '#ff6b6b';
  const logoutHoverBg = 'rgba(255, 107, 107, 0.2)';

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '240px',
        height: '200px',
        backgroundColor: '#1A1A1A',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        border: '1px solid #333',
        margin: '0 auto',
      }}
    >
      <nav
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 300ms ease-in-out',
          width: isOpen ? '11rem' : '3rem',
          backgroundColor,
        }}
      >
        <div
          style={{
            position: 'relative',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            flexShrink: 0,
          }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              position: 'absolute',
              top: '0.5rem',
              left: '0.75rem',
              border: 'none',
              padding: '0.375rem',
              cursor: 'pointer',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '1.75rem',
              height: '1.75rem',
              transition: 'background-color 300ms',
              backgroundColor: toggleBtnBg,
              color: textColor,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = toggleBtnHoverBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = toggleBtnBg;
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

        <ul
          style={{
            listStyle: 'none',
            width: '100%',
            padding: '0.5rem 0.375rem',
            paddingTop: '1.5rem',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            overflowY: 'auto',
          }}
        >
          {menuItems.map((item) => (
            <li key={item.id} style={{ width: '100%', marginBottom: '0.125rem' }}>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  transition: 'all 300ms',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  padding: isOpen ? '0.375rem 0.625rem' : '0.375rem',
                  justifyContent: isOpen ? 'flex-start' : 'center',
                  color: textColor,
                  borderRadius: '0.25rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = hoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span style={{ flexShrink: 0, marginRight: isOpen ? '0.5rem' : 0 }}>
                  {item.icon}
                </span>
                {isOpen && (
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', fontSize: '0.75rem' }}>
                    {item.label}
                  </span>
                )}
              </button>
            </li>
          ))}

          <li style={{ width: '100%', marginTop: 'auto', marginBottom: '0.375rem' }}>
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                transition: 'all 300ms',
                cursor: 'pointer',
                fontSize: '0.75rem',
                padding: isOpen ? '0.375rem 0.625rem' : '0.375rem',
                justifyContent: isOpen ? 'flex-start' : 'center',
                color: logoutTextColor,
                borderRadius: '0.25rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = logoutHoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span style={{ flexShrink: 0, marginRight: isOpen ? '0.5rem' : 0 }}>
                {logoutItem.icon}
              </span>
              {isOpen && (
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', fontSize: '0.75rem' }}>
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

const NavBarDemo = () => {
  const [activeItem, setActiveItem] = useState('home');
  const backgroundColor = PREVIEW_COLOR_CONFIG.secondary;
  const textColor = getContrastColor(backgroundColor);
  const activeColor = PREVIEW_COLOR_CONFIG.accent;
  const hoverColor = PREVIEW_COLOR_CONFIG.primary;

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      onClick: () => setActiveItem('home'),
      isActive: activeItem === 'home',
    },
    {
      id: 'explore',
      label: 'Explore',
      onClick: () => setActiveItem('explore'),
      isActive: activeItem === 'explore',
    },
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '220px',
        backgroundColor: '#1A1A1A',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        border: '1px solid #333',
      }}
    >
      {/* NavBar at top */}
      <nav
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3.5rem',
          backgroundColor,
          borderBottom: `1px solid ${adjustOpacity('#000', 0.1)}`,
        }}
      >
        <div
          style={{
            height: '100%',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                transition: 'opacity 300ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              <Image src="/FlowUI.svg" alt="FlowUI Logo" width={20} height={20} />
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: textColor,
                }}
              >
                FlowUI
              </span>
            </div>
          </div>

          {/* Menu Items */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            {menuItems.map((item) => (
              <div
                key={item.id}
                onClick={item.onClick}
                style={{
                  fontWeight: 500,
                  transition: 'all 300ms',
                  cursor: 'pointer',
                  fontSize: '0.8125rem',
                  color: item.isActive ? activeColor : textColor,
                  borderBottom: item.isActive
                    ? `2px solid ${activeColor}`
                    : '2px solid transparent',
                  paddingBottom: '0.25rem',
                }}
                onMouseEnter={(e) => {
                  if (!item.isActive) {
                    e.currentTarget.style.color = hoverColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.isActive) {
                    e.currentTarget.style.color = textColor;
                  }
                }}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Action Button */}
          <Button
            variant="primary"
            size="sm"
            icon={<LogIn size={14} />}
            iconPosition="left"
            colors={{
              primary: activeColor,
              secondary: textColor,
              accent: activeColor,
            }}
            onClick={() => {}}
          >
            Login
          </Button>
        </div>
      </nav>

      {/* Content area below navbar */}
      <div
        style={{
          position: 'absolute',
          top: '3.5rem',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '1rem',
          color: '#A0A0A0',
        }}
      ></div>
    </div>
  );
};

const GalleryDemo = () => {
  const sampleImages = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      alt: 'Mountain landscape',
      width: 1200,
      height: 800,
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      alt: 'Forest',
      width: 1200,
      height: 1600,
    },
    {
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
      alt: 'Ocean sunset',
      width: 1200,
      height: 900,
    },
    {
      src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
      alt: 'Mountain road',
      width: 1200,
      height: 700,
    },
    {
      src: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5',
      alt: 'Desert landscape',
      width: 1200,
      height: 1400,
    },
    {
      src: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94',
      alt: 'Beach sunset',
      width: 1200,
      height: 850,
    },
    {
      src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
      alt: 'Northern lights',
      width: 1200,
      height: 1100,
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      alt: 'Waterfall',
      width: 1200,
      height: 1500,
    },
  ];

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <Gallery
        images={sampleImages}
        gap="0.5rem"
        enableAnimation={false}
        colors={PREVIEW_COLOR_CONFIG}
        forceColumnCount={3}
      />
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
    component: () => (
      <Input
        variant="number"
        label="Quantity"
        placeholder=" "
        colors={PREVIEW_COLOR_CONFIG}
        customBg={PREVIEW_DARK_SURFACE}
        customTextColor={PREVIEW_LIGHT_TEXT}
      />
    ),
    props: {},
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
  {
    id: 'navbar',
    name: 'Navigation Bar',
    description: 'Modern responsive navbar with logo, menu items and action buttons',
    category: COMPONENT_CATEGORIES.NAVIGATION,
    component: NavBarDemo,
    props: {},
  },
  {
    id: 'gallery',
    name: 'Masonry Gallery',
    description: 'Responsive masonry gallery with lazy loading and smooth animations',
    category: COMPONENT_CATEGORIES.OTHER,
    component: GalleryDemo,
    props: {},
  },
];
