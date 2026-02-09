import React, { useState, ReactNode } from 'react';
import { CheckCircle } from 'lucide-react';
import { BaseModal } from '../BaseModal/BaseModal';
import Button from '../Button/Button';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import type { ExtendedColorConfig } from '@/app/types/colors';

export interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
  message: string;
  confirmText?: string;
  cancelText?: string;
  loadingContent?: ReactNode;

  // New simplified color system
  colors?: ExtendedColorConfig;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  loadingContent,
  colors,
}) => {
  const [loading, setLoading] = useState(false);
  const colorConfig = colors || DEFAULT_COLOR_CONFIG;

  if (!isOpen) return null;
  if (loading && loadingContent)
    return (
      <BaseModal
        isOpen={true}
        onClose={onClose}
        title="Processing"
        icon={CheckCircle}
        maxWidth="28.125rem"
        colors={colorConfig}
      >
        <div className="flex justify-center items-center py-10">{loadingContent}</div>
      </BaseModal>
    );

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm();
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={confirmText}
      icon={CheckCircle}
      maxWidth="28.125rem"
      colors={colorConfig}
    >
      <p className="text-base text-gray-600 text-center my-5 leading-normal max-xs:text-sm">
        {message}
      </p>
      <div className="flex justify-between gap-2.5 mt-5 max-xs:flex-col max-xs:gap-1.5">
        <Button variant="secondary" onClick={onClose} colors={colorConfig}>
          {cancelText}
        </Button>
        <Button variant="primary" onClick={handleConfirm} colors={colorConfig}>
          {confirmText}
        </Button>
      </div>
    </BaseModal>
  );
};

export default ConfirmationModal;
