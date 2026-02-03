'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { LanguageSelectorProps } from './models/LanguageSelector.interface';
import {
  LANGUAGE_SELECTOR_BUTTON_SIZES,
  LANGUAGE_SELECTOR_FLAG_SIZES,
  LANGUAGE_SELECTOR_BUTTON_BASE,
  LANGUAGE_SELECTOR_BUTTON_BORDER,
  LANGUAGE_SELECTOR_DROPDOWN_BASE,
  LANGUAGE_SELECTOR_DROPDOWN_BG,
  LANGUAGE_SELECTOR_DROPDOWN_BORDER,
  LANGUAGE_SELECTOR_DROPDOWN_SHADOW,
  LANGUAGE_SELECTOR_ITEM_BASE,
  LANGUAGE_SELECTOR_ITEM_HOVER,
  LANGUAGE_SELECTOR_ACTIVE_ITEM,
  LANGUAGE_SELECTOR_FLAG_CONTAINER,
  LANGUAGE_SELECTOR_FLAG_BORDER,
  LANGUAGE_SELECTOR_FLAG_SCALE,
  LANGUAGE_SELECTOR_ITEM_TEXT,
  LANGUAGE_SELECTOR_ACTIVE_TEXT,
  LANGUAGE_SELECTOR_CHECK_ICON,
  LANGUAGE_SELECTOR_DROPDOWN_OFFSET,
  ALL_LANGUAGES,
  DEFAULT_AVAILABLE_LANGUAGES,
  DEFAULT_SELECTED_LANGUAGE,
  LANGUAGE_SELECTOR_DISPLAY_NAME,
} from '@/app/constants';

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
      buttonBorder = LANGUAGE_SELECTOR_BUTTON_BORDER,
      buttonHoverBorder = 'hover:border-primary-700',
      buttonHoverScale = 'hover:scale-110',
      dropdownBg = LANGUAGE_SELECTOR_DROPDOWN_BG,
      dropdownBorder = LANGUAGE_SELECTOR_DROPDOWN_BORDER,
      dropdownShadow = LANGUAGE_SELECTOR_DROPDOWN_SHADOW,
      itemHoverBg = LANGUAGE_SELECTOR_ITEM_HOVER,
      activeItemBg = LANGUAGE_SELECTOR_ACTIVE_ITEM,
      activeItemText = LANGUAGE_SELECTOR_ACTIVE_TEXT,
      itemText = LANGUAGE_SELECTOR_ITEM_TEXT,
      checkIconColor = 'text-primary-600',
      flagBorder = LANGUAGE_SELECTOR_FLAG_BORDER,
      disableDefaultStyles = false,
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

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
      if (isOpen && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom,
          left: rect.left,
        });
      }
    }, [isOpen]);

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
      flag: string;
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
      : `${buttonSizeClass} ${LANGUAGE_SELECTOR_BUTTON_BASE} ${buttonBorder} ${buttonHoverBorder} ${buttonHoverScale} focus:ring-primary-500 bg-white ${buttonClassName || ''}`.trim();

    const dropdownClasses = disableDefaultStyles
      ? dropdownClassName || ''
      : `${LANGUAGE_SELECTOR_DROPDOWN_BASE} ${dropdownBg} ${dropdownBorder} ${dropdownShadow} ${dropdownClassName || ''}`.trim();

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
          aria-label="Select language"
          title={getLanguageName(currentLanguage)}
        >
          <Image
            src={currentLanguage?.flag || '/flags/EN.svg'}
            alt={getLanguageName(currentLanguage)}
            width={64}
            height={64}
            className={`w-full h-full object-cover ${LANGUAGE_SELECTOR_FLAG_SCALE}`}
          />
        </button>

        {isOpen && (
          <div
            ref={dropdownRef}
            className={dropdownClasses}
            style={{
              bottom: `calc(100vh - ${dropdownPosition.top}px + ${LANGUAGE_SELECTOR_DROPDOWN_OFFSET}px)`,
              left: `${dropdownPosition.left}px`,
            }}
          >
            {languageEntries.map(([key, lang]) => {
              const isActive = selectedLanguage === key;
              const itemClasses = disableDefaultStyles
                ? itemClassName || ''
                : `${LANGUAGE_SELECTOR_ITEM_BASE} ${itemHoverBg} ${isActive ? activeItemBg : ''} ${isActive ? activeItemClassName || '' : itemClassName || ''}`.trim();

              return (
                <button key={key} onClick={() => handleLanguageChange(key)} className={itemClasses}>
                  <div
                    className={`${flagSizeClass} ${LANGUAGE_SELECTOR_FLAG_CONTAINER} ${flagBorder}`}
                  >
                    <Image
                      src={lang.flag}
                      alt={getLanguageName(lang)}
                      width={64}
                      height={64}
                      className={`w-full h-full object-cover ${LANGUAGE_SELECTOR_FLAG_SCALE}`}
                    />
                  </div>
                  <span className={isActive ? activeItemText : itemText}>
                    {getLanguageName(lang)}
                  </span>
                  {isActive && (
                    <svg
                      className={`${LANGUAGE_SELECTOR_CHECK_ICON} ${checkIconColor}`}
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
