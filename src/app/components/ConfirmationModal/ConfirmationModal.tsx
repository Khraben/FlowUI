import React, { useState, ReactNode, CSSProperties } from 'react';
import { CheckCircle } from 'lucide-react';
import { BaseModal } from '../BaseModal/BaseModal';
import Button from '../Button/Button';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import type { ExtendedColorConfig } from '@/app/types/colors';
import { getContrastColor, adjustOpacity } from '@/app/utils/colorUtils';

const getLoadingContainerStyles = (): CSSProperties => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2.5rem 0',
});

const getMessageStyles = (modalBg: string): CSSProperties => ({
  fontSize: '1rem',
  textAlign: 'center' as const,
  margin: '1.25rem 0',
  lineHeight: 1.5,
  color: adjustOpacity(getContrastColor(modalBg), 0.9),
});

const getButtonContainerStyles = (): CSSProperties => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '0.625rem',
  marginTop: '1.25rem',
});

export interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
  message: string;
  confirmText?: string;
  cancelText?: string;
  loadingContent?: ReactNode;
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
      <>
        <style>{`
          @media (max-width: 480px) {
            .confirm-message {
              font-size: 0.875rem !important;
            }
            .confirm-buttons {
              flex-direction: column !important;
              gap: 0.375rem !important;
            }
          }
        `}</style>
        <BaseModal
          isOpen={true}
          onClose={onClose}
          title="Processing"
          icon={CheckCircle}
          maxWidth="28.125rem"
          colors={colorConfig}
        >
          <div style={getLoadingContainerStyles()}>{loadingContent}</div>
        </BaseModal>
      </>
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

  const modalBg = colorConfig.secondary;

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={confirmText}
      icon={CheckCircle}
      maxWidth="28.125rem"
      colors={colorConfig}
    >
      <p className="confirm-message" style={getMessageStyles(modalBg)}>
        {message}
      </p>
      <div className="confirm-buttons" style={getButtonContainerStyles()}>
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
