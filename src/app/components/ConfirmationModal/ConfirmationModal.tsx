import React, { useState, ReactNode } from 'react';
import { CheckCircle } from 'lucide-react';
import { BaseModal } from '../BaseModal/BaseModal';
import Button from '../Button/Button';
import { PREVIEW_COLORS, STATIC_COLORS } from '@/app/constants';

export interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
  message: string;
  confirmText?: string;
  cancelText?: string;
  loadingContent?: ReactNode;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  loadingContent,
}) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;
  if (loading && loadingContent)
    return (
      <BaseModal
        isOpen={true}
        onClose={onClose}
        title="Processing"
        icon={CheckCircle}
        maxWidth="28.125rem"
        headerBgFrom={PREVIEW_COLORS.PRIMARY}
        headerBgTo={PREVIEW_COLORS.ACCENT}
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
      headerBgFrom={PREVIEW_COLORS.PRIMARY}
      headerBgTo={PREVIEW_COLORS.ACCENT}
    >
      <p className="text-base text-gray-600 text-center my-5 leading-normal max-xs:text-sm">
        {message}
      </p>
      <div className="flex justify-between gap-2.5 mt-5 max-xs:flex-col max-xs:gap-1.5">
        <Button
          variant="secondary"
          onClick={onClose}
          bg={PREVIEW_COLORS.SURFACE_DARK}
          textColor={STATIC_COLORS.LIGHT_TEXT}
          hoverBg={PREVIEW_COLORS.SURFACE_DARK}
        >
          {cancelText}
        </Button>
        <Button
          variant="primary"
          onClick={handleConfirm}
          bg={PREVIEW_COLORS.PRIMARY}
          textColor={PREVIEW_COLORS.WHITE}
          hoverBg={PREVIEW_COLORS.ACCENT}
        >
          {confirmText}
        </Button>
      </div>
    </BaseModal>
  );
};

export default ConfirmationModal;
