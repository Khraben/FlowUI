import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

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

  // Color customization
  /** Background color for the overlay (default: "rgba(0, 0, 0, 0.5)") */
  overlayBg?: string;
  /** Modal background color (default: "#FFFFFF") */
  modalBg?: string;
  /** Header gradient start color (default: "#1E90FF") */
  headerBgFrom?: string;
  /** Header gradient end color (default: "#1873CC") */
  headerBgTo?: string;
  /** Header text color (default: "#FFFFFF") */
  headerTextColor?: string;
  /** Close button background color (default: "rgba(255, 255, 255, 0.2)") */
  closeBtnBg?: string;
  /** Close button hover background color (default: "rgba(255, 255, 255, 0.3)") */
  closeBtnHoverBg?: string;
  /** Close button text color (default: "#FFFFFF") */
  closeBtnColor?: string;
  /** Stats section background gradient start (default: "#F9FAFB") */
  statsBgFrom?: string;
  /** Stats section background gradient end (default: "#E5E7EB") */
  statsBgTo?: string;
  /** Stats section border color (default: "#D1D5DB") */
  statsBorderColor?: string;
  /** Stats number text color (default: "#111827") */
  statsNumberColor?: string;
  /** Stats label text color (default: "#4B5563") */
  statsLabelColor?: string;
  /** Content scrollbar track color (default: "#F3F4F6") */
  scrollbarTrackColor?: string;
  /** Content scrollbar thumb color (default: "#1E90FF") */
  scrollbarThumbColor?: string;
  /** Confirmation modal overlay background (default: "rgba(0, 0, 0, 0.7)") */
  confirmOverlayBg?: string;
  /** Confirmation header gradient start (default: "#EF4444") */
  confirmHeaderBgFrom?: string;
  /** Confirmation header gradient end (default: "#DC2626") */
  confirmHeaderBgTo?: string;
  /** Confirmation header text color (default: "#FFFFFF") */
  confirmHeaderTextColor?: string;
  /** Confirmation content text color (default: "#111827") */
  confirmTextColor?: string;
  /** Confirmation footer background (default: "#F9FAFB") */
  confirmFooterBg?: string;
  /** Continue editing button border color (default: "#1E90FF") */
  continueBtnBorder?: string;
  /** Continue editing button text color (default: "#1E90FF") */
  continueBtnColor?: string;
  /** Continue editing button hover background (default: "#1E90FF") */
  continueBtnHoverBg?: string;
  /** Continue editing button hover text color (default: "#FFFFFF") */
  continueBtnHoverColor?: string;
  /** Discard button gradient start (default: "#EF4444") */
  discardBtnBgFrom?: string;
  /** Discard button gradient end (default: "#DC2626") */
  discardBtnBgTo?: string;
  /** Discard button text color (default: "#FFFFFF") */
  discardBtnColor?: string;
}
