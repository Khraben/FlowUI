'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { LanguageSelectorProps } from './models/LanguageSelector.interface';
import {
  LANGUAGE_SELECTOR_BUTTON_SIZES,
  LANGUAGE_SELECTOR_FLAG_SIZES,
  LANGUAGE_SELECTOR_BUTTON_BASE,
  LANGUAGE_SELECTOR_DROPDOWN_BASE,
  LANGUAGE_SELECTOR_ITEM_BASE,
  LANGUAGE_SELECTOR_FLAG_CONTAINER,
  LANGUAGE_SELECTOR_FLAG_SCALE,
  LANGUAGE_SELECTOR_CHECK_ICON,
  LANGUAGE_SELECTOR_DROPDOWN_OFFSET,
  ALL_LANGUAGES,
  DEFAULT_AVAILABLE_LANGUAGES,
  DEFAULT_SELECTED_LANGUAGE,
  LANGUAGE_SELECTOR_DISPLAY_NAME,
} from '@/app/constants';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { adjustOpacity, getContrastColor, lightenColor } from '@/app/utils/colorUtils';

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

    // Use default colors if not provided
    const colorConfig = colors || DEFAULT_COLOR_CONFIG;

    // Calculate dynamic colors
    const selectorColors = useMemo(() => {
      const defaultButtonBg = lightenColor(colorConfig.secondary, 70);
      const buttonBg = customBgColor || defaultButtonBg;
      const buttonBorder = customBorderColor || colorConfig.primary;
      const buttonBorderHover = adjustOpacity(buttonBorder, 0.8);
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

        // Open upward if there's not enough space below but there is above
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

    const buttonSizeClass = LANGUAGE_SELECTOR_BUTTON_SIZES[size];
    const flagSizeClass = LANGUAGE_SELECTOR_FLAG_SIZES[size];

    const buttonClasses = disableDefaultStyles
      ? buttonClassName || ''
      : `${buttonSizeClass} ${LANGUAGE_SELECTOR_BUTTON_BASE} hover:scale-110 focus:outline-none focus:ring-2 ${buttonClassName || ''}`.trim();

    const dropdownClasses = disableDefaultStyles
      ? dropdownClassName || ''
      : `${LANGUAGE_SELECTOR_DROPDOWN_BASE} shadow-lg ${dropdownClassName || ''}`.trim();

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
          className={buttonClasses}
          style={{
            backgroundColor: selectorColors.buttonBg,
            borderColor: selectorColors.buttonBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = selectorColors.buttonBorderHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = selectorColors.buttonBorder;
          }}
          aria-label="Select language"
          title={getLanguageName(currentLanguage)}
        >
          {currentLanguage?.flag && (
            <currentLanguage.flag
              className={`w-full h-full object-cover ${LANGUAGE_SELECTOR_FLAG_SCALE}`}
            />
          )}
        </button>

        {isOpen && (
          <div
            ref={dropdownRef}
            className={dropdownClasses}
            style={{
              position: 'fixed',
              top: dropdownPosition.openUpward
                ? 'auto'
                : `${dropdownPosition.top + LANGUAGE_SELECTOR_DROPDOWN_OFFSET}px`,
              bottom: dropdownPosition.openUpward
                ? `calc(100vh - ${dropdownPosition.top}px + ${LANGUAGE_SELECTOR_DROPDOWN_OFFSET}px)`
                : 'auto',
              left: `${dropdownPosition.left}px`,
              backgroundColor: selectorColors.dropdownBg,
              borderColor: selectorColors.dropdownBorder,
            }}
          >
            {languageEntries.map(([key, lang]) => {
              const isActive = selectedLanguage === key;
              const itemClasses = disableDefaultStyles
                ? itemClassName || ''
                : `${LANGUAGE_SELECTOR_ITEM_BASE} ${isActive ? activeItemClassName || '' : itemClassName || ''}`.trim();

              return (
                <button
                  key={key}
                  onClick={() => handleLanguageChange(key)}
                  className={itemClasses}
                  style={{
                    color: selectorColors.itemText,
                    backgroundColor: isActive ? selectorColors.activeItemBg : 'transparent',
                  }}
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
                  <div
                    className={`${flagSizeClass} ${LANGUAGE_SELECTOR_FLAG_CONTAINER}`}
                    style={{ borderColor: selectorColors.dropdownBorder }}
                  >
                    <lang.flag
                      className={`w-full h-full object-cover ${LANGUAGE_SELECTOR_FLAG_SCALE}`}
                    />
                  </div>
                  <span>{getLanguageName(lang)}</span>
                  {isActive && (
                    <svg
                      className={LANGUAGE_SELECTOR_CHECK_ICON}
                      style={{ color: selectorColors.checkIconColor }}
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
