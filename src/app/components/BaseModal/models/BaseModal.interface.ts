import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { ExtendedColorConfig } from '@/app/types/colors';

/**
 * Stat item configuration for BaseModal stats display
 */
export interface BaseModalStat {
  /** The icon component to display */
  icon?: LucideIcon;
  /** The numeric value or text to display */
  number: string | number;
  /** The label text below the number */
  label: string;
  /** Custom color for the icon */
  color?: string;
}

/**
 * Text labels for BaseModal i18n support
 */
export interface BaseModalTexts {
  /** Title for the discard changes confirmation modal */
  discardChangesTitle?: string;
  /** Warning message for unsaved changes */
  unsavedChangesWarning?: string;
  /** Text for "Continue Editing" button */
  continueEditing?: string;
  /** Text for "Discard" button */
  discardButton?: string;
}

/**
 * Props for BaseModal component
 */
export interface BaseModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when modal should close */
  onClose: () => void;
  /** Modal title */
  title: string;
  /** Icon to display next to the title */
  icon?: LucideIcon;
  /** Modal content */
  children: ReactNode;
  /** Optional stats to display below the header */
  stats?: BaseModalStat[];
  /** Maximum width of the modal (default: "56.25rem") */
  maxWidth?: string;
  /** Whether to show the close button (default: true) */
  showCloseButton?: boolean;
  /** Whether the modal has unsaved changes (shows confirmation on close) */
  hasUnsavedChanges?: boolean;
  /** Custom text labels for i18n support */
  texts?: BaseModalTexts;

  // New simplified color system - uses ExtendedColorConfig because needs danger state
  colors?: ExtendedColorConfig;

  // Optional overrides for specific customization
  customOverlayBg?: string;
  customModalBg?: string;
}
