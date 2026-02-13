import React, { useState, CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import type { BaseModalProps } from './models/BaseModal.interface';
import { MODAL_DEFAULT_TEXTS } from '@/app/constants/components/modal/styles.constants';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { darkenColor, getContrastColor, adjustOpacity } from '@/app/utils/colorUtils';

const getOverlayStyles = (overlayBg: string): CSSProperties => ({
  position: 'fixed' as const,
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1002,
  padding: '1.25rem',
  backgroundColor: overlayBg,
});

const getModalContainerStyles = (maxWidth: string, modalBg: string): CSSProperties => ({
  borderRadius: '1rem',
  width: '90%',
  maxWidth,
  maxHeight: '85vh',
  overflow: 'hidden',
  boxShadow: '0 0.625rem 2.5rem rgba(0,0,0,0.3)',
  display: 'flex',
  flexDirection: 'column' as const,
  backgroundColor: modalBg,
});

const getHeaderStyles = (
  headerBgFrom: string,
  headerBgTo: string,
  headerTextColor: string,
): CSSProperties => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.25rem 1.875rem',
  borderRadius: '1rem 1rem 0 0',
  background: `linear-gradient(to bottom right, ${headerBgFrom}, ${headerBgTo})`,
  color: headerTextColor,
});

const getHeaderTitleContainerStyles = (): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.9375rem',
});

const getHeaderIconStyles = (): CSSProperties => ({
  fontSize: '1.75rem',
  display: 'flex',
  alignItems: 'center',
});

const getHeaderTitleStyles = (): CSSProperties => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: 0,
});

const getCloseButtonStyles = (closeBtnBg: string, closeBtnColor: string): CSSProperties => ({
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  padding: '0.5rem',
  borderRadius: '9999px',
  width: '2.5rem',
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 300ms',
  backgroundColor: closeBtnBg,
  color: closeBtnColor,
});

const getStatsContainerStyles = (
  statsCount: number,
  statsBgFrom: string,
  statsBgTo: string,
  statsBorderColor: string,
): CSSProperties => ({
  display: 'flex',
  justifyContent: statsCount === 1 ? 'center' : 'space-around',
  padding: '1.25rem',
  borderBottom: '1px solid',
  background: `linear-gradient(to right, ${statsBgFrom}, ${statsBgTo})`,
  borderColor: statsBorderColor,
});

const getStatItemStyles = (): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  flexDirection: 'column' as const,
  textAlign: 'center' as const,
});

const getStatIconStyles = (color: string): CSSProperties => ({
  fontSize: '2rem',
  color,
});

const getStatContentStyles = (): CSSProperties => ({
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
});

const getStatNumberStyles = (color: string): CSSProperties => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  lineHeight: 1,
  color,
});

const getStatLabelStyles = (color: string): CSSProperties => ({
  fontSize: '0.75rem',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  marginTop: '0.125rem',
  color,
});

const getContentStyles = (): CSSProperties => ({
  padding: '1.5625rem 1.875rem',
  overflowY: 'auto' as const,
  flex: 1,
});

const getConfirmOverlayStyles = (confirmOverlayBg: string): CSSProperties => ({
  position: 'fixed' as const,
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1003,
  padding: '1.25rem',
  backgroundColor: confirmOverlayBg,
});

const getConfirmModalStyles = (modalBg: string): CSSProperties => ({
  borderRadius: '1rem',
  width: '90%',
  maxWidth: '28.125rem',
  boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
  overflow: 'hidden',
  backgroundColor: modalBg,
  padding: '2rem',
});

const getConfirmTitleStyles = (confirmTextColor: string): CSSProperties => ({
  margin: '0 0 0.5rem 0',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: confirmTextColor,
});

const getConfirmTextStyles = (confirmDangerTextColor: string): CSSProperties => ({
  margin: '0 0 1.5rem 0',
  fontSize: '0.9375rem',
  lineHeight: 1.6,
  color: confirmDangerTextColor,
});

const getConfirmFooterStyles = (): CSSProperties => ({
  display: 'flex',
  gap: '0.75rem',
  justifyContent: 'flex-end',
});

const getContinueButtonStyles = (
  modalBg: string,
  continueBtnBorder: string,
  continueBtnColor: string,
): CSSProperties => ({
  padding: '0.625rem 1.25rem',
  border: `1px solid ${continueBtnBorder}`,
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 200ms',
  backgroundColor: modalBg,
  color: continueBtnColor,
});

const getDiscardButtonStyles = (
  modalBg: string,
  discardBtnBorder: string,
  discardBtnColor: string,
): CSSProperties => ({
  padding: '0.625rem 1.25rem',
  border: `1px solid ${discardBtnBorder}`,
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 200ms',
  backgroundColor: modalBg,
  color: discardBtnColor,
});

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

  const overlayBg = customOverlayBg || adjustOpacity(darkenColor(colors.secondary, 80), 0.6);
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

  const confirmOverlayBg = adjustOpacity(darkenColor(colors.secondary, 80), 0.7);
  const dangerColor = colors.danger || darkenColor(colors.accent, 20);
  const confirmTextColor = getContrastColor(modalBg);
  const confirmDangerTextColor = dangerColor;

  const continueBtnBorder = adjustOpacity(confirmTextColor, 0.2);
  const continueBtnColor = confirmTextColor;
  const continueBtnHoverBg = adjustOpacity(confirmTextColor, 0.1);
  const discardBtnBorder = dangerColor;
  const discardBtnColor = dangerColor;
  const discardBtnHoverBg = adjustOpacity(dangerColor, 0.1);

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
      <style>{`
        @media (max-width: 768px) {
          .modal-container {
            width: 95% !important;
            max-height: 90vh !important;
          }
          .modal-header {
            padding: 0.9375rem 1.25rem !important;
          }
          .modal-header-icon {
            font-size: 1.5rem !important;
          }
          .modal-header-title {
            font-size: 1.25rem !important;
          }
          .modal-close-btn {
            width: 2.25rem !important;
            height: 2.25rem !important;
            font-size: 1.25rem !important;
          }
          .modal-stats {
            padding: 0.9375rem 0.625rem !important;
          }
          .modal-stat-item {
            gap: 0.5rem !important;
          }
          .modal-stat-icon {
            font-size: 1.5rem !important;
          }
          .modal-stat-number {
            font-size: 1.25rem !important;
          }
          .modal-content {
            padding: 1.25rem !important;
          }
          .modal-content::-webkit-scrollbar {
            width: 0.5rem;
          }
          .modal-content::-webkit-scrollbar-track {
            background-color: var(--scrollbar-track);
            border-radius: 0.75rem;
          }
          .modal-content::-webkit-scrollbar-thumb {
            background-color: var(--scrollbar-thumb);
            border-radius: 0.75rem;
          }
          .confirm-footer {
            flex-direction: column-reverse !important;
          }
          .confirm-footer button {
            width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .modal-header-title {
            font-size: 1.125rem !important;
          }
          .modal-content {
            padding: 0.9375rem !important;
          }
        }
        .modal-content::-webkit-scrollbar {
          width: 0.5rem;
        }
        .modal-content::-webkit-scrollbar-track {
          background-color: var(--scrollbar-track);
          border-radius: 0.75rem;
        }
        .modal-content::-webkit-scrollbar-thumb {
          background-color: var(--scrollbar-thumb);
          border-radius: 0.75rem;
        }
      `}</style>
      <div style={getOverlayStyles(overlayBg)}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="modal-container"
          style={getModalContainerStyles(maxWidth, modalBg)}
        >
          <div
            className="modal-header"
            style={getHeaderStyles(headerBgFrom, headerBgTo, headerTextColor)}
          >
            <div style={getHeaderTitleContainerStyles()}>
              {Icon && (
                <div className="modal-header-icon" style={getHeaderIconStyles()}>
                  <Icon />
                </div>
              )}
              <h2 className="modal-header-title" style={getHeaderTitleStyles()}>
                {title}
              </h2>
            </div>
            {showCloseButton && (
              <button
                onClick={handleClose}
                className="modal-close-btn"
                style={getCloseButtonStyles(closeBtnBg, closeBtnColor)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = closeBtnHoverBg;
                  e.currentTarget.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = closeBtnBg;
                  e.currentTarget.style.transform = 'rotate(0deg)';
                }}
              >
                <X />
              </button>
            )}
          </div>

          {stats && stats.length > 0 && (
            <div
              className="modal-stats"
              style={getStatsContainerStyles(
                stats.length,
                statsBgFrom,
                statsBgTo,
                statsBorderColor,
              )}
            >
              {stats.map((stat, index) => (
                <div key={index} className="modal-stat-item" style={getStatItemStyles()}>
                  <div
                    className="modal-stat-icon"
                    style={getStatIconStyles(stat.color || headerBgFrom)}
                  >
                    {stat.icon && <stat.icon />}
                  </div>
                  <div style={getStatContentStyles()}>
                    <div
                      className="modal-stat-number"
                      style={getStatNumberStyles(statsNumberColor)}
                    >
                      {stat.number}
                    </div>
                    <div style={getStatLabelStyles(statsLabelColor)}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div
            className="modal-content"
            style={{
              ...getContentStyles(),
              // @ts-expect-error - CSS custom properties for scrollbar
              '--scrollbar-track': scrollbarTrackColor,
              '--scrollbar-thumb': scrollbarThumbColor,
            }}
          >
            {children}
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div style={getConfirmOverlayStyles(confirmOverlayBg)}>
          <div style={getConfirmModalStyles(modalBg)}>
            <h3 style={getConfirmTitleStyles(confirmTextColor)}>
              {mergedTexts.discardChangesTitle}
            </h3>
            <p style={getConfirmTextStyles(confirmDangerTextColor)}>
              {mergedTexts.unsavedChangesWarning}
            </p>
            <div className="confirm-footer" style={getConfirmFooterStyles()}>
              <button
                onClick={handleCancelClose}
                style={getContinueButtonStyles(modalBg, continueBtnBorder, continueBtnColor)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = continueBtnHoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = modalBg;
                }}
              >
                {mergedTexts.continueEditing}
              </button>
              <button
                onClick={handleConfirmClose}
                style={getDiscardButtonStyles(modalBg, discardBtnBorder, discardBtnColor)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = discardBtnHoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = modalBg;
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
