import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, AlertTriangle } from 'lucide-react';
import type { BaseModalProps } from './models/BaseModal.interface';
import { MODAL_DEFAULT_TEXTS } from '@/app/constants/components/modal/styles.constants';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { darkenColor, lightenColor, getContrastColor, adjustOpacity } from '@/app/utils/colorUtils';

export const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  title,
  icon: Icon,
  children,
  stats,
  maxWidth = '56.25rem',
  showCloseButton = true,
  hasUnsavedChanges = false,
  texts = MODAL_DEFAULT_TEXTS,
  colors = DEFAULT_COLOR_CONFIG,
  customOverlayBg,
  customModalBg,
}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!isOpen) return null;

  // Compute colors dynamically from the color config
  const overlayBg = customOverlayBg || 'rgba(0, 0, 0, 0.6)';
  const modalBg = customModalBg || darkenColor(colors.secondary, 60);
  const headerBgFrom = colors.primary;
  const headerBgTo = colors.secondary;
  const headerTextColor = getContrastColor(headerBgFrom);
  const closeBtnBg = adjustOpacity(headerTextColor, 0.2);
  const closeBtnHoverBg = adjustOpacity(headerTextColor, 0.3);
  const closeBtnColor = headerTextColor;

  const statsBgFrom = adjustOpacity(headerTextColor, 0.05);
  const statsBgTo = adjustOpacity(headerTextColor, 0.02);
  const statsBorderColor = adjustOpacity(headerTextColor, 0.1);
  const statsNumberColor = getContrastColor(modalBg);
  const statsLabelColor = adjustOpacity(statsNumberColor, 0.7);

  const scrollbarTrackColor = adjustOpacity(statsNumberColor, 0.05);
  const scrollbarThumbColor = adjustOpacity(statsNumberColor, 0.15);

  const confirmOverlayBg = 'rgba(0, 0, 0, 0.7)';
  const dangerColor = colors.danger || darkenColor(colors.accent, 20);
  const confirmHeaderBgFrom = dangerColor;
  const confirmHeaderBgTo = lightenColor(dangerColor, 5);
  const confirmHeaderTextColor = getContrastColor(dangerColor);
  const confirmTextColor = adjustOpacity(getContrastColor(modalBg), 0.9);
  const confirmFooterBg = adjustOpacity(confirmTextColor, 0.05);

  const continueBtnBorder = colors.primary;
  const continueBtnColor = colors.primary;
  const continueBtnHoverBg = colors.primary;
  const continueBtnHoverColor = getContrastColor(colors.primary);
  const discardBtnBgFrom = dangerColor;
  const discardBtnBgTo = lightenColor(dangerColor, 5);
  const discardBtnColor = getContrastColor(dangerColor);

  const handleClose = () => {
    if (hasUnsavedChanges) {
      setShowConfirmation(true);
    } else {
      onClose();
    }
  };

  const handleConfirmClose = () => {
    setShowConfirmation(false);
    onClose();
  };

  const handleCancelClose = () => {
    setShowConfirmation(false);
  };

  const mergedTexts = { ...MODAL_DEFAULT_TEXTS, ...texts };

  const modalContent = (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[1002] p-5"
        style={{ backgroundColor: overlayBg }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="rounded-2xl w-[90%] max-h-[85vh] overflow-hidden shadow-[0_0.625rem_2.5rem_rgba(0,0,0,0.3)] flex flex-col md:w-[95%] md:max-h-[90vh]"
          style={{
            maxWidth,
            backgroundColor: modalBg,
          }}
        >
          <div
            className="flex justify-between items-center p-5 px-[1.875rem] rounded-t-2xl md:p-[0.9375rem] md:px-5"
            style={{
              background: `linear-gradient(to bottom right, ${headerBgFrom}, ${headerBgTo})`,
              color: headerTextColor,
            }}
          >
            <div className="flex items-center gap-[0.9375rem]">
              {Icon && (
                <div className="text-[1.75rem] flex items-center md:text-2xl">
                  <Icon />
                </div>
              )}
              <h2 className="text-2xl font-bold m-0 md:text-xl max-xs:text-lg">{title}</h2>
            </div>
            {showCloseButton && (
              <button
                onClick={handleClose}
                className="border-none text-2xl cursor-pointer p-2 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:rotate-90 max-xs:w-9 max-xs:h-9 max-xs:text-xl"
                style={{
                  backgroundColor: closeBtnBg,
                  color: closeBtnColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = closeBtnHoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = closeBtnBg;
                }}
              >
                <X />
              </button>
            )}
          </div>

          {stats && stats.length > 0 && (
            <div
              className={`flex ${stats.length === 1 ? 'justify-center' : 'justify-around'} p-5 border-b max-xs:p-[0.9375rem] max-xs:px-2.5`}
              style={{
                background: `linear-gradient(to right, ${statsBgFrom}, ${statsBgTo})`,
                borderColor: statsBorderColor,
              }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 flex-col text-center max-xs:gap-2"
                >
                  <div
                    className="text-[2rem] max-xs:text-2xl"
                    style={{
                      color: stat.color || headerBgFrom,
                    }}
                  >
                    {stat.icon && <stat.icon />}
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className="text-2xl font-bold leading-none max-xs:text-xl"
                      style={{ color: statsNumberColor }}
                    >
                      {stat.number}
                    </div>
                    <div
                      className="text-xs uppercase tracking-wide mt-0.5"
                      style={{ color: statsLabelColor }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div
            className="p-[1.5625rem] px-[1.875rem] overflow-y-auto flex-1 md:p-5 max-xs:p-[0.9375rem]"
            style={{
              // @ts-expect-error - CSS custom properties for scrollbar
              '--scrollbar-track': scrollbarTrackColor,
              '--scrollbar-thumb': scrollbarThumbColor,
            }}
            css={{
              '&::-webkit-scrollbar': {
                width: '0.5rem',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'var(--scrollbar-track)',
                borderRadius: '0.75rem',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'var(--scrollbar-thumb)',
                borderRadius: '0.75rem',
              },
            }}
          >
            {children}
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[1003] p-5"
          style={{ backgroundColor: confirmOverlayBg }}
        >
          <div
            className="rounded-2xl w-[90%] max-w-[28.125rem] shadow-[0_10px_40px_rgba(0,0,0,0.4)] overflow-hidden"
            style={{ backgroundColor: modalBg }}
          >
            <div
              className="flex items-center gap-[0.9375rem] p-6 px-[1.875rem]"
              style={{
                background: `linear-gradient(to right, ${confirmHeaderBgFrom}, ${confirmHeaderBgTo})`,
                color: confirmHeaderTextColor,
              }}
            >
              <div className="text-[2rem] flex items-center justify-center">
                <AlertTriangle />
              </div>
              <h3 className="m-0 text-xl font-bold">{mergedTexts.discardChangesTitle}</h3>
            </div>
            <p
              className="p-6 px-[1.875rem] m-0 text-[0.9375rem] leading-relaxed"
              style={{ color: confirmTextColor }}
            >
              {mergedTexts.unsavedChangesWarning}
            </p>
            <div
              className="flex gap-3 p-5 px-[1.875rem] justify-end max-xs:flex-col-reverse"
              style={{ backgroundColor: confirmFooterBg }}
            >
              <button
                onClick={handleCancelClose}
                className="py-2.5 px-5 border-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 max-xs:w-full"
                style={{
                  borderColor: continueBtnBorder,
                  backgroundColor: modalBg,
                  color: continueBtnColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = continueBtnHoverBg;
                  e.currentTarget.style.color = continueBtnHoverColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = modalBg;
                  e.currentTarget.style.color = continueBtnColor;
                }}
              >
                {mergedTexts.continueEditing}
              </button>
              <button
                onClick={handleConfirmClose}
                className="py-2.5 px-5 border-none rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 shadow-[0_0.125rem_0.5rem_rgba(255,107,107,0.3)] hover:-translate-y-0.5 hover:shadow-[0_0.25rem_0.75rem_rgba(255,107,107,0.4)] max-xs:w-full"
                style={{
                  background: `linear-gradient(to right, ${discardBtnBgFrom}, ${discardBtnBgTo})`,
                  color: discardBtnColor,
                }}
              >
                {mergedTexts.discardButton}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return createPortal(modalContent, document.body);
};

export default BaseModal;
