'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo, CSSProperties } from 'react';
import { LanguageSelectorProps } from './models/LanguageSelector.interface';
import {
  LANGUAGE_SELECTOR_DROPDOWN_OFFSET,
  ALL_LANGUAGES,
  DEFAULT_AVAILABLE_LANGUAGES,
  DEFAULT_SELECTED_LANGUAGE,
  LANGUAGE_SELECTOR_DISPLAY_NAME,
} from '@/app/constants';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { adjustOpacity, getContrastColor, lightenColor } from '@/app/utils/colorUtils';

const getButtonSizeStyles = (size: string): CSSProperties => {
  const sizeMap: Record<string, CSSProperties> = {
    sm: { width: '2rem', height: '2rem' },
    md: { width: '2.5rem', height: '2.5rem' },
    lg: { width: '3rem', height: '3rem' },
  };
  return sizeMap[size] || sizeMap.md;
};

const getFlagSizeStyles = (size: string): CSSProperties => {
  const sizeMap: Record<string, CSSProperties> = {
    sm: { width: '1.5rem', height: '1.5rem' },
    md: { width: '2rem', height: '2rem' },
    lg: { width: '2.5rem', height: '2.5rem' },
  };
  return sizeMap[size] || sizeMap.md;
};

const getButtonBaseStyles = (): CSSProperties => ({
  borderRadius: '9999px',
  overflow: 'hidden',
  transition: 'all 300ms',
  outline: 'none',
  border: '2px solid',
  cursor: 'pointer',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const getDropdownBaseStyles = (): CSSProperties => ({
  position: 'fixed' as const,
  width: '12rem',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  zIndex: 150,
  border: '2px solid',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

const getItemBaseStyles = (): CSSProperties => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '0.75rem 1rem',
  transition: 'background-color 150ms, color 150ms',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.875rem',
  fontWeight: 500,
  textAlign: 'left' as const,
});

const getFlagContainerStyles = (): CSSProperties => ({
  borderRadius: '9999px',
  overflow: 'hidden',
  flexShrink: 0,
  backgroundColor: '#ffffff',
  border: '2px solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const getCheckIconStyles = (): CSSProperties => ({
  width: '1.25rem',
  height: '1.25rem',
  marginLeft: 'auto',
  flexShrink: 0,
});

const getFlagScaleStyles = (size: string): CSSProperties => {
  const scaleMap: Record<string, string> = {
    sm: 'scale(1.2, 1.7)',
    md: 'scale(2, 2.15)',
    lg: 'scale(2.2, 2.65)',
  };
  return {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    transform: scaleMap[size] || scaleMap.md,
  };
};

export const LanguageSelector = React.forwardRef<HTMLButtonElement, LanguageSelectorProps>(
  (
    {
      selectedLanguage = DEFAULT_SELECTED_LANGUAGE,
      onLanguageChange,
      availableLanguages = DEFAULT_AVAILABLE_LANGUAGES as unknown as string[],
      size = 'md',
      buttonClassName,
      dropdownClassName,
      itemClassName,
      activeItemClassName,
      disableDefaultStyles = false,
      colors,
      customBorderColor,
      customBgColor,
      customTextColor,
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({
      top: 0,
      left: 0,
      openUpward: false,
    });
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const colorConfig = colors || DEFAULT_COLOR_CONFIG;

    const selectorColors = useMemo(() => {
      const defaultButtonBg = lightenColor(colorConfig.secondary, 70);
      const buttonBg = customBgColor || defaultButtonBg;
      const textColor = customTextColor || getContrastColor(buttonBg);
      const buttonBorder = customBorderColor || adjustOpacity(textColor, 0.2);
      const buttonBorderHover = colorConfig.accent || colorConfig.primary;
      const buttonBorderFocus = colorConfig.accent || colorConfig.primary;
      const dropdownBg = colorConfig.secondary;
      const dropdownBorder = adjustOpacity(colorConfig.primary, 0.2);
      const itemText = customTextColor || getContrastColor(dropdownBg);
      const itemHoverBg = adjustOpacity(colorConfig.primary, 0.1);
      const activeItemBg = adjustOpacity(colorConfig.primary, 0.15);
      const checkIconColor = colorConfig.primary;

      return {
        buttonBg,
        buttonBorder,
        buttonBorderHover,
        buttonBorderFocus,
        dropdownBg,
        dropdownBorder,
        itemText,
        itemHoverBg,
        activeItemBg,
        checkIconColor,
      };
    }, [colorConfig, customBorderColor, customBgColor, customTextColor]);

    const updateDropdownPosition = useCallback(() => {
      if (isOpen && buttonRef.current && dropdownRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const dropdownHeight = dropdownRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const spaceBelow = viewportHeight - rect.bottom;
        const spaceAbove = rect.top;
        const shouldOpenUpward = spaceBelow < dropdownHeight && spaceAbove > spaceBelow;

        setDropdownPosition({
          top: shouldOpenUpward ? rect.top : rect.bottom,
          left: rect.left,
          openUpward: shouldOpenUpward,
        });
      }
    }, [isOpen]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    useEffect(() => {
      updateDropdownPosition();
    }, [isOpen, updateDropdownPosition]);

    useEffect(() => {
      if (isOpen) {
        window.addEventListener('scroll', updateDropdownPosition, true);
        window.addEventListener('resize', updateDropdownPosition);

        return () => {
          window.removeEventListener('scroll', updateDropdownPosition, true);
          window.removeEventListener('resize', updateDropdownPosition);
        };
      }
    }, [isOpen, updateDropdownPosition]);

    const handleLanguageChange = (langKey: string) => {
      onLanguageChange?.(langKey);
      setIsOpen(false);
    };

    const filteredLanguages = availableLanguages.reduce(
      (acc, langCode) => {
        if (ALL_LANGUAGES[langCode as keyof typeof ALL_LANGUAGES]) {
          acc[langCode] = ALL_LANGUAGES[langCode as keyof typeof ALL_LANGUAGES];
        }
        return acc;
      },
      {} as Record<string, (typeof ALL_LANGUAGES)[keyof typeof ALL_LANGUAGES]>,
    );

    const currentLanguage =
      filteredLanguages[selectedLanguage as keyof typeof filteredLanguages] ||
      Object.values(filteredLanguages)[0];

    const getLanguageName = (lang: {
      name: string | Record<string, string>;
      flag: React.ComponentType<{ className?: string }>;
      code: string;
    }) => {
      if (typeof lang.name === 'string') {
        return lang.name;
      }
      return lang.name[selectedLanguage] || lang.name[Object.keys(lang.name)[0]] || '';
    };
    const languageEntries = Object.entries(filteredLanguages);

    const buttonStyle: CSSProperties = disableDefaultStyles
      ? {}
      : {
          ...getButtonBaseStyles(),
          ...getButtonSizeStyles(size),
          backgroundColor: selectorColors.buttonBg,
          borderColor: selectorColors.buttonBorder,
        };

    const dropdownStyle: CSSProperties = {
      ...getDropdownBaseStyles(),
      top: dropdownPosition.openUpward
        ? 'auto'
        : `${dropdownPosition.top + LANGUAGE_SELECTOR_DROPDOWN_OFFSET}px`,
      bottom: dropdownPosition.openUpward
        ? `calc(100vh - ${dropdownPosition.top}px + ${LANGUAGE_SELECTOR_DROPDOWN_OFFSET}px)`
        : 'auto',
      left: `${dropdownPosition.left}px`,
      backgroundColor: selectorColors.dropdownBg,
      borderColor: selectorColors.dropdownBorder,
    };

    const setRefs = useCallback(
      (node: HTMLButtonElement | null) => {
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        buttonRef.current = node;
      },
      [ref],
    );

    return (
      <>
        <button
          ref={setRefs}
          onClick={() => setIsOpen(!isOpen)}
          className={buttonClassName}
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = selectorColors.buttonBorderHover;
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = selectorColors.buttonBorder;
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = selectorColors.buttonBorderFocus;
            e.currentTarget.style.boxShadow = `0 0 0 0.1875rem ${adjustOpacity(selectorColors.buttonBorderFocus, 0.1)}`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = selectorColors.buttonBorder;
            e.currentTarget.style.boxShadow = 'none';
          }}
          aria-label="Select language"
          title={getLanguageName(currentLanguage)}
        >
          {currentLanguage?.flag && (
            <div style={getFlagScaleStyles(size)}>
              <currentLanguage.flag />
            </div>
          )}
        </button>

        {isOpen && (
          <div ref={dropdownRef} className={dropdownClassName} style={dropdownStyle}>
            {languageEntries.map(([key, lang]) => {
              const isActive = selectedLanguage === key;

              const itemStyle: CSSProperties = disableDefaultStyles
                ? {}
                : {
                    ...getItemBaseStyles(),
                    color: selectorColors.itemText,
                    backgroundColor: isActive ? selectorColors.activeItemBg : 'transparent',
                  };

              const flagContainerStyle: CSSProperties = {
                ...getFlagContainerStyles(),
                ...getFlagSizeStyles(size),
                borderColor: selectorColors.dropdownBorder,
              };

              return (
                <button
                  key={key}
                  onClick={() => handleLanguageChange(key)}
                  className={isActive ? activeItemClassName : itemClassName}
                  style={itemStyle}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = selectorColors.itemHoverBg;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <div style={flagContainerStyle}>
                    <div style={getFlagScaleStyles(size)}>
                      <lang.flag />
                    </div>
                  </div>
                  <span>{getLanguageName(lang)}</span>
                  {isActive && (
                    <svg
                      style={{
                        ...getCheckIconStyles(),
                        color: selectorColors.checkIconColor,
                      }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </>
    );
  },
);

LanguageSelector.displayName = LANGUAGE_SELECTOR_DISPLAY_NAME;
